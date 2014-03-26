module FlowGraphInterprocedural

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

public rel[Vertex, Vertex] createInterproceduralFlowGraph(loc location) = createInterproceduralFlowGraph(parse(location));
public rel[Vertex, Vertex] createInterproceduralFlowGraph(Source source) {
	rel[Vertex, Vertex] intraproceduralGraph = createFlowGraph(source); 
	
	visit (source) {
		case FunctionDeclaration f:{
			println("annotations: <getAnnotations(f)>");
		}
		case Expression e:{
			if (functionParams(Expression lhs, { Expression!comma ","}+ params) := e) {
				println("Function call <e>");
				
				//intraproceduralGraph += <
				
				int argumentNumber = 1;
				for (Expression param <- params) {
					intraproceduralGraph += <createVertex(e, ()), Callee(getNodePosition(e))>;
				}
			}
		}
	}
	
	t = visit (source) {
		case Expression e => setAnnotations(e, ("type" : "expression") + getAnnotations(e))
	}

	return intraproceduralGraph;
}

private rel[Vertex, Vertex] createInterproceduralVertex(Tree t) {
	return <Empty(), Empty()>;
}