module PessimisticCallGraph

import FlowGraphDataTypes;
import flowgraph;
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
	rel[Tree, Tree] oneShotCalls = getOneShotCalls(source); // C in original algorithm
	set[Tree] escapingFunctions = getEscapingFunctions(oneShotCalls, source);
	set[Tree] unresolvedCallSites = getUnresolvedCallSites(oneShotCalls, source);

	// Step #5 - Add interproedural edges
	rel[Vertex, Vertex] flowGraph = addInterproceduralEdges(oneShotCalls, escapingFunctions, unresolvedCallSites);
	flowGraph += createFlowGraphWithNativeFunctions(|project://thesis/src/native-functions.txt|, source); 

	rel[Vertex, Vertex] callGraph = { <y, x> | <x,y> <- optimisticTransitiveClosure(flowGraph), (Fun(Position _, Tree _) := x || Builtin(str _) := x), Callee(Position _, Tree _) := y };	
	rel[Vertex, Vertex] escapedOutput = { <x, y> | <x, y> <- flowGraph+, Fun(Position _, Tree _) := x, Unknown() := y };
	rel[Vertex, Vertex] unresolvedCallSitesOutput = { <x, y> | <x, y> <- flowGraph+, Unknown() := x, Callee(Position _, Tree _) := y };

	return CallGraphResult(callGraph, escapedOutput, unresolvedCallSitesOutput);
}