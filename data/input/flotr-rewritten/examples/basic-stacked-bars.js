window.parent._wrap_staticMeasuredFunctions['basic-stacked-bars.js'] = 1;
window.parent._wrap_staticMeasuredCalls['basic-stacked-bars.js'] =6;
(window.parent._wrap_setLastFunctionCall("basic-stacked-bars.js",4,56,843) || document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('basic-stacked-bars.js', 4, 87,842, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var d1 = [], d2 = [], d3 = [];
  for (i = 0; i < 10; i++) {
    d1[i] = [i, (window.parent._wrap_setLastFunctionCall("basic-stacked-bars.js",10,219,232) || Math.random())];
    d2[i] = [i, (window.parent._wrap_setLastFunctionCall("basic-stacked-bars.js",11,253,266) || Math.random())];
    d3[i] = [i, (window.parent._wrap_setLastFunctionCall("basic-stacked-bars.js",12,287,300) || Math.random())];
  }
  var f = (window.parent._wrap_setLastFunctionCall("basic-stacked-bars.js",18,367,836) || Flotr.draw((window.parent._wrap_setLastFunctionCall("basic-stacked-bars.js",19,384,398) || $('container')), [{data: d1, label: 'Serie 1'}, {data: d2, label: 'Serie 2'}, {data: d3, label: 'Serie 3'}], {legend: {backgroundColor: '#D2E8FF'}, bars: {show: true, stacked: true, barWidth: 0.6}, grid: {verticalLines: false}, spreadsheet: {show: true}}));
}));
