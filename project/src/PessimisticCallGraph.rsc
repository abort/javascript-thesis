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

public rel[CallVertex, CallVertex] createPessimisticCallGraph(loc location) = createPessimisticCallGraph(parse(location));

public data CallVertex = CallVertex(Position p);

public rel[CallVertex, CallVertex] createPessimisticCallGraph(Source source) {
	rel[CallVertex, CallVertex] oneShotCalls = {}; // C in original algorithm
	set[Tree] escapingFunctions = {};
	visit (source) {
		case Expression e:{
			if (functionNoParams(Expression expressionToCall) := e || functionParams(Expression expressionToCall, { Expression!comma ","}+ _) := e) {
				if (nestedExpression(f:functionAnonymous({Id ","}* parameters, Block implementation)) := expressionToCall) {
					// println("One shot closure <e> to <f>");
					oneShotCalls += <vtx(e), vtx(f)>;
				}
			}
			elseif (function(Id id, {Id ","}* params, Block block) := e || functionAnonymous({Id ","}* params, Block block) := e) {
				// If we previously considered this a one shot closure (only verifyable/determinable on a higher level), we should not add this to the escaping functions
				if (vtx(e) notin range(oneShotCalls)) { // TODO does not work yet!
					escapingFunctions += e;
				}
				else {
					println("visited one that should not be thar!");
				}
				
				println("Visited <e>");
			}
		}
		case FunctionDeclaration f:{
			escapingFunctions += f;
		}
	}
	
	println("Escaping functions <size(escapingFunctions)>");
	
	return oneShotCalls;
}

private CallVertex vtx(Tree t) = CallVertex(getNodePosition(t));