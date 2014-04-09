package dynamiccallgraph;

public class BreakPointInfo {
    private int column;
    private int line;
    private Type type;

    public enum Type {
        FunctionCall,
        FunctionDeclaration,
        FunctionExpression
    }
    
    public BreakPointInfo(int line, int column, Type type) {
        this.line = line;
        this.column = column;
        this.type = type;
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
    
    public Type getType() {
        return type;
    }
    public void setType(Type type) {
        this.type = type;
    }
    
    @Override
    public String toString() {
        return String.format("line #%d column #%d (%s)", line, column, type.toString());
    }
}
