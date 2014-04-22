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
	    if (root instanceof FunctionCall) return true;
	    
	    if (root instanceof ExpressionStatement) {
		return (((ExpressionStatement)root).getExpression() instanceof FunctionCall);
	    }
	    
	    return false;
	}
	
	public List<AstNode> getFunctionCalls(final AstNode root) {
		final List<AstNode> nodes = new ArrayList<AstNode>();
		root.visit(new NodeVisitor() {
			
			@Override
			public boolean visit(AstNode node) {
				if (node instanceof FunctionCall) {
					// System.out.println("Added function call: " + node.toSource() + " type: " + node.getType());
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
					// System.out.println("Added function expression/declaration: " + node.toSource() + " type: " + node.getType());
					
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
		    return true; // Go on with traversal so we find the smallest node
		}
		return true;
	    }
	});
	return nodes[0];
    }

}