package dynamiccallgraph;

import org.mozilla.javascript.ast.AstNode;


public class FunctionCallNode {
    private AstNode node;

    public FunctionCallNode(AstNode node) {
	this.node = node;
    }

    public AstNode getNode() {
	return node;
    }

    @Override
    public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + node.getAbsolutePosition();
	result = prime * result + node.getLength();
	result = prime * result + node.getLineno();
	result = prime * result + node.getType();
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
	FunctionCallNode other = (FunctionCallNode) obj;
	if (node == null) {
	    if (other.node != null)
		return false;
	} else {
	    // Start manual comparison here because it does not implement equals
	    return (node.getAbsolutePosition() == other.node.getAbsolutePosition() && node.getType() == other.node.getType()
		    && node.getLength() == other.node.getLength() && node.getLineno() == other.node.getLineno());
	}
	return true;
    }

}
