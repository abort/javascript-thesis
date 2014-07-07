document.observe('dom:loaded', function() {
  var d1 = [];
  var d2 = [];
  var d3 = [];
  for (var i = 0; i < 15; i += 0.5) {
    d1.push([i, i + Math.sin(i + Math.PI)]);
    d2.push([i, i]);
    d3.push([i, 15 - Math.cos(i)]);
  }
  function myLabelFunc(label) {
    return 'y = ' + label;
  }
  var f = Flotr.draw($('container'), [{data: d1, label: 'x + sin(x+&pi;)'}, {data: d2, label: 'x'}, {data: d3, label: '15 - cos(x)'}], {legend: {position: 'se', labelFormatter: myLabelFunc, backgroundColor: '#D2E8FF'}, HtmlText: false});
});
