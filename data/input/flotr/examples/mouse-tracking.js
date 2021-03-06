document.observe('dom:loaded', function() {
  var d1 = [];
  var d2 = [];
  var d3 = [];
  for (var i = 0; i < 20; i += 0.5) {
    d1.push([i, 2 * i]);
    d2.push([i, i * 1.5 + 1.5 * Math.sin(i)]);
    d3.push([i, 3 * Math.cos(i) + 10]);
  }
  var f = Flotr.draw($('container'), [{data: d1, mouse: {track: false}}, d2, d3], {mouse: {track: true, lineColor: 'purple', relative: true, position: 'ne', sensibility: 1, trackDecimals: 2, trackFormatter: function(obj) {
  return 'x = ' + obj.x + ', y = ' + obj.y;
}}});
});
