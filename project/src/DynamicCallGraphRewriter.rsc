module DynamicCallGraphRewriter

import String;
import EcmaScript;
import Logger;
import IO;
import ParseTree;
import FlowGraphNativeImporter;
import Set;
import List;

// TODO: rewrite multiple files, let them include 1 js
// TODO interpret new separately
Expression getRewrittenFunctionCall(Expression call, loc inputfile) {
	tuple[str element, str representation] nativeCallSite = getPossibleNativeCallSite(call);
	str toInsert = "((function() {\nvar callSite = <nativeCallSite.element>;\n if (callSite != null && isNative(callSite)) {\n addNativeFunctionToMap(\"<inputfile.file>\", <call@\loc.begin.line>, <call@\loc.offset>, <(call@\loc.offset + call@\loc.length)>, \"<nativeCallSite.representation>\");\n}\nelse {\nvar oldLastCall = lastCall;\nsetLastFunctionCall(\"<inputfile.file>\", <call@\loc.begin.line>, <call@\loc.offset>, <(call@\loc.offset + call@\loc.length)>);\n}\nvar result = <call>;\nlastCall = oldLastCall;\nreturn result;\n}).apply(this))";
	return parse(#Expression, toInsert);
}

Expression getRewrittenInstantiativeFunctionCall(Expression call, Expression fullExpression, loc inputfile) {
	tuple[str element, str representation] nativeCallSite = getPossibleNativeCallSite(call);
	str toInsert = "((function() {\nvar callSite = <nativeCallSite.element>;\n if (callSite != null && isNative(callSite)) {\n addNativeFunctionToMap(\"<inputfile.file>\", <fullExpression@\loc.begin.line>, <fullExpression@\loc.offset>, <(fullExpression@\loc.offset + fullExpression@\loc.length)>, \"<nativeCallSite.representation>\");\n}\nelse {\nvar oldLastCall = lastCall;\nsetLastFunctionCall(\"<inputfile.file>\", <fullExpression@\loc.begin.line>, <fullExpression@\loc.offset>, <(fullExpression@\loc.offset + fullExpression@\loc.length)>);\n}\nvar result = <fullExpression>;\nlastCall = oldLastCall;\nreturn result;\n}).apply())";
	return parse(#Expression, toInsert);
}


void rewriteJavascriptWithDynamicCallGraphBuilder(loc inputfile) {
	//loc nativeFunctionLocation = |project://thesis/src/native-functions.txt|;
	//map[str, str] nativeFunctions = getNativeFunctionMap(nativeFunctionLocation);
	str outputFile = substring(inputfile.uri, 0, findLast(inputfile.uri, ".")) + ".dcg.js";
	println("output file: <outputFile>");
	loc output = inputfile.parent + outputFile;
	bool inserted = false;
	Source src = parse(inputfile);
	set[loc] expressionsToSkip = {}; 
	Source rewrittenSource = top-down visit (src) {
		case Expression e:{
			println("visit exp");
			if (new(Expression newExp) := e) {
				if (functionParams(Expression lhs, { Expression!comma ","}+ _) := newExp || functionNoParams(Expression lhs) := newExp) {
					expressionsToSkip += newExp@\loc;
					insert getRewrittenInstantiativeFunctionCall(newExp, e, inputfile);
				}
				else {
					insert getRewrittenInstantiativeFunctionCall(parse(#Expression, unparse(newExp) + "()"), e, inputfile); // remove syntactic suga
				}
			}
			elseif (functionParams(Expression lhs, { Expression!comma ","}+ _) := e || functionNoParams(Expression lhs) := e) {
				if (e@\loc notin expressionsToSkip)	insert getRewrittenFunctionCall(e, inputfile);
					// TODO: first set function call, THEN do the call..
				
				//println("Replace with <toInsert>");
				
			}
			elseif (function(Id id, {Id ","}* parameters, Block b) := e || functionAnonymous({Id ","}* parameters, Block b) := e) {
				insert newFuncInsert("<inputfile.file>", e);
			}
		}
		case FunctionDeclaration f:{
			insert newFuncInsert("<inputfile.file>", f);		
		}
	};
	
	str newsrc = readFile(|project://thesis/src/dynamiccode.js|) + "\n\n" + unparse(rewrittenSource);
	src = parse(newsrc);
	
	writeFile(toLocation(outputFile), newsrc);
}

private tuple[str, str] getPossibleNativeCallSite(Expression callExpression) {
	if (functionParams(Expression funcExpression, _) := callExpression || functionNoParams(Expression funcExpression) := callExpression) {
		if (isPossibleNativeCallSite(funcExpression)) return <"<funcExpression>", "<funcExpression>">;
		if (nestedExpression(Expression subExpression) := callExpression) {
			return <"<subExpression>", "<subExpression>">;
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