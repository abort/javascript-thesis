window.parent._wrap_staticMeasuredFunctions['basic-candlesticks.js'] = 1;
window.parent._wrap_staticMeasuredCalls['basic-candlesticks.js'] =7;
(window.parent._wrap_setLastFunctionCall("basic-candlesticks.js",4,57,646,document.observe,true) || document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('basic-candlesticks.js', 4, 88,645, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var d1 = [];
  var price = 3.206;
  for (var i = 0; i < 50; i++) {
    var a = (window.parent._wrap_setLastFunctionCall("basic-candlesticks.js",12,246,259,Math.random,false) || Math.random());
    var b = (window.parent._wrap_setLastFunctionCall("basic-candlesticks.js",13,281,294,Math.random,false) || Math.random());
    var c = ((window.parent._wrap_setLastFunctionCall("basic-candlesticks.js",14,317,330,Math.random,false) || Math.random()) * (a + b)) - b;
(window.parent._wrap_setLastFunctionCall("basic-candlesticks.js",15,359,411,d1.push,false) ||     d1.push([i, price, price + a, price - b, price + c]));
    price = price + c;
  }
  var f = (window.parent._wrap_setLastFunctionCall("basic-candlesticks.js",22,515,639,Flotr.draw,false) || Flotr.draw((window.parent._wrap_setLastFunctionCall("basic-candlesticks.js",22,526,540,$,false) || $('container')), [d1], {candles: {show: true, candleWidth: 0.6}, xaxis: {noTicks: 10}}));
}));
