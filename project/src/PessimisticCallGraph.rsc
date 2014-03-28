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

public rel[Vertex, Vertex] createPessimisticCallGraph(loc location) = createPessimisticCallGraph(parse(location));

public void printPessimisticCallGraph(loc location) {
	CallGraphResult result = createPessimisticCallGraph(parse(location));
	println("Pessimistic Call graph:");
	printFlowGraph(result.graph);
	println("\nUncertainties:");
	printFlowGraph(result.escapingFunctions);
	printFlowGraph(result.unresolvedCallSites);
}

public CallGraphResult createPessimisticCallGraph(Source source) {
	rel[Tree, Tree] oneShotCalls = getOneShotCalls(source); // C in original algorithm
	set[Tree] escapingFunctions = getEscapingFunctions(oneShotCalls, source);
	set[Tree] unresolvedCallSites = getUnresolvedCallSites(oneShotCalls, source);

	// Step #5 - Add interproedural edges 
	rel[Vertex, Vertex] flowGraph = addInterproceduralEdges(oneShotCalls, escapingFunctions, unresolvedCallSites);
	flowGraph += createFlowGraphWithNativeFunctions(|project://thesis/src/native-functions.txt|, source);	 

	rel[Vertex, Vertex] callGraph = { <y, x> | <x,y> <- optimisticTransitiveClosure(flowGraph), Fun(Position _) := x, Callee(Position _) := y };	
	rel[Vertex, Vertex] escapedOutput = { <x, y> | <x, y> <- flowGraph+, Fun(Position _) := x, Unknown() := y };
	rel[Vertex, Vertex] unresolvedCallSitesOutput = { <x, y> | <x, y> <- flowGraph+, Unknown() := x, Callee(Position _) := y };

	return CallGraphResult(callGraph, escapedOutput, unresolvedCallSitesOutput);
}

private set[Tree] addEscapeFunction(set[Tree] escapeFunctions, Tree t, rel[Tree, Tree] callGraph) {
	// t never gets called
	if (t notin range(callGraph)) return (escapeFunctions + t);	
	return escapeFunctions;
}

private rel[Tree, Tree] getOneShotCalls(Source source) {
	rel[Tree, Tree] oneShotCalls = {};

	top-down visit (source) {
		case Expression e:{
			if (functionNoParams(Expression expressionToCall) := e || functionParams(Expression expressionToCall, { Expression!comma ","}+ _) := e) {
				if (nestedExpression(f:functionAnonymous({Id ","}* parameters, Block implementation)) := expressionToCall) {
					oneShotCalls += <e, f>;
				}
			}
		}
	}
	
	return oneShotCalls;
}

private set[Tree] getEscapingFunctions(rel[Tree, Tree] oneShotCalls, Source source) {
	set[Tree] escapingFunctions = {};

	top-down visit(source) {
		case FunctionDeclaration f:{
			// these are per definition not in oneshot calls
			escapingFunctions = addEscapeFunction(escapingFunctions, f, oneShotCalls);
		}
		case Expression e:{
			if (function(Id id, {Id ","}* params, Block block) := e || functionAnonymous({Id ","}* params, Block block) := e) {
				escapingFunctions = addEscapeFunction(escapingFunctions, e, oneShotCalls);
			}
		}
	}
	
	return escapingFunctions;
} 

private set[Tree] getUnresolvedCallSites(rel[Tree, Tree] oneShotCalls, Source source) {
	set[Tree] unresolvedCallSites = {};

	top-down visit(source) {
		case Expression e:{
			if (functionNoParams(Expression expressionToCall) := e || functionParams(Expression expressionToCall, { Expression!comma ","}+ _) := e) {
				if (e notin domain(oneShotCalls)) {
					unresolvedCallSites += e;
				}
			}
		}		
	}
	
	return unresolvedCallSites;
}

private rel[Vertex, Vertex] transitiveClosure(rel[Vertex, Vertex] R) {
	return R+;
}

private rel[Vertex, Vertex] optimisticTransitiveClosure(rel[Vertex, Vertex] R) {
	rel[Vertex, Vertex] graphWithoutUnknown = { <x, y> | <x, y> <- R, !(y := Unknown()) };
	return R + graphWithoutUnknown+;  
}

private rel[Vertex, Vertex] addInterproceduralEdges(rel[Tree, Tree] initialCallGraph, set[Tree] escapingFunctions, set[Tree] unresolvedCallSites) {
	rel[Vertex, Vertex] flowGraph = {};
	
	// Algo 2 line #1-3
	for (tuple[Tree oneShotCall, Tree oneShotClosure] callRel <- initialCallGraph) {
		if (functionParams(Expression _, { Expression!comma ","}+ args) := callRel.oneShotCall) {
			int i = 1;
			for (Expression arg <- args) {
				flowGraph += <Arg(getNodePosition(callRel.oneShotCall), i), Parm(getNodePosition(callRel.oneShotClosure), i)>;
				i += 1;	
			}
		}

		// Algo 2 line #3
		flowGraph += <Ret(getNodePosition(callRel.oneShotClosure)), Res(getNodePosition(callRel.oneShotCall))>;		
	}
	
	// Algo 2 line #4-6
	for (Tree unresolvedSite <- unresolvedCallSites) {
		if (functionParams(Expression _, { Expression!comma ","}+ args) := unresolvedSite) {
			int i = 1;
			for (Expression arg <- args) {
				flowGraph += <Arg(getNodePosition(unresolvedSite), i), Unknown()>;
				i += 1;	
			}
		}

		flowGraph += <Unknown(), Res(getNodePosition(unresolvedSite))>;	
	}
	
	// Algo 2 line #7-9
	for (Tree escapingFunction <- escapingFunctions) {
		// println("Escaping function: <unparse(escapingFunction)> line (<getNodePosition(escapingFunction).line>)");
		if (function(Id id, {Id ","}* params, Block block) := escapingFunction) {
			int i = 1;
			for (Id param <- params) {
				debug("Add param <param> to <escapingFunction>");
				flowGraph += <Unknown(), Parm(getNodePosition(escapingFunction), i)>;
				i += 1;
			}
		}
		
		flowGraph += <Ret(getNodePosition(escapingFunction)), Unknown()>;
	}

	return flowGraph;
}