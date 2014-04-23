package dynamiccallgraph;

import java.io.IOException;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.IRFactory;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.ExpressionStatement;
import org.mozilla.javascript.ast.FunctionCall;
import org.mozilla.javascript.ast.FunctionNode;
import org.mozilla.javascript.ast.NodeVisitor;

public class ASTParser {
    public AstRoot parse(String source) throws IOException {
	CompilerEnvirons env = new CompilerEnvirons();
	env.setRecoverFromErrors(true);
	env.setGenerateDebugInfo(true);
	env.setRecordingComments(true);

	StringReader sourceStringReader = new StringReader(source);
	IRFactory factory = new IRFactory(env);
	return factory.parse(sourceStringReader, null, 1);
    }

    public boolean isFunctionCall(final AstNode root) {
	if (root instanceof FunctionCall)
	    return true;

	if (root instanceof ExpressionStatement) {
	    return (((ExpressionStatement) root).getExpression() instanceof FunctionCall);
	}

	return false;
    }

    public FunctionCall getFunctionCallTopExpressionNode(final AstNode root) {
	if (root instanceof FunctionCall)
	    return (FunctionCall) root;

	if (root instanceof ExpressionStatement) {
	    ExpressionStatement expressionStatement = (ExpressionStatement) root;
	    if (!(expressionStatement.getExpression() instanceof FunctionCall))
		return null;

	    return (FunctionCall) expressionStatement.getExpression();
	}

	return null;
    }

    public List<AstNode> getFunctionCalls(final AstNode root) {
	final List<AstNode> nodes = new ArrayList<AstNode>();
	root.visit(new NodeVisitor() {

	    @Override
	    public boolean visit(AstNode node) {
		if (node instanceof FunctionCall) {
		    // System.out.println("Added function call: " +
		    // node.toSource() + " type: " + node.getType());
		    nodes.add(node);
		}

		return true;
	    }
	});
	return nodes;
    }

    public AstNode getEnclosingFunction(final AstRoot child) {
	return child.getEnclosingFunction();
    }

    public Set<AstNode> getFunctions(final AstRoot root) {
	final Set<AstNode> nodes = new HashSet<AstNode>();
	root.visit(new NodeVisitor() {

	    @Override
	    public boolean visit(AstNode node) {
		if (node instanceof FunctionNode) {
		    // System.out.println("Added function expression/declaration: "
		    // + node.toSource() + " type: " + node.getType());

		    nodes.add(node);
		}

		return true;
	    }
	});
	return nodes;
    }

    public AstNode getStatementByAbsolutePosition(final AstRoot root, final int absolutePosition) {
	final AstNode[] nodes = new AstNode[] { null };
	root.visit(new NodeVisitor() {

	    @Override
	    public boolean visit(AstNode node) {
		final int nodePosition = node.getAbsolutePosition() + 1; // 1-based
		if (absolutePosition >= nodePosition && absolutePosition <= nodePosition + node.getLength()) {
		    // System.out.println("Found node by abs position");
		    nodes[0] = node;
		    return true; // Go on with traversal so we find the smallest
				 // node
		}
		return true;
	    }
	});
	return nodes[0];
    }

    public AstNode getFirstStatement(final AstRoot root, final int absolutePosition) {
	final AstNode[] retval = new AstNode[]{ null };
	// final AstNode[] closestSibling = new AstNode[]{ null };
	root.visit(new NodeVisitor() {
	    @Override
	    public boolean visit(AstNode node) {
		// use >= for finding the first adjacent node in case the column
		// is not considered equal
		// System.out.println("Visiting: " + node.toSource());
		// System.out.println("Abs: " + absolutePosition +
		// " current abs: " + node.getAbsolutePosition());
		if (node.getAbsolutePosition() == absolutePosition) {
		    retval[0] = node;
		    // System.out.println("we found it! " + node.toSource());
		    // Set the column position for the node
		    return false;
		}
		// else if (node.getAbsolutePosition() < absolutePosition)
		// closestSibling[0] = node;

		return true;
	    }
	});
	
	if (retval[0] != null) return retval[0];
	
	// fallback, get the innermost enclosing node :)
	root.visit(new NodeVisitor() {
	    
	    @Override
	    public boolean visit(AstNode node) {
		final int nodeStartPosition = node.getAbsolutePosition();
		final int nodeEndPosition = nodeStartPosition + node.getLength(); 
		if (absolutePosition > nodeStartPosition && absolutePosition < nodeEndPosition) {
		    // its in between :)
		    retval[0] = node;
		    return true; // keep traversing for the innermost node
		}

		return true;
	    }
	});

	// TODO maybe get the larger expression statement instead of the expression itself (get parent blabla)
	
	return retval[0];
    }

}