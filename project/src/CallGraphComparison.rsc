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

loc dataSaveDir = |file:///Users/jdijkstra/Documents/UvA/javascript-thesis/data/output|;  

public set[str] importCallGraphCallTargets(loc fileLocation) = importCallGraphCallTargets(fileLocation, true);
public set[str] importCallGraphCallTargets(loc fileLocation, bool ignoreNatives) {
	JSONText val = parse(#JSONText, fileLocation);
	Value ast = buildAST(val);
	set[str] retval = {};
	if (object(map[str memberName, Value memberValue] members) := ast) {
		for (str memberName <- members) {
			if (ignoreNatives && !contains(memberName, "@")) continue;
			retval += "<memberName>";
		} 
	}
	return retval;
}

public set[str] importCallGraphCallTargetsWithoutInnerCalls(loc fileLocation, bool ignoreNatives, str frameworkFileName) {
	JSONText val = parse(#JSONText, fileLocation);
	Value ast = buildAST(val);
	set[str] retval = {};
	if (object(map[str memberName, Value memberValue] members) := ast) {
		for (str memberName <- members) {
			if (ignoreNatives && !contains(memberName, "@")) continue;		
			set[str] callSiteFilenames = {};
			if (array(list[Value] arrayValues) := members[memberName]) {
				for (string(str callsite) <- arrayValues) {
					callSiteFilenames += stripFilenameFromString(callsite);
				}
				// Not only from inner calls, lets add the site
				if (size({ c | c <- callSiteFilenames, c != frameworkFileName}) > 0) {
					retval += "<memberName>";
				}
			}
		} 
	}
	return retval;
}

// Reversed is a json object of call site to function array instead of function to call site array
public set[str] importReversedCallGraphCallTargets(loc fileLocation) = importReversedCallGraphCallTargets(fileLocation, true);
public set[str] importReversedCallGraphCallTargets(loc fileLocation, bool ignoreNatives) {
	JSONText val = parse(#JSONText, fileLocation);
	Value ast = buildAST(val);
	set[str] retval = {};
	if (object(map[str memberName, Value memberValue] members) := ast) {
		// members are callsites
		for (str memberName <- members) {
			if (ignoreNatives && !contains(memberName, "@")) continue;		
			if (array(list[Value] arrayValues) := members[memberName]) {
				for (string(str func) <- arrayValues) {
					if (ignoreNatives && !contains(func, "@")) continue;
					retval += "<func>";
				}
			}
		} 
	}
	return retval;
}

private str stripFilenameFromString(str callString) {
	list[str] splitted = split("@", callString);
	return splitted[0];
}

public set[str] importCallGraphFull(loc fileLocation) = importCallGraphFull(fileLocation, true);
public set[str] importCallGraphFull(loc fileLocation, bool ignoreNatives) {
	JSONText val = parse(#JSONText, fileLocation);
	Value ast = buildAST(val);
	set[str] retval = {};
	if (object(map[str memberName, Value memberValue] members) := ast) {
		for (str memberName <- members) {
			if (ignoreNatives && !contains(memberName, "@")) continue;		
			if (array(list[Value] arrayValues) := members[memberName]) {
				for (string(str callsite) <- arrayValues) {
					retval += "<callsite> -\> <memberName>";
				}
			}
		} 
	}
	return retval;
}

public set[str] importCallGraphWithoutInnerCalls(loc fileLocation, bool ignoreNatives, str frameworkFilename) {
	JSONText val = parse(#JSONText, fileLocation);
	Value ast = buildAST(val);
	set[str] retval = {};
	if (object(map[str memberName, Value memberValue] members) := ast) {
		for (str memberName <- members) {
			if (ignoreNatives && !contains(memberName, "@")) continue;
				if (array(list[Value] arrayValues) := members[memberName]) {
				for (string(str callsite) <- arrayValues) {
					if (startsWith(memberName, "<frameworkFilename>@") && 
						startsWith(callsite, "<frameworkFilename>@")) continue;
					retval += "<callsite> -\> <memberName>";
				}
			}
		} 
	}
	return retval;
}


public set[str] importCallGraphCallTargetsFromPlainText(loc fileLocation) = importCallGraphCallTargetsFromPlainText(fileLocation, true);
public set[str] importCallGraphCallTargetsFromPlainText(loc fileLocation, bool ignoreNatives) {
	set[str] retval = {};
	for (line <- readFileLines(fileLocation)) {
		splitted = split(" -\> ", line);
		if (ignoreNatives && !contains(splitted[1], "@")) continue;
		retval += trim(splitted[1]);
	}
	return retval;
}

public set[str] importCallGraphFromPlainText(loc fileLocation) = importCallGraphFromPlainText(fileLocation, true);
public set[str] importCallGraphFromPlainText(loc fileLocation, bool ignoreNatives) {
	set[str] retval = {};
	for (line <- readFileLines(fileLocation)) {
		splitted = split(" -\> ", line);
		if (ignoreNatives && !contains(splitted[1], "@")) continue;
		retval += trim(line);
	}
	return retval;
}

public set[str] importCallGraphFromPlainTextWithoutInnerCalls(loc fileLocation, str frameworkFilename) = importCallGraphFromPlainTextWithoutInnerCalls(fileLocation, true, frameworkFilename); 
public set[str] importCallGraphFromPlainTextWithoutInnerCalls(loc fileLocation, bool ignoreNatives, str frameworkFilename) {
	set[str] retval = {};
	for (line <- readFileLines(fileLocation)) {
		splitted = split(" -\> ", line);
		if (ignoreNatives && !contains(splitted[1], "@")) continue;
		if (startsWith(splitted[0], "<frameworkFilename>@") && startsWith(splitted[1], "<frameworkFilename>@")) continue;
		retval += trim(line);
	}
	return retval;
}

public set[str] convertCallGraphResultToStrings(CallGraphResult result) {
	rel[Vertex, Vertex] callGraph = result.graph;
	return getFlowGraphSet(callGraph);
}

public set[str] convertCallGraphResultsToCallTargets(CallGraphResult result) = convertCallGraphResultsToCallTargets(result, true);
public set[str] convertCallGraphResultsToCallTargets(CallGraphResult result, bool ignoreNatives) = convertCallGraphResultsToCallTargets(result.graph, ignoreNatives);
public set[str] convertCallGraphResultsToCallTargets(rel[Vertex, Vertex] graph) = convertCallGraphResultsToCallTargets(graph, true);
public set[str] convertCallGraphResultsToCallTargets(rel[Vertex, Vertex] graph, bool ignoreNatives) {
	rel[Vertex, Vertex] callGraph = (ignoreNatives ? { <x,y> | <x,y> <- graph, !(y is Builtin) } : graph);
	set[str] retval = {};
	for (<x, y> <- callGraph) retval += getUnmodifiedPositionString(y);
	return retval;
}

public set[str] convertCallGraphToCallTargets(set[str] graph) = convertCallGraphToCallTargets(graph, true);
public set[str] convertCallGraphToCallTargets(set[str] graph, bool ignoreNatives) {
	set[str] retval = {};
	for (line <- graph) {
		splitted = split(" -\> ", line);
		if (ignoreNatives && !contains(splitted[1], "@")) continue;
		retval += trim(splitted[1]);
	}
	return retval;
}

public set[str] convertCallGraphResults(CallGraphResult result) = convertCallGraphResultsToCallTargets(result, true);
public set[str] convertCallGraphResults(CallGraphResult result, bool ignoreNatives) = convertCallGraphResults(result.graph, ignoreNatives);
public set[str] convertCallGraphResults(rel[Vertex, Vertex] graph) = convertCallGraphResults(graph, true);
public set[str] convertCallGraphResults(rel[Vertex, Vertex] graph, bool ignoreNatives) {
	rel[Vertex, Vertex] callGraph = (ignoreNatives ? { <x,y> | <x,y> <- graph, !(y is Builtin) } : graph);
	set[str] retval = {};
	for (<x, y> <- callGraph) retval += getUnmodifiedPositionString(x) + " -\> " + getUnmodifiedPositionString(y);
	return retval;
}

public void storePessimisticCallGraphForStatistics(loc path) {
	pcg = createPessimisticCallGraphByPathWithoutNatives(path);
	resultSet = convertCallGraphResults(pcg);

	str fileStoreName;
	if (endsWith(path.uri, "/")) fileStoreName = replaceLast(path.uri, "/", "");
	else fileStoreName = path.uri;

	loc storePath = toLocation(dataSaveDir.uri + "/" + toLocation(fileStoreName).file + ".pcg.txt");
	str outputText = "";	
	for (str line <- resultSet)	outputText += line + "\n";

	outputText = substring(outputText, 0, size(outputText) - 1);
	writeFile(storePath, outputText);
}

//public void storeOptimisticCallGraphForStatistics(loc path) = storeOptimisticCallGraphForStatistics(path, <"", "">);
public void storeOptimisticCallGraphForStatistics(loc path) {
	ocg = createOptimisticCallGraphByPathWithoutNatives(path);
	resultSet = convertCallGraphResults(ocg);

	str fileStoreName;
	if (endsWith(path.uri, "/")) fileStoreName = replaceLast(path.uri, "/", "");
	else fileStoreName = path.uri;

	loc storePath = toLocation(dataSaveDir.uri + "/" + toLocation(fileStoreName).file + ".ocg.txt");
	str outputText = "";	
	for (str line <- resultSet)	outputText += line + "\n";
	outputText = substring(outputText, 0, size(outputText) - 1);
	writeFile(storePath, outputText);
}

public rel[Vertex, Vertex] createOptimisticCallGraphByPath(loc path) {
	assert(isDirectory(path));
	list[loc] files = getJavaScripts(path);
	list[Source] sources = [ parse(source) | source <- files ];
	return createOptimisticCallGraph(sources, files).graph;
}

public num calculatePrecision(set[str] dynamicCallGraph, set[str] staticCallGraph) = ((size(dynamicCallGraph & staticCallGraph)) * 1.0) / size(staticCallGraph);
public num calculateRecall(set[str] dynamicCallGraph, set[str] staticCallGraph) = ((size(dynamicCallGraph & staticCallGraph)) * 1.0) / size(dynamicCallGraph);

public set[str] showRecallInfluence(set[str] dynamicCallGraph, set[str] staticCallGraph) {
	set[str] dynamicCallSites = getCallSites(dynamicCallGraph);
	staticCallGraph = { g | g <- staticCallGraph, trim(split("-\>", g)[0]) in dynamicCallSites };
	return (dynamicCallGraph - staticCallGraph);
}

public set[str] showPrecisionInfluence(set[str] dynamicCallGraph, set[str] staticCallGraph) {
	set[str] dynamicCallSites = getCallSites(dynamicCallGraph);
	staticCallGraph = { g | g <- staticCallGraph, trim(split("-\>", g)[0]) in dynamicCallSites };
	return (staticCallGraph - dynamicCallGraph);
}

// Requires full edges
public tuple[num, num] calculateCallTargetStatistics(set[str] dynamicCallGraph, set[str] staticCallGraph) {
	set[str] dynamicCallSites = getCallSites(dynamicCallGraph);
	// filter callsites from the static call graph that are not covered in the dynamic
	staticCallGraph = { trim(split("-\>", g)[1]) | g <- staticCallGraph, trim(split("-\>", g)[0]) in dynamicCallSites };
	dynamicCallGraph = { trim(split("-\>", g)[1]) | g <- dynamicCallGraph };
	num precision = calculatePrecision(dynamicCallGraph, staticCallGraph) * 100.0;
	num recall = calculateRecall(dynamicCallGraph, staticCallGraph) * 100.0;
	return <precision, recall>;
}
public tuple[num, num] calculateStatistics(set[str] dynamicCallGraph, set[str] staticCallGraph) {
	set[str] dynamicCallSites = getCallSites(dynamicCallGraph);
	staticCallGraph = { g | g <- staticCallGraph, trim(split("-\>", g)[0]) in dynamicCallSites };
	num precision = calculatePrecision(dynamicCallGraph, staticCallGraph) * 100.0;
	num recall = calculateRecall(dynamicCallGraph, staticCallGraph) * 100.0;
	return <precision, recall>;
}
public set[str] getCallSites(set[str] callGraph) = { trim(split("-\>", g)[0]) | g <- callGraph };

public rel[Vertex, Vertex] createPessimisticCallGraphByPath(loc path) {
	assert(isDirectory(path));
	list[loc] files = getJavaScripts(path);
	list[Source] sources = [ parse(source) | source <- files ];
	return createPessimisticCallGraph(sources, files).graph;
}

public rel[Vertex, Vertex] createPessimisticCallGraphByPathWithoutNatives(loc path) {
	assert(isDirectory(path));
	list[loc] files = getJavaScripts(path);
	list[Source] sources = [ parse(source) | source <- files ];
	println("starting pcg creation for <files>");
	return createPessimisticCallGraphWithoutNatives(sources, files).graph;
}

public rel[Vertex, Vertex] createOptimisticCallGraphByPathWithoutNatives(loc path) {
	assert(isDirectory(path));
	list[loc] files = getJavaScripts(path);
	list[Source] sources = [ parse(source) | source <- files ];
	println("starting ocg creation for <files>");
	return createOptimisticCallGraphWithoutNatives(sources, files).graph;
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