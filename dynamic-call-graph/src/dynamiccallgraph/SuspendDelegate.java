package dynamiccallgraph;

import java.util.concurrent.Semaphore;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.chromium.sdk.JavascriptVm.SuspendCallback;

public class SuspendDelegate implements SuspendCallback {
    private static final SuspendDelegate instance;
    private static final Logger logger = Logger.getLogger(SuspendDelegate.class.getName());
    private final Semaphore semaphore = new Semaphore(0);

    static {
	try {
	    instance = new SuspendDelegate();
	} catch (Exception e) {
	    throw new RuntimeException("Failed to initialize suspend delegation");
	}
    }

    public static SuspendDelegate getInstance() {
	return instance;
    }

    @Override
    public void success() {
	logger.log(Level.FINEST, "Suspend successful");
	semaphore.release();
    }

    @Override
    public void failure(final Exception exception) {
	logger.log(Level.FINEST, "Suspend failed: " + exception.getMessage());
	semaphore.release();
    }

    public Semaphore getSemaphore() {
	return semaphore;
    }
}