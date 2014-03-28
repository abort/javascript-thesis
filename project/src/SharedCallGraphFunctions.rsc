module SharedCallGraphFunctions

import CallGraphDataTypes;
import Relation;
import FlowGraphDataTypes;
import flowgraph;
import Set;
import Map;
import ParseTree;
import EcmaScript;
import Logger;
import SharedDataTypes;

public rel[Vertex, Vertex] getEscapingFunctionsAsRelation(rel[Vertex, Vertex] flowGraph) = { <x, y> | <x, y> <- flowGraph+, Fun(Position _, Tree _) := x, Unknown() := y };
public rel[Vertex, Vertex] getUnresolvedCallSitesAsRelation(rel[Vertex, Vertex] flowGraph) = { <x, y> | <x, y> <- flowGraph+, Unknown() := x, Callee(Position _, Tree _) := y };

public set[Tree] addEscapeFunction(set[Tree] escapeFunctions, Tree t, rel[Tree, Tree] callGraph) {
	// t never gets called
	if (t notin range(callGraph)) return (escapeFunctions + t);	
	return escapeFunctions;
}

public rel[Tree, Tree] getOneShotCalls(Source source) {
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

public set[Tree] getEscapingFunctions(rel[Tree, Tree] oneShotCalls, Source source) {
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

public set[Tree] getUnresolvedCallSites(rel[Tree, Tree] oneShotCalls, Source source) {
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

public rel[Vertex, Vertex] transitiveClosure(rel[Vertex, Vertex] R) {
	return R+;
}

public rel[Vertex, Vertex] optimisticTransitiveClosure(rel[Vertex, Vertex] R) {
	rel[Vertex, Vertex] graphWithoutUnknown = { <x, y> | <x, y> <- R, !(y := Unknown()) };
	return R + graphWithoutUnknown+;  
}

public rel[Vertex, Vertex] addInterproceduralEdges(rel[Tree, Tree] initialCallGraph, set[Tree] escapingFunctions, set[Tree] unresolvedCallSites) {
	rel[Vertex, Vertex] flowGraph = {};
	
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
		// println("Escaping function: <unparse(escapingFunction)> line (<getNodePosition(escapingFunction).line>)");
		if (function(Id id, {Id ","}* params, Block block) := escapingFunction) {
			int i = 1;
			for (Id param <- params) {
				debug("Add param <param> to <escapingFunction>");
				flowGraph += <Unknown(), Parm(getNodePosition(escapingFunction), i, escapingFunction)>;
				i += 1;
			}
		}
		
		flowGraph += <Ret(getNodePosition(escapingFunction), escapingFunction), Unknown()>;
	}

	return flowGraph;
}