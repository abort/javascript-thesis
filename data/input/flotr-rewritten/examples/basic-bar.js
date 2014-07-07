window.parent._wrap_staticMeasuredFunctions['basic-bar.js'] = 1;
window.parent._wrap_staticMeasuredCalls['basic-bar.js'] =9;
(window.parent._wrap_setLastFunctionCall("basic-bar.js",1,0,310,document.observe,true,false) || window.parent._wrap_popCallStack(document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('basic-bar.js', 1, 31,309, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var d1 = [];
  var d2 = [];
  for (var i = 0; i < 4; i++) {
(window.parent._wrap_setLastFunctionCall("basic-bar.js",5,110,153,d1.push,false,false) || window.parent._wrap_popCallStack(    d1.push([i, (window.parent._wrap_setLastFunctionCall("basic-bar.js",5,122,151,Math.ceil,false,false) || window.parent._wrap_popCallStack(Math.ceil((window.parent._wrap_setLastFunctionCall("basic-bar.js",5,132,145,Math.random,false,false) || window.parent._wrap_popCallStack(Math.random())) * 10)))])));
(window.parent._wrap_setLastFunctionCall("basic-bar.js",6,159,208,d2.push,false,false) || window.parent._wrap_popCallStack(    d2.push([i + 0.5, (window.parent._wrap_setLastFunctionCall("basic-bar.js",6,177,206,Math.ceil,false,false) || window.parent._wrap_popCallStack(Math.ceil((window.parent._wrap_setLastFunctionCall("basic-bar.js",6,187,200,Math.random,false,false) || window.parent._wrap_popCallStack(Math.random())) * 10)))])));
  }
(window.parent._wrap_setLastFunctionCall("basic-bar.js",8,216,306,Flotr.draw,false,false) || window.parent._wrap_popCallStack(  Flotr.draw((window.parent._wrap_setLastFunctionCall("basic-bar.js",8,227,241,$,false,false) || window.parent._wrap_popCallStack($('container'))), [d1, d2], {bars: {show: true, barWidth: 0.5}, yaxis: {min: 0}})));
})));
