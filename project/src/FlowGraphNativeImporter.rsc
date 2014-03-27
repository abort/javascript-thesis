module FlowGraphNativeImporter

import IO;
import FlowGraphDataTypes;
import Relation;
import String;
import Map;
import flowgraph;
import lang::csv::IO;

public rel[Vertex, Vertex] createFlowGraphFromFunctionList(loc location) {
	functions = readCSV(#list[str], location, ("header": "false")); // TODO BUG FOUND, expects a map of str to str, but crashes with "false" as value 

	println("functions:");
	for (str f <- functions) {
		println(f);
	}
	return {};
}