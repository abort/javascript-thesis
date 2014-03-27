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

public rel[CallVertex, CallVertex] createPessimisticCallGraph(loc location) = createPessimisticCallGraph(parse(location));

public data CallVertex = CallVertex(Tree tree);

private set[Tree] addEscapeFunction(set[Tree] escapeFunctions, Tree t, rel[CallVertex, CallVertex] callGraph) {
	// t never gets called
	if (vtx(t) notin range(callGraph)) {
		return (escapeFunctions + t);
	}
	
	return escapeFunctions;
} 

public rel[CallVertex, CallVertex] createPessimisticCallGraph(Source source) {
	rel[CallVertex, CallVertex] oneShotCalls = {}; // C in original algorithm
	set[Tree] escapingFunctions = {};
	set[Tree] unresolvedCallSites = {};
	

	top-down visit (source) {
		case Expression e:{
			if (functionNoParams(Expression expressionToCall) := e || functionParams(Expression expressionToCall, { Expression!comma ","}+ _) := e) {
				if (nestedExpression(Expression subexpression) := expressionToCall) {
					if (f:functionAnonymous({Id ","}* parameters, Block implementation) := subexpression) {
					// println("One shot closure <e> to <f>");
						oneShotCalls += <vtx(e), vtx(f)>;
					}
				}
			}
		}
	}
	
	top-down visit(source) {
		case FunctionDeclaration f:{
			// these are per definition not in oneshot calls
			escapingFunctions = addEscapeFunction(escapingFunctions, f, oneShotCalls);
			// unresolvedCallSites += f;
		}
		case Expression e:{
			if (function(Id id, {Id ","}* params, Block block) := e || functionAnonymous({Id ","}* params, Block block) := e) {
				escapingFunctions = addEscapeFunction(escapingFunctions, e, oneShotCalls);
			}
		}
	}

	top-down visit(source) {
		case Expression e:{
			if (functionNoParams(Expression expressionToCall) := e || functionParams(Expression expressionToCall, { Expression!comma ","}+ _) := e) {
				if (vtx(e) notin domain(oneShotCalls)) {
					unresolvedCallSites += e;
				}
			}
		}		
	}
	
	
	println("One shot calls: <size(oneShotCalls)>\nEscaping functions: <size(escapingFunctions)>\nUnresolved call sites: <size(unresolvedCallSites)>");

	
	rel[Vertex, Vertex] flowGraph = addInterproceduralEdges(oneShotCalls, escapingFunctions, unresolvedCallSites);

	flowGraph += createFlowGraph(source);	 
	rel[Vertex, Vertex] callGraph = {};
	rel[Vertex, Vertex] optimisticTransitiveClosure = optimisticTransitiveClosure(flowGraph);
	//println("\n\n\n");
	//println("optimistic transitive closure: <size(optimisticTransitiveClosure)>");
	//printFlowGraph(optimisticTransitiveClosure);
	
	//println("optimistic transitive closure without flowgraph: <size(optimisticTransitiveClosure - flowGraph)>");
	callGraph =	{ <y, x> | <x,y> <- optimisticTransitiveClosure, Fun(Position _) := x, Callee(Position _) := y };
	
	//println("new flowgraph:\n");
	println("Flow graph: ");
	printFlowGraph(callGraph);
	println();
	println("Uncertainties: ");
	
	rel[Vertex, Vertex] escapedOutput = { <x, y> | <x, y> <- flowGraph+, Fun(Position _) := x, Unknown() := y };
	rel[Vertex, Vertex] unresolvedCallSitesOutput = { <x, y> | <x, y> <- flowGraph+, Unknown() := x, Callee(Position _) := y };
	
	// callGraph += escapedOutput + unresolvedCallSitesOutput;
	rel[Vertex, Vertex] output = { <x, y> | <x, y> <- callGraph, ((Fun(Position _) := x && Callee(Position _) := y) || (Fun(Position _) := x && Unknown() := y) || (Unknown() := x && Callee(Position _) := y)) }; 
	printFlowGraph(escapedOutput);
	printFlowGraph(unresolvedCallSitesOutput);

	/*
	for (escapedO <- escapedOutput) {
		printVertexString(escapedO);
		print(" -\> Unknown()");
		println();
	}
	for (unresolvedCallSite <- unresolvedCallSitesOutput) {
		print("Unknown() -\> "); 
		printVertexString(unresolvedCallSite);
		println();
	}
	*/
//	println("non optimistic transitive closure:");
	//printFlowGraph(transitiveClosure(flowGraph) - flowGraph);

	return {};
}

private rel[Vertex, Vertex] transitiveClosure(rel[Vertex, Vertex] R) {
	return R+;
}

private rel[Vertex, Vertex] optimisticTransitiveClosure(rel[Vertex, Vertex] R) {
	rel[Vertex, Vertex] graphWithoutUnknown = { <x, y> | <x, y> <- R, !(y := Unknown()) };
	println("graph without unknown: <size(graphWithoutUnknown)>");
	return R + graphWithoutUnknown+;  
}

private rel[Vertex, Vertex] addInterproceduralEdges(rel[CallVertex, CallVertex] initialCallGraph, set[Tree] escapingFunctions, set[Tree] unresolvedCallSites) {
	rel[Vertex, Vertex] flowGraph = {};
	
	// Algo 2 line #1-3
	for (tuple[CallVertex oneShotCall, CallVertex oneShotClosure] callRel <- initialCallGraph) {
		if (functionParams(Expression _, { Expression!comma ","}+ args) := tree(callRel.oneShotCall)) {
			int i = 1;
			for (Expression arg <- args) {
				//println("Add arg <arg> to <unparse(tree(callRel.oneShotClosure))>");
				flowGraph += <Arg(getNodePosition(tree(callRel.oneShotCall)), i), Parm(getNodePosition(tree(callRel.oneShotClosure)), i)>;
				i += 1;	
			}
		}
		
		// Algo 2 line #3
		flowGraph += <Ret(getNodePosition(tree(callRel.oneShotClosure))), Res(getNodePosition(tree(callRel.oneShotCall)))>;		
	}
	
	// Algo 2 line #4-6
	for (Tree unresolvedSite <- unresolvedCallSites) {
		//println("Unresolved site: <unparse(unresolvedSite)> line (<getNodePosition(unresolvedSite).line>)");
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
				println("Add param <param> to <escapingFunction>");
				flowGraph += <Unknown(), Parm(getNodePosition(escapingFunction), i)>;
				i += 1;
			}
		}
		
		flowGraph += <Ret(getNodePosition(escapingFunction)), Unknown()>;
	}
	
	return flowGraph;
}

private Tree tree(CallVertex(Tree t)) = t;
private CallVertex vtx(Tree t) = CallVertex(t);