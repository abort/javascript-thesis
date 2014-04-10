package dynamiccallgraph;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Semaphore;

import org.chromium.sdk.Breakpoint;
import org.chromium.sdk.BrowserFactory;
import org.chromium.sdk.CallbackSemaphore;
import org.chromium.sdk.ConnectionLogger;
import org.chromium.sdk.DebugContext;
import org.chromium.sdk.DebugEventListener;
import org.chromium.sdk.JavascriptVm;
import org.chromium.sdk.JavascriptVm.BreakpointCallback;
import org.chromium.sdk.JavascriptVm.ScriptsCallback;
import org.chromium.sdk.RelayOk;
import org.chromium.sdk.Script;
import org.chromium.sdk.StandaloneVm;
import org.chromium.sdk.SyncCallback;
import org.chromium.sdk.TabDebugEventListener;
import org.chromium.sdk.UnsupportedVersionException;
import org.chromium.sdk.util.MethodIsBlockingException;
import org.chromium.sdk.wip.WipBrowserFactory.LoggerFactory;
import org.chromium.sdk.wip.WipBrowserTab;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;

import dynamiccallgraph.BreakPointInfo.Type;


public class Main {
    private Map<Breakpoint, BreakPointInfo> breakpointMap = new HashMap<Breakpoint, BreakPointInfo>();
    
	public static void main(String[] args) throws Exception {
		new Main().start();
	}
	
	public void start() throws IOException, MethodIsBlockingException, UnsupportedVersionException, InterruptedException {
		//WipBrowser browser = org.chromium.sdk.wip.WipBrowserFactory.INSTANCE.createBrowser(new InetSocketAddress("localhost", 13337), new MyLoggerFactory());
//		WipBackend backend = new WipBackendFactory().create();
		TabDebugEventListener listener = new SimpleTabListener(breakpointMap);
//		WipBrowserTab tab = browser.getTabs(backend).get(0).attach(listener);
		
StandaloneVm standaloneVm =
			    BrowserFactory.getInstance().createStandalone(new InetSocketAddress("localhost", 9222), null);
//			standaloneVm.attach(listener);
			JavascriptVm javascriptVm =  standaloneVm;
		
		// ChromeDevToolsHandshakeCRLF
		// t.attach(listener);
		
		
		Thread.sleep(100000);
/*
		
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
		*/
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
		private boolean hadEntryPoint = false;
		private final ASTParser parser = new ASTParser();
		private VmStatusListener listener = new VmStatusListener() {
            @Override
            public void busyStatusChanged(String arg0, int arg1) {
                               
            }
        };
        private Set<Thread> threads = new HashSet<>();
		
		
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
    			// TODO Auto-generated method stub
//				if (!threads.isEmpty()) {
//					for (Thread t : threads) {
//						if (!t.isAlive()) threads.remove(t);
//						else {
//							while (t.isAlive()) Thread.sleep(100);
//						}
//					}
//				}
				
    			System.out.println("Script loaded (" + arg0.getType() + "): " + arg0.getSource().toString() + " name: " + arg0.getName());
//    			
//    			System.out.println("Collected: " + arg0.isCollected());
//    			System.out.println("Id: " + arg0.getId());
    			//final Script script = arg0;
    			
    			Thread t = new Thread(new Runnable() {
					
					@Override
					public void run() {
						for (Script s : getJavaScripts(vm)) {
							try {
								final AstRoot root = parser.parse(s.getSource());
			    				List<AstNode> functions = parser.getFunctions(root);
			    				List<AstNode> calls = parser.getFunctionCalls(root);
			    				
			    				for (final AstNode f : functions) {
			    					System.out.println("Add breakpoint for: " + f.toSource());
				    				final LogicCallback logicCallback = new LogicCallback();
				    				final SyncCallback syncCallback = new CallbackSemaphore();
				    				Breakpoint.Target target;
				    				if (s.getName() == null) target = new Breakpoint.Target.ScriptId(s.getId());
				    				else target = new Breakpoint.Target.ScriptName(s.getName());
				    				
				    				RelayOk ok = vm.setBreakpoint(target, f.getLineno(), f.getPosition(), true, null, logicCallback, syncCallback);
				    				((CallbackSemaphore)syncCallback).acquireDefault(ok);			    				
				    				breakpointMap.put(logicCallback.result, new BreakPointInfo(f.getLineno(), f.getPosition(), Type.FunctionDeclaration));
			    				}

			    				for (final AstNode c : calls) {
			    					System.out.println("Add breakpoint for: " + c.toSource() + " line #" + c.getLineno() + " column #" + c.getPosition() + 1);
				    				final LogicCallback logicCallback = new LogicCallback();
				    				final SyncCallback syncCallback = new CallbackSemaphore();
				    				Breakpoint.Target target;
				    				if (s.getName() == null) target = new Breakpoint.Target.ScriptId(s.getId());
				    				else target = new Breakpoint.Target.ScriptName(s.getName());
				    				RelayOk ok = vm.setBreakpoint(target, c.getLineno(), c.getPosition() + 1, true, null, logicCallback, syncCallback);
				    				((CallbackSemaphore)syncCallback).acquireDefault(ok);			    				
				    				breakpointMap.put(logicCallback.result, new BreakPointInfo(c.getLineno(), c.getPosition(), Type.FunctionDeclaration));
			    				}			    				
							}
			    			catch(IOException e) {
			    				e.printStackTrace();
			    			}
						}
		    		}
				});
    			t.start();
			}
    			

    			
    			
    			
//    			for (final AstNode call : calls) {
//    				// Global execution scope
//    				
//    				if (call.getEnclosingFunction() == null && arg0.getName() == null) {
//    					
//    				}
//    				else {
//    					final Script script = arg0;
//    					Thread t = new Thread(new BreakPointInsertThread(script, call, vm, breakpointMap));
//    					threads.add(t);
//    					t.start();
//    				}
//    			}
//    			
//				if (!threads.isEmpty()) {
//					for (Thread t : threads) {
//						if (!t.isAlive()) threads.remove(t);
//						else {
//							while (t.isAlive()) Thread.sleep(100);
//						}
//					}
//				}    			
//    			
//    			for (final AstNode f : functions) {
//					final Script script = arg0;
//					Thread t = new Thread(new BreakPointInsertThread(script, f, vm, breakpointMap));
//					threads.add(t);
//					t.start();
//    			}
//    			
//    			System.out.println();
//			}
//			catch (IOException e) {
//				e.printStackTrace();
//			} catch (InterruptedException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
		
		public Semaphore getSemaphore() {
			return semaphore;
		}
	}
	
	class LogicCallback implements BreakpointCallback {
		Breakpoint result = null;

		@Override
		public void success(Breakpoint breakpoint) {
			result = breakpoint;
		}

		@Override
		public void failure(String errorMessage) {
			if (!errorMessage.equals("[Breakpoint at specified location already exists.]"))
				System.out.println("Error: " + errorMessage);
		}
	};
	

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
    
    private class BreakPointInsertThread implements Runnable {
    	private final Script script;
    	private final AstNode function;
    	private final JavascriptVm vm;
    	private final Map<Breakpoint, BreakPointInfo> breakpointMap;
    	
    	public BreakPointInsertThread(final Script script, final AstNode function, final JavascriptVm vm, final Map<Breakpoint, BreakPointInfo> breakpointMap) {
    		this.script = script;
    		this.function = function;
    		this.vm = vm;
    		this.breakpointMap = breakpointMap;
    	}
    	
		@Override
		public void run() {
				System.out.println("Adding point to script");
//				Semaphore sem = new Semaphore(0);
//				sem.release();
				//final BreakpointCallback breakpointDelegate = new BreakpointDelegate(sem, breakpointMap);
				final LogicCallback logicCallback = new LogicCallback();
				final SyncCallback syncCallback = new CallbackSemaphore();
				RelayOk ok = vm.setBreakpoint(new Breakpoint.Target.ScriptId(script.getId()), function.getLineno(), function.getPosition(), true, null, logicCallback, syncCallback);
				//sem.acquire();
				((CallbackSemaphore)syncCallback).acquireDefault(ok);
				//((BreakpointDelegate)breakpointDelegate).setPositionOfLastBreakpoint(function.getLineno(), function.getPosition(), function instanceof FunctionCall ? Type.FunctionCall : Type.FunctionDeclaration);
				//sem.release();				
				
				System.out.println("Added breakpoint sir");
				
//				Set<Script> newScripts = getJavaScripts(vm);
//				System.out.println("new scripts: " + newScripts.size());

		}
	}
}
