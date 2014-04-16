module CallGraphIO

import OptimisticCallGraph;
import PessimisticCallGraph;
import IO;
import String;
import FlowGraphFast;
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

public void printAlphabeticalPessimisticCallGraph(loc location) {
	CallGraphResult result = createPessimisticCallGraph(location);
	println("Pessimistic Call graph:");
	printAlphabeticalFlowGraph(result.graph);
	println("\nUncertainties:");
	printAlphabeticalFlowGraph(result.escapingFunctions);
	printAlphabeticalFlowGraph(result.unresolvedCallSites);
}

public void printAlphabeticalOptimisticCallGraph(loc location) {
	CallGraphResult result = createOptimisticCallGraph(location);
	println("Optimistic Call graph:");
	printAlphabeticalFlowGraph(result.graph);
	println("\nUncertainties:");
	printAlphabeticalFlowGraph(result.escapingFunctions);
	printAlphabeticalFlowGraph(result.unresolvedCallSites);
}

public void storeOptimisticCallGraph(loc location) {
	str outputFile = substring(location.file, 0, findLast(location.file, ".")) + ".txt";
	loc output = location.parent + outputFile;

	CallGraphResult result = createOptimisticCallGraph(location);
	storeAlphabeticalFlowGraph(output, result.graph);
}

public void storePessimisticCallGraph(loc location) {
	str outputFile = substring(location.file, 0, findLast(location.file, ".")) + ".txt";
	loc output = location.parent + outputFile;

	CallGraphResult result = createPessimisticCallGraph(location);
	storeAlphabeticalFlowGraph(output, result.graph);
}