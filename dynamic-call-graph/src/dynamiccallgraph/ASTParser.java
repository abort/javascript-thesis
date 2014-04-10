package dynamiccallgraph;
import java.io.IOException;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.List;

import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.IRFactory;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
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
	
	public List<AstNode> getFunctionCalls(final AstRoot root) {
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
	
	
	public List<AstNode> getFunctions(final AstRoot root) {
		final List<AstNode> nodes = new ArrayList<AstNode>();
		root.visit(new NodeVisitor() {
			
			@Override
			public boolean visit(AstNode node) {
				if (node instanceof FunctionNode) {
					// System.out.println("Added function expression/declaration: " + node.toSource() + " type: " + node.getType());
					
					nodes.add(((FunctionNode)node).getBody());
				}
				
				return true;
			}
		});
		return nodes;
	}	
}