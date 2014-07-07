window.parent._wrap_staticMeasuredFunctions['basic-legend.js'] = 2;
window.parent._wrap_staticMeasuredCalls['basic-legend.js'] =8;
(window.parent._wrap_setLastFunctionCall("basic-legend.js",1,0,536,document.observe,true,false) || window.parent._wrap_popCallStack(document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('basic-legend.js', 1, 31,535, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var d1 = [];
  var d2 = [];
  var d3 = [];
  for (var i = 0; i < 15; i += 0.5) {
(window.parent._wrap_setLastFunctionCall("basic-legend.js",6,131,170,d1.push,false,false) || window.parent._wrap_popCallStack(    d1.push([i, i + (window.parent._wrap_setLastFunctionCall("basic-legend.js",6,147,168,Math.sin,false,false) || window.parent._wrap_popCallStack(Math.sin(i + Math.PI)))])));
(window.parent._wrap_setLastFunctionCall("basic-legend.js",7,176,191,d2.push,false,false) || window.parent._wrap_popCallStack(    d2.push([i, i])));
(window.parent._wrap_setLastFunctionCall("basic-legend.js",8,197,227,d3.push,false,false) || window.parent._wrap_popCallStack(    d3.push([i, 15 - (window.parent._wrap_setLastFunctionCall("basic-legend.js",8,214,225,Math.cos,false,false) || window.parent._wrap_popCallStack(Math.cos(i)))])));
  }
  function myLabelFunc(label) {
window.parent._wrap_addFunctionToMap('basic-legend.js', 10, 235,295, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return 'y = ' + label;
  }
  var f = (window.parent._wrap_setLastFunctionCall("basic-legend.js",13,306,532,Flotr.draw,false,false) || window.parent._wrap_popCallStack(Flotr.draw((window.parent._wrap_setLastFunctionCall("basic-legend.js",13,317,331,$,false,false) || window.parent._wrap_popCallStack($('container'))), [{data: d1, label: 'x + sin(x+&pi;)'}, {data: d2, label: 'x'}, {data: d3, label: '15 - cos(x)'}], {legend: {position: 'se', labelFormatter: myLabelFunc, backgroundColor: '#D2E8FF'}, HtmlText: false})));
})));
