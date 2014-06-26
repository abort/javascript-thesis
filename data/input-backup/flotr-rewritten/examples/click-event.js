window.parent._wrap_staticMeasuredFunctions['click-event.js'] = 3;
window.parent._wrap_staticMeasuredCalls['click-event.js'] =9;
(window.parent._wrap_setLastFunctionCall("click-event.js",4,57,1135) || document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('click-event.js', 4, 88,1134);

  var options = {xaxis: {min: 0, max: 15}, yaxis: {min: 0, max: 15}, lines: {show: true}, points: {show: true}, mouse: {track: true}};
  var d1 = [[0, 0]];
  var f = (window.parent._wrap_setLastFunctionCall("click-event.js",24,496,537) || Flotr.draw((window.parent._wrap_setLastFunctionCall("click-event.js",24,507,521) || $('container')), [d1], options));
(window.parent._wrap_setLastFunctionCall("click-event.js",30,700,1128) ||   (window.parent._wrap_setLastFunctionCall("click-event.js",30,700,714) || $('container')).observe('flotr:click', function(event) {
window.parent._wrap_addFunctionToMap('click-event.js', 30, 738,1127);

  var position = event.memo[0];
(window.parent._wrap_setLastFunctionCall("click-event.js",35,893,926) ||   d1.push([position.x, position.y]));
  d1 = (window.parent._wrap_setLastFunctionCall("click-event.js",38,969,1015) || d1.sort(function(a, b) {
window.parent._wrap_addFunctionToMap('click-event.js', 38, 977,1014);

  return a[0] - b[0];
}));
  f = (window.parent._wrap_setLastFunctionCall("click-event.js",41,1079,1120) || Flotr.draw((window.parent._wrap_setLastFunctionCall("click-event.js",41,1090,1104) || $('container')), [d1], options));
}));
}));
