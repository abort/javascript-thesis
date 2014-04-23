package dynamiccallgraph;

import java.io.IOException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Semaphore;
import java.util.logging.Level;
import java.util.logging.Logger;

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
    private JavascriptVm vm = null;
    private Map<CallGraphEntry, Set<CallGraphEntry>> functionsToFunctionCallsMap = new HashMap<>();
    private AstNode lastEnclosingFunction = null;
    private ASTParser parser = new ASTParser();
    private final SyncCallback synchronizationCallback = new CallbackSemaphore();
    private final ContinueCallback continueCallback = new ContinueDelegate();
    // Whether the last statement was a function call
    private CallFrame lastCallFrame = null;

    public void setJavascriptVm(final JavascriptVm vm) {
	this.vm = vm;
    }
    
    private void handleInitialCallFrame(final CallFrame callFrame, final DebugContext debugContext) throws IOException {
	final Script frameScript = callFrame.getScript();
	final AstRoot lastSource = parser.parse(frameScript.getSource());
	final TextStreamPosition streamPosition = callFrame.getStatementStartPosition();

	final AstNode statement = parser.getFirstStatement(lastSource, CallFrameUtil.calculateAbsolutePosition(frameScript.getSource(), streamPosition.getLine() + 1, streamPosition.getColumn() + 1));	
	
	System.out.println("Initial callframe: " + CallFrameUtil.getSensibleSource(statement));
    }
    
    private boolean isRecursive(final AstNode functionCall) {
	assert(functionCall != null);
	if (lastEnclosingFunction == null) return false;
    
	final int statementAbsolutePosition = functionCall.getAbsolutePosition();
	final int functionAbsolutePosition = lastEnclosingFunction.getAbsolutePosition();
	final int functionAbsoluteEndPosition = lastEnclosingFunction.getAbsolutePosition() + lastEnclosingFunction.getLength();
   
	return (statementAbsolutePosition >= functionAbsolutePosition && statementAbsolutePosition <= functionAbsoluteEndPosition);	
    }
    
    private AstNode getCallFrameNode(final CallFrame frame) throws IOException {
	if (frame == null) return null;
	if (!frame.getScript().hasSource()) return null;
	
	final AstRoot source = parser.parse(frame.getScript().getSource());
	final TextStreamPosition framePosition = frame.getStatementStartPosition();
	final AstNode frameNode = parser.getFirstStatement(source , CallFrameUtil.calculateAbsolutePosition(frame.getScript().getSource(), framePosition.getLine() + 1, framePosition.getColumn() + 1));
	
	return frameNode;	
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
    
    private void addFunctionCallToMap(final AstNode callee, final String calleeScriptName, final AstNode childOfFunction, final String childOfFunctionScriptName) {
	assert(callee != null);
	assert(childOfFunction != null);	
	
	final FunctionNode functionNode = childOfFunction.getEnclosingFunction();
	if (functionNode == null) return;

	final int functionAbsoluteStartPosition = functionNode.getAbsolutePosition() + 1;
	final int functionAbsoluteEndPosition = functionAbsoluteStartPosition + CallFrameUtil.getSensibleSource(functionNode).length() + 1;
	
	final CallGraphEntry functionEntry = new CallGraphEntry(childOfFunctionScriptName, functionNode.getLineno(), functionAbsoluteStartPosition, functionAbsoluteEndPosition);
	Set<CallGraphEntry> functionCallsToFunction = functionsToFunctionCallsMap.get(functionEntry);

	if (functionCallsToFunction == null || functionCallsToFunction.isEmpty())
	    functionCallsToFunction = new HashSet<CallGraphEntry>();

	final int calleeAbsoluteStartPosition = callee.getAbsolutePosition() + 1;
	final int calleeAbsoluteEndPosition = calleeAbsoluteStartPosition + CallFrameUtil.getSensibleSource(functionNode).length() + 1;

	final CallGraphEntry lastFunctionCallEntry = new CallGraphEntry(calleeScriptName, callee.getLineno(), calleeAbsoluteStartPosition, calleeAbsoluteEndPosition);
	functionCallsToFunction.add(lastFunctionCallEntry);
	functionsToFunctionCallsMap.put(functionEntry, functionCallsToFunction);
	
	logger.log(Level.INFO, "added function call to map");
    }
    
    private void handleMultipleCallFrames(final List<? extends CallFrame> callFrames, final DebugContext debugContext) throws IOException {
	int i = 0;
	for (CallFrame frame : callFrames) {

	   System.out.println("Frame #" + (i++) + ": " + CallFrameUtil.getSensibleSource(getCallFrameNode(frame)) +  " (" + (frame.getStatementStartPosition().getLine() + 1) + ")");
	}
	System.out.println("\n\n");

	
	AstNode previousNode = getCallFrameNode(callFrames.get(1));
	if (previousNode != null && parser.isFunctionCall(previousNode)) {
	    boolean functionCallAddedToMap = false;
	    final AstNode currentNode = getCallFrameNode(callFrames.get(0));
	    if (hasDifferentFunctionParent(previousNode, callFrames.get(1).getScript(), currentNode, callFrames.get(0).getScript())) {
		addFunctionCallToMap(previousNode, callFrames.get(1).getScript().getName(), currentNode, callFrames.get(0).getScript().getName());
		functionCallAddedToMap = true;
	    }
	    
	    // We potentially miss the last native call with this method :)
	    if (!functionCallAddedToMap) {
		if (lastCallFrame != null && !lastCallFrame.equals(callFrames.get(1))) {
		    // Due to StepIn continue the last call frame will be forgotten, thus if we are not in a new scope we certainly called a native function
		    addNativeEntry(lastCallFrame.getScript().getName(), getCallFrameNode(lastCallFrame));
		}
		else {
		    // Potential recursive.....
		    
		}
	    }
	    
	    // TODO detect recursion
	    
	}
	
	// TODO: dont always fill this in
	lastCallFrame = callFrames.get(0);

	/*
	// Add called
	final FunctionNode currentEnclosingFunction = statement.getEnclosingFunction();
	// TODO also check if its the same file... in addition to the position
	if (lastStatementFunctionCall && lastEnclosingFunction != null && lastEnclosingFunction.getAbsolutePosition() != currentEnclosingFunction.getAbsolutePosition()) {
		final int functionAbsolutePosition = currentEnclosingFunction.getAbsolutePosition() + 1;
		final int functionAbsoluteEndPosition = currentEnclosingFunction.getAbsolutePosition() + currentEnclosingFunction.getLength() + 1;
		
	/*	System.out.print("new scope: " + currentEnclosingFunction.getName() + " ("
			+ (currentEnclosingFunction.getLineno() + "," + functionAbsolutePosition + "," + functionAbsoluteEndPosition + ")"));
		// Last statement was a function call and we are in a new scope
	    // TODO insert Last statement entry.....
		logger.log(Level.INFO, "Non native call");

	    final CallGraphEntry functionEntry = new CallGraphEntry(lastFrameScript.getName(), currentEnclosingFunction.getLineno(), functionAbsolutePosition,
		    functionAbsoluteEndPosition);
	    List<CallGraphEntry> functionCallsToFunction = functionsToFunctionCallsMap.get(functionEntry);
	    if (functionCallsToFunction == null || functionCallsToFunction.isEmpty())
		functionCallsToFunction = new ArrayList<CallGraphEntry>();
	    final CallGraphEntry lastFunctionCallEntry = new CallGraphEntry(lastFrameScript.getName(), statement.getLineno(),
		    statement.getAbsolutePosition() + 1, statement.getAbsolutePosition() + CallFrameUtil.getSensibleSource(statement).length() + 1);
	    functionCallsToFunction.add(lastFunctionCallEntry);
	    functionsToFunctionCallsMap.put(functionEntry, functionCallsToFunction);
		logger.log(Level.INFO, "Added call to: " + parser.getFunctionCallTopExpressionNode(lastFunctionCall).getTarget().toString() + " from position: " + lastFunctionCallEntry.toString());
	}
	
	lastStatementFunctionCall = true;
	lastFunctionCall = statement;
	    
	System.out.print("Call frame #0: " + CallFrameUtil.getSensibleSource(statement) + " (" + statement.getLineno() + "," + statement.getAbsolutePosition()
		+ "," + (statement.getAbsolutePosition() + statement.getLength()) + ")");
	
	lastEnclosingFunction = statement.getEnclosingFunction();


	final CallFrame callee = callFrames.get(1);
	final Script calleeScript = callFrames.get(1).getScript();
	AstRoot source = parser.parse(calleeScript.getSource());
	TextStreamPosition calleeStreamPosition = callee.getStatementStartPosition();
	AstNode calleeStatement = parser.getStatementByAbsolutePosition(source,
		CallFrameUtil.calculateAbsolutePosition(calleeScript.getSource(), calleeStreamPosition.getLine() + 1, calleeStreamPosition.getColumn() + 1));
*/
	/*
	if (parser.isFunctionCall(calleeStatement) && initialCall) {
	    // We do not care about the entry point
	    initialCall = false;
	    return;
	}
	*/
	
	// In case its not the entry point (it should not be
	// empty)
	
	/*
	if (calleeStatement != null) {
	    System.out.printf("\nCall frame #1: %s (%d,%d,%d)", calleeStatement instanceof FunctionNode ? ((FunctionNode) calleeStatement).getName()
		    : CallFrameUtil.getSensibleSource(calleeStatement), calleeStatement.getLineno(), calleeStatement.getAbsolutePosition(), (calleeStatement
		    .getAbsolutePosition() + calleeStatement.getLength()));

	    final FunctionNode wrappingFunction = calleeStatement.getEnclosingFunction();
	    String scope = wrappingFunction == null ? "global" : wrappingFunction.getName() + "(" + wrappingFunction.getLineno() + ","
		    + (wrappingFunction.getAbsolutePosition() + 1) + "," + (wrappingFunction.getAbsolutePosition() + 1 + wrappingFunction.getLength()) + ")";
	    System.out.print(" - called by: " + scope.trim());
	}
	System.out.println("\n");
	
	if (callFrames.size() < 3) return;
	final CallFrame callee2 = callFrames.get(2);
	final Script callee2Script = callFrames.get(2).getScript();
	AstRoot source2 = parser.parse(callee2Script.getSource());
	TextStreamPosition callee2StreamPosition = callee2.getStatementStartPosition();
	AstNode callee2Statement = parser.getStatementByAbsolutePosition(source2,
		CallFrameUtil.calculateAbsolutePosition(callee2Script.getSource(), callee2StreamPosition.getLine() + 1, callee2StreamPosition.getColumn() + 1));

	// In case its not the entry point (it should not be
	// empty)
	if (callee2Statement != null) {
	    System.out.printf("\nCall frame #2: %s (%d,%d,%d)", callee2Statement instanceof FunctionNode ? ((FunctionNode) callee2Statement).getName()
		    : CallFrameUtil.getSensibleSource(callee2Statement), callee2Statement.getLineno(), callee2Statement.getAbsolutePosition(), (callee2Statement
		    .getAbsolutePosition() + callee2Statement.getLength()));

	    final FunctionNode wrappingFunction = callee2Statement.getEnclosingFunction();
	    String scope = wrappingFunction == null ? "global" : wrappingFunction.getName() + "(" + wrappingFunction.getLineno() + ","
		    + (wrappingFunction.getAbsolutePosition() + 1) + "," + (wrappingFunction.getAbsolutePosition() + 1 + wrappingFunction.getLength()) + ")";
	    System.out.print(" - called by: " + scope.trim());
	}
	
	*/
    }
    
    private void addNativeEntry(final String scriptName, final AstNode functionCall) {
	CallGraphEntry nativeEntry = new CallGraphNativeEntry(parser.getFunctionCallTopExpressionNode(functionCall).getTarget().toSource());
	logger.log(Level.INFO, "Native add: " + CallFrameUtil.getSensibleSource(lastFunctionCall));
	Set<CallGraphEntry> functionCallsToFunction = functionsToFunctionCallsMap.get(nativeEntry);
	if (functionCallsToFunction == null || functionCallsToFunction.isEmpty()) 
		functionCallsToFunction = new HashSet<CallGraphEntry>();
	final CallGraphEntry lastFunctionCallEntry = new CallGraphEntry(scriptName, functionCall.getLineno(), functionCall.getAbsolutePosition() + 1, functionCall.getAbsolutePosition() + CallFrameUtil.getSensibleSource(functionCall).length() + 1);
	functionCallsToFunction.add(lastFunctionCallEntry);
	functionsToFunctionCallsMap.put(nativeEntry, functionCallsToFunction);
    }    

    private void addNativeEntry(final Script lastFrameScript, final AstNode statement) {
	CallGraphEntry nativeEntry = new CallGraphNativeEntry(parser.getFunctionCallTopExpressionNode(lastFunctionCall).getTarget().toSource());
	logger.log(Level.INFO, "Native add: " + CallFrameUtil.getSensibleSource(lastFunctionCall));
	Set<CallGraphEntry> functionCallsToFunction = functionsToFunctionCallsMap.get(nativeEntry);
	if (functionCallsToFunction == null || functionCallsToFunction.isEmpty()) 
		functionCallsToFunction = new HashSet<CallGraphEntry>();
	final CallGraphEntry lastFunctionCallEntry = new CallGraphEntry(lastFrameScript.getName(), statement.getLineno(), statement.getAbsolutePosition() + 1, statement.getAbsolutePosition() + CallFrameUtil.getSensibleSource(statement).length() + 1);
	functionCallsToFunction.add(lastFunctionCallEntry);
	functionsToFunctionCallsMap.put(nativeEntry, functionCallsToFunction);
    }

    public void printDynamicCallGraph() {
	for (CallGraphEntry function : functionsToFunctionCallsMap.keySet()) {
	    for (CallGraphEntry functionCall : functionsToFunctionCallsMap.get(function)) {
		System.out.printf("%s -> %s\n", functionCall.toString(), function.toString()); // reverse the string, function call -> function
	    }
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