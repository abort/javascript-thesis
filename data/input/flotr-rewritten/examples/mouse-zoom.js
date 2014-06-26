window.parent._wrap_staticMeasuredFunctions['mouse-zoom.js'] = 4;
window.parent._wrap_staticMeasuredCalls['mouse-zoom.js'] =19;
(window.parent._wrap_setLastFunctionCall("mouse-zoom.js",4,55,1923) || document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('mouse-zoom.js', 4, 86,1922, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var d1 = [];
  var d2 = [];
  var d3 = [];
  for (var i = 0; i < 40; i += 0.5) {
(window.parent._wrap_setLastFunctionCall("mouse-zoom.js",12,247,286) ||     d1.push([i, (window.parent._wrap_setLastFunctionCall("mouse-zoom.js",12,259,270) || Math.sin(i)) + 3 * (window.parent._wrap_setLastFunctionCall("mouse-zoom.js",12,273,284) || Math.cos(i))]));
(window.parent._wrap_setLastFunctionCall("mouse-zoom.js",13,293,323) ||     d2.push([i, (window.parent._wrap_setLastFunctionCall("mouse-zoom.js",13,305,321) || Math.pow(1.1, i))]));
(window.parent._wrap_setLastFunctionCall("mouse-zoom.js",14,330,367) ||     d3.push([i, 40 - i + (window.parent._wrap_setLastFunctionCall("mouse-zoom.js",14,349,362) || Math.random()) * 10]));
  }
  var options = {selection: {mode: 'x', fps: 30}};
  function drawGraph(opts) {
window.parent._wrap_addFunctionToMap('mouse-zoom.js', 28, 654,971, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var o = (window.parent._wrap_setLastFunctionCall("mouse-zoom.js",32,785,833) || Object.extend((window.parent._wrap_setLastFunctionCall("mouse-zoom.js",32,799,820) || Object.clone(options)), opts || {}));
    return (window.parent._wrap_setLastFunctionCall("mouse-zoom.js",36,893,964) || Flotr.draw((window.parent._wrap_setLastFunctionCall("mouse-zoom.js",37,911,925) || $('container')), [d1, d2, d3], o));
  }
  var f = (window.parent._wrap_setLastFunctionCall("mouse-zoom.js",46,1038,1049) || drawGraph());
(window.parent._wrap_setLastFunctionCall("mouse-zoom.js",51,1122,1588) ||   (window.parent._wrap_setLastFunctionCall("mouse-zoom.js",51,1122,1136) || $('container')).observe('flotr:select', function(evt) {
window.parent._wrap_addFunctionToMap('mouse-zoom.js', 51, 1161,1587, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var area = evt.memo[0];
  f = (window.parent._wrap_setLastFunctionCall("mouse-zoom.js",62,1480,1580) || drawGraph({xaxis: {min: area.x1, max: area.x2}, yaxis: {min: area.y1, max: area.y2}}));
}));
(window.parent._wrap_setLastFunctionCall("mouse-zoom.js",74,1860,1916) ||   (window.parent._wrap_setLastFunctionCall("mouse-zoom.js",74,1860,1874) || $('reset-btn')).observe('click', function() {
window.parent._wrap_addFunctionToMap('mouse-zoom.js', 74, 1892,1915, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("mouse-zoom.js",74,1903,1914) ||   drawGraph());
}));
}));
