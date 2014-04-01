module FlowGraphIO

import String;
import IO;
import flowgraph;
import EcmaScript;
import SharedDataTypes;
import FlowGraphPrettyPrinter;

public void storeFlowGraphsByDirectory(loc input) {
	for (loc inputfile <- input.ls) {
		if (inputfile.extension != "js") continue;
		str outputFile = substring(inputfile.file, 0, findLast(inputfile.file, ".")) + ".txt";
		loc output = inputfile.parent + outputFile;
		println("writing <inputfile> flowgraph to <outputFile>");
		writeFile(output, getAlphabeticalFlowGraph(createFlowGraph(parse(inputfile))));
	}
}