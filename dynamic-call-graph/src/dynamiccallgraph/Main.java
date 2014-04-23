package dynamiccallgraph;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;

import org.chromium.sdk.Breakpoint;
import org.chromium.sdk.CallFrame;
import org.chromium.sdk.CallbackSemaphore;
import org.chromium.sdk.ConnectionLogger;
import org.chromium.sdk.DebugContext;
import org.chromium.sdk.DebugContext.ContinueCallback;
import org.chromium.sdk.DebugContext.StepAction;
import org.chromium.sdk.DebugEventListener;
import org.chromium.sdk.JavascriptVm;
import org.chromium.sdk.JavascriptVm.BreakpointCallback;
import org.chromium.sdk.JavascriptVm.ScriptsCallback;
import org.chromium.sdk.JavascriptVm.SuspendCallback;
import org.chromium.sdk.JsEvaluateContext.EvaluateCallback;
import org.chromium.sdk.JsVariable;
import org.chromium.sdk.RelayOk;
import org.chromium.sdk.Script;
import org.chromium.sdk.SyncCallback;
import org.chromium.sdk.TabDebugEventListener;
import org.chromium.sdk.TextStreamPosition;
import org.chromium.sdk.UnsupportedVersionException;
import org.chromium.sdk.util.MethodIsBlockingException;
import org.chromium.sdk.wip.WipBackend;
import org.chromium.sdk.wip.WipBackendFactory;
import org.chromium.sdk.wip.WipBrowser;
import org.chromium.sdk.wip.WipBrowserFactory.LoggerFactory;
import org.chromium.sdk.wip.WipBrowserTab;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.ExpressionStatement;
import org.mozilla.javascript.ast.FunctionCall;
import org.mozilla.javascript.ast.FunctionNode;
import org.mozilla.javascript.ast.IfStatement;
import org.mozilla.javascript.ast.NewExpression;
import org.mozilla.javascript.ast.NodeVisitor;

public class Main {
    private final ASTParser parser = new ASTParser(); 
    private final SyncCallback synchronizationCallback = new CallbackSemaphore();
    private final boolean[] failed = { false };
    private final ContinueCallback continueCallback = new DebugContext.ContinueCallback() {
	@Override
	public void success() {

	}
	@Override
	public void failure(String arg0) {
	    System.out.println("Failed ot step in");
	    failed[0] = true;
	}
    };


    public static void main(String[] args) throws Exception {
	new Main().start();
    }

    public void start() throws IOException, MethodIsBlockingException, UnsupportedVersionException, InterruptedException {
	WipBrowser browser = org.chromium.sdk.wip.WipBrowserFactory.INSTANCE.createBrowser(new InetSocketAddress("localhost", 13337), new MyLoggerFactory());
	WipBackend backend = new WipBackendFactory().create();
	TabDebugEventListener listener = new SimpleTabListener();
	WipBrowserTab tab = browser.getTabs(backend).get(0).attach(listener);
	final JavascriptVm vm = tab.getJavascriptVm();
	final BreakpointCallback bpCallback = new BreakpointCallback() {

	    @Override
	    public void success(Breakpoint arg0) {
		System.out.println("bp added: " + arg0.getLineNumber());

	    }

	    @Override
	    public void failure(String arg0) {
		System.out.println("bp not added: " + arg0);
	    }
	};

	for (Script script : getJavaScripts(vm)) {
	    Breakpoint.Target target;
	    if (script.getName() != null) target = new Breakpoint.Target.ScriptName(script.getName());
	    else target = new Breakpoint.Target.ScriptId(script.getId());

//	    if (script.getName() == null) {
//		System.out.println("src: " + script.getSource());
//	    }
	    
	    /*
	    AstRoot root = parser.parse(script.getSource());
	    Set<AstNode> functions = parser.getFunctions(root);
	    for (AstNode f : functions) {
		// BP to make sure (column number does not matter
	    }*/
	    if (script.hasSource()) {
		int line = 1;
        	for (String lineString : script.getSource().split("\n")) {
        	    vm.setBreakpoint(target, line++, Breakpoint.EMPTY_VALUE, true, null, bpCallback, synchronizationCallback);
        	}
	    }
	    // vm.setBreakpoint(new
	    // Breakpoint.Target.ScriptName(script.getName()), 2,
	    // Breakpoint.EMPTY_VALUE, true, null, bpCallback,
	    // (SyncCallback)synchronizationCallback);
	}

	
	// TODO iterate scripts.... breakpoints on EACH statement
	((SimpleDebugListener) listener.getDebugEventListener()).setJavascriptVm(vm);
	// vm.suspend(SuspendDelegate.getInstance());
	while (true) {
	    //Thread.sleep(1000);
	    /*
	    SuspendDelegate.getInstance().getSemaphore().release();
	    // Initiate the first suspend

	    SuspendDelegate.getInstance().getSemaphore().acquire();
	*/
	    // System.out.println("Before");
	    
	    ((SimpleDebugListener)listener.getDebugEventListener()).getSemaphore().tryAcquire(5, TimeUnit.HOURS);
	    //vm.suspend(SuspendDelegate.getInstance());
	    //((SimpleDebugListener)listener.getDebugEventListener()).getSemaphore().release();
	    /*
	    try {
		RelayOk ok = ((SimpleDebugListener)listener.getDebugEventListener()).savedDebugContext.continueVm(StepAction.IN, 0, continueCallback, synchronizationCallback);
		((CallbackSemaphore)synchronizationCallback).acquireDefault(ok);
	    }
	    catch (Exception e) {
		System.out.println("Exception: " + e.getMessage());
	    }
	    ((SimpleDebugListener)listener.getDebugEventListener()).getSemaphore().release();
	    */
	    /*if (failed[0]) {
		// On failure, just continue
		System.out.println("Failure! Fallback on continue");
		((SimpleDebugListener) listener.getDebugEventListener()).savedDebugContext.continueVm(StepAction.CONTINUE, 0, null, null);
	    }*/
	    
	}
    }

    private class SimpleTabListener implements TabDebugEventListener {
	private DebugEventListener debugListener;

	public SimpleTabListener() {
	    debugListener = new SimpleDebugListener();
	}

	@Override
	public void closed() {
	    System.err.println("tab closed");
	}

	@Override
	public DebugEventListener getDebugEventListener() {
	    return debugListener;
	}

	@Override
	public void navigated(String arg0) {
	    // TODO Auto-generated method stub

	}
    }
    
    private static class SuspendDelegate implements SuspendCallback {
	private static final SuspendDelegate instance;
	private final Semaphore semaphore = new Semaphore(0); 
	
	static {
	    try {
		instance = new SuspendDelegate();
	    }
	    catch (Exception e) {
		throw new RuntimeException("Failed to initialize suspend delegation");
	    }
	}
	
	public static SuspendDelegate getInstance() {
	    return instance;
	}
	
	@Override
	public void success() {
	    System.out.println("Suspend success");
	    semaphore.release();
	}

	@Override
	public void failure(Exception arg0) {
	    System.out.println("exception: " + arg0.toString());
	    semaphore.release();
	}
	
	public Semaphore getSemaphore() {
	    return semaphore;
	}
    }

    private static class CallFrameUtil {
	private static final String NEW_LINE_CHARACTER = "\n";
	
	public static String getCallee(CallFrame frame) {
	    return frame.getFunctionName();
	}
	
	public static int calculateAbsolutePosition(String source, int line, int column) {
	    int abs = 0;
	    int currentLine = 0;
	    final String[] splittedSource = source.split(NEW_LINE_CHARACTER);
	    for (String sourceLine : splittedSource) {
		currentLine++;
		if (currentLine == line) {
		    abs += column;
		    break;
		}
		abs += sourceLine.length();
		abs++; // for the new line char
	    }
	    
	    return (abs > 0 ? abs - 1 : abs);
	}
	
	public static String getSensibleSource(AstNode node) {
	    String source = node.toSource().trim();
	    while (source.endsWith(NEW_LINE_CHARACTER)) source = source.substring(0, source.length() - 2);
	    return source;
	}
    }
    
    
    private class SimpleDebugListener implements DebugEventListener {
	private DebugContext savedDebugContext = null;
	private final Semaphore semaphore = new Semaphore(0);
	private JavascriptVm vm = null;
	private Map<List<String>, String> callSitesToFunctionMap = new HashMap<>();
	private AstNode lastEnclosingFunction = null;

	public void setJavascriptVm(final JavascriptVm vm) {
	    this.vm = vm;
	}
	
	@Override
	public void suspended(DebugContext debugContext) {
	    // System.out.println("Suspended");
	    // TODO add breakpoints for EACH statement on load or initially
	    // TODO on suspend determine if we have a new call stack, then add it to a data structure
	    savedDebugContext = debugContext;
	    if (debugContext.getCallFrames() != null && debugContext.getCallFrames().size() != 0) {
		final List<? extends CallFrame> callFrames = debugContext.getCallFrames();
		final CallFrame lastFrame = callFrames.get(0);
		try {
		    if (lastFrame.getScript().hasSource()) {
			final AstRoot lastSource = parser.parse(lastFrame.getScript().getSource());
			final TextStreamPosition streamPosition = lastFrame.getStatementStartPosition();
			
			final AstNode statement = getFirstStatement(lastSource, CallFrameUtil.calculateAbsolutePosition(lastFrame.getScript().getSource(), streamPosition.getLine() + 1,
					streamPosition.getColumn() + 1));
			if (statement != null) {
			    
			    if (!parser.isFunctionCall(statement)) {
				RelayOk ok = savedDebugContext.continueVm(StepAction.IN, 0, continueCallback, synchronizationCallback);
				// System.out.println("Skipping non function call: " + statement.toSource());
				return;
			    }
			    System.out.print("Call frame #0: " + CallFrameUtil.getSensibleSource(statement) + " (" + statement.getLineno() + "," + statement.getAbsolutePosition()
				    + "," + (statement.getAbsolutePosition() + statement.getLength()) + ") function call: " + parser.isFunctionCall(statement));
			    Map<String, String> map = new HashMap<String, String>();
			    //map.put("f", parser.getTopFunctionCallNode(statement).getTarget().toSource());
		//!!f && (typeof f).toLowerCase() == 'function' && (f === Function.prototype || /^\\s*function\\s*(\\b[a-z$_][a-z0-9$_]*\\b)*\\s*\\((|([a-z$_][a-z0-9$_]*)(\\s*,[a-z$_][a-z0-9$_]*)*)\\)\\s*{\\s*\\[native code\\]\\s*}\\s*$/i.test(String(f)))
			    			    
			    // Add called
			    if (debugContext.getBreakpointsHit() != null && !debugContext.getBreakpointsHit().isEmpty()) {
				if (lastEnclosingFunction != null && !lastEnclosingFunction.equals(statement.getEnclosingFunction()) && statement.getEnclosingFunction() != null) {
				    System.out.print(" new scope: " + statement.getEnclosingFunction().getName() + " (" + (statement.getEnclosingFunction().getLineno() + "," + (statement.getEnclosingFunction().getAbsolutePosition() + 1) + "," + (statement.getEnclosingFunction().getAbsolutePosition() + statement.getEnclosingFunction().getLength() + 1) + ")"));
				}
			    }
			    
				    int statementPosition = statement.getAbsolutePosition();
				    if (lastEnclosingFunction != null && statementPosition >= lastEnclosingFunction.getAbsolutePosition() && statementPosition <= lastEnclosingFunction.getAbsolutePosition() + lastEnclosingFunction.getLength()) {
					System.out.println(" recursive ");
				    }
			    
			    lastEnclosingFunction = statement.getEnclosingFunction();
			}
			else {
			    System.out.println("A.Call Frame #0: " + lastFrame.getScript().getSource().split("\n")[streamPosition.getLine()].substring(streamPosition.getColumn()));
			}
			
			
		    }
		    // RelayOk ok = savedDebugContext.continueVm(StepAction.IN,
		    // 0, continueCallback, synchronizationCallback);

		    if (callFrames.size() > 1) {
			CallFrame callee = callFrames.get(1);
			Script script = callFrames.get(1).getScript();
			AstRoot source = parseScript(script.getSource());
			TextStreamPosition streamPosition = callFrames.get(1).getStatementStartPosition();
			// getFirstStatement(source, CallFrameUtil.calculateAbsolutePosition(script.getSource(), streamPosition.getLine() + 1, streamPosition.getColumn() + 1));
			AstNode statement = parser.getStatementByAbsolutePosition(source, CallFrameUtil.calculateAbsolutePosition(script.getSource(), streamPosition.getLine() + 1, streamPosition.getColumn() + 1));

			// In case its not the entry point (it should not be
			// empty)
			if (statement != null) {
			    System.out.printf("\nCall frame #1: %s (%d,%d,%d)", statement instanceof FunctionNode ? ((FunctionNode)statement).getName() : CallFrameUtil.getSensibleSource(statement), statement.getLineno(), statement.getAbsolutePosition(), (statement.getAbsolutePosition() + statement.getLength()));

			    
			    final FunctionNode wrappingFunction = statement.getEnclosingFunction();
			    String scope = wrappingFunction == null ? "global" : wrappingFunction.getName() + "(" + wrappingFunction.getLineno() + ","
				    + (wrappingFunction.getAbsolutePosition() + 1) + ","
				    + (wrappingFunction.getAbsolutePosition() + 1 + wrappingFunction.getLength()) + ")";
			    System.out.print(" - called by: " + scope.trim());
			}
			
		    }
		    System.out.println("\n");
		    


		} catch (IOException e) {
		    System.out.println("Exception: " + e.getMessage());
		}

	    }
	    else System.out.println("No call frames :)");
	   RelayOk ok = savedDebugContext.continueVm(StepAction.IN, 0, continueCallback, synchronizationCallback);
	   // System.out.println("Counter " + counter);
	   //((CallbackSemaphore)synchronizationCallback).acquireDefault(ok);

	   // semaphore.release();
	}

	@Override
	public void disconnected() {
	    // TODO Auto-generated method stub

	}

	@Override
	public VmStatusListener getVmStatusListener() {
	    return null;
	}

	@Override
	public void resumed() {
	    // TODO Auto-generated method stub
	   //System.out.println("Resume!");
	   //vm.suspend(SuspendDelegate.getInstance());
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
	    
	    System.out.println("Script loaded (" + arg0.getType() + "): " + arg0.getSource().toString() + " name: " + arg0.getName() + " collected: " + arg0.isCollected());
	   //vm.suspend(SuspendDelegate.getInstance());
	   try {
	       AstRoot root = parseScript(arg0.getSource());
	       final AstNode[] node = new AstNode[1]; 
	       root.visit(new NodeVisitor() {
	        
	        @Override
	        public boolean visit(AstNode arg0) {
	    		if (arg0 instanceof ExpressionStatement ||
	    			arg0 instanceof IfStatement || arg0 instanceof FunctionCall ||
	    			arg0 instanceof NewExpression) {
	    		    node[0] = arg0;
	    		    return false;
	    		}
	    		return true;
	        }
	    });
	       if (node[0] == null) System.out.println("No node found");
	   }
	   catch (IOException e) {}
	}
	   

	public Semaphore getSemaphore() {
	    return semaphore;
	}
    }
    
    public static class TextPosition {
	private final int line;
	private final int column;
	private final int offset;
	
	public static final int NO_POSITION = -1;
	
	public TextPosition() {
	    line = NO_POSITION;
	    column = NO_POSITION;
	    offset = NO_POSITION;
	}
	
	public TextPosition(int line, int column, int offset) {
	    this.line = line;
	    this.column = column;
	    this.offset = offset;
	}
	
	public int getLine() {
	    return line;
	}
	
	public int getColumn() {
	    return column;
	}
	
	public int getOffset() {
	    return offset;
	}
	
	public boolean isFilled() {
	    return (line != NO_POSITION && column != NO_POSITION && offset != NO_POSITION);
	}
	
	@Override
	public String toString() {
	    return String.format("(%d, %d, %d)", line, column, offset);
	}
    }
    
    private AstRoot parseScript(String source) throws IOException {
	final AstRoot root = parser.parse(source);
	return root;
    }
    
    public static AstNode getFirstStatement(final AstRoot root, final int absolutePosition) {
	final AstNode[] retval = new AstNode[1]; 
	//final AstNode[] closestSibling = new AstNode[]{ null };
	root.visit(new NodeVisitor() {
	    @Override
	    public boolean visit(AstNode node) {
		// use >= for finding the first adjacent node in case the column is not considered equal
		// System.out.println("Visiting: " + node.toSource());
		// System.out.println("Abs: " + absolutePosition + " current abs: " + node.getAbsolutePosition());
		if (node.getAbsolutePosition() == absolutePosition) {
			retval[0] = node;
		//	System.out.println("we found it! " + node.toSource());
			// Set the column position for the node
		    	return false;
		}
	//	else if (node.getAbsolutePosition() < absolutePosition) closestSibling[0] = node;

		return true;
	    }
	});
	
	if (retval[0] != null) return retval[0];
	return null;
    }
    
    private TextPosition getEnclosingFunctionDeclarationPosition(AstNode root, final AstNode statement) throws IOException {
	final AstNode[] lastFunction = { null };
	final int[] lastAbsolutePosition = { -1 };
	final int[] columnNumber = { -1 };
	root.visit(new NodeVisitor() {
	    
	    @Override
	    public boolean visit(AstNode visitedNode) {
		
		if (visitedNode instanceof FunctionNode) {
		    // System.out.println("Function node");
		    columnNumber[0] = visitedNode.getAbsolutePosition() - lastAbsolutePosition[0] - 1;
		    lastFunction[0] = visitedNode;
		    return true;
		}
		else {
		    lastAbsolutePosition[0] = visitedNode.getAbsolutePosition();
		}
		
		// We know the enclosing function (getenclosingfunction is unreliable)
		if (visitedNode.equals(statement))
		    return false;
		
		return true;
	    }
	});
	// TODO FUNCTION END: node.getEndLineno();
	// TODO COLUMN instead of offset
	//final int[] linePosition = new int[]{-1}; 
	if (lastFunction[0] == null) return new TextPosition();
	return new TextPosition(lastFunction[0].getLineno(), columnNumber[0], lastFunction[0].getAbsolutePosition());
    }

    private Set<Script> getJavaScripts(final JavascriptVm vm) {
	final Set<Script> scripts = new HashSet<Script>();

	vm.getScripts(new ScriptsCallback() {
	    @Override
	    public void success(Collection<Script> arg0) {
		for (Script s : arg0) {
		    // System.out.println(s.getSource());
		    System.out.println("Added script: " + s.getName());
		    // if (s.getName().startsWith("http://"))
		    scripts.add(s);
		}
	    }

	    @Override
	    public void failure(String arg0) {
		return;
	    }
	});

	return scripts;
    }
    

    private class MyLoggerFactory implements LoggerFactory {
	@Override
	public ConnectionLogger newBrowserConnectionLogger() {
	    // TODO Auto-generated method stub
	    return null;
	}

	@Override
	public ConnectionLogger newTabConnectionLogger() {
	    // TODO Auto-generated method stub
	    return null;
	}
    }
}
