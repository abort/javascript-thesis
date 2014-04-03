package dynamiccallgraph;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;

import org.chromium.sdk.Breakpoint;
import org.chromium.sdk.ConnectionLogger;
import org.chromium.sdk.DebugContext;
import org.chromium.sdk.DebugEventListener;
import org.chromium.sdk.JavascriptVm.BreakpointCallback;
import org.chromium.sdk.JavascriptVm.ScriptsCallback;
import org.chromium.sdk.Script;
import org.chromium.sdk.TabDebugEventListener;
import org.chromium.sdk.UnsupportedVersionException;
import org.chromium.sdk.util.MethodIsBlockingException;
import org.chromium.sdk.wip.WipBackend;
import org.chromium.sdk.wip.WipBackendFactory;
import org.chromium.sdk.wip.WipBrowser;
import org.chromium.sdk.wip.WipBrowserFactory.LoggerFactory;
import org.chromium.sdk.wip.WipBrowserTab;


public class Main {
//	public static void main(String[] args) {
//		 Context mContext = Context.enter();
//		 ObservingDebugger observingDebugger = new ObservingDebugger();
//		 mContext.setDebugger(observingDebugger, new Integer(0));
//		 mContext.setGeneratingDebug(true);
//		 mContext.setOptimizationLevel(-1);
//		 
//
//		 Scriptable scope = mContext.initStandardObjects();
//		 Object retval = mContext.evaluateString(scope, "var x = 0;\nfunction go() { x = 3; var y = 10; return x; }\ngo();", "code", 0, null);
//		 mContext.exit();
//		 System.out.println(retval.toString());
//	}
	
	
	public static void main(String[] args) throws IOException, MethodIsBlockingException, UnsupportedVersionException, InterruptedException {
		(new Main()).start();
			
	}
	
	public void start() throws IOException, MethodIsBlockingException, UnsupportedVersionException, InterruptedException {

		WipBrowser browser = org.chromium.sdk.wip.WipBrowserFactory.INSTANCE
				.createBrowser(new InetSocketAddress("localhost", 13337),
						new MyLoggerFactory());
		WipBackend backend = new WipBackendFactory().create();
		TabDebugEventListener listener = new SimpleTabListener();
		WipBrowserTab tab = browser.getTabs(backend).get(0).attach(listener);
		final Set<Script> scripts = new HashSet<Script>();
		tab.getJavascriptVm().getScripts(new ScriptsCallback() {

			@Override
			public void success(Collection<Script> arg0) {
				for (Script s : arg0) {
					System.out.println(s.getSource());
					//if (s.getName().startsWith("http://"))
						scripts.add(s);
				}
			}

			@Override
			public void failure(String arg0) {
				return;
			}
		});

		for (Script s : scripts) {
			tab.getJavascriptVm().setBreakpoint(new Breakpoint.Target.ScriptName(s.getName()), 1, 1, true, null, new BreakpointDelegate(), null);
		}

		((SimpleDebugListener) listener.getDebugEventListener()).getSemaphore().tryAcquire(5, TimeUnit.HOURS);

	}
	
	private class BreakpointDelegate implements BreakpointCallback {

		@Override
		public void failure(String arg0) {
			System.out.println("Failed to add breakpoint " + arg0);			
		}

		@Override
		public void success(Breakpoint arg0) {
			System.out.println("Breakpoint added on file " + arg0.toString());
		}
	}
	
	
	private class ScriptNameOnly extends Breakpoint.Target.ScriptName {
		private final String name;
		
		@Override
		public <R> R accept(Visitor<R> visitor) {
			System.out.println("Visitor: " + visitor.getClass().getSimpleName());
			return visitor.visitScriptName(name);
		}
		
		public ScriptNameOnly(String name) {
			super(name);
			this.name = name;
		}
		
		
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
	
	
	private class SimpleTabListener implements TabDebugEventListener {
		private DebugEventListener debugListener = new SimpleDebugListener();

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
	
	private class SimpleDebugListener implements DebugEventListener {
		DebugContext savedDebugContext;
		final Semaphore semaphore = new Semaphore(0);

		@Override
		public void suspended(DebugContext debugContext) {
			System.out.println("Suspended");
			savedDebugContext = debugContext;
			semaphore.release();
		}
		

		@Override
		public void disconnected() {
			// TODO Auto-generated method stub
			
		}
		@Override
		public VmStatusListener getVmStatusListener() {
			// TODO Auto-generated method stub
			return null;
		}
		@Override
		public void resumed() {
			// TODO Auto-generated method stub
			
		}
		@Override
		public void scriptCollected(Script arg0) {
			// TODO Auto-generated method stub
			System.out.println("Script collected " + arg0.toString());
		}
		@Override
		public void scriptContentChanged(Script arg0) {
			System.out.println(arg0.getType().toString());
		}
		@Override
		public void scriptLoaded(Script arg0) {
			// TODO Auto-generated method stub
			System.out.println("Script loaded (" + arg0.getType() + "):" + arg0.toString());
		}
		
		public Semaphore getSemaphore() {
			return semaphore;
		}
	}

}
