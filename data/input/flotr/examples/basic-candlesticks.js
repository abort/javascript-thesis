document.observe('dom:loaded', function() {
  var d1 = [];
  var price = 3.206;
  for (var i = 0; i < 50; i++) {
    var a = Math.random();
    var b = Math.random();
    var c = (Math.random() * (a + b)) - b;
    d1.push([i, price, price + a, price - b, price + c]);
    price = price + c;
  }
  var f = Flotr.draw($('container'), [d1], {candles: {show: true, candleWidth: 0.6}, xaxis: {noTicks: 10}});
});
