window.parent._wrap_staticMeasuredFunctions['extending-flotr.js'] = 2;
window.parent._wrap_staticMeasuredCalls['extending-flotr.js'] =8;
var MyGraph = (window.parent._wrap_setLastFunctionCall("extending-flotr.js",1,14,135,Class.create,true,false) || window.parent._wrap_popCallStack(Class.create(Flotr.Graph, {drawCount: 0, drawSeries: function($super, series) {
window.parent._wrap_addFunctionToMap('extending-flotr.js', 1, 67,133, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.drawCount++;
(window.parent._wrap_setLastFunctionCall("extending-flotr.js",3,116,130,$super,false,false) || window.parent._wrap_popCallStack(  $super(series)));
}})));
(window.parent._wrap_setLastFunctionCall("extending-flotr.js",5,137,414,document.observe,true,false) || window.parent._wrap_popCallStack(document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('extending-flotr.js', 5, 168,413, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var d1 = [];
  for (var i = 0; i < 14; i += 0.5) 
(window.parent._wrap_setLastFunctionCall("extending-flotr.js",8,237,262,d1.push,false,false) || window.parent._wrap_popCallStack(    d1.push([i, (window.parent._wrap_setLastFunctionCall("extending-flotr.js",8,249,260,Math.sin,false,false) || window.parent._wrap_popCallStack(Math.sin(i)))])));
  var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];
  var f = (window.parent._wrap_setLastFunctionCall("extending-flotr.js",10,320,371,Flotr.draw,false,false) || window.parent._wrap_popCallStack(Flotr.draw((window.parent._wrap_setLastFunctionCall("extending-flotr.js",10,331,345,$,false,false) || window.parent._wrap_popCallStack($('container'))), [d1, d2], null, MyGraph)));
(window.parent._wrap_setLastFunctionCall("extending-flotr.js",11,375,410,alert,false,false) || window.parent._wrap_popCallStack(  alert('Draw count: ' + f.drawCount)));
})));
