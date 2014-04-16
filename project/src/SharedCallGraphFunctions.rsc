module SharedCallGraphFunctions

import CallGraphDataTypes;
import Relation;
import FlowGraphDataTypes;
import FlowGraphFast;
import IO;
import Set;
import Map;
import ParseTree;
import EcmaScript;
import Logger;
import SharedDataTypes;

public rel[Vertex, Vertex] getEscapingFunctionsAsRelation(rel[Vertex, Vertex] flowGraph) = { <x, y> | <x, y> <- flowGraph+, Fun(Position _) := x, Unknown() := y };
public rel[Vertex, Vertex] getUnresolvedCallSitesAsRelation(rel[Vertex, Vertex] flowGraph) = { <x, y> | <x, y> <- flowGraph+, Unknown() := x, Callee(Position _) := y };

public set[OneShotCall] getOneShotCalls(Source source) {
	set[OneShotCall] oneShotCalls = {};

	bottom-up visit (source) {
		case Expression e:{
			if (functionNoParams(Expression expressionToCall) := e || functionParams(Expression expressionToCall, { Expression!comma ","}+ _) := e) {
				if (nestedExpression(f:functionAnonymous({Id ","}* parameters, Block _)) := expressionToCall) {
					set[Expression] expressions = {};
					// Add params
					if (functionParams(Expression _, { Expression!comma ","}+ args) := e) {
						for (Expression arg <- args) 
							expressions += arg;
					}
					oneShotCalls += OneShotCall(getPosition(e), getPosition(f), expressions);
				}
			}
		}
	}
	
	return oneShotCalls;
}

public set[EscapingFunction] getEscapingFunctions(set[OneShotCall] oneShotCalls, Source source) {
	set[EscapingFunction] escapingFunctions = {};

	bottom-up visit(source) {
		case FunctionDeclaration f:{
			set[Id] params = {};
			for (Id param <- f.parameters) params += param;
			// these are per definition not in oneshot calls
			escapingFunctions += EscapingFunction(getPosition(f), params);
		}
		case Expression e:{
			Position position = getPosition(e);
			if (position notin oneShotCalls && (function(Id id, {Id ","}* params, Block _) := e || functionAnonymous({Id ","}* params, Block _) := e)) {
				set[Id] args = {};
				for (Id param <- params) args += param;
				escapingFunctions += EscapingFunction(position, args);
			}
		}
	}
	
	return escapingFunctions;
} 

public set[UnresolvedCallSite] getUnresolvedCallSites(set[OneShotCall] oneShotCalls, Source source) {
	set[UnresolvedCallSite] unresolvedCallSites = {};

	bottom-up visit(source) {
		case Expression e:{
			if (functionNoParams(Expression expressionToCall) := e || functionParams(Expression expressionToCall, { Expression!comma ","}+ _) := e) {
				Position p = getPosition(e);
				if (e notin { x.oneShotCall | x <- oneShotCalls }) {
					set[Expression] args = {};
					// Add args
					if (functionParams(Expression _, { Expression!comma ","}+ functionArgs) := e)
						 args += functionArgs;
	
					unresolvedCallSites += UnresolvedCallSite(p, args);
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
	tc = R;
	while (true) {
		tc1 = tc;
  		tc += {<x,y> | <x,y> <- tc, (y != Unknown()) } o R;
  		if (tc1 == tc) return tc;
	}
}

public rel[Vertex, Vertex] addInterproceduralEdges(set[OneShotCall] initialCallGraph, set[EscapingFunction] escapingFunctions, set[UnresolvedCallSite] unresolvedCallSites) {
	rel[Vertex, Vertex] flowGraph = {};
	
	// Algo 2 line #1-3
	for (OneShotCall call <- initialCallGraph) {
		int i = 1;
		for (Expression arg <- call.args) {
			// debug("<getPosition(callRel.oneShotCall)> to <getPosition(callRel.oneShotClosure)>");
			flowGraph += <Arg(call.oneShotCall, i), Parm(call.expressionToCall, i)>;
			i += 1;	
		}

		// Algo 2 line #3
		flowGraph += <Ret(call.expressionToCall), Res(call.oneShotCall)>;		
	}
	
	// Algo 2 line #4-6
	for (UnresolvedCallSite unresolvedSite <- unresolvedCallSites) {
		int i = 1;
		for (Expression arg <- unresolvedSite.args) {
			flowGraph += <Arg(unresolvedSite, i), Unknown()>;
			i += 1;	
		}

		flowGraph += <Unknown(), Res(unresolvedSite.position)>;	
	}
	
	// Algo 2 line #7-9
	for (EscapingFunction escapingFunction <- escapingFunctions) {
		int i = 1;
		for (Id param <- escapingFunction.args) {
			flowGraph += <Unknown(), Parm(escapingFunction.position, i)>;
			i += 1;
		}
		flowGraph += <Ret(escapingFunction.position), Unknown()>;
	}

	return flowGraph;
}