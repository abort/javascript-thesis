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
str getRewrittenFunctionCall(Expression call, loc inputfile, loc originalLocation) {
	tuple[str element, str representation] nativeCallSite = getPossibleNativeCallSite(call);
	str toInsert = "((function() {\nvar callSite = <nativeCallSite.element>;\n if (callSite != null && isNative(callSite)) {\n addNativeFunctionToMap(\"<inputfile.file>\", <originalLocation.begin.line>, <originalLocation.offset>, <(originalLocation.offset + originalLocation.length)>, \"<nativeCallSite.representation>\", <extractObject(nativeCallSite.representation)>);\n}"; 
	toInsert += "\nelse {\nvar oldLastCall = lastCall;\nsetLastFunctionCall(\"<inputfile.file>\", <originalLocation.begin.line>, <originalLocation.offset>, <(originalLocation.offset + originalLocation.length)>);\n}\nvar result = <unparse(call)>;\nlastCall = oldLastCall;\nreturn result;\n}).call(this))";
	//println("Rewritten call: <toInsert>\n");
	return toInsert;
}

Expression getRewrittenInstantiativeFunctionCall(Expression call, Expression fullExpression, loc inputfile, loc originalLocation) {
	tuple[str element, str representation] nativeCallSite = getPossibleNativeCallSite(call);
	str toInsert = "((function() {\nvar callSite = <nativeCallSite.element>;\n if (callSite != null && isNative(callSite)) {\n addNativeFunctionToMap(\"<inputfile.file>\", <originalLocation.begin.line>, <originalLocation.offset>, <(originalLocation.offset + originalLocation.length)>, \"<nativeCallSite.representation>\", \"<extractObject(nativeCallSite.representation)>\");\n}\nelse {\nvar oldLastCall = lastCall;\nsetLastFunctionCall(\"<inputfile.file>\", <originalLocation.begin.line>, <originalLocation.offset>, <(originalLocation.offset + originalLocation.length)>);\n}\nvar result = <fullExpression>;\nlastCall = oldLastCall;\nreturn result;\n}).call(this))";
	return parse(#Expression, toInsert);
}

Expression getRewrittenInstantiativeFunctionCall(Expression fullExpression, loc inputfile, loc originalLocation) {
	str toInsert = "((function() {\nvar oldLastCall = lastCall;\nsetLastFunctionCall(\"<inputfile.file>\", <originalLocation.begin.line>, <originalLocation.offset>, <(originalLocation.offset + originalLocation.length)>);\nvar result = <fullExpression>;\nlastCall = oldLastCall;\nreturn result;\n}).call(this))";
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
					insert getRewrittenInstantiativeFunctionCall(e, e, inputfile);
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

public void rewriteJavaScripts(loc path, bool rewriteCalls) {
	assert(isDirectory(path));
	loc rewritePath = createRewrittenDirectory(path);
	rewriteScripts(path, rewritePath, false, rewriteCalls);
	
	list[int] bytes = readFileBytes(|project://thesis/src/dynamiccode.js|);
	writeFileBytes(toLocation(rewritePath.scheme + "://" + rewritePath.path + "/instrumentation.js"), bytes);	
}

private void rewriteScripts(loc originalPath, loc rewriteDirectory, bool inSubDirectory, bool rewriteCalls) {
	list[loc] sublocations = originalPath.ls;
	for (loc sublocation <- sublocations) {
		if (isDirectory(sublocation)) {
			
			loc subRewriteDirectory = toLocation(rewriteDirectory.scheme + "://" + rewriteDirectory.path + "/" + getDeepestDirectory(sublocation));
			rewriteScripts(sublocation, subRewriteDirectory, true);
		}
		elseif (isFile(sublocation)) {
			loc rewrittenLocation = toLocation(rewriteDirectory.scheme + "://" + rewriteDirectory.path + "/" + sublocation.file); // inSubDirectory ? toLocation(rewriteDirectory.path + getDeepestDirectory(originalPath)) : rewriteDirectory;
			if (isJavaScriptFile(sublocation)) {
				rewriteJavaScript(sublocation, rewrittenLocation, rewriteCalls);
			}
			else {
				// Rascal lacks file copy functionality, hence we do it ourselves :)
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

//private void rewriteJavascript(loc location, loc rewriteLocation) { }

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


bool isFunctionCall(TreeSearchResult[&T] result) {
	if (treeFound(Tree t) := result) {
		if (Expression e := t && (e is functionParams || e is functionNoparams)) return true;
	}
	
	return false;
}

bool isPartOfNewExpression(Expression e, Source src) {
	visit(src) {
		case Expression visitedExp:{
			if (new(Expression subExpression) := visitedExp) {
				if (subExpression == e) return true;
			}
		}
	}
	
	return false;
}

anno loc Tree@location;
void rewriteJavaScript(loc inputfile, loc outputfile, bool includeInstrumentation, bool rewriteCalls) {

	Source originalSource = parse(inputfile);
	set[loc] expressionsToSkip = {}; 
	set[Expression] insertedExpressions = {};
	map[loc, Expression] expressionsToInsert = ();
	map[loc, FunctionDeclaration] functionDeclarationsToInsert = ();
	

	rewrittenSource = visit (originalSource) {
		case Tree t => t[@location=t@\loc] when t@\loc?
	};

	rewrittenSource = visit (rewrittenSource) {
		case Expression e:{	
			if (function(Id id, {Id ","}* parameters, Block b) := e || functionAnonymous({Id ","}* parameters, Block b) := e) {
				insert newFuncInsert("<inputfile.file>", e, e@location);
			}
			else {
				if (new(Expression newExp) := e) {
					expressionsToSkip += newExp@location;
				}
			}			
		}
		case FunctionDeclaration f:{
			insert newFuncInsert("<inputfile.file>", f, f@location);
		}
	};

	
	tempSource = rewrittenSource;
	rewrittenSource = visit (rewrittenSource) {
		case Expression e:{
				if (new(Expression newExp) := e) {
					if (functionParams(Expression lhs, { Expression!comma ","}+ _) := newExp || functionNoParams(Expression lhs) := newExp) {
						insert getRewrittenInstantiativeFunctionCall(newExp, e, inputfile, e@location);
					}
					else {
						insert getRewrittenInstantiativeFunctionCall(e, inputfile, e@location);
					}
				}
				elseif (functionParams(Expression lhs, { Expression!comma ","}+ _) := e || functionNoParams(Expression lhs) := e) {
					if (e@location?) {
						if (!(e@location in expressionsToSkip)) {
							insert parse(#Expression, getRewrittenFunctionCall(e, inputfile, e@location));
						}
						else {
							println("skipping");
						}	
					}
					else insert parse(#Expression, getRewrittenFunctionCall(e, inputfile, e@\loc));
				}				
		}
	}
	//
	//Source rewrittenSource = bottom-up visit (originalSource) {
	//	case Expression e:{
	//		if (e@original@\loc in expressionsToInsert) {
	//			println("insert");
	//			insert expressionsToInsert[e@original@\loc];
	//		}
	//	}
	//	case FunctionDeclaration f:{
	//		if (f@original@\loc in functionDeclarationsToInsert) {
	//			insert functionDeclarationsToInsert[f@original@\loc];
	//		}			
	//	}
	//};
	
	str newSourceCode = "";
	if (includeInstrumentation) newSourceCode += readFile(|project://thesis/src/dynamiccode.js|) + "\n\n";
	newSourceCode += unparse(rewrittenSource);
	
	writeFile(outputfile, newSourceCode);
}


void rewriteJavaScript(loc inputfile) = rewriteJavaScript(inputfile, toLocation(substring(inputfile.uri, 0, findLast(inputfile.uri, ".")) + ".dcg.js"), true);
void rewriteJavaScript(loc inputfile, loc outputfile, bool rewriteCalls) = rewriteJavaScript(inputfile, outputfile, false, rewriteCalls);
/*void rewriteJavaScript(loc inputfile, loc outputfile, bool includeInstrumentation) {

	Source originalSource = parse(inputfile);
	tuple[Source src, set[loc] expressionsToSkip] preprocessedSource = rewriteAndGetNewFunctionCalls(originalSource, inputfile);
	Source rewrittenSource = visit (preprocessedSource.src) {
		case Expression e:{
			if (functionParams(Expression lhs, { Expression!comma ","}+ _) := e || functionNoParams(Expression lhs) := e) {
				if (e@\loc notin preprocessedSource.expressionsToSkip && isFunctionCall(treeAt(#Expression, e@\loc, originalSource)))
					insert parse(#Expression, getRewrittenFunctionCall(e, inputfile));	
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
}*/

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

Tree newFuncInsert(str filename, Tree e, loc location) {
	return top-down-break visit (e) {
		case Block b:{
			str toInsert = "\naddFunctionToMap(\"<filename>\", <location.begin.line>, <location.offset>, <(location.offset + location.length)>);";
			insert parse(#Block, "{\n" + toInsert + "\n" + replaceFirst(unparse(b), "{", ""));			
		}
	}
}