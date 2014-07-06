module PessimisticCallGraph

import FlowGraphDataTypes;
import FlowGraphFast;
import Logger;
import IO;
import String;
import Map;
import Relation;
import ParseTree;
import Node;
import EcmaScript;
import SharedDataTypes;
import Set;
import FlowGraphPrettyPrinter;
import CallGraphDataTypes;
import SharedCallGraphFunctions;

public CallGraphResult createPessimisticCallGraph(loc location) = createPessimisticCallGraph(parse(location));

public CallGraphResult createPessimisticCallGraph(Source source) {
	set[OneShotCall] oneShotCalls = getOneShotCalls(source); // C in original algorithm
	set[EscapingFunction] escapingFunctions = getEscapingFunctions(oneShotCalls, source);
	set[UnresolvedCallSite] unresolvedCallSites = getUnresolvedCallSites(oneShotCalls, source);

	// Step #5 - Add interproedural edges 
	rel[Vertex, Vertex] flowGraph = addInterproceduralEdges(oneShotCalls, escapingFunctions, unresolvedCallSites);
	// flowGraph += createFlowGraph(source);
	flowGraph += createFlowGraphWithNativeFunctions(|project://thesis/src/native-functions.txt|, source); 
	println("done with adding interprocedural flow");
	rel[Vertex, Vertex] callGraph = { <y, x> | <x,y> <- optimisticTransitiveClosure(flowGraph), (Fun(Position _) := x || Builtin(str _) := x), Callee(Position _) := y };
	println("producing non optimistic transitive closure");

	printAlphabeticalFlowGraph(flowGraph);
	println("");

	// Commented out due to performance issues
	// Original has the other two as well :)
	/*
	rel[Vertex, Vertex] flowGraphTransitiveClosure = flowGraph+; 	
	rel[Vertex, Vertex] escapedOutput = { <x, y> | <x, y> <- flowGraphTransitiveClosure, Fun(Position _) := x, Unknown() := y };
	rel[Vertex, Vertex] unresolvedCallSitesOutput = { <x, y> | <x, y> <- flowGraphTransitiveClosure, Unknown() := x, Callee(Position _) := y };
	return CallGraphResult(flowGraph, escapedOutput, unresolvedCallSitesOutput);
	*/
	return CallGraphResult(callGraph, {}, {});
}

public CallGraphResult createPessimisticCallGraphWithoutNatives(loc location) = createPessimisticCallGraphWithoutNatives(parse(location));
public CallGraphResult createPessimisticCallGraphWithoutNatives(Source source) {
	set[OneShotCall] oneShotCalls = getOneShotCalls(source); // C in original algorithm
	set[EscapingFunction] escapingFunctions = getEscapingFunctions(oneShotCalls, source);
	set[UnresolvedCallSite] unresolvedCallSites = getUnresolvedCallSites(oneShotCalls, source);

	// Step #5 - Add interproedural edges 
	rel[Vertex, Vertex] flowGraph = addInterproceduralEdges(oneShotCalls, escapingFunctions, unresolvedCallSites);
	// flowGraph += createFlowGraph(source);
	flowGraph += createFlowGraph(source); 
	println("done with adding interprocedural flow");
	rel[Vertex, Vertex] callGraph = { <y, x> | <x,y> <- optimisticTransitiveClosure(flowGraph), (Fun(Position _) := x || Builtin(str _) := x), Callee(Position _) := y };
	println("producing non optimistic transitive closure");
	printAlphabeticalFlowGraph(flowGraph);
	println("");
	return CallGraphResult(callGraph, {}, {});
}

public CallGraphResult createPessimisticCallGraphWithoutNatives(list[Source] sources, list[loc] files) {
	set[OneShotCall] oneShotCalls = union({ getOneShotCalls(source) | source <- sources });
	set[EscapingFunction] escapingFunctions = union({ getEscapingFunctions(oneShotCalls, source) | source <- sources });
	set[UnresolvedCallSite] unresolvedCallSites = union({ getUnresolvedCallSites(oneShotCalls, source) | source <- sources });
	
	rel[Vertex, Vertex] flowGraph = addInterproceduralEdges(oneShotCalls, escapingFunctions, unresolvedCallSites);
	flowGraph += createFlowGraphFromMultipleFiles(files); 
	rel[Vertex, Vertex] callGraph = { <y, x> | <x,y> <- optimisticTransitiveClosure(flowGraph), (Fun(Position _) := x || Builtin(str _) := x), Callee(Position _) := y };

	printAlphabeticalFlowGraph(flowGraph);
	println("");


	return CallGraphResult(callGraph, {}, {});
}

public CallGraphResult createPessimisticCallGraphWithoutNativesWithFlow(list[Source] sources, list[loc] files) {
	set[OneShotCall] oneShotCalls = union({ getOneShotCalls(source) | source <- sources });
	set[EscapingFunction] escapingFunctions = union({ getEscapingFunctions(oneShotCalls, source) | source <- sources });
	set[UnresolvedCallSite] unresolvedCallSites = union({ getUnresolvedCallSites(oneShotCalls, source) | source <- sources });
	
	rel[Vertex, Vertex] flowGraph = addInterproceduralEdges(oneShotCalls, escapingFunctions, unresolvedCallSites);
	flowGraph += createFlowGraphFromMultipleFiles(files); 
	rel[Vertex, Vertex] callGraph = { <y, x> | <x,y> <- optimisticTransitiveClosure(flowGraph), (Fun(Position _) := x || Builtin(str _) := x), Callee(Position _) := y };
	
	return CallGraphResult(callGraph + flowGraph, {}, {});
}

public CallGraphResult createPessimisticCallGraph(list[Source] sources, list[loc] files) { 
	set[OneShotCall] oneShotCalls = union({ getOneShotCalls(source) | source <- sources });
	set[EscapingFunction] escapingFunctions = union({ getEscapingFunctions(oneShotCalls, source) | source <- sources });
	set[UnresolvedCallSite] unresolvedCallSites = union({ getUnresolvedCallSites(oneShotCalls, source) | source <- sources });
	
	rel[Vertex, Vertex] flowGraph = addInterproceduralEdges(oneShotCalls, escapingFunctions, unresolvedCallSites);
	flowGraph += createFlowGraphWithNativeFunctionsFromMultipleFiles(files); 
	rel[Vertex, Vertex] callGraph = { <y, x> | <x,y> <- optimisticTransitiveClosure(flowGraph), (Fun(Position _) := x || Builtin(str _) := x), Callee(Position _) := y };
	
	return CallGraphResult(callGraph, {}, {});
}