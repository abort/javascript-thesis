package dynamiccallgraph;

import java.io.IOException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.util.concurrent.Semaphore;
import java.util.function.Predicate;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.apache.commons.io.FilenameUtils;
import org.chromium.sdk.CallFrame;
import org.chromium.sdk.CallbackSemaphore;
import org.chromium.sdk.DebugContext;
import org.chromium.sdk.DebugContext.ContinueCallback;
import org.chromium.sdk.DebugContext.StepAction;
import org.chromium.sdk.DebugEventListener;
import org.chromium.sdk.JavascriptVm;
import org.chromium.sdk.Script;
import org.chromium.sdk.SyncCallback;
import org.chromium.sdk.TextStreamPosition;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.ExpressionStatement;
import org.mozilla.javascript.ast.FunctionCall;
import org.mozilla.javascript.ast.FunctionNode;
import org.mozilla.javascript.ast.IfStatement;
import org.mozilla.javascript.ast.NewExpression;
import org.mozilla.javascript.ast.NodeVisitor;

public class SimpleDebugListener implements DebugEventListener {
    private static final Logger logger = Logger.getLogger(SimpleDebugListener.class.getName());

    private DebugContext savedDebugContext = null;
    private final Semaphore semaphore = new Semaphore(0);
    private Map<CallGraphEntry, Set<CallGraphEntry>> functionsToFunctionCallsMap = new HashMap<>();
    private ASTParser parser = new ASTParser();
    private final SyncCallback synchronizationCallback = new CallbackSemaphore();
    private final ContinueCallback continueCallback = new ContinueDelegate();
    
    // Function calls done
    private final Set<CallFrameNode> functionCallsDone = new HashSet<CallFrameNode>();
    
    private boolean isCalleeAlreadyInMap(final AstNode node) {
	assert(node != null);
	for (Entry<CallGraphEntry, Set<CallGraphEntry>> functionToCallees : functionsToFunctionCallsMap.entrySet()) {
	    final Set<CallGraphEntry> callees = functionToCallees.getValue();
	    for (CallGraphEntry callee : callees) {
		// It already contains a similar callee node
		if (callee.equals(node)) {
		    logger.log(Level.INFO, "callee already found in function call map (" + CallFrameUtil.getSensibleSource(node) + ")");
		    return true;
		}
	    }
	}
	
	return false;
    }
    
    private void handleInitialCallFrame(final CallFrame callFrame, final DebugContext debugContext) throws IOException {
	final AstNode currentNode = getCallFrameNode(callFrame);

	// Store function calls to process later (see if they are natives)
	if (currentNode != null && parser.isFunctionCall(currentNode)) {
	    // Check if the callee is already in the map (this is to prevent the last call frame to add a function call again, even if its already processed, this occurs due to step in)
	    if (!isCalleeAlreadyInMap(currentNode))
		functionCallsDone.add(new CallFrameNode(callFrame, callFrame.getScript().getName(), currentNode));
	}
    }
  
    
    private AstNode getCallFrameNode(final CallFrame frame) throws IOException {
	if (frame == null) return null;
	if (!frame.getScript().hasSource()) return null;

	final AstRoot source = parser.parse(frame.getScript().getSource());
	final TextStreamPosition framePosition = frame.getStatementStartPosition();
	final AstNode frameNode = parser.getFirstStatement(source , CallFrameUtil.calculateAbsolutePosition(frame.getScript().getSource(), framePosition.getLine() + 1, framePosition.getColumn() + 1));
	
	return frameNode;	
    }
    
    private String getCallFrameSource(final CallFrame frame) throws IOException {
	if (frame == null) return null;
	if (!frame.getScript().hasSource()) return null;
	
	return frame.getScript().getSource();
    }
    
    private boolean hasDifferentFunctionParent(final AstNode node, final Script nodeScript, final AstNode otherNode, final Script otherNodeScript) {
	assert(node != null);
	assert(otherNode != null);
	assert(nodeScript != null);
	assert(otherNodeScript != null);
	
	if (!nodeScript.equals(otherNodeScript)) {
	    final FunctionNode functionOfNode = node.getEnclosingFunction();
		final FunctionNode functionOfOtherNode = otherNode.getEnclosingFunction();
		if ((functionOfNode == null && functionOfOtherNode != null) || (functionOfNode != null && functionOfOtherNode == null)) return true;
		else if (functionOfNode == null && functionOfOtherNode == null) return false;
		
		// True per definition; function parents both not null and the scripts differ
		return true;
	}
	else {
	    return hasDifferentFunctionParent(node, otherNode);
	}
    }
    
    private boolean hasDifferentFunctionParent(final AstNode node, final AstNode otherNode) {
	assert(node != null);
	assert(otherNode != null);
	
	final FunctionNode functionOfNode = node.getEnclosingFunction();
	final FunctionNode functionOfOtherNode = otherNode.getEnclosingFunction();
	if ((functionOfNode == null && functionOfOtherNode != null) || (functionOfNode != null && functionOfOtherNode == null)) return true;
	else if (functionOfNode == null && functionOfOtherNode == null) return false;
	
	// Compare positions as equals does not work
	return (functionOfNode.getAbsolutePosition() != functionOfOtherNode.getAbsolutePosition());
    }
    
    private String getFilename(final String scriptName) {
	if (scriptName == null) return null;
	if (scriptName.equals("")) return "";
	
	return FilenameUtils.getName(scriptName);
    }
    
    private void addFunctionCallToMap(final String calleeSource, final AstNode callee, final String calleeScriptName, final AstNode childOfFunction, final String childOfFunctionScriptName) {
	assert(callee != null);
	assert(childOfFunction != null);	
	
	final FunctionNode functionNode = childOfFunction.getEnclosingFunction();
	if (functionNode == null) return;

	final int functionAbsoluteStartPosition = functionNode.getAbsolutePosition() + 1;
	final int functionAbsoluteEndPosition = functionAbsoluteStartPosition + CallFrameUtil.getSensibleSource(functionNode).length() + 1;
	
	final CallGraphEntry functionEntry = new CallGraphEntry(getFilename(childOfFunctionScriptName), functionNode.getLineno(), functionAbsoluteStartPosition, functionAbsoluteEndPosition);
	Set<CallGraphEntry> functionCallsToFunction = functionsToFunctionCallsMap.get(functionEntry);

	if (functionCallsToFunction == null || functionCallsToFunction.isEmpty())
	    functionCallsToFunction = new HashSet<CallGraphEntry>();

	final int calleeAbsoluteStartPosition = callee.getAbsolutePosition() + 1;
	final int calleeAbsoluteEndPosition = calleeAbsoluteStartPosition + CallFrameUtil.getSensibleSource(callee).length() + 1;

	final CallGraphEntry lastFunctionCallEntry = new CallGraphEntry(getFilename(calleeScriptName), CallFrameUtil.getLineNumberByAbsolutePosition(calleeSource, calleeAbsoluteStartPosition), calleeAbsoluteStartPosition, calleeAbsoluteEndPosition);
	functionCallsToFunction.add(lastFunctionCallEntry);
	functionsToFunctionCallsMap.put(functionEntry, functionCallsToFunction);
	
	logger.log(Level.INFO, "added function call to map");
    }
    
    private void handleMultipleCallFrames(final List<? extends CallFrame> callFrames, final DebugContext debugContext) throws IOException {	
	final AstNode currentNode = getCallFrameNode(callFrames.get(0));
	final AstNode previousNode = getCallFrameNode(callFrames.get(1));
	boolean removedLastFunctionCall = false;
	if (previousNode != null && parser.isFunctionCall(previousNode)) {
	    final String calleeSource = getCallFrameSource(callFrames.get(1));
	    if (hasDifferentFunctionParent(previousNode, callFrames.get(1).getScript(), currentNode, callFrames.get(0).getScript())) {
		addFunctionCallToMap(calleeSource, previousNode, callFrames.get(1).getScript().getName(), currentNode, callFrames.get(0).getScript().getName());
		removedLastFunctionCall = functionCallsDone.remove(new CallFrameNode(callFrames.get(1), callFrames.get(1).getScript().getName(), previousNode));
	    }

	    // Same file, last function call is not removed, the previous frame in the stack is a function call and that function call has the same enclosing function (same scope) -> recursion
	    // This does not match on native functions because they are removed from the call stack as previous frame, due to not being the previous call in step in
	    if (!removedLastFunctionCall && callFrames.get(0).getScript().getId().equals(callFrames.get(1).getScript().getId()) && currentNode.getEnclosingFunction().getAbsolutePosition() == previousNode.getEnclosingFunction().getAbsolutePosition()) {
		System.out.println("Either recursive or native: " + CallFrameUtil.getSensibleSource(previousNode));
		addFunctionCallToMap(calleeSource, previousNode, callFrames.get(1).getScript().getName(), currentNode, callFrames.get(0).getScript().getName());
		removedLastFunctionCall = functionCallsDone.remove(new CallFrameNode(callFrames.get(1), callFrames.get(1).getScript().getName(), previousNode));		
	    }
	}
	
	// Store function calls to process later (see if they are natives)
	if (currentNode != null && parser.isFunctionCall(currentNode)) {
	    functionCallsDone.add(new CallFrameNode(callFrames.get(0), callFrames.get(0).getScript().getName(), currentNode));
	}
    }
    
    private void addNativeEntry(final String scriptName, final AstNode functionCall) {
	CallGraphEntry nativeEntry = new CallGraphNativeEntry(parser.getFunctionCallTopExpressionNode(functionCall).getTarget().toSource());
	logger.log(Level.INFO, "Native add: " + CallFrameUtil.getSensibleSource(functionCall));
	Set<CallGraphEntry> functionCallsToFunction = functionsToFunctionCallsMap.get(nativeEntry);
	if (functionCallsToFunction == null || functionCallsToFunction.isEmpty()) 
		functionCallsToFunction = new HashSet<CallGraphEntry>();
	final CallGraphEntry lastFunctionCallEntry = new CallGraphEntry(getFilename(scriptName), functionCall.getLineno(), functionCall.getAbsolutePosition() + 1, functionCall.getAbsolutePosition() + CallFrameUtil.getSensibleSource(functionCall).length() + 1);
	functionCallsToFunction.add(lastFunctionCallEntry);
	functionsToFunctionCallsMap.put(nativeEntry, functionCallsToFunction);
    }    
    
    public void processNativeCalls() throws IOException {
	for (CallFrameNode callNode : functionCallsDone) {
	    // TODO check if they are really native with javascript vm
	    addNativeEntry(callNode.getScriptName(), callNode.getNode());
	}
    }

    public void printDynamicCallGraph() throws IOException {	
	processNativeCalls();
	
	for (CallGraphEntry function : functionsToFunctionCallsMap.keySet()) {
	    for (CallGraphEntry functionCall : functionsToFunctionCallsMap.get(function)) {
		System.out.printf("%s -> %s\n", functionCall.toString(), function.toString()); // reverse the string, function call -> function
	    }
	}
    }
    
    public int getDynamicCallGraphSize() throws IOException {
	processNativeCalls();
	return getDynamicCallGraphNonNativeSize();
    }

    public int getDynamicCallGraphNonNativeSize() {
	int size = 0;
	for (CallGraphEntry function : functionsToFunctionCallsMap.keySet()) {
	    size += functionsToFunctionCallsMap.get(function).size();
	}
	return size;
    }
    
    private void outputCallFrames(final List<? extends CallFrame> callFrames) throws IOException {
	int i = 0;
	for (CallFrame frame : callFrames) {
	   System.out.println("Frame #" + (i++) + ": " + CallFrameUtil.getSensibleSource(getCallFrameNode(frame)) +  " (" + (frame.getStatementStartPosition().getLine() + 1) + ")");
	}	
    }
    
    
    @Override
    public void suspended(DebugContext debugContext) {
	// System.out.println("Suspended");
	// TODO add breakpoints for EACH statement on load or initially
	// TODO on suspend determine if we have a new call stack, then add it to
	// a data structure
	savedDebugContext = debugContext;
	if (debugContext.getCallFrames() == null || debugContext.getCallFrames().size() == 0) return;
	final List<? extends CallFrame> callFrames = debugContext.getCallFrames();
	try {
	    outputCallFrames(callFrames);
	    
	    if (callFrames.size() == 1) handleInitialCallFrame(callFrames.get(0), debugContext);
	    else handleMultipleCallFrames(callFrames, debugContext);
	}
	catch (IOException e) {
	    logger.log(Level.WARNING, "IO Exception: " + e.getMessage());
	}

	savedDebugContext.continueVm(StepAction.IN, 0, continueCallback, synchronizationCallback);
    }

    @Override
    public void disconnected() {
	
    }

    @Override
    public VmStatusListener getVmStatusListener() {
	return null;
    }

    @Override
    public void resumed() {
	// TODO Auto-generated method stub
	// System.out.println("Resume!");
	// vm.suspend(SuspendDelegate.getInstance());
    }

    @Override
    public void scriptCollected(Script arg0) {
	// TODO Auto-generated method stub
	System.out.println("Script collected: " + arg0.toString() + "\n" + arg0.getSource());
    }

    @Override
    public void scriptContentChanged(Script arg0) {
	System.out.println("CHANGED!: " + arg0.getType().toString() + "\n" + arg0.getSource());
    }

    @Override
    public void scriptLoaded(Script arg0) {

	System.out.println("Script loaded (" + arg0.getType() + "): " + arg0.getSource().toString() + " name: " + arg0.getName() + " collected: "
		+ arg0.isCollected());
	// vm.suspend(SuspendDelegate.getInstance());
	try {
	    AstRoot root = parser.parse(arg0.getSource());
	    final AstNode[] node = new AstNode[1];
	    root.visit(new NodeVisitor() {

		@Override
		public boolean visit(AstNode arg0) {
		    if (arg0 instanceof ExpressionStatement || arg0 instanceof IfStatement || arg0 instanceof FunctionCall || arg0 instanceof NewExpression) {
			node[0] = arg0;
			return false;
		    }
		    return true;
		}
	    });
	    if (node[0] == null)
		System.out.println("No node found");
	} catch (IOException e) {
	}
    }

    public Semaphore getSemaphore() {
	return semaphore;
    }
    /*
    private boolean checkNativeFunction() {
	      final JsVariable[] retval = new JsVariable[1];
	      Thread t = new Thread(new Runnable() {
        
        	    @Override
        	    public void run() {
        		lastFrame.getEvaluateContext().evaluateAsync("(debug_value_1 = {a:2})", null, new EvaluateCallback() {
        		    @Override
        		    public void success(JsVariable arg0) {
        			    //System.out.println("var: " + arg0.getValue().getValueString());
        			    retval[0] = arg0;
        		    }
        
        		    @Override
        		    public void failure(String arg0) {
        			    System.out.println("Error: " + arg0);
        		    }
        		}, synchronizationCallback);
        	    }
        	});
	      t.start();
	try {
	      t.join();
	} catch (Exception e) {
	    System.out.println("Failed to acquire semaphore");
	} 		
    }
    
    */
}