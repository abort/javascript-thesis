window.parent._wrap_staticMeasuredFunctions['negative.js'] = 1;
window.parent._wrap_staticMeasuredCalls['negative.js'] =11;
(window.parent._wrap_setLastFunctionCall("negative.js",4,51,1530) || document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('negative.js', 4, 82,1529);

  var d0 = [];
  var d1 = [];
  var d2 = [];
  var n, x, y, sx = 0, sy = 0, sxy = 0, sxsq = 0;
  for (n = 0; n < 20; n++) {
    x = n;
    y = x + (window.parent._wrap_setLastFunctionCall("negative.js",21,543,556) || Math.random()) * 8 - 15;
(window.parent._wrap_setLastFunctionCall("negative.js",22,569,584) ||     d0.push([x, 0]));
(window.parent._wrap_setLastFunctionCall("negative.js",23,596,611) ||     d1.push([x, y]));
    sx += x;
    sy += y;
    sxy += x * y;
    sxsq += (window.parent._wrap_setLastFunctionCall("negative.js",31,761,774) || Math.pow(x, 2));
  }
  var xmean = sx / n;
  var ymean = sy / n;
  var beta = ((n * sxy) - (sx * sy)) / ((n * sxsq) - ((window.parent._wrap_setLastFunctionCall("negative.js",36,871,885) || Math.pow(sx, 2))));
  var alpha = ymean - (beta * xmean);
  for (var i = 0; i < 20; i++) {
(window.parent._wrap_setLastFunctionCall("negative.js",43,1017,1045) ||     d2.push([i, alpha + beta * i]));
  }
  var f = (window.parent._wrap_setLastFunctionCall("negative.js",49,1114,1524) || Flotr.draw((window.parent._wrap_setLastFunctionCall("negative.js",50,1130,1144) || $('container')), [{data: d0, shadowSize: 0, color: '#545454'}, {data: d1, label: 'y = x + (Math.random() * 8) - 15', points: {show: true}}, {data: d2, label: 'y = ' + (window.parent._wrap_setLastFunctionCall("negative.js",53,1359,1375) || alpha.toFixed(2)) + ' + ' + (window.parent._wrap_setLastFunctionCall("negative.js",53,1384,1399) || beta.toFixed(2)) + '*x'}], {legend: {position: 'se', backgroundColor: '#D2E8FF'}}));
}));
