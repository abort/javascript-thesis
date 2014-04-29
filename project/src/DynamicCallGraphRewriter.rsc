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
private str readCallGraphInjectionSnippet() = readFile(|project://thesis/src/dynamic-callgraph-injection.js|);

void rewriteJavascriptWithDynamicCallGraphBuilder(loc inputfile) {
	loc nativeFunctionLocation = |project://thesis/src/native-functions.txt|;
	map[str, str] nativeFunctions = getNativeFunctionMap(nativeFunctionLocation);
	str outputFile = substring(inputfile.uri, 0, findLast(inputfile.uri, ".")) + ".dcg.js";
	println("output file: <outputFile>");
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
				str toInsert = "setLastFunctionCall(\"<inputfile.file>\", <e@\loc.begin.line>, <e@\loc.offset>, <(e@\loc.offset + e@\loc.length)>, <e>)";
			
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
	
	str newsrc = readFile(|project://thesis/src/dynamiccode.js|) + unparse(rewrittenSource);
	src = parse(newsrc);
//	println("rewritten to: " + unparse(src));
	
	writeFile(toLocation(outputFile), newsrc);
}

Tree newFuncInsert(str filename, Tree e) {
	return top-down-break visit (e) {
		case Block b:{
			str toInsert = "addFunctionToMap(\"<filename>\", <e@\loc.begin.line>, <e@\loc.offset>, <(e@\loc.offset + e@\loc.length)>);";
			insert parse(#Block, "{\n" + toInsert + "\n" + replaceFirst(unparse(b), "{", ""));			
		}
	}
}