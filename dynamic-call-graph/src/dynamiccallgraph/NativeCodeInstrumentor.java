package dynamiccallgraph;

import java.util.List;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;

public class NativeCodeInstrumentor {

    public static void main(String[] args) throws Exception {
	List<String> natives = IOUtils.readLines(NativeCodeInstrumentor.class.getResourceAsStream("nativelist.txt"));
	StringBuffer buff = new StringBuffer();
	for (String line : natives) {
	    String functionName = line.split(":")[0].trim().replace('_', '.');
	    functionName = StringUtils.remove(functionName, '"');
	    final String originalFunctionReference = "_wrap_orig" + StringUtils.remove(functionName, '.');
	    
	    buff.append(originalFunctionReference);
	    buff.append(" = ");
	    buff.append(functionName);
	    buff.append(";\n");
	    buff.append(functionName);
	    buff.append(" = function() {\n");
	    buff.append("\tif (!_wrap_ignoreCurrentCall) { _wrap_origconsolelog(\"called ");
	    buff.append(functionName);
	    buff.append("\"); }\n\treturn ");
	    buff.append(originalFunctionReference);
	    buff.append(".call(this, arguments);\n}\n");
	}
	
	System.out.println(buff.toString());
    }

}
