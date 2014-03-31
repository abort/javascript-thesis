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


public rel[Vertex, Vertex] createOptimisticCallGraph(loc location) = createOptimisticCallGraph(parse(location));

public void printOptimisticCallGraph(loc location) {
	CallGraphResult result = createOptimisticCallGraph(parse(location));
	println("Optimistic Call graph:");
	printFlowGraph(result.graph);
	println("\nUncertainties:");
	printFlowGraph(result.escapingFunctions);
	printFlowGraph(result.unresolvedCallSites);
}

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
		rel[Tree, Tree] callGraphParam = { <x.tree, y.tree> | <x, y> <- callGraph };
		flowGraph = addOptimisticInterproceduralEdges(flowGraph, callGraphParam, escapingFunctions, unresolvedCallSites);

	 	callGraph = { <y, x> | <x,y> <- optimisticTransitiveClosure(flowGraph), Fun(Position _, Tree _) := x, Callee(Position _, Tree _) := y };	
		escapedOutput = { <x, y> | <x, y> <- flowGraph+, Fun(Position _, Tree _) := x, Unknown() := y };
		unresolvedCallSitesOutput = { <x, y> | <x, y> <- flowGraph+, Unknown() := x, Callee(Position _, Tree _) := y };
		iterations += 1;

		// Check whether something has changed or not to conclude
		if (oldCallGraph == callGraph && oldEscapingFunctions == escapingFunctions && oldUnresolvedCallSites == unresolvedCallSites && oldFlowGraph == flowGraph)
			fixpoint = true;
	}

	// Add native calls
	callGraph += { <y,x> | <x,y> <- optimisticTransitiveClosure(flowGraph), Builtin(str _) := x, Callee(Position _, Tree _) := y };

	debug("Fixpoint reached after <iterations> iterations");
	return CallGraphResult(callGraph, getEscapingFunctionsAsRelation(flowGraph), getUnresolvedCallSitesAsRelation(flowGraph));
}

public rel[Vertex, Vertex] addOptimisticInterproceduralEdges(rel[Vertex, Vertex] flowGraph, rel[Tree, Tree] initialCallGraph, set[Tree] escapingFunctions, set[Tree] unresolvedCallSites) {
	// Algo 2 line #1-3
	for (tuple[Tree oneShotCall, Tree oneShotClosure] callRel <- initialCallGraph) {
		if (functionParams(Expression _, { Expression!comma ","}+ args) := callRel.oneShotCall) {
			int i = 1;
			for (Expression arg <- args) {
				flowGraph += <Arg(getNodePosition(callRel.oneShotCall), i, callRel.oneShotCall), Parm(getNodePosition(callRel.oneShotClosure), i, callRel.oneShotClosure)>;
				i += 1;	
			}
		}

		// Algo 2 line #3
		flowGraph += <Ret(getNodePosition(callRel.oneShotClosure), callRel.oneShotClosure), Res(getNodePosition(callRel.oneShotCall), callRel.oneShotCall)>;		
	}
	
	// Algo 2 line #4-6
	for (Tree unresolvedSite <- unresolvedCallSites) {
		if (functionParams(Expression _, { Expression!comma ","}+ args) := unresolvedSite) {
			int i = 1;
			for (Expression arg <- args) {
				flowGraph += <Arg(getNodePosition(unresolvedSite), i, unresolvedSite), Unknown()>;
				i += 1;	
			}
		}

		flowGraph += <Unknown(), Res(getNodePosition(unresolvedSite), unresolvedSite)>;	
	}
	
	// Algo 2 line #7-9
	for (Tree escapingFunction <- escapingFunctions) {
		if (function(Id id, {Id ","}* params, Block block) := escapingFunction || functionAnonymous({Id ","}* params, Block block) := escapingFunction) {
			int i = 1;
			for (Id param <- params) {
				debug("Add param <param> to <escapingFunction>");
				flowGraph += <Unknown(), Parm(getNodePosition(escapingFunction), i, escapingFunction)>;
				i += 1;
			}
		}
		elseif (FunctionDeclaration f := escapingFunction) {
			int i = 1;
			for (Id param <- f.parameters) {
				debug("Add param <param> to <escapingFunction>");
				flowGraph += <Unknown(), Parm(getNodePosition(escapingFunction), i, escapingFunction)>;
				i += 1;
			}
		}
		flowGraph += <Ret(getNodePosition(escapingFunction), escapingFunction), Unknown()>;
	}

	return flowGraph;
}