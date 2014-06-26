package dynamiccallgraph;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.FunctionCall;
import org.mozilla.javascript.ast.FunctionNode;
import org.mozilla.javascript.ast.Name;
import org.mozilla.javascript.ast.NodeVisitor;
import org.mozilla.javascript.ast.ParenthesizedExpression;
import org.mozilla.javascript.ast.PropertyGet;

import com.json.parsers.JSONParser;
import com.json.parsers.JsonParserFactory;

public class PostProcess {
    private static final String[] JS_FILES = { "js" };
    final Map<String, File> filenameToPathMap = new HashMap<String, File>();
    final Map<String, List<FunctionCall>> parsedJavaScriptFunctionCallMap = new HashMap<String, List<FunctionCall>>();
    final ASTParser jsParser = new ASTParser();
    
    private ASTParser parser = new ASTParser();
    public static void main(String[] args) throws Exception {

	new PostProcess(new File(args[0]), new File(args[1]));
    }
    
    public PostProcess(final File input, final File inputCallGraph) throws IOException {
	if (!input.exists()) {
	    System.err.println("Provided directory/file does not exist");
	    return;
	}
	if (!inputCallGraph.exists()) {
	    System.err.println("Provided input call graph does not exist");
	    return;
	}	
	
	JSONParser parser = JsonParserFactory.getInstance().newJsonParser();
	Map<String, List<String>> parsedJSON = (Map<String, List<String>>)parser.parseJson(FileUtils.readFileToString(inputCallGraph));
	
	int potentialApplyAndCallOverriding = 0;
	// get filenames in advance and parse them
	if (input.isDirectory()) {
	    for (final File fileHandle : FileUtils.listFiles(input, JS_FILES, true)) {
		System.out.println("Opened " + fileHandle.getName());
		filenameToPathMap.put(fileHandle.getName(), fileHandle);
		final AstRoot parsedFile = jsParser.parse(FileUtils.readFileToString(fileHandle));
		parsedJavaScriptFunctionCallMap.put(fileHandle.getName(), getDynamicInvocationCalls(parsedFile));
		
		potentialApplyAndCallOverriding += countPotentialApplyCallOverriding(jsParser.getFunctions(parsedFile));
	    }	    
	}
	else filenameToPathMap.put(input.getName(), input);
	
	
	
	// Filter part
	int filteredCalls = 0;
	final StringBuffer buffer = new StringBuffer(); 
	for (Map.Entry<String, List<String>> entry : parsedJSON.entrySet()) {
	   final String target = entry.getKey();
	   final List<String> callees = entry.getValue();
	   for (String callee : callees) {
	       boolean skipThisCallee = false;
	       String calleeFile = getFileNameFromCallee(callee);

	       // Retrieve dynamic call sites by filename
	       List<FunctionCall> dynamicCallsForThisFile = parsedJavaScriptFunctionCallMap.get(calleeFile);
	       if (dynamicCallsForThisFile == null) {
		   System.out.println("file is not adopted in the map: " + calleeFile);
		   continue;
	       }
	       for (FunctionCall dynamicCallee : dynamicCallsForThisFile) {
		   String dynamicCallString = getCallString(calleeFile, dynamicCallee);
		   
		   if (dynamicCallString.equals(callee)) {
		       skipThisCallee = true;
		       break;
		   }
	       }
	       
	       if (skipThisCallee) {
		   System.out.println(callee + " will be stripped");
		   filteredCalls++;
	       }
	       else {
		   buffer.append(callee + " -> " + target + '\n');  
	       }
	   }
	}
	String postProcessedFilepath = FilenameUtils.removeExtension(inputCallGraph.getPath()) + "-post.txt";
	
	File postProcessedFile = new File(postProcessedFilepath);
	FileUtils.write(postProcessedFile, buffer);
	System.out.println("Stripped " + filteredCalls + " indirect calls from " + inputCallGraph.getName());
	System.out.println("With " + potentialApplyAndCallOverriding + " potential similar named call or apply functions");
	System.out.println("Written to: " + postProcessedFilepath);
    }
    
    private int countPotentialApplyCallOverriding(Set<FunctionNode> functions) {
	int retval = 0;
	for (FunctionNode func : functions) {
	    if ("apply".equals(func.getName()) || "call".equals(func.getName())) retval++;
	}
	return retval;
    }
    
    private String getCallString(String filename, FunctionCall call) {
	return String.format("%s@%d:%d-%d", filename, call.getTarget().getLineno(), call.getAbsolutePosition(), call.getAbsolutePosition() + call.getLength());
    }
    
    private String getFileNameFromCallee(String callee) {
	return callee.split("@")[0];
    }
    
    final List<FunctionCall> getDynamicInvocationCalls(AstRoot root) {
	final List<FunctionCall> functionCalls = new ArrayList<FunctionCall>();
	root.visit(new NodeVisitor() {
	    @Override
	    public boolean visit(AstNode node) {
		if (node instanceof FunctionCall) {
		    functionCalls.add((FunctionCall)node);
		}
		return true;
	    }
	});	
	
	final List<FunctionCall> dynamicInvocations = new ArrayList<FunctionCall>();
	for (FunctionCall call : functionCalls) {
	    if (isEval(call.getTarget())) dynamicInvocations.add(call);
	    else if (isCallOrApply(call.getTarget())) dynamicInvocations.add(call);
	}
	
	for (FunctionCall dynamicInvocation : dynamicInvocations) {
	    System.out.println(dynamicInvocation.toSource());
	}
	
	return dynamicInvocations;
    }
    
    private boolean isEval(AstNode target) {
	if (target instanceof ParenthesizedExpression) {
	    return isEval(((ParenthesizedExpression)target).getExpression());
	}
	
	if (target instanceof Name) {
	    if ("eval".equals(((Name)target).getIdentifier())) {
		// System.out.println("found eval");
		return true;
	    }
	}
	
	return false;
    }
    
    private boolean isCallOrApply(AstNode target) {
	if (target instanceof ParenthesizedExpression) {
	    return isCallOrApply(((ParenthesizedExpression)target).getExpression());
	}
	if (target instanceof PropertyGet) {
	    Name property = (((PropertyGet)target).getProperty());
	    
	    if ("call".equals(property.getIdentifier())) {
		// System.out.println("found call");
		return true;
	    }
	    if ("apply".equals(property.getIdentifier())) {
		// System.out.println("found apply");
		return true;
	    }
	}
	
	return false;
    }
}