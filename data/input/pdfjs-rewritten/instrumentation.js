var _wrap_callMap = {"native":[]};
var _wrap_allCalls = [];
var _wrap_staticMeasuredFunctions = {};
var _wrap_staticMeasuredCalls = {};
var _wrap_lastCall = null;
var _wrap_lastAssignment = null;
var _wrap_lastPropertyReference = null;
var _wrap_lastOperation = null; // 1 = assignment, 2 = reference, 3 = call

function _wrap_setLastAssignment(file, line, startPosition, endPosition) {
  _wrap_lastAssignment = file + "@" + line + ":" + startPosition + "-" + endPosition;
  _wrap_lastOperation = 1;
  return false;
}

function _wrap_setLastPropertyReference(file, line, startPosition, endPosition) {
  _wrap_lastPropertyReference = file + "@" + line + ":" + startPosition + "-" + endPosition;
  _wrap_lastOperation = 2;
  return false;
}

function _wrap_getNonNativeFunctions() {
    var r = [];
    for (var k in _wrap_callMap) {
        if (!_wrap_callMap.hasOwnProperty(k) || k === "native") continue;
        r.push(k)
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
  for (var i in _wrap_staticMeasuredFunctions) {
    if (!_wrap_staticMeasuredFunctions.hasOwnProperty(i) || script === i) continue;
    total += _wrap_staticMeasuredFunctions[i];
  }

  var nonNativeFunctions = _wrap_getNonNativeFunctions();
  if (script !== null && script !== undefined && typeof script === "string") {
    var scriptLen = script.length;
    nonNativeFunctions = nonNativeFunctions
        .filter(function(el) {
          // filter out script
          return (el.length > scriptLen && !(el.substring(0,
              scriptLen) === script));
        });
  }

  return (nonNativeFunctions.length / total) * 100;
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

function _wrap_addFunctionToMap(file, line, startPosition, endPosition) {
  if (_wrap_lastCall == null) _wrap_lastCall = "native";
  var thisFunction = file + "@" + line + ":" + startPosition + "-" + endPosition;
  var currentArray = _wrap_callMap[thisFunction];
  if (currentArray == null) {
    currentArray = [];
  }
  if (!_wrap_doesArrayContain(currentArray, _wrap_lastCall))
    currentArray.push(_wrap_lastCall);

  _wrap_callMap[thisFunction] = currentArray;
  var index = _wrap_allCalls.indexOf(_wrap_lastCall);
  if (index > -1) {
    _wrap_allCalls.splice(index, 1);
  }
  _wrap_lastCall = null; // reset
  _wrap_lastOperation = null;
}

function _wrap_addGetterFunctionToMap(file, line, startPosition, endPosition) {
  var thisFunction = file + "@" + line + ":" + startPosition + "-" + endPosition;
  var currentArray = _wrap_callMap[thisFunction];
  if (currentArray == null) {
    currentArray = [];
  }

  var callee = null;
  if (_wrap_lastOperation == 2) {
    callee = _wrap_lastPropertyReference;
    _wrap_lastPropertyReference = null;
    _wrap_lastOperation = null;
  }
  else if (_wrap_lastOperation == 3) {
    callee = _wrap_lastCall;
    _wrap_lastCall = null;
    _wrap_lastOperation = null;
  }
  else {
    callee = "native/dynamic"; // could be native or by dynamic code
    _wrap_lastOperation = null;
  }

  if (!_wrap_doesArrayContain(currentArray, callee))
    currentArray.push(callee);

  _wrap_callMap[thisFunction] = currentArray;
  var index = _wrap_allCalls.indexOf(callee);
  if (index > -1) {
    _wrap_allCalls.splice(index, 1);
  }
}


function _wrap_addSetterFunctionToMap(file, line, startPosition, endPosition) {
  var thisFunction = file + "@" + line + ":" + startPosition + "-" + endPosition;
  var currentArray = _wrap_callMap[thisFunction];
  if (currentArray == null) {
    currentArray = [];
  }

  var callee = null;
  if (_wrap_lastOperation == 1) {
    callee = _wrap_lastAssignment;
    _wrap_lastAssignment = null;
    _wrap_lastOperation = null;
  }
  else if (_wrap_lastOperation == 3) {
    callee = _wrap_lastCall;
    _wrap_lastCall = null;
    _wrap_lastOperation = null;
  }
  else {
    callee = "native/dynamic"; // could be native or by dynamic code
    _wrap_lastOperation = null;
  }

  if (!_wrap_doesArrayContain(currentArray, callee))
    currentArray.push(callee);

  _wrap_callMap[thisFunction] = currentArray;
  var index = _wrap_allCalls.indexOf(callee);
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

function _wrap_setLastFunctionCall(file, line, startPosition, endPosition) {
  var newCall = file + "@" + line + ":" + startPosition + "-" + endPosition;
  _wrap_lastCall = newCall;
  if (!_wrap_doesArrayContain(_wrap_allCalls, newCall)) _wrap_allCalls.push(newCall);
  _wrap_lastOperation = 3;
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