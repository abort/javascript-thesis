module CallGraphComparison

import Set;
import String;
import lang::json::IO;
import lang::json::ast::JSON;
import lang::json::ast::Implode;
import lang::json::\syntax::JSON;


import FlowGraphDataTypes;
import CallGraphDataTypes;
import Relation;
import FlowGraphPrettyPrinter;
import IO;
import EcmaScript;
import PessimisticCallGraph;
import OptimisticCallGraph;
import ParseTree;
import Map;


public set[str] importCallGraph(loc fileLocation, bool ignoreNatives, str frameworkFilter) {
	val = parse(#JSONText, fileLocation);
	ast = buildAST(val);
	set[str] retval = {};
	bool filterFrameworkCalls = (frameworkFilter != ""); 
	if (object(map[str memberName, Value memberValue] members) := ast) {
		for (str memberName <- members) {
			//println("memb: <members[memberName]>");
			if (array(list[Value] arrayValues) := members[memberName]) {
				for (string(str target) <- arrayValues) {
					if (ignoreNatives && !contains(memberName, "@")) continue;
					//if (filterFrameworkCalls && startsWith(target, frameworkFilter + "@")) continue; 
					// println("<memberName> to <target>");
					//retval += "<target> -\> <memberName>";
					retval += "<memberName>";
				}
			}
		} 
	}

	return retval;
}

public set[str] importCallGraphFromPlainText(loc fileLocation) = importCallGraphFromPlainText(fileLocation, true);
public set[str] importCallGraphFromPlainText(loc fileLocation, bool ignoreNatives) {
	set[str] retval = {};
	for (line <- readFileLines(fileLocation)) {
		// println("ln: <line>");
		splitted = split(" -\> ", line);
		if (ignoreNatives && !contains(splitted[1], "@")) continue;
		retval += trim(splitted[1]);
		//retval += trim(line);
	}
	return retval;
}

public set[str] convertCallGraphResultToStrings(CallGraphResult result) {
	rel[Vertex, Vertex] callGraph = result.graph;
	return getFlowGraphSet(callGraph);
}

public set[str] convertCallGraphResultToNonNativeStrings(CallGraphResult result) {
	rel[Vertex, Vertex] callGraph = { <x,y> | <x,y> <- result.graph, !(y is Builtin) };
	set[str] retval = {};
	for (<x, y> <- callGraph) retval += /* getUnmodifiedPositionString(x) + " -\> " + */ getUnmodifiedPositionString(y);
	return retval;
}

public num calculatePrecision(set[str] dynamicCallGraph, set[str] staticCallGraph) {
	return (size(dynamicCallGraph & staticCallGraph)) * 1.0 / size(staticCallGraph);
}

public num calculateRecall(set[str] dynamicCallGraph, set[str] staticCallGraph) = (size(dynamicCallGraph & staticCallGraph)) * 1.0 / size(dynamicCallGraph);

public tuple[num, num] calculateStatistics(set[str] dynamicCallGraph, set[str] staticCallGraph) {
	num precision = calculatePrecision(dynamicCallGraph, staticCallGraph) * 100.0;
	num recall = calculateRecall(dynamicCallGraph, staticCallGraph) * 100.0;
	return <precision, recall>;
}


public rel[Vertex, Vertex] createPessimisticCallGraphByPath(loc path) {
	assert(isDirectory(path));
	list[loc] files = getJavaScripts(path);
	list[Source] sources = [ parse(source) | source <- files ];
	return createPessimisticCallGraph(sources, files).graph;
}

private list[loc] getJavaScripts(loc path) {
 	list[loc] scripts = [];
 	for (loc sublocation <- path.ls) {
		if (isFile(sublocation) && isJavaScriptFile(sublocation)) scripts += sublocation;
		elseif (isDirectory(sublocation)) scripts += getJavaScripts(sublocation);
	}
	
	return scripts;
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