package dynamiccallgraph;

public class CallGraphNativeEntry extends CallGraphEntry {
    private final String nativeTarget;
    
    public CallGraphNativeEntry(final String nativeTarget) {
	super(-1, -1 , -1);
	
	this.nativeTarget = nativeTarget;
    }
    
    public String getNativeTarget() {
	return nativeTarget;
    }
    
    @Override
    public int hashCode() {
	final int prime = 31;
	int result = super.hashCode();
	result = prime * result + ((nativeTarget == null) ? 0 : nativeTarget.hashCode());
	return result;
    }

    @Override
    public boolean equals(Object obj) {
	if (this == obj)
	    return true;
	if (!super.equals(obj))
	    return false;
	if (getClass() != obj.getClass())
	    return false;
	CallGraphNativeEntry other = (CallGraphNativeEntry) obj;
	if (nativeTarget == null) {
	    if (other.nativeTarget != null)
		return false;
	} else if (!nativeTarget.equals(other.nativeTarget))
	    return false;
	return true;
    }

    @Override
    public String toString() {
	return nativeTarget;
    }
}
