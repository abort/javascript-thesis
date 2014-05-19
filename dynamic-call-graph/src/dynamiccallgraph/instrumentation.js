// TODO, do something with counter of calls so we can fill in missed calls :)

var _wrap_lastCall = null;
var _wrap_callMap = {"native":[]};
var _wrap_allCalls = [];



function _wrap_addFunctionToMap(file, line, startPosition, endPosition) {
  if (_wrap_lastCall == null) return;
  var thisFunction = file + "@" + line + ":" + startPosition + "-" + endPosition;
  var currentArray = _wrap_callMap[thisFunction];
  if (currentArray == null) {
    currentArray = [];
  }
  if (!_wrap_doesArrayContain(currentArray, _wrap_lastCall)) 
    currentArray.push(_wrap_lastCall);

//  console.log("added function: " + thisFunction);
  _wrap_callMap[thisFunction] = currentArray;
  var index = _wrap_allCalls.indexOf(_wrap_lastCall);
  if (index > -1) {
    _wrap_allCalls.splice(index, 1);
  }
  _wrap_lastCall = null; // reset
}

function _wrap_callFunctionString(f) {
  return new String(f.file + "@" + f.line + ":" + f.start + "-" + f.end);
}

function _wrap_doesArrayContain(array, call) {
  for (var callee in array) {
    if (array.hasOwnProperty(callee) && array[callee] == call) return true;
  }
  
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
                if (t == "string") v = '"' + v + '"'; else if (t == "object" && v !== null) v = STRINGIFY(v);
                json.push((arr ? "" : '"' + n + '":') + String(v));
            }
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
}