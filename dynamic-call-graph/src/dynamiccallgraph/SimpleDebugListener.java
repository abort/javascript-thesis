package dynamiccallgraph;

import java.io.IOException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.util.concurrent.Semaphore;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.apache.commons.io.FilenameUtils;
import org.chromium.sdk.Breakpoint;
import org.chromium.sdk.CallFrame;
import org.chromium.sdk.CallbackSemaphore;
import org.chromium.sdk.DebugContext;
import org.chromium.sdk.DebugEventListener;
import org.chromium.sdk.JavascriptVm;
import org.chromium.sdk.Script;
import org.chromium.sdk.SyncCallback;
import org.chromium.sdk.TextStreamPosition;
import org.chromium.sdk.DebugContext.ContinueCallback;
import org.chromium.sdk.DebugContext.StepAction;
import org.chromium.sdk.JavascriptVm.BreakpointCallback;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.Block;
import org.mozilla.javascript.ast.FunctionNode;


// TODO: only have breakpoints on function calls and continue after we are done stepping in
public class SimpleDebugListener implements DebugEventListener {
    private static final Logger logger = Logger.getLogger(SimpleDebugListener.class.getName());

    private DebugContext savedDebugContext = null;
    private final Semaphore semaphore = new Semaphore(0);
    private Map<CallGraphEntry, Set<CallGraphEntry>> functionsToFunctionCallsMap = new HashMap<>();
    private ASTParser parser = new ASTParser();
    private final SyncCallback synchronizationCallback = new CallbackSemaphore();
    private JavascriptVm vm = null;
    private boolean started = false;
    private boolean releaseSemaphore = false;
    
    private BreakpointCallback bpCallback = new BreakPointDelegate(); 
    private ContinueCallback continueCallback = new ContinueDelegate();
    
    private Set<FunctionCallNode> processedFunctionCalls = new HashSet<FunctionCallNode>();
    private CallFrameNode lastCalleeAdded = null; // prevent double add of functions
    
    // Function calls done
    private final Set<CallFrameNode> functionCallsDone = new HashSet<CallFrameNode>();
    
    public DebugContext getSavedDebugContext() {
	return savedDebugContext;
    }
    public SimpleDebugListener() {
	// TODO Auto-generated constructor stub
    }
    
    public boolean getStarted() {
	return started;
    }
    
    public void clearCallGraph() {
	functionsToFunctionCallsMap.clear();
    }
    
    // TODO the smallest expression at a position is always evaluated first (due to chaining), we can use this heuristic 
    private boolean isCalleeAlreadyInMap(final String scriptName, final AstNode node) {
	assert(node != null);
	for (Entry<CallGraphEntry, Set<CallGraphEntry>> functionToCallees : functionsToFunctionCallsMap.entrySet()) {
	    final Set<CallGraphEntry> callees = functionToCallees.getValue();
	    for (CallGraphEntry callee : callees) {
		// It already contains a similar callee node
		if (callee.equals(createCallGraphFunctionCallEntry(scriptName, node))) {
		    logger.log(Level.INFO, "callee already found in function call map (" + CallFrameUtil.getSensibleSource(node) + ")");
		    return true;
		}
	    }
	}
	
	return false;
    }
    
    public void setStarted(boolean started) {
	this.started = started;
    }
    
    private void handleInitialCallFrame(final CallFrame callFrame, final DebugContext debugContext) throws IOException {
	final AstNode currentNode = getCallFrameNode(callFrame);
	
	// Store function calls to process later (see if they are natives)
	if (currentNode != null && parser.isFunctionCall(currentNode) &&  !(new CallFrameNode(callFrame, callFrame.getScript().getName(), currentNode).equals(lastCalleeAdded))) {
	    // Check if the callee is already in the map (this is to prevent the last call frame to add a function call again, even if its already processed, this occurs due to step in)
	    final AstNode functionCallNode = ASTParser.getFunctionCallTopExpressionNode(currentNode);
	    if (!isCalleeAlreadyInMap(callFrame.getScript().getName(), functionCallNode)) {
		functionCallsDone.add(new CallFrameNode(callFrame, callFrame.getScript().getName(), functionCallNode));
		lastCalleeAdded = new CallFrameNode(callFrame, callFrame.getScript().getName(), currentNode);
		releaseSemaphore = false;
		debugContext.continueVm(StepAction.CONTINUE, 0, continueCallback, null);
		return;
	    }
	}
	
	releaseSemaphore = true;
    }

    private AstNode getCallFrameNode(final CallFrame frame) throws IOException {
	if (frame == null) return null;
	if (!frame.getScript().hasSource()) return null;

	final AstRoot source = parser.parse(frame.getScript().getSource());
	final TextStreamPosition framePosition = frame.getStatementStartPosition();
	
//	System.out.println("looking for : " + (framePosition.getLine() + 1) + " column: " + (framePosition.getColumn() + 1));
	AstNode frameNode = parser.getStatementByAbsolutePosition(source, CallFrameUtil.calculateAbsolutePosition(frame.getScript().getSource(), framePosition.getLine() + 1, framePosition.getColumn() + 1));
	if (frameNode instanceof Block) {
	    frameNode = (AstNode)((Block)frameNode).getFirstChild();
	}
	
	// TODO: fix
	//final AstNode frameNode = parser.getFirstStatement(source , CallFrameUtil.calculateAbsolutePosition(frame.getScript().getSource(), framePosition.getLine() + 1, framePosition.getColumn() + 1));
	return frameNode;	
    }
    
    private AstNode getCalleeFrameNode(final CallFrame frame) throws IOException {
	if (frame == null || frame.getScript() == null) return null;
	if (!frame.getScript().hasSource()) return null;

	final AstRoot source = parser.parse(frame.getScript().getSource());
	final TextStreamPosition framePosition = frame.getStatementStartPosition();
	final AstNode frameNode = parser.getAccurateFunctionCall(source, CallFrameUtil.calculateAbsolutePosition(frame.getScript().getSource(), framePosition.getLine() + 1, framePosition.getColumn() + 1), framePosition.getLine() + 1, processedFunctionCalls);
	
	// if (frameNode != null) System.out.println("Callee: " + frameNode.toSource());
	return frameNode;	
    }
    
    
    private String getCallFrameSource(final CallFrame frame) throws IOException {
	if (frame == null) return null;
	if (!frame.getScript().hasSource()) return null;
	
	return frame.getScript().getSource();
    }
    
    private boolean hasDifferentFunctionParent(final AstNode node, final Script nodeScript, final AstNode otherNode, final Script otherNodeScript) throws Exception {
	assert(node != null);
	assert(otherNode != null);
	assert(nodeScript != null);
	assert(otherNodeScript != null);
	
	if (!nodeScript.equals(otherNodeScript)) {
	    if (otherNode == null) return false;
	    final FunctionNode functionOfNode = node.getEnclosingFunction();
	    final FunctionNode functionOfOtherNode = otherNode.getEnclosingFunction();
	    if ((functionOfNode == null && functionOfOtherNode != null) || (functionOfNode != null && functionOfOtherNode == null))
		return true;
	    else if (functionOfNode == null && functionOfOtherNode == null)
		return false;
		// True per definition; function parents both not null and the scripts differ
		return true;
	}
	else {
	    return hasDifferentFunctionParent(node, otherNode);
	}
    }
    
    private boolean hasDifferentFunctionParent(final AstNode node, final AstNode otherNode) throws Exception {
	assert(node != null);
	assert(otherNode != null);
	if (node == null || otherNode == null) throw new Exception("missing");
	
	final FunctionNode functionOfNode = node.getEnclosingFunction();
	final FunctionNode functionOfOtherNode = otherNode.getEnclosingFunction();
	if ((functionOfNode == null && functionOfOtherNode != null) || (functionOfNode != null && functionOfOtherNode == null)) return true;
	else if (functionOfNode == null && functionOfOtherNode == null) return false;
	
	// Compare positions as equals does not work
	return (functionOfNode.getAbsolutePosition() != functionOfOtherNode.getAbsolutePosition() &&
		functionOfNode.getEncodedSourceEnd() != functionOfOtherNode.getEncodedSourceEnd());
    }
    
    private String getFilename(final String scriptName) {
	if (scriptName == null) return null;
	if (scriptName.equals("")) return "";
	
	return FilenameUtils.getName(scriptName);
    }
    
    public void addFunctionCallToMap(final String calleeSource, final AstNode callee, final String calleeScriptName, final String childOfFunctionSource, final AstNode childOfFunction, final String childOfFunctionScriptName) {
	assert(callee != null);
	assert(childOfFunction != null);	
	
	final FunctionNode functionNode = childOfFunction.getEnclosingFunction();
	if (functionNode == null) return;

	final int functionAbsoluteStartPosition = functionNode.getEncodedSourceStart();	
	final int functionAbsoluteEndPosition = functionNode.getEncodedSourceEnd(); //functionAbsoluteStartPosition + CallFrameUtil.getSensibleSource(functionNode).length() - 1;

	
	final CallGraphEntry functionEntry = new CallGraphEntry(getFilename(childOfFunctionScriptName), functionNode.getBaseLineno(), functionAbsoluteStartPosition, functionAbsoluteEndPosition);
	Set<CallGraphEntry> functionCallsToFunction = functionsToFunctionCallsMap.get(functionEntry);

	if (functionCallsToFunction == null || functionCallsToFunction.isEmpty())
	    functionCallsToFunction = new HashSet<CallGraphEntry>();

	final int calleeAbsoluteStartPosition = callee.getAbsolutePosition();
	final int calleeAbsoluteEndPosition = calleeAbsoluteStartPosition + CallFrameUtil.getSensibleSource(callee).length();
	
	processedFunctionCalls.add(new FunctionCallNode(callee));

	// System.out.println("Add: " + callee.toSource());
	
	final CallGraphEntry lastFunctionCallEntry = new CallGraphEntry(getFilename(calleeScriptName), CallFrameUtil.getLineNumberByAbsolutePosition(calleeSource, calleeAbsoluteStartPosition), calleeAbsoluteStartPosition, calleeAbsoluteEndPosition);
	functionCallsToFunction.add(lastFunctionCallEntry);
	functionsToFunctionCallsMap.put(functionEntry, functionCallsToFunction);
	
	logger.log(Level.INFO, "added function call to map (from " + CallFrameUtil.getLineNumberByAbsolutePosition(calleeSource, calleeAbsoluteStartPosition) + " to " + functionEntry.getLine());
	
	System.out.println("function call: " + callee.toSource());
    }
    
    private void handleMultipleCallFrames(final List<? extends CallFrame> callFrames, final DebugContext debugContext) throws IOException {	
	final AstNode currentNode = getCallFrameNode(callFrames.get(0));
	final AstNode previousNode = getCalleeFrameNode(callFrames.get(1));

	try {
	    boolean removedLastFunctionCall = false;
	    boolean enteredNewScope = false;
	    final String calleeScriptName = callFrames.get(1).getScript().getName();
	    if (previousNode != null)
		System.out.println("previous node: " + previousNode.toSource());
	    if (previousNode != null && parser.isFunctionCall(previousNode)
		    && !(new CallFrameNode(callFrames.get(1), calleeScriptName, getCallFrameNode(callFrames.get(1))).equals(lastCalleeAdded))) {
		final String calleeSource = getCallFrameSource(callFrames.get(1));
		System.out.println("Check for different parents");
		if (hasDifferentFunctionParent(previousNode, callFrames.get(1).getScript(), currentNode, callFrames.get(0).getScript())) {
		    enteredNewScope = true;
		    System.out.println("diff parents: " + CallFrameUtil.getSensibleSource(currentNode) + " and "
			    + CallFrameUtil.getSensibleSource(previousNode));
		    addFunctionCallToMap(calleeSource, previousNode, callFrames.get(1).getScript().getName(), callFrames.get(0).getScript().getSource(),
			    currentNode, callFrames.get(0).getScript().getName());
		    removedLastFunctionCall = functionCallsDone.remove(new CallFrameNode(callFrames.get(1), callFrames.get(1).getScript().getName(),
			    previousNode));
		    lastCalleeAdded = new CallFrameNode(callFrames.get(1), calleeScriptName, getCallFrameNode(callFrames.get(1)));
		    processedFunctionCalls.add(new FunctionCallNode(previousNode));
		}

		// Same file, last function call is not removed, the previous
		// frame in the stack is a function call and that function call
		// has the same enclosing function (same scope) -> recursion
		// This does not match on native functions because they are
		// removed from the call stack as previous frame, due to not
		// being the previous call in step in
		if (!removedLastFunctionCall && callFrames.get(0).getScript().getId().equals(callFrames.get(1).getScript().getId())
			&& !hasDifferentFunctionParent(currentNode, previousNode)) {
		    System.out.println("Either recursive or native: " + CallFrameUtil.getSensibleSource(previousNode));
		    addFunctionCallToMap(calleeSource, ASTParser.getFunctionCallTopExpressionNode(previousNode), callFrames.get(1).getScript().getName(),
			    callFrames.get(0).getScript().getSource(), currentNode, callFrames.get(0).getScript().getName());
		    removedLastFunctionCall = functionCallsDone.remove(new CallFrameNode(callFrames.get(1), callFrames.get(1).getScript().getName(),
			    previousNode));
		    processedFunctionCalls.add(new FunctionCallNode(previousNode));
		}
	    }

	    // Store function calls to process later (see if they are natives)
	    if (currentNode != null) {
		// We have to do traverse this, because of native call frames
		// getting lost
		// TODO: what about for loops etc (blocks)
		final List<AstNode> calls = parser.getFunctionCallsInScope(currentNode, currentNode.getEnclosingFunction());
		for (AstNode functionCall : calls) {
		    functionCallsDone.add(new CallFrameNode(callFrames.get(0), callFrames.get(0).getScript().getName(), functionCall));
		}

		if (calls.isEmpty() && enteredNewScope) {
		    // we can safely continue to the next breakpoint
		    debugContext.continueVm(StepAction.CONTINUE, 0, continueCallback, null);
		    releaseSemaphore = false;
		    return;
		}
	    }
	}
	catch (Exception e) {
	
	}
	
	releaseSemaphore = true;
    }
    
    public void addNativeEntry(final String scriptName, final AstNode functionCall) {
	CallGraphEntry nativeEntry = new CallGraphNativeEntry(ASTParser.getFunctionCallTopExpressionNode(functionCall).getTarget().toSource());
	logger.log(Level.INFO, "Native add: " + CallFrameUtil.getSensibleSource(functionCall));
	Set<CallGraphEntry> functionCallsToFunction = functionsToFunctionCallsMap.get(nativeEntry);
	if (functionCallsToFunction == null || functionCallsToFunction.isEmpty()) 
		functionCallsToFunction = new HashSet<CallGraphEntry>();
	final CallGraphEntry lastFunctionCallEntry = createCallGraphFunctionCallEntry(scriptName, functionCall);
	functionCallsToFunction.add(lastFunctionCallEntry);
	functionsToFunctionCallsMap.put(nativeEntry, functionCallsToFunction);
    }

    private CallGraphEntry createCallGraphFunctionCallEntry(final String scriptName, final AstNode functionCall) {
	return new CallGraphEntry(getFilename(scriptName), functionCall.getLineno(), functionCall.getAbsolutePosition(), functionCall.getAbsolutePosition() + CallFrameUtil.getSensibleSource(functionCall).length());
    }    

    public Set<CallFrameNode> getFunctionCallsDone() {
	return functionCallsDone;
    }
    
    public void printDynamicCallGraph() throws IOException {
	for (CallGraphEntry function : functionsToFunctionCallsMap.keySet()) {
	    for (CallGraphEntry functionCall : functionsToFunctionCallsMap.get(function)) {
		System.out.printf("%s -> %s\n", functionCall.toString(), function.toString()); // reverse the string, function call -> function
	    }
	}
    }
    
    public int getDynamicCallGraphSize() {
	int size = 0;
	for (CallGraphEntry function : functionsToFunctionCallsMap.keySet()) {
	    size += functionsToFunctionCallsMap.get(function).size();
	}
	return size;
    }
    
    private void outputCallFrames(final List<? extends CallFrame> callFrames) throws IOException {
	int i = 0;
	for (CallFrame frame : callFrames) {
	   System.out.println("Frame #" + (i) + ": " + CallFrameUtil.getSensibleSource(getCallFrameNode(frame)) +  " (" + (frame.getStatementStartPosition().getLine() + 1) + ", " + (frame.getStatementStartPosition().getColumn() + 1) + ")");
	   if (getCallFrameNode(frame) != null) System.out.println("Type #: " + (i++) + getCallFrameNode(frame).getClass().getName());
	}
	
	System.out.println("\n\n");
    }
    
    
    @Override
    public void suspended(DebugContext debugContext) {
	if (!started) return;
	
	// System.out.println("Suspended");
	// TODO add breakpoints for EACH statement on load or initially
	// TODO on suspend determine if we have a new call stack, then add it to
	// a data structure
	savedDebugContext = debugContext;
	if (debugContext.getCallFrames() == null || debugContext.getCallFrames().size() == 0) return;
	final List<? extends CallFrame> callFrames = debugContext.getCallFrames();
	try {
	    // outputCallFrames(callFrames);
	    
	    if (callFrames.size() == 1) handleInitialCallFrame(callFrames.get(0), debugContext);
	    else if (callFrames.size() >= 2) handleMultipleCallFrames(callFrames, debugContext);
	}
	catch (IOException e) {
	    logger.log(Level.WARNING, "IO Exception: " + e.getMessage());
	}
	
	if (releaseSemaphore) semaphore.release();
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
    
    public JavascriptVm getJavascriptVm() {
	return vm;
    }
    
    public void setJavascriptVm(final JavascriptVm vm) {
	this.vm = vm;
    }

    @Override
    public void scriptLoaded(Script script) {
	if (!started) return;

	try {
	    final Breakpoint.Target target = getBreakpointTarget(script);
	    if (!script.hasSource())
		return;
	    final AstRoot root = parser.parse(script.getSource());
	    for (AstNode n : parser.getFunctionCalls(root)) {
		vm.setBreakpoint(target, n.getLineno(), Breakpoint.EMPTY_VALUE, true, null, bpCallback, synchronizationCallback);
	    }

	    for (FunctionNode f : parser.getFunctions(root)) {
		vm.setBreakpoint(target, f.getBaseLineno(), Breakpoint.EMPTY_VALUE, true, null, bpCallback, synchronizationCallback);
	    }
	}
	catch (IOException e) {
	    logger.log(Level.WARNING, "Parsing error on script load", e);
	}
		
	/*
	if (script.hasSource()) {
	    final String[] sourceLines = script.getSource().split("\n");
	    for (int line = 1; line < sourceLines.length; line++) {
		getJavascriptVm().setBreakpoint(target, line, Breakpoint.EMPTY_VALUE, true, null, new BreakPointDelegate(), synchronizationCallback);
	    }
	}
	*/
    }

    private Breakpoint.Target getBreakpointTarget(final Script script) {
	Breakpoint.Target target;
	if (script.getName() != null) target = new Breakpoint.Target.ScriptName(script.getName());
	else target = new Breakpoint.Target.ScriptId(script.getId());
	return target;
    }    
    
    public Semaphore getSemaphore() {
	return semaphore;
    }
}