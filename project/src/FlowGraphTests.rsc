module FlowGraphTests

import EcmaScript;
import flowgraph;
import FlowGraphPrettyPrinter;

public test bool nestedFunctions() {
	loc input = |project://thesis/src/tests/flowgraph/nestedfunctions.js|;
	Source parsedResult = parse(input);
	rel[Vertex, Vertex] flowGraph = createFlowGraph(parsedResult);
	
	printSimpleFlowGraph(flowGraph);
	
	return false;
}