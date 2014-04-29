var lastCall = [];
var callMap = new Map();

function addFunctionToMap(file, line, startPosition, endPosition) {
	if (!firstCallDone) return;

	var thisFunction = {
		file: file,
		line: line,
		start: startPosition,
		end: endPosition
	};
	var currentArray = callMap.get(thisFunction);
	if (currentArray == null) {
		currentArray = [];
	}
	currentArray.push(lastCall);
	callMap.set(thisFunction, currentArray);
}

function setLastFunctionCall(file, line, startPosition, endPosition, result) {
	lastCall = {
		file: file,
		line: line,
		start: startPosition,
		endd: endPosition
	};

	return result;
}

