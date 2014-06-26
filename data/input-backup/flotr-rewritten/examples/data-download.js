window.parent._wrap_staticMeasuredFunctions['data-download.js'] = 4;
window.parent._wrap_staticMeasuredCalls['data-download.js'] =14;
function getV(nl) {
window.parent._wrap_addFunctionToMap('data-download.js', 1, 4,181);

  var v = null;
(window.parent._wrap_setLastFunctionCall("data-download.js",3,50,158) ||   (window.parent._wrap_setLastFunctionCall("data-download.js",3,50,56) || $A(nl)).each(function(e) {
window.parent._wrap_addFunctionToMap('data-download.js', 3, 62,157);

  if (e.checked) {
    v = e.value;
    return;
  }
}));
  return v;
}
var f;
(window.parent._wrap_setLastFunctionCall("data-download.js",16,253,1815) || document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('data-download.js', 16, 284,1814);

  var d1 = [];
  var d2 = [];
  var d3 = [];
  var d4 = [];
  var d5 = [];
  for (var i = 0; i <= 10; i += 0.1) {
(window.parent._wrap_setLastFunctionCall("data-download.js",24,463,496) ||     d1.push([i, 4 + (window.parent._wrap_setLastFunctionCall("data-download.js",24,479,494) || Math.pow(i, 1.5))]));
(window.parent._wrap_setLastFunctionCall("data-download.js",25,508,535) ||     d2.push([i, (window.parent._wrap_setLastFunctionCall("data-download.js",25,520,533) || Math.pow(i, 3))]));
(window.parent._wrap_setLastFunctionCall("data-download.js",26,547,580) ||     d3.push([i, i * 5 + 3 * (window.parent._wrap_setLastFunctionCall("data-download.js",26,565,578) || Math.sin(i * 4))]));
(window.parent._wrap_setLastFunctionCall("data-download.js",27,592,607) ||     d4.push([i, i]));
    if ((window.parent._wrap_setLastFunctionCall("data-download.js",28,623,635) || i.toFixed(1)) % 1 == 0) {
(window.parent._wrap_setLastFunctionCall("data-download.js",29,658,675) ||       d5.push([i, 2 * i]));
    }
  }
  f = (window.parent._wrap_setLastFunctionCall("data-download.js",36,779,1808) || Flotr.draw((window.parent._wrap_setLastFunctionCall("data-download.js",37,801,815) || $('container')), [{data: d1, label: 'y = 4 + x^(1.5)', lines: {fill: true}}, {data: d2, label: 'y = x^3'}, {data: d3, label: 'y = 5x + 3sin(4x)'}, {data: d4, label: 'y = x'}, {data: d5, label: 'y = 2x', lines: {show: true}, points: {show: true}}], {xaxis: {noTicks: 7, tickFormatter: function(n) {
window.parent._wrap_addFunctionToMap('data-download.js', 46, 1207,1239);

  return '(' + n + ')';
}, min: 1, max: 7.5}, yaxis: {ticks: [[0, "Lower"], 10, 20, 30, [40, "Upper"]], max: 40}, grid: {verticalLines: false, backgroundColor: 'white'}, legend: {position: 'nw'}, spreadsheet: {show: true}}));
}));
