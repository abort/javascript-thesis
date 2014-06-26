_wrap_staticMeasuredFunctions['htmlbox.undoredomanager.js'] = 8;
_wrap_staticMeasuredCalls['htmlbox.undoredomanager.js'] =1;
function htmlbox_undo_redo_manager(repeat) {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 1, 0,914, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var r = false;
  var d = [];
  var p = 0;
  this.d = function() {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 5, 112,151, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return d;
};
  this.add = function(o) {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 8, 169,293, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (d[p - 1] == o) 
    return false;
  d[p] = o;
  p++;
  d = (_wrap_setLastFunctionCall("htmlbox.undoredomanager.js",12,272,285) || d.slice(0, p));
};
  this.can_redo = function() {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 14, 316,426, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (p >= d.length) {
    return false;
  }
  return true;
};
  this.can_undo = function() {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 20, 449,551, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (p < 1) {
    return false;
  }
  return true;
};
  this.clear = function() {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 26, 571,624, (typeof arguments === 'object' ? arguments.callee.caller : null));

  d = [];
  p = 0;
};
  this.undo = function() {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 30, 643,763, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (p < 1) {
    return false;
  }
  p--;
  return d[p - 1];
};
  this.redo = function() {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 37, 782,910, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (p >= d.length) {
    return false;
  }
  p++;
  return d[p - 1];
};
}
