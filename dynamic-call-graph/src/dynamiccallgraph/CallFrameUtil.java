package dynamiccallgraph;

import org.chromium.sdk.CallFrame;
import org.mozilla.javascript.ast.AstNode;

public class CallFrameUtil {
    private static final String NEW_LINE_CHARACTER = "\n";

    public static String getCallee(final CallFrame frame) {
	return frame.getFunctionName();
    }

    public static int calculateAbsolutePosition(final String source, final int line, final int column) {
	int abs = 0;
	int currentLine = 0;
	final String[] splittedSource = source.split(NEW_LINE_CHARACTER);
	for (String sourceLine : splittedSource) {
	    currentLine++;
	    if (currentLine == line) {
		abs += column;
		break;
	    }
	    abs += sourceLine.length();
	    abs++; // for the new line char
	}

	return (abs > 0 ? abs - 1 : abs);
    }

    public static String getSensibleSource(final AstNode node) {
	if (node == null) return "";
	
	String source = node.toSource();
	if (source == null) return "";
	
	source = source.trim();
	while (source.endsWith(NEW_LINE_CHARACTER))
	    source = source.substring(0, source.length() - 2);
	return source;
    }
}