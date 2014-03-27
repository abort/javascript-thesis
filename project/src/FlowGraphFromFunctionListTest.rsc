module FlowGraphFromFunctionListTest

import FlowGraphNativeImporter;

public test bool testCreateFlowGraphFromFunctionList() {
	list[str] nativeFunctions = createFlowGraphFromFunctionList(|project://thesis/src/native-functions.csv|);

	return true;
}