window.parent._wrap_staticMeasuredFunctions['advanced-titles.js'] = 2;
window.parent._wrap_staticMeasuredCalls['advanced-titles.js'] =12;
var f;
(window.parent._wrap_setLastFunctionCall("advanced-titles.js",5,67,1545,document.observe,true) || document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('advanced-titles.js', 5, 98,1544, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var d1 = [];
  var d2 = [];
  var d3 = [];
  var d4 = [];
  var d5 = [];
  for (var i = 0; i <= 10; i += 0.1) {
(window.parent._wrap_setLastFunctionCall("advanced-titles.js",13,244,277,d1.push,false) ||     d1.push([i, 4 + (window.parent._wrap_setLastFunctionCall("advanced-titles.js",13,260,275,Math.pow,false) || Math.pow(i, 1.5))]));
(window.parent._wrap_setLastFunctionCall("advanced-titles.js",14,284,311,d2.push,false) ||     d2.push([i, (window.parent._wrap_setLastFunctionCall("advanced-titles.js",14,296,309,Math.pow,false) || Math.pow(i, 3))]));
(window.parent._wrap_setLastFunctionCall("advanced-titles.js",15,318,351,d3.push,false) ||     d3.push([i, i * 5 + 3 * (window.parent._wrap_setLastFunctionCall("advanced-titles.js",15,336,349,Math.sin,false) || Math.sin(i * 4))]));
(window.parent._wrap_setLastFunctionCall("advanced-titles.js",16,358,373,d4.push,false) ||     d4.push([i, i]));
    if ((window.parent._wrap_setLastFunctionCall("advanced-titles.js",17,384,396,i.toFixed,false) || i.toFixed(1)) % 1 == 0) {
(window.parent._wrap_setLastFunctionCall("advanced-titles.js",18,413,430,d5.push,false) ||       d5.push([i, 2 * i]));
    }
  }
  f = (window.parent._wrap_setLastFunctionCall("advanced-titles.js",25,501,1538,Flotr.draw,false) || Flotr.draw((window.parent._wrap_setLastFunctionCall("advanced-titles.js",26,518,532,$,false) || $('container')), [{data: d1, label: 'y = 4 + x^(1.5)', lines: {fill: true}}, {data: d2, label: 'y = x^3', yaxis: 2}, {data: d3, label: 'y = 5x + 3sin(4x)'}, {data: d4, label: 'y = x'}, {data: d5, label: 'y = 2x', lines: {show: true}, points: {show: true}}], {title: 'Advanced Titles Example', subtitle: 'You can save me as an image', xaxis: {noTicks: 7, tickFormatter: function(n) {
window.parent._wrap_addFunctionToMap('advanced-titles.js', 37, 945,977, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return '(' + n + ')';
}, min: 1, max: 7.5, labelsAngle: 45, title: 'x Axis'}, yaxis: {ticks: [[0, "Lower"], 10, 20, 30, [40, "Upper"]], max: 40, title: 'y = f(x)'}, y2axis: {color: '#FF0000', max: 500, title: 'y = x^3'}, grid: {verticalLines: false, backgroundColor: 'white'}, HtmlText: false, legend: {position: 'nw'}}));
}));
