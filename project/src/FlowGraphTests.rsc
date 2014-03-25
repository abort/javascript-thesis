module FlowGraphTests

import EcmaScript;
import flowgraph;
import FlowGraphPrettyPrinter;
import FlowGraphDataTypes;
import IO;
import String;
import Set;
import List;

public test bool testNestedFunctions() = testFlowGraph(|project://thesis/src/tests/flowgraphs/nestedfunctions.js|);
public test bool testRedefinedScope() = testFlowGraph(|project://thesis/src/tests/flowgraphs/redefinedscope.js|);
public test bool testNestedFunctionExpressions() = testFlowGraph(|project://thesis/src/tests/flowgraphs/nestedfunctionexpressions.js|);
public test bool testTernary() = testFlowGraph(|project://thesis/src/tests/flowgraphs/ternary.js|);
public test bool testProperties() = testFlowGraph(|project://thesis/src/tests/flowgraphs/properties.js|);
public test bool testInnerExpressions() = testFlowGraph(|project://thesis/src/tests/flowgraphs/innerexpressions.js|);
public test bool testConjunctionDisjunction() = testFlowGraph(|project://thesis/src/tests/flowgraphs/conjunctiondisjunction.js|);


private list[str] importFlowGraph(loc input) = readFileLines(input);

private bool compareFlowGraph(str input, list[str] expected) {
	list[str] lines = split("\n", input);
	int linesExpected = size(expected);
	for (str line <- lines) {
		bool found = false;
		int iterator = 0;
		for (str expectedLine <- expected) {
			if (line == expectedLine) {
				found = true;
				expected = delete(expected, iterator); // delete the line from the expected lines so that we can detect duplicate lines in case necessary 
				break;
			}
			iterator += 1;
		}
		
		// a line misses :(
		if (!found) break;
	}
	return (size(lines) == linesExpected);
}

private bool testFlowGraph(loc input) {
	str expectedFilename = substring(input.file, 0, findLast(input.file, ".")) + ".fg";
	loc expected = input.parent + expectedFilename;
	if (!exists(expected)) throw "expected flow graph file (<expected>) does not exist";
	
	return compareFlowGraph(getSimpleFlowGraph(createFlowGraph(parse(input))), importFlowGraph(expected));
}
