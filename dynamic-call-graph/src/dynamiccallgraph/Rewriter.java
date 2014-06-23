package dynamiccallgraph;

import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.StringSelection;
import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.FunctionCall;
import org.mozilla.javascript.ast.FunctionNode;
import org.mozilla.javascript.ast.Name;
import org.mozilla.javascript.ast.NewExpression;
import org.mozilla.javascript.ast.NodeVisitor;
import org.mozilla.javascript.ast.ParenthesizedExpression;
import org.mozilla.javascript.ast.ToSourceConfig;

public class Rewriter {
    private static final String INSTRUMENTATION_SCRIPT_TAG = "<script src=\"instrumentation.js\"></script>";

    private static final String[] JS_FILES = { "js" };

    private ASTParser parser = new ASTParser();
    public static void main(String[] args) throws Exception {

	new Rewriter(new File(args[0]));
    }
    
    public Rewriter(final File file) throws IOException {
	if (!file.exists()) {
	    System.err.println("Provided directory/file does not exist");
	    return;
	}

	ToSourceConfig.getInstance().setRewriteFunctions(true);
	ToSourceConfig.getInstance().setRewriteFunctionCalls(true);
	
	if (file.isDirectory()) rewriteDirectory(file);
	else rewriteFile(file, 0);
    }
    
    public void rewriteDirectory(final File directoryHandle) throws IOException {	
	final File rewritePath = new File(directoryHandle.getPath() + "-rewritten");
	FileUtils.copyDirectory(directoryHandle, rewritePath);

	int rewrittenFiles = 0;
	for (final File fileHandle : FileUtils.listFiles(rewritePath, JS_FILES, true)) {
	    rewriteFile(fileHandle, rewrittenFiles);
	    rewrittenFiles++;
	}

	FileUtils.copyFileToDirectory(new File(getClass().getResource("instrumentation.js").getPath()), rewritePath);
	
	System.out.println("\nRewrote " + rewrittenFiles + " javascript files to " + rewritePath);
	System.out.println("Do not forget to add the following line on top of the head tag in the index file (copied to clipboard):");
	System.out.println(INSTRUMENTATION_SCRIPT_TAG);
	
	copyToClipboard(INSTRUMENTATION_SCRIPT_TAG);
    }
    
    private void copyToClipboard(final String text) {
	final StringSelection selection = new StringSelection(text);
	final Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
	clipboard.setContents(selection, selection);
    }

    private void rewriteFile(final File fileHandle, int fileIndex) throws IOException {
	final boolean rewriteFunctionCalls = ToSourceConfig.getInstance().isRewriteFunctionCalls();
	final String filename = fileHandle.getName();
	// Filter for libraries not to rewrite function calls
//	if (filename.contains("mootools") || filename.contains("prototype")) {
	    ToSourceConfig.getInstance().setRewriteFunctionCalls(true);
//	}
	AstRoot src = parser.parse(FileUtils.readFileToString(fileHandle));
	ToSourceConfig.getInstance().setFilename(filename);

	// Rewrite :)
	final int functionCount = countFunctions(src);
	final int callCount = countFunctionCalls(src);
	final int evalCount = countEvals(src);
	final int newFunctionCount = countNewFunctions(src);
	String newSource = "_wrap_staticMeasuredFunctions['" + filename  + "'] = " + functionCount + ";\n";
	// only calculate the calls if we do rewrite the function calls
	if (ToSourceConfig.getInstance().isRewriteFunctionCalls()) {
	    newSource += "_wrap_staticMeasuredCalls['" + filename + "'] =" + callCount + ";\n";
	}
        newSource += src.toSource();
	FileUtils.write(fileHandle, newSource);
	
	System.out.println("Rewrote " + filename + " with " + functionCount + " functions (getters: " + countGetters(src) + ", setters: " + countSetters(src) + ") and " + callCount + " calls (evals: " + evalCount + ", new Function: " + newFunctionCount + ")");
	// Reset the function call rewriting for other files
	ToSourceConfig.getInstance().setRewriteFunctionCalls(rewriteFunctionCalls);
    }
  
    private int countNewFunctions(AstRoot src) {
	final int[] retval = { 0 };
	src.visitAll(new NodeVisitor() {	    
	    @Override
	    public boolean visit(AstNode node) {
		if (node instanceof NewExpression) {
		    final AstNode target = ((FunctionCall)node).getTarget();
		    if (isFunction(target)) retval[0]++;
		}
		return true;
	    }
	});
	
	return retval[0];	
    }    
    
    private int countEvals(AstRoot src) {
	final int[] retval = { 0 };
	src.visitAll(new NodeVisitor() {
	    
	    @Override
	    public boolean visit(AstNode node) {
		if (node instanceof FunctionCall) {
		    final AstNode target = ((FunctionCall)node).getTarget();
		    if (isEval(target)) retval[0]++;
		}
		return true;
	    }
	});
	
	return retval[0];	
    }
    
    private boolean isFunction(AstNode target) {
	if (target instanceof ParenthesizedExpression) {
	    return isEval(((ParenthesizedExpression)target).getExpression());
	}
	if (target instanceof Name) {
	    if ("Function".equals(((Name)target).getIdentifier())) return true;
	}

	return false;	
    }
    
    private boolean isEval(AstNode target) {
	if (target instanceof ParenthesizedExpression) {
	    return isEval(((ParenthesizedExpression)target).getExpression());
	}
	
	if (target instanceof Name) {
	    if ("eval".equals(((Name)target).getIdentifier())) return true;
	}
	
	return false;
    }
    
    private int countGetters(AstRoot src) {
	final int[] retval = { 0 };
	src.visitAll(new NodeVisitor() {

	    @Override
	    public boolean visit(AstNode node) {
		if (node instanceof FunctionNode) {
		    if (((FunctionNode) node).isGetter()) {
			retval[0]++;
		    }
		}
		return true;
	    }
	});

	return retval[0];
    }
    
    private int countSetters(AstRoot src) {
	final int[] retval = { 0 };
	src.visitAll(new NodeVisitor() {

	    @Override
	    public boolean visit(AstNode node) {
		if (node instanceof FunctionNode) {
		    if (((FunctionNode) node).isSetter()) {
			retval[0]++;
		    }
		}
		return true;
	    }
	});

	return retval[0];
    }
    
    private int countFunctions(AstRoot src) {
	final int[] retval = { 0 };
	src.visitAll(new NodeVisitor() {
	    
	    @Override
	    public boolean visit(AstNode node) {
		if (node instanceof FunctionNode) retval[0]++;
		return true;
	    }
	});
	
	return retval[0];
    }
    
    private int countFunctionCalls(AstRoot src) {
	final int[] retval = { 0 };
	src.visitAll(new NodeVisitor() {
	    
	    @Override
	    public boolean visit(AstNode node) {
		if (node instanceof FunctionCall) retval[0]++;
		return true;
	    }
	});
	
	return retval[0];
    }
}