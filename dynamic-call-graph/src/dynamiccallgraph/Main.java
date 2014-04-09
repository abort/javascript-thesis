package dynamiccallgraph;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.*;
import java.util.concurrent.*;

import org.chromium.sdk.*;
import org.chromium.sdk.Breakpoint.Target.ScriptId;
import org.chromium.sdk.DebugContext.StepAction;
import org.chromium.sdk.JavascriptVm.BreakpointCallback;
import org.chromium.sdk.JavascriptVm.ScriptsCallback;
import org.chromium.sdk.util.MethodIsBlockingException;
import org.chromium.sdk.wip.*;
import org.chromium.sdk.wip.WipBrowserFactory.LoggerFactory;

import dynamiccallgraph.BreakPointInfo.Type;


public class Main {
    private Map<Breakpoint, BreakPointInfo> breakpointMap = new HashMap<Breakpoint, BreakPointInfo>();
    
	public static void main(String[] args) throws Exception {
		new Main().start();
	}
	
	public void start() throws IOException, MethodIsBlockingException, UnsupportedVersionException, InterruptedException {
		WipBrowser browser = org.chromium.sdk.wip.WipBrowserFactory.INSTANCE.createBrowser(new InetSocketAddress("localhost", 13337), new MyLoggerFactory());
		WipBackend backend = new WipBackendFactory().create();
		TabDebugEventListener listener = new SimpleTabListener(breakpointMap);
		WipBrowserTab tab = browser.getTabs(backend).get(0).attach(listener);
		
		final Semaphore semaphore = new Semaphore(0);
		semaphore.release();
	    JavascriptVm vm = tab.getJavascriptVm();
	    final Set<Script> scripts = getJavaScripts(vm);
	    
	    ((SimpleDebugListener)listener.getDebugEventListener()).setJavascriptVm(vm);
        
	   // final DebugEventListener debugListener = new SimpleDebugListener(breakpointMap);
	    //((SimpleTabListener)listener).setDebugEventListener(debugListener);
	    
        final BreakpointCallback breakpointDelegate = new BreakpointDelegate(semaphore, breakpointMap);	    
		for (Script s : scripts) {
            vm.setBreakpoint(new Breakpoint.Target.ScriptName(s.getName()), 7, 0, true, null, breakpointDelegate, null);
            semaphore.acquire();
            ((BreakpointDelegate)breakpointDelegate).setPositionOfLastBreakpoint(7, 0, Type.FunctionCall);
            
            vm.setBreakpoint(new Breakpoint.Target.ScriptName(s.getName()), 8, 0, true, null, breakpointDelegate, null);
            semaphore.acquire();
            ((BreakpointDelegate)breakpointDelegate).setPositionOfLastBreakpoint(8, 0, Type.FunctionDeclaration);
            
            vm.setBreakpoint(new Breakpoint.Target.ScriptName(s.getName()), 9, 0, true, null, breakpointDelegate, null);
            semaphore.acquire();
            ((BreakpointDelegate)breakpointDelegate).setPositionOfLastBreakpoint(9, 0, Type.FunctionDeclaration);
         
			vm.setBreakpoint(new Breakpoint.Target.ScriptName(s.getName()), 2, 1, true, null, breakpointDelegate, null);
			semaphore.acquire();
			((BreakpointDelegate)breakpointDelegate).setPositionOfLastBreakpoint(2, 1, Type.FunctionDeclaration);
			
            vm.setBreakpoint(new Breakpoint.Target.ScriptName(s.getName()), 3, 0, true, null, breakpointDelegate, null);
            semaphore.acquire();
            ((BreakpointDelegate)breakpointDelegate).setPositionOfLastBreakpoint(3, 0, Type.FunctionDeclaration);
           
		}
		semaphore.release();
		

		
		while (true) {
		    ((SimpleDebugListener)listener.getDebugEventListener()).getSemaphore().tryAcquire(5, TimeUnit.HOURS);
		    ((SimpleDebugListener)listener.getDebugEventListener()).savedDebugContext.continueVm(StepAction.CONTINUE, 0, null, null);
		}
	}
	
	

	private class BreakpointDelegate implements BreakpointCallback {
	    private final Map<Breakpoint, BreakPointInfo> breakpointMap;
	    private final Semaphore semaphore;
	    private Breakpoint lastAddedBreakpoint = null;

	    
	    public BreakpointDelegate(final Semaphore semaphore, final Map<Breakpoint, BreakPointInfo> breakpointMap) throws InterruptedException {
            this.breakpointMap = breakpointMap;
            this.semaphore = semaphore;
            semaphore.acquire();
        }
	    
		@Override
		public void failure(String arg0) {
			System.out.println("Failed to add breakpoint " + arg0);		
			semaphore.release();
		}

		@Override
		public void success(Breakpoint arg0) {
		    lastAddedBreakpoint = arg0;
			System.out.println("Breakpoint added on file " + arg0.toString());
			semaphore.release();
		}
		
        public void setPositionOfLastBreakpoint(int line, int column, Type type) throws InterruptedException {
            if (lastAddedBreakpoint != null) {
                breakpointMap.put(lastAddedBreakpoint, new BreakPointInfo(line, column, type));
                System.out.println("Added to map");
            }
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
		private DebugEventListener debugListener;
		private final Map<Breakpoint, BreakPointInfo> breakpointMap;

		public SimpleTabListener(final Map<Breakpoint, BreakPointInfo> breakpointMap) {
		    this.breakpointMap = breakpointMap;
		    debugListener = new SimpleDebugListener(breakpointMap);
		}
		
		public void setDebugEventListener(final DebugEventListener listener) {
		    debugListener = listener;
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
	
	private class SimpleDebugListener implements DebugEventListener {
		DebugContext savedDebugContext = null;
		private final Semaphore semaphore = new Semaphore(0);
		private final Map<Breakpoint, BreakPointInfo> breakpointMap;
		private JavascriptVm vm = null;
		private VmStatusListener listener = new VmStatusListener() {
            @Override
            public void busyStatusChanged(String arg0, int arg1) {
                               
            }
        };
		
		
		public void setJavascriptVm(final JavascriptVm vm) {
		    this.vm = vm;
		}
		
		public SimpleDebugListener(final Map<Breakpoint, BreakPointInfo> breakpointMap) {
		    this.breakpointMap = breakpointMap;
		}
		
		@Override
		public void suspended(DebugContext debugContext) {
			System.out.println("Suspended");
//			if (savedDebugContext == null)
//			{
//			    System.out.println("Continue!");
			    savedDebugContext = debugContext;
//			    debugContext.continueVm(StepAction.CONTINUE, 0, null, null);
//			    return;
//			}

			    
			Collection<? extends Breakpoint> hit = debugContext.getBreakpointsHit();
			Iterator<? extends Breakpoint> breakpointsHit = debugContext.getBreakpointsHit().iterator();
			System.out.println("Breakpoints: " + debugContext.getBreakpointsHit().size());
			while (breakpointsHit.hasNext()) {
			    Breakpoint breakpoint = breakpointsHit.next();
			    if (breakpointMap.containsKey(breakpoint)) {
			        System.out.println("We know this breakpoint :): " + breakpointMap.get(breakpoint).toString() + " original line #" + breakpoint.getLineNumber());
			    }
			    else {
			        System.out.println("We do not know this breakpoint :(");
			    }
			}

			// TODO use heuristics of functioncall (returning) and knowing the last visited function expression or declaration. Leaving the scope of a function needs to reset this.
			
			//System.out.println("hit: " + hit.size() + ": line #" + hit.iterator().next().getLineNumber());

			//debugContext.continueVm(StepAction.CONTINUE, arg1, arg2, );

			semaphore.release();
		}
		

		@Override
		public void disconnected() {
			// TODO Auto-generated method stub
			
		}
		@Override
		public VmStatusListener getVmStatusListener() {
			return listener;
		}
		@Override
		public void resumed() {
			// TODO Auto-generated method stub
			
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
		    try {
    		     final BreakpointCallback breakpointDelegate = new BreakpointDelegate(new Semaphore(100, true), breakpointMap);        
    	         vm.setBreakpoint(new Breakpoint.Target.ScriptId(arg0.getId()), 0, 0, true, null, breakpointDelegate, null);
    
    			// TODO Auto-generated method stub
    			System.out.println("Script loaded (" + arg0.getType() + "): " + arg0.getSource().toString() + " name: " + arg0.getName());
    			
    			System.out.println("Collected: " + arg0.isCollected());
    			System.out.println("Id: " + arg0.getId());
		    }
		    catch (InterruptedException e) {
		        
		    }
			// TODO: Get all javascripts and parse new stuff
			/*for (Script s : getJavaScripts(vm)) {
			    System.out.println("Script: " + s.getName() + " src:\n" + s.getSource());
			}*/
		}
		
		public Semaphore getSemaphore() {
			return semaphore;
		}
	}
	

    private Set<Script> getJavaScripts(final JavascriptVm vm) {
        final Set<Script> scripts = new HashSet<Script>();
        vm.getScripts(new ScriptsCallback() {

            @Override
            public void success(Collection<Script> arg0) {
                for (Script s : arg0) {
                    //System.out.println(s.getSource());
                    System.out.println("Added script: " + s.getName());
                    //if (s.getName().startsWith("http://"))
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
	
    private Set<Script> getJavaScripts(final WipBrowserTab tab) {
        return getJavaScripts(tab.getJavascriptVm());
    }
}
