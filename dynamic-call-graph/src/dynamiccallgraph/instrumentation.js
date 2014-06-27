var _wrap_callMap = {"native":[]};
var _wrap_allCalls = [];
var _wrap_staticMeasuredFunctions = {};
var _wrap_staticMeasuredCalls = {};
var _wrap_lastCall = null;
var _wrap_lastCallWasGlobalScope = false;
var _wrap_nonLoggedFunctions = [];
var _wrap_lastCallStack = [];
var _wrap_lastCallWasProxy = false;

function _wrap_getNonNativeFunctions() {
    var r = [];
    for (var k in _wrap_callMap) {
        if (!_wrap_callMap.hasOwnProperty(k) || k === "native") continue;
        r.push(k);
    }
    return r;
}

function _wrap_getCalls() {
    var calls = [];
    for (var k in _wrap_callMap) {
        if (!_wrap_callMap.hasOwnProperty(k)) continue;

        for (var call in _wrap_callMap[k]) {
          if (!_wrap_callMap[k].hasOwnProperty(call)) continue;
          calls.push(_wrap_callMap[k][call]);
        }
    }
    return calls;
}

function _wrap_calculateFunctionCoverage() {
  var total = 0;
  for (var i in _wrap_staticMeasuredFunctions) {
    if (!_wrap_staticMeasuredFunctions.hasOwnProperty(i)) continue;
    total += _wrap_staticMeasuredFunctions[i];
  }
  
  return (_wrap_getNonNativeFunctions().length / total) * 100;
}

function _wrap_calculateFunctionCoverageWithScriptExclude(script) {
	var total = 0;
	for ( var i in _wrap_staticMeasuredFunctions) {
		if (!_wrap_staticMeasuredFunctions.hasOwnProperty(i) || script === i)
			continue;
		total += _wrap_staticMeasuredFunctions[i];
	}

	var nonNativeFunctions = _wrap_getNonNativeFunctions();
	if (script !== null && script !== undefined && typeof script === "string") {
		nonNativeFunctions = nonNativeFunctions.filter(function(el) {
			// filter out script
			return (el.indexOf(script + "@") !== 0);
		});
	}

  // Remove functions that have actually been logged afterwards
  _wrap_nonLoggedFunctions = _wrap_nonLoggedFunctions.filter(function(el) {
    // Only functions that are not logged in the non native functions may pass this
    return (nonNativeFunctions.indexOf(el) < 0);
  })  

	return ((nonNativeFunctions.length + _wrap_nonLoggedFunctions.length) / total) * 100;
}

function _wrap_calculateFunctionCoverageWithScriptsExclude(scripts) {
	var total = 0;
	for ( var i in _wrap_staticMeasuredFunctions) {
		if (!_wrap_staticMeasuredFunctions.hasOwnProperty(i))
			continue;
		var doContinue = false
		for (var j = 0; j < scripts.length; j++) {
			if (scripts[j] === i)
				doContinue = true;
		}
		if (doContinue)
			continue;
		total += _wrap_staticMeasuredFunctions[i];
	}

	var nonNativeFunctions = _wrap_getNonNativeFunctions();
	if (scripts !== null && scripts !== undefined) {
		for (var i = 0; i < scripts.length; i++) {
			var script = scripts[i];
			nonNativeFunctions = nonNativeFunctions.filter(function(el) {
				// filter out script
				return (el.indexOf(script + "@") !== 0);
			});
		}
	}

  // Remove functions that have actually been logged afterwards
  _wrap_nonLoggedFunctions = _wrap_nonLoggedFunctions.filter(function(el) {
    // Only functions that are not logged in the non native functions may pass this
    return (nonNativeFunctions.indexOf(el) < 0);
  })

	return ((nonNativeFunctions.length + _wrap_nonLoggedFunctions.length) / total) * 100;
}

function _wrap_isNativeFunction(f) {
    return !!f && (typeof f).toLowerCase() == 'function' 
        && (f === Function.prototype 
        || /^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code\]\s*}\s*$/i.test(String(f)));
 }

function _wrap_calculateCallCoverage() {
  console.log("Warning this result relies on post processing (adding native functions to the call map after running the program). Make sure you run _wrap_postProcess first.");
  var total = 0;
  for (var i in _wrap_staticMeasuredCalls) {
    if (!_wrap_staticMeasuredCalls.hasOwnProperty(i)) continue;   
    total += _wrap_staticMeasuredCalls[i];
  }
  
  return (_wrap_getCalls().length / total) * 100;
}

function _wrap_isFunctionLogged(file, line, startPosition, endPosition) {
  // it is normally invoked before
  var thisFunction = file + "@" + line + ":" + startPosition + "-" + endPosition;
  var currentArray = _wrap_callMap[thisFunction];
  if (currentArray != null) return true;

  // it is already in the nonlogged functions (native callback functions)
  return (_wrap_nonLoggedFunctions.indexOf(thisFunction) > -1);
}

function _wrap_addFunctionToMap(file, line, startPosition, endPosition, caller) {
  if (_wrap_lastCallWasProxy || (caller == null && !_wrap_lastCallWasGlobalScope)) {
    if (!_wrap_isFunctionLogged(file, line, startPosition, endPosition)) {
      _wrap_nonLoggedFunctions.push(file + "@" + line + ":" + startPosition + "-" + endPosition);
    }

	  // native invocation that was not detected with the prior attempt.... we know this function came in between calls so we can clear the call stack to increase precision again
	  _wrap_lastCallStack = [];
    _wrap_lastCallWasProxy = false;
	  return;
  }
  // Nothings on the call stack...
  if (_wrap_lastCallStack.length == 0) {
    if (!_wrap_isFunctionLogged(file, line, startPosition, endPosition)) {
      _wrap_nonLoggedFunctions.push(file + "@" + line + ":" + startPosition + "-" + endPosition);
    }

    return; // native that is missed in the native detection of the set last call function
  } 
  var thisFunction = file + "@" + line + ":" + startPosition + "-" + endPosition;
  var currentArray = _wrap_callMap[thisFunction];
  if (currentArray == null) {
    currentArray = [];
  }
  var lastCall = _wrap_lastCallStack.pop();
  if (!_wrap_doesArrayContain(currentArray, lastCall))
    currentArray.push(lastCall);

  _wrap_callMap[thisFunction] = currentArray;
  var index = _wrap_allCalls.indexOf(lastCall);
  if (index > -1) {
    _wrap_allCalls.splice(index, 1);
  }
}

function _wrap_doesArrayContain(array, call) {
  var len = array.length;
  for (var callee = 0; callee < len; callee++)
    if (array[callee] === call) return true;
  return false;
}

function _wrap_postProcess() {
  for (f in _wrap_callMap) {
    if (!_wrap_callMap.hasOwnProperty(f)) continue;
    for (c in _wrap_callMap[f]) {
      if (!_wrap_callMap[f].hasOwnProperty(c)) continue;
      var delIndex = _wrap_allCalls.indexOf(_wrap_callMap[f][c]);
      if (~delIndex) _wrap_allCalls.splice(delIndex, 1); 
    }
  }

  for (c in _wrap_allCalls) {
    if (_wrap_allCalls.hasOwnProperty(c)) {
      _wrap_callMap["native"].push(_wrap_allCalls[c]);
    }
  }

  console.log(_wrap_STRINGIFY(_wrap_callMap));
}

function _wrap_printCallMap() {
  for (f in _wrap_callMap) {
    if (!_wrap_callMap.hasOwnProperty(f)) continue;
    for (c in _wrap_callMap[f]) {
      if (!_wrap_callMap[f].hasOwnProperty(c)) continue;
      console.log(_wrap_callMap[f][c] + " -> " + f);

      var delIndex = _wrap_allCalls.indexOf(_wrap_callMap[f][c]);
      if (~delIndex) _wrap_allCalls.splice(delIndex, 1); 
    }
  }

  for (c in _wrap_allCalls) {
    if (_wrap_allCalls.hasOwnProperty(c)) {
      console.log(_wrap_allCalls[c] + " -> native");
    }
  }
}

function _wrap_setLastFunctionCall(file, line, startPosition, endPosition, functionProp, globalScope, proxyFunction) {

	_wrap_lastCallWasGlobalScope = globalScope;
  _wrap_lastCallWasProxy = proxyFunction;
	if (proxyFunction || (functionProp != null && _wrap_isNativeFunction(functionProp))) {
		// Encountered a native function.... prevent this from creating a vertex
		// Add native call
		var newCall = file + "@" + line + ":" + startPosition + "-" + endPosition;
		if (!_wrap_doesArrayContain(_wrap_callMap["native"], newCall))
			_wrap_callMap["native"].push(newCall);
		_wrap_lastCallWasGlobalScope = false;
		return false;
	}
	var newCall = file + "@" + line + ":" + startPosition + "-" + endPosition;
	_wrap_lastCallStack.push(newCall);
	if (!_wrap_doesArrayContain(_wrap_allCalls, newCall))
		_wrap_allCalls.push(newCall);
	return false;
}

function _wrap_STRINGIFY(obj) {
    var t = typeof (obj);
    if (t != "object" || obj === null) {
    // simple data type
        if (t == "string") obj = '"' + obj + '"';
        return String(obj);
    } else {
    // recurse array or object
        var n, v, json = [], arr = (obj && obj.constructor == Array);

        for (n in obj) {
            v = obj[n];
            t = typeof(v);
            if (obj.hasOwnProperty(n)) {
                if (t == "string") v = '"' + v + '"'; else if (t == "object" && v !== null) v = _wrap_STRINGIFY(v);
                json.push((arr ? "" : '"' + n + '":') + String(v));
            }
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
}