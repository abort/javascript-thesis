package dynamiccallgraph;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.InetSocketAddress;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;

import org.chromium.sdk.Breakpoint;
import org.chromium.sdk.CallbackSemaphore;
import org.chromium.sdk.DebugContext.ContinueCallback;
import org.chromium.sdk.DebugContext.StepAction;
import org.chromium.sdk.JavascriptVm;
import org.chromium.sdk.JavascriptVm.BreakpointCallback;
import org.chromium.sdk.JavascriptVm.ScriptsCallback;
import org.chromium.sdk.JsEvaluateContext;
import org.chromium.sdk.JsEvaluateContext.EvaluateCallback;
import org.chromium.sdk.JsVariable;
import org.chromium.sdk.Script;
import org.chromium.sdk.SyncCallback;
import org.chromium.sdk.TabDebugEventListener;
import org.chromium.sdk.UnsupportedVersionException;
import org.chromium.sdk.util.MethodIsBlockingException;
import org.chromium.sdk.wip.WipBackend;
import org.chromium.sdk.wip.WipBackendFactory;
import org.chromium.sdk.wip.WipBrowser;
import org.chromium.sdk.wip.WipBrowserFactory;
import org.chromium.sdk.wip.WipBrowserTab;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.FunctionCall;
import org.mozilla.javascript.ast.FunctionNode;

public class Main {
    // Constants
    private static final int CHROME_DEBUGGING_PORT = 13337;
    private static final String CHROME_DEBUGGING_HOST = "localhost";
    private static final String NEW_LINE_CHARACTER = "\n";
  
    private static final String JAVASCRIPT_NATIVE_FUNCTION_CHECK = "";
    
    private final SyncCallback synchronizationCallback = new CallbackSemaphore();

    public static void main(String[] args) throws Exception {
	new Main().start();
    }

    public void start() throws IOException, MethodIsBlockingException, UnsupportedVersionException, InterruptedException {
	final WipBrowser browser = WipBrowserFactory.INSTANCE.createBrowser(new InetSocketAddress(CHROME_DEBUGGING_HOST, CHROME_DEBUGGING_PORT), new SimpleLoggerFactory());
	final WipBackend backend = new WipBackendFactory().create();
	final TabDebugEventListener listener = new SimpleTabListener();
	final WipBrowserTab tab = browser.getTabs(backend).get(0).attach(listener);
	final JavascriptVm vm = tab.getJavascriptVm();
	final BreakpointCallback bpCallback = new BreakPointDelegate();
        final BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        final EvaluateCallback evaluationCallback = new JavascriptEvaluationDelegate();


	((SimpleDebugListener)listener.getDebugEventListener()).setJavascriptVm(vm);
	
	vm.suspend(SuspendDelegate.getInstance());
	((SimpleDebugListener)listener.getDebugEventListener()).setStarted(true);
	System.out.println("Starting debugging");

	final ASTParser p = new ASTParser();
	for (Script script : getJavaScripts(vm)) {
	    final Breakpoint.Target target = getBreakpointTarget(script);
	    if (script.hasSource()) {
		final AstRoot root = p.parse(script.getSource());
		
		for (AstNode n : p.getFunctionCalls(root)) {
        	    vm.setBreakpoint(target, n.getLineno(), Breakpoint.EMPTY_VALUE, true, null, bpCallback, synchronizationCallback);
		}
		
		for (FunctionNode f : p.getFunctions(root)) {
        	    vm.setBreakpoint(target, f.getBaseLineno(), Breakpoint.EMPTY_VALUE, true, null, bpCallback, synchronizationCallback);
		}
		
		
		/*final String[] sourceLines = script.getSource().split(NEW_LINE_CHARACTER);
        	for (int line = 1; line < sourceLines.length; line++) {
        	    vm.setBreakpoint(target, line, Breakpoint.EMPTY_VALUE, true, null, bpCallback, synchronizationCallback);
        	}*/
	    }
	}

	final SimpleDebugListener simpleDebugger = ((SimpleDebugListener) listener.getDebugEventListener());
	final Semaphore debuggerSemaphore = simpleDebugger.getSemaphore();
	final ContinueCallback continueCallback = new ContinueDelegate();
	
	Thread inputThread = new Thread(new Runnable() {

	    @Override
	    public void run() {
		try {
		    while (true) {
			final String input = reader.readLine();
			if (input.equals("print")) {
			    detectAndAddNativeFunctionCalls(evaluationCallback, simpleDebugger);
			    simpleDebugger.printDynamicCallGraph();
			} else if (input.equals("count") || input.equals("amount")) {
			    detectAndAddNativeFunctionCalls(evaluationCallback, simpleDebugger);
			    System.out.println("dynamic call graph size: " + ((SimpleDebugListener) listener.getDebugEventListener()).getDynamicCallGraphSize());
			} else if (input.equals("clear")) {
			    simpleDebugger.clearCallGraph();
			}
		    }
		} catch (IOException e) {

		}
	    }
	});
	inputThread.start();

	while (simpleDebugger.getStarted()) {
	    debuggerSemaphore.tryAcquire(1, TimeUnit.DAYS);
	    simpleDebugger.getSavedDebugContext().continueVm(StepAction.IN, 0, continueCallback, synchronizationCallback);
	}
    }

    private void detectAndAddNativeFunctionCalls(final EvaluateCallback evaluationCallback, final SimpleDebugListener simpleDebugger) {
	final JsEvaluateContext evaluationContext = simpleDebugger.getSavedDebugContext().getGlobalEvaluateContext();
	final Set<CallFrameNode> callsDone = simpleDebugger.getFunctionCallsDone();
	for (CallFrameNode callFrame : callsDone) {
	    // We processed it
//	    callsDone.remove(callFrame);
	    
	    System.out.println("Potential native: " + CallFrameUtil.getSensibleSource(callFrame.getNode()));
	    
	    final FunctionCall call = ASTParser.getFunctionCallTopExpressionNode(callFrame.getNode());
	    if (call == null) continue;
	    final String callTarget = call.getTarget().toSource();
	    if (callTarget == null || callTarget.equals("")) continue;

	    evaluationContext.evaluateSync(getJavascriptNativeFunctionCheckCode(callTarget), null, evaluationCallback);
	    JsVariable result = ((JavascriptEvaluationDelegate) evaluationCallback).getEvaluationResult();
	    if (extractBooleanFromJavascriptResult(result)) {
		simpleDebugger.addNativeEntry(callFrame.getScriptName(), callFrame.getNode());
	    }
	    else {
		System.out.println("Call frame was not native, probably already processed (" + CallFrameUtil.getSensibleSource(callFrame.getNode()) + ")");
	    }
	}
	
	callsDone.clear();
    }
    
    private boolean extractBooleanFromJavascriptResult(final JsVariable result) {
	if (result == null || result.getValue() == null) return false;
	return Boolean.parseBoolean(result.getValue().getValueString());
    }

    private Breakpoint.Target getBreakpointTarget(final Script script) {
	Breakpoint.Target target;
	if (script.getName() != null) target = new Breakpoint.Target.ScriptName(script.getName());
	else target = new Breakpoint.Target.ScriptId(script.getId());
	return target;
    }
  
    private Set<Script> getJavaScripts(final JavascriptVm vm) {
	final Set<Script> scripts = new HashSet<Script>();

	vm.getScripts(new ScriptsCallback() {
	    @Override
	    public void success(final Collection<Script> foundScripts) {
		for (Script s : foundScripts) {
		    // System.out.println(s.getSource());
		    System.out.println("Added script: " + s.getName());
		    // if (s.getName().startsWith("http://"))
		    scripts.add(s);
		}
	    }

	    @Override
	    public void failure(String error) {
		return;
	    }
	});

	return scripts;
    }
    
    private String getJavascriptNativeFunctionCheckCode(final String functionName) {
	return String.format("!!%s && (typeof %s).toLowerCase() == 'function' && (%s === Function.prototype ||"
		+ " /^\\s*function\\s*(\\b[a-z$_][a-z0-9$_]*\\b)*\\s*\\((|([a-z$_][a-z0-9$_]*)(\\s*,[a-z$_][a-z0-9$_]*)*)\\)\\s*{\\s*\\[native code\\]\\s*}\\s*$/i"
		+ ".test(String(%s)));", functionName, functionName, functionName, functionName);	
    }
}
