module DynamicCallGraphRewriter

import String;
import EcmaScript;
import Logger;
import IO;
import ParseTree;
import FlowGraphNativeImporter;
import Set;
import List;

/*private str jsEscape(Expression input) {
	str retval = escape(unparse(input), ("\\": "\\\\", "\\\"": "\\\\\"", "\\\'": "\\\\\'", "\"": "\\\"", "\'": "\\\'"));
	//retval =  
}*/


@javaClass{jsimpl.Encoder}
public java str javascriptEscape(str input);

void rewriteJavascriptWithDynamicCallGraphBuilder(loc inputfile) {
	loc nativeFunctionLocation = |project://thesis/src/native-functions.txt|;
	map[str, str] nativeFunctions = getNativeFunctionMap(nativeFunctionLocation);
	str outputFile = substring(inputfile.file, 0, findLast(inputfile.file, ".")) + ".dcg.js";
	println(nativeFunctions);
	loc output = inputfile.parent + outputFile;
	bool inserted = false;
	Source src = parse(inputfile);
	Source rewrittenSource = visit (src) {
		case Expression e:{
		
			if (functionParams(Expression lhs, { Expression!comma ","}+ _) := e || functionNoParams(Expression lhs) := e) {
				str lhsPropParam = "";
				if (property(Expression obj, Id prop) := lhs) {
					if ("<prop>" in nativeFunctions) lhsPropParam = "<prop>"; 
				}
				// TODO check property, create map with function key to value of native func
				str lhsStrParam = replaceAll("<lhs>", "\"", "\\\""); 
				lhsStrParam = "\"" + replaceAll(lhsStrParam, "\'", "\\\'") + "\"";
				print("To insert: ");
				println(lhsStrParam);
				str toInsert = "dynamicCallGraphWrap(\"<inputfile.file>\", <e>, <e@\loc.begin.line>, <e@\loc.offset>, <(e@\loc.offset + e@\loc.length)>, <lhs>, \"<lhsPropParam>\")";
			
				//println("Replace with <toInsert>");
				// println("trying to insert:\n\n<toInsert>");

				insert parse(#Expression, toInsert);
			}
			elseif (function(Id id, {Id ","}* parameters, Block b) := e || functionAnonymous({Id ","}* parameters, Block b) := e) {
				insert newFuncInsert("<inputfile.file>", e);
			}
	/*		elseif (nestedExpression(f:functionAnonymous({Id ","}* parameters, Block implementation)) := e) {
				insert parse(#Expression, "(" + newFuncInsert("<inputfile.file>", f) + ")");
			} */
		}
		case FunctionDeclaration f:{
			insert newFuncInsert("<inputfile.file>", f);
		}
	};
	
	newsrc = "var dynamicalCallGraph = [];\n" +
	"function dynamicCallGraphWrap(file, callFunc, line, startOffset, endOffset, func, funcRepresentation) {
	// Ignore manual invokes
	if (dynamicalCallGraph.length == 0) return callFunc;
	if (nativeFunc(func)) {
		 console.log(\"native func!\");
		 dynamicalCallGraph.push(file + \"@\" + line + \",\" + startOffset + \",\" + endOffset + \" -\> \" + nativeFunctions[funcRepresentation]);
		 return callFunc;
	}
	var currentValue = dynamicalCallGraph[dynamicalCallGraph.length - 1];
	dynamicalCallGraph[dynamicalCallGraph.length - 1] = currentValue + \" -\> \" + file + \"@\" + line + \",\" + startOffset + \",\" + endOffset;
	console.log(\"call: \" + file + \"@\" + line + \",\" + startOffset + \",\" + endOffset);
	// function has returned something :)
	return callFunc;
	}\n\n
	
	function dynamicCallGraphAppend(file, line, startOffset, endOffset) {
	dynamicalCallGraph.push(file + \"@\" + line + \",\" + startOffset + \",\" + endOffset);
	console.log(\"called: \" + file + \"@\" + line + \",\" + startOffset + \",\" + endOffset);
}
	" + unparse(rewrittenSource);
	
	str nativeFunctionVar = "var nativeFunctions = {";
	for (k <- nativeFunctionMap) {
		//nativeFunctionVar += "\"" + nativeFunctionMap[k];
		// TODO add native to map
		nativeFunctionVar += "";
	}
	nativeFunctionVar += "}";
	
	newsrc += "\nfunction replaceAll(find, replace, str) { return str.replace(new RegExp(find, \'g\'), replace); }";
	//println("new source: <newsrc>");
	src = parse(rewrittenSource); //parse(newsrc);
	println("rewritten to: " + unparse(src));
}

Tree newFuncInsert(str filename, Tree e) {
	return top-down-break visit (e) {
		case Block b:{
			str toInsert = "dynamicCallGraphAppend(\"<filename>\", <e@\loc.begin.line>, <e@\loc.offset>, <(e@\loc.offset + e@\loc.length)>);";
			insert parse(#Block, "{\n" + toInsert + "\n" + replaceFirst(unparse(b), "{", ""));			
		}
	}
}