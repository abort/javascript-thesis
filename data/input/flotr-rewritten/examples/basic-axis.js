window.parent._wrap_staticMeasuredFunctions['basic-axis.js'] = 2;
window.parent._wrap_staticMeasuredCalls['basic-axis.js'] =12;
(window.parent._wrap_setLastFunctionCall("basic-axis.js",1,0,923,document.observe,true,false) || window.parent._wrap_popCallStack(document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('basic-axis.js', 1, 31,922, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var d1 = [];
  var d2 = [];
  var d3 = [];
  var d4 = [];
  var d5 = [];
  for (var i = 0; i <= 10; i += 0.1) {
(window.parent._wrap_setLastFunctionCall("basic-axis.js",8,162,196,d1.push,false,false) || window.parent._wrap_popCallStack(    d1.push([i, 4 + (window.parent._wrap_setLastFunctionCall("basic-axis.js",8,178,194,Math.pow,false,false) || window.parent._wrap_popCallStack(Math.pow(i, 1.5)))])));
(window.parent._wrap_setLastFunctionCall("basic-axis.js",9,202,230,d2.push,false,false) || window.parent._wrap_popCallStack(    d2.push([i, (window.parent._wrap_setLastFunctionCall("basic-axis.js",9,214,228,Math.pow,false,false) || window.parent._wrap_popCallStack(Math.pow(i, 3)))])));
(window.parent._wrap_setLastFunctionCall("basic-axis.js",10,236,277,d3.push,false,false) || window.parent._wrap_popCallStack(    d3.push([i, i * 5 + 3 * (window.parent._wrap_setLastFunctionCall("basic-axis.js",10,260,275,Math.sin,false,false) || window.parent._wrap_popCallStack(Math.sin(i * 4)))])));
(window.parent._wrap_setLastFunctionCall("basic-axis.js",11,283,298,d4.push,false,false) || window.parent._wrap_popCallStack(    d4.push([i, i])));
    if ((window.parent._wrap_setLastFunctionCall("basic-axis.js",12,308,320,i.toFixed,false,false) || window.parent._wrap_popCallStack(i.toFixed(1))) % 1 == 0) {
(window.parent._wrap_setLastFunctionCall("basic-axis.js",13,339,358,d5.push,false,false) || window.parent._wrap_popCallStack(      d5.push([i, 2 * i])));
    }
  }
  var f = (window.parent._wrap_setLastFunctionCall("basic-axis.js",16,380,919,Flotr.draw,false,false) || window.parent._wrap_popCallStack(Flotr.draw((window.parent._wrap_setLastFunctionCall("basic-axis.js",16,391,405,$,false,false) || window.parent._wrap_popCallStack($('container'))), [{data: d1, label: 'y = 4 + x^(1.5)', lines: {fill: true}}, {data: d2, label: 'y = x^3'}, {data: d3, label: 'y = 5x + 3sin(4x)'}, {data: d4, label: 'y = x'}, {data: d5, label: 'y = 2x', lines: {show: true}, points: {show: true}}], {xaxis: {noTicks: 7, tickFormatter: function(n) {
window.parent._wrap_addFunctionToMap('basic-axis.js', 16, 674,713, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return '(' + n + ')';
}, min: 1, max: 7.5}, yaxis: {ticks: [[0, "Lower"], 10, 20, 30, [40, "Upper"]], max: 40}, grid: {verticalLines: false}, legend: {position: 'nw'}, title: 'Basic Axis example', subtitle: 'This is a subtitle'})));
})));
