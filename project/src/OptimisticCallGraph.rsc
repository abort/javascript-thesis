module OptimisticCallGraph

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
import Map;
import Location;

public CallGraphResult createOptimisticCallGraph(loc location) = createOptimisticCallGraph(parse(location));

public CallGraphResult createOptimisticCallGraph(Source source) {
	rel[Vertex, Vertex] callGraph = {};
	set[EscapingFunction] escapingFunctions = {};
	set[UnresolvedCallSite] unresolvedCallSites = {};
	rel[Vertex, Vertex] flowGraph = createFlowGraphWithNativeFunctions(|project://thesis/src/native-functions.txt|, source);
	
	bool fixpoint = false;
	int iterations = 0;
	while (!fixpoint) {
		// Store old situation
		rel[Vertex, Vertex] oldCallGraph = callGraph;
		set[EscapingFunction] oldEscapingFunctions = escapingFunctions;
		set[UnresolvedCallSite] oldUnresolvedCallSites = unresolvedCallSites;

		rel[Vertex, Vertex] oldFlowGraph = flowGraph;

		// Convert the old result to provide as a parameter to the add interprocedural edge function
		set[OneShotCall] callGraphParam = { OneShotCall(px, py, getArguments(source, px)) | <x, y> <- callGraph, Fun(Position py) := y, Callee(Position px) := x };
		flowGraph += addInterproceduralEdges(callGraphParam, escapingFunctions, unresolvedCallSites);

		rel[Vertex, Vertex] flowGraphTransitiveClosure = flowGraph+;
	 	callGraph = { <y, x> | <x,y> <- optimisticTransitiveClosure(flowGraph), (Fun(Position _) := x || Builtin(str _) := x), Callee(Position _) := y };	
		escapedOutput = { <x, y> | <x, y> <- flowGraphTransitiveClosure, Fun(Position _) := x, Unknown() := y };
		unresolvedCallSitesOutput = { <x, y> | <x, y> <- flowGraphTransitiveClosure, Unknown() := x, Callee(Position _) := y };
		iterations += 1;

		// Check whether something has changed or not to conclude
		if (oldCallGraph == callGraph && oldEscapingFunctions == escapingFunctions && oldUnresolvedCallSites == unresolvedCallSites && oldFlowGraph == flowGraph)
			fixpoint = true;
	}

	println("Fixpoint reached after <iterations> iterations");
	return CallGraphResult(callGraph, getEscapingFunctionsAsRelation(flowGraph), getUnresolvedCallSitesAsRelation(flowGraph));
}

private set[Expression] getArguments(Source src, Position p) {
	loc treeLoc = p.position;
	set[Expression] arguments = {};
	TreeSearchResult[Tree] searchResult = treeAt(#Tree, treeLoc, src);
	Tree tree;
	if (treeFound(Tree foundTree) := searchResult) {
		tree = foundTree;
	}
	else {
		throw "The given position (loc) is not found in the tree";
	}

	if (Expression e := tree && functionParams(Expression _, { Expression!comma ","}+ args) := e) {
		for (Expression arg <- args) 
			arguments += arg;
	}
		
	return arguments;
}

