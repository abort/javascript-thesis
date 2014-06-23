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
import String;

public rel[Vertex, Vertex] getEscapingFunctionsAsRelation(rel[Vertex, Vertex] flowGraph) = { <x, y> | <x, y> <- flowGraph+, Fun(Position _) := x, Unknown() := y };
public rel[Vertex, Vertex] getUnresolvedCallSitesAsRelation(rel[Vertex, Vertex] flowGraph) = { <x, y> | <x, y> <- flowGraph+, Unknown() := x, Callee(Position _) := y };

public set[OneShotCall] getOneShotCalls(Source source) {
	set[OneShotCall] oneShotCalls = {};

	bottom-up visit (source) {
		case Expression e:{
			if (functionNoParams(Expression expressionToCall) := e || functionParams(Expression expressionToCall, { Expression!comma ","}+ _) := e) {
				if (nestedExpression(f:functionAnonymous({Id ","}* parameters, Block _)) := expressionToCall
					|| nestedExpression(f:function(Id name, {Id ","}* parameters, Block _)) := expressionToCall) {
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
			if (position notin { x.expressionToCall | x <- oneShotCalls } && (function(Id id, {Id ","}* params, Block _) := e || functionAnonymous({Id ","}* params, Block _) := e)) {
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
			if (functionNoParams(Expression expressionToCall) := e || functionParams(Expression expressionToCall, { Expression!comma ","}+ functionArgs) := e) {
				Position p = getPosition(e);
				if (getPosition(e) notin { x.oneShotCall | x <- oneShotCalls }) {
					int args = 0;
					// Add args
					if (e is functionParams) {
						for (Expression _ <- functionArgs) {
							args += 1;
						}
					}
	
					unresolvedCallSites += UnresolvedCallSite(p, args);
				}
			}
		}
	}
	
	return unresolvedCallSites;
}

public set[Tree] getFunctions(Tree tree) {
	set[Tree] functions = {};
	top-down visit(tree) {
		case Expression e:{
			if (e is function || e is functionAnonymous) {
				functions += e;
			}
		}
		case FunctionDeclaration f:{
			functions += f;
		}
	}
	
	return functions;
}

public rel[Vertex, Vertex] optimisticTransitiveClosure(rel[Vertex, Vertex] R) {
	tc = R;
	while (true) {
		tc1 = tc;
  		tc += {<x,y> | <x,y> <- tc, (y != Unknown()) } o R;
  		if (tc1 == tc) return tc;
	}
}

public rel[Vertex, Vertex] optimisticTransitiveClosureWithFileFilter(rel[Vertex, Vertex] R, str fromFileToIgnore, str toFileToIgnore) {
	tc = R;
	while (true) {
		tc1 = tc;
  		tc += { <x,y> | <x,y> <- tc, y != Unknown(), !(hasSourceFile(x, toFileToIgnore) && hasSourceFile(y, toFileToIgnore)) } o R;
  		if (tc1 == tc) return tc;
	}
}
private bool hasSourceFile(Vertex v, str filenameToIgnore) {
	if (isUnknown(v) || Empty() := v || Builtin(str _) := v || Prop(str _) := v) return false;
	if (isEmpty(filenameToIgnore)) return false;
	
	Position p = v.p;
	if (p is InexistentPosition) return false;
	return (p.position.file == filenameToIgnore);
}


private bool isUnknown(Vertex vertex) = vertex := Unknown();

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
	
	println("added one shot calls");
	
	// Algo 2 line #4-6
	for (UnresolvedCallSite unresolvedSite <- unresolvedCallSites) {
		int i = 1;
		while (i <= unresolvedSite.args) {
			// println("arg to unknown");
			flowGraph += <Arg(unresolvedSite.position, i), Unknown()>;
 			i += 1;
		}

		flowGraph += <Unknown(), Res(unresolvedSite.position)>;	
	}
	
	println("added unresolved call sites");
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