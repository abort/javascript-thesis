window.parent._wrap_staticMeasuredFunctions['extending-flotr.js'] = 2;
window.parent._wrap_staticMeasuredCalls['extending-flotr.js'] =8;
var MyGraph = (window.parent._wrap_setLastFunctionCall("extending-flotr.js",1,17,160) || Class.create(Flotr.Graph, {drawCount: 0, drawSeries: function($super, series) {
window.parent._wrap_addFunctionToMap('extending-flotr.js', 3, 79,154, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.drawCount++;
(window.parent._wrap_setLastFunctionCall("extending-flotr.js",5,133,147) ||   $super(series));
}}));
(window.parent._wrap_setLastFunctionCall("extending-flotr.js",11,219,632) || document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('extending-flotr.js', 11, 250,631, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var d1 = [];
  for (var i = 0; i < 14; i += 0.5) 
(window.parent._wrap_setLastFunctionCall("extending-flotr.js",17,376,401) ||     d1.push([i, (window.parent._wrap_setLastFunctionCall("extending-flotr.js",17,388,399) || Math.sin(i))]));
  var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];
  var f = (window.parent._wrap_setLastFunctionCall("extending-flotr.js",24,522,575) || Flotr.draw((window.parent._wrap_setLastFunctionCall("extending-flotr.js",24,533,547) || $('container')), [d1, d2], null, MyGraph));
(window.parent._wrap_setLastFunctionCall("extending-flotr.js",26,592,625) ||   alert('Draw count: ' + f.drawCount));
}));
