package dynamiccallgraph;

import org.mozilla.javascript.ast.AstRoot;

public class TempParseTest {
    public static void main(String[] args) throws Exception {
	AstRoot root = new ASTParser().parse("}\nalert('hi') }");
	if (root.getStatements().isEmpty()) {
	    System.out.println("noooo");
	    return;
	}
	
	System.out.println("First statement: " + root.getStatements().get(0).toSource());
    }
}
