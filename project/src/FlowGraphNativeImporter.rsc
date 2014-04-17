module FlowGraphNativeImporter

import IO;
import FlowGraphDataTypes;
import Relation;
import String;
import Map;
import flowgraph;

public rel[Vertex, Vertex] createFlowGraphFromFunctionList(loc location) {
	list[str] functionLines = readFileLines(location);
	rel[Vertex, Vertex] nativeGraph = {};

	for (str line <- functionLines) {
		list[str] splittedLine = split(":", line);
		str name = replaceAll(trim(splittedLine[0]), "\"", "");
		str functionName = replaceLast(replaceAll(trim(splittedLine[1]), "\"", ""), ",", "");

		Vertex nativeFunctionVertex = Builtin(name);
		Vertex nativeFunctionProp = Prop(functionName);
		nativeGraph += <nativeFunctionVertex, nativeFunctionProp>;
	}

	return nativeGraph;
}

public map[str, str] getNativeFunctionMap(loc location) {
	list[str] functionLines = readFileLines(location);
	map[str, str] natives = ();

	for (str line <- functionLines) {
		list[str] splittedLine = split(":", line);
		str name = replaceAll(trim(splittedLine[0]), "\"", "");
		str functionName = replaceLast(replaceAll(trim(splittedLine[1]), "\"", ""), ",", "");
		
		natives += (functionName : name);
	}

	return natives;
}

