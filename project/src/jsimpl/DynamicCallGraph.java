package jsimpl;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;

import org.chromium.sdk.Breakpoint;
import org.chromium.sdk.Breakpoint.Target;
import org.chromium.sdk.CallFrame;
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
import org.eclipse.imp.pdb.facts.IInteger;
import org.eclipse.imp.pdb.facts.ISet;
import org.eclipse.imp.pdb.facts.IString;
import org.eclipse.imp.pdb.facts.ITuple;
import org.eclipse.imp.pdb.facts.IValue;
import org.eclipse.imp.pdb.facts.IValueFactory;
import org.eclipse.imp.pdb.facts.type.Type;
import org.rascalmpl.interpreter.IEvaluatorContext;


public class DynamicCallGraph {
	private IValueFactory valueFactory;
    private Map<Breakpoint, BreakPointInfo> breakpointMap = new HashMap<Breakpoint, BreakPointInfo>();

    public DynamicCallGraph(IValueFactory factory) {
        this.valueFactory = factory;
    }
	
    public void doSomething(IEvaluatorContext ctx) {
        ctx.getStdOut().println("Test!!!");
        ctx.getStdOut().flush();
    }
    
    public void startDebugging(IString inputName, ISet functionPositions, IEvaluatorContext ctx) {
        ctx.getStdOut().println("Starting to build!");
        try {
            build(inputName, functionPositions, ctx);
        }
        catch (Exception e) {
            ctx.getStdOut().println("Exception: ");
            e.printStackTrace(ctx.getStdOut());
        }
        ctx.getStdOut().flush();
    }
    
	public void build(IString inputName, ISet functionBreakpoints, IEvaluatorContext ctx) throws IOException, MethodIsBlockingException, UnsupportedVersionException, InterruptedException {
	    ctx.getStdOut().println("Input with type: " + functionBreakpoints.getElementType());
	    final Type type = functionBreakpoints.getType();
        if (!functionBreakpoints.getElementType().isTuple()) {
            ctx.getStdErr().println("Input of building a dynamic call graph should be set[tuple[int,int]]");
            ctx.getStdErr().flush();
            return;
        }

	    WipBrowser browser = org.chromium.sdk.wip.WipBrowserFactory.INSTANCE.createBrowser(new InetSocketAddress("localhost", 13337), new MyLoggerFactory());
		WipBackend backend = new WipBackendFactory().create();
		TabDebugEventListener listener = new SimpleTabListener(ctx, breakpointMap);
		WipBrowserTab tab = browser.getTabs(backend).get(0).attach(listener);
		final Set<Script> scripts = getJavaScripts(tab);
		ctx.getStdOut().println("Found first tab");
		ctx.getStdOut().flush();
		
		int breakpointsAdded = 0;
		for (Script s : scripts) {
		    if (s.getName() != null && s.getName().endsWith(inputName.getValue())) {
		        ctx.getStdOut().println("Adding breakpoints to " + inputName + " file in tab");
		        final Iterator<IValue> positions = functionBreakpoints.iterator();
		        while (positions.hasNext()) {
		            final ITuple tuple = (ITuple)positions.next();
		            final int line = ((IInteger)tuple.get(0)).intValue();
		            final int column =  ((IInteger)tuple.get(1)).intValue();
		            
		            ctx.getStdOut().println("Breakpoint added on line: #" + line + " column: #" + column);
		            
		            BreakpointCallback breakpointDelegate = new BreakpointDelegate(breakpointMap);
		            tab.getJavascriptVm().setBreakpoint(new Breakpoint.Target.ScriptName(s.getName()), line, column, true, null, breakpointDelegate, null);
		            ((BreakpointDelegate)breakpointDelegate).setPositionOfLastBreakpoint(line, column);

		            breakpointsAdded++;
		        }
                ctx.getStdOut().flush();
		    }
		}
		
        ctx.getStdOut().println("added breakpoints, waiting for suspension events");
        ctx.getStdOut().flush();
		
		//while (true) {
        for (int i = 0; i < 10; i++) {
            if (breakpointsAdded != 0)
    		    ((SimpleDebugListener) listener.getDebugEventListener()).getSemaphore().tryAcquire(5, TimeUnit.HOURS);
        }
		//}

		tab.getJavascriptVm().detach();
	}

    private Set<Script> getJavaScripts(WipBrowserTab tab) {
        final Set<Script> scripts = new HashSet<Script>();
		tab.getJavascriptVm().getScripts(new ScriptsCallback() {

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
	
    private class BreakPointInfo {
        private int column;
        private int line;
        
        public BreakPointInfo(int line, int column) {
            this.line = line;
            this.column = column;
        }
        
        public int getColumn() {
            return column;
        }
        public void setColumn(int column) {
            this.column = column;
        }
        public int getLine() {
            return line;
        }
        public void setLine(int line) {
            this.line = line;
        }
    }
    
	private class BreakpointDelegate implements BreakpointCallback {
	    private final Map<Breakpoint, BreakPointInfo> breakpointMap;
	    private Breakpoint lastAddedBreakpoint = null;

	    public BreakpointDelegate(final Map<Breakpoint, BreakPointInfo> breakpointMap) {
	        this.breakpointMap = breakpointMap;
	    }
	    
		@Override
		public void failure(String arg0) {
			System.out.println("Failed to add breakpoint " + arg0);			
		}

		@Override
		public void success(Breakpoint arg0) {
			System.out.println("Breakpoint added on file " + arg0.toString());
			lastAddedBreakpoint = arg0;
		}
		
		public void setPositionOfLastBreakpoint(int line, int column) {
		    if (lastAddedBreakpoint != null) {
		        breakpointMap.put(lastAddedBreakpoint, new BreakPointInfo(line, column));
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
		private final DebugEventListener debugListener;
		private final IEvaluatorContext evaluatorContext;
		private final Map<Breakpoint, BreakPointInfo> breakpointMap;

		public SimpleTabListener(final IEvaluatorContext evaluatorContext, final Map<Breakpoint, BreakPointInfo> breakpointMap) {
            this.evaluatorContext = evaluatorContext;
            this.breakpointMap = breakpointMap;
            debugListener = new SimpleDebugListener(evaluatorContext, breakpointMap);
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
		DebugContext savedDebugContext;
		final Semaphore semaphore = new Semaphore(0);
		private final IEvaluatorContext evaluatorContext;
		private final Map<Breakpoint, BreakPointInfo> breakpointMap;
		
		public SimpleDebugListener(final IEvaluatorContext evaluatorContext, final Map<Breakpoint, BreakPointInfo> breakpointMap) {
		    this.evaluatorContext = evaluatorContext;
		    this.breakpointMap = breakpointMap;
		    
            evaluatorContext.getStdOut().println("new simple debug listener");
            evaluatorContext.getStdOut().flush();
		}
		
		@Override
		public void suspended(DebugContext debugContext) {
		    Breakpoint breakPoint = null;
		    evaluatorContext.getStdOut().println("suspend");
		    evaluatorContext.getStdOut().flush();
		    if (!debugContext.getBreakpointsHit().isEmpty()) {
		        breakPoint = (Breakpoint)debugContext.getBreakpointsHit().toArray()[0];
		    }
		    else {
		        evaluatorContext.getStdErr().println("Triggered breakpoint could not be retrieved.");
		        evaluatorContext.getStdErr().flush();
		        return;
		    }

		    final Target target = breakPoint.getTarget();
		    
			evaluatorContext.getStdOut().println("Suspended: " + breakPoint.getLineNumber() + " - " + breakPoint.getId());
			if (breakpointMap.get(breakPoint) != null) {
			    evaluatorContext.getStdOut().println("Breakpoint found!");
			}
			for (CallFrame callFrame : debugContext.getCallFrames()) {
			    evaluatorContext.getStdOut().println("Callframe #1: " + callFrame.toString());
			    evaluatorContext.getStdOut().println("Callframe #2: " + callFrame.getFunctionName());
			    evaluatorContext.getStdOut().println("Callframe #3: " + String.valueOf(callFrame.getStatementStartPosition().getColumn()) + " - " +
			    String.valueOf(callFrame.getStatementStartPosition().getLine()));
			}
			evaluatorContext.getStdOut().flush();
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
