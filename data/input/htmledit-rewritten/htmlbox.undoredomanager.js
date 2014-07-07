_wrap_staticMeasuredFunctions['htmlbox.undoredomanager.js'] = 8;
_wrap_staticMeasuredCalls['htmlbox.undoredomanager.js'] =1;
function htmlbox_undo_redo_manager(repeat) {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 1, 0,663, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var r = false;
  var d = [];
  var p = 0;
  this.d = function() {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 5, 100,126, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return d;
};
  this.add = function(o) {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 8, 141,236, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (d[p - 1] == o) 
    return false;
  d[p] = o;
  p++;
  d = (_wrap_setLastFunctionCall("htmlbox.undoredomanager.js",13,220,233,d.slice,false,false) || _wrap_popCallStack(d.slice(0, p)));
};
  this.can_redo = function() {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 15, 256,330, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (p >= d.length) {
    return false;
  }
  return true;
};
  this.can_undo = function() {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 21, 350,416, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (p < 1) {
    return false;
  }
  return true;
};
  this.clear = function() {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 27, 433,466, (typeof arguments === 'object' ? arguments.callee.caller : null));

  d = [];
  p = 0;
};
  this.undo = function() {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 31, 482,559, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (p < 1) {
    return false;
  }
  p--;
  return d[p - 1];
};
  this.redo = function() {
_wrap_addFunctionToMap('htmlbox.undoredomanager.js', 38, 575,660, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (p >= d.length) {
    return false;
  }
  p++;
  return d[p - 1];
};
}
