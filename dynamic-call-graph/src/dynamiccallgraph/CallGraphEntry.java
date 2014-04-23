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
    
    @Override
    public String toString() {
	return String.format("%s@%d:%d-%d", filename == null ? "n/a" : filename, line, absolutePositionStart, absolutePositionEnd);
    }
}
