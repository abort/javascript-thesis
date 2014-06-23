window.parent._wrap_staticMeasuredFunctions['basic-legend.js'] = 2;
window.parent._wrap_staticMeasuredCalls['basic-legend.js'] =8;
(window.parent._wrap_setLastFunctionCall("basic-legend.js",4,55,970) || document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('basic-legend.js', 4, 86,969);

  var d1 = [];
  var d2 = [];
  var d3 = [];
  for (var i = 0; i < 15; i += 0.5) {
(window.parent._wrap_setLastFunctionCall("basic-legend.js",12,247,284) ||     d1.push([i, i + (window.parent._wrap_setLastFunctionCall("basic-legend.js",12,263,282) || Math.sin(i + Math.PI))]));
(window.parent._wrap_setLastFunctionCall("basic-legend.js",13,291,306) ||     d2.push([i, i]));
(window.parent._wrap_setLastFunctionCall("basic-legend.js",14,313,341) ||     d3.push([i, 15 - (window.parent._wrap_setLastFunctionCall("basic-legend.js",14,328,339) || Math.cos(i))]));
  }
  function myLabelFunc(label) {
window.parent._wrap_addFunctionToMap('basic-legend.js', 20, 426,488);

    return 'y = ' + label;
  }
  var f = (window.parent._wrap_setLastFunctionCall("basic-legend.js",27,547,963) || Flotr.draw((window.parent._wrap_setLastFunctionCall("basic-legend.js",28,564,578) || $('container')), [{data: d1, label: 'x + sin(x+&pi;)'}, {data: d2, label: 'x'}, {data: d3, label: '15 - cos(x)'}], {legend: {position: 'se', labelFormatter: myLabelFunc, backgroundColor: '#D2E8FF'}, HtmlText: false}));
}));
