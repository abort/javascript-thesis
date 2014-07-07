window.parent._wrap_staticMeasuredFunctions['data-download.js'] = 4;
window.parent._wrap_staticMeasuredCalls['data-download.js'] =14;
function getV(nl) {
window.parent._wrap_addFunctionToMap('data-download.js', 1, 0,133, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var v = null;
(window.parent._wrap_setLastFunctionCall("data-download.js",3,38,118,null,false,false) || window.parent._wrap_popCallStack(  (window.parent._wrap_setLastFunctionCall("data-download.js",3,38,44,$A,false,false) || window.parent._wrap_popCallStack($A(nl))).each(function(e) {
window.parent._wrap_addFunctionToMap('data-download.js', 3, 50,117, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (e.checked) {
    v = e.value;
    return;
  }
})));
  return v;
}
var f;
(window.parent._wrap_setLastFunctionCall("data-download.js",12,141,1052,document.observe,true,false) || window.parent._wrap_popCallStack(document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('data-download.js', 12, 172,1051, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var d1 = [];
  var d2 = [];
  var d3 = [];
  var d4 = [];
  var d5 = [];
  for (var i = 0; i <= 10; i += 0.1) {
(window.parent._wrap_setLastFunctionCall("data-download.js",19,303,337,d1.push,false,false) || window.parent._wrap_popCallStack(    d1.push([i, 4 + (window.parent._wrap_setLastFunctionCall("data-download.js",19,319,335,Math.pow,false,false) || window.parent._wrap_popCallStack(Math.pow(i, 1.5)))])));
(window.parent._wrap_setLastFunctionCall("data-download.js",20,343,371,d2.push,false,false) || window.parent._wrap_popCallStack(    d2.push([i, (window.parent._wrap_setLastFunctionCall("data-download.js",20,355,369,Math.pow,false,false) || window.parent._wrap_popCallStack(Math.pow(i, 3)))])));
(window.parent._wrap_setLastFunctionCall("data-download.js",21,377,418,d3.push,false,false) || window.parent._wrap_popCallStack(    d3.push([i, i * 5 + 3 * (window.parent._wrap_setLastFunctionCall("data-download.js",21,401,416,Math.sin,false,false) || window.parent._wrap_popCallStack(Math.sin(i * 4)))])));
(window.parent._wrap_setLastFunctionCall("data-download.js",22,424,439,d4.push,false,false) || window.parent._wrap_popCallStack(    d4.push([i, i])));
    if ((window.parent._wrap_setLastFunctionCall("data-download.js",23,449,461,i.toFixed,false,false) || window.parent._wrap_popCallStack(i.toFixed(1))) % 1 == 0) {
(window.parent._wrap_setLastFunctionCall("data-download.js",24,480,499,d5.push,false,false) || window.parent._wrap_popCallStack(      d5.push([i, 2 * i])));
    }
  }
  f = (window.parent._wrap_setLastFunctionCall("data-download.js",27,517,1048,Flotr.draw,false,false) || window.parent._wrap_popCallStack(Flotr.draw((window.parent._wrap_setLastFunctionCall("data-download.js",27,528,542,$,false,false) || window.parent._wrap_popCallStack($('container'))), [{data: d1, label: 'y = 4 + x^(1.5)', lines: {fill: true}}, {data: d2, label: 'y = x^3'}, {data: d3, label: 'y = 5x + 3sin(4x)'}, {data: d4, label: 'y = x'}, {data: d5, label: 'y = 2x', lines: {show: true}, points: {show: true}}], {xaxis: {noTicks: 7, tickFormatter: function(n) {
window.parent._wrap_addFunctionToMap('data-download.js', 27, 811,850, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return '(' + n + ')';
}, min: 1, max: 7.5}, yaxis: {ticks: [[0, "Lower"], 10, 20, 30, [40, "Upper"]], max: 40}, grid: {verticalLines: false, backgroundColor: 'white'}, legend: {position: 'nw'}, spreadsheet: {show: true}})));
})));
