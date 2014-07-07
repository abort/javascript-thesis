window.parent._wrap_staticMeasuredFunctions['negative.js'] = 1;
window.parent._wrap_staticMeasuredCalls['negative.js'] =11;
(window.parent._wrap_setLastFunctionCall("negative.js",1,0,860,document.observe,true,false) || window.parent._wrap_popCallStack(document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('negative.js', 1, 31,859, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var d0 = [];
  var d1 = [];
  var d2 = [];
  var n, x, y, sx = 0, sy = 0, sxy = 0, sxsq = 0;
  for (n = 0; n < 20; n++) {
    x = n;
    y = x + (window.parent._wrap_setLastFunctionCall("negative.js",8,191,204,Math.random,false,false) || window.parent._wrap_popCallStack(Math.random())) * 8 - 15;
(window.parent._wrap_setLastFunctionCall("negative.js",9,219,234,d0.push,false,false) || window.parent._wrap_popCallStack(    d0.push([x, 0])));
(window.parent._wrap_setLastFunctionCall("negative.js",10,240,255,d1.push,false,false) || window.parent._wrap_popCallStack(    d1.push([x, y])));
    sx += x;
    sy += y;
    sxy += x * y;
    sxsq += (window.parent._wrap_setLastFunctionCall("negative.js",14,313,327,Math.pow,false,false) || window.parent._wrap_popCallStack(Math.pow(x, 2)));
  }
  var xmean = sx / n;
  var ymean = sy / n;
  var beta = ((n * sxy) - (sx * sy)) / ((n * sxsq) - ((window.parent._wrap_setLastFunctionCall("negative.js",18,431,446,Math.pow,false,false) || window.parent._wrap_popCallStack(Math.pow(sx, 2)))));
  var alpha = ymean - (beta * xmean);
  for (var i = 0; i < 20; i++) {
(window.parent._wrap_setLastFunctionCall("negative.js",21,525,555,d2.push,false,false) || window.parent._wrap_popCallStack(    d2.push([i, alpha + beta * i])));
  }
  var f = (window.parent._wrap_setLastFunctionCall("negative.js",23,571,856,Flotr.draw,false,false) || window.parent._wrap_popCallStack(Flotr.draw((window.parent._wrap_setLastFunctionCall("negative.js",23,582,596,$,false,false) || window.parent._wrap_popCallStack($('container'))), [{data: d0, shadowSize: 0, color: '#545454'}, {data: d1, label: 'y = x + (Math.random() * 8) - 15', points: {show: true}}, {data: d2, label: 'y = ' + (window.parent._wrap_setLastFunctionCall("negative.js",23,748,764,alpha.toFixed,false,false) || window.parent._wrap_popCallStack(alpha.toFixed(2))) + ' + ' + (window.parent._wrap_setLastFunctionCall("negative.js",23,775,790,beta.toFixed,false,false) || window.parent._wrap_popCallStack(beta.toFixed(2))) + '*x'}], {legend: {position: 'se', backgroundColor: '#D2E8FF'}})));
})));
