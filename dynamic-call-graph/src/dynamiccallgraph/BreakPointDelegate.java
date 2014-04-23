package dynamiccallgraph;

import java.util.logging.Level;
import java.util.logging.Logger;

import org.chromium.sdk.Breakpoint;
import org.chromium.sdk.JavascriptVm.BreakpointCallback;

public class BreakPointDelegate implements BreakpointCallback {
    private static final Logger logger = Logger.getLogger(BreakPointDelegate.class.getName());
    
    @Override
    public void success(final Breakpoint bp) {
	logger.log(Level.FINEST, "Breakpoint added: " + bp.getLineNumber());
    }

    @Override
    public void failure(final String error) {
	logger.log(Level.FINEST, "Breakpoint not added: " + error);
    }
}
