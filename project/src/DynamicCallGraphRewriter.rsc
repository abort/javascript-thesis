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
				tuple[str element, str representation] nativeCallSite = getPossibleNativeCallSite(e);
				str toInsert = "((function() {\nvar callSite = <nativeCallSite.element>;\n if (callSite != null && isNative(callSite)) {\n addNativeFunctionToMap(\"<inputfile.file>\", <e@\loc.begin.line>, <e@\loc.offset>, <(e@\loc.offset + e@\loc.length)>, \"<nativeCallSite.representation>\");\n}\nelse {\nvar oldLastCall = lastCall;\nsetLastFunctionCall(\"<inputfile.file>\", <e@\loc.begin.line>, <e@\loc.offset>, <(e@\loc.offset + e@\loc.length)>);\n}\nvar result = <e>;\nlastCall = oldLastCall;\nreturn result;\n}).call(this))";
			
				// TODO: first set function call, THEN do the call..
				
				//println("Replace with <toInsert>");
				println("trying to insert:\n\n<toInsert>");
				
		
				insert parse(#Expression, toInsert);
			}
			elseif (function(Id id, {Id ","}* parameters, Block b) := e || functionAnonymous({Id ","}* parameters, Block b) := e) {
				insert newFuncInsert("<inputfile.file>", e);
			}
	/*		elseif (nestedExpression(f:functionAnonymous({Id ","}* parameters, Block implementation)) := e) {
				insert parse(#Expression, "(" + newFuncInsert("<inputfile.file>", f) + ")");
			} */
		}
		/*
		case SourceElement s:{
			if (func(FunctionDeclaration f) := s) {
				insert newThisFuncInsert("<inputfile.file>", f);
			}
		}
		case BlockStatement s:{
			if (functionDecl(FunctionDeclaration f) := s) {
				insert newFuncInsert("<inputfile.file>", f);
			}
		}
		*/
		case FunctionDeclaration f:{
			insert newFuncInsert("<inputfile.file>", f);		
		}
	};
	
	str newsrc = readFile(|project://thesis/src/dynamiccode.js|) + "\n\n" + unparse(rewrittenSource);
	src = parse(newsrc);
//	println("rewritten to: " + unparse(src));
	
	writeFile(toLocation(outputFile), newsrc);
}

private tuple[str, str] getPossibleNativeCallSite(Expression callExpression) {
	if (functionParams(Expression funcExpression, _) := callExpression || functionNoParams(Expression funcExpression) := callExpression) {
		if (isPossibleNativeCallSite(funcExpression)) return <"<funcExpression>", "<funcExpression>">;
		if (nestedExpression(Expression subExpression) := callExpression) {
			while (nestedExpression(Expression subsubExpression) := subExpression) {
				subExpression = subsubExpression;
			}
			return getPossibleNativeCallSite(subExpression);
		}
		return <"null", "">; 
	}
	throw "Could not retrieve call site"; // should never occur
}

private bool isPossibleNativeCallSite(Expression expression) = (expression is property && isSimpleProperty(expression)) || expression is id;

private bool isSimpleProperty(Expression p) {
	assert(p is property);
	if (property(Expression lhs, Id id) := p) {
		if (lhs is property) return isSimpleProperty(lhs);
		if (lhs is id) return true;
	}
	
	return false;
} 


Tree replaceThisReferences(Tree expression) {
	return top-down visit(expression) {
		case Expression e:{
			if (e is functionParams || e is functionNoParams) {
				; // break here
			}
			elseif (e is this) {
				insert parse(#Expression, "_this");
				fail; // go on
			}
		}
	}; // no need to break because all this will be replaced with _this in all closures
}

Tree newThisFuncInsert(str filename, Tree e) {
	return top-down-break visit (e) {
		case Block b:{
			str toInsert = "var _this = this;\naddFunctionToMap(\"<filename>\", <e@\loc.begin.line>, <e@\loc.offset>, <(e@\loc.offset + e@\loc.length)>);";
			insert parse(#Block, "{\n" + toInsert + "\n" + replaceFirst(unparse(b), "{", ""));			
		}
	}
}


Tree newFuncInsert(str filename, Tree e) {
	return top-down-break visit (e) {
		case Block b:{
			str toInsert = "addFunctionToMap(\"<filename>\", <e@\loc.begin.line>, <e@\loc.offset>, <(e@\loc.offset + e@\loc.length)>);";
			insert parse(#Block, "{\n" + toInsert + "\n" + replaceFirst(unparse(b), "{", ""));			
		}
	}
}