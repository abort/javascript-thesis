package dynamiccallgraph;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.InetSocketAddress;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import org.chromium.sdk.Breakpoint;
import org.chromium.sdk.CallbackSemaphore;
import org.chromium.sdk.JavascriptVm;
import org.chromium.sdk.JavascriptVm.BreakpointCallback;
import org.chromium.sdk.JavascriptVm.ScriptsCallback;
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

public class Main {
    // Constants
    private static final int CHROME_DEBUGGING_PORT = 13337;
    private static final String CHROME_DEBUGGING_HOST = "localhost";
    private static final String NEW_LINE_CHARACTER = "\n";
  
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

	for (Script script : getJavaScripts(vm)) {
	    final Breakpoint.Target target = getBreakpointTarget(script);
	    if (script.hasSource()) {
		final String[] sourceLines = script.getSource().split(NEW_LINE_CHARACTER);
        	for (int line = 1; line < sourceLines.length; line++) {
        	    vm.setBreakpoint(target, line, Breakpoint.EMPTY_VALUE, true, null, bpCallback, synchronizationCallback);
        	}
	    }
	}

        final BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
	while (true) {
	   final String input = reader.readLine();
	   if (input.equals("print")) {
	       ((SimpleDebugListener)listener.getDebugEventListener()).printDynamicCallGraph();
	   }
	   else if (input.equals("count") || input.equals("amount")) {
	       System.out.println("dynamic call graph size: " + ((SimpleDebugListener)listener.getDebugEventListener()).getDynamicCallGraphSize());
	   }
	   else if (input.equals("nonnatives")) {
	       System.out.println("dynamic call graph size: " + ((SimpleDebugListener)listener.getDebugEventListener()).getDynamicCallGraphNonNativeSize());	       
	   }
	}
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
}
