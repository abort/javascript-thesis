module DynamicCallGraphRewriter

import String;
import EcmaScript;
import Logger;
import IO;
import ParseTree;
import FlowGraphNativeImporter;
import Set;
import List;
import util::ShellExec;

// Extract the prototype of the function
str extractObject(str exp) {
	list[str] subs = split(".", exp);
	
	if (size(subs) == 1) return "null";
	
	int i = 0;
	str obj = "";
	for (str sub <- subs) {
		if (i == size(subs) - 1) break;
		obj += sub + ".";
		i += 1;
	}
	
	return substring(obj, 0, size(obj) - 1);
}

// TODO: rewrite multiple files, let them include 1 js
// TODO interpret new separately
str getRewrittenFunctionCall(Expression call, loc inputfile) {
	tuple[str element, str representation] nativeCallSite = getPossibleNativeCallSite(call);
	str toInsert = "((function() {\nvar callSite = <nativeCallSite.element>;\n if (callSite != null && isNative(callSite)) {\n addNativeFunctionToMap(\"<inputfile.file>\", <call@\loc.begin.line>, <call@\loc.offset>, <(call@\loc.offset + call@\loc.length)>, \"<nativeCallSite.representation>\", <extractObject(nativeCallSite.representation)>);\n}"; 
	toInsert += "\nelse {\nvar oldLastCall = lastCall;\nsetLastFunctionCall(\"<inputfile.file>\", <call@\loc.begin.line>, <call@\loc.offset>, <(call@\loc.offset + call@\loc.length)>);\n}\nvar result = <unparse(call)>;\nlastCall = oldLastCall;\nreturn result;\n}).apply(this))";
	//println("Rewritten call: <toInsert>\n");
	return toInsert;
}

Expression getRewrittenInstantiativeFunctionCall(Expression call, Expression fullExpression, loc inputfile) {
	tuple[str element, str representation] nativeCallSite = getPossibleNativeCallSite(call);
	str toInsert = "((function() {\nvar callSite = <nativeCallSite.element>;\n if (callSite != null && isNative(callSite)) {\n addNativeFunctionToMap(\"<inputfile.file>\", <fullExpression@\loc.begin.line>, <fullExpression@\loc.offset>, <(fullExpression@\loc.offset + fullExpression@\loc.length)>, \"<nativeCallSite.representation>\", \"<extractObject(nativeCallSite.representation)>\");\n}\nelse {\nvar oldLastCall = lastCall;\nsetLastFunctionCall(\"<inputfile.file>\", <fullExpression@\loc.begin.line>, <fullExpression@\loc.offset>, <(fullExpression@\loc.offset + fullExpression@\loc.length)>);\n}\nvar result = <fullExpression>;\nlastCall = oldLastCall;\nreturn result;\n}).apply())";
	return parse(#Expression, toInsert);
}

tuple[Source, set[loc]] rewriteAndGetNewFunctionCalls(Source src, loc inputfile) {
	set[loc] expressionsToSkip = {};
	Source retval = visit(src) {
		case Expression e:{
			if (new(Expression newExp) := e) {
				if (functionParams(Expression lhs, { Expression!comma ","}+ _) := newExp || functionNoParams(Expression lhs) := newExp) {
					insert getRewrittenInstantiativeFunctionCall(newExp, e, inputfile);
				}
				else {
					insert getRewrittenInstantiativeFunctionCall(parse(#Expression, unparse(newExp) + "()"), e, inputfile);
				}
			}
		}
	};
	
	visit (retval) {
		case Expression e:{
			if (new(Expression newExp) := e) {
				expressionsToSkip += newExp@\loc;
			}
		}
	}
	
	return <retval, expressionsToSkip>;
}

public void rewriteJavaScripts(loc path) {
	assert(isDirectory(path));
	loc rewritePath = createRewrittenDirectory(path);
	rewriteScripts(path, rewritePath, false);
}
private void rewriteScripts(loc originalPath, loc rewriteDirectory, bool inSubDirectory) {
	list[loc] sublocations = originalPath.ls;
	for (loc sublocation <- sublocations) {
		if (isDirectory(sublocation)) {
			
			loc subRewriteDirectory = toLocation(rewriteDirectory.scheme + "://" + rewriteDirectory.path + "/" + getDeepestDirectory(sublocation));
			rewriteScripts(sublocation, subRewriteDirectory, true);
		}
		elseif (isFile(sublocation)) {
			loc rewrittenLocation = toLocation(rewriteDirectory.scheme + "://" + rewriteDirectory.path + "/" + sublocation.file); // inSubDirectory ? toLocation(rewriteDirectory.path + getDeepestDirectory(originalPath)) : rewriteDirectory;
			if (isJavaScriptFile(sublocation)) {
				rewriteJavascriptWithDynamicCallGraphBuilder(sublocation, rewrittenLocation);
			}
			else {
				// Rascal lacks copy file, hence we do it so :)
				list[int] bytes = readFileBytes(toLocation(originalPath.scheme + "://" + originalPath.path + "/" + sublocation.file));
				writeFileBytes(rewrittenLocation, bytes);
			}
		}
	}
} 

private str getDeepestDirectory(loc path) {
	if (isDirectory(path)) {
		if (endsWith(path.uri, "/")) path = toLocation(path.scheme + "://" + replaceLast(path.uri, "/", "")); 
		return path.file;
	}
	return path.parent.file;
}

private void rewriteJavascript(loc location, loc rewriteLocation) { }

private bool isJavaScriptFile(loc location) = location.extension == "js";
private loc createRewrittenDirectory(loc path) {
	loc parentDirectory = path.parent;
	str rewrittenDirectoryName;
	if (endsWith(path.uri, "/")) rewrittenDirectoryName = replaceLast(path.uri, "/", "");
	else rewrittenDirectoryName = path.uri;
	rewrittenDirectoryName = toLocation(rewrittenDirectoryName).file + "-rewritten";

	loc rewritePath = toLocation(parentDirectory.uri + "/" + rewrittenDirectoryName);
	mkDirectory(rewritePath);
	
	return rewritePath;
}

void rewriteJavascriptWithDynamicCallGraphBuilder(loc inputfile) = rewriteJavascriptWithDynamicCallGraphBuilder(inputfile, inputfile.parent + substring(inputfile.uri, 0, findLast(inputfile.uri, ".")) + ".dcg.js");
void rewriteJavascriptWithDynamicCallGraphBuilder(loc inputfile, loc outputfile) = rewriteJavascriptWithDynamicCallGraphBuilder(inputfile, outputfile, false);
void rewriteJavascriptWithDynamicCallGraphBuilder(loc inputfile, loc outputfile, bool includeInstrumentation) {
	tuple[Source src, set[loc] expressionsToSkip] preprocessedSource = rewriteAndGetNewFunctionCalls(parse(inputfile), inputfile);
	Source rewrittenSource = bottom-up visit (preprocessedSource.src) {
		case Expression e:{
			if (functionParams(Expression lhs, { Expression!comma ","}+ _) := e || functionNoParams(Expression lhs) := e) {
				if (e@\loc notin preprocessedSource.expressionsToSkip) insert parse(#Expression, getRewrittenFunctionCall(e, inputfile));	
					// TODO: first set function call, THEN do the call..				
			}
			elseif (function(Id id, {Id ","}* parameters, Block b) := e || functionAnonymous({Id ","}* parameters, Block b) := e) {
				insert newFuncInsert("<inputfile.file>", e);
			}
		}
		case FunctionDeclaration f:{
			insert newFuncInsert("<inputfile.file>", f);		
		}
	};
	
	str newSourceCode = "";
	if (includeInstrumentation) newSourceCode += readFile(|project://thesis/src/dynamiccode.js|) + "\n\n";
	newSourceCode += unparse(rewrittenSource);
	
	writeFile(outputfile, newSourceCode);
}

private tuple[str, str] getPossibleNativeCallSite(Expression callExpression) {
	if (functionParams(Expression funcExpression, _) := callExpression || functionNoParams(Expression funcExpression) := callExpression) {
		if (isPossibleNativeCallSite(funcExpression)) return <"<funcExpression>", "<funcExpression>">;
		if (nestedExpression(Expression subExpression) := callExpression) {
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