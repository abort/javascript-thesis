window.parent._wrap_staticMeasuredFunctions['advanced-titles.js'] = 2;
window.parent._wrap_staticMeasuredCalls['advanced-titles.js'] =12;
var f;
(window.parent._wrap_setLastFunctionCall("advanced-titles.js",2,7,1102,document.observe,true,false) || window.parent._wrap_popCallStack(document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('advanced-titles.js', 2, 38,1101, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var d1 = [];
  var d2 = [];
  var d3 = [];
  var d4 = [];
  var d5 = [];
  for (var i = 0; i <= 10; i += 0.1) {
(window.parent._wrap_setLastFunctionCall("advanced-titles.js",9,169,203,d1.push,false,false) || window.parent._wrap_popCallStack(    d1.push([i, 4 + (window.parent._wrap_setLastFunctionCall("advanced-titles.js",9,185,201,Math.pow,false,false) || window.parent._wrap_popCallStack(Math.pow(i, 1.5)))])));
(window.parent._wrap_setLastFunctionCall("advanced-titles.js",10,209,237,d2.push,false,false) || window.parent._wrap_popCallStack(    d2.push([i, (window.parent._wrap_setLastFunctionCall("advanced-titles.js",10,221,235,Math.pow,false,false) || window.parent._wrap_popCallStack(Math.pow(i, 3)))])));
(window.parent._wrap_setLastFunctionCall("advanced-titles.js",11,243,284,d3.push,false,false) || window.parent._wrap_popCallStack(    d3.push([i, i * 5 + 3 * (window.parent._wrap_setLastFunctionCall("advanced-titles.js",11,267,282,Math.sin,false,false) || window.parent._wrap_popCallStack(Math.sin(i * 4)))])));
(window.parent._wrap_setLastFunctionCall("advanced-titles.js",12,290,305,d4.push,false,false) || window.parent._wrap_popCallStack(    d4.push([i, i])));
    if ((window.parent._wrap_setLastFunctionCall("advanced-titles.js",13,315,327,i.toFixed,false,false) || window.parent._wrap_popCallStack(i.toFixed(1))) % 1 == 0) {
(window.parent._wrap_setLastFunctionCall("advanced-titles.js",14,346,365,d5.push,false,false) || window.parent._wrap_popCallStack(      d5.push([i, 2 * i])));
    }
  }
  f = (window.parent._wrap_setLastFunctionCall("advanced-titles.js",17,383,1098,Flotr.draw,false,false) || window.parent._wrap_popCallStack(Flotr.draw((window.parent._wrap_setLastFunctionCall("advanced-titles.js",17,394,408,$,false,false) || window.parent._wrap_popCallStack($('container'))), [{data: d1, label: 'y = 4 + x^(1.5)', lines: {fill: true}}, {data: d2, label: 'y = x^3', yaxis: 2}, {data: d3, label: 'y = 5x + 3sin(4x)'}, {data: d4, label: 'y = x'}, {data: d5, label: 'y = 2x', lines: {show: true}, points: {show: true}}], {title: 'Advanced Titles Example', subtitle: 'You can save me as an image', xaxis: {noTicks: 7, tickFormatter: function(n) {
window.parent._wrap_addFunctionToMap('advanced-titles.js', 17, 762,801, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return '(' + n + ')';
}, min: 1, max: 7.5, labelsAngle: 45, title: 'x Axis'}, yaxis: {ticks: [[0, "Lower"], 10, 20, 30, [40, "Upper"]], max: 40, title: 'y = f(x)'}, y2axis: {color: '#FF0000', max: 500, title: 'y = x^3'}, grid: {verticalLines: false, backgroundColor: 'white'}, HtmlText: false, legend: {position: 'nw'}})));
})));
