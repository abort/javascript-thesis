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

import org.chromium.sdk.CallFrame;
import org.chromium.sdk.CallbackSemaphore;
import org.chromium.sdk.ConnectionLogger;
import org.chromium.sdk.DebugContext;
import org.chromium.sdk.DebugContext.ContinueCallback;
import org.chromium.sdk.DebugContext.StepAction;
import org.chromium.sdk.DebugEventListener;
import org.chromium.sdk.JavascriptVm;
import org.chromium.sdk.JavascriptVm.ScriptsCallback;
import org.chromium.sdk.JavascriptVm.SuspendCallback;
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
import org.mozilla.javascript.ast.FunctionNode;
import org.mozilla.javascript.ast.NodeVisitor;

public class Main {
    private final ASTParser parser = new ASTParser(); 

    public static void main(String[] args) throws Exception {
	new Main().start();
    }

    public void start() throws IOException, MethodIsBlockingException, UnsupportedVersionException, InterruptedException {
	WipBrowser browser = org.chromium.sdk.wip.WipBrowserFactory.INSTANCE.createBrowser(new InetSocketAddress("localhost", 13337), new MyLoggerFactory());
	WipBackend backend = new WipBackendFactory().create();
	TabDebugEventListener listener = new SimpleTabListener();
	WipBrowserTab tab = browser.getTabs(backend).get(0).attach(listener);
	final JavascriptVm vm = tab.getJavascriptVm();

	((SimpleDebugListener) listener.getDebugEventListener()).setJavascriptVm(vm);
	
	final SyncCallback synchronizationCallback = new CallbackSemaphore();
	final boolean[] failed = { false };
	final ContinueCallback continueCallback = new DebugContext.ContinueCallback() {
		@Override
		public void success() {

		}

		@Override
		public void failure(String arg0) {
		    System.out.println("Failed ot step in");
		    failed[0] = true;
		}
	};
	

	    vm.suspend(SuspendDelegate.getInstance());
	while (true) {
	    /*
	    SuspendDelegate.getInstance().getSemaphore().release();
	    // Initiate the first suspend

	    SuspendDelegate.getInstance().getSemaphore().acquire();
	    */
	    //System.out.println("Before");
	    ((SimpleDebugListener)listener.getDebugEventListener()).getSemaphore().tryAcquire(5, TimeUnit.HOURS);
	    RelayOk ok = ((SimpleDebugListener)listener.getDebugEventListener()).savedDebugContext.continueVm(StepAction.IN, 0, continueCallback, synchronizationCallback);
	    ((CallbackSemaphore)synchronizationCallback).acquireDefault(ok);    
	    if (failed[0]) {
		// On failure, just continue
		System.out.println("Failure! Fallback on continue");
		((SimpleDebugListener) listener.getDebugEventListener()).savedDebugContext.continueVm(StepAction.CONTINUE, 0, null, null);
	    }
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
	    //System.out.println("Suspended");
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
	public static String getCallee(CallFrame frame) {
	    return frame.getFunctionName();
	}
	
    }
    
    private class SimpleDebugListener implements DebugEventListener {
	private DebugContext savedDebugContext = null;
	private final Semaphore semaphore = new Semaphore(0);
	private JavascriptVm vm = null;
	private Map<List<String>, String> callSitesToFunctionMap = new HashMap<>();

	public void setJavascriptVm(final JavascriptVm vm) {
	    this.vm = vm;
	}
	
	@Override
	public void suspended(DebugContext debugContext) {
	    // System.out.println("Suspended");
	    savedDebugContext = debugContext;
	    
	    if (debugContext.getCallFrames() != null && debugContext.getCallFrames().size() != 0) {
		TextPosition position = new TextPosition();

		int last = debugContext.getCallFrames().size() - 1;
		List<? extends CallFrame> callFrames = debugContext.getCallFrames();
		System.out.print("Call frame: " + callFrames.get(0).getFunctionName() + " (" + (callFrames.get(0).getStatementStartPosition().getLine() + 1) + "," + (callFrames.get(0).getStatementStartPosition().getColumn() + 1) + ")");
		//if (callFrames.get(0).)
		if (callFrames.get(0).getScript().hasSource()) {
		    String[] splitted = callFrames.get(0).getScript().getSource().split("\n");
		    TextStreamPosition streamPosition = callFrames.get(0).getStatementStartPosition();
		    position = new TextPosition(streamPosition.getLine(), streamPosition.getColumn(), TextPosition.NO_POSITION);
		    System.out.print(" statement: " + splitted[position.getLine()].substring(position.getColumn()) + " (" + (position.getLine() + 1) + ", "
			    + (position.getColumn() + 1) + ")");
			    

		}
		
		try {
		if (callFrames.size() > 1) {
		    CallFrame callee = callFrames.get(1);
		    Script script = callFrames.get(1).getScript();
		    TextStreamPosition streamPosition = callFrames.get(1).getStatementStartPosition();
		    AstNode statement = getFirstStatement(script.getSource(), new TextPosition(streamPosition.getLine() + 1, streamPosition.getColumn() + 1, TextPosition.NO_POSITION));
		    //System.out.print(" called by: " + callFrames.get(1).getFunctionName() + " (" + (callFrames.get(1).getStatementStartPosition().getLine() + 1) + "," + (callFrames.get(1).getStatementStartPosition().getColumn() + 1) + ")");
		    // In case its not the entry point (it should not be empty)
		    if (statement != null) System.out.print(" called by: " + callee.getFunctionName() + " " + getEnclosingFunctionDeclarationPosition(statement));
		}
		System.out.println();
		}
		catch (IOException e) {
		    System.out.println("Exception: " + e.getMessage());
		}
	    }

	   semaphore.release();
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
	    // System.out.println("Resume!");
	   // vm.suspend(SuspendDelegate.getInstance());
	   // semaphore.release();
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
	    System.out.println("Script loaded (" + arg0.getType() + "): " + arg0.getSource().toString() + " name: " + arg0.getName());
	}

	public Semaphore getSemaphore() {
	    return semaphore;
	}
    }
    
    private class TextPosition {
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
    
    private AstNode getFirstStatement(final String input, final TextPosition position) throws IOException {
	final AstRoot root = parser.parse(input);
	final AstNode[] retval = new AstNode[1]; 
	root.visit(new NodeVisitor() {
	    @Override
	    public boolean visit(AstNode node) {
		// use >= for finding the first adjacent node in case the column is not considered equal
		// System.out.println("Visiting: " + node.toSource());
		if ((position.getLine() == node.getLineno() && node.getPosition() >= position.getColumn()) || node.getAbsolutePosition() == position.getOffset()) {
		    // System.out.println("found statement: " + node.toSource());
		    retval[0] = node;
		    return false;
		}
		return true;
	    }
	});
	
	if (retval[0] != null) return retval[0];
	return null;
    }
    
    private TextPosition getEnclosingFunctionDeclarationPosition(AstNode statement) throws IOException {
	final FunctionNode node = statement.getEnclosingFunction();	
	// TODO FUNCTION END: node.getEndLineno();
	// TODO COLUMN instead of offset
	return new TextPosition(node.getLineno(), node.getPosition(), node.getAbsolutePosition());
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
