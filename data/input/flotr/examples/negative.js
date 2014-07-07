document.observe('dom:loaded', function() {
  var d0 = [];
  var d1 = [];
  var d2 = [];
  var n, x, y, sx = 0, sy = 0, sxy = 0, sxsq = 0;
  for (n = 0; n < 20; n++) {
    x = n;
    y = x + Math.random() * 8 - 15;
    d0.push([x, 0]);
    d1.push([x, y]);
    sx += x;
    sy += y;
    sxy += x * y;
    sxsq += Math.pow(x, 2);
  }
  var xmean = sx / n;
  var ymean = sy / n;
  var beta = ((n * sxy) - (sx * sy)) / ((n * sxsq) - (Math.pow(sx, 2)));
  var alpha = ymean - (beta * xmean);
  for (var i = 0; i < 20; i++) {
    d2.push([i, alpha + beta * i]);
  }
  var f = Flotr.draw($('container'), [{data: d0, shadowSize: 0, color: '#545454'}, {data: d1, label: 'y = x + (Math.random() * 8) - 15', points: {show: true}}, {data: d2, label: 'y = ' + alpha.toFixed(2) + ' + ' + beta.toFixed(2) + '*x'}], {legend: {position: 'se', backgroundColor: '#D2E8FF'}});
});
