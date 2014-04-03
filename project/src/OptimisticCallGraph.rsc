module OptimisticCallGraph

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

data CallGraphIntermediateResult = CallGraphIntermediateResult(rel[Vertex, Vertex] callGraph, set[Tree] escapingFunctions, set[Tree] unresolvedCallSites, rel[Vertex, Vertex] flowGraph);
data CallGraphInput = CallGraphInput(rel[Tree, Tree] callGraph, set[Tree] escapingFunctions, set[Tree] unresolvedCallSites, rel[Vertex, Vertex] flowGraph);


public CallGraphResult createOptimisticCallGraph(loc location) = createOptimisticCallGraph(parse(location));

public CallGraphResult createOptimisticCallGraph(Source source) {
	rel[Vertex, Vertex] callGraph = {};
	set[Tree] escapingFunctions = {};
	set[Tree] unresolvedCallSites = {};
	rel[Vertex, Vertex] flowGraph = createFlowGraphWithNativeFunctions(|project://thesis/src/native-functions.txt|, source);
	
	bool fixpoint = false;
	int iterations = 0;
	while (!fixpoint) {
		// Store old situation
		rel[Vertex, Vertex] oldCallGraph = callGraph;
		set[Tree] oldEscapingFunctions = escapingFunctions;
		set[Tree] oldUnresolvedCallSites = unresolvedCallSites;
		rel[Vertex, Vertex] oldFlowGraph = flowGraph;

		// Convert the old result to provide as a parameter to the add interprocedural edge function
		rel[Tree, Tree] callGraphParam = { <x.tree, y.tree> | <x, y> <- callGraph, Fun(Position _, Tree _) := y, Callee(Position _, Tree _) := x };
		flowGraph += addInterproceduralEdges(callGraphParam, escapingFunctions, unresolvedCallSites);

	 	callGraph = { <y, x> | <x,y> <- optimisticTransitiveClosure(flowGraph), (Fun(Position _, Tree _) := x || Builtin(str _) := x), Callee(Position _, Tree _) := y };	
		escapedOutput = { <x, y> | <x, y> <- flowGraph+, Fun(Position _, Tree _) := x, Unknown() := y };
		unresolvedCallSitesOutput = { <x, y> | <x, y> <- flowGraph+, Unknown() := x, Callee(Position _, Tree _) := y };
		iterations += 1;

		// Check whether something has changed or not to conclude
		if (oldCallGraph == callGraph && oldEscapingFunctions == escapingFunctions && oldUnresolvedCallSites == unresolvedCallSites && oldFlowGraph == flowGraph)
			fixpoint = true;
	}

	debug("Fixpoint reached after <iterations> iterations");
	return CallGraphResult(callGraph, getEscapingFunctionsAsRelation(flowGraph), getUnresolvedCallSitesAsRelation(flowGraph));
}