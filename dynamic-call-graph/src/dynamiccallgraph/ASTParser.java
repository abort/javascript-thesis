package dynamiccallgraph;

import java.io.IOException;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.IRFactory;
import org.mozilla.javascript.Node;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.Block;
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
	
	if (root instanceof Block && !getFunctionCalls(root).isEmpty()) {
	    return true;
	}

	return false;
    }

    public static FunctionCall getFunctionCallTopExpressionNode(final Node root) {
	if (root instanceof FunctionCall)
	    return (FunctionCall) root;

	if (root instanceof ExpressionStatement) {
	    ExpressionStatement expressionStatement = (ExpressionStatement) root;
	    if (!(expressionStatement.getExpression() instanceof FunctionCall))
		return null;

	    return (FunctionCall) expressionStatement.getExpression();
	}
	
	if (root instanceof Block) return getFunctionCallTopExpressionNode(((Block)root).getFirstChild());

	return null;
    }
    
    public List<AstNode> getFunctionCallsInScope(final AstNode root, final AstNode enclosingFunction) {
	final List<AstNode> nodes = new ArrayList<AstNode>();
	if (enclosingFunction == null) return nodes; // we only wanted scoped ones

	root.visit(new NodeVisitor() {

	    @Override
	    public boolean visit(AstNode node) {
		if (node instanceof FunctionCall) {
		    final AstNode nodeEnclosingFunction = node.getEnclosingFunction();
		    if (nodeEnclosingFunction != null && nodeEnclosingFunction.getAbsolutePosition() == enclosingFunction.getAbsolutePosition()) {
			nodes.add(node);
		    }
		}

		return true;
	    }
	});
	return nodes;	
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

    public Set<FunctionNode> getFunctions(final AstRoot root) {
	final Set<FunctionNode> nodes = new HashSet<FunctionNode>();
	root.visit(new NodeVisitor() {

	    @Override
	    public boolean visit(AstNode node) {
		if (node instanceof FunctionNode) {
		    // System.out.println("Added function expression/declaration: "
		    // + node.toSource() + " type: " + node.getType());

		    nodes.add((FunctionNode)node);
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
		final int nodePosition = node.getAbsolutePosition(); // 1-based
		/*
		if (absolutePosition >= nodePosition && absolutePosition <= (nodePosition + node.getLength() - 1)) {
		    // System.out.println("Found node by abs position");
		    nodes[0] = node;
		    return true; // Go on with traversal so we find the smallest
				 // node
		}
		*/
		if (absolutePosition == nodePosition) {
		    //if (nodes[0] == null || nodes[0].getLength() < node.getLength()) {
			nodes[0] = node;
//			return false;
//		    }
//			
		    //nodes[0] = node;
		    return false;
		}

		return true;
	    }
	});
	
	// some small fallback mechanism
	return nodes[0] == null ? getNodeAtAbsolutePosition(root, absolutePosition) : nodes[0];
    }
    
    public AstNode getNodeAtAbsolutePosition(final AstRoot root, final int absolutePosition) {
	final AstNode[] nodes = new AstNode[] { null };
	root.visit(new NodeVisitor() {

	    @Override
	    public boolean visit(AstNode node) {
		final int nodePosition = node.getAbsolutePosition(); //root.getEncodedSourceStart() + node.getAbsolutePosition(); // 1-based
		if (absolutePosition > nodePosition && absolutePosition <= (nodePosition + node.getLength())) {
		    nodes[0] = node;
		    return true; // Go on with traversal so we find the smallest
				 // node
		}

		return true;
	    }
	});
	
	// some small fallback mechanism
	return nodes[0];
    }
    
    
    public AstNode getAccurateFunctionCall(final AstRoot root, final int absolutePosition, final int line, final Set<FunctionCallNode> processedFunctionCalls) {
	final AstNode[] retval = new AstNode[]{ null };
	
	root.visit(new NodeVisitor() {
	    
	    @Override
	    public boolean visit(AstNode node) {
		final int nodeStartPosition = node.getAbsolutePosition();
		final int nodeEndPosition = nodeStartPosition + node.getLength(); 
		if (absolutePosition >= nodeStartPosition && absolutePosition <= nodeEndPosition && node.getLineno() == line ) {
		    if (node instanceof FunctionCall) {
			if (isProcessedCall(node, processedFunctionCalls)) {
			    return true; // keep on going for the larger one
			}
			retval[0] = node;
			if (getFunctionCalls(node).size() != 0) return true;
			else return false;
		    }
			
		    return true; // keep traversing for the innermost function call
		}

		return true;
	    }
	});

	
	return retval[0];
    }
    
    private boolean isProcessedCall(final AstNode node, final Set<FunctionCallNode> processedFunctionCalls) {
	return processedFunctionCalls.contains(new FunctionCallNode(node));
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