module CallGraphIO

import OptimisticCallGraph;
import PessimisticCallGraph;
import IO;
import String;
import FlowGraphFast;
import FlowGraphPrettyPrinter;
import CallGraphDataTypes;
import FlowGraphIO;
import EcmaScript;
import SharedDataTypes;
import FlowGraphDataTypes;

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
	str outputFile = substring(location.file, 0, findLast(location.file, "."));
	loc output = location.parent + outputFile + "1.txt";
	loc output2 = location.parent + outputFile + "2.txt";

	Source source = parse(location);
	rel[Vertex, Vertex] flowGraph = createFlowGraphWithNativeFunctions(|project://thesis/src/native-functions.txt|, source);
	
	CallGraphResult result = createOptimisticCallGraph(flowGraph, source);
	storeAlphabeticalFlowGraph(output, result.graph);
	
	CallGraphResult result2 = createOptimisticCallGraph2(flowGraph, source);
	storeAlphabeticalFlowGraph(output2, result2.graph);
	
	println("Result equality: <result == result2>");
}

public void storePessimisticCallGraph(loc location) {
	str outputFile = substring(location.file, 0, findLast(location.file, ".")) + ".txt";
	loc output = location.parent + outputFile;

	CallGraphResult result = createPessimisticCallGraph(location);
	storeAlphabeticalFlowGraph(output, result.graph);
}