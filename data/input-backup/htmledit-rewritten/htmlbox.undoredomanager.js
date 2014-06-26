_wrap_staticMeasuredFunctions['htmlbox.undoredomanager.js'] = 8;
_wrap_staticMeasuredCalls['htmlbox.undoredomanager.js'] =1;
function htmlbox_undo_redo_manager(repeat) {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 1, 0,914);

  var r = false;
  var d = [];
  var p = 0;
  this.d = function() {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 5, 112,151);

  return d;
};
  this.add = function(o) {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 8, 169,293);

  if (d[p - 1] == o) 
    return false;
  d[p] = o;
  p++;
  d = (_wrap_setLastFunctionCall("htmlbox.undoredomanager.js",12,272,285) || d.slice(0, p));
};
  this.can_redo = function() {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 14, 316,426);

  if (p >= d.length) {
    return false;
  }
  return true;
};
  this.can_undo = function() {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 20, 449,551);

  if (p < 1) {
    return false;
  }
  return true;
};
  this.clear = function() {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 26, 571,624);

  d = [];
  p = 0;
};
  this.undo = function() {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 30, 643,763);

  if (p < 1) {
    return false;
  }
  p--;
  return d[p - 1];
};
  this.redo = function() {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 37, 782,910);

  if (p >= d.length) {
    return false;
  }
  p++;
  return d[p - 1];
};
}
