window.parent._wrap_staticMeasuredFunctions['mouse-tracking.js'] = 2;
window.parent._wrap_staticMeasuredCalls['mouse-tracking.js'] =8;
(window.parent._wrap_setLastFunctionCall("mouse-tracking.js",4,57,912) || document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('mouse-tracking.js', 4, 88,911, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var d1 = [];
  var d2 = [];
  var d3 = [];
  for (var i = 0; i < 20; i += 0.5) {
(window.parent._wrap_setLastFunctionCall("mouse-tracking.js",12,243,260) ||     d1.push([i, 2 * i]));
(window.parent._wrap_setLastFunctionCall("mouse-tracking.js",13,267,302) ||     d2.push([i, i * 1.5 + 1.5 * (window.parent._wrap_setLastFunctionCall("mouse-tracking.js",13,289,300) || Math.sin(i))]));
(window.parent._wrap_setLastFunctionCall("mouse-tracking.js",14,315,345) ||     d3.push([i, 3 * (window.parent._wrap_setLastFunctionCall("mouse-tracking.js",14,329,340) || Math.cos(i)) + 10]));
  }
  var f = (window.parent._wrap_setLastFunctionCall("mouse-tracking.js",21,518,905) || Flotr.draw((window.parent._wrap_setLastFunctionCall("mouse-tracking.js",22,535,549) || $('container')), [{data: d1, mouse: {track: false}}, d2, d3], {mouse: {track: true, lineColor: 'purple', relative: true, position: 'ne', sensibility: 1, trackDecimals: 2, trackFormatter: function(obj) {
window.parent._wrap_addFunctionToMap('mouse-tracking.js', 31, 834,891, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return 'x = ' + obj.x + ', y = ' + obj.y;
}}}));
}));
