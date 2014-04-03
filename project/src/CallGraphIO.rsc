module CallGraphIO

import OptimisticCallGraph;
import PessimisticCallGraph;
import IO;
import String;
import flowgraph;
import FlowGraphPrettyPrinter;
import CallGraphDataTypes;
import FlowGraphIO;

public void printOptimisticCallGraph(loc location) {
	CallGraphResult result = createOptimisticCallGraph(location);
	println("Optimistic Call graph:");
	printFlowGraph(result.graph);
	println("\nUncertainties:");
	printFlowGraph(result.escapingFunctions);
	printFlowGraph(result.unresolvedCallSites);
}

public void printPessimisticCallGraph(loc location) {
	CallGraphResult result = createPessimisticCallGraph(location);
	println("Pessimistic Call graph:");
	printFlowGraph(result.graph);
	println("\nUncertainties:");
	printFlowGraph(result.escapingFunctions);
	printFlowGraph(result.unresolvedCallSites);
}

public void storeOptimisticCallGraph(loc location) {
	str outputFile = substring(inputfile.file, 0, findLast(inputfile.file, ".")) + ".txt";
	loc output = inputfile.parent + outputFile;

	CallGraphResult result = createOptimisticCallGraph(location);
	storeFlowGraph(output, result.graph);
}

public void storePessimisticCallGraph(loc location) {
	str outputFile = substring(inputfile.file, 0, findLast(inputfile.file, ".")) + ".txt";
	loc output = inputfile.parent + outputFile;

	CallGraphResult result = createPessimisticCallGraph(location);
	storeFlowGraph(output, result.graph);
}