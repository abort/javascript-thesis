window.parent._wrap_staticMeasuredFunctions['mouse-tracking.js'] = 2;
window.parent._wrap_staticMeasuredCalls['mouse-tracking.js'] =8;
(window.parent._wrap_setLastFunctionCall("mouse-tracking.js",1,0,518,document.observe,true,false) || window.parent._wrap_popCallStack(document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('mouse-tracking.js', 1, 31,517, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var d1 = [];
  var d2 = [];
  var d3 = [];
  for (var i = 0; i < 20; i += 0.5) {
(window.parent._wrap_setLastFunctionCall("mouse-tracking.js",6,131,150,d1.push,false,false) || window.parent._wrap_popCallStack(    d1.push([i, 2 * i])));
(window.parent._wrap_setLastFunctionCall("mouse-tracking.js",7,156,197,d2.push,false,false) || window.parent._wrap_popCallStack(    d2.push([i, i * 1.5 + 1.5 * (window.parent._wrap_setLastFunctionCall("mouse-tracking.js",7,184,195,Math.sin,false,false) || window.parent._wrap_popCallStack(Math.sin(i)))])));
(window.parent._wrap_setLastFunctionCall("mouse-tracking.js",8,203,237,d3.push,false,false) || window.parent._wrap_popCallStack(    d3.push([i, 3 * (window.parent._wrap_setLastFunctionCall("mouse-tracking.js",8,219,230,Math.cos,false,false) || window.parent._wrap_popCallStack(Math.cos(i))) + 10])));
  }
  var f = (window.parent._wrap_setLastFunctionCall("mouse-tracking.js",10,253,514,Flotr.draw,false,false) || window.parent._wrap_popCallStack(Flotr.draw((window.parent._wrap_setLastFunctionCall("mouse-tracking.js",10,264,278,$,false,false) || window.parent._wrap_popCallStack($('container'))), [{data: d1, mouse: {track: false}}, d2, d3], {mouse: {track: true, lineColor: 'purple', relative: true, position: 'ne', sensibility: 1, trackDecimals: 2, trackFormatter: function(obj) {
window.parent._wrap_addFunctionToMap('mouse-tracking.js', 10, 450,511, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return 'x = ' + obj.x + ', y = ' + obj.y;
}}})));
})));
