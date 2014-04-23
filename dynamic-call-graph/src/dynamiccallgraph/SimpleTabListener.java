package dynamiccallgraph;

import org.chromium.sdk.DebugEventListener;
import org.chromium.sdk.TabDebugEventListener;

class SimpleTabListener implements TabDebugEventListener {
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
    public void navigated(final String newUrl) {
        // TODO Auto-generated method stub

    }
}