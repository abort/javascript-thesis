package dynamiccallgraph;


import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;

import com.json.parsers.JSONParser;
import com.json.parsers.JsonParserFactory;

public class CallGraphConverter {

    private static final String[] JS_FILES = { "js" };
    public static void main(String[] args) throws Exception {

	new CallGraphConverter(new File(args[0]));
    }
    
    public CallGraphConverter(final File inputCallGraph) throws IOException {
	if (!inputCallGraph.exists()) {
	    System.err.println("Provided input call graph does not exist");
	    return;
	}	
	
	JSONParser parser = JsonParserFactory.getInstance().newJsonParser();
	parser.setValidating(false);
	Map<String, List<String>> parsedJSON = (Map<String, List<String>>)parser.parseJson(FileUtils.readFileToString(inputCallGraph));	// Filter part

	final StringBuffer buffer = new StringBuffer(); 
	for (Map.Entry<String, List<String>> entry : parsedJSON.entrySet()) {
	   final String callee = entry.getKey();
	   final List<String> targets = entry.getValue();
	   for (String target : targets) {
	       buffer.append(callee);
	       buffer.append(" -> ");
	       buffer.append(target);
	       buffer.append('\n');
	   }
	}
	buffer.deleteCharAt(buffer.length() - 1);
	String postProcessedFilepath = FilenameUtils.removeExtension(inputCallGraph.getPath()) + "-post.txt";
	
	File postProcessedFile = new File(postProcessedFilepath);
	FileUtils.write(postProcessedFile, buffer);
	System.out.println("Written to: " + postProcessedFilepath);
    }
    
    
}