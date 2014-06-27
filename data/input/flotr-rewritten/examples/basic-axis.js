window.parent._wrap_staticMeasuredFunctions['basic-axis.js'] = 2;
window.parent._wrap_staticMeasuredCalls['basic-axis.js'] =12;
(window.parent._wrap_setLastFunctionCall("basic-axis.js",4,107,1469,document.observe,true) || document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('basic-axis.js', 4, 138,1468, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var d1 = [];
  var d2 = [];
  var d3 = [];
  var d4 = [];
  var d5 = [];
  for (var i = 0; i <= 10; i += 0.1) {
(window.parent._wrap_setLastFunctionCall("basic-axis.js",15,330,363,d1.push,false) ||     d1.push([i, 4 + (window.parent._wrap_setLastFunctionCall("basic-axis.js",15,346,361,Math.pow,false) || Math.pow(i, 1.5))]));
(window.parent._wrap_setLastFunctionCall("basic-axis.js",16,370,397,d2.push,false) ||     d2.push([i, (window.parent._wrap_setLastFunctionCall("basic-axis.js",16,382,395,Math.pow,false) || Math.pow(i, 3))]));
(window.parent._wrap_setLastFunctionCall("basic-axis.js",17,404,437,d3.push,false) ||     d3.push([i, i * 5 + 3 * (window.parent._wrap_setLastFunctionCall("basic-axis.js",17,422,435,Math.sin,false) || Math.sin(i * 4))]));
(window.parent._wrap_setLastFunctionCall("basic-axis.js",18,444,459,d4.push,false) ||     d4.push([i, i]));
    if ((window.parent._wrap_setLastFunctionCall("basic-axis.js",19,470,482,i.toFixed,false) || i.toFixed(1)) % 1 == 0) {
(window.parent._wrap_setLastFunctionCall("basic-axis.js",20,499,516,d5.push,false) ||       d5.push([i, 2 * i]));
    }
  }
  var f = (window.parent._wrap_setLastFunctionCall("basic-axis.js",27,593,1462,Flotr.draw,false) || Flotr.draw((window.parent._wrap_setLastFunctionCall("basic-axis.js",28,610,624,$,false) || $('container')), [{data: d1, label: 'y = 4 + x^(1.5)', lines: {fill: true}}, {data: d2, label: 'y = x^3'}, {data: d3, label: 'y = 5x + 3sin(4x)'}, {data: d4, label: 'y = x'}, {data: d5, label: 'y = 2x', lines: {show: true}, points: {show: true}}], {xaxis: {noTicks: 7, tickFormatter: function(n) {
window.parent._wrap_addFunctionToMap('basic-axis.js', 37, 961,993, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return '(' + n + ')';
}, min: 1, max: 7.5}, yaxis: {ticks: [[0, "Lower"], 10, 20, 30, [40, "Upper"]], max: 40}, grid: {verticalLines: false}, legend: {position: 'nw'}, title: 'Basic Axis example', subtitle: 'This is a subtitle'}));
}));
