window.parent._wrap_staticMeasuredFunctions['basic-bar.js'] = 1;
window.parent._wrap_staticMeasuredCalls['basic-bar.js'] =9;
(window.parent._wrap_setLastFunctionCall("basic-bar.js",4,54,541) || document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('basic-bar.js', 4, 85,540, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var d1 = [];
  var d2 = [];
  for (var i = 0; i < 4; i++) {
(window.parent._wrap_setLastFunctionCall("basic-bar.js",11,242,282) ||     d1.push([i, (window.parent._wrap_setLastFunctionCall("basic-bar.js",11,253,280) || Math.ceil((window.parent._wrap_setLastFunctionCall("basic-bar.js",11,263,276) || Math.random()) * 10))]));
(window.parent._wrap_setLastFunctionCall("basic-bar.js",12,289,334) ||     d2.push([i + 0.5, (window.parent._wrap_setLastFunctionCall("basic-bar.js",12,305,332) || Math.ceil((window.parent._wrap_setLastFunctionCall("basic-bar.js",12,315,328) || Math.random()) * 10))]));
  }
(window.parent._wrap_setLastFunctionCall("basic-bar.js",18,413,534) ||   Flotr.draw((window.parent._wrap_setLastFunctionCall("basic-bar.js",19,430,444) || $('container')), [d1, d2], {bars: {show: true, barWidth: 0.5}, yaxis: {min: 0}}));
}));
