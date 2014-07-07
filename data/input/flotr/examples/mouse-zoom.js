document.observe('dom:loaded', function() {
  var d1 = [];
  var d2 = [];
  var d3 = [];
  for (var i = 0; i < 40; i += 0.5) {
    d1.push([i, Math.sin(i) + 3 * Math.cos(i)]);
    d2.push([i, Math.pow(1.1, i)]);
    d3.push([i, 40 - i + Math.random() * 10]);
  }
  var options = {selection: {mode: 'x', fps: 30}};
  function drawGraph(opts) {
    var o = Object.extend(Object.clone(options), opts || {});
    return Flotr.draw($('container'), [d1, d2, d3], o);
  }
  var f = drawGraph();
  $('container').observe('flotr:select', function(evt) {
  var area = evt.memo[0];
  f = drawGraph({xaxis: {min: area.x1, max: area.x2}, yaxis: {min: area.y1, max: area.y2}});
});
  $('reset-btn').observe('click', function() {
  drawGraph();
});
});
