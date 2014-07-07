document.observe('dom:loaded', function() {
  var options = {xaxis: {min: 0, max: 15}, yaxis: {min: 0, max: 15}, lines: {show: true}, points: {show: true}, mouse: {track: true}};
  var d1 = [[0, 0]];
  var f = Flotr.draw($('container'), [d1], options);
  $('container').observe('flotr:click', function(event) {
  var position = event.memo[0];
  d1.push([position.x, position.y]);
  d1 = d1.sort(function(a, b) {
  return a[0] - b[0];
});
  f = Flotr.draw($('container'), [d1], options);
});
});
