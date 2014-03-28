module FlowGraphNativeImporterTest

import FlowGraphNativeImporter;
import IO;
import List;
import Relation;
import FlowGraphDataTypes;
import Set;

public test bool testCreateFlowGraphFromFunctionList() {
	loc nativeFunctionLocation = |project://thesis/src/native-functions.txt|;
	rel[Vertex, Vertex] functionGraph = createFlowGraphFromFunctionList(nativeFunctionLocation);
	int lines = size(readFileLines(nativeFunctionLocation));
	
	// Should be equal
	if (size(functionGraph) != lines) return false;

	// It should only contain Builtins as domain
	if (size({ item | item <- domain(functionGraph), Builtin(str _) !:= item }) != 0) return false;
	
	// It should only contain Props as range
	if (size({ item | item <- range(functionGraph), Prop(str _) !:= item }) != 0) return false;

	return true;
}