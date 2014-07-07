window.parent._wrap_staticMeasuredFunctions['basic-stacked-bars.js'] = 1;
window.parent._wrap_staticMeasuredCalls['basic-stacked-bars.js'] =6;
(window.parent._wrap_setLastFunctionCall("basic-stacked-bars.js",1,0,485,document.observe,true,false) || window.parent._wrap_popCallStack(document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('basic-stacked-bars.js', 1, 31,484, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var d1 = [], d2 = [], d3 = [];
  for (i = 0; i < 10; i++) {
    d1[i] = [i, (window.parent._wrap_setLastFunctionCall("basic-stacked-bars.js",4,122,135,Math.random,false,false) || window.parent._wrap_popCallStack(Math.random()))];
    d2[i] = [i, (window.parent._wrap_setLastFunctionCall("basic-stacked-bars.js",5,154,167,Math.random,false,false) || window.parent._wrap_popCallStack(Math.random()))];
    d3[i] = [i, (window.parent._wrap_setLastFunctionCall("basic-stacked-bars.js",6,186,199,Math.random,false,false) || window.parent._wrap_popCallStack(Math.random()))];
  }
  var f = (window.parent._wrap_setLastFunctionCall("basic-stacked-bars.js",8,216,481,Flotr.draw,false,false) || window.parent._wrap_popCallStack(Flotr.draw((window.parent._wrap_setLastFunctionCall("basic-stacked-bars.js",8,227,241,$,false,false) || window.parent._wrap_popCallStack($('container'))), [{data: d1, label: 'Serie 1'}, {data: d2, label: 'Serie 2'}, {data: d3, label: 'Serie 3'}], {legend: {backgroundColor: '#D2E8FF'}, bars: {show: true, stacked: true, barWidth: 0.6}, grid: {verticalLines: false}, spreadsheet: {show: true}})));
})));
