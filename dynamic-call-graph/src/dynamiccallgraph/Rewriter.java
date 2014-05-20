package dynamiccallgraph;

import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.StringSelection;
import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.ToSourceConfig;

public class Rewriter {
    private static final String INSTRUMENTATION_SCRIPT_TAG = "<script src=\"instrumentation.js\"></script>";

    private static final String[] JS_FILES = { "js" };

    private ASTParser parser = new ASTParser();
    public static void main(String[] args) throws Exception {
	System.out.println((int)'\n');
	if (JS_FILES.length > 0) return;
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
	else rewriteFile(file);
    }
    
    public void rewriteDirectory(final File directoryHandle) throws IOException {	
	final File rewritePath = new File(directoryHandle.getPath() + "-rewritten");
	FileUtils.copyDirectory(directoryHandle, rewritePath);

	int rewrittenFiles = 0;
	for (final File fileHandle : FileUtils.listFiles(rewritePath, JS_FILES, true)) {
	    rewriteFile(fileHandle);
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

    private void rewriteFile(final File fileHandle) throws IOException {
	final String filename = fileHandle.getName();
	AstRoot src = parser.parse(FileUtils.readFileToString(fileHandle));
	ToSourceConfig.getInstance().setFilename(filename);

	// Rewrite :)
	FileUtils.write(fileHandle, src.toSource());
	
	System.out.println("Rewrote " + filename);
    }
}