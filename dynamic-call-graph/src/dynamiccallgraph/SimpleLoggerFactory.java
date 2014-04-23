package dynamiccallgraph;

import org.chromium.sdk.ConnectionLogger;
import org.chromium.sdk.wip.WipBrowserFactory.LoggerFactory;

public class SimpleLoggerFactory implements LoggerFactory {
    @Override
    public ConnectionLogger newBrowserConnectionLogger() {
	return null;
    }

    @Override
    public ConnectionLogger newTabConnectionLogger() {
	return null;
    }
}
