package dynamiccallgraph;

public class CallGraphNativeEntry extends CallGraphEntry {
    private final String nativeTarget;
    
    public CallGraphNativeEntry(final String nativeTarget) {
	super(-1, -1 , -1);
	
	this.nativeTarget = nativeTarget;
    }
    
    @Override
    public String toString() {
	return nativeTarget;
    }
}
