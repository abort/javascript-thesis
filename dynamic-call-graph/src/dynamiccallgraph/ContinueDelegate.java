package dynamiccallgraph;

import java.util.logging.Level;
import java.util.logging.Logger;

import org.chromium.sdk.DebugContext.ContinueCallback;

public class ContinueDelegate implements ContinueCallback {
    private static final Logger logger = Logger.getLogger(ContinueDelegate.class.getName());
    
    @Override
    public void success() { }

    @Override
    public void failure(final String error) {
	logger.log(Level.FINEST, "Failed to continue VM: " + error);
    }
}
