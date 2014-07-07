window.parent._wrap_staticMeasuredFunctions['click-event.js'] = 3;
window.parent._wrap_staticMeasuredCalls['click-event.js'] =9;
(window.parent._wrap_setLastFunctionCall("click-event.js",1,0,493,document.observe,true,false) || window.parent._wrap_popCallStack(document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('click-event.js', 1, 31,492, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var options = {xaxis: {min: 0, max: 15}, yaxis: {min: 0, max: 15}, lines: {show: true}, points: {show: true}, mouse: {track: true}};
  var d1 = [[0, 0]];
  var f = (window.parent._wrap_setLastFunctionCall("click-event.js",4,210,251,Flotr.draw,false,false) || window.parent._wrap_popCallStack(Flotr.draw((window.parent._wrap_setLastFunctionCall("click-event.js",4,221,235,$,false,false) || window.parent._wrap_popCallStack($('container'))), [d1], options)));
(window.parent._wrap_setLastFunctionCall("click-event.js",5,255,489,null,false,false) || window.parent._wrap_popCallStack(  (window.parent._wrap_setLastFunctionCall("click-event.js",5,255,269,$,false,false) || window.parent._wrap_popCallStack($('container'))).observe('flotr:click', function(event) {
window.parent._wrap_addFunctionToMap('click-event.js', 5, 293,488, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var position = event.memo[0];
(window.parent._wrap_setLastFunctionCall("click-event.js",7,345,378,d1.push,false,false) || window.parent._wrap_popCallStack(  d1.push([position.x, position.y])));
  d1 = (window.parent._wrap_setLastFunctionCall("click-event.js",8,387,436,d1.sort,false,false) || window.parent._wrap_popCallStack(d1.sort(function(a, b) {
window.parent._wrap_addFunctionToMap('click-event.js', 8, 395,435, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return a[0] - b[0];
})));
  f = (window.parent._wrap_setLastFunctionCall("click-event.js",11,444,485,Flotr.draw,false,false) || window.parent._wrap_popCallStack(Flotr.draw((window.parent._wrap_setLastFunctionCall("click-event.js",11,455,469,$,false,false) || window.parent._wrap_popCallStack($('container'))), [d1], options)));
})));
})));
