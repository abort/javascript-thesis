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
	rel[Vertex, Vertex] callGraph = { <y, x> | <x,y> <- sanderOptimisticTransitiveClosure(flowGraph), (Fun(Position _) := x || Builtin(str _) := x), Callee(Position _) := y };
	println("producing non optimistic transitive closure");
	// Commented out due to performance issues
	/*rel[Vertex, Vertex] flowGraphTransitiveClosure = flowGraph+; 	
	rel[Vertex, Vertex] escapedOutput = { <x, y> | <x, y> <- flowGraphTransitiveClosure, Fun(Position _) := x, Unknown() := y };
	rel[Vertex, Vertex] unresolvedCallSitesOutput = { <x, y> | <x, y> <- flowGraphTransitiveClosure, Unknown() := x, Callee(Position _) := y };

	return CallGraphResult(flowGraph, escapedOutput, unresolvedCallSitesOutput);
	*/
	
	return CallGraphResult(flowGraph, {}, {});
	//return CallGraphResult(sanderOptimisticTransitiveClosure(flowGraph), {}, {});
}