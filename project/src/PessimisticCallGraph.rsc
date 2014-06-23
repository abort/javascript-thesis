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
	// Commented out due to performance issues
	/*
	rel[Vertex, Vertex] flowGraphTransitiveClosure = flowGraph+; 	
	rel[Vertex, Vertex] escapedOutput = { <x, y> | <x, y> <- flowGraphTransitiveClosure, Fun(Position _) := x, Unknown() := y };
	rel[Vertex, Vertex] unresolvedCallSitesOutput = { <x, y> | <x, y> <- flowGraphTransitiveClosure, Unknown() := x, Callee(Position _) := y };
	return CallGraphResult(flowGraph, escapedOutput, unresolvedCallSitesOutput);
*/
	return CallGraphResult(callGraph, {}, {});
}


public CallGraphResult createPessimisticCallGraphWithFilteredResults(list[Source] sources, list[loc] files, tuple[str from, str to] pathToIgnore) {
	bool ignorePath = !(isEmpty(pathToIgnore.from) && isEmpty(pathToIgnore.to)); 
	rel[Vertex, Vertex] callGraph = createPessimisticCallGraph(sources, files).graph; 
	println("intermediate: <size(callGraph)>");
	if (ignorePath) {
		callGraph = { <x, y> | <x,y> <- callGraph, Callee(Position calleePosition) := x, Fun(Position funcPosition) := y, calleePosition is ExistingPosition, funcPosition is ExistingPosition, (calleePosition.position.file != pathToIgnore.from && funcPosition.position.file != pathToIgnore.to) };
	}
	
	return CallGraphResult(callGraph, {}, {});
}


public CallGraphResult createPessimisticCallGraphWithoutNatives(list[Source] sources, list[loc] files, tuple[str from, str to] pathToIgnore) {
	bool ignorePath = !(isEmpty(pathToIgnore.from) && isEmpty(pathToIgnore.to)); 
	set[OneShotCall] oneShotCalls = union({ getOneShotCalls(source) | source <- sources });
	set[EscapingFunction] escapingFunctions = union({ getEscapingFunctions(oneShotCalls, source) | source <- sources });
	set[UnresolvedCallSite] unresolvedCallSites = union({ getUnresolvedCallSites(oneShotCalls, source) | source <- sources });
	
	rel[Vertex, Vertex] flowGraph = addInterproceduralEdges(oneShotCalls, escapingFunctions, unresolvedCallSites);
	flowGraph += createFlowGraphFromMultipleFiles(files); 
	rel[Vertex, Vertex] callGraph = { <y, x> | <x,y> <- optimisticTransitiveClosureWithFileFilter(flowGraph, pathToIgnore.from, pathToIgnore.to), (Fun(Position _) := x || Builtin(str _) := x), Callee(Position _) := y };
	
	return CallGraphResult(callGraph, {}, {});
}



public CallGraphResult createPessimisticCallGraph(list[Source] sources, list[loc] files, tuple[str from, str to] pathToIgnore) {
	bool ignorePath = !(isEmpty(pathToIgnore.from) && isEmpty(pathToIgnore.to)); 
	set[OneShotCall] oneShotCalls = union({ getOneShotCalls(source) | source <- sources });
	set[EscapingFunction] escapingFunctions = union({ getEscapingFunctions(oneShotCalls, source) | source <- sources });
	set[UnresolvedCallSite] unresolvedCallSites = union({ getUnresolvedCallSites(oneShotCalls, source) | source <- sources });
	
	rel[Vertex, Vertex] flowGraph = addInterproceduralEdges(oneShotCalls, escapingFunctions, unresolvedCallSites);
	flowGraph += createFlowGraphWithNativeFunctionsFromMultipleFiles(files); 
	rel[Vertex, Vertex] callGraph = { <y, x> | <x,y> <- optimisticTransitiveClosureWithFileFilter(flowGraph, pathToIgnore.from, pathToIgnore.to), (Fun(Position _) := x || Builtin(str _) := x), Callee(Position _) := y };
	/*
	if (ignorePath) {
		callGraph = { <x, y> | <x,y> <- callGraph, Callee(Position calleePosition) := x, calleePosition is ExistingPosition, calleePosition.file != pathIgnore.from, 
				Func(Position funcPosition) := y, funcPosition is ExisitingPosition, funcPosition.file != pathIgnore.to };
	}*/
	
	return CallGraphResult(callGraph, {}, {});
}

public CallGraphResult createPessimisticCallGraph(list[Source] sources, list[loc] files) = createPessimisticCallGraph(sources, files, <"","">);