module CallGraphTests

import EcmaScript;
import FlowGraphFast;
import FlowGraphPrettyPrinter;
import FlowGraphDataTypes;
import IO;
import String;
import Set;
import List;
import SharedDataTypes;
import OptimisticCallGraph;
import PessimisticCallGraph;
import CallGraphDataTypes;

public test bool testJQuerySubSet() {
	loc input = |project://thesis/src/tests/callgraphs/jquerysubset.js|;
	Source src = parse(input);
	CallGraphResult optimisticResult = createOptimisticCallGraph(src);
	CallGraphResult pessimisticResult = createPessimisticCallGraph(src);

	return compareCallGraphsWithExpectancy(input, optimisticResult, pessimisticResult, true);
}


private list[str] importCallGraph(loc input) = readFileLines(input);

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

private bool compareCallGraphsWithExpectancy(loc input, CallGraphResult optimisticResult, CallGraphResult pessimisticResult, bool optimisticResultLarger) {
	str expectedOptimisticFilename = substring(input.file, 0, findLast(input.file, ".")) + ".ocg";
	loc expectedOptimistic = input.parent + expectedOptimisticFilename;
	if (!exists(expectedOptimistic)) throw "expected flow graph file (<expected>) does not exist";
	
	str expectedPessimisticFilename = substring(input.file, 0, findLast(input.file, ".")) + ".pcg";
	loc expectedPessimistic = input.parent + expectedPessimisticFilename;
	if (!exists(expectedPessimistic)) throw "expected flow graph file (<expected>) does not exist";
	
	bool expectedResult = false;
	expectedResult = compareFlowGraph(getExtensiveFlowGraph(pessimisticResult.graph), importCallGraph(expectedPessimistic));
	if (!expectedResult) return false;

	expectedResult = compareFlowGraph(getExtensiveFlowGraph(optimisticResult.graph), importCallGraph(expectedOptimistic));

	
	// Optimistic has more detail
	if (optimisticResultLarger) {
		expectedResult = expectedResult && (size(optimisticResult.graph) > size(pessimisticResult.graph));
		expectedResult = expectedResult && (size(pessimisticResult.escapingFunctions + pessimisticResult.unresolvedCallSites) > 0);
	}
	
	return expectedResult;
}

