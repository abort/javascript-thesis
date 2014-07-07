window.parent._wrap_staticMeasuredFunctions['mouse-zoom.js'] = 4;
window.parent._wrap_staticMeasuredCalls['mouse-zoom.js'] =19;
(window.parent._wrap_setLastFunctionCall("mouse-zoom.js",1,0,736,document.observe,true,false) || window.parent._wrap_popCallStack(document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('mouse-zoom.js', 1, 31,735, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var d1 = [];
  var d2 = [];
  var d3 = [];
  for (var i = 0; i < 40; i += 0.5) {
(window.parent._wrap_setLastFunctionCall("mouse-zoom.js",6,131,174,d1.push,false,false) || window.parent._wrap_popCallStack(    d1.push([i, (window.parent._wrap_setLastFunctionCall("mouse-zoom.js",6,143,154,Math.sin,false,false) || window.parent._wrap_popCallStack(Math.sin(i))) + 3 * (window.parent._wrap_setLastFunctionCall("mouse-zoom.js",6,161,172,Math.cos,false,false) || window.parent._wrap_popCallStack(Math.cos(i)))])));
(window.parent._wrap_setLastFunctionCall("mouse-zoom.js",7,180,210,d2.push,false,false) || window.parent._wrap_popCallStack(    d2.push([i, (window.parent._wrap_setLastFunctionCall("mouse-zoom.js",7,192,208,Math.pow,false,false) || window.parent._wrap_popCallStack(Math.pow(1.1, i)))])));
(window.parent._wrap_setLastFunctionCall("mouse-zoom.js",8,216,257,d3.push,false,false) || window.parent._wrap_popCallStack(    d3.push([i, 40 - i + (window.parent._wrap_setLastFunctionCall("mouse-zoom.js",8,237,250,Math.random,false,false) || window.parent._wrap_popCallStack(Math.random())) * 10])));
  }
  var options = {selection: {mode: 'x', fps: 30}};
  function drawGraph(opts) {
window.parent._wrap_addFunctionToMap('mouse-zoom.js', 11, 316,464, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var o = (window.parent._wrap_setLastFunctionCall("mouse-zoom.js",12,355,403,Object.extend,false,false) || window.parent._wrap_popCallStack(Object.extend((window.parent._wrap_setLastFunctionCall("mouse-zoom.js",12,369,390,Object.clone,false,false) || window.parent._wrap_popCallStack(Object.clone(options))), opts || {})));
    return (window.parent._wrap_setLastFunctionCall("mouse-zoom.js",13,416,459,Flotr.draw,false,false) || window.parent._wrap_popCallStack(Flotr.draw((window.parent._wrap_setLastFunctionCall("mouse-zoom.js",13,427,441,$,false,false) || window.parent._wrap_popCallStack($('container'))), [d1, d2, d3], o)));
  }
  var f = (window.parent._wrap_setLastFunctionCall("mouse-zoom.js",15,475,486,drawGraph,false,false) || window.parent._wrap_popCallStack(drawGraph()));
(window.parent._wrap_setLastFunctionCall("mouse-zoom.js",16,490,666,null,false,false) || window.parent._wrap_popCallStack(  (window.parent._wrap_setLastFunctionCall("mouse-zoom.js",16,490,504,$,false,false) || window.parent._wrap_popCallStack($('container'))).observe('flotr:select', function(evt) {
window.parent._wrap_addFunctionToMap('mouse-zoom.js', 16, 529,665, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var area = evt.memo[0];
  f = (window.parent._wrap_setLastFunctionCall("mouse-zoom.js",18,577,662,drawGraph,false,false) || window.parent._wrap_popCallStack(drawGraph({xaxis: {min: area.x1, max: area.x2}, yaxis: {min: area.y1, max: area.y2}})));
})));
(window.parent._wrap_setLastFunctionCall("mouse-zoom.js",20,670,732,null,false,false) || window.parent._wrap_popCallStack(  (window.parent._wrap_setLastFunctionCall("mouse-zoom.js",20,670,684,$,false,false) || window.parent._wrap_popCallStack($('reset-btn'))).observe('click', function() {
window.parent._wrap_addFunctionToMap('mouse-zoom.js', 20, 702,731, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("mouse-zoom.js",21,717,728,drawGraph,false,false) || window.parent._wrap_popCallStack(  drawGraph()));
})));
})));
