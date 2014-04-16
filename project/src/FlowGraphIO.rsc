module FlowGraphIO

import String;
import IO;
import FlowGraphFast;
import EcmaScript;
import SharedDataTypes;
import FlowGraphPrettyPrinter;
import FlowGraphDataTypes;

public void storeFlowGraphsByDirectory(loc input) {
	for (loc inputfile <- input.ls) {
		if (inputfile.extension != "js") continue;
		str outputFile = substring(inputfile.file, 0, findLast(inputfile.file, ".")) + ".txt";
		loc output = inputfile.parent + outputFile;
		println("writing <inputfile> flowgraph to <outputFile>");
		writeFile(output, getAlphabeticalFlowGraph(createFlowGraph(parse(inputfile))));
	}
}

public void storeFlowGraphByFile(loc input) {
	if (input.extension != "js") continue;
	str outputFile = substring(input.file, 0, findLast(input.file, ".")) + ".txt";
	loc output = input.parent + outputFile;
	println("writing <input> flowgraph to <outputFile>");
	writeFile(output, getAlphabeticalFlowGraph(createFlowGraph(parse(input))));	
}

public void storeFlowGraph(loc output, rel[Vertex, Vertex] flowGraph) = writeFile(output, getFlowGraph(flowGraph));
public void storeAlphabeticalFlowGraph(loc output, rel[Vertex, Vertex] flowGraph) = writeFile(output, getAlphabeticalFlowGraph(flowGraph));