var lastCall = null;
var callMap = {};

function addNativeFunctionToMap(file, line, startPosition, endPosition, nativeFunction) {
	var nativeFunctionSubStrings = nativeFunction.split('.');
	var type;
	if (nativeFunctionSubStrings.length > 1) {
		var nativeFunctionSub = nativeFunctionSubStrings[nativeFunctionSubStrings.length - 1];
		type = nativeFunctionSubStrings[nativeFunctionSubStrings.length - 2];

		nativeFunction =  Object.prototype.toString.call(type) + "." + nativeFunction; 
	}
	else {
		type = nativeFunction;
	}
	

	var currentArray = callMap[nativeFunction];
	if (currentArray == null) {
		currentArray = new Array();
	}
	var call = callFunctionString({
		file: file,
		line: line,
		start: startPosition,
		end: endPosition
	});
	if (!doesArrayContain(currentArray, call))
		currentArray.push(call);

	callMap[nativeFunction] = currentArray;
}

function addFunctionToMap(file, line, startPosition, endPosition) {
	if (lastCall == null) return;
	var thisFunction = callFunctionString({
		file: file,
		line: line,
		start: startPosition,
		end: endPosition
	});
	var currentArray = callMap[thisFunction];
	if (currentArray == null) {
		currentArray = new Array();
	}
	if (!doesArrayContain(currentArray, lastCall)) 
		currentArray.push(lastCall);
	//console.log("call: " + lastCall);
	callMap[thisFunction] = currentArray;
	lastCall = null; // reset
}

function callFunctionString(f) {
	return f.file + "@" + f.line + ":" + f.start + "-" + f.end;
}

function doesArrayContain(array, call) {
	for (var callee in array) {
		if (array[callee] == call) return true;
	}
	
	return false;
}

function printCallMap() {
	for (f in callMap) {
		for (c in callMap[f]) {
			console.log(callMap[f][c] + " -> " + f);
		}
	}
}

function setLastFunctionCall(file, line, startPosition, endPosition) {
	lastCall = callFunctionString({
		file: file,
		line: line,
		start: startPosition,
		end: endPosition
	});
}

function isNative(f) {
	if (f == null || f == undefined || f == "") return false;
    return !!f && (typeof f).toLowerCase() == 'function' 
    && (f === Function.prototype 
    || /^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code\]\s*}\s*$/i.test(String(f)));
}