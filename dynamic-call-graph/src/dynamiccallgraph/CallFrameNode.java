package dynamiccallgraph;

import org.chromium.sdk.CallFrame;
import org.chromium.sdk.TextStreamPosition;
import org.mozilla.javascript.ast.AstNode;

public class CallFrameNode {
    private final CallFrame callFrame;
    private final String scriptName;
    private final AstNode node;
    
    public CallFrameNode(final CallFrame callFrame, final String scriptName, final AstNode node) {
	this.callFrame = callFrame;
	this.scriptName = scriptName;
	this.node = node;
    }
    
    public CallFrameNode(final CallFrame callFrame, final String scriptName) {
	this.callFrame = callFrame;
	this.scriptName = scriptName;
	this.node = null;
    }

    public CallFrame getCallFrame() {
        return callFrame;
    }

    public String getScriptName() {
        return scriptName;
    }

    public AstNode getNode() {
        return node;
    }
    
    @Override
    public int hashCode() {
	final int prime = 31;
	int result = 1;
	final String source = callFrame.getScript().getSource();
	final int sourceHash = source == null ? 0 : source.hashCode();
	final int column = callFrame.getStatementStartPosition().getColumn();
	final int line = callFrame.getStatementStartPosition().getLine();
	result = prime * result + ((callFrame == null) ? 0 : sourceHash);
	result = prime * result + ((node == null) ? 0 : new Integer(node.getAbsolutePosition()).hashCode());
	result = prime * result + ((scriptName == null) ? 0 : scriptName.hashCode());
	result = prime * result + column;
	result = prime * result + line;
	return result;
    }

    @Override
    public boolean equals(Object obj) {
	if (!(obj instanceof CallFrameNode)) return false;
	CallFrameNode otherCallFrameNode = (CallFrameNode)obj;
	if (!scriptName.equals(otherCallFrameNode.getScriptName())) return false;
	if (otherCallFrameNode.getNode().getAbsolutePosition() == getNode().getAbsolutePosition()) {
	    if (!isStreamPositionEqual(otherCallFrameNode)) return false;
	    
	    
	    final String source = node.toSource();
	    final String otherSource = otherCallFrameNode.getNode().toSource();
	    return (source != null && source.equals(otherSource));
	}
	
	return false;
    }    
    
    private boolean isStreamPositionEqual(final CallFrameNode node) {
	final TextStreamPosition otherPosition = node.getCallFrame().getStatementStartPosition();
	final TextStreamPosition thisPosition = callFrame.getStatementStartPosition();
	return (otherPosition.getColumn() == thisPosition.getColumn() && otherPosition.getLine() == thisPosition.getLine());
    }
}
