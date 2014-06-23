window.parent._wrap_staticMeasuredFunctions['image-download.js'] = 2;
window.parent._wrap_staticMeasuredCalls['image-download.js'] =15;
var f;
(window.parent._wrap_setLastFunctionCall("image-download.js",5,64,1762) || document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('image-download.js', 5, 95,1761);

  var d1 = [];
  var d2 = [];
  var d3 = [];
  var d4 = [];
  var d5 = [];
  for (var i = 0; i <= 10; i += 0.1) {
(window.parent._wrap_setLastFunctionCall("image-download.js",13,241,274) ||     d1.push([i, 4 + (window.parent._wrap_setLastFunctionCall("image-download.js",13,257,272) || Math.pow(i, 1.5))]));
(window.parent._wrap_setLastFunctionCall("image-download.js",14,281,308) ||     d2.push([i, (window.parent._wrap_setLastFunctionCall("image-download.js",14,293,306) || Math.pow(i, 3))]));
(window.parent._wrap_setLastFunctionCall("image-download.js",15,315,348) ||     d3.push([i, i * 5 + 3 * (window.parent._wrap_setLastFunctionCall("image-download.js",15,333,346) || Math.sin(i * 4))]));
(window.parent._wrap_setLastFunctionCall("image-download.js",16,355,370) ||     d4.push([i, i]));
    if ((window.parent._wrap_setLastFunctionCall("image-download.js",17,381,393) || i.toFixed(1)) % 1 == 0) {
(window.parent._wrap_setLastFunctionCall("image-download.js",18,410,427) ||       d5.push([i, 2 * i]));
    }
  }
  f = (window.parent._wrap_setLastFunctionCall("image-download.js",25,498,1554) || Flotr.draw((window.parent._wrap_setLastFunctionCall("image-download.js",26,515,529) || $('container')), [{data: d1, label: 'y = 4 + x^(1.5)', lines: {fill: true}}, {data: d2, label: 'y = x^3', yaxis: 2}, {data: d3, label: 'y = 5x + 3sin(4x)'}, {data: d4, label: 'y = x'}, {data: d5, label: 'y = 2x', lines: {show: true}, points: {show: true}}], {title: 'Download Image Example', subtitle: 'You can save me as an image', xaxis: {noTicks: 7, tickFormatter: function(n) {
window.parent._wrap_addFunctionToMap('image-download.js', 37, 961,993);

  return '(' + n + ')';
}, min: 1, max: 7.5, labelsAngle: 45, title: 'x Axis'}, yaxis: {ticks: [[0, "Lower"], 10, 20, 30, [40, "Upper"]], max: 40, title: 'y = f(x)'}, y2axis: {color: '#FF0000', max: 500, title: 'y = x^3'}, grid: {verticalLines: false, backgroundColor: 'white'}, HtmlText: false, legend: {position: 'nw'}}));
  if (Prototype.Browser.IE) {
    var form = (window.parent._wrap_setLastFunctionCall("image-download.js",60,1609,1644) || $(document.forms['image-download']));
(window.parent._wrap_setLastFunctionCall("image-download.js",61,1651,1749) ||     (window.parent._wrap_setLastFunctionCall("image-download.js",61,1651,1665) || form.disable()).insert({top: "Your browser doesn't allow you to use this feature, sorry :(<br />"}));
  }
}));
