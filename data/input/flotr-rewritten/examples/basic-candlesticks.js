window.parent._wrap_staticMeasuredFunctions['basic-candlesticks.js'] = 1;
window.parent._wrap_staticMeasuredCalls['basic-candlesticks.js'] =7;
(window.parent._wrap_setLastFunctionCall("basic-candlesticks.js",1,0,406,document.observe,true,false) || window.parent._wrap_popCallStack(document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('basic-candlesticks.js', 1, 31,405, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var d1 = [];
  var price = 3.206;
  for (var i = 0; i < 50; i++) {
    var a = (window.parent._wrap_setLastFunctionCall("basic-candlesticks.js",5,125,138,Math.random,false,false) || window.parent._wrap_popCallStack(Math.random()));
    var b = (window.parent._wrap_setLastFunctionCall("basic-candlesticks.js",6,152,165,Math.random,false,false) || window.parent._wrap_popCallStack(Math.random()));
    var c = ((window.parent._wrap_setLastFunctionCall("basic-candlesticks.js",7,180,193,Math.random,false,false) || window.parent._wrap_popCallStack(Math.random())) * (a + b)) - b;
(window.parent._wrap_setLastFunctionCall("basic-candlesticks.js",8,214,266,d1.push,false,false) || window.parent._wrap_popCallStack(    d1.push([i, price, price + a, price - b, price + c])));
    price = price + c;
  }
  var f = (window.parent._wrap_setLastFunctionCall("basic-candlesticks.js",11,305,402,Flotr.draw,false,false) || window.parent._wrap_popCallStack(Flotr.draw((window.parent._wrap_setLastFunctionCall("basic-candlesticks.js",11,316,330,$,false,false) || window.parent._wrap_popCallStack($('container'))), [d1], {candles: {show: true, candleWidth: 0.6}, xaxis: {noTicks: 10}})));
})));
