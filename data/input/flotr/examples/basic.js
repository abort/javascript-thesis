document.observe('dom:loaded', function() {
  var d1 = [];
  for (var i = 0; i < 14; i += 0.5) 
    d1.push([i, Math.sin(i)]);
  var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];
  var f = Flotr.draw($('container'), [d1, d2]);
});
