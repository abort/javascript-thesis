window.parent._wrap_staticMeasuredFunctions['flotr-0.2.0-alpha.js'] = 104;
window.parent._wrap_staticMeasuredCalls['flotr-0.2.0-alpha.js'] =830;
var Flotr = {version: '0.2.0-alpha', author: 'Bas Wenneker', website: 'http://www.solutoire.com', _registeredTypes: {'lines': 'drawSeriesLines', 'points': 'drawSeriesPoints', 'bars': 'drawSeriesBars', 'candles': 'drawSeriesCandles', 'pie': 'drawSeriesPie'}, register: function(type, functionName) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 14, 350,447, (typeof arguments === 'object' ? arguments.callee.caller : null));

  Flotr._registeredTypes[type] = functionName + '';
}, draw: function(el, data, options, _GraphKlass_) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 18, 462,619, (typeof arguments === 'object' ? arguments.callee.caller : null));

  _GraphKlass_ = _GraphKlass_ || Flotr.Graph;
  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",20,576,611) || new _GraphKlass_(el, data, options));
}, getSeries: function(data) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 23, 639,1043, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",24,673,1035) || data.collect(function(serie) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 24, 686,1034, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var i, serie = (serie.data) ? (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",25,748,767) || Object.clone(serie)) : {'data': serie};
  for (i = serie.data.length - 1; i > -1; --i) {
    serie.data[i][1] = (serie.data[i][1] === null ? null : (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",29,951,979) || parseFloat(serie.data[i][1])));
  }
  return serie;
}));
}, merge: function(src, dest) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 35, 1059,1408, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var result = dest || {};
  for (var i in src) {
    result[i] = (src[i] != null && typeof (src[i]) == 'object' && !(src[i].constructor == Array || src[i].constructor == RegExp) && !(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",38,1288,1312) || Object.isElement(src[i]))) ? (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",38,1316,1344) || Flotr.merge(src[i], dest[i])) : result[i] = src[i];
  }
  return result;
}, getTickSize: function(noTicks, min, max, decimals) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 43, 1430,1867, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var delta = (max - min) / noTicks;
  var magn = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",45,1535,1560) || Flotr.getMagnitude(delta));
  var norm = delta / magn;
  var tickSize = 10;
  if (norm < 1.5) 
    tickSize = 1;
  else if (norm < 2.25) 
    tickSize = 2;
  else if (norm < 3) 
    tickSize = ((decimals == 0) ? 2 : 2.5);
  else if (norm < 7.5) 
    tickSize = 5;
  return tickSize * magn;
}, defaultTickFormatter: function(val) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 59, 1898,1947, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return val + '';
}, defaultTrackFormatter: function(obj) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 63, 1979,2052, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return '(' + obj.x + ', ' + obj.y + ')';
}, defaultPieLabelFormatter: function(slice) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 66, 2085,2167, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",67,2121,2153) || (slice.fraction * 100).toFixed(2)) + '%';
}, getMagnitude: function(x) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 70, 2190,2278, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",71,2221,2270) || Math.pow(10, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",71,2234,2269) || Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",71,2245,2256) || Math.log(x)) / Math.LN10))));
}, toPixel: function(val) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 73, 2294,2356, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",74,2327,2342) || Math.floor(val)) + 0.5;
}, toRad: function(angle) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 76, 2370,2437, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return -angle * (Math.PI / 180);
}, parseColor: function(str) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 80, 2458,4276, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (str instanceof Flotr.Color) 
    return str;
  var result, Color = Flotr.Color;
  if ((result = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",86,2599,2674) || /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(str)))) 
    return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",87,2697,2769) || new Color((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",87,2707,2726) || parseInt(result[1])), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",87,2728,2747) || parseInt(result[2])), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",87,2749,2768) || parseInt(result[3]))));
  if ((result = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",90,2798,2902) || /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str)))) 
    return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",91,2925,3020) || new Color((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",91,2935,2954) || parseInt(result[1])), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",91,2956,2975) || parseInt(result[2])), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",91,2977,2996) || parseInt(result[3])), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",91,2998,3019) || parseFloat(result[4]))));
  if ((result = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",94,3049,3157) || /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(str)))) 
    return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",95,3180,3279) || new Color((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",95,3190,3211) || parseFloat(result[1])) * 2.55, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",95,3220,3241) || parseFloat(result[2])) * 2.55, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",95,3250,3271) || parseFloat(result[3])) * 2.55));
  if ((result = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",98,3308,3445) || /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str)))) 
    return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",99,3468,3590) || new Color((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",99,3478,3499) || parseFloat(result[1])) * 2.55, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",99,3508,3529) || parseFloat(result[2])) * 2.55, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",99,3538,3559) || parseFloat(result[3])) * 2.55, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",99,3568,3589) || parseFloat(result[4]))));
  if ((result = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",102,3619,3680) || /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(str)))) 
    return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",103,3703,3787) || new Color((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",103,3713,3736) || parseInt(result[1], 16)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",103,3738,3761) || parseInt(result[2], 16)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",103,3763,3786) || parseInt(result[3], 16))));
  if ((result = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",106,3816,3868) || /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(str)))) 
    return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",107,3891,4011) || new Color((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",107,3901,3936) || parseInt(result[1] + result[1], 16)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",107,3938,3973) || parseInt(result[2] + result[2], 16)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",107,3975,4010) || parseInt(result[3] + result[3], 16))));
  var name = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",110,4037,4062) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",110,4037,4048) || str.strip()).toLowerCase());
  if (name == 'transparent') {
    return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",112,4122,4149) || new Color(255, 255, 255, 0));
  }
  return ((result = Color.lookupColors[name])) ? (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",114,4218,4260) || new Color(result[0], result[1], result[2])) : false;
}, extractColor: function(element) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 117, 4299,4669, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var color;
  do {
    color = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",121,4377,4427) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",121,4377,4413) || element.getStyle('background-color')).toLowerCase());
    if (!(color == '' || color == 'transparent')) 
      break;
    element = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",123,4518,4531) || element.up(0));
  } while (!(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",124,4552,4585) || element.nodeName.match(/^body$/i)));
  return (color == 'rgba(0, 0, 0, 0)') ? 'transparent' : color;
}};
Flotr.Graph = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",131,4691,97537) || Class.create({initialize: function(el, data, options) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 133, 4725,5865, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.el = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",134,4775,4780) || $(el));
  if (!this.el) 
    throw 'The target container doesn\'t exist';
  this.data = data;
  this.series = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",139,4904,4925) || Flotr.getSeries(data));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",140,4936,4960) ||   this.setOptions(options));
  this.lastMousePos = {pageX: null, pageY: null};
  this.selection = {first: {x: -1, y: -1}, second: {x: -1, y: -1}};
  this.prevSelection = null;
  this.selectionInterval = null;
  this.ignoreClick = false;
  this.prevHit = null;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",163,5424,5446) ||   this.constructCanvas());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",166,5461,5478) ||   this.initEvents());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",168,5491,5512) ||   this.findDataRanges());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",169,5523,5555) ||   this.calculateTicks(this.axes.x));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",170,5566,5599) ||   this.calculateTicks(this.axes.x2));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",171,5610,5642) ||   this.calculateTicks(this.axes.y));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",172,5653,5686) ||   this.calculateTicks(this.axes.y2));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",174,5699,5722) ||   this.calculateSpacing());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",175,5733,5744) ||   this.draw());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",176,5755,5774) ||   this.insertLegend());
  if (this.options.spreadsheet.show) 
    (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",180,5837,5857) ||   this.constructTabs());
}, setOptions: function(opts) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 183, 5886,13363, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var options = {colors: ['#00A8F0', '#C0D800', '#CB4B4B', '#4DA74D', '#9440ED'], title: null, subtitle: null, legend: {show: true, noColumns: 1, labelFormatter: Prototype.K, labelBoxBorderColor: '#CCCCCC', labelBoxWidth: 14, labelBoxHeight: 10, labelBoxMargin: 5, container: null, position: 'nw', margin: 5, backgroundColor: null, backgroundOpacity: 0.85}, xaxis: {ticks: null, showLabels: true, labelsAngle: 0, title: null, titleAngle: 0, noTicks: 5, tickFormatter: Flotr.defaultTickFormatter, tickDecimals: null, min: null, max: null, autoscaleMargin: 0, color: null}, x2axis: {}, yaxis: {ticks: null, showLabels: true, labelsAngle: 0, title: null, titleAngle: 90, noTicks: 5, tickFormatter: Flotr.defaultTickFormatter, tickDecimals: null, min: null, max: null, autoscaleMargin: 0, color: null}, y2axis: {titleAngle: 270}, points: {show: false, radius: 3, lineWidth: 2, fill: true, fillColor: '#FFFFFF', fillOpacity: 0.4}, lines: {show: false, lineWidth: 2, fill: false, fillColor: null, fillOpacity: 0.4}, bars: {show: false, lineWidth: 2, barWidth: 1, fill: true, fillColor: null, fillOpacity: 0.4, horizontal: false, stacked: false}, candles: {show: false, lineWidth: 1, wickLineWidth: 1, candleWidth: 0.6, fill: true, upFillColor: '#00A8F0', downFillColor: '#CB4B4B', fillOpacity: 0.5, barcharts: false}, pie: {show: false, lineWidth: 1, fill: true, fillColor: null, fillOpacity: 0.6, explode: 6, sizeRatio: 0.6, startAngle: Math.PI / 4, labelFormatter: Flotr.defaultPieLabelFormatter, pie3D: false, pie3DviewAngle: (Math.PI / 2 * 0.8), pie3DspliceThickness: 20}, grid: {color: '#545454', backgroundColor: null, tickColor: '#DDDDDD', labelMargin: 3, verticalLines: true, horizontalLines: true, outlineWidth: 2}, selection: {mode: null, color: '#B6D9FF', fps: 20}, mouse: {track: false, position: 'se', relative: false, trackFormatter: Flotr.defaultTrackFormatter, margin: 5, lineColor: '#FF3F19', trackDecimals: 1, sensibility: 2, radius: 3}, shadowSize: 4, defaultType: 'lines', HtmlText: true, fontSize: 7.5, spreadsheet: {show: false, tabGraphLabel: 'Graph', tabDataLabel: 'Data', toolbarDownload: 'Download CSV', toolbarSelectAll: 'Select all'}};
  options.x2axis = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",322,10293,10351) || Object.extend((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",322,10307,10334) || Object.clone(options.xaxis)), options.x2axis));
  options.y2axis = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",323,10379,10437) || Object.extend((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",323,10393,10420) || Object.clone(options.yaxis)), options.y2axis));
  this.options = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",324,10463,10497) || Flotr.merge((opts || {}), options));
  this.axes = {x: {options: this.options.xaxis, n: 1}, x2: {options: this.options.x2axis, n: 2}, y: {options: this.options.yaxis, n: 1}, y2: {options: this.options.y2axis, n: 2}};
  var assignedColors = [], colors = [], ln = this.series.length, neededColors = this.series.length, oc = this.options.colors, usedColors = [], variation = 0, c, i, j, s, tooClose;
  for (i = neededColors - 1; i > -1; --i) {
    c = this.series[i].color;
    if (c != null) {
      --neededColors;
      if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",360,11407,11425) || Object.isNumber(c))) 
        (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",360,11427,11449) ||       assignedColors.push(c));
      else 
        (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",361,11473,11509) ||       usedColors.push((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",361,11489,11508) || Flotr.parseColor(c))));
    }
  }
  for (i = assignedColors.length - 1; i > -1; --i) 
    neededColors = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",367,11627,11672) || Math.max(neededColors, assignedColors[i] + 1));
  for (i = 0; colors.length < neededColors; ) {
    c = (oc.length == i) ? (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",371,11768,11798) || new Flotr.Color(100, 100, 100)) : (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",371,11801,11824) || Flotr.parseColor(oc[i]));
    var sign = variation % 2 == 1 ? -1 : 1;
    var factor = 1 + sign * (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",375,11920,11944) || Math.ceil(variation / 2)) * 0.2;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",376,11965,11996) ||     c.scale(factor, factor, factor));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",379,12015,12029) ||     colors.push(c));
    if (++i >= oc.length) {
      i = 0;
      ++variation;
    }
  }
  for (i = 0 , j = 0; i < ln; ++i) {
    s = this.series[i];
    if (s.color == null) {
      s.color = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",393,12297,12319) || colors[j++].toString());
    } else if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",394,12345,12369) || Object.isNumber(s.color))) {
      s.color = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",395,12400,12426) || colors[s.color].toString());
    }
    if (!s.xaxis) 
      s.xaxis = this.axes.x;
    if (s.xaxis == 1) 
      s.xaxis = this.axes.x;
    else if (s.xaxis == 2) 
      s.xaxis = this.axes.x2;
    if (!s.yaxis) 
      s.yaxis = this.axes.y;
    if (s.yaxis == 1) 
      s.yaxis = this.axes.y;
    else if (s.yaxis == 2) 
      s.yaxis = this.axes.y2;
    s.lines = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",407,12802,12858) || Object.extend((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",407,12816,12848) || Object.clone(this.options.lines)), s.lines));
    s.points = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",408,12884,12942) || Object.extend((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",408,12898,12931) || Object.clone(this.options.points)), s.points));
    s.bars = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",409,12966,13020) || Object.extend((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",409,12980,13011) || Object.clone(this.options.bars)), s.bars));
    s.candles = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",410,13047,13107) || Object.extend((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",410,13061,13095) || Object.clone(this.options.candles)), s.candles));
    s.pie = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",411,13130,13182) || Object.extend((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",411,13144,13174) || Object.clone(this.options.pie)), s.pie));
    s.mouse = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",412,13207,13263) || Object.extend((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",412,13221,13253) || Object.clone(this.options.mouse)), s.mouse));
    if (s.shadowSize == null) 
      s.shadowSize = this.options.shadowSize;
  }
}, constructCanvas: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 418, 13389,15249, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var el = this.el, size, c, oc;
  this.canvas = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",422,13481,13507) || el.select('.flotr-canvas'))[0];
  this.overlay = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",423,13536,13563) || el.select('.flotr-overlay'))[0];
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",425,13579,13614) ||   (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",425,13579,13597) || el.childElements()).invoke('remove'));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",428,13629,13720) ||   el.setStyle({position: 'relative', cursor: 'default'}));
  this.canvasWidth = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",433,13752,13765) || el.getWidth());
  this.canvasHeight = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",434,13796,13810) || el.getHeight());
  size = {'width': this.canvasWidth, 'height': this.canvasHeight};
  if (this.canvasWidth <= 0 || this.canvasHeight <= 0) {
    throw 'Invalid dimensions for plot, width = ' + this.canvasWidth + ', height = ' + this.canvasHeight;
  }
  if (!this.canvas) {
    c = this.canvas = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",446,14179,14206) || new Element('canvas', size));
    c.className = 'flotr-canvas';
    c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",448,14268,14332) || c.writeAttribute('style', 'position:absolute;left:0px;top:0px;'));
  } else {
    c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",450,14369,14401) || this.canvas.writeAttribute(size));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",452,14423,14435) ||   el.insert(c));
  if (Prototype.Browser.IE) {
    c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",455,14493,14533) || window.G_vmlCanvasManager.initElement(c));
  }
  this.ctx = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",457,14566,14584) || c.getContext('2d'));
  if (!this.overlay) {
    oc = this.overlay = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",461,14653,14680) || new Element('canvas', size));
    oc.className = 'flotr-overlay';
    oc = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",463,14745,14810) || oc.writeAttribute('style', 'position:absolute;left:0px;top:0px;'));
  } else {
    oc = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",465,14848,14881) || this.overlay.writeAttribute(size));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",467,14903,14916) ||   el.insert(oc));
  if (Prototype.Browser.IE) {
    oc = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",470,14975,15016) || window.G_vmlCanvasManager.initElement(oc));
  }
  this.octx = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",472,15050,15069) || oc.getContext('2d'));
  if (window.CanvasText) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",476,15122,15149) ||     CanvasText.enable(this.ctx));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",477,15164,15192) ||     CanvasText.enable(this.octx));
    this.textEnabled = true;
  }
}, getTextDimensions: function(text, canvasStyle, HtmlStyle, className) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 481, 15275,16005, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!text) 
    return {width: 0, height: 0};
  if (!this.options.HtmlText && this.textEnabled) {
    var bounds = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",488,15502,15543) || this.ctx.getTextBounds(text, canvasStyle));
    return {width: bounds.width + 2, height: bounds.height + 6};
  } else {
    var dummyDiv = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",494,15714,15881) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",494,15714,15854) || this.el.insert('<div style="position:absolute;top:-10000px;' + HtmlStyle + '" class="' + className + ' flotr-dummy-div">' + text + '</div>')).select(".flotr-dummy-div"))[0];
    dim = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",495,15905,15929) || dummyDiv.getDimensions());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",496,15944,15961) ||     dummyDiv.remove());
    return dim;
  }
}, loadDataGrid: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 500, 16026,16799, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (this.seriesData) 
    return this.seriesData;
  var s = this.series;
  var dg = [];
  for (i = 0; i < s.length; ++i) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",508,16207,16660) ||     s[i].data.each(function(v) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 508, 16222,16659, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var x = v[0], y = v[1];
  if (r = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",511,16324,16409) || dg.find(function(row) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 511, 16332,16408, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return row[0] == x;
}))) {
    r[i + 1] = y;
  } else {
    var newRow = [];
    newRow[0] = x;
    newRow[i + 1] = y;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",519,16609,16624) ||     dg.push(newRow));
  }
}));
  }
  dg = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",525,16691,16753) || dg.sortBy(function(v) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 525, 16701,16752, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return v[0];
}));
  return this.seriesData = dg;
}, showTab: function(tabName, onComplete) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 532, 16819,17576, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var elementsClassNames = 'canvas, .flotr-labels, .flotr-legend, .flotr-legend-bg, .flotr-title, .flotr-subtitle';
  switch (tabName) {
    case 'graph':
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",536,17039,17064) ||       (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",536,17039,17057) || this.datagrid.up()).hide());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",537,17079,17128) ||       (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",537,17079,17113) || this.el.select(elementsClassNames)).invoke('show'));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",538,17143,17185) ||       this.tabs.data.removeClassName('selected'));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",539,17200,17240) ||       this.tabs.graph.addClassName('selected'));
      break;
    case 'data':
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",542,17297,17321) ||       this.constructDataGrid());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",543,17336,17361) ||       (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",543,17336,17354) || this.datagrid.up()).show());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",544,17376,17425) ||       (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",544,17376,17410) || this.el.select(elementsClassNames)).invoke('hide'));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",545,17440,17479) ||       this.tabs.data.addClassName('selected'));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",546,17494,17537) ||       this.tabs.graph.removeClassName('selected'));
      break;
  }
}, constructTabs: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 550, 17598,18754, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var tabsContainer = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",551,17641,17832) || new Element('div', {className: 'flotr-tabs-group', style: 'position:absolute;left:0px;top:' + this.canvasHeight + 'px;width:' + this.canvasWidth + 'px;'}));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",555,17843,17906) ||   this.el.insert({bottom: tabsContainer}));
  this.tabs = {graph: (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",562,17951,18122) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",559,17951,18075) || new Element('div', {className: 'flotr-tab selected', style: 'float:left;'})).update(this.options.spreadsheet.tabGraphLabel)), data: (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",566,18143,18304) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",563,18143,18258) || new Element('div', {className: 'flotr-tab', style: 'float:left;'})).update(this.options.spreadsheet.tabDataLabel))};
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",569,18328,18388) ||   (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",569,18328,18365) || tabsContainer.insert(this.tabs.graph)).insert(this.tabs.data));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",571,18401,18510) ||   this.el.setStyle({height: this.canvasHeight + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",572,18461,18487) || this.tabs.data.getHeight()) + 2 + 'px'}));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",575,18523,18630) ||   this.tabs.graph.observe('click', (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",577,18557,18629) || (function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 575, 18557,18617, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",576,18584,18605) ||   this.showTab('graph'));
}).bind(this))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",578,18641,18746) ||   this.tabs.data.observe('click', (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",580,18674,18745) || (function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 578, 18674,18733, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",579,18701,18721) ||   this.showTab('data'));
}).bind(this))));
}, constructDataGrid: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 584, 18784,22225, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (this.datagrid) 
    return this.datagrid;
  var i, j, s = this.series, datagrid = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",590,18925,18944) || this.loadDataGrid());
  var t = this.datagrid = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",592,18981,19093) || new Element('table', {className: 'flotr-datagrid', style: 'height:100px;'}));
  var colgroup = ['<colgroup><col />'];
  var html = ['<tr class="first-row">'];
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",600,19203,19231) ||   html.push('<th>&nbsp;</th>'));
  for (i = 0; i < s.length; ++i) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",602,19288,19373) ||     html.push('<th scope="col">' + (s[i].label || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",602,19334,19361) || String.fromCharCode(65 + i))) + '</th>'));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",603,19388,19412) ||     colgroup.push('<col />'));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",605,19434,19452) ||   html.push('</tr>'));
  for (j = 0; j < datagrid.length; ++j) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",609,19520,19537) ||     html.push('<tr>'));
    for (i = 0; i < s.length + 1; ++i) {
      var tag = 'td';
      var content = (datagrid[j][i] != null ? (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",612,19679,19714) || Math.round(datagrid[j][i] * 100000)) / 100000 : '');
      if (i == 0) {
        tag = 'th';
        var label;
        if (this.options.xaxis.ticks) {
          var tick = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",618,19918,20050) || this.options.xaxis.ticks.find(function(x) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 618, 19948,20049, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return x[0] == datagrid[j][i];
}));
          if (tick) 
            label = tick[1];
        } else {
          label = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",623,20167,20208) || this.options.xaxis.tickFormatter(content));
        }
        if (label) 
          content = label;
      }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",629,20322,20415) ||       html.push('<' + tag + (tag == 'th' ? ' scope="row"' : '') + '>' + content + '</' + tag + '>'));
    }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",631,20445,20463) ||     html.push('</tr>'));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",633,20485,20513) ||   colgroup.push('</colgroup>'));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",634,20524,20567) ||   t.update((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",634,20533,20550) || colgroup.join('')) + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",634,20553,20566) || html.join(''))));
  if (!Prototype.Browser.IE) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",637,20622,21264) ||     (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",637,20622,20636) || t.select('td')).each(function(td) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 637, 20642,21263, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",638,20675,21010) ||   td.observe('mouseover', function(e) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 638, 20699,21009, (typeof arguments === 'object' ? arguments.callee.caller : null));

  td = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",639,20740,20751) || e.element());
  var siblings = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",640,20789,20810) || td.previousSiblings());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",642,20835,20903) ||   (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",642,20835,20860) || t.select('th[scope=col]'))[siblings.length - 1].addClassName('hover'));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",643,20926,20989) ||   (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",643,20926,20950) || t.select('colgroup col'))[siblings.length].addClassName('hover'));
}));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",646,21031,21247) ||   td.observe('mouseout', function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 646, 21054,21246, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",647,21089,21226) ||   (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",647,21089,21129) || t.select('colgroup col.hover, th.hover')).each(function(e) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 647, 21135,21225, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",648,21175,21201) ||   e.removeClassName('hover'));
}));
}));
}));
  }
  var toolbar = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",660,21302,21854) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",656,21302,21617) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",654,21302,21383) || new Element('div', {className: 'flotr-datagrid-toolbar'})).insert((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",660,21401,21616) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",660,21401,21570) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",657,21401,21521) || new Element('button', {type: 'button', className: 'flotr-datagrid-toolbar-button'})).update(this.options.spreadsheet.toolbarDownload)).observe('click', (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",660,21588,21615) || this.downloadCSV.bind(this)))))).insert((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",664,21635,21853) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",664,21635,21805) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",661,21635,21755) || new Element('button', {type: 'button', className: 'flotr-datagrid-toolbar-button'})).update(this.options.spreadsheet.toolbarSelectAll)).observe('click', (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",664,21823,21852) || this.selectAllData.bind(this))))));
  var container = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",666,21883,22089) || new Element('div', {className: 'flotr-datagrid-container', style: 'left:0px;top:0px;width:' + this.canvasWidth + 'px;height:' + this.canvasHeight + 'px;overflow:auto;'}));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",670,22100,22125) ||   container.insert(toolbar));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",671,22136,22160) ||   t.wrap((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",671,22143,22159) || container.hide())));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",673,22173,22198) ||   this.el.insert(container));
  return t;
}, selectAllData: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 676, 22247,23212, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (this.tabs) {
    var selection, range, doc, win, node = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",678,22339,22363) || this.constructDataGrid());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",680,22380,22400) ||     this.showTab('data'));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",697,22420,23148) ||     (function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 683, 22420,23139, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if ((doc = node.ownerDocument) && (win = doc.defaultView) && win.getSelection && doc.createRange && (selection = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",686,22606,22627) || window.getSelection())) && selection.removeAllRanges) {
    range = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",688,22711,22728) || doc.createRange());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",689,22751,22773) ||     range.selectNode(node));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",690,22796,22823) ||     selection.removeAllRanges());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",691,22846,22871) ||     selection.addRange(range));
  } else if (document.body && document.body.createTextRange && (range = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",693,22981,23012) || document.body.createTextRange()))) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",694,23038,23067) ||     range.moveToElementText(node));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",695,23090,23104) ||     range.select());
  }
}).defer());
    return true;
  } else 
    return false;
}, downloadCSV: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 701, 23232,24215, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var i, csv = '"x"', series = this.series, dg = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",704,23328,23347) || this.loadDataGrid());
  for (i = 0; i < series.length; ++i) {
    csv += '%09"' + (series[i].label || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",707,23447,23474) || String.fromCharCode(65 + i))) + '"';
  }
  csv += "%0D%0A";
  for (i = 0; i < dg.length; ++i) {
    if (this.options.xaxis.ticks) {
      var tick = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",713,23638,23748) || this.options.xaxis.ticks.find(function(x) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 713, 23668,23747, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return x[0] == dg[i][0];
}));
      if (tick) 
        dg[i][0] = tick[1];
    } else {
      dg[i][0] = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",718,23847,23889) || this.options.xaxis.tickFormatter(dg[i][0]));
    }
    csv += (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",720,23926,23943) || dg[i].join('%09')) + "%0D%0A";
  }
  if (Prototype.Browser.IE) {
    csv = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",723,24023,24080) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",723,24023,24062) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",723,24023,24044) || csv.gsub('%09', '\t')).gsub('%0A', '\n')).gsub('%0D', '\r'));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",724,24095,24128) ||     (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",724,24095,24108) || window.open()).document.write(csv));
  } else {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",726,24161,24196) ||     window.open('data:text/csv,' + csv));
  }
}, initEvents: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 730, 24236,24587, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",733,24325,24353) ||   this.overlay.stopObserving());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",734,24364,24431) ||   this.overlay.observe('mousedown', (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",734,24398,24430) || this.mouseDownHandler.bind(this))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",735,24442,24509) ||   this.overlay.observe('mousemove', (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",735,24476,24508) || this.mouseMoveHandler.bind(this))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",736,24520,24579) ||   this.overlay.observe('click', (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",736,24550,24578) || this.clickHandler.bind(this))));
}, findDataRanges: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 739, 24612,26504, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var s = this.series, a = this.axes;
  a.x.datamin = 0;
  a.x.datamax = 0;
  a.x2.datamin = 0;
  a.x2.datamax = 0;
  a.y.datamin = 0;
  a.y.datamax = 0;
  a.y2.datamin = 0;
  a.y2.datamax = 0;
  if (s.length > 0) {
    var i, j, h, x, y, data, xaxis, yaxis;
    for (i = 0; i < s.length; ++i) {
      data = s[i].data;
      xaxis = s[i].xaxis;
      yaxis = s[i].yaxis;
      if (data.length > 0 && !s[i].hide) {
        if (!xaxis.used) 
          xaxis.datamin = xaxis.datamax = data[0][0];
        if (!yaxis.used) 
          yaxis.datamin = yaxis.datamax = data[0][1];
        xaxis.used = true;
        yaxis.used = true;
        for (h = data.length - 1; h > -1; --h) {
          x = data[h][0];
          if (x < xaxis.datamin) 
            xaxis.datamin = x;
          else if (x > xaxis.datamax) 
            xaxis.datamax = x;
          for (j = 1; j < data[h].length; j++) {
            y = data[h][j];
            if (y < yaxis.datamin) 
              yaxis.datamin = y;
            else if (y > yaxis.datamax) 
              yaxis.datamax = y;
          }
        }
      }
    }
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",782,26048,26070) ||   this.findXAxesValues());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",784,26083,26107) ||   this.calculateRange(a.x));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",785,26118,26153) ||   this.extendXRangeIfNeededByBar(a.x));
  if (a.x2.used) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",788,26196,26221) ||     this.calculateRange(a.x2));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",789,26236,26272) ||     this.extendXRangeIfNeededByBar(a.x2));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",792,26296,26320) ||   this.calculateRange(a.y));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",793,26331,26366) ||   this.extendYRangeIfNeededByBar(a.y));
  if (a.y2.used) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",796,26409,26434) ||     this.calculateRange(a.y2));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",797,26449,26485) ||     this.extendYRangeIfNeededByBar(a.y2));
  }
}, calculateRange: function(axis) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 801, 26529,27629, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var o = axis.options, min = o.min != null ? o.min : axis.datamin, max = o.max != null ? o.max : axis.datamax, margin;
  if (max - min == 0.0) {
    var widen = (max == 0.0) ? 1.0 : 0.01;
    min -= widen;
    max += widen;
  }
  axis.tickSize = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",812,26890,26944) || Flotr.getTickSize(o.noTicks, min, max, o.tickDecimals));
  if (o.min == null) {
    margin = o.autoscaleMargin;
    if (margin != 0) {
      min -= axis.tickSize * margin;
      if (min < 0 && axis.datamin >= 0) 
        min = 0;
      min = axis.tickSize * (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",823,27206,27237) || Math.floor(min / axis.tickSize));
    }
  }
  if (o.max == null) {
    margin = o.autoscaleMargin;
    if (margin != 0) {
      max += axis.tickSize * margin;
      if (max > 0 && axis.datamax <= 0) 
        max = 0;
      max = axis.tickSize * (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",831,27515,27545) || Math.ceil(max / axis.tickSize));
    }
  }
  axis.min = min;
  axis.max = max;
}, extendXRangeIfNeededByBar: function(axis) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 838, 27665,29034, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (axis.options.max == null) {
    var newmax = axis.max, i, s, b, c, stackedSums = [], lastSerie = null;
    for (i = 0; i < this.series.length; ++i) {
      s = this.series[i];
      b = s.bars;
      c = s.candles;
      if (s.axis == axis && (b.show || c.show)) {
        if (!b.horizontal && (b.barWidth + axis.datamax > newmax) || (c.candleWidth + axis.datamax > newmax)) {
          newmax = axis.max + s.bars.barWidth;
        }
        if (b.stacked && b.horizontal) {
          for (j = 0; j < s.data.length; j++) {
            if (s.bars.show && s.bars.stacked) {
              var x = s.data[j][0];
              stackedSums[x] = (stackedSums[x] || 0) + s.data[j][1];
              lastSerie = s;
            }
          }
          for (j = 0; j < stackedSums.length; j++) {
            newmax = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",863,28826,28858) || Math.max(stackedSums[j], newmax));
          }
        }
      }
    }
    axis.lastSerie = lastSerie;
    axis.max = newmax;
  }
}, extendYRangeIfNeededByBar: function(axis) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 873, 29070,30434, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (axis.options.max == null) {
    var newmax = axis.max, i, s, b, c, stackedSums = [], lastSerie = null;
    for (i = 0; i < this.series.length; ++i) {
      s = this.series[i];
      b = s.bars;
      c = s.candles;
      if (s.yaxis == axis && b.show && !s.hide) {
        if (b.horizontal && (b.barWidth + axis.datamax > newmax) || (c.candleWidth + axis.datamax > newmax)) {
          newmax = axis.max + b.barWidth;
        }
        if (b.stacked && !b.horizontal) {
          for (j = 0; j < s.data.length; j++) {
            if (s.bars.show && s.bars.stacked) {
              var x = s.data[j][0];
              stackedSums[x] = (stackedSums[x] || 0) + s.data[j][1];
              lastSerie = s;
            }
          }
          for (j = 0; j < stackedSums.length; j++) {
            newmax = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",898,30226,30258) || Math.max(stackedSums[j], newmax));
          }
        }
      }
    }
    axis.lastSerie = lastSerie;
    axis.max = newmax;
  }
}, findXAxesValues: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 908, 30460,30756, (typeof arguments === 'object' ? arguments.callee.caller : null));

  for (i = this.series.length - 1; i > -1; --i) {
    s = this.series[i];
    s.xaxis.values = s.xaxis.values || [];
    for (j = s.data.length - 1; j > -1; --j) {
      s.xaxis.values[s.data[j][0]] = {};
    }
  }
}, calculateTicks: function(axis) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 918, 30781,32292, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var o = axis.options, i, v;
  axis.ticks = [];
  if (o.ticks) {
    var ticks = o.ticks, t, label;
    if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",927,30981,31005) || Object.isFunction(ticks))) {
      ticks = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",928,31034,31132) || ticks({min: axis.min, max: axis.max}));
    }
    for (i = 0; i < ticks.length; ++i) {
      t = ticks[i];
      if (typeof (t) == 'object') {
        v = t[0];
        label = (t.length > 1) ? t[1] : (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",939,31365,31383) || o.tickFormatter(v));
      } else {
        v = t;
        label = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",942,31468,31486) || o.tickFormatter(v));
      }
      axis.ticks[i] = {v: v, label: label};
    }
  } else {
    var start = axis.tickSize * (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",951,31699,31734) || Math.ceil(axis.min / axis.tickSize)), decimals;
    for (i = 0; start + i * axis.tickSize <= axis.max; ++i) {
      v = start + i * axis.tickSize;
      decimals = o.tickDecimals;
      if (decimals == null) 
        decimals = 1 - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",960,31988,32035) || Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",960,31999,32022) || Math.log(axis.tickSize)) / Math.LN10));
      if (decimals < 0) 
        decimals = 0;
      v = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",963,32109,32128) || v.toFixed(decimals));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",964,32147,32258) ||       axis.ticks.push({v: v, label: (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",966,32220,32238) || o.tickFormatter(v))}));
    }
  }
}, calculateSpacing: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 972, 32319,35520, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var a = this.axes, options = this.options, series = this.series, margin = options.grid.labelMargin, x = a.x, x2 = a.x2, y = a.y, y2 = a.y2, maxOutset = 2, i, j, l, dim;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",985,32641,33515) ||   [x, x2, y, y2].each(function(axis) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 985, 32661,33508, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var maxLabel = '';
  if (axis.options.showLabels) {
    for (i = 0; i < axis.ticks.length; ++i) {
      l = axis.ticks[i].label.length;
      if (l > maxLabel.length) {
        maxLabel = axis.ticks[i].label;
      }
    }
  }
  axis.maxLabel = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",996,33060,33255) || this.getTextDimensions(maxLabel, {size: options.fontSize, angle: (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",998,33160,33197) || Flotr.toRad(axis.options.labelsAngle))}, 'font-size:smaller;', 'flotr-grid-label'));
  axis.titleSize = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1000,33287,33496) || this.getTextDimensions(axis.options.title, {size: options.fontSize * 1.2, angle: (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1002,33403,33439) || Flotr.toRad(axis.options.titleAngle))}, 'font-weight:bold;', 'flotr-axis-title'));
}, this));
  dim = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1007,33536,33679) || this.getTextDimensions(options.title, {size: options.fontSize * 1.5}, 'font-size:1em;font-weight:bold;', 'flotr-title'));
  this.titleHeight = dim.height;
  dim = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1013,33740,33870) || this.getTextDimensions(options.subtitle, {size: options.fontSize}, 'font-size:smaller;', 'flotr-subtitle'));
  this.subtitleHeight = dim.height;
  if (options.show) {
    maxOutset = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1020,33973,34046) || Math.max(maxOutset, options.points.radius + options.points.lineWidth / 2));
  }
  for (j = 0; j < options.length; ++j) {
    if (series[j].points.show) {
      maxOutset = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1024,34178,34255) || Math.max(maxOutset, series[j].points.radius + series[j].points.lineWidth / 2));
    }
  }
  var p = this.plotOffset = {left: 0, right: 0, top: 0, bottom: 0};
  p.left = p.right = p.top = p.bottom = maxOutset;
  p.bottom += (x.options.showLabels ? (x.maxLabel.height + margin) : 0) + (x.options.title ? (x.titleSize.height + margin) : 0);
  p.top += (x2.options.showLabels ? (x2.maxLabel.height + margin) : 0) + (x2.options.title ? (x2.titleSize.height + margin) : 0) + this.subtitleHeight + this.titleHeight;
  p.left += (y.options.showLabels ? (y.maxLabel.width + margin) : 0) + (y.options.title ? (y.titleSize.width + margin) : 0);
  p.right += (y2.options.showLabels ? (y2.maxLabel.width + margin) : 0) + (y2.options.title ? (y2.titleSize.width + margin) : 0);
  p.top = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1048,35143,35160) || Math.floor(p.top));
  this.plotWidth = this.canvasWidth - p.left - p.right;
  this.plotHeight = this.canvasHeight - p.bottom - p.top;
  x.scale = this.plotWidth / (x.max - x.min);
  x2.scale = this.plotWidth / (x2.max - x2.min);
  y.scale = this.plotHeight / (y.max - y.min);
  y2.scale = this.plotHeight / (y2.max - y2.min);
}, draw: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1059, 35535,35988, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1060,35558,35573) ||   this.drawGrid());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1061,35584,35601) ||   this.drawLabels());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1062,35612,35629) ||   this.drawTitles());
  if (this.series.length) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1065,35681,35734) ||     this.el.fire('flotr:beforedraw', [this.series, this]));
    for (var i = 0; i < this.series.length; i++) {
      if (!this.series[i].hide) 
        (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1068,35860,35891) ||       this.drawSeries(this.series[i]));
    }
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1071,35928,35980) ||   this.el.fire('flotr:afterdraw', [this.series, this]));
}, tHoz: function(x, axis) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1074, 36003,36112, (typeof arguments === 'object' ? arguments.callee.caller : null));

  axis = axis || this.axes.x;
  return (x - axis.min) * axis.scale;
}, tVert: function(y, axis) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1079, 36128,36255, (typeof arguments === 'object' ? arguments.callee.caller : null));

  axis = axis || this.axes.y;
  return this.plotHeight - (y - axis.min) * axis.scale;
}, drawGrid: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1084, 36274,38306, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var v, o = this.options, ctx = this.ctx;
  if (o.grid.verticalLines || o.grid.horizontalLines) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1088,36427,36496) ||     this.el.fire('flotr:beforegrid', [this.axes.x, this.axes.y, o, this]));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1090,36518,36528) ||   ctx.save());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1091,36539,36595) ||   ctx.translate(this.plotOffset.left, this.plotOffset.top));
  if (o.grid.backgroundColor != null) {
    ctx.fillStyle = o.grid.backgroundColor;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1096,36714,36765) ||     ctx.fillRect(0, 0, this.plotWidth, this.plotHeight));
  }
  ctx.lineWidth = 1;
  ctx.strokeStyle = o.grid.tickColor;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1102,36864,36879) ||   ctx.beginPath());
  if (o.grid.verticalLines) {
    for (var i = 0; i < this.axes.x.ticks.length; ++i) {
      v = this.axes.x.ticks[i].v;
      if ((v == this.axes.x.min || v == this.axes.x.max) && o.grid.outlineWidth != 0) 
        continue;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1110,37178,37237) ||       ctx.moveTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1110,37189,37213) || Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1110,37200,37212) || this.tHoz(v)))) + ctx.lineWidth / 2, 0));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1111,37256,37329) ||       ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1111,37267,37291) || Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1111,37278,37290) || this.tHoz(v)))) + ctx.lineWidth / 2, this.plotHeight));
    }
  }
  if (o.grid.horizontalLines) {
    for (var j = 0; j < this.axes.y.ticks.length; ++j) {
      v = this.axes.y.ticks[j].v;
      if ((v == this.axes.y.min || v == this.axes.y.max) && o.grid.outlineWidth != 0) 
        continue;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1123,37660,37720) ||       ctx.moveTo(0, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1123,37674,37699) || Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1123,37685,37698) || this.tVert(v)))) + ctx.lineWidth / 2));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1124,37739,37812) ||       ctx.lineTo(this.plotWidth, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1124,37766,37791) || Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1124,37777,37790) || this.tVert(v)))) + ctx.lineWidth / 2));
    }
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1127,37849,37861) ||   ctx.stroke());
  if (o.grid.outlineWidth != 0) {
    ctx.lineWidth = o.grid.outlineWidth;
    ctx.strokeStyle = o.grid.color;
    ctx.lineJoin = 'round';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1134,38053,38106) ||     ctx.strokeRect(0, 0, this.plotWidth, this.plotHeight));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1136,38128,38141) ||   ctx.restore());
  if (o.grid.verticalLines || o.grid.horizontalLines) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1138,38219,38287) ||     this.el.fire('flotr:aftergrid', [this.axes.x, this.axes.y, o, this]));
  }
}, drawLabels: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1142, 38327,45719, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var noLabels = 0, axis, xBoxWidth, i, html, tick, options = this.options, ctx = this.ctx, a = this.axes;
  for (i = 0; i < a.x.ticks.length; ++i) {
    if (a.x.ticks[i].label) {
      ++noLabels;
    }
  }
  xBoxWidth = this.plotWidth / noLabels;
  if (!options.HtmlText && this.textEnabled) {
    var style = {size: options.fontSize, adjustAlign: true};
    axis = a.x;
    style.color = axis.options.color || options.grid.color;
    for (i = 0; i < axis.ticks.length && axis.options.showLabels && axis.used; ++i) {
      tick = axis.ticks[i];
      if (!tick.label || tick.label.length == 0) 
        continue;
      style.angle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1171,39226,39263) || Flotr.toRad(axis.options.labelsAngle));
      style.halign = 'c';
      style.valign = 't';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1175,39358,39606) ||       ctx.drawText(tick.label, this.plotOffset.left + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1177,39449,39472) || this.tHoz(tick.v, axis)), this.plotOffset.top + this.plotHeight + options.grid.labelMargin, style));
    }
    axis = a.x2;
    style.color = axis.options.color || options.grid.color;
    for (i = 0; i < axis.ticks.length && axis.options.showLabels && axis.used; ++i) {
      tick = axis.ticks[i];
      if (!tick.label || tick.label.length == 0) 
        continue;
      style.angle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1190,39959,39996) || Flotr.toRad(axis.options.labelsAngle));
      style.halign = 'c';
      style.valign = 'b';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1194,40091,40321) ||       ctx.drawText(tick.label, this.plotOffset.left + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1196,40182,40205) || this.tHoz(tick.v, axis)), this.plotOffset.top + options.grid.labelMargin, style));
    }
    axis = a.y;
    style.color = axis.options.color || options.grid.color;
    for (i = 0; i < axis.ticks.length && axis.options.showLabels && axis.used; ++i) {
      tick = axis.ticks[i];
      if (!tick.label || tick.label.length == 0) 
        continue;
      style.angle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1209,40673,40710) || Flotr.toRad(axis.options.labelsAngle));
      style.halign = 'r';
      style.valign = 'm';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1213,40805,41036) ||       ctx.drawText(tick.label, this.plotOffset.left - options.grid.labelMargin, this.plotOffset.top + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1216,40965,40989) || this.tVert(tick.v, axis)), style));
    }
    axis = a.y2;
    style.color = axis.options.color || options.grid.color;
    for (i = 0; i < axis.ticks.length && axis.options.showLabels && axis.used; ++i) {
      tick = axis.ticks[i];
      if (!tick.label || tick.label.length == 0) 
        continue;
      style.angle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1228,41389,41426) || Flotr.toRad(axis.options.labelsAngle));
      style.halign = 'l';
      style.valign = 'm';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1232,41521,41769) ||       ctx.drawText(tick.label, this.plotOffset.left + this.plotWidth + options.grid.labelMargin, this.plotOffset.top + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1235,41698,41722) || this.tVert(tick.v, axis)), style));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1239,41790,41800) ||       ctx.save());
      ctx.strokeStyle = style.color;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1241,41867,41882) ||       ctx.beginPath());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1242,41901,42002) ||       ctx.moveTo(this.plotOffset.left + this.plotWidth - 8, this.plotOffset.top + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1242,41977,42001) || this.tVert(tick.v, axis))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1243,42021,42118) ||       ctx.lineTo(this.plotOffset.left + this.plotWidth, this.plotOffset.top + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1243,42093,42117) || this.tVert(tick.v, axis))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1244,42137,42149) ||       ctx.stroke());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1245,42168,42181) ||       ctx.restore());
    }
  } else if (a.x.options.showLabels || a.x2.options.showLabels || a.y.options.showLabels || a.y2.options.showLabels) {
    html = ['<div style="font-size:smaller;color:' + options.grid.color + ';" class="flotr-labels">'];
    axis = a.x;
    if (axis.options.showLabels) {
      for (i = 0; i < axis.ticks.length; ++i) {
        tick = axis.ticks[i];
        if (!tick.label || tick.label.length == 0) 
          continue;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1259,42745,43117) ||         html.push('<div style="position:absolute;top:' + (this.plotOffset.top + this.plotHeight + options.grid.labelMargin) + 'px;left:' + (this.plotOffset.left + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1259,42900,42923) || this.tHoz(tick.v, axis)) - xBoxWidth / 2) + 'px;width:' + xBoxWidth + 'px;text-align:center;' + (axis.options.color ? ('color:' + axis.options.color + ';') : '') + '" class="flotr-grid-label">' + tick.label + '</div>'));
      }
    }
    axis = a.x2;
    if (axis.options.showLabels && axis.used) {
      for (i = 0; i < axis.ticks.length; ++i) {
        tick = axis.ticks[i];
        if (!tick.label || tick.label.length == 0) 
          continue;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1269,43437,43814) ||         html.push('<div style="position:absolute;top:' + (this.plotOffset.top - options.grid.labelMargin - axis.maxLabel.height) + 'px;left:' + (this.plotOffset.left + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1269,43597,43620) || this.tHoz(tick.v, axis)) - xBoxWidth / 2) + 'px;width:' + xBoxWidth + 'px;text-align:center;' + (axis.options.color ? ('color:' + axis.options.color + ';') : '') + '" class="flotr-grid-label">' + tick.label + '</div>'));
      }
    }
    axis = a.y;
    if (axis.options.showLabels) {
      for (i = 0; i < axis.ticks.length; ++i) {
        tick = axis.ticks[i];
        if (!tick.label || tick.label.length == 0) 
          continue;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1279,44120,44467) ||         html.push('<div style="position:absolute;top:' + (this.plotOffset.top + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1279,44192,44216) || this.tVert(tick.v, axis)) - axis.maxLabel.height / 2) + 'px;left:0;width:' + (this.plotOffset.left - options.grid.labelMargin) + 'px;text-align:right;' + (axis.options.color ? ('color:' + axis.options.color + ';') : '') + '" class="flotr-grid-label">' + tick.label + '</div>'));
      }
    }
    axis = a.y2;
    if (axis.options.showLabels && axis.used) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1286,44607,44617) ||       ctx.save());
      ctx.strokeStyle = axis.options.color || options.grid.color;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1288,44713,44728) ||       ctx.beginPath());
      for (i = 0; i < axis.ticks.length; ++i) {
        tick = axis.ticks[i];
        if (!tick.label || tick.label.length == 0) 
          continue;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1293,44929,45277) ||         html.push('<div style="position:absolute;top:' + (this.plotOffset.top + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1293,45001,45025) || this.tVert(tick.v, axis)) - axis.maxLabel.height / 2) + 'px;right:0;width:' + (this.plotOffset.right - options.grid.labelMargin) + 'px;text-align:left;' + (axis.options.color ? ('color:' + axis.options.color + ';') : '') + '" class="flotr-grid-label">' + tick.label + '</div>'));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1295,45302,45403) ||         ctx.moveTo(this.plotOffset.left + this.plotWidth - 8, this.plotOffset.top + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1295,45378,45402) || this.tVert(tick.v, axis))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1296,45426,45523) ||         ctx.lineTo(this.plotOffset.left + this.plotWidth, this.plotOffset.top + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1296,45498,45522) || this.tVert(tick.v, axis))));
      }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1298,45561,45573) ||       ctx.stroke());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1299,45592,45605) ||       ctx.restore());
    }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1302,45637,45656) ||     html.push('</div>'));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1303,45671,45700) ||     this.el.insert((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1303,45686,45699) || html.join(''))));
  }
}, drawTitles: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1307, 45740,50985, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var html, options = this.options, margin = options.grid.labelMargin, ctx = this.ctx, a = this.axes;
  if (!options.HtmlText && this.textEnabled) {
    var style = {size: options.fontSize, color: options.grid.color, halign: 'c'};
    if (options.subtitle) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1323,46186,46413) ||       ctx.drawText(options.subtitle, this.plotOffset.left + this.plotWidth / 2, this.titleHeight + this.subtitleHeight - 2, style));
    }
    style.weight = 1.5;
    style.size *= 1.5;
    if (options.title) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1336,46552,46754) ||       ctx.drawText(options.title, this.plotOffset.left + this.plotWidth / 2, this.titleHeight - 2, style));
    }
    style.weight = 1.8;
    style.size *= 0.8;
    style.adjustAlign = true;
    if (a.x.options.title && a.x.used) {
      style.halign = 'c';
      style.valign = 't';
      style.angle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1352,47036,47071) || Flotr.toRad(a.x.options.titleAngle));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1353,47090,47348) ||       ctx.drawText(a.x.options.title, this.plotOffset.left + this.plotWidth / 2, this.plotOffset.top + a.x.maxLabel.height + this.plotHeight + 2 * margin, style));
    }
    if (a.x2.options.title && a.x2.used) {
      style.halign = 'c';
      style.valign = 'b';
      style.angle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1365,47526,47562) || Flotr.toRad(a.x2.options.titleAngle));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1366,47581,47823) ||       ctx.drawText(a.x2.options.title, this.plotOffset.left + this.plotWidth / 2, this.plotOffset.top - a.x2.maxLabel.height - 2 * margin, style));
    }
    if (a.y.options.title && a.y.used) {
      style.halign = 'r';
      style.valign = 'm';
      style.angle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1378,47999,48034) || Flotr.toRad(a.y.options.titleAngle));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1379,48053,48293) ||       ctx.drawText(a.y.options.title, this.plotOffset.left - a.y.maxLabel.width - 2 * margin, this.plotOffset.top + this.plotHeight / 2, style));
    }
    if (a.y2.options.title && a.y2.used) {
      style.halign = 'l';
      style.valign = 'm';
      style.angle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1391,48471,48507) || Flotr.toRad(a.y2.options.titleAngle));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1392,48526,48785) ||       ctx.drawText(a.y2.options.title, this.plotOffset.left + this.plotWidth + a.y2.maxLabel.width + 2 * margin, this.plotOffset.top + this.plotHeight / 2, style));
    }
  } else {
    html = ['<div style="color:' + options.grid.color + ';" class="flotr-titles">'];
    if (options.title) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1404,48969,49183) ||       html.push('<div style="position:absolute;top:0;left:' + this.plotOffset.left + 'px;font-size:1em;font-weight:bold;text-align:center;width:' + this.plotWidth + 'px;" class="flotr-title">' + options.title + '</div>'));
    }
    if (options.subtitle) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1409,49258,49490) ||       html.push('<div style="position:absolute;top:' + this.titleHeight + 'px;left:' + this.plotOffset.left + 'px;font-size:smaller;text-align:center;width:' + this.plotWidth + 'px;" class="flotr-subtitle">' + options.subtitle + '</div>'));
    }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1411,49520,49539) ||     html.push('</div>'));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1414,49558,49627) ||     html.push('<div class="flotr-axis-title" style="font-weight:bold;">'));
    if (a.x.options.title && a.x.used) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1417,49698,49988) ||       html.push('<div style="position:absolute;top:' + (this.plotOffset.top + this.plotHeight + options.grid.labelMargin + a.x.titleSize.height) + 'px;left:' + this.plotOffset.left + 'px;width:' + this.plotWidth + 'px;text-align:center;" class="flotr-axis-title">' + a.x.options.title + '</div>'));
    }
    if (a.x2.options.title && a.x2.used) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1422,50078,50271) ||       html.push('<div style="position:absolute;top:0;left:' + this.plotOffset.left + 'px;width:' + this.plotWidth + 'px;text-align:center;" class="flotr-axis-title">' + a.x2.options.title + '</div>'));
    }
    if (a.y.options.title && a.y.used) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1427,50359,50569) ||       html.push('<div style="position:absolute;top:' + (this.plotOffset.top + this.plotHeight / 2 - a.y.titleSize.height / 2) + 'px;left:0;text-align:right;" class="flotr-axis-title">' + a.y.options.title + '</div>'));
    }
    if (a.y2.options.title && a.y2.used) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1432,50659,50871) ||       html.push('<div style="position:absolute;top:' + (this.plotOffset.top + this.plotHeight / 2 - a.y.titleSize.height / 2) + 'px;right:0;text-align:right;" class="flotr-axis-title">' + a.y2.options.title + '</div>'));
    }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1434,50901,50920) ||     html.push('</div>'));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1436,50937,50966) ||     this.el.insert((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1436,50952,50965) || html.join(''))));
  }
}, drawSeries: function(series) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1440, 51006,51440, (typeof arguments === 'object' ? arguments.callee.caller : null));

  series = series || this.series;
  var drawn = false;
  for (var type in Flotr._registeredTypes) {
    if (series[type] && series[type].show) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1446,51220,51262) ||       this[Flotr._registeredTypes[type]](series));
      drawn = true;
    }
  }
  if (!drawn) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1452,51359,51421) ||     this[Flotr._registeredTypes[this.options.defaultType]](series));
  }
}, plotLine: function(series, offset) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1456, 51459,54043, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var ctx = this.ctx, xa = series.xaxis, ya = series.yaxis, tHoz = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1460,51600,51620) || this.tHoz.bind(this)), tVert = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1461,51643,51664) || this.tVert.bind(this)), data = series.data;
  if (data.length < 2) 
    return;
  var prevx = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1466,51762,51782) || tHoz(data[0][0], xa)), prevy = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1467,51805,51826) || tVert(data[0][1], ya)) + offset;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1469,51848,51863) ||   ctx.beginPath());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1470,51874,51898) ||   ctx.moveTo(prevx, prevy));
  for (var i = 0; i < data.length - 1; ++i) {
    var x1 = data[i][0], y1 = data[i][1], x2 = data[i + 1][0], y2 = data[i + 1][1];
    if (y1 === null || y2 === null) 
      continue;
    if (y1 <= y2 && y1 < ya.min) {
      if (y2 < ya.min) 
        continue;
      x1 = (ya.min - y1) / (y2 - y1) * (x2 - x1) + x1;
      y1 = ya.min;
    } else if (y2 <= y1 && y2 < ya.min) {
      if (y1 < ya.min) 
        continue;
      x2 = (ya.min - y1) / (y2 - y1) * (x2 - x1) + x1;
      y2 = ya.min;
    }
    if (y1 >= y2 && y1 > ya.max) {
      if (y2 > ya.max) 
        continue;
      x1 = (ya.max - y1) / (y2 - y1) * (x2 - x1) + x1;
      y1 = ya.max;
    } else if (y2 >= y1 && y2 > ya.max) {
      if (y1 > ya.max) 
        continue;
      x2 = (ya.max - y1) / (y2 - y1) * (x2 - x1) + x1;
      y2 = ya.max;
    }
    if (x1 <= x2 && x1 < xa.min) {
      if (x2 < xa.min) 
        continue;
      y1 = (xa.min - x1) / (x2 - x1) * (y2 - y1) + y1;
      x1 = xa.min;
    } else if (x2 <= x1 && x2 < xa.min) {
      if (x1 < xa.min) 
        continue;
      y2 = (xa.min - x1) / (x2 - x1) * (y2 - y1) + y1;
      x2 = xa.min;
    }
    if (x1 >= x2 && x1 > xa.max) {
      if (x2 > xa.max) 
        continue;
      y1 = (xa.max - x1) / (x2 - x1) * (y2 - y1) + y1;
      x1 = xa.max;
    } else if (x2 >= x1 && x2 > xa.max) {
      if (x1 > xa.max) 
        continue;
      y2 = (xa.max - x1) / (x2 - x1) * (y2 - y1) + y1;
      x2 = xa.max;
    }
    if (prevx != (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1527,53766,53778) || tHoz(x1, xa)) || prevy != (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1527,53791,53804) || tVert(y1, ya)) + offset) 
      (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1528,53832,53880) ||     ctx.moveTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1528,53843,53855) || tHoz(x1, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1528,53857,53870) || tVert(y1, ya)) + offset));
    prevx = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1530,53905,53917) || tHoz(x2, xa));
    prevy = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1531,53940,53953) || tVert(y2, ya)) + offset;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1532,53977,54001) ||     ctx.lineTo(prevx, prevy));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1534,54023,54035) ||   ctx.stroke());
}, plotLineArea: function(series, offset) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1537, 54066,57626, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var data = series.data;
  if (data.length < 2) 
    return;
  var top, lastX = 0, ctx = this.ctx, xa = series.xaxis, ya = series.yaxis, tHoz = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1545,54309,54329) || this.tHoz.bind(this)), tVert = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1546,54352,54373) || this.tVert.bind(this)), bottom = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1547,54397,54434) || Math.min((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1547,54406,54425) || Math.max(0, ya.min)), ya.max)), first = true;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1550,54474,54489) ||   ctx.beginPath());
  for (var i = 0; i < data.length - 1; ++i) {
    var x1 = data[i][0], y1 = data[i][1], x2 = data[i + 1][0], y2 = data[i + 1][1];
    if (x1 <= x2 && x1 < xa.min) {
      if (x2 < xa.min) 
        continue;
      y1 = (xa.min - x1) / (x2 - x1) * (y2 - y1) + y1;
      x1 = xa.min;
    } else if (x2 <= x1 && x2 < xa.min) {
      if (x1 < xa.min) 
        continue;
      y2 = (xa.min - x1) / (x2 - x1) * (y2 - y1) + y1;
      x2 = xa.min;
    }
    if (x1 >= x2 && x1 > xa.max) {
      if (x2 > xa.max) 
        continue;
      y1 = (xa.max - x1) / (x2 - x1) * (y2 - y1) + y1;
      x1 = xa.max;
    } else if (x2 >= x1 && x2 > xa.max) {
      if (x1 > xa.max) 
        continue;
      y2 = (xa.max - x1) / (x2 - x1) * (y2 - y1) + y1;
      x2 = xa.max;
    }
    if (first) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1579,55519,55571) ||       ctx.moveTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1579,55530,55542) || tHoz(x1, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1579,55544,55561) || tVert(bottom, ya)) + offset));
      first = false;
    }
    if (y1 >= ya.max && y2 >= ya.max) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1585,55690,55742) ||       ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1585,55701,55713) || tHoz(x1, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1585,55715,55732) || tVert(ya.max, ya)) + offset));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1586,55761,55813) ||       ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1586,55772,55784) || tHoz(x2, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1586,55786,55803) || tVert(ya.max, ya)) + offset));
      continue;
    } else if (y1 <= ya.min && y2 <= ya.min) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1589,55915,55967) ||       ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1589,55926,55938) || tHoz(x1, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1589,55940,55957) || tVert(ya.min, ya)) + offset));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1590,55986,56038) ||       ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1590,55997,56009) || tHoz(x2, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1590,56011,56028) || tVert(ya.min, ya)) + offset));
      continue;
    }
    var x1old = x1, x2old = x2;
    if (y1 <= y2 && y1 < ya.min && y2 >= ya.min) {
      x1 = (ya.min - y1) / (y2 - y1) * (x2 - x1) + x1;
      y1 = ya.min;
    } else if (y2 <= y1 && y2 < ya.min && y1 >= ya.min) {
      x2 = (ya.min - y1) / (y2 - y1) * (x2 - x1) + x1;
      y2 = ya.min;
    }
    if (y1 >= y2 && y1 > ya.max && y2 <= ya.max) {
      x1 = (ya.max - y1) / (y2 - y1) * (x2 - x1) + x1;
      y1 = ya.max;
    } else if (y2 >= y1 && y2 > ya.max && y1 <= ya.max) {
      x2 = (ya.max - y1) / (y2 - y1) * (x2 - x1) + x1;
      y2 = ya.max;
    }
    if (x1 != x1old) {
      top = (y1 <= ya.min) ? top = ya.min : ya.max;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1619,56936,56988) ||       ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1619,56947,56962) || tHoz(x1old, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1619,56964,56978) || tVert(top, ya)) + offset));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1620,57007,57056) ||       ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1620,57018,57030) || tHoz(x1, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1620,57032,57046) || tVert(top, ya)) + offset));
    }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1624,57090,57138) ||     ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1624,57101,57113) || tHoz(x1, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1624,57115,57128) || tVert(y1, ya)) + offset));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1625,57153,57201) ||     ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1625,57164,57176) || tHoz(x2, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1625,57178,57191) || tVert(y2, ya)) + offset));
    if (x2 != x2old) {
      top = (y2 <= ya.min) ? ya.min : ya.max;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1630,57313,57365) ||       ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1630,57324,57339) || tHoz(x2old, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1630,57341,57355) || tVert(top, ya)) + offset));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1631,57384,57433) ||       ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1631,57395,57407) || tHoz(x2, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1631,57409,57423) || tVert(top, ya)) + offset));
    }
    lastX = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1634,57473,57492) || Math.max(x2, x2old));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1637,57516,57571) ||   ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1637,57527,57542) || tHoz(lastX, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1637,57544,57561) || tVert(bottom, ya)) + offset));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1638,57582,57597) ||   ctx.closePath());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1639,57608,57618) ||   ctx.fill());
}, drawSeriesLines: function(series) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1642, 57652,58850, (typeof arguments === 'object' ? arguments.callee.caller : null));

  series = series || this.series;
  var ctx = this.ctx;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1645,57751,57761) ||   ctx.save());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1646,57772,57828) ||   ctx.translate(this.plotOffset.left, this.plotOffset.top));
  ctx.lineJoin = 'round';
  var lw = series.lines.lineWidth;
  var sw = series.shadowSize;
  if (sw > 0) {
    ctx.lineWidth = sw / 2;
    var offset = lw / 2 + ctx.lineWidth / 2;
    ctx.strokeStyle = "rgba(0,0,0,0.1)";
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1658,58127,58165) ||     this.plotLine(series, offset + sw / 2));
    ctx.strokeStyle = "rgba(0,0,0,0.2)";
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1661,58232,58261) ||     this.plotLine(series, offset));
    if (series.lines.fill) {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1665,58373,58415) ||       this.plotLineArea(series, offset + sw / 2));
    }
  }
  ctx.lineWidth = lw;
  ctx.strokeStyle = series.color;
  if (series.lines.fill) {
    ctx.fillStyle = series.lines.fillColor != null ? series.lines.fillColor : (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1672,58636,58727) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1672,58636,58716) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1672,58636,58666) || Flotr.parseColor(series.color)).scale(null, null, null, series.lines.fillOpacity)).toString());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1673,58742,58770) ||     this.plotLineArea(series, 0));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1676,58794,58818) ||   this.plotLine(series, 0));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1677,58829,58842) ||   ctx.restore());
}, drawSeriesPoints: function(series) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1680, 58877,59751, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var ctx = this.ctx;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1683,58937,58947) ||   ctx.save());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1684,58958,59014) ||   ctx.translate(this.plotOffset.left, this.plotOffset.top));
  var lw = series.lines.lineWidth;
  var sw = series.shadowSize;
  if (sw > 0) {
    ctx.lineWidth = sw / 2;
    ctx.strokeStyle = 'rgba(0,0,0,0.1)';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1693,59224,59303) ||     this.plotPointShadows(series, sw / 2 + ctx.lineWidth / 2, series.points.radius));
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1696,59370,59440) ||     this.plotPointShadows(series, ctx.lineWidth / 2, series.points.radius));
  }
  ctx.lineWidth = series.points.lineWidth;
  ctx.strokeStyle = series.color;
  ctx.fillStyle = series.points.fillColor != null ? series.points.fillColor : series.color;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1702,59654,59719) ||   this.plotPoints(series, series.points.radius, series.points.fill));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1703,59730,59743) ||   ctx.restore());
}, plotPoints: function(series, radius, fill) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1705, 59770,60362, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var xa = series.xaxis, ya = series.yaxis, ctx = this.ctx, i, data = series.data;
  for (i = data.length - 1; i > -1; --i) {
    var x = data[i][0], y = data[i][1];
    if (x < xa.min || x > xa.max || y < ya.min || y > ya.max) 
      continue;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1718,60177,60192) ||     ctx.beginPath());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1719,60207,60281) ||     ctx.arc((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1719,60215,60231) || this.tHoz(x, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1719,60233,60250) || this.tVert(y, ya)), radius, 0, 2 * Math.PI, true));
    if (fill) 
      (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1720,60306,60316) ||     ctx.fill());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1721,60331,60343) ||     ctx.stroke());
  }
}, plotPointShadows: function(series, offset, radius) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1724, 60387,60950, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var xa = series.xaxis, ya = series.yaxis, ctx = this.ctx, i, data = series.data;
  for (i = data.length - 1; i > -1; --i) {
    var x = data[i][0], y = data[i][1];
    if (x < xa.min || x > xa.max || y < ya.min || y > ya.max) 
      continue;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1736,60794,60809) ||     ctx.beginPath());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1737,60824,60904) ||     ctx.arc((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1737,60832,60848) || this.tHoz(x, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1737,60850,60867) || this.tVert(y, ya)) + offset, radius, 0, Math.PI, false));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1738,60919,60931) ||     ctx.stroke());
  }
}, drawSeriesBars: function(series) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1742, 60975,61694, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var ctx = this.ctx, bw = series.bars.barWidth, lw = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1745,61082,61117) || Math.min(series.bars.lineWidth, bw));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1747,61130,61140) ||   ctx.save());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1748,61151,61207) ||   ctx.translate(this.plotOffset.left, this.plotOffset.top));
  ctx.lineJoin = 'miter';
  ctx.lineWidth = lw;
  ctx.strokeStyle = series.color;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1755,61327,61380) ||   this.plotBarsShadows(series, bw, 0, series.bars.fill));
  if (series.bars.fill) {
    ctx.fillStyle = series.bars.fillColor != null ? series.bars.fillColor : (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1758,61502,61592) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1758,61502,61581) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1758,61502,61532) || Flotr.parseColor(series.color)).scale(null, null, null, series.bars.fillOpacity)).toString());
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1761,61616,61662) ||   this.plotBars(series, bw, 0, series.bars.fill));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1762,61673,61686) ||   ctx.restore());
}, plotBars: function(series, barWidth, offset, fill) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1764, 61711,64575, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var data = series.data;
  if (data.length < 1) 
    return;
  var xa = series.xaxis, ya = series.yaxis, ctx = this.ctx, tHoz = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1771,61941,61961) || this.tHoz.bind(this)), tVert = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1772,61984,62005) || this.tVert.bind(this));
  for (var i = 0; i < data.length; i++) {
    var x = data[i][0], y = data[i][1];
    var drawLeft = true, drawTop = true, drawRight = true;
    var stackOffset = 0;
    if (series.bars.stacked) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1784,62321,62536) ||       xa.values.each(function(o, v) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1784, 62336,62535, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (v == x) {
    stackOffset = o.stack || 0;
    o.stack = stackOffset + y;
  }
}));
    }
    if (series.bars.horizontal) 
      var left = stackOffset, right = x + stackOffset, bottom = y, top = y + barWidth;
    else 
      var left = x, right = x + barWidth, bottom = stackOffset, top = y + stackOffset;
    if (right < xa.min || left > xa.max || top < ya.min || bottom > ya.max) 
      continue;
    if (left < xa.min) {
      left = xa.min;
      drawLeft = false;
    }
    if (right > xa.max) {
      right = xa.max;
      if (xa.lastSerie != series && series.bars.horizontal) 
        drawTop = false;
    }
    if (bottom < ya.min) 
      bottom = ya.min;
    if (top > ya.max) {
      top = ya.max;
      if (ya.lastSerie != series && !series.bars.horizontal) 
        drawTop = false;
    }
    if (fill) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1830,63673,63688) ||       ctx.beginPath());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1831,63707,63761) ||       ctx.moveTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1831,63718,63732) || tHoz(left, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1831,63734,63751) || tVert(bottom, ya)) + offset));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1832,63780,63831) ||       ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1832,63791,63805) || tHoz(left, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1832,63807,63821) || tVert(top, ya)) + offset));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1833,63850,63902) ||       ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1833,63861,63876) || tHoz(right, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1833,63878,63892) || tVert(top, ya)) + offset));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1834,63921,63976) ||       ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1834,63932,63947) || tHoz(right, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1834,63949,63966) || tVert(bottom, ya)) + offset));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1835,63995,64005) ||       ctx.fill());
    }
    if (series.bars.lineWidth != 0 && (drawLeft || drawRight || drawTop)) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1840,64128,64143) ||       ctx.beginPath());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1841,64162,64216) ||       ctx.moveTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1841,64173,64187) || tHoz(left, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1841,64189,64206) || tVert(bottom, ya)) + offset));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1843,64237,64313) ||       ctx[drawLeft ? 'lineTo' : 'moveTo']((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1843,64273,64287) || tHoz(left, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1843,64289,64303) || tVert(top, ya)) + offset));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1844,64332,64408) ||       ctx[drawTop ? 'lineTo' : 'moveTo']((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1844,64367,64382) || tHoz(right, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1844,64384,64398) || tVert(top, ya)) + offset));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1845,64427,64508) ||       ctx[drawRight ? 'lineTo' : 'moveTo']((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1845,64464,64479) || tHoz(right, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1845,64481,64498) || tVert(bottom, ya)) + offset));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1847,64529,64541) ||       ctx.stroke());
    }
  }
}, plotBarsShadows: function(series, barWidth, offset) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1851, 64599,66532, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var data = series.data;
  if (data.length < 1) 
    return;
  var xa = series.xaxis, ya = series.yaxis, ctx = this.ctx, tHoz = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1858,64823,64843) || this.tHoz.bind(this)), tVert = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1859,64866,64887) || this.tVert.bind(this)), sw = this.options.shadowSize;
  for (var i = 0; i < data.length; i++) {
    var x = data[i][0], y = data[i][1];
    var stackOffset = 0;
    if (series.bars.stacked) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1869,65144,65371) ||       xa.values.each(function(o, v) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1869, 65159,65370, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (v == x) {
    stackOffset = o.stackShadow || 0;
    o.stackShadow = stackOffset + y;
  }
}));
    }
    if (series.bars.horizontal) 
      var left = stackOffset, right = x + stackOffset, bottom = y, top = y + barWidth;
    else 
      var left = x, right = x + barWidth, bottom = stackOffset, top = y + stackOffset;
    if (right < xa.min || left > xa.max || top < ya.min || bottom > ya.max) 
      continue;
    if (left < xa.min) 
      left = xa.min;
    if (right > xa.max) 
      right = xa.max;
    if (bottom < ya.min) 
      bottom = ya.min;
    if (top > ya.max) 
      top = ya.max;
    var width = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1897,66108,66123) || tHoz(right, xa)) - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1897,66126,66140) || tHoz(left, xa)) - (((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1897,66145,66160) || tHoz(right, xa)) + sw <= this.plotWidth) ? 0 : sw);
    var height = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1898,66222,66326) || Math.max(0, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1898,66234,66251) || tVert(bottom, ya)) - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1898,66254,66268) || tVert(top, ya)) - (((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1898,66273,66290) || tVert(bottom, ya)) + sw <= this.plotHeight) ? 0 : sw)));
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1901,66392,66513) ||     ctx.fillRect((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1901,66405,66450) || Math.min((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1901,66414,66428) || tHoz(left, xa)) + sw, this.plotWidth)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1901,66452,66497) || Math.min((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1901,66461,66475) || tVert(top, ya)) + sw, this.plotWidth)), width, height));
  }
}, drawSeriesCandles: function(series) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1905, 66560,66958, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var ctx = this.ctx, bw = series.candles.candleWidth;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1909,66666,66676) ||   ctx.save());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1910,66687,66743) ||   ctx.translate(this.plotOffset.left, this.plotOffset.top));
  ctx.lineJoin = 'miter';
  ctx.lineWidth = series.candles.lineWidth;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1915,66842,66881) ||   this.plotCandlesShadows(series, bw / 2));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1916,66892,66924) ||   this.plotCandles(series, bw / 2));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1918,66937,66950) ||   ctx.restore());
}, plotCandles: function(series, offset) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1920, 66978,70025, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var data = series.data;
  if (data.length < 1) 
    return;
  var xa = series.xaxis, ya = series.yaxis, ctx = this.ctx, tHoz = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1927,67192,67212) || this.tHoz.bind(this)), tVert = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1928,67235,67256) || this.tVert.bind(this));
  for (var i = 0; i < data.length; i++) {
    var d = data[i], x = d[0], open = d[1], high = d[2], low = d[3], close = d[4];
    var left = x, right = x + series.candles.candleWidth, bottom = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1940,67598,67619) || Math.max(ya.min, low)), top = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1941,67644,67666) || Math.min(ya.max, high)), bottom2 = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1942,67695,67734) || Math.max(ya.min, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1942,67712,67733) || Math.min(open, close)))), top2 = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1943,67760,67799) || Math.min(ya.max, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1943,67777,67798) || Math.max(open, close))));
    if (right < xa.min || left > xa.max || top < ya.min || bottom > ya.max) 
      continue;
    var color = series.candles[open > close ? 'downFillColor' : 'upFillColor'];
    if (series.candles.fill && !series.candles.barcharts) {
      ctx.fillStyle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1951,68110,68196) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1951,68110,68185) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1951,68110,68133) || Flotr.parseColor(color)).scale(null, null, null, series.candles.fillOpacity)).toString());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1952,68215,68341) ||       ctx.fillRect((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1952,68228,68242) || tHoz(left, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1952,68244,68259) || tVert(top2, ya)) + offset, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1952,68270,68285) || tHoz(right, xa)) - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1952,68288,68302) || tHoz(left, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1952,68304,68322) || tVert(bottom2, ya)) - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1952,68325,68340) || tVert(top2, ya))));
    }
    if (series.candles.lineWidth || series.candles.wickLineWidth) {
      var x, y, pixelOffset = (series.candles.wickLineWidth % 2) / 2;
      x = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1959,68543,68583) || Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1959,68554,68578) || tHoz((left + right) / 2)), xa)) + pixelOffset;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1961,68618,68628) ||       ctx.save());
      ctx.strokeStyle = color;
      ctx.lineWidth = series.candles.wickLineWidth;
      ctx.lineCap = 'butt';
      if (series.candles.barcharts) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1967,68846,68861) ||         ctx.beginPath());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1969,68886,68936) ||         ctx.moveTo(x, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1969,68900,68935) || Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1969,68911,68925) || tVert(top, ya)) + offset))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1970,68959,69012) ||         ctx.lineTo(x, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1970,68973,69011) || Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1970,68984,69001) || tVert(bottom, ya)) + offset))));
        y = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1972,69041,69077) || Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1972,69052,69067) || tVert(open, ya)) + offset)) + 0.5;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1973,69106,69161) ||         ctx.moveTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1973,69117,69143) || Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1973,69128,69142) || tHoz(left, xa)))) + pixelOffset, y));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1974,69184,69200) ||         ctx.lineTo(x, y));
        y = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1976,69229,69266) || Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1976,69240,69256) || tVert(close, ya)) + offset)) + 0.5;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1977,69295,69351) ||         ctx.moveTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1977,69306,69333) || Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1977,69317,69332) || tHoz(right, xa)))) + pixelOffset, y));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1978,69374,69390) ||         ctx.lineTo(x, y));
      } else {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1980,69439,69567) ||         ctx.strokeRect((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1980,69454,69468) || tHoz(left, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1980,69470,69485) || tVert(top2, ya)) + offset, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1980,69496,69511) || tHoz(right, xa)) - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1980,69514,69528) || tHoz(left, xa)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1980,69530,69548) || tVert(bottom2, ya)) - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1980,69551,69566) || tVert(top2, ya))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1982,69592,69607) ||         ctx.beginPath());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1983,69630,69681) ||         ctx.moveTo(x, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1983,69644,69680) || Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1983,69655,69670) || tVert(top2, ya)) + offset))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1984,69704,69754) ||         ctx.lineTo(x, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1984,69718,69753) || Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1984,69729,69743) || tVert(top, ya)) + offset))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1985,69777,69831) ||         ctx.moveTo(x, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1985,69791,69830) || Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1985,69802,69820) || tVert(bottom2, ya)) + offset))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1986,69854,69907) ||         ctx.lineTo(x, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1986,69868,69906) || Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1986,69879,69896) || tVert(bottom, ya)) + offset))));
      }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1989,69947,69959) ||       ctx.stroke());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1990,69978,69991) ||       ctx.restore());
    }
  }
}, plotCandlesShadows: function(series, offset) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1994, 70052,71394, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var data = series.data;
  if (data.length < 1 || series.candles.barcharts) 
    return;
  var xa = series.xaxis, ya = series.yaxis, tHoz = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2000,70265,70285) || this.tHoz.bind(this)), tVert = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2001,70308,70329) || this.tVert.bind(this)), sw = this.options.shadowSize;
  for (var i = 0; i < data.length; i++) {
    var d = data[i], x = d[0], open = d[1], high = d[2], low = d[3], close = d[4];
    var left = x, right = x + series.candles.candleWidth, bottom = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2014,70714,70753) || Math.max(ya.min, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2014,70731,70752) || Math.min(open, close)))), top = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2015,70778,70817) || Math.min(ya.max, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2015,70795,70816) || Math.max(open, close))));
    if (right < xa.min || left > xa.max || top < ya.min || bottom > ya.max) 
      continue;
    var width = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2020,70960,70975) || tHoz(right, xa)) - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2020,70978,70992) || tHoz(left, xa)) - (((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2020,70997,71012) || tHoz(right, xa)) + sw <= this.plotWidth) ? 0 : sw);
    var height = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2021,71074,71178) || Math.max(0, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2021,71086,71103) || tVert(bottom, ya)) - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2021,71106,71120) || tVert(top, ya)) - (((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2021,71125,71142) || tVert(bottom, ya)) + sw <= this.plotHeight) ? 0 : sw)));
    this.ctx.fillStyle = 'rgba(0,0,0,0.05)';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2024,71249,71375) ||     this.ctx.fillRect((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2024,71267,71312) || Math.min((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2024,71276,71290) || tHoz(left, xa)) + sw, this.plotWidth)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2024,71314,71359) || Math.min((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2024,71323,71337) || tVert(top, ya)) + sw, this.plotWidth)), width, height));
  }
}, drawSeriesPie: function(series) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2028, 71418,76549, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!this.options.pie.drawn) {
    var ctx = this.ctx, options = this.options, lw = series.pie.lineWidth, sw = series.shadowSize, data = series.data, radius = ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2035,71701,71746) || Math.min(this.canvasWidth, this.canvasHeight)) * series.pie.sizeRatio) / 2, html = [];
    var vScale = 1;
    var plotTickness = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2039,71867,71897) || Math.sin(series.pie.viewAngle)) * series.pie.spliceThickness / vScale;
    var style = {size: options.fontSize * 1.2, color: options.grid.color, weight: 1.5};
    var center = {x: (this.canvasWidth + this.plotOffset.left) / 2, y: (this.canvasHeight - this.plotOffset.bottom) / 2};
    var portions = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2053,72316,72639) || this.series.collect(function(hash, index) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2053, 72336,72638, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (hash.pie.show) 
    return {name: (hash.label || hash.data[0][1]), value: [index, hash.data[0][1]], explode: hash.pie.explode};
}));
    var sum = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2063,72668,72779) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2063,72668,72700) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2063,72668,72691) || portions.pluck('value')).pluck(1)).inject(0, function(acc, n) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2063, 72711,72778, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return acc + n;
}));
    var fraction = 0.0, angle = series.pie.startAngle, value = 0.0;
    var slices = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2071,72922,73463) || portions.collect(function(slice) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2071, 72939,73462, (typeof arguments === 'object' ? arguments.callee.caller : null));

  angle += fraction;
  value = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2073,73019,73045) || parseFloat(slice.value[1]));
  fraction = value / sum;
  return {name: slice.name, fraction: fraction, x: slice.value[0], y: value, explode: slice.explode, startAngle: 2 * angle * Math.PI, endAngle: 2 * (angle + fraction) * Math.PI};
}));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2086,73480,73490) ||     ctx.save());
    if (sw > 0) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2089,73538,74055) ||       slices.each(function(slice) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2089, 73550,74048, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var bisection = (slice.startAngle + slice.endAngle) / 2;
  var xOffset = center.x + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2092,73695,73714) || Math.cos(bisection)) * slice.explode + sw;
  var yOffset = center.y + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2093,73783,73802) || Math.sin(bisection)) * slice.explode + sw;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2095,73848,73937) ||   this.plotSlice(xOffset, yOffset, radius, slice.startAngle, slice.endAngle, false, vScale));
  ctx.fillStyle = 'rgba(0,0,0,0.1)';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2098,74018,74028) ||   ctx.fill());
}, this));
    }
    if (options.HtmlText) {
      html = ['<div style="color:' + this.options.grid.color + '" class="flotr-labels">'];
    }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2106,74243,76321) ||     slices.each(function(slice, index) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2106, 74255,76314, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var bisection = (slice.startAngle + slice.endAngle) / 2;
  var color = options.colors[index];
  var xOffset = center.x + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2110,74451,74470) || Math.cos(bisection)) * slice.explode;
  var yOffset = center.y + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2111,74530,74549) || Math.sin(bisection)) * slice.explode;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2113,74586,74675) ||   this.plotSlice(xOffset, yOffset, radius, slice.startAngle, slice.endAngle, false, vScale));
  if (series.pie.fill) {
    ctx.fillStyle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2116,74756,74838) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2116,74756,74827) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2116,74756,74779) || Flotr.parseColor(color)).scale(null, null, null, series.pie.fillOpacity)).toString());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2117,74861,74871) ||     ctx.fill());
  }
  ctx.lineWidth = lw;
  ctx.strokeStyle = color;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2121,74988,75000) ||   ctx.stroke());
  var label = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2125,75037,75070) || options.pie.labelFormatter(slice));
  var textAlignRight = ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2127,75113,75132) || Math.cos(bisection)) < 0);
  var distX = xOffset + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2128,75178,75197) || Math.cos(bisection)) * (series.pie.explode + radius);
  var distY = yOffset + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2129,75270,75289) || Math.sin(bisection)) * (series.pie.explode + radius);
  if (slice.fraction && label) {
    if (options.HtmlText) {
      var divStyle = 'position:absolute;top:' + (distY - 5) + 'px;';
      if (textAlignRight) {
        divStyle += 'right:' + (this.canvasWidth - distX) + 'px;text-align:right;';
      } else {
        divStyle += 'left:' + distX + 'px;text-align:left;';
      }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2140,75844,75931) ||       html.push('<div style="' + divStyle + '" class="flotr-grid-label">' + label + '</div>'));
    } else {
      style.halign = textAlignRight ? 'r' : 'l';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2143,76056,76256) ||       ctx.drawText(label, distX, distY + style.size / 2, style));
    }
  }
}, this));
    if (options.HtmlText) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2154,76379,76398) ||       html.push('</div>'));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2155,76417,76446) ||       this.el.insert((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2155,76432,76445) || html.join(''))));
    }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2158,76478,76491) ||     ctx.restore());
    options.pie.drawn = true;
  }
}, plotSlice: function(x, y, radius, startAngle, endAngle, fill, vScale) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2162, 76567,76939, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var ctx = this.ctx;
  vScale = vScale || 1;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2166,76700,76710) ||   ctx.save());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2167,76721,76741) ||   ctx.scale(1, vScale));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2168,76752,76767) ||   ctx.beginPath());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2169,76778,76794) ||   ctx.moveTo(x, y));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2170,76805,76854) ||   ctx.arc(x, y, radius, startAngle, endAngle, fill));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2171,76865,76881) ||   ctx.lineTo(x, y));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2172,76892,76907) ||   ctx.closePath());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2173,76918,76931) ||   ctx.restore());
}, plotPie: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2175, 76955,76969, (typeof arguments === 'object' ? arguments.callee.caller : null));

}, insertLegend: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2177, 76992,83116, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!this.options.legend.show) 
    return;
  var series = this.series, plotOffset = this.plotOffset, options = this.options, fragments = [], rowStarted = false, ctx = this.ctx, i;
  var noLegendItems = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2191,77322,77412) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2189,77322,77405) || series.findAll(function(s) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2189, 77337,77404, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (s.label && !s.hide);
})).size());
  if (noLegendItems) {
    if (!options.HtmlText && this.textEnabled) {
      var style = {size: options.fontSize * 1.1, color: options.grid.color};
      var p = options.legend.position, m = options.legend.margin, lbw = options.legend.labelBoxWidth, lbh = options.legend.labelBoxHeight, lbm = options.legend.labelBoxMargin, offsetX = plotOffset.left + m, offsetY = plotOffset.top + m;
      var labelMaxWidth = 0;
      for (i = series.length - 1; i > -1; --i) {
        if (!series[i].label || series[i].hide) 
          continue;
        var label = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2215,78243,78289) || options.legend.labelFormatter(series[i].label));
        labelMaxWidth = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2216,78328,78382) || Math.max(labelMaxWidth, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2216,78352,78381) || ctx.measureText(label, style))));
      }
      var legendWidth = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2219,78440,78481) || Math.round(lbw + lbm * 3 + labelMaxWidth)), legendHeight = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2220,78519,78564) || Math.round(noLegendItems * (lbm + lbh) + lbm));
      if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2222,78589,78600) || p.charAt(0)) == 's') 
        offsetY = plotOffset.top + this.plotHeight - (m + legendHeight);
      if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2223,78695,78706) || p.charAt(1)) == 'e') 
        offsetX = plotOffset.left + this.plotWidth - (m + legendWidth);
      var color = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2226,78812,78958) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2226,78812,78947) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2226,78812,78882) || Flotr.parseColor(options.legend.backgroundColor || 'rgb(240,240,240)')).scale(null, null, null, options.legend.backgroundOpacity || 0.1)).toString());
      ctx.fillStyle = color;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2229,79019,79076) ||       ctx.fillRect(offsetX, offsetY, legendWidth, legendHeight));
      ctx.strokeStyle = options.legend.labelBoxBorderColor;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2231,79166,79255) ||       ctx.strokeRect((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2231,79181,79203) || Flotr.toPixel(offsetX)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2231,79205,79227) || Flotr.toPixel(offsetY)), legendWidth, legendHeight));
      var x = offsetX + lbm;
      var y = offsetY + lbm;
      for (i = 0; i < series.length; i++) {
        if (!series[i].label || series[i].hide) 
          continue;
        var label = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2238,79500,79546) || options.legend.labelFormatter(series[i].label));
        ctx.fillStyle = series[i].color;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2241,79625,79661) ||         ctx.fillRect(x, y, lbw - 1, lbh - 1));
        ctx.strokeStyle = options.legend.labelBoxBorderColor;
        ctx.lineWidth = 1;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2245,79801,79873) ||         ctx.strokeRect((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2245,79816,79828) || Math.ceil(x)) - 1.5, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2245,79836,79848) || Math.ceil(y)) - 1.5, lbw + 2, lbh + 2));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2248,79900,80117) ||         ctx.drawText(label, x + lbw + lbm, y + (lbh + style.size - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2251,80035,80057) || ctx.fontDescent(style))) / 2, style));
        y += lbh + lbm;
      }
    } else {
      for (i = 0; i < series.length; ++i) {
        if (!series[i].label || series[i].hide) 
          continue;
        if (i % options.legend.noColumns == 0) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2262,80414,80463) ||           fragments.push(rowStarted ? '</tr><tr>' : '<tr>'));
          rowStarted = true;
        }
        var label = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2266,80567,80613) || options.legend.labelFormatter(series[i].label));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2268,80638,81018) ||         fragments.push('<td class="flotr-legend-color-box"><div style="border:1px solid ' + options.legend.labelBoxBorderColor + ';padding:1px"><div style="width:' + options.legend.labelBoxWidth + 'px;height:' + options.legend.labelBoxHeight + 'px;background-color:' + series[i].color + '"></div></div></td>' + '<td class="flotr-legend-label">' + label + '</td>'));
      }
      if (rowStarted) 
        (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2271,81072,81095) ||       fragments.push('</tr>'));
      if (fragments.length > 0) {
        var table = '<table style="font-size:smaller;color:' + options.grid.color + '">' + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2274,81248,81266) || fragments.join("")) + '</table>';
        if (options.legend.container != null) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2276,81367,81408) ||           (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2276,81367,81394) || $(options.legend.container)).update(table));
        } else {
          var pos = '';
          var p = options.legend.position, m = options.legend.margin;
          if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2282,81624,81635) || p.charAt(0)) == 'n') 
            pos += 'top:' + (m + plotOffset.top) + 'px;';
          else if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2283,81724,81735) || p.charAt(0)) == 's') 
            pos += 'bottom:' + (m + plotOffset.bottom) + 'px;';
          if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2284,81825,81836) || p.charAt(1)) == 'e') 
            pos += 'right:' + (m + plotOffset.right) + 'px;';
          else if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2285,81929,81940) || p.charAt(1)) == 'w') 
            pos += 'left:' + (m + plotOffset.left) + 'px;';
          var div = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2287,82034,82180) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2287,82034,82172) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2287,82034,82145) || this.el.insert('<div class="flotr-legend" style="position:absolute;z-index:2;' + pos + '">' + table + '</div>')).select('div.flotr-legend')).first());
          if (options.legend.backgroundOpacity != 0.0) {
            var c = options.legend.backgroundColor;
            if (c == null) {
              var tmp = (options.grid.backgroundColor != null) ? options.grid.backgroundColor : (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2293,82488,82511) || Flotr.extractColor(div));
              c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2294,82550,82610) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2294,82550,82599) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2294,82550,82571) || Flotr.parseColor(tmp)).adjust(null, null, null, 1)).toString());
            }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2296,82672,83013) ||             (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2296,82672,82893) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2296,82672,82885) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2296,82672,82855) || this.el.insert('<div class="flotr-legend-bg" style="position:absolute;width:' + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2296,82752,82766) || div.getWidth()) + 'px;height:' + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2296,82784,82799) || div.getHeight()) + 'px;' + pos + 'background-color:' + c + ';"> </div>')).select('div.flotr-legend-bg')).first()).setStyle({'opacity': options.legend.backgroundOpacity}));
          }
        }
      }
    }
  }
}, getEventPosition: function(event) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2306, 83143,84156, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var offset = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2307,83184,83215) || this.overlay.cumulativeOffset()), rx = (event.pageX - offset.left - this.plotOffset.left), ry = (event.pageY - offset.top - this.plotOffset.top), ax = 0, ay = 0;
  if (event.pageX == null && event.clientX != null) {
    var de = document.documentElement, b = document.body;
    ax = event.clientX + (de && de.scrollLeft || b.scrollLeft || 0);
    ay = event.clientY + (de && de.scrollTop || b.scrollTop || 0);
  } else {
    ax = event.pageX;
    ay = event.pageY;
  }
  return {x: this.axes.x.min + rx / this.axes.x.scale, x2: this.axes.x2.min + rx / this.axes.x2.scale, y: this.axes.y.max - ry / this.axes.y.scale, y2: this.axes.y2.max - ry / this.axes.y2.scale, relX: rx, relY: ry, absX: ax, absY: ay};
}, clickHandler: function(event) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2335, 84179,84384, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (this.ignoreClick) {
    this.ignoreClick = false;
    return;
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2340,84311,84376) ||   this.el.fire('flotr:click', [(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2340,84340,84368) || this.getEventPosition(event)), this]));
}, mouseMoveHandler: function(event) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2343, 84411,84849, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var pos = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2344,84449,84477) || this.getEventPosition(event));
  this.lastMousePos.pageX = pos.absX;
  this.lastMousePos.pageY = pos.absY;
  if (this.selectionInterval == null && (this.options.mouse.track || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2348,84647,84735) || this.series.any(function(s) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2348, 84663,84734, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return s.mouse && s.mouse.track;
})))) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2351,84753,84766) ||     this.hit(pos));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2354,84790,84841) ||   this.el.fire('flotr:mousemove', [event, pos, this]));
}, mouseDownHandler: function(event) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2357, 84876,85835, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2358,84908,84928) || event.isRightClick())) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2359,84945,84957) ||     event.stop());
    var overlay = this.overlay;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2361,85013,85027) ||     overlay.hide());
    function cancelContextMenu() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2363, 85044,85198, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2364,85092,85106) ||       overlay.show());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2365,85125,85182) ||       (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2365,85125,85136) || $(document)).stopObserving('mousemove', cancelContextMenu));
    }(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2367,85212,85263) ||     (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2367,85212,85223) || $(document)).observe('mousemove', cancelContextMenu));
    return;
  }
  if (!this.options.selection.mode || !(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2371,85345,85364) || event.isLeftClick())) 
    return;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2373,85385,85434) ||   this.setSelectionPos(this.selection.first, event));
  if (this.selectionInterval != null) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2375,85496,85533) ||     clearInterval(this.selectionInterval));
  }
  this.lastMousePos.pageX = null;
  this.selectionInterval = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2378,85621,85700) || setInterval((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2378,85633,85664) || this.updateSelection.bind(this)), 1000 / this.options.selection.fps));
  this.mouseUpHandler = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2380,85735,85765) || this.mouseUpHandler.bind(this));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2381,85776,85827) ||   (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2381,85776,85787) || $(document)).observe('mouseup', this.mouseUpHandler));
}, fireSelectEvent: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2384, 85861,86709, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var a = this.axes, selection = this.selection, x1 = (selection.first.x <= selection.second.x) ? selection.first.x : selection.second.x, x2 = (selection.first.x <= selection.second.x) ? selection.second.x : selection.first.x, y1 = (selection.first.y >= selection.second.y) ? selection.first.y : selection.second.y, y2 = (selection.first.y >= selection.second.y) ? selection.second.y : selection.first.y;
  x1 = a.x.min + x1 / a.x.scale;
  x2 = a.x.min + x2 / a.x.scale;
  y1 = a.y.max - y1 / a.y.scale;
  y2 = a.y.max - y2 / a.y.scale;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2397,86525,86701) ||   this.el.fire('flotr:select', [{x1: x1, y1: y1, x2: x2, y2: y2}, this]));
}, mouseUpHandler: function(event) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2407, 86734,87263, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2408,86762,86819) ||   (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2408,86762,86773) || $(document)).stopObserving('mouseup', this.mouseUpHandler));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2409,86830,86842) ||   event.stop());
  if (this.selectionInterval != null) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2412,86906,86943) ||     clearInterval(this.selectionInterval));
    this.selectionInterval = null;
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2416,87011,87061) ||   this.setSelectionPos(this.selection.second, event));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2417,87072,87093) ||   this.clearSelection());
  if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2419,87110,87132) || this.selectionIsSane())) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2420,87149,87169) ||     this.drawSelection());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2421,87184,87206) ||     this.fireSelectEvent());
    this.ignoreClick = true;
  }
}, setSelectionPos: function(pos, event) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2426, 87289,88014, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var options = this.options, offset = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2428,87372,87406) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2428,87372,87387) || $(this.overlay)).cumulativeOffset());
  if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2430,87423,87458) || options.selection.mode.indexOf('x')) == -1) {
    pos.x = (pos == this.selection.first) ? 0 : this.plotWidth;
  } else {
    pos.x = event.pageX - offset.left - this.plotOffset.left;
    pos.x = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2434,87651,87695) || Math.min((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2434,87660,87678) || Math.max(0, pos.x)), this.plotWidth));
  }
  if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2437,87723,87758) || options.selection.mode.indexOf('y')) == -1) {
    pos.y = (pos == this.selection.first) ? 0 : this.plotHeight;
  } else {
    pos.y = event.pageY - offset.top - this.plotOffset.top;
    pos.y = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2441,87950,87995) || Math.min((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2441,87959,87977) || Math.max(0, pos.y)), this.plotHeight));
  }
}, updateSelection: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2445, 88040,88282, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (this.lastMousePos.pageX == null) 
    return;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2448,88119,88181) ||   this.setSelectionPos(this.selection.second, this.lastMousePos));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2449,88192,88213) ||   this.clearSelection());
  if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2451,88230,88252) || this.selectionIsSane())) 
    (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2451,88254,88274) ||   this.drawSelection());
}, clearSelection: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2454, 88307,89026, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (this.prevSelection == null) 
    return;
  var prevSelection = this.prevSelection, octx = this.octx, plotOffset = this.plotOffset, x = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2460,88512,88567) || Math.min(prevSelection.first.x, prevSelection.second.x)), y = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2461,88586,88641) || Math.min(prevSelection.first.y, prevSelection.second.y)), w = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2462,88660,88716) || Math.abs(prevSelection.second.x - prevSelection.first.x)), h = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2463,88735,88791) || Math.abs(prevSelection.second.y - prevSelection.first.y));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2465,88804,88980) ||   octx.clearRect(x + plotOffset.left - octx.lineWidth, y + plotOffset.top - octx.lineWidth, w + octx.lineWidth * 2, h + octx.lineWidth * 2));
  this.prevSelection = null;
}, setSelection: function(area) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2473, 89049,89810, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var options = this.options, xa = this.axes.x, ya = this.axes.y, vertScale = yaxis.scale, hozScale = xaxis.scale, selX = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2479,89261,89296) || options.selection.mode.indexOf('x')) != -1, selY = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2480,89324,89359) || options.selection.mode.indexOf('y')) != -1;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2482,89378,89399) ||   this.clearSelection());
  this.selection.first.y = selX ? 0 : (ya.max - area.y1) * vertScale;
  this.selection.second.y = selX ? this.plotHeight : (ya.max - area.y2) * vertScale;
  this.selection.first.x = selY ? 0 : (area.x1 - xa.min) * hozScale;
  this.selection.second.x = selY ? this.plotWidth : (area.x2 - xa.min) * hozScale;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2489,89749,89769) ||   this.drawSelection());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2490,89780,89802) ||   this.fireSelectEvent());
}, drawSelection: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2493, 89834,91331, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var prevSelection = this.prevSelection, selection = this.selection, octx = this.octx, options = this.options, plotOffset = this.plotOffset;
  if (prevSelection != null && selection.first.x == prevSelection.first.x && selection.first.y == prevSelection.first.y && selection.second.x == prevSelection.second.x && selection.second.y == prevSelection.second.y) 
    return;
  octx.strokeStyle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2507,90378,90459) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2507,90378,90448) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2507,90378,90419) || Flotr.parseColor(options.selection.color)).scale(null, null, null, 0.8)).toString());
  octx.lineWidth = 1;
  octx.lineJoin = 'round';
  octx.fillStyle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2510,90550,90631) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2510,90550,90620) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2510,90550,90591) || Flotr.parseColor(options.selection.color)).scale(null, null, null, 0.4)).toString());
  this.prevSelection = {first: {x: selection.first.x, y: selection.first.y}, second: {x: selection.second.x, y: selection.second.y}};
  var x = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2523,90930,90977) || Math.min(selection.first.x, selection.second.x)), y = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2524,90996,91043) || Math.min(selection.first.y, selection.second.y)), w = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2525,91062,91110) || Math.abs(selection.second.x - selection.first.x)), h = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2526,91129,91177) || Math.abs(selection.second.y - selection.first.y));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2528,91190,91250) ||   octx.fillRect(x + plotOffset.left, y + plotOffset.top, w, h));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2529,91261,91323) ||   octx.strokeRect(x + plotOffset.left, y + plotOffset.top, w, h));
}, selectionIsSane: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2532, 91357,91559, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var selection = this.selection;
  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2534,91428,91476) || Math.abs(selection.second.x - selection.first.x)) >= 5 && (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2535,91498,91546) || Math.abs(selection.second.y - selection.first.y)) >= 5;
}, clearHit: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2538, 91578,92172, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (this.prevHit) {
    var options = this.options, plotOffset = this.plotOffset, prevHit = this.prevHit;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2544,91765,92119) ||     this.octx.clearRect((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2545,91803,91823) || this.tHoz(prevHit.x)) + plotOffset.left - options.points.radius * 2, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2546,91888,91909) || this.tVert(prevHit.y)) + plotOffset.top - options.points.radius * 2, options.points.radius * 3 + options.points.lineWidth * 3, options.points.radius * 3 + options.points.lineWidth * 3));
    this.prevHit = null;
  }
}, hit: function(mouse) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2554, 92186,96549, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var series = this.series, options = this.options, prevHit = this.prevHit, plotOffset = this.plotOffset, octx = this.octx, data, xsens, ysens, i, n = {dist: Number.MAX_VALUE, x: null, y: null, relX: mouse.relX, relY: mouse.relY, absX: mouse.absX, absY: mouse.absY, mouse: null};
  for (i = 0; i < series.length; i++) {
    s = series[i];
    if (!s.mouse.track) 
      continue;
    data = s.data;
    xsens = (s.xaxis.scale * s.mouse.sensibility);
    ysens = (s.yaxis.scale * s.mouse.sensibility);
    for (var j = 0, xpow, ypow; j < data.length; j++) {
      if (data[j][1] === null) 
        continue;
      xpow = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2582,93134,93185) || Math.pow(s.xaxis.scale * (data[j][0] - mouse.x), 2));
      ypow = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2583,93211,93262) || Math.pow(s.yaxis.scale * (data[j][1] - mouse.y), 2));
      if (xpow < xsens && ypow < ysens && (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2584,93317,93339) || Math.sqrt(xpow + ypow)) < n.dist) {
        n.dist = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2585,93382,93404) || Math.sqrt(xpow + ypow));
        n.x = data[j][0];
        n.y = data[j][1];
        n.mouse = s.mouse;
      }
    }
  }
  if (n.mouse && n.mouse.track && !prevHit || (prevHit && (n.x != prevHit.x || n.y != prevHit.y))) {
    var mt = this.mouseTrack || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2594,93720,93756) || this.el.select(".flotr-mouse-value"))[0], pos = '', p = options.mouse.position, m = options.mouse.margin, elStyle = 'opacity:0.7;background-color:#000;color:#fff;display:none;position:absolute;padding:2px 8px;-moz-border-radius:4px;border-radius:4px;white-space:nowrap;';
    if (!options.mouse.relative) {
      if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2601,94126,94137) || p.charAt(0)) == 'n') 
        pos += 'top:' + (m + plotOffset.top) + 'px;';
      else if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2602,94218,94229) || p.charAt(0)) == 's') 
        pos += 'bottom:' + (m + plotOffset.bottom) + 'px;';
      if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2603,94311,94322) || p.charAt(1)) == 'e') 
        pos += 'right:' + (m + plotOffset.right) + 'px;';
      else if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2604,94407,94418) || p.charAt(1)) == 'w') 
        pos += 'left:' + (m + plotOffset.left) + 'px;';
    } else {
      if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2606,94518,94529) || p.charAt(0)) == 'n') 
        pos += 'bottom:' + (m - plotOffset.top - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2606,94579,94594) || this.tVert(n.y)) + this.canvasHeight) + 'px;';
      else if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2607,94651,94662) || p.charAt(0)) == 's') 
        pos += 'top:' + (m + plotOffset.top + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2607,94709,94724) || this.tVert(n.y))) + 'px;';
      if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2608,94756,94767) || p.charAt(1)) == 'e') 
        pos += 'left:' + (m + plotOffset.left + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2608,94816,94830) || this.tHoz(n.x))) + 'px;';
      else if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2609,94867,94878) || p.charAt(1)) == 'w') 
        pos += 'right:' + (m - plotOffset.left - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2609,94928,94942) || this.tHoz(n.x)) + this.canvasWidth) + 'px;';
    }
    elStyle += pos;
    if (!mt) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2615,95061,95140) ||       this.el.insert('<div class="flotr-mouse-value" style="' + elStyle + '"></div>'));
      mt = this.mouseTrack = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2616,95182,95226) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2616,95182,95218) || this.el.select('.flotr-mouse-value')).first());
    } else {
      this.mouseTrack = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2618,95285,95305) || mt.setStyle(elStyle));
    }
    if (n.x !== null && n.y !== null) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2622,95390,95399) ||       mt.show());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2624,95420,95435) ||       this.clearHit());
      if (n.mouse.lineColor != null) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2626,95508,95519) ||         octx.save());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2627,95542,95589) ||         octx.translate(plotOffset.left, plotOffset.top));
        octx.lineWidth = options.points.lineWidth;
        octx.strokeStyle = n.mouse.lineColor;
        octx.fillStyle = '#ffffff';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2631,95784,95800) ||         octx.beginPath());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2632,95823,95908) ||         octx.arc((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2632,95832,95846) || this.tHoz(n.x)), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2632,95848,95863) || this.tVert(n.y)), options.mouse.radius, 0, 2 * Math.PI, true));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2633,95931,95942) ||         octx.fill());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2634,95965,95978) ||         octx.stroke());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2635,96001,96015) ||         octx.restore());
      }
      this.prevHit = n;
      var decimals = n.mouse.trackDecimals;
      if (decimals == null || decimals < 0) 
        decimals = 0;
      mt.innerHTML = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2642,96231,96368) || n.mouse.trackFormatter({x: (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2643,96280,96301) || n.x.toFixed(decimals)), y: (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2644,96327,96348) || n.y.toFixed(decimals))}));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2646,96387,96418) ||       mt.fire('flotr:hit', [n, this]));
    } else if (prevHit) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2648,96472,96481) ||       mt.hide());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2649,96500,96515) ||       this.clearHit());
    }
  }
}, saveImage: function(type, width, height, replaceCanvas) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2653, 96567,97383, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var image = null;
  switch (type) {
    case 'jpeg':
    case 'jpg':
      image = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2658,96731,96797) || Canvas2Image.saveAsJPEG(this.canvas, replaceCanvas, width, height));
      break;
    default:
    case 'png':
      image = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2662,96879,96944) || Canvas2Image.saveAsPNG(this.canvas, replaceCanvas, width, height));
      break;
    case 'bmp':
      image = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2665,97008,97073) || Canvas2Image.saveAsBMP(this.canvas, replaceCanvas, width, height));
      break;
  }
  if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2668,97119,97142) || Object.isElement(image)) && replaceCanvas) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2669,97176,97196) ||     this.restoreCanvas());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2670,97211,97229) ||     this.canvas.hide());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2671,97244,97263) ||     this.overlay.hide());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2672,97278,97364) ||     this.el.insert((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2672,97293,97363) || image.setStyle({position: 'absolute'}))));
  }
}, restoreCanvas: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2677, 97405,97533, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2678,97428,97446) ||   this.canvas.show());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2679,97457,97476) ||   this.overlay.show());
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2680,97487,97525) ||   (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2680,97487,97508) || this.el.select('img')).invoke('remove'));
}}));
Flotr.Color = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2684,97556,99275) || Class.create({initialize: function(r, g, b, a) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2685, 97588,97819, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.rgba = ['r', 'g', 'b', 'a'];
  var x = 4;
  while (-1 < --x) {
    this[this.rgba[x]] = arguments[x] || ((x == 3) ? 1.0 : 0);
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2691,97795,97811) ||   this.normalize());
}, adjust: function(rd, gd, bd, ad) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2694, 97836,98055, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var x = 4;
  while (-1 < --x) {
    if (arguments[x] != null) 
      this[this.rgba[x]] += arguments[x];
  }
  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2700,98031,98047) || this.normalize());
}, clone: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2703, 98071,98156, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2704,98101,98148) || new Flotr.Color(this.r, this.b, this.g, this.a));
}, limit: function(val, minVal, maxVal) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2707, 98172,98268, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2708,98221,98260) || Math.max((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2708,98230,98251) || Math.min(val, maxVal)), minVal));
}, normalize: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2711, 98288,98555, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var limit = this.limit;
  this.r = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2713,98353,98384) || limit((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2713,98359,98375) || parseInt(this.r)), 0, 255));
  this.g = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2714,98404,98435) || limit((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2714,98410,98426) || parseInt(this.g)), 0, 255));
  this.b = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2715,98455,98486) || limit((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2715,98461,98477) || parseInt(this.b)), 0, 255));
  this.a = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2716,98506,98525) || limit(this.a, 0, 1));
  return this;
}, scale: function(rf, gf, bf, af) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2720, 98571,98790, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var x = 4;
  while (-1 < --x) {
    if (arguments[x] != null) 
      this[this.rgba[x]] *= arguments[x];
  }
  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2726,98766,98782) || this.normalize());
}, distance: function(color) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2729, 98809,99086, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!color) 
    return;
  color = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2731,98874,98901) || new Flotr.parseColor(color));
  var dist = 0;
  var x = 3;
  while (-1 < --x) {
    dist += (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2735,98995,99045) || Math.abs(this[this.rgba[x]] - color[this.rgba[x]]));
  }
  return dist;
}, toString: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2740, 99105,99271, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (this.a >= 1.0) ? 'rgb(' + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2741,99162,99196) || [this.r, this.g, this.b].join(',')) + ')' : 'rgba(' + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2741,99215,99257) || [this.r, this.g, this.b, this.a].join(',')) + ')';
}}));
Flotr.Color.lookupColors = {aqua: [0, 255, 255], azure: [240, 255, 255], beige: [245, 245, 220], black: [0, 0, 0], blue: [0, 0, 255], brown: [165, 42, 42], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgrey: [169, 169, 169], darkgreen: [0, 100, 0], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkviolet: [148, 0, 211], fuchsia: [255, 0, 255], gold: [255, 215, 0], green: [0, 128, 0], indigo: [75, 0, 130], khaki: [240, 230, 140], lightblue: [173, 216, 230], lightcyan: [224, 255, 255], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightyellow: [255, 255, 224], lime: [0, 255, 0], magenta: [255, 0, 255], maroon: [128, 0, 0], navy: [0, 0, 128], olive: [128, 128, 0], orange: [255, 165, 0], pink: [255, 192, 203], purple: [128, 0, 128], violet: [128, 0, 128], red: [255, 0, 0], silver: [192, 192, 192], white: [255, 255, 255], yellow: [255, 255, 0]};
Flotr.Date = {format: function(d, format) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2793, 100597,102145, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!d) 
    return;
  var leftPad = function(n) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 2796, 100670,100775, (typeof arguments === 'object' ? arguments.callee.caller : null));

  n = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2797,100702,100714) || n.toString());
  return n.length == 1 ? "0" + n : n;
};
  var r = [];
  var escape = false;
  for (var i = 0; i < format.length; ++i) {
    var c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2805,100903,100919) || format.charAt(i));
    if (escape) {
      switch (c) {
        case 'h':
          c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2810,101032,101058) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2810,101032,101047) || d.getUTCHours()).toString());
          break;
        case 'H':
          c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2813,101140,101164) || leftPad((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2813,101148,101163) || d.getUTCHours())));
          break;
        case 'M':
          c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2816,101246,101272) || leftPad((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2816,101254,101271) || d.getUTCMinutes())));
          break;
        case 'S':
          c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2819,101354,101380) || leftPad((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2819,101362,101379) || d.getUTCSeconds())));
          break;
        case 'd':
          c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2822,101462,101487) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2822,101462,101476) || d.getUTCDate()).toString());
          break;
        case 'm':
          c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2825,101570,101601) || ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2825,101570,101585) || d.getUTCMonth()) + 1).toString());
          break;
        case 'y':
          c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2828,101683,101712) || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2828,101683,101701) || d.getUTCFullYear()).toString());
          break;
        case 'b':
          c = Flotr.Date.monthNames[(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2831,101816,101831) || d.getUTCMonth())];
          break;
      }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2834,101898,101907) ||       r.push(c));
      escape = false;
    } else {
      if (c == "%") 
        escape = true;
      else 
        (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2840,102074,102083) ||       r.push(c));
    }
  }
  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",2843,102127,102137) || r.join(""));
}, timeUnits: {"second": 1000, "minute": 60 * 1000, "hour": 60 * 60 * 1000, "day": 24 * 60 * 60 * 1000, "month": 30 * 24 * 60 * 60 * 1000, "year": 365.2425 * 24 * 60 * 60 * 1000}, spec: [[1, "second"], [2, "second"], [5, "second"], [10, "second"], [30, "second"], [1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"], [30, "minute"], [1, "hour"], [2, "hour"], [4, "hour"], [8, "hour"], [12, "hour"], [1, "day"], [2, "day"], [3, "day"], [0.25, "month"], [0.5, "month"], [1, "month"], [2, "month"], [3, "month"], [6, "month"], [1, "year"]], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]};
