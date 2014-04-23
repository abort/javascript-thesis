package dynamiccallgraph;

public class CallGraphEntry {
    private final int line;
    private final int absolutePositionStart;
    private final int absolutePositionEnd;
    private final String filename;
    
    public CallGraphEntry(final String filename, final int line, final int absolutePositionStart, final int absolutePositionEnd) {
	this.filename = filename;
	this.line = line;
	this.absolutePositionStart = absolutePositionStart;
	this.absolutePositionEnd = absolutePositionEnd;
    }
    
    public CallGraphEntry(final int line, final int absolutePositionStart, final int absolutePositionEnd) {
	this(null, line, absolutePositionStart, absolutePositionEnd);
    }
    
    public int getLine() {
	return line;
    }
    
    public int getAbsolutePositionStart() {
	return absolutePositionStart;
    }
    
    public int getAbsolutePositionEnd() {
	return absolutePositionEnd;
    }

    public String getFilename() {
        return filename;
    }
    
    @Override
    public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + absolutePositionEnd;
	result = prime * result + absolutePositionStart;
	result = prime * result + ((filename == null) ? 0 : filename.hashCode());
	result = prime * result + line;
	return result;
    }

    @Override
    public boolean equals(Object obj) {
	if (this == obj)
	    return true;
	if (obj == null)
	    return false;
	if (getClass() != obj.getClass())
	    return false;
	CallGraphEntry other = (CallGraphEntry) obj;
	if (absolutePositionEnd != other.absolutePositionEnd)
	    return false;
	if (absolutePositionStart != other.absolutePositionStart)
	    return false;
	if (filename == null) {
	    if (other.filename != null)
		return false;
	} else if (!filename.equals(other.filename))
	    return false;
	if (line != other.line)
	    return false;
	return true;
    }

    @Override
    public String toString() {
	return String.format("%s@%d:%d-%d", filename == null ? "n/a" : filename, line, absolutePositionStart, absolutePositionEnd);
    }    
}
