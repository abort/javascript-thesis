window.parent._wrap_staticMeasuredFunctions['flotr-0.2.0-alpha.js'] = 104;
window.parent._wrap_staticMeasuredCalls['flotr-0.2.0-alpha.js'] =830;
var Flotr = {version: '0.2.0-alpha', author: 'Bas Wenneker', website: 'http://www.solutoire.com', _registeredTypes: {'lines': 'drawSeriesLines', 'points': 'drawSeriesPoints', 'bars': 'drawSeriesBars', 'candles': 'drawSeriesCandles', 'pie': 'drawSeriesPie'}, register: function(type, functionName) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1, 268,352, (typeof arguments === 'object' ? arguments.callee.caller : null));

  Flotr._registeredTypes[type] = functionName + '';
}, draw: function(el, data, options, _GraphKlass_) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 3, 360,497, (typeof arguments === 'object' ? arguments.callee.caller : null));

  _GraphKlass_ = _GraphKlass_ || Flotr.Graph;
  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",5,459,494,_GraphKlass_,false,false) || window.parent._wrap_popCallStack(new _GraphKlass_(el, data, options)));
}, getSeries: function(data) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 6, 510,802, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",7,536,799,data.collect,false,false) || window.parent._wrap_popCallStack(data.collect(function(serie) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 7, 549,798, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var i, serie = (serie.data) ? (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",8,599,618,Object.clone,false,false) || window.parent._wrap_popCallStack(Object.clone(serie))) : {'data': serie};
  for (i = serie.data.length - 1; i > -1; --i) {
    serie.data[i][1] = (serie.data[i][1] === null ? null : (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",10,746,774,parseFloat,false,false) || window.parent._wrap_popCallStack(parseFloat(serie.data[i][1]))));
  }
  return serie;
})));
}, merge: function(src, dest) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 14, 811,1117, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var result = dest || {};
  for (var i in src) {
    result[i] = (src[i] != null && typeof (src[i]) == 'object' && !(src[i].constructor == Array || src[i].constructor == RegExp) && !(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",17,1016,1040,Object.isElement,false,false) || window.parent._wrap_popCallStack(Object.isElement(src[i])))) ? (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",17,1044,1072,Flotr.merge,false,false) || window.parent._wrap_popCallStack(Flotr.merge(src[i], dest[i]))) : result[i] = src[i];
  }
  return result;
}, getTickSize: function(noTicks, min, max, decimals) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 20, 1132,1512, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var delta = (max - min) / noTicks;
  var magn = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",22,1222,1247,Flotr.getMagnitude,false,false) || window.parent._wrap_popCallStack(Flotr.getMagnitude(delta)));
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
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 34, 1536,1572, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return val + '';
}, defaultTrackFormatter: function(obj) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 36, 1597,1657, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return '(' + obj.x + ', ' + obj.y + ')';
}, defaultPieLabelFormatter: function(slice) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 38, 1685,1754, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",39,1713,1745,null,false,false) || window.parent._wrap_popCallStack((slice.fraction * 100).toFixed(2))) + '%';
}, getMagnitude: function(x) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 40, 1770,1845, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",41,1793,1842,Math.pow,false,false) || window.parent._wrap_popCallStack(Math.pow(10, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",41,1806,1841,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",41,1817,1828,Math.log,false,false) || window.parent._wrap_popCallStack(Math.log(x))) / Math.LN10))))));
}, toPixel: function(val) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 42, 1856,1905, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",43,1881,1896,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor(val))) + 0.5;
}, toRad: function(angle) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 44, 1914,1968, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return -angle * (Math.PI / 180);
}, parseColor: function(str) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 46, 1982,3628, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (str instanceof Flotr.Color) 
    return str;
  var result, Color = Flotr.Color;
  if ((result = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",50,2100,2175,null,false,false) || window.parent._wrap_popCallStack(/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(str))))) 
    return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",51,2190,2262,Color,false,false) || window.parent._wrap_popCallStack(new Color((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",51,2200,2219,parseInt,false,false) || window.parent._wrap_popCallStack(parseInt(result[1]))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",51,2221,2240,parseInt,false,false) || window.parent._wrap_popCallStack(parseInt(result[2]))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",51,2242,2261,parseInt,false,false) || window.parent._wrap_popCallStack(parseInt(result[3]))))));
  if ((result = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",52,2280,2384,null,false,false) || window.parent._wrap_popCallStack(/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))))) 
    return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",53,2399,2494,Color,false,false) || window.parent._wrap_popCallStack(new Color((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",53,2409,2428,parseInt,false,false) || window.parent._wrap_popCallStack(parseInt(result[1]))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",53,2430,2449,parseInt,false,false) || window.parent._wrap_popCallStack(parseInt(result[2]))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",53,2451,2470,parseInt,false,false) || window.parent._wrap_popCallStack(parseInt(result[3]))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",53,2472,2493,parseFloat,false,false) || window.parent._wrap_popCallStack(parseFloat(result[4]))))));
  if ((result = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",54,2512,2620,null,false,false) || window.parent._wrap_popCallStack(/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(str))))) 
    return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",55,2635,2734,Color,false,false) || window.parent._wrap_popCallStack(new Color((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",55,2645,2666,parseFloat,false,false) || window.parent._wrap_popCallStack(parseFloat(result[1]))) * 2.55, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",55,2675,2696,parseFloat,false,false) || window.parent._wrap_popCallStack(parseFloat(result[2]))) * 2.55, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",55,2705,2726,parseFloat,false,false) || window.parent._wrap_popCallStack(parseFloat(result[3]))) * 2.55)));
  if ((result = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",56,2752,2889,null,false,false) || window.parent._wrap_popCallStack(/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))))) 
    return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",57,2904,3026,Color,false,false) || window.parent._wrap_popCallStack(new Color((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",57,2914,2935,parseFloat,false,false) || window.parent._wrap_popCallStack(parseFloat(result[1]))) * 2.55, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",57,2944,2965,parseFloat,false,false) || window.parent._wrap_popCallStack(parseFloat(result[2]))) * 2.55, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",57,2974,2995,parseFloat,false,false) || window.parent._wrap_popCallStack(parseFloat(result[3]))) * 2.55, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",57,3004,3025,parseFloat,false,false) || window.parent._wrap_popCallStack(parseFloat(result[4]))))));
  if ((result = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",58,3044,3105,null,false,false) || window.parent._wrap_popCallStack(/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(str))))) 
    return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",59,3120,3204,Color,false,false) || window.parent._wrap_popCallStack(new Color((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",59,3130,3153,parseInt,false,false) || window.parent._wrap_popCallStack(parseInt(result[1], 16))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",59,3155,3178,parseInt,false,false) || window.parent._wrap_popCallStack(parseInt(result[2], 16))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",59,3180,3203,parseInt,false,false) || window.parent._wrap_popCallStack(parseInt(result[3], 16))))));
  if ((result = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",60,3222,3274,null,false,false) || window.parent._wrap_popCallStack(/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(str))))) 
    return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",61,3289,3409,Color,false,false) || window.parent._wrap_popCallStack(new Color((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",61,3299,3334,parseInt,false,false) || window.parent._wrap_popCallStack(parseInt(result[1] + result[1], 16))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",61,3336,3371,parseInt,false,false) || window.parent._wrap_popCallStack(parseInt(result[2] + result[2], 16))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",61,3373,3408,parseInt,false,false) || window.parent._wrap_popCallStack(parseInt(result[3] + result[3], 16))))));
  var name = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",62,3424,3449,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",62,3424,3435,str.strip,false,false) || window.parent._wrap_popCallStack(str.strip())).toLowerCase()));
  if (name == 'transparent') {
    return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",64,3493,3520,Color,false,false) || window.parent._wrap_popCallStack(new Color(255, 255, 255, 0)));
  }
  return ((result = Color.lookupColors[name])) ? (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",66,3575,3617,Color,false,false) || window.parent._wrap_popCallStack(new Color(result[0], result[1], result[2]))) : false;
}, extractColor: function(element) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 67, 3644,3954, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var color;
  do {
    color = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",70,3696,3746,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",70,3696,3732,element.getStyle,false,false) || window.parent._wrap_popCallStack(element.getStyle('background-color'))).toLowerCase()));
    if (!(color == '' || color == 'transparent')) 
      break;
    element = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",73,3826,3839,element.up,false,false) || window.parent._wrap_popCallStack(element.up(0)));
  } while (!(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",74,3853,3886,element.nodeName.match,false,false) || window.parent._wrap_popCallStack(element.nodeName.match(/^body$/i))));
  return (color == 'rgba(0, 0, 0, 0)') ? 'transparent' : color;
}};
Flotr.Graph = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",77,3971,72754,Class.create,true,false) || window.parent._wrap_popCallStack(Class.create({initialize: function(el, data, options) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 77, 3997,4778, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.el = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",78,4039,4044,$,false,false) || window.parent._wrap_popCallStack($(el)));
  if (!this.el) 
    throw 'The target container doesn\'t exist';
  this.data = data;
  this.series = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",82,4148,4169,Flotr.getSeries,false,false) || window.parent._wrap_popCallStack(Flotr.getSeries(data)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",83,4173,4197,this.setOptions,false,false) || window.parent._wrap_popCallStack(  this.setOptions(options)));
  this.lastMousePos = {pageX: null, pageY: null};
  this.selection = {first: {x: -1, y: -1}, second: {x: -1, y: -1}};
  this.prevSelection = null;
  this.selectionInterval = null;
  this.ignoreClick = false;
  this.prevHit = null;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",90,4432,4454,this.constructCanvas,false,false) || window.parent._wrap_popCallStack(  this.constructCanvas()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",91,4458,4475,this.initEvents,false,false) || window.parent._wrap_popCallStack(  this.initEvents()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",92,4479,4500,this.findDataRanges,false,false) || window.parent._wrap_popCallStack(  this.findDataRanges()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",93,4504,4536,this.calculateTicks,false,false) || window.parent._wrap_popCallStack(  this.calculateTicks(this.axes.x)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",94,4540,4573,this.calculateTicks,false,false) || window.parent._wrap_popCallStack(  this.calculateTicks(this.axes.x2)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",95,4577,4609,this.calculateTicks,false,false) || window.parent._wrap_popCallStack(  this.calculateTicks(this.axes.y)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",96,4613,4646,this.calculateTicks,false,false) || window.parent._wrap_popCallStack(  this.calculateTicks(this.axes.y2)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",97,4650,4673,this.calculateSpacing,false,false) || window.parent._wrap_popCallStack(  this.calculateSpacing()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",98,4677,4688,this.draw,false,false) || window.parent._wrap_popCallStack(  this.draw()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",99,4692,4711,this.insertLegend,false,false) || window.parent._wrap_popCallStack(  this.insertLegend()));
  if (this.options.spreadsheet.show) 
    (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",101,4755,4775,this.constructTabs,false,false) || window.parent._wrap_popCallStack(  this.constructTabs()));
}, setOptions: function(opts) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 102, 4792,9319, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var options = {colors: ['#00A8F0', '#C0D800', '#CB4B4B', '#4DA74D', '#9440ED'], title: null, subtitle: null, legend: {show: true, noColumns: 1, labelFormatter: Prototype.K, labelBoxBorderColor: '#CCCCCC', labelBoxWidth: 14, labelBoxHeight: 10, labelBoxMargin: 5, container: null, position: 'nw', margin: 5, backgroundColor: null, backgroundOpacity: 0.85}, xaxis: {ticks: null, showLabels: true, labelsAngle: 0, title: null, titleAngle: 0, noTicks: 5, tickFormatter: Flotr.defaultTickFormatter, tickDecimals: null, min: null, max: null, autoscaleMargin: 0, color: null}, x2axis: {}, yaxis: {ticks: null, showLabels: true, labelsAngle: 0, title: null, titleAngle: 90, noTicks: 5, tickFormatter: Flotr.defaultTickFormatter, tickDecimals: null, min: null, max: null, autoscaleMargin: 0, color: null}, y2axis: {titleAngle: 270}, points: {show: false, radius: 3, lineWidth: 2, fill: true, fillColor: '#FFFFFF', fillOpacity: 0.4}, lines: {show: false, lineWidth: 2, fill: false, fillColor: null, fillOpacity: 0.4}, bars: {show: false, lineWidth: 2, barWidth: 1, fill: true, fillColor: null, fillOpacity: 0.4, horizontal: false, stacked: false}, candles: {show: false, lineWidth: 1, wickLineWidth: 1, candleWidth: 0.6, fill: true, upFillColor: '#00A8F0', downFillColor: '#CB4B4B', fillOpacity: 0.5, barcharts: false}, pie: {show: false, lineWidth: 1, fill: true, fillColor: null, fillOpacity: 0.6, explode: 6, sizeRatio: 0.6, startAngle: Math.PI / 4, labelFormatter: Flotr.defaultPieLabelFormatter, pie3D: false, pie3DviewAngle: (Math.PI / 2 * 0.8), pie3DspliceThickness: 20}, grid: {color: '#545454', backgroundColor: null, tickColor: '#DDDDDD', labelMargin: 3, verticalLines: true, horizontalLines: true, outlineWidth: 2}, selection: {mode: null, color: '#B6D9FF', fps: 20}, mouse: {track: false, position: 'se', relative: false, trackFormatter: Flotr.defaultTrackFormatter, margin: 5, lineColor: '#FF3F19', trackDecimals: 1, sensibility: 2, radius: 3}, shadowSize: 4, defaultType: 'lines', HtmlText: true, fontSize: 7.5, spreadsheet: {show: false, tabGraphLabel: 'Graph', tabDataLabel: 'Data', toolbarDownload: 'Download CSV', toolbarSelectAll: 'Select all'}};
  options.x2axis = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",104,6986,7044,Object.extend,false,false) || window.parent._wrap_popCallStack(Object.extend((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",104,7000,7027,Object.clone,false,false) || window.parent._wrap_popCallStack(Object.clone(options.xaxis))), options.x2axis)));
  options.y2axis = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",105,7065,7123,Object.extend,false,false) || window.parent._wrap_popCallStack(Object.extend((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",105,7079,7106,Object.clone,false,false) || window.parent._wrap_popCallStack(Object.clone(options.yaxis))), options.y2axis)));
  this.options = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",106,7142,7176,Flotr.merge,false,false) || window.parent._wrap_popCallStack(Flotr.merge((opts || {}), options)));
  this.axes = {x: {options: this.options.xaxis, n: 1}, x2: {options: this.options.x2axis, n: 2}, y: {options: this.options.yaxis, n: 1}, y2: {options: this.options.y2axis, n: 2}};
  var assignedColors = [], colors = [], ln = this.series.length, neededColors = this.series.length, oc = this.options.colors, usedColors = [], variation = 0, c, i, j, s, tooClose;
  for (i = neededColors - 1; i > -1; --i) {
    c = this.series[i].color;
    if (c != null) {
      --neededColors;
      if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",113,7665,7683,Object.isNumber,false,false) || window.parent._wrap_popCallStack(Object.isNumber(c)))) 
        (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",114,7694,7716,assignedColors.push,false,false) || window.parent._wrap_popCallStack(      assignedColors.push(c)));
      else 
        (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",116,7738,7774,usedColors.push,false,false) || window.parent._wrap_popCallStack(      usedColors.push((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",116,7754,7773,Flotr.parseColor,false,false) || window.parent._wrap_popCallStack(Flotr.parseColor(c))))));
    }
  }
  for (i = assignedColors.length - 1; i > -1; --i) 
    neededColors = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",120,7857,7902,Math.max,false,false) || window.parent._wrap_popCallStack(Math.max(neededColors, assignedColors[i] + 1)));
  for (i = 0; colors.length < neededColors; ) {
    c = (oc.length == i) ? (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",122,7979,8009,Flotr.Color,false,false) || window.parent._wrap_popCallStack(new Flotr.Color(100, 100, 100))) : (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",122,8012,8035,Flotr.parseColor,false,false) || window.parent._wrap_popCallStack(Flotr.parseColor(oc[i])));
    var sign = variation % 2 == 1 ? -1 : 1;
    var factor = 1 + sign * (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",124,8109,8133,Math.ceil,false,false) || window.parent._wrap_popCallStack(Math.ceil(variation / 2))) * 0.2;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",125,8145,8176,c.scale,false,false) || window.parent._wrap_popCallStack(    c.scale(factor, factor, factor)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",126,8182,8196,colors.push,false,false) || window.parent._wrap_popCallStack(    colors.push(c)));
    if (++i >= oc.length) {
      i = 0;
      ++variation;
    }
  }
  for (i = 0 , j = 0; i < ln; ++i) {
    s = this.series[i];
    if (s.color == null) {
      s.color = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",135,8372,8394,null,false,false) || window.parent._wrap_popCallStack(colors[j++].toString()));
    } else if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",136,8411,8435,Object.isNumber,false,false) || window.parent._wrap_popCallStack(Object.isNumber(s.color)))) {
      s.color = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",137,8455,8481,colors[s.color].toString,false,false) || window.parent._wrap_popCallStack(colors[s.color].toString()));
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
    s.lines = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",151,8819,8875,Object.extend,false,false) || window.parent._wrap_popCallStack(Object.extend((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",151,8833,8865,Object.clone,false,false) || window.parent._wrap_popCallStack(Object.clone(this.options.lines))), s.lines)));
    s.points = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",152,8892,8950,Object.extend,false,false) || window.parent._wrap_popCallStack(Object.extend((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",152,8906,8939,Object.clone,false,false) || window.parent._wrap_popCallStack(Object.clone(this.options.points))), s.points)));
    s.bars = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",153,8965,9019,Object.extend,false,false) || window.parent._wrap_popCallStack(Object.extend((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",153,8979,9010,Object.clone,false,false) || window.parent._wrap_popCallStack(Object.clone(this.options.bars))), s.bars)));
    s.candles = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",154,9037,9097,Object.extend,false,false) || window.parent._wrap_popCallStack(Object.extend((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",154,9051,9085,Object.clone,false,false) || window.parent._wrap_popCallStack(Object.clone(this.options.candles))), s.candles)));
    s.pie = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",155,9111,9163,Object.extend,false,false) || window.parent._wrap_popCallStack(Object.extend((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",155,9125,9155,Object.clone,false,false) || window.parent._wrap_popCallStack(Object.clone(this.options.pie))), s.pie)));
    s.mouse = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",156,9179,9235,Object.extend,false,false) || window.parent._wrap_popCallStack(Object.extend((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",156,9193,9225,Object.clone,false,false) || window.parent._wrap_popCallStack(Object.clone(this.options.mouse))), s.mouse)));
    if (s.shadowSize == null) 
      s.shadowSize = this.options.shadowSize;
  }
}, constructCanvas: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 160, 9338,10769, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var el = this.el, size, c, oc;
  this.canvas = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",162,9400,9426,el.select,false,false) || window.parent._wrap_popCallStack(el.select('.flotr-canvas')))[0];
  this.overlay = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",163,9448,9475,el.select,false,false) || window.parent._wrap_popCallStack(el.select('.flotr-overlay')))[0];
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",164,9482,9517,null,false,false) || window.parent._wrap_popCallStack(  (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",164,9482,9500,el.childElements,false,false) || window.parent._wrap_popCallStack(el.childElements())).invoke('remove')));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",165,9521,9575,el.setStyle,false,false) || window.parent._wrap_popCallStack(  el.setStyle({position: 'relative', cursor: 'default'})));
  this.canvasWidth = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",166,9598,9611,el.getWidth,false,false) || window.parent._wrap_popCallStack(el.getWidth()));
  this.canvasHeight = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",167,9635,9649,el.getHeight,false,false) || window.parent._wrap_popCallStack(el.getHeight()));
  size = {'width': this.canvasWidth, 'height': this.canvasHeight};
  if (this.canvasWidth <= 0 || this.canvasHeight <= 0) {
    throw 'Invalid dimensions for plot, width = ' + this.canvasWidth + ', height = ' + this.canvasHeight;
  }
  if (!this.canvas) {
    c = this.canvas = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",173,9929,9956,Element,false,false) || window.parent._wrap_popCallStack(new Element('canvas', size)));
    c.className = 'flotr-canvas';
    c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",175,10000,10064,c.writeAttribute,false,false) || window.parent._wrap_popCallStack(c.writeAttribute('style', 'position:absolute;left:0px;top:0px;')));
  } else {
    c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",177,10085,10117,this.canvas.writeAttribute,false,false) || window.parent._wrap_popCallStack(this.canvas.writeAttribute(size)));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",179,10125,10137,el.insert,false,false) || window.parent._wrap_popCallStack(  el.insert(c)));
  if (Prototype.Browser.IE) {
    c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",181,10177,10217,window.G_vmlCanvasManager.initElement,false,false) || window.parent._wrap_popCallStack(window.G_vmlCanvasManager.initElement(c)));
  }
  this.ctx = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",183,10236,10254,c.getContext,false,false) || window.parent._wrap_popCallStack(c.getContext('2d')));
  if (!this.overlay) {
    oc = this.overlay = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",185,10303,10330,Element,false,false) || window.parent._wrap_popCallStack(new Element('canvas', size)));
    oc.className = 'flotr-overlay';
    oc = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",187,10377,10442,oc.writeAttribute,false,false) || window.parent._wrap_popCallStack(oc.writeAttribute('style', 'position:absolute;left:0px;top:0px;')));
  } else {
    oc = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",189,10464,10497,this.overlay.writeAttribute,false,false) || window.parent._wrap_popCallStack(this.overlay.writeAttribute(size)));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",191,10505,10518,el.insert,false,false) || window.parent._wrap_popCallStack(  el.insert(oc)));
  if (Prototype.Browser.IE) {
    oc = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",193,10559,10600,window.G_vmlCanvasManager.initElement,false,false) || window.parent._wrap_popCallStack(window.G_vmlCanvasManager.initElement(oc)));
  }
  this.octx = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",195,10620,10639,oc.getContext,false,false) || window.parent._wrap_popCallStack(oc.getContext('2d')));
  if (window.CanvasText) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",197,10672,10699,CanvasText.enable,false,false) || window.parent._wrap_popCallStack(    CanvasText.enable(this.ctx)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",198,10705,10733,CanvasText.enable,false,false) || window.parent._wrap_popCallStack(    CanvasText.enable(this.octx)));
    this.textEnabled = true;
  }
}, getTextDimensions: function(text, canvasStyle, HtmlStyle, className) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 201, 10790,11349, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!text) 
    return {width: 0, height: 0};
  if (!this.options.HtmlText && this.textEnabled) {
    var bounds = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",205,10959,11000,this.ctx.getTextBounds,false,false) || window.parent._wrap_popCallStack(this.ctx.getTextBounds(text, canvasStyle)));
    return {width: bounds.width + 2, height: bounds.height + 6};
  } else {
    var dummyDiv = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",208,11097,11264,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",208,11097,11237,this.el.insert,false,false) || window.parent._wrap_popCallStack(this.el.insert('<div style="position:absolute;top:-10000px;' + HtmlStyle + '" class="' + className + ' flotr-dummy-div">' + text + '</div>'))).select(".flotr-dummy-div")))[0];
    dim = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",209,11279,11303,dummyDiv.getDimensions,false,false) || window.parent._wrap_popCallStack(dummyDiv.getDimensions()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",210,11309,11326,dummyDiv.remove,false,false) || window.parent._wrap_popCallStack(    dummyDiv.remove()));
    return dim;
  }
}, loadDataGrid: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 213, 11365,11831, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (this.seriesData) 
    return this.seriesData;
  var s = this.series;
  var dg = [];
  for (i = 0; i < s.length; ++i) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",219,11507,11743,s[i].data.each,false,false) || window.parent._wrap_popCallStack(    s[i].data.each(function(v) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 219, 11522,11742, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var x = v[0], y = v[1];
  if (r = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",221,11572,11620,dg.find,false,false) || window.parent._wrap_popCallStack(dg.find(function(row) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 221, 11580,11619, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return row[0] == x;
})))) {
    r[i + 1] = y;
  } else {
    var newRow = [];
    newRow[0] = x;
    newRow[i + 1] = y;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",229,11720,11735,dg.push,false,false) || window.parent._wrap_popCallStack(    dg.push(newRow)));
  }
})));
  }
  dg = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",233,11756,11797,dg.sortBy,false,false) || window.parent._wrap_popCallStack(dg.sortBy(function(v) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 233, 11766,11796, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return v[0];
})));
  return this.seriesData = dg;
}, showTab: function(tabName, onComplete) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 237, 11842,12485, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var elementsClassNames = 'canvas, .flotr-labels, .flotr-legend, .flotr-legend-bg, .flotr-title, .flotr-subtitle';
  switch (tabName) {
    case 'graph':
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",241,12035,12060,null,false,false) || window.parent._wrap_popCallStack(      (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",241,12035,12053,this.datagrid.up,false,false) || window.parent._wrap_popCallStack(this.datagrid.up())).hide()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",242,12068,12117,null,false,false) || window.parent._wrap_popCallStack(      (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",242,12068,12102,this.el.select,false,false) || window.parent._wrap_popCallStack(this.el.select(elementsClassNames))).invoke('show')));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",243,12125,12167,this.tabs.data.removeClassName,false,false) || window.parent._wrap_popCallStack(      this.tabs.data.removeClassName('selected')));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",244,12175,12215,this.tabs.graph.addClassName,false,false) || window.parent._wrap_popCallStack(      this.tabs.graph.addClassName('selected')));
      break;
    case 'data':
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",247,12253,12277,this.constructDataGrid,false,false) || window.parent._wrap_popCallStack(      this.constructDataGrid()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",248,12285,12310,null,false,false) || window.parent._wrap_popCallStack(      (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",248,12285,12303,this.datagrid.up,false,false) || window.parent._wrap_popCallStack(this.datagrid.up())).show()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",249,12318,12367,null,false,false) || window.parent._wrap_popCallStack(      (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",249,12318,12352,this.el.select,false,false) || window.parent._wrap_popCallStack(this.el.select(elementsClassNames))).invoke('hide')));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",250,12375,12414,this.tabs.data.addClassName,false,false) || window.parent._wrap_popCallStack(      this.tabs.data.addClassName('selected')));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",251,12422,12465,this.tabs.graph.removeClassName,false,false) || window.parent._wrap_popCallStack(      this.tabs.graph.removeClassName('selected')));
      break;
  }
}, constructTabs: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 254, 12502,13335, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var tabsContainer = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",255,12537,12691,Element,false,false) || window.parent._wrap_popCallStack(new Element('div', {className: 'flotr-tabs-group', style: 'position:absolute;left:0px;top:' + this.canvasHeight + 'px;width:' + this.canvasWidth + 'px;'})));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",256,12695,12734,this.el.insert,false,false) || window.parent._wrap_popCallStack(  this.el.insert({bottom: tabsContainer})));
  this.tabs = {graph: (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",257,12758,12880,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",257,12758,12833,Element,false,false) || window.parent._wrap_popCallStack(new Element('div', {className: 'flotr-tab selected', style: 'float:left;'}))).update(this.options.spreadsheet.tabGraphLabel))), data: (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",257,12888,13000,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",257,12888,12954,Element,false,false) || window.parent._wrap_popCallStack(new Element('div', {className: 'flotr-tab', style: 'float:left;'}))).update(this.options.spreadsheet.tabDataLabel)))};
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",258,13005,13065,null,false,false) || window.parent._wrap_popCallStack(  (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",258,13005,13042,tabsContainer.insert,false,false) || window.parent._wrap_popCallStack(tabsContainer.insert(this.tabs.graph))).insert(this.tabs.data)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",259,13069,13154,this.el.setStyle,false,false) || window.parent._wrap_popCallStack(  this.el.setStyle({height: this.canvasHeight + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",259,13115,13141,this.tabs.data.getHeight,false,false) || window.parent._wrap_popCallStack(this.tabs.data.getHeight())) + 2 + 'px'})));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",260,13158,13244,this.tabs.graph.observe,false,false) || window.parent._wrap_popCallStack(  this.tabs.graph.observe('click', (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",262,13192,13243,null,false,false) || window.parent._wrap_popCallStack((function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 260, 13192,13231, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",261,13207,13228,this.showTab,false,false) || window.parent._wrap_popCallStack(  this.showTab('graph')));
}).bind(this))))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",263,13248,13332,this.tabs.data.observe,false,false) || window.parent._wrap_popCallStack(  this.tabs.data.observe('click', (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",265,13281,13331,null,false,false) || window.parent._wrap_popCallStack((function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 263, 13281,13319, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",264,13296,13316,this.showTab,false,false) || window.parent._wrap_popCallStack(  this.showTab('data')));
}).bind(this))))));
}, constructDataGrid: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 266, 13356,15909, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (this.datagrid) 
    return this.datagrid;
  var i, j, s = this.series, datagrid = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",269,13457,13476,this.loadDataGrid,false,false) || window.parent._wrap_popCallStack(this.loadDataGrid()));
  var t = this.datagrid = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",270,13504,13579,Element,false,false) || window.parent._wrap_popCallStack(new Element('table', {className: 'flotr-datagrid', style: 'height:100px;'})));
  var colgroup = ['<colgroup><col />'];
  var html = ['<tr class="first-row">'];
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",273,13664,13692,html.push,false,false) || window.parent._wrap_popCallStack(  html.push('<th>&nbsp;</th>')));
  for (i = 0; i < s.length; ++i) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",275,13733,13818,html.push,false,false) || window.parent._wrap_popCallStack(    html.push('<th scope="col">' + (s[i].label || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",275,13779,13806,String.fromCharCode,false,false) || window.parent._wrap_popCallStack(String.fromCharCode(65 + i)))) + '</th>')));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",276,13824,13848,colgroup.push,false,false) || window.parent._wrap_popCallStack(    colgroup.push('<col />')));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",278,13856,13874,html.push,false,false) || window.parent._wrap_popCallStack(  html.push('</tr>')));
  for (j = 0; j < datagrid.length; ++j) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",280,13922,13939,html.push,false,false) || window.parent._wrap_popCallStack(    html.push('<tr>')));
    for (i = 0; i < s.length + 1; ++i) {
      var tag = 'td';
      var content = (datagrid[j][i] != null ? (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",283,14050,14085,Math.round,false,false) || window.parent._wrap_popCallStack(Math.round(datagrid[j][i] * 100000))) / 100000 : '');
      if (i == 0) {
        tag = 'th';
        var label;
        if (this.options.xaxis.ticks) {
          var tick = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",288,14222,14301,this.options.xaxis.ticks.find,false,false) || window.parent._wrap_popCallStack(this.options.xaxis.ticks.find(function(x) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 288, 14252,14300, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return x[0] == datagrid[j][i];
})));
          if (tick) 
            label = tick[1];
        } else {
          label = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",294,14388,14429,this.options.xaxis.tickFormatter,false,false) || window.parent._wrap_popCallStack(this.options.xaxis.tickFormatter(content)));
        }
        if (label) 
          content = label;
      }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",299,14502,14595,html.push,false,false) || window.parent._wrap_popCallStack(      html.push('<' + tag + (tag == 'th' ? ' scope="row"' : '') + '>' + content + '</' + tag + '>')));
    }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",301,14607,14625,html.push,false,false) || window.parent._wrap_popCallStack(    html.push('</tr>')));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",303,14633,14661,colgroup.push,false,false) || window.parent._wrap_popCallStack(  colgroup.push('</colgroup>')));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",304,14665,14708,t.update,false,false) || window.parent._wrap_popCallStack(  t.update((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",304,14674,14691,colgroup.join,false,false) || window.parent._wrap_popCallStack(colgroup.join(''))) + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",304,14694,14707,html.join,false,false) || window.parent._wrap_popCallStack(html.join(''))))));
  if (!Prototype.Browser.IE) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",306,14745,15163,null,false,false) || window.parent._wrap_popCallStack(    (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",306,14745,14759,t.select,false,false) || window.parent._wrap_popCallStack(t.select('td'))).each(function(td) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 306, 14765,15162, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",307,14782,15021,td.observe,false,false) || window.parent._wrap_popCallStack(  td.observe('mouseover', function(e) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 307, 14806,15020, (typeof arguments === 'object' ? arguments.callee.caller : null));

  td = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",308,14827,14838,e.element,false,false) || window.parent._wrap_popCallStack(e.element()));
  var siblings = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",309,14857,14878,td.previousSiblings,false,false) || window.parent._wrap_popCallStack(td.previousSiblings()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",310,14882,14950,null,false,false) || window.parent._wrap_popCallStack(  (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",310,14882,14907,t.select,false,false) || window.parent._wrap_popCallStack(t.select('th[scope=col]')))[siblings.length - 1].addClassName('hover')));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",311,14954,15017,null,false,false) || window.parent._wrap_popCallStack(  (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",311,14954,14978,t.select,false,false) || window.parent._wrap_popCallStack(t.select('colgroup col')))[siblings.length].addClassName('hover')));
})));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",313,15025,15159,td.observe,false,false) || window.parent._wrap_popCallStack(  td.observe('mouseout', function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 313, 15048,15158, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",314,15063,15155,null,false,false) || window.parent._wrap_popCallStack(  (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",314,15063,15103,t.select,false,false) || window.parent._wrap_popCallStack(t.select('colgroup col.hover, th.hover'))).each(function(e) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 314, 15109,15154, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",315,15125,15151,e.removeClassName,false,false) || window.parent._wrap_popCallStack(  e.removeClassName('hover')));
})));
})));
})));
  }
  var toolbar = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",320,15185,15619,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",320,15185,15429,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",320,15185,15242,Element,false,false) || window.parent._wrap_popCallStack(new Element('div', {className: 'flotr-datagrid-toolbar'}))).insert((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",320,15250,15428,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",320,15250,15382,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",320,15250,15333,Element,false,false) || window.parent._wrap_popCallStack(new Element('button', {type: 'button', className: 'flotr-datagrid-toolbar-button'}))).update(this.options.spreadsheet.toolbarDownload))).observe('click', (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",320,15400,15427,this.downloadCSV.bind,false,false) || window.parent._wrap_popCallStack(this.downloadCSV.bind(this))))))))).insert((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",320,15437,15618,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",320,15437,15570,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",320,15437,15520,Element,false,false) || window.parent._wrap_popCallStack(new Element('button', {type: 'button', className: 'flotr-datagrid-toolbar-button'}))).update(this.options.spreadsheet.toolbarSelectAll))).observe('click', (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",320,15588,15617,this.selectAllData.bind,false,false) || window.parent._wrap_popCallStack(this.selectAllData.bind(this)))))))));
  var container = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",321,15639,15808,Element,false,false) || window.parent._wrap_popCallStack(new Element('div', {className: 'flotr-datagrid-container', style: 'left:0px;top:0px;width:' + this.canvasWidth + 'px;height:' + this.canvasHeight + 'px;overflow:auto;'})));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",322,15812,15837,container.insert,false,false) || window.parent._wrap_popCallStack(  container.insert(toolbar)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",323,15841,15865,t.wrap,false,false) || window.parent._wrap_popCallStack(  t.wrap((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",323,15848,15864,container.hide,false,false) || window.parent._wrap_popCallStack(container.hide())))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",324,15869,15894,this.el.insert,false,false) || window.parent._wrap_popCallStack(  this.el.insert(container)));
  return t;
}, selectAllData: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 326, 15926,16589, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (this.tabs) {
    var selection, range, doc, win, node = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",328,16001,16025,this.constructDataGrid,false,false) || window.parent._wrap_popCallStack(this.constructDataGrid()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",329,16031,16051,this.showTab,false,false) || window.parent._wrap_popCallStack(    this.showTab('data')));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",340,16058,16541,null,false,false) || window.parent._wrap_popCallStack(    (function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 330, 16058,16532, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if ((doc = node.ownerDocument) && (win = doc.defaultView) && win.getSelection && doc.createRange && (selection = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",331,16186,16207,window.getSelection,false,false) || window.parent._wrap_popCallStack(window.getSelection()))) && selection.removeAllRanges) {
    range = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",332,16253,16270,doc.createRange,false,false) || window.parent._wrap_popCallStack(doc.createRange()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",333,16276,16298,range.selectNode,false,false) || window.parent._wrap_popCallStack(    range.selectNode(node)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",334,16304,16331,selection.removeAllRanges,false,false) || window.parent._wrap_popCallStack(    selection.removeAllRanges()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",335,16337,16362,selection.addRange,false,false) || window.parent._wrap_popCallStack(    selection.addRange(range)));
  } else if (document.body && document.body.createTextRange && (range = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",336,16436,16467,document.body.createTextRange,false,false) || window.parent._wrap_popCallStack(document.body.createTextRange())))) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",337,16476,16505,range.moveToElementText,false,false) || window.parent._wrap_popCallStack(    range.moveToElementText(node)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",338,16511,16525,range.select,false,false) || window.parent._wrap_popCallStack(    range.select()));
  }
}).defer()));
    return true;
  } else 
    return false;
}, downloadCSV: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 344, 16604,17355, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var i, csv = '"x"', series = this.series, dg = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",345,16666,16685,this.loadDataGrid,false,false) || window.parent._wrap_popCallStack(this.loadDataGrid()));
  for (i = 0; i < series.length; ++i) {
    csv += '%09"' + (series[i].label || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",347,16767,16794,String.fromCharCode,false,false) || window.parent._wrap_popCallStack(String.fromCharCode(65 + i)))) + '"';
  }
  csv += "%0D%0A";
  for (i = 0; i < dg.length; ++i) {
    if (this.options.xaxis.ticks) {
      var tick = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",352,16915,16988,this.options.xaxis.ticks.find,false,false) || window.parent._wrap_popCallStack(this.options.xaxis.ticks.find(function(x) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 352, 16945,16987, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return x[0] == dg[i][0];
})));
      if (tick) 
        dg[i][0] = tick[1];
    } else {
      dg[i][0] = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",358,17065,17107,this.options.xaxis.tickFormatter,false,false) || window.parent._wrap_popCallStack(this.options.xaxis.tickFormatter(dg[i][0])));
    }
    csv += (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",360,17126,17143,dg[i].join,false,false) || window.parent._wrap_popCallStack(dg[i].join('%09'))) + "%0D%0A";
  }
  if (Prototype.Browser.IE) {
    csv = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",363,17200,17257,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",363,17200,17239,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",363,17200,17221,csv.gsub,false,false) || window.parent._wrap_popCallStack(csv.gsub('%09', '\t'))).gsub('%0A', '\n'))).gsub('%0D', '\r')));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",364,17263,17296,null,false,false) || window.parent._wrap_popCallStack(    (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",364,17263,17276,window.open,false,false) || window.parent._wrap_popCallStack(window.open())).document.write(csv)));
  } else {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",366,17313,17348,window.open,false,false) || window.parent._wrap_popCallStack(    window.open('data:text/csv,' + csv)));
  }
}, initEvents: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 368, 17369,17620, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",369,17384,17412,this.overlay.stopObserving,false,false) || window.parent._wrap_popCallStack(  this.overlay.stopObserving()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",370,17416,17483,this.overlay.observe,false,false) || window.parent._wrap_popCallStack(  this.overlay.observe('mousedown', (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",370,17450,17482,this.mouseDownHandler.bind,false,false) || window.parent._wrap_popCallStack(this.mouseDownHandler.bind(this))))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",371,17487,17554,this.overlay.observe,false,false) || window.parent._wrap_popCallStack(  this.overlay.observe('mousemove', (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",371,17521,17553,this.mouseMoveHandler.bind,false,false) || window.parent._wrap_popCallStack(this.mouseMoveHandler.bind(this))))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",372,17558,17617,this.overlay.observe,false,false) || window.parent._wrap_popCallStack(  this.overlay.observe('click', (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",372,17588,17616,this.clickHandler.bind,false,false) || window.parent._wrap_popCallStack(this.clickHandler.bind(this))))));
}, findDataRanges: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 373, 17638,19103, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",413,18752,18774,this.findXAxesValues,false,false) || window.parent._wrap_popCallStack(  this.findXAxesValues()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",414,18778,18802,this.calculateRange,false,false) || window.parent._wrap_popCallStack(  this.calculateRange(a.x)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",415,18806,18841,this.extendXRangeIfNeededByBar,false,false) || window.parent._wrap_popCallStack(  this.extendXRangeIfNeededByBar(a.x)));
  if (a.x2.used) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",417,18866,18891,this.calculateRange,false,false) || window.parent._wrap_popCallStack(    this.calculateRange(a.x2)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",418,18897,18933,this.extendXRangeIfNeededByBar,false,false) || window.parent._wrap_popCallStack(    this.extendXRangeIfNeededByBar(a.x2)));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",420,18941,18965,this.calculateRange,false,false) || window.parent._wrap_popCallStack(  this.calculateRange(a.y)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",421,18969,19004,this.extendYRangeIfNeededByBar,false,false) || window.parent._wrap_popCallStack(  this.extendYRangeIfNeededByBar(a.y)));
  if (a.y2.used) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",423,19029,19054,this.calculateRange,false,false) || window.parent._wrap_popCallStack(    this.calculateRange(a.y2)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",424,19060,19096,this.extendYRangeIfNeededByBar,false,false) || window.parent._wrap_popCallStack(    this.extendYRangeIfNeededByBar(a.y2)));
  }
}, calculateRange: function(axis) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 426, 19121,19965, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var o = axis.options, min = o.min != null ? o.min : axis.datamin, max = o.max != null ? o.max : axis.datamax, margin;
  if (max - min == 0.0) {
    var widen = (max == 0.0) ? 1.0 : 0.01;
    min -= widen;
    max += widen;
  }
  axis.tickSize = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",433,19385,19439,Flotr.getTickSize,false,false) || window.parent._wrap_popCallStack(Flotr.getTickSize(o.noTicks, min, max, o.tickDecimals)));
  if (o.min == null) {
    margin = o.autoscaleMargin;
    if (margin != 0) {
      min -= axis.tickSize * margin;
      if (min < 0 && axis.datamin >= 0) 
        min = 0;
      min = axis.tickSize * (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",440,19642,19673,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor(min / axis.tickSize)));
    }
  }
  if (o.max == null) {
    margin = o.autoscaleMargin;
    if (margin != 0) {
      max += axis.tickSize * margin;
      if (max > 0 && axis.datamax <= 0) 
        max = 0;
      max = axis.tickSize * (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",449,19886,19916,Math.ceil,false,false) || window.parent._wrap_popCallStack(Math.ceil(max / axis.tickSize)));
    }
  }
  axis.min = min;
  axis.max = max;
}, extendXRangeIfNeededByBar: function(axis) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 454, 19994,20953, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
            newmax = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",474,20823,20855,Math.max,false,false) || window.parent._wrap_popCallStack(Math.max(stackedSums[j], newmax)));
          }
        }
      }
    }
    axis.lastSerie = lastSerie;
    axis.max = newmax;
  }
}, extendYRangeIfNeededByBar: function(axis) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 482, 20982,21936, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
            newmax = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",502,21806,21838,Math.max,false,false) || window.parent._wrap_popCallStack(Math.max(stackedSums[j], newmax)));
          }
        }
      }
    }
    axis.lastSerie = lastSerie;
    axis.max = newmax;
  }
}, findXAxesValues: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 510, 21955,22184, (typeof arguments === 'object' ? arguments.callee.caller : null));

  for (i = this.series.length - 1; i > -1; --i) {
    s = this.series[i];
    s.xaxis.values = s.xaxis.values || [];
    for (j = s.data.length - 1; j > -1; --j) {
      s.xaxis.values[s.data[j][0]] = {};
    }
  }
}, calculateTicks: function(axis) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 518, 22202,23184, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var o = axis.options, i, v;
  axis.ticks = [];
  if (o.ticks) {
    var ticks = o.ticks, t, label;
    if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",523,22328,22352,Object.isFunction,false,false) || window.parent._wrap_popCallStack(Object.isFunction(ticks)))) {
      ticks = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",524,22370,22407,ticks,false,false) || window.parent._wrap_popCallStack(ticks({min: axis.min, max: axis.max})));
    }
    for (i = 0; i < ticks.length; ++i) {
      t = ticks[i];
      if (typeof (t) == 'object') {
        v = t[0];
        label = (t.length > 1) ? t[1] : (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",530,22570,22588,o.tickFormatter,false,false) || window.parent._wrap_popCallStack(o.tickFormatter(v)));
      } else {
        v = t;
        label = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",533,22636,22654,o.tickFormatter,false,false) || window.parent._wrap_popCallStack(o.tickFormatter(v)));
      }
      axis.ticks[i] = {v: v, label: label};
    }
  } else {
    var start = axis.tickSize * (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",538,22757,22792,Math.ceil,false,false) || window.parent._wrap_popCallStack(Math.ceil(axis.min / axis.tickSize))), decimals;
    for (i = 0; start + i * axis.tickSize <= axis.max; ++i) {
      v = start + i * axis.tickSize;
      decimals = o.tickDecimals;
      if (decimals == null) 
        decimals = 1 - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",543,22988,23035,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",543,22999,23022,Math.log,false,false) || window.parent._wrap_popCallStack(Math.log(axis.tickSize))) / Math.LN10)));
      if (decimals < 0) 
        decimals = 0;
      v = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",546,23094,23113,v.toFixed,false,false) || window.parent._wrap_popCallStack(v.toFixed(decimals)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",547,23121,23171,axis.ticks.push,false,false) || window.parent._wrap_popCallStack(      axis.ticks.push({v: v, label: (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",547,23151,23169,o.tickFormatter,false,false) || window.parent._wrap_popCallStack(o.tickFormatter(v)))})));
    }
  }
}, calculateSpacing: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 550, 23204,25635, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var a = this.axes, options = this.options, series = this.series, margin = options.grid.labelMargin, x = a.x, x2 = a.x2, y = a.y, y2 = a.y2, maxOutset = 2, i, j, l, dim;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",552,23390,24011,[x, x2, y, y2].each,false,false) || window.parent._wrap_popCallStack(  [x, x2, y, y2].each(function(axis) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 552, 23410,24004, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var maxLabel = '';
  if (axis.options.showLabels) {
    for (i = 0; i < axis.ticks.length; ++i) {
      l = axis.ticks[i].label.length;
      if (l > maxLabel.length) {
        maxLabel = axis.ticks[i].label;
      }
    }
  }
  axis.maxLabel = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",562,23674,23820,this.getTextDimensions,false,false) || window.parent._wrap_popCallStack(this.getTextDimensions(maxLabel, {size: options.fontSize, angle: (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",562,23739,23776,Flotr.toRad,false,false) || window.parent._wrap_popCallStack(Flotr.toRad(axis.options.labelsAngle)))}, 'font-size:smaller;', 'flotr-grid-label')));
  axis.titleSize = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",563,23841,24001,this.getTextDimensions,false,false) || window.parent._wrap_popCallStack(this.getTextDimensions(axis.options.title, {size: options.fontSize * 1.2, angle: (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",563,23922,23958,Flotr.toRad,false,false) || window.parent._wrap_popCallStack(Flotr.toRad(axis.options.titleAngle)))}, 'font-weight:bold;', 'flotr-axis-title')));
}, this)));
  dim = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",565,24021,24140,this.getTextDimensions,false,false) || window.parent._wrap_popCallStack(this.getTextDimensions(options.title, {size: options.fontSize * 1.5}, 'font-size:1em;font-weight:bold;', 'flotr-title')));
  this.titleHeight = dim.height;
  dim = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",567,24183,24289,this.getTextDimensions,false,false) || window.parent._wrap_popCallStack(this.getTextDimensions(options.subtitle, {size: options.fontSize}, 'font-size:smaller;', 'flotr-subtitle')));
  this.subtitleHeight = dim.height;
  if (options.show) {
    maxOutset = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",570,24365,24438,Math.max,false,false) || window.parent._wrap_popCallStack(Math.max(maxOutset, options.points.radius + options.points.lineWidth / 2)));
  }
  for (j = 0; j < options.length; ++j) {
    if (series[j].points.show) {
      maxOutset = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",574,24536,24613,Math.max,false,false) || window.parent._wrap_popCallStack(Math.max(maxOutset, series[j].points.radius + series[j].points.lineWidth / 2)));
    }
  }
  var p = this.plotOffset = {left: 0, right: 0, top: 0, bottom: 0};
  p.left = p.right = p.top = p.bottom = maxOutset;
  p.bottom += (x.options.showLabels ? (x.maxLabel.height + margin) : 0) + (x.options.title ? (x.titleSize.height + margin) : 0);
  p.top += (x2.options.showLabels ? (x2.maxLabel.height + margin) : 0) + (x2.options.title ? (x2.titleSize.height + margin) : 0) + this.subtitleHeight + this.titleHeight;
  p.left += (y.options.showLabels ? (y.maxLabel.width + margin) : 0) + (y.options.title ? (y.titleSize.width + margin) : 0);
  p.right += (y2.options.showLabels ? (y2.maxLabel.width + margin) : 0) + (y2.options.title ? (y2.titleSize.width + margin) : 0);
  p.top = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",583,25309,25326,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor(p.top)));
  this.plotWidth = this.canvasWidth - p.left - p.right;
  this.plotHeight = this.canvasHeight - p.bottom - p.top;
  x.scale = this.plotWidth / (x.max - x.min);
  x2.scale = this.plotWidth / (x2.max - x2.min);
  y.scale = this.plotHeight / (y.max - y.min);
  y2.scale = this.plotHeight / (y2.max - y2.min);
}, draw: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 590, 25643,25996, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",591,25658,25673,this.drawGrid,false,false) || window.parent._wrap_popCallStack(  this.drawGrid()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",592,25677,25694,this.drawLabels,false,false) || window.parent._wrap_popCallStack(  this.drawLabels()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",593,25698,25715,this.drawTitles,false,false) || window.parent._wrap_popCallStack(  this.drawTitles()));
  if (this.series.length) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",595,25749,25802,this.el.fire,false,false) || window.parent._wrap_popCallStack(    this.el.fire('flotr:beforedraw', [this.series, this])));
    for (var i = 0; i < this.series.length; i++) {
      if (!this.series[i].hide) 
        (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",598,25896,25927,this.drawSeries,false,false) || window.parent._wrap_popCallStack(      this.drawSeries(this.series[i])));
    }
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",601,25941,25993,this.el.fire,false,false) || window.parent._wrap_popCallStack(  this.el.fire('flotr:afterdraw', [this.series, this])));
}, tHoz: function(x, axis) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 602, 26004,26093, (typeof arguments === 'object' ? arguments.callee.caller : null));

  axis = axis || this.axes.x;
  return (x - axis.min) * axis.scale;
}, tVert: function(y, axis) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 605, 26102,26209, (typeof arguments === 'object' ? arguments.callee.caller : null));

  axis = axis || this.axes.y;
  return this.plotHeight - (y - axis.min) * axis.scale;
}, drawGrid: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 608, 26221,27850, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var v, o = this.options, ctx = this.ctx;
  if (o.grid.verticalLines || o.grid.horizontalLines) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",611,26337,26406,this.el.fire,false,false) || window.parent._wrap_popCallStack(    this.el.fire('flotr:beforegrid', [this.axes.x, this.axes.y, o, this])));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",613,26414,26424,ctx.save,false,false) || window.parent._wrap_popCallStack(  ctx.save()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",614,26428,26484,ctx.translate,false,false) || window.parent._wrap_popCallStack(  ctx.translate(this.plotOffset.left, this.plotOffset.top)));
  if (o.grid.backgroundColor != null) {
    ctx.fillStyle = o.grid.backgroundColor;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",617,26574,26625,ctx.fillRect,false,false) || window.parent._wrap_popCallStack(    ctx.fillRect(0, 0, this.plotWidth, this.plotHeight)));
  }
  ctx.lineWidth = 1;
  ctx.strokeStyle = o.grid.tickColor;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",621,26692,26707,ctx.beginPath,false,false) || window.parent._wrap_popCallStack(  ctx.beginPath()));
  if (o.grid.verticalLines) {
    for (var i = 0; i < this.axes.x.ticks.length; ++i) {
      v = this.axes.x.ticks[i].v;
      if ((v == this.axes.x.min || v == this.axes.x.max) && o.grid.outlineWidth != 0) 
        continue;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",627,26941,27000,ctx.moveTo,false,false) || window.parent._wrap_popCallStack(      ctx.moveTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",627,26952,26976,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",627,26963,26975,this.tHoz,false,false) || window.parent._wrap_popCallStack(this.tHoz(v)))))) + ctx.lineWidth / 2, 0)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",628,27008,27081,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(      ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",628,27019,27043,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",628,27030,27042,this.tHoz,false,false) || window.parent._wrap_popCallStack(this.tHoz(v)))))) + ctx.lineWidth / 2, this.plotHeight)));
    }
  }
  if (o.grid.horizontalLines) {
    for (var j = 0; j < this.axes.y.ticks.length; ++j) {
      v = this.axes.y.ticks[j].v;
      if ((v == this.axes.y.min || v == this.axes.y.max) && o.grid.outlineWidth != 0) 
        continue;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",636,27327,27387,ctx.moveTo,false,false) || window.parent._wrap_popCallStack(      ctx.moveTo(0, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",636,27341,27366,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",636,27352,27365,this.tVert,false,false) || window.parent._wrap_popCallStack(this.tVert(v)))))) + ctx.lineWidth / 2)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",637,27395,27468,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(      ctx.lineTo(this.plotWidth, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",637,27422,27447,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",637,27433,27446,this.tVert,false,false) || window.parent._wrap_popCallStack(this.tVert(v)))))) + ctx.lineWidth / 2)));
    }
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",640,27482,27494,ctx.stroke,false,false) || window.parent._wrap_popCallStack(  ctx.stroke()));
  if (o.grid.outlineWidth != 0) {
    ctx.lineWidth = o.grid.outlineWidth;
    ctx.strokeStyle = o.grid.color;
    ctx.lineJoin = 'round';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",645,27639,27692,ctx.strokeRect,false,false) || window.parent._wrap_popCallStack(    ctx.strokeRect(0, 0, this.plotWidth, this.plotHeight)));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",647,27700,27713,ctx.restore,false,false) || window.parent._wrap_popCallStack(  ctx.restore()));
  if (o.grid.verticalLines || o.grid.horizontalLines) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",649,27775,27843,this.el.fire,false,false) || window.parent._wrap_popCallStack(    this.el.fire('flotr:aftergrid', [this.axes.x, this.axes.y, o, this])));
  }
}, drawLabels: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 651, 27864,33671, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
      style.angle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",667,28512,28549,Flotr.toRad,false,false) || window.parent._wrap_popCallStack(Flotr.toRad(axis.options.labelsAngle)));
      style.halign = 'c';
      style.valign = 't';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",670,28609,28754,ctx.drawText,false,false) || window.parent._wrap_popCallStack(      ctx.drawText(tick.label, this.plotOffset.left + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",670,28657,28680,this.tHoz,false,false) || window.parent._wrap_popCallStack(this.tHoz(tick.v, axis))), this.plotOffset.top + this.plotHeight + options.grid.labelMargin, style)));
    }
    axis = a.x2;
    style.color = axis.options.color || options.grid.color;
    for (i = 0; i < axis.ticks.length && axis.options.showLabels && axis.used; ++i) {
      tick = axis.ticks[i];
      if (!tick.label || tick.label.length == 0) 
        continue;
      style.angle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",678,29041,29078,Flotr.toRad,false,false) || window.parent._wrap_popCallStack(Flotr.toRad(axis.options.labelsAngle)));
      style.halign = 'c';
      style.valign = 'b';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",681,29138,29265,ctx.drawText,false,false) || window.parent._wrap_popCallStack(      ctx.drawText(tick.label, this.plotOffset.left + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",681,29186,29209,this.tHoz,false,false) || window.parent._wrap_popCallStack(this.tHoz(tick.v, axis))), this.plotOffset.top + options.grid.labelMargin, style)));
    }
    axis = a.y;
    style.color = axis.options.color || options.grid.color;
    for (i = 0; i < axis.ticks.length && axis.options.showLabels && axis.used; ++i) {
      tick = axis.ticks[i];
      if (!tick.label || tick.label.length == 0) 
        continue;
      style.angle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",689,29551,29588,Flotr.toRad,false,false) || window.parent._wrap_popCallStack(Flotr.toRad(axis.options.labelsAngle)));
      style.halign = 'r';
      style.valign = 'm';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",692,29648,29776,ctx.drawText,false,false) || window.parent._wrap_popCallStack(      ctx.drawText(tick.label, this.plotOffset.left - options.grid.labelMargin, this.plotOffset.top + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",692,29744,29768,this.tVert,false,false) || window.parent._wrap_popCallStack(this.tVert(tick.v, axis))), style)));
    }
    axis = a.y2;
    style.color = axis.options.color || options.grid.color;
    for (i = 0; i < axis.ticks.length && axis.options.showLabels && axis.used; ++i) {
      tick = axis.ticks[i];
      if (!tick.label || tick.label.length == 0) 
        continue;
      style.angle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",700,30063,30100,Flotr.toRad,false,false) || window.parent._wrap_popCallStack(Flotr.toRad(axis.options.labelsAngle)));
      style.halign = 'l';
      style.valign = 'm';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",703,30160,30305,ctx.drawText,false,false) || window.parent._wrap_popCallStack(      ctx.drawText(tick.label, this.plotOffset.left + this.plotWidth + options.grid.labelMargin, this.plotOffset.top + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",703,30273,30297,this.tVert,false,false) || window.parent._wrap_popCallStack(this.tVert(tick.v, axis))), style)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",704,30313,30323,ctx.save,false,false) || window.parent._wrap_popCallStack(      ctx.save()));
      ctx.strokeStyle = style.color;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",706,30368,30383,ctx.beginPath,false,false) || window.parent._wrap_popCallStack(      ctx.beginPath()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",707,30391,30492,ctx.moveTo,false,false) || window.parent._wrap_popCallStack(      ctx.moveTo(this.plotOffset.left + this.plotWidth - 8, this.plotOffset.top + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",707,30467,30491,this.tVert,false,false) || window.parent._wrap_popCallStack(this.tVert(tick.v, axis))))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",708,30500,30597,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(      ctx.lineTo(this.plotOffset.left + this.plotWidth, this.plotOffset.top + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",708,30572,30596,this.tVert,false,false) || window.parent._wrap_popCallStack(this.tVert(tick.v, axis))))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",709,30605,30617,ctx.stroke,false,false) || window.parent._wrap_popCallStack(      ctx.stroke()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",710,30625,30638,ctx.restore,false,false) || window.parent._wrap_popCallStack(      ctx.restore()));
    }
  } else if (a.x.options.showLabels || a.x2.options.showLabels || a.y.options.showLabels || a.y2.options.showLabels) {
    html = ['<div style="font-size:smaller;color:' + options.grid.color + ';" class="flotr-labels">'];
    axis = a.x;
    if (axis.options.showLabels) {
      for (i = 0; i < axis.ticks.length; ++i) {
        tick = axis.ticks[i];
        if (!tick.label || tick.label.length == 0) 
          continue;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",720,31077,31449,html.push,false,false) || window.parent._wrap_popCallStack(        html.push('<div style="position:absolute;top:' + (this.plotOffset.top + this.plotHeight + options.grid.labelMargin) + 'px;left:' + (this.plotOffset.left + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",720,31232,31255,this.tHoz,false,false) || window.parent._wrap_popCallStack(this.tHoz(tick.v, axis))) - xBoxWidth / 2) + 'px;width:' + xBoxWidth + 'px;text-align:center;' + (axis.options.color ? ('color:' + axis.options.color + ';') : '') + '" class="flotr-grid-label">' + tick.label + '</div>')));
      }
    }
    axis = a.x2;
    if (axis.options.showLabels && axis.used) {
      for (i = 0; i < axis.ticks.length; ++i) {
        tick = axis.ticks[i];
        if (!tick.label || tick.label.length == 0) 
          continue;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",729,31688,32065,html.push,false,false) || window.parent._wrap_popCallStack(        html.push('<div style="position:absolute;top:' + (this.plotOffset.top - options.grid.labelMargin - axis.maxLabel.height) + 'px;left:' + (this.plotOffset.left + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",729,31848,31871,this.tHoz,false,false) || window.parent._wrap_popCallStack(this.tHoz(tick.v, axis))) - xBoxWidth / 2) + 'px;width:' + xBoxWidth + 'px;text-align:center;' + (axis.options.color ? ('color:' + axis.options.color + ';') : '') + '" class="flotr-grid-label">' + tick.label + '</div>')));
      }
    }
    axis = a.y;
    if (axis.options.showLabels) {
      for (i = 0; i < axis.ticks.length; ++i) {
        tick = axis.ticks[i];
        if (!tick.label || tick.label.length == 0) 
          continue;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",738,32290,32637,html.push,false,false) || window.parent._wrap_popCallStack(        html.push('<div style="position:absolute;top:' + (this.plotOffset.top + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",738,32362,32386,this.tVert,false,false) || window.parent._wrap_popCallStack(this.tVert(tick.v, axis))) - axis.maxLabel.height / 2) + 'px;left:0;width:' + (this.plotOffset.left - options.grid.labelMargin) + 'px;text-align:right;' + (axis.options.color ? ('color:' + axis.options.color + ';') : '') + '" class="flotr-grid-label">' + tick.label + '</div>')));
      }
    }
    axis = a.y2;
    if (axis.options.showLabels && axis.used) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",743,32724,32734,ctx.save,false,false) || window.parent._wrap_popCallStack(      ctx.save()));
      ctx.strokeStyle = axis.options.color || options.grid.color;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",745,32808,32823,ctx.beginPath,false,false) || window.parent._wrap_popCallStack(      ctx.beginPath()));
      for (i = 0; i < axis.ticks.length; ++i) {
        tick = axis.ticks[i];
        if (!tick.label || tick.label.length == 0) 
          continue;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",750,32983,33331,html.push,false,false) || window.parent._wrap_popCallStack(        html.push('<div style="position:absolute;top:' + (this.plotOffset.top + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",750,33055,33079,this.tVert,false,false) || window.parent._wrap_popCallStack(this.tVert(tick.v, axis))) - axis.maxLabel.height / 2) + 'px;right:0;width:' + (this.plotOffset.right - options.grid.labelMargin) + 'px;text-align:left;' + (axis.options.color ? ('color:' + axis.options.color + ';') : '') + '" class="flotr-grid-label">' + tick.label + '</div>')));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",751,33341,33442,ctx.moveTo,false,false) || window.parent._wrap_popCallStack(        ctx.moveTo(this.plotOffset.left + this.plotWidth - 8, this.plotOffset.top + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",751,33417,33441,this.tVert,false,false) || window.parent._wrap_popCallStack(this.tVert(tick.v, axis))))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",752,33452,33549,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(        ctx.lineTo(this.plotOffset.left + this.plotWidth, this.plotOffset.top + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",752,33524,33548,this.tVert,false,false) || window.parent._wrap_popCallStack(this.tVert(tick.v, axis))))));
      }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",754,33565,33577,ctx.stroke,false,false) || window.parent._wrap_popCallStack(      ctx.stroke()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",755,33585,33598,ctx.restore,false,false) || window.parent._wrap_popCallStack(      ctx.restore()));
    }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",757,33610,33629,html.push,false,false) || window.parent._wrap_popCallStack(    html.push('</div>')));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",758,33635,33664,this.el.insert,false,false) || window.parent._wrap_popCallStack(    this.el.insert((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",758,33650,33663,html.join,false,false) || window.parent._wrap_popCallStack(html.join(''))))));
  }
}, drawTitles: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 760, 33685,37523, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var html, options = this.options, margin = options.grid.labelMargin, ctx = this.ctx, a = this.axes;
  if (!options.HtmlText && this.textEnabled) {
    var style = {size: options.fontSize, color: options.grid.color, halign: 'c'};
    if (options.subtitle) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",765,33963,34087,ctx.drawText,false,false) || window.parent._wrap_popCallStack(      ctx.drawText(options.subtitle, this.plotOffset.left + this.plotWidth / 2, this.titleHeight + this.subtitleHeight - 2, style)));
    }
    style.weight = 1.5;
    style.size *= 1.5;
    if (options.title) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",770,34173,34272,ctx.drawText,false,false) || window.parent._wrap_popCallStack(      ctx.drawText(options.title, this.plotOffset.left + this.plotWidth / 2, this.titleHeight - 2, style)));
    }
    style.weight = 1.8;
    style.size *= 0.8;
    style.adjustAlign = true;
    if (a.x.options.title && a.x.used) {
      style.halign = 'c';
      style.valign = 't';
      style.angle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",778,34470,34505,Flotr.toRad,false,false) || window.parent._wrap_popCallStack(Flotr.toRad(a.x.options.titleAngle)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",779,34513,34668,ctx.drawText,false,false) || window.parent._wrap_popCallStack(      ctx.drawText(a.x.options.title, this.plotOffset.left + this.plotWidth / 2, this.plotOffset.top + a.x.maxLabel.height + this.plotHeight + 2 * margin, style)));
    }
    if (a.x2.options.title && a.x2.used) {
      style.halign = 'c';
      style.valign = 'b';
      style.angle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",784,34791,34827,Flotr.toRad,false,false) || window.parent._wrap_popCallStack(Flotr.toRad(a.x2.options.titleAngle)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",785,34835,34974,ctx.drawText,false,false) || window.parent._wrap_popCallStack(      ctx.drawText(a.x2.options.title, this.plotOffset.left + this.plotWidth / 2, this.plotOffset.top - a.x2.maxLabel.height - 2 * margin, style)));
    }
    if (a.y.options.title && a.y.used) {
      style.halign = 'r';
      style.valign = 'm';
      style.angle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",790,35095,35130,Flotr.toRad,false,false) || window.parent._wrap_popCallStack(Flotr.toRad(a.y.options.titleAngle)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",791,35138,35275,ctx.drawText,false,false) || window.parent._wrap_popCallStack(      ctx.drawText(a.y.options.title, this.plotOffset.left - a.y.maxLabel.width - 2 * margin, this.plotOffset.top + this.plotHeight / 2, style)));
    }
    if (a.y2.options.title && a.y2.used) {
      style.halign = 'l';
      style.valign = 'm';
      style.angle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",796,35398,35434,Flotr.toRad,false,false) || window.parent._wrap_popCallStack(Flotr.toRad(a.y2.options.titleAngle)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",797,35442,35598,ctx.drawText,false,false) || window.parent._wrap_popCallStack(      ctx.drawText(a.y2.options.title, this.plotOffset.left + this.plotWidth + a.y2.maxLabel.width + 2 * margin, this.plotOffset.top + this.plotHeight / 2, style)));
    }
  } else {
    html = ['<div style="color:' + options.grid.color + ';" class="flotr-titles">'];
    if (options.title) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",802,35733,35947,html.push,false,false) || window.parent._wrap_popCallStack(      html.push('<div style="position:absolute;top:0;left:' + this.plotOffset.left + 'px;font-size:1em;font-weight:bold;text-align:center;width:' + this.plotWidth + 'px;" class="flotr-title">' + options.title + '</div>')));
    }
    if (options.subtitle) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",805,35989,36221,html.push,false,false) || window.parent._wrap_popCallStack(      html.push('<div style="position:absolute;top:' + this.titleHeight + 'px;left:' + this.plotOffset.left + 'px;font-size:smaller;text-align:center;width:' + this.plotWidth + 'px;" class="flotr-subtitle">' + options.subtitle + '</div>')));
    }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",807,36233,36252,html.push,false,false) || window.parent._wrap_popCallStack(    html.push('</div>')));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",808,36258,36327,html.push,false,false) || window.parent._wrap_popCallStack(    html.push('<div class="flotr-axis-title" style="font-weight:bold;">')));
    if (a.x.options.title && a.x.used) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",810,36376,36666,html.push,false,false) || window.parent._wrap_popCallStack(      html.push('<div style="position:absolute;top:' + (this.plotOffset.top + this.plotHeight + options.grid.labelMargin + a.x.titleSize.height) + 'px;left:' + this.plotOffset.left + 'px;width:' + this.plotWidth + 'px;text-align:center;" class="flotr-axis-title">' + a.x.options.title + '</div>')));
    }
    if (a.x2.options.title && a.x2.used) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",813,36723,36916,html.push,false,false) || window.parent._wrap_popCallStack(      html.push('<div style="position:absolute;top:0;left:' + this.plotOffset.left + 'px;width:' + this.plotWidth + 'px;text-align:center;" class="flotr-axis-title">' + a.x2.options.title + '</div>')));
    }
    if (a.y.options.title && a.y.used) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",816,36971,37181,html.push,false,false) || window.parent._wrap_popCallStack(      html.push('<div style="position:absolute;top:' + (this.plotOffset.top + this.plotHeight / 2 - a.y.titleSize.height / 2) + 'px;left:0;text-align:right;" class="flotr-axis-title">' + a.y.options.title + '</div>')));
    }
    if (a.y2.options.title && a.y2.used) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",819,37238,37450,html.push,false,false) || window.parent._wrap_popCallStack(      html.push('<div style="position:absolute;top:' + (this.plotOffset.top + this.plotHeight / 2 - a.y.titleSize.height / 2) + 'px;right:0;text-align:right;" class="flotr-axis-title">' + a.y2.options.title + '</div>')));
    }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",821,37462,37481,html.push,false,false) || window.parent._wrap_popCallStack(    html.push('</div>')));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",822,37487,37516,this.el.insert,false,false) || window.parent._wrap_popCallStack(    this.el.insert((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",822,37502,37515,html.join,false,false) || window.parent._wrap_popCallStack(html.join(''))))));
  }
}, drawSeries: function(series) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 824, 37537,37870, (typeof arguments === 'object' ? arguments.callee.caller : null));

  series = series || this.series;
  var drawn = false;
  for (var type in Flotr._registeredTypes) {
    if (series[type] && series[type].show) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",829,37707,37749,null,false,false) || window.parent._wrap_popCallStack(      this[Flotr._registeredTypes[type]](series)));
      drawn = true;
    }
  }
  if (!drawn) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",834,37801,37863,null,false,false) || window.parent._wrap_popCallStack(    this[Flotr._registeredTypes[this.options.defaultType]](series)));
  }
}, plotLine: function(series, offset) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 836, 37882,39887, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var ctx = this.ctx, xa = series.xaxis, ya = series.yaxis, tHoz = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",837,37976,37996,this.tHoz.bind,false,false) || window.parent._wrap_popCallStack(this.tHoz.bind(this))), tVert = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",837,38006,38027,this.tVert.bind,false,false) || window.parent._wrap_popCallStack(this.tVert.bind(this))), data = series.data;
  if (data.length < 2) 
    return;
  var prevx = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",840,38099,38119,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(data[0][0], xa))), prevy = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",840,38129,38150,tVert,false,false) || window.parent._wrap_popCallStack(tVert(data[0][1], ya))) + offset;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",841,38163,38178,ctx.beginPath,false,false) || window.parent._wrap_popCallStack(  ctx.beginPath()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",842,38182,38206,ctx.moveTo,false,false) || window.parent._wrap_popCallStack(  ctx.moveTo(prevx, prevy)));
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
    if (prevx != (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",891,39668,39680,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(x1, xa))) || prevy != (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",891,39693,39706,tVert,false,false) || window.parent._wrap_popCallStack(tVert(y1, ya))) + offset) 
      (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",892,39724,39772,ctx.moveTo,false,false) || window.parent._wrap_popCallStack(    ctx.moveTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",892,39735,39747,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(x1, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",892,39749,39762,tVert,false,false) || window.parent._wrap_popCallStack(tVert(y1, ya))) + offset)));
    prevx = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",893,39786,39798,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(x2, xa)));
    prevy = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",894,39812,39825,tVert,false,false) || window.parent._wrap_popCallStack(tVert(y2, ya))) + offset;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",895,39840,39864,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(    ctx.lineTo(prevx, prevy)));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",897,39872,39884,ctx.stroke,false,false) || window.parent._wrap_popCallStack(  ctx.stroke()));
}, plotLineArea: function(series, offset) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 898, 39903,42624, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var data = series.data;
  if (data.length < 2) 
    return;
  var top, lastX = 0, ctx = this.ctx, xa = series.xaxis, ya = series.yaxis, tHoz = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",902,40075,40095,this.tHoz.bind,false,false) || window.parent._wrap_popCallStack(this.tHoz.bind(this))), tVert = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",902,40105,40126,this.tVert.bind,false,false) || window.parent._wrap_popCallStack(this.tVert.bind(this))), bottom = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",902,40137,40174,Math.min,false,false) || window.parent._wrap_popCallStack(Math.min((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",902,40146,40165,Math.max,false,false) || window.parent._wrap_popCallStack(Math.max(0, ya.min))), ya.max))), first = true;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",903,40192,40207,ctx.beginPath,false,false) || window.parent._wrap_popCallStack(  ctx.beginPath()));
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
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",929,40992,41044,ctx.moveTo,false,false) || window.parent._wrap_popCallStack(      ctx.moveTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",929,41003,41015,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(x1, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",929,41017,41034,tVert,false,false) || window.parent._wrap_popCallStack(tVert(bottom, ya))) + offset)));
      first = false;
    }
    if (y1 >= ya.max && y2 >= ya.max) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",933,41119,41171,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(      ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",933,41130,41142,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(x1, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",933,41144,41161,tVert,false,false) || window.parent._wrap_popCallStack(tVert(ya.max, ya))) + offset)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",934,41179,41231,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(      ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",934,41190,41202,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(x2, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",934,41204,41221,tVert,false,false) || window.parent._wrap_popCallStack(tVert(ya.max, ya))) + offset)));
      continue;
    } else if (y1 <= ya.min && y2 <= ya.min) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",937,41302,41354,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(      ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",937,41313,41325,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(x1, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",937,41327,41344,tVert,false,false) || window.parent._wrap_popCallStack(tVert(ya.min, ya))) + offset)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",938,41362,41414,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(      ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",938,41373,41385,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(x2, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",938,41387,41404,tVert,false,false) || window.parent._wrap_popCallStack(tVert(ya.min, ya))) + offset)));
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
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",958,42077,42129,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(      ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",958,42088,42103,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(x1old, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",958,42105,42119,tVert,false,false) || window.parent._wrap_popCallStack(tVert(top, ya))) + offset)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",959,42137,42186,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(      ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",959,42148,42160,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(x1, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",959,42162,42176,tVert,false,false) || window.parent._wrap_popCallStack(tVert(top, ya))) + offset)));
    }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",961,42198,42246,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(    ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",961,42209,42221,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(x1, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",961,42223,42236,tVert,false,false) || window.parent._wrap_popCallStack(tVert(y1, ya))) + offset)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",962,42252,42300,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(    ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",962,42263,42275,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(x2, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",962,42277,42290,tVert,false,false) || window.parent._wrap_popCallStack(tVert(y2, ya))) + offset)));
    if (x2 != x2old) {
      top = (y2 <= ya.min) ? ya.min : ya.max;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",965,42377,42429,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(      ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",965,42388,42403,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(x2old, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",965,42405,42419,tVert,false,false) || window.parent._wrap_popCallStack(tVert(top, ya))) + offset)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",966,42437,42486,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(      ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",966,42448,42460,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(x2, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",966,42462,42476,tVert,false,false) || window.parent._wrap_popCallStack(tVert(top, ya))) + offset)));
    }
    lastX = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",968,42506,42525,Math.max,false,false) || window.parent._wrap_popCallStack(Math.max(x2, x2old)));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",970,42533,42588,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(  ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",970,42544,42559,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(lastX, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",970,42561,42578,tVert,false,false) || window.parent._wrap_popCallStack(tVert(bottom, ya))) + offset)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",971,42592,42607,ctx.closePath,false,false) || window.parent._wrap_popCallStack(  ctx.closePath()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",972,42611,42621,ctx.fill,false,false) || window.parent._wrap_popCallStack(  ctx.fill()));
}, drawSeriesLines: function(series) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 973, 42643,43602, (typeof arguments === 'object' ? arguments.callee.caller : null));

  series = series || this.series;
  var ctx = this.ctx;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",976,42720,42730,ctx.save,false,false) || window.parent._wrap_popCallStack(  ctx.save()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",977,42734,42790,ctx.translate,false,false) || window.parent._wrap_popCallStack(  ctx.translate(this.plotOffset.left, this.plotOffset.top)));
  ctx.lineJoin = 'round';
  var lw = series.lines.lineWidth;
  var sw = series.shadowSize;
  if (sw > 0) {
    ctx.lineWidth = sw / 2;
    var offset = lw / 2 + ctx.lineWidth / 2;
    ctx.strokeStyle = "rgba(0,0,0,0.1)";
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",985,43017,43055,this.plotLine,false,false) || window.parent._wrap_popCallStack(    this.plotLine(series, offset + sw / 2)));
    ctx.strokeStyle = "rgba(0,0,0,0.2)";
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",987,43102,43131,this.plotLine,false,false) || window.parent._wrap_popCallStack(    this.plotLine(series, offset)));
    if (series.lines.fill) {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",990,43210,43252,this.plotLineArea,false,false) || window.parent._wrap_popCallStack(      this.plotLineArea(series, offset + sw / 2)));
    }
  }
  ctx.lineWidth = lw;
  ctx.strokeStyle = series.color;
  if (series.lines.fill) {
    ctx.fillStyle = series.lines.fillColor != null ? series.lines.fillColor : (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",996,43425,43516,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",996,43425,43505,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",996,43425,43455,Flotr.parseColor,false,false) || window.parent._wrap_popCallStack(Flotr.parseColor(series.color))).scale(null, null, null, series.lines.fillOpacity))).toString()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",997,43522,43550,this.plotLineArea,false,false) || window.parent._wrap_popCallStack(    this.plotLineArea(series, 0)));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",999,43558,43582,this.plotLine,false,false) || window.parent._wrap_popCallStack(  this.plotLine(series, 0)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1000,43586,43599,ctx.restore,false,false) || window.parent._wrap_popCallStack(  ctx.restore()));
}, drawSeriesPoints: function(series) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1001, 43622,44349, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var ctx = this.ctx;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1003,43665,43675,ctx.save,false,false) || window.parent._wrap_popCallStack(  ctx.save()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1004,43679,43735,ctx.translate,false,false) || window.parent._wrap_popCallStack(  ctx.translate(this.plotOffset.left, this.plotOffset.top)));
  var lw = series.lines.lineWidth;
  var sw = series.shadowSize;
  if (sw > 0) {
    ctx.lineWidth = sw / 2;
    ctx.strokeStyle = 'rgba(0,0,0,0.1)';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1010,43891,43970,this.plotPointShadows,false,false) || window.parent._wrap_popCallStack(    this.plotPointShadows(series, sw / 2 + ctx.lineWidth / 2, series.points.radius)));
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1012,44017,44087,this.plotPointShadows,false,false) || window.parent._wrap_popCallStack(    this.plotPointShadows(series, ctx.lineWidth / 2, series.points.radius)));
  }
  ctx.lineWidth = series.points.lineWidth;
  ctx.strokeStyle = series.color;
  ctx.fillStyle = series.points.fillColor != null ? series.points.fillColor : series.color;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1017,44264,44329,this.plotPoints,false,false) || window.parent._wrap_popCallStack(  this.plotPoints(series, series.points.radius, series.points.fill)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1018,44333,44346,ctx.restore,false,false) || window.parent._wrap_popCallStack(  ctx.restore()));
}, plotPoints: function(series, radius, fill) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1019, 44363,44798, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var xa = series.xaxis, ya = series.yaxis, ctx = this.ctx, i, data = series.data;
  for (i = data.length - 1; i > -1; --i) {
    var x = data[i][0], y = data[i][1];
    if (x < xa.min || x > xa.max || y < ya.min || y > ya.max) 
      continue;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1025,44645,44660,ctx.beginPath,false,false) || window.parent._wrap_popCallStack(    ctx.beginPath()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1026,44666,44740,ctx.arc,false,false) || window.parent._wrap_popCallStack(    ctx.arc((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1026,44674,44690,this.tHoz,false,false) || window.parent._wrap_popCallStack(this.tHoz(x, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1026,44692,44709,this.tVert,false,false) || window.parent._wrap_popCallStack(this.tVert(y, ya))), radius, 0, 2 * Math.PI, true)));
    if (fill) 
      (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1028,44763,44773,ctx.fill,false,false) || window.parent._wrap_popCallStack(    ctx.fill()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1029,44779,44791,ctx.stroke,false,false) || window.parent._wrap_popCallStack(    ctx.stroke()));
  }
}, plotPointShadows: function(series, offset, radius) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1031, 44818,45228, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var xa = series.xaxis, ya = series.yaxis, ctx = this.ctx, i, data = series.data;
  for (i = data.length - 1; i > -1; --i) {
    var x = data[i][0], y = data[i][1];
    if (x < xa.min || x > xa.max || y < ya.min || y > ya.max) 
      continue;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1037,45102,45117,ctx.beginPath,false,false) || window.parent._wrap_popCallStack(    ctx.beginPath()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1038,45123,45203,ctx.arc,false,false) || window.parent._wrap_popCallStack(    ctx.arc((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1038,45131,45147,this.tHoz,false,false) || window.parent._wrap_popCallStack(this.tHoz(x, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1038,45149,45166,this.tVert,false,false) || window.parent._wrap_popCallStack(this.tVert(y, ya))) + offset, radius, 0, Math.PI, false)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1039,45209,45221,ctx.stroke,false,false) || window.parent._wrap_popCallStack(    ctx.stroke()));
  }
}, drawSeriesBars: function(series) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1041, 45246,45835, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var ctx = this.ctx, bw = series.bars.barWidth, lw = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1042,45319,45354,Math.min,false,false) || window.parent._wrap_popCallStack(Math.min(series.bars.lineWidth, bw)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1043,45358,45368,ctx.save,false,false) || window.parent._wrap_popCallStack(  ctx.save()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1044,45372,45428,ctx.translate,false,false) || window.parent._wrap_popCallStack(  ctx.translate(this.plotOffset.left, this.plotOffset.top)));
  ctx.lineJoin = 'miter';
  ctx.lineWidth = lw;
  ctx.strokeStyle = series.color;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1048,45514,45567,this.plotBarsShadows,false,false) || window.parent._wrap_popCallStack(  this.plotBarsShadows(series, bw, 0, series.bars.fill)));
  if (series.bars.fill) {
    ctx.fillStyle = series.bars.fillColor != null ? series.bars.fillColor : (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1050,45671,45761,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1050,45671,45750,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1050,45671,45701,Flotr.parseColor,false,false) || window.parent._wrap_popCallStack(Flotr.parseColor(series.color))).scale(null, null, null, series.bars.fillOpacity))).toString()));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1052,45769,45815,this.plotBars,false,false) || window.parent._wrap_popCallStack(  this.plotBars(series, bw, 0, series.bars.fill)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1053,45819,45832,ctx.restore,false,false) || window.parent._wrap_popCallStack(  ctx.restore()));
}, plotBars: function(series, barWidth, offset, fill) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1054, 45847,47868, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var data = series.data;
  if (data.length < 1) 
    return;
  var xa = series.xaxis, ya = series.yaxis, ctx = this.ctx, tHoz = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1058,46019,46039,this.tHoz.bind,false,false) || window.parent._wrap_popCallStack(this.tHoz.bind(this))), tVert = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1058,46049,46070,this.tVert.bind,false,false) || window.parent._wrap_popCallStack(this.tVert.bind(this)));
  for (var i = 0; i < data.length; i++) {
    var x = data[i][0], y = data[i][1];
    var drawLeft = true, drawTop = true, drawRight = true;
    var stackOffset = 0;
    if (series.bars.stacked) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1064,46275,46392,xa.values.each,false,false) || window.parent._wrap_popCallStack(      xa.values.each(function(o, v) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1064, 46290,46391, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (v == x) {
    stackOffset = o.stack || 0;
    o.stack = stackOffset + y;
  }
})));
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
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1094,47134,47149,ctx.beginPath,false,false) || window.parent._wrap_popCallStack(      ctx.beginPath()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1095,47157,47211,ctx.moveTo,false,false) || window.parent._wrap_popCallStack(      ctx.moveTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1095,47168,47182,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(left, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1095,47184,47201,tVert,false,false) || window.parent._wrap_popCallStack(tVert(bottom, ya))) + offset)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1096,47219,47270,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(      ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1096,47230,47244,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(left, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1096,47246,47260,tVert,false,false) || window.parent._wrap_popCallStack(tVert(top, ya))) + offset)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1097,47278,47330,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(      ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1097,47289,47304,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(right, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1097,47306,47320,tVert,false,false) || window.parent._wrap_popCallStack(tVert(top, ya))) + offset)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1098,47338,47393,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(      ctx.lineTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1098,47349,47364,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(right, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1098,47366,47383,tVert,false,false) || window.parent._wrap_popCallStack(tVert(bottom, ya))) + offset)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1099,47401,47411,ctx.fill,false,false) || window.parent._wrap_popCallStack(      ctx.fill()));
    }
    if (series.bars.lineWidth != 0 && (drawLeft || drawRight || drawTop)) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1102,47501,47516,ctx.beginPath,false,false) || window.parent._wrap_popCallStack(      ctx.beginPath()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1103,47524,47578,ctx.moveTo,false,false) || window.parent._wrap_popCallStack(      ctx.moveTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1103,47535,47549,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(left, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1103,47551,47568,tVert,false,false) || window.parent._wrap_popCallStack(tVert(bottom, ya))) + offset)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1104,47586,47662,null,false,false) || window.parent._wrap_popCallStack(      ctx[drawLeft ? 'lineTo' : 'moveTo']((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1104,47622,47636,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(left, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1104,47638,47652,tVert,false,false) || window.parent._wrap_popCallStack(tVert(top, ya))) + offset)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1105,47670,47746,null,false,false) || window.parent._wrap_popCallStack(      ctx[drawTop ? 'lineTo' : 'moveTo']((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1105,47705,47720,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(right, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1105,47722,47736,tVert,false,false) || window.parent._wrap_popCallStack(tVert(top, ya))) + offset)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1106,47754,47835,null,false,false) || window.parent._wrap_popCallStack(      ctx[drawRight ? 'lineTo' : 'moveTo']((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1106,47791,47806,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(right, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1106,47808,47825,tVert,false,false) || window.parent._wrap_popCallStack(tVert(bottom, ya))) + offset)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1107,47843,47855,ctx.stroke,false,false) || window.parent._wrap_popCallStack(      ctx.stroke()));
    }
  }
}, plotBarsShadows: function(series, barWidth, offset) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1110, 47887,49310, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var data = series.data;
  if (data.length < 1) 
    return;
  var xa = series.xaxis, ya = series.yaxis, ctx = this.ctx, tHoz = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1114,48053,48073,this.tHoz.bind,false,false) || window.parent._wrap_popCallStack(this.tHoz.bind(this))), tVert = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1114,48083,48104,this.tVert.bind,false,false) || window.parent._wrap_popCallStack(this.tVert.bind(this))), sw = this.options.shadowSize;
  for (var i = 0; i < data.length; i++) {
    var x = data[i][0], y = data[i][1];
    var stackOffset = 0;
    if (series.bars.stacked) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1119,48280,48409,xa.values.each,false,false) || window.parent._wrap_popCallStack(      xa.values.each(function(o, v) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1119, 48295,48408, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (v == x) {
    stackOffset = o.stackShadow || 0;
    o.stackShadow = stackOffset + y;
  }
})));
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
    var width = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1140,48927,48942,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(right, xa))) - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1140,48945,48959,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(left, xa))) - (((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1140,48964,48979,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(right, xa))) + sw <= this.plotWidth) ? 0 : sw);
    var height = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1141,49032,49136,Math.max,false,false) || window.parent._wrap_popCallStack(Math.max(0, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1141,49044,49061,tVert,false,false) || window.parent._wrap_popCallStack(tVert(bottom, ya))) - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1141,49064,49078,tVert,false,false) || window.parent._wrap_popCallStack(tVert(top, ya))) - (((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1141,49083,49100,tVert,false,false) || window.parent._wrap_popCallStack(tVert(bottom, ya))) + sw <= this.plotHeight) ? 0 : sw))));
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1143,49182,49303,ctx.fillRect,false,false) || window.parent._wrap_popCallStack(    ctx.fillRect((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1143,49195,49240,Math.min,false,false) || window.parent._wrap_popCallStack(Math.min((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1143,49204,49218,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(left, xa))) + sw, this.plotWidth))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1143,49242,49287,Math.min,false,false) || window.parent._wrap_popCallStack(Math.min((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1143,49251,49265,tVert,false,false) || window.parent._wrap_popCallStack(tVert(top, ya))) + sw, this.plotWidth))), width, height)));
  }
}, drawSeriesCandles: function(series) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1145, 49331,49646, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var ctx = this.ctx, bw = series.candles.candleWidth;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1147,49407,49417,ctx.save,false,false) || window.parent._wrap_popCallStack(  ctx.save()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1148,49421,49477,ctx.translate,false,false) || window.parent._wrap_popCallStack(  ctx.translate(this.plotOffset.left, this.plotOffset.top)));
  ctx.lineJoin = 'miter';
  ctx.lineWidth = series.candles.lineWidth;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1151,49551,49590,this.plotCandlesShadows,false,false) || window.parent._wrap_popCallStack(  this.plotCandlesShadows(series, bw / 2)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1152,49594,49626,this.plotCandles,false,false) || window.parent._wrap_popCallStack(  this.plotCandles(series, bw / 2)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1153,49630,49643,ctx.restore,false,false) || window.parent._wrap_popCallStack(  ctx.restore()));
}, plotCandles: function(series, offset) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1154, 49661,51998, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var data = series.data;
  if (data.length < 1) 
    return;
  var xa = series.xaxis, ya = series.yaxis, ctx = this.ctx, tHoz = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1158,49817,49837,this.tHoz.bind,false,false) || window.parent._wrap_popCallStack(this.tHoz.bind(this))), tVert = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1158,49847,49868,this.tVert.bind,false,false) || window.parent._wrap_popCallStack(this.tVert.bind(this)));
  for (var i = 0; i < data.length; i++) {
    var d = data[i], x = d[0], open = d[1], high = d[2], low = d[3], close = d[4];
    var left = x, right = x + series.candles.candleWidth, bottom = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1161,50062,50083,Math.max,false,false) || window.parent._wrap_popCallStack(Math.max(ya.min, low))), top = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1161,50091,50113,Math.min,false,false) || window.parent._wrap_popCallStack(Math.min(ya.max, high))), bottom2 = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1161,50125,50164,Math.max,false,false) || window.parent._wrap_popCallStack(Math.max(ya.min, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1161,50142,50163,Math.min,false,false) || window.parent._wrap_popCallStack(Math.min(open, close)))))), top2 = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1161,50173,50212,Math.min,false,false) || window.parent._wrap_popCallStack(Math.min(ya.max, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1161,50190,50211,Math.max,false,false) || window.parent._wrap_popCallStack(Math.max(open, close))))));
    if (right < xa.min || left > xa.max || top < ya.min || bottom > ya.max) 
      continue;
    var color = series.candles[open > close ? 'downFillColor' : 'upFillColor'];
    if (series.candles.fill && !series.candles.barcharts) {
      ctx.fillStyle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1166,50469,50555,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1166,50469,50544,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1166,50469,50492,Flotr.parseColor,false,false) || window.parent._wrap_popCallStack(Flotr.parseColor(color))).scale(null, null, null, series.candles.fillOpacity))).toString()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1167,50563,50689,ctx.fillRect,false,false) || window.parent._wrap_popCallStack(      ctx.fillRect((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1167,50576,50590,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(left, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1167,50592,50607,tVert,false,false) || window.parent._wrap_popCallStack(tVert(top2, ya))) + offset, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1167,50618,50633,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(right, xa))) - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1167,50636,50650,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(left, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1167,50652,50670,tVert,false,false) || window.parent._wrap_popCallStack(tVert(bottom2, ya))) - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1167,50673,50688,tVert,false,false) || window.parent._wrap_popCallStack(tVert(top2, ya))))));
    }
    if (series.candles.lineWidth || series.candles.wickLineWidth) {
      var x, y, pixelOffset = (series.candles.wickLineWidth % 2) / 2;
      x = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1171,50845,50885,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1171,50856,50880,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz((left + right) / 2))), xa))) + pixelOffset;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1172,50907,50917,ctx.save,false,false) || window.parent._wrap_popCallStack(      ctx.save()));
      ctx.strokeStyle = color;
      ctx.lineWidth = series.candles.wickLineWidth;
      ctx.lineCap = 'butt';
      if (series.candles.barcharts) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1177,51076,51091,ctx.beginPath,false,false) || window.parent._wrap_popCallStack(        ctx.beginPath()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1178,51101,51151,ctx.moveTo,false,false) || window.parent._wrap_popCallStack(        ctx.moveTo(x, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1178,51115,51150,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1178,51126,51140,tVert,false,false) || window.parent._wrap_popCallStack(tVert(top, ya))) + offset))))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1179,51161,51214,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(        ctx.lineTo(x, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1179,51175,51213,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1179,51186,51203,tVert,false,false) || window.parent._wrap_popCallStack(tVert(bottom, ya))) + offset))))));
        y = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1180,51228,51264,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1180,51239,51254,tVert,false,false) || window.parent._wrap_popCallStack(tVert(open, ya))) + offset))) + 0.5;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1181,51280,51335,ctx.moveTo,false,false) || window.parent._wrap_popCallStack(        ctx.moveTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1181,51291,51317,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1181,51302,51316,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(left, xa)))))) + pixelOffset, y)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1182,51345,51361,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(        ctx.lineTo(x, y)));
        y = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1183,51375,51412,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1183,51386,51402,tVert,false,false) || window.parent._wrap_popCallStack(tVert(close, ya))) + offset))) + 0.5;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1184,51428,51484,ctx.moveTo,false,false) || window.parent._wrap_popCallStack(        ctx.moveTo((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1184,51439,51466,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1184,51450,51465,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(right, xa)))))) + pixelOffset, y)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1185,51494,51510,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(        ctx.lineTo(x, y)));
      } else {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1187,51535,51663,ctx.strokeRect,false,false) || window.parent._wrap_popCallStack(        ctx.strokeRect((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1187,51550,51564,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(left, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1187,51566,51581,tVert,false,false) || window.parent._wrap_popCallStack(tVert(top2, ya))) + offset, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1187,51592,51607,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(right, xa))) - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1187,51610,51624,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(left, xa))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1187,51626,51644,tVert,false,false) || window.parent._wrap_popCallStack(tVert(bottom2, ya))) - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1187,51647,51662,tVert,false,false) || window.parent._wrap_popCallStack(tVert(top2, ya))))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1188,51673,51688,ctx.beginPath,false,false) || window.parent._wrap_popCallStack(        ctx.beginPath()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1189,51698,51749,ctx.moveTo,false,false) || window.parent._wrap_popCallStack(        ctx.moveTo(x, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1189,51712,51748,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1189,51723,51738,tVert,false,false) || window.parent._wrap_popCallStack(tVert(top2, ya))) + offset))))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1190,51759,51809,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(        ctx.lineTo(x, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1190,51773,51808,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1190,51784,51798,tVert,false,false) || window.parent._wrap_popCallStack(tVert(top, ya))) + offset))))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1191,51819,51873,ctx.moveTo,false,false) || window.parent._wrap_popCallStack(        ctx.moveTo(x, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1191,51833,51872,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1191,51844,51862,tVert,false,false) || window.parent._wrap_popCallStack(tVert(bottom2, ya))) + offset))))));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1192,51883,51936,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(        ctx.lineTo(x, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1192,51897,51935,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1192,51908,51925,tVert,false,false) || window.parent._wrap_popCallStack(tVert(bottom, ya))) + offset))))));
      }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1194,51952,51964,ctx.stroke,false,false) || window.parent._wrap_popCallStack(      ctx.stroke()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1195,51972,51985,ctx.restore,false,false) || window.parent._wrap_popCallStack(      ctx.restore()));
    }
  }
}, plotCandlesShadows: function(series, offset) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1198, 52020,53053, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var data = series.data;
  if (data.length < 1 || series.candles.barcharts) 
    return;
  var xa = series.xaxis, ya = series.yaxis, tHoz = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1202,52188,52208,this.tHoz.bind,false,false) || window.parent._wrap_popCallStack(this.tHoz.bind(this))), tVert = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1202,52218,52239,this.tVert.bind,false,false) || window.parent._wrap_popCallStack(this.tVert.bind(this))), sw = this.options.shadowSize;
  for (var i = 0; i < data.length; i++) {
    var d = data[i], x = d[0], open = d[1], high = d[2], low = d[3], close = d[4];
    var left = x, right = x + series.candles.candleWidth, bottom = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1205,52463,52502,Math.max,false,false) || window.parent._wrap_popCallStack(Math.max(ya.min, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1205,52480,52501,Math.min,false,false) || window.parent._wrap_popCallStack(Math.min(open, close)))))), top = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1205,52510,52549,Math.min,false,false) || window.parent._wrap_popCallStack(Math.min(ya.max, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1205,52527,52548,Math.max,false,false) || window.parent._wrap_popCallStack(Math.max(open, close))))));
    if (right < xa.min || left > xa.max || top < ya.min || bottom > ya.max) 
      continue;
    var width = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1208,52660,52675,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(right, xa))) - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1208,52678,52692,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(left, xa))) - (((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1208,52697,52712,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(right, xa))) + sw <= this.plotWidth) ? 0 : sw);
    var height = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1209,52765,52869,Math.max,false,false) || window.parent._wrap_popCallStack(Math.max(0, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1209,52777,52794,tVert,false,false) || window.parent._wrap_popCallStack(tVert(bottom, ya))) - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1209,52797,52811,tVert,false,false) || window.parent._wrap_popCallStack(tVert(top, ya))) - (((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1209,52816,52833,tVert,false,false) || window.parent._wrap_popCallStack(tVert(bottom, ya))) + sw <= this.plotHeight) ? 0 : sw))));
    this.ctx.fillStyle = 'rgba(0,0,0,0.05)';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1211,52920,53046,this.ctx.fillRect,false,false) || window.parent._wrap_popCallStack(    this.ctx.fillRect((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1211,52938,52983,Math.min,false,false) || window.parent._wrap_popCallStack(Math.min((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1211,52947,52961,tHoz,false,false) || window.parent._wrap_popCallStack(tHoz(left, xa))) + sw, this.plotWidth))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1211,52985,53030,Math.min,false,false) || window.parent._wrap_popCallStack(Math.min((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1211,52994,53008,tVert,false,false) || window.parent._wrap_popCallStack(tVert(top, ya))) + sw, this.plotWidth))), width, height)));
  }
}, drawSeriesPie: function(series) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1213, 53070,56444, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!this.options.pie.drawn) {
    var ctx = this.ctx, options = this.options, lw = series.pie.lineWidth, sw = series.shadowSize, data = series.data, radius = ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1215,53251,53296,Math.min,false,false) || window.parent._wrap_popCallStack(Math.min(this.canvasWidth, this.canvasHeight))) * series.pie.sizeRatio) / 2, html = [];
    var vScale = 1;
    var plotTickness = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1217,53380,53410,Math.sin,false,false) || window.parent._wrap_popCallStack(Math.sin(series.pie.viewAngle))) * series.pie.spliceThickness / vScale;
    var style = {size: options.fontSize * 1.2, color: options.grid.color, weight: 1.5};
    var center = {x: (this.canvasWidth + this.plotOffset.left) / 2, y: (this.canvasHeight - this.plotOffset.bottom) / 2};
    var portions = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1220,53679,53859,this.series.collect,false,false) || window.parent._wrap_popCallStack(this.series.collect(function(hash, index) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1220, 53699,53858, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (hash.pie.show) 
    return {name: (hash.label || hash.data[0][1]), value: [index, hash.data[0][1]], explode: hash.pie.explode};
})));
    var sum = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1224,53875,53957,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1224,53875,53907,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1224,53875,53898,portions.pluck,false,false) || window.parent._wrap_popCallStack(portions.pluck('value'))).pluck(1))).inject(0, function(acc, n) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1224, 53918,53956, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return acc + n;
})));
    var fraction = 0.0, angle = series.pie.startAngle, value = 0.0;
    var slices = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1228,54044,54345,portions.collect,false,false) || window.parent._wrap_popCallStack(portions.collect(function(slice) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1228, 54061,54344, (typeof arguments === 'object' ? arguments.callee.caller : null));

  angle += fraction;
  value = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1230,54110,54136,parseFloat,false,false) || window.parent._wrap_popCallStack(parseFloat(slice.value[1])));
  fraction = value / sum;
  return {name: slice.name, fraction: fraction, x: slice.value[0], y: value, explode: slice.explode, startAngle: 2 * angle * Math.PI, endAngle: 2 * (angle + fraction) * Math.PI};
})));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1234,54351,54361,ctx.save,false,false) || window.parent._wrap_popCallStack(    ctx.save()));
    if (sw > 0) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1236,54387,54766,slices.each,false,false) || window.parent._wrap_popCallStack(      slices.each(function(slice) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1236, 54399,54759, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var bisection = (slice.startAngle + slice.endAngle) / 2;
  var xOffset = center.x + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1238,54503,54522,Math.cos,false,false) || window.parent._wrap_popCallStack(Math.cos(bisection))) * slice.explode + sw;
  var yOffset = center.y + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1239,54572,54591,Math.sin,false,false) || window.parent._wrap_popCallStack(Math.sin(bisection))) * slice.explode + sw;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1240,54616,54705,this.plotSlice,false,false) || window.parent._wrap_popCallStack(  this.plotSlice(xOffset, yOffset, radius, slice.startAngle, slice.endAngle, false, vScale)));
  ctx.fillStyle = 'rgba(0,0,0,0.1)';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1242,54746,54756,ctx.fill,false,false) || window.parent._wrap_popCallStack(  ctx.fill()));
}, this)));
    }
    if (options.HtmlText) {
      html = ['<div style="color:' + this.options.grid.color + '" class="flotr-labels">'];
    }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1248,54903,56290,slices.each,false,false) || window.parent._wrap_popCallStack(    slices.each(function(slice, index) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1248, 54915,56283, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var bisection = (slice.startAngle + slice.endAngle) / 2;
  var color = options.colors[index];
  var xOffset = center.x + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1251,55063,55082,Math.cos,false,false) || window.parent._wrap_popCallStack(Math.cos(bisection))) * slice.explode;
  var yOffset = center.y + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1252,55127,55146,Math.sin,false,false) || window.parent._wrap_popCallStack(Math.sin(bisection))) * slice.explode;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1253,55166,55255,this.plotSlice,false,false) || window.parent._wrap_popCallStack(  this.plotSlice(xOffset, yOffset, radius, slice.startAngle, slice.endAngle, false, vScale)));
  if (series.pie.fill) {
    ctx.fillStyle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1255,55302,55384,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1255,55302,55373,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1255,55302,55325,Flotr.parseColor,false,false) || window.parent._wrap_popCallStack(Flotr.parseColor(color))).scale(null, null, null, series.pie.fillOpacity))).toString()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1256,55390,55400,ctx.fill,false,false) || window.parent._wrap_popCallStack(    ctx.fill()));
  }
  ctx.lineWidth = lw;
  ctx.strokeStyle = color;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1260,55457,55469,ctx.stroke,false,false) || window.parent._wrap_popCallStack(  ctx.stroke()));
  var label = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1261,55485,55518,options.pie.labelFormatter,false,false) || window.parent._wrap_popCallStack(options.pie.labelFormatter(slice)));
  var textAlignRight = ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1262,55544,55563,Math.cos,false,false) || window.parent._wrap_popCallStack(Math.cos(bisection))) < 0);
  var distX = xOffset + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1263,55594,55613,Math.cos,false,false) || window.parent._wrap_popCallStack(Math.cos(bisection))) * (series.pie.explode + radius);
  var distY = yOffset + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1264,55671,55690,Math.sin,false,false) || window.parent._wrap_popCallStack(Math.sin(bisection))) * (series.pie.explode + radius);
  if (slice.fraction && label) {
    if (options.HtmlText) {
      var divStyle = 'position:absolute;top:' + (distY - 5) + 'px;';
      if (textAlignRight) {
        divStyle += 'right:' + (this.canvasWidth - distX) + 'px;text-align:right;';
      } else {
        divStyle += 'left:' + distX + 'px;text-align:left;';
      }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1273,56056,56143,html.push,false,false) || window.parent._wrap_popCallStack(      html.push('<div style="' + divStyle + '" class="flotr-grid-label">' + label + '</div>')));
    } else {
      style.halign = textAlignRight ? 'r' : 'l';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1276,56213,56270,ctx.drawText,false,false) || window.parent._wrap_popCallStack(      ctx.drawText(label, distX, distY + style.size / 2, style)));
    }
  }
}, this)));
    if (options.HtmlText) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1281,56326,56345,html.push,false,false) || window.parent._wrap_popCallStack(      html.push('</div>')));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1282,56353,56382,this.el.insert,false,false) || window.parent._wrap_popCallStack(      this.el.insert((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1282,56368,56381,html.join,false,false) || window.parent._wrap_popCallStack(html.join(''))))));
    }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1284,56394,56407,ctx.restore,false,false) || window.parent._wrap_popCallStack(    ctx.restore()));
    options.pie.drawn = true;
  }
}, plotSlice: function(x, y, radius, startAngle, endAngle, fill, vScale) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1287, 56457,56751, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var ctx = this.ctx;
  vScale = vScale || 1;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1290,56566,56576,ctx.save,false,false) || window.parent._wrap_popCallStack(  ctx.save()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1291,56580,56600,ctx.scale,false,false) || window.parent._wrap_popCallStack(  ctx.scale(1, vScale)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1292,56604,56619,ctx.beginPath,false,false) || window.parent._wrap_popCallStack(  ctx.beginPath()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1293,56623,56639,ctx.moveTo,false,false) || window.parent._wrap_popCallStack(  ctx.moveTo(x, y)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1294,56643,56692,ctx.arc,false,false) || window.parent._wrap_popCallStack(  ctx.arc(x, y, radius, startAngle, endAngle, fill)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1295,56696,56712,ctx.lineTo,false,false) || window.parent._wrap_popCallStack(  ctx.lineTo(x, y)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1296,56716,56731,ctx.closePath,false,false) || window.parent._wrap_popCallStack(  ctx.closePath()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1297,56735,56748,ctx.restore,false,false) || window.parent._wrap_popCallStack(  ctx.restore()));
}, plotPie: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1298, 56762,56776, (typeof arguments === 'object' ? arguments.callee.caller : null));

}, insertLegend: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1299, 56792,61545, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!this.options.legend.show) 
    return;
  var series = this.series, plotOffset = this.plotOffset, options = this.options, fragments = [], rowStarted = false, ctx = this.ctx, i;
  var noLegendItems = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1305,57010,57079,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1303,57010,57072,series.findAll,false,false) || window.parent._wrap_popCallStack(series.findAll(function(s) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1303, 57025,57071, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (s.label && !s.hide);
}))).size()));
  if (noLegendItems) {
    if (!options.HtmlText && this.textEnabled) {
      var style = {size: options.fontSize * 1.1, color: options.grid.color};
      var p = options.legend.position, m = options.legend.margin, lbw = options.legend.labelBoxWidth, lbh = options.legend.labelBoxHeight, lbm = options.legend.labelBoxMargin, offsetX = plotOffset.left + m, offsetY = plotOffset.top + m;
      var labelMaxWidth = 0;
      for (i = series.length - 1; i > -1; --i) {
        if (!series[i].label || series[i].hide) 
          continue;
        var label = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1314,57634,57680,options.legend.labelFormatter,false,false) || window.parent._wrap_popCallStack(options.legend.labelFormatter(series[i].label)));
        labelMaxWidth = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1315,57706,57760,Math.max,false,false) || window.parent._wrap_popCallStack(Math.max(labelMaxWidth, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1315,57730,57759,ctx.measureText,false,false) || window.parent._wrap_popCallStack(ctx.measureText(label, style))))));
      }
      var legendWidth = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1317,57794,57835,Math.round,false,false) || window.parent._wrap_popCallStack(Math.round(lbw + lbm * 3 + labelMaxWidth))), legendHeight = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1317,57852,57897,Math.round,false,false) || window.parent._wrap_popCallStack(Math.round(noLegendItems * (lbm + lbh) + lbm)));
      if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1318,57909,57920,p.charAt,false,false) || window.parent._wrap_popCallStack(p.charAt(0))) == 's') 
        offsetY = plotOffset.top + this.plotHeight - (m + legendHeight);
      if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1320,58013,58024,p.charAt,false,false) || window.parent._wrap_popCallStack(p.charAt(1))) == 'e') 
        offsetX = plotOffset.left + this.plotWidth - (m + legendWidth);
      var color = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1322,58124,58270,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1322,58124,58259,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1322,58124,58194,Flotr.parseColor,false,false) || window.parent._wrap_popCallStack(Flotr.parseColor(options.legend.backgroundColor || 'rgb(240,240,240)'))).scale(null, null, null, options.legend.backgroundOpacity || 0.1))).toString()));
      ctx.fillStyle = color;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1324,58307,58364,ctx.fillRect,false,false) || window.parent._wrap_popCallStack(      ctx.fillRect(offsetX, offsetY, legendWidth, legendHeight)));
      ctx.strokeStyle = options.legend.labelBoxBorderColor;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1326,58432,58521,ctx.strokeRect,false,false) || window.parent._wrap_popCallStack(      ctx.strokeRect((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1326,58447,58469,Flotr.toPixel,false,false) || window.parent._wrap_popCallStack(Flotr.toPixel(offsetX))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1326,58471,58493,Flotr.toPixel,false,false) || window.parent._wrap_popCallStack(Flotr.toPixel(offsetY))), legendWidth, legendHeight)));
      var x = offsetX + lbm;
      var y = offsetY + lbm;
      for (i = 0; i < series.length; i++) {
        if (!series[i].label || series[i].hide) 
          continue;
        var label = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1332,58714,58760,options.legend.labelFormatter,false,false) || window.parent._wrap_popCallStack(options.legend.labelFormatter(series[i].label)));
        ctx.fillStyle = series[i].color;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1334,58811,58847,ctx.fillRect,false,false) || window.parent._wrap_popCallStack(        ctx.fillRect(x, y, lbw - 1, lbh - 1)));
        ctx.strokeStyle = options.legend.labelBoxBorderColor;
        ctx.lineWidth = 1;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1337,58946,59018,ctx.strokeRect,false,false) || window.parent._wrap_popCallStack(        ctx.strokeRect((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1337,58961,58973,Math.ceil,false,false) || window.parent._wrap_popCallStack(Math.ceil(x))) - 1.5, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1337,58981,58993,Math.ceil,false,false) || window.parent._wrap_popCallStack(Math.ceil(y))) - 1.5, lbw + 2, lbh + 2)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1338,59028,59122,ctx.drawText,false,false) || window.parent._wrap_popCallStack(        ctx.drawText(label, x + lbw + lbm, y + (lbh + style.size - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1338,59087,59109,ctx.fontDescent,false,false) || window.parent._wrap_popCallStack(ctx.fontDescent(style)))) / 2, style)));
        y += lbh + lbm;
      }
    } else {
      for (i = 0; i < series.length; ++i) {
        if (!series[i].label || series[i].hide) 
          continue;
        if (i % options.legend.noColumns == 0) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1346,59341,59390,fragments.push,false,false) || window.parent._wrap_popCallStack(          fragments.push(rowStarted ? '</tr><tr>' : '<tr>')));
          rowStarted = true;
        }
        var label = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1349,59451,59497,options.legend.labelFormatter,false,false) || window.parent._wrap_popCallStack(options.legend.labelFormatter(series[i].label)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1350,59507,59862,fragments.push,false,false) || window.parent._wrap_popCallStack(        fragments.push('<td class="flotr-legend-color-box"><div style="border:1px solid ' + options.legend.labelBoxBorderColor + ';padding:1px"><div style="width:' + options.legend.labelBoxWidth + 'px;height:' + options.legend.labelBoxHeight + 'px;background-color:' + series[i].color + '"></div></div></td>' + '<td class="flotr-legend-label">' + label + '</td>')));
      }
      if (rowStarted) 
        (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1353,59903,59926,fragments.push,false,false) || window.parent._wrap_popCallStack(      fragments.push('</tr>')));
      if (fragments.length > 0) {
        var table = '<table style="font-size:smaller;color:' + options.grid.color + '">' + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1355,60053,60071,fragments.join,false,false) || window.parent._wrap_popCallStack(fragments.join(""))) + '</table>';
        if (options.legend.container != null) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1357,60144,60185,null,false,false) || window.parent._wrap_popCallStack(          (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1357,60144,60171,$,false,false) || window.parent._wrap_popCallStack($(options.legend.container))).update(table)));
        } else {
          var pos = '';
          var p = options.legend.position, m = options.legend.margin;
          if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1361,60312,60323,p.charAt,false,false) || window.parent._wrap_popCallStack(p.charAt(0))) == 'n') 
            pos += 'top:' + (m + plotOffset.top) + 'px;';
          else if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1363,60410,60421,p.charAt,false,false) || window.parent._wrap_popCallStack(p.charAt(0))) == 's') 
            pos += 'bottom:' + (m + plotOffset.bottom) + 'px;';
          if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1365,60509,60520,p.charAt,false,false) || window.parent._wrap_popCallStack(p.charAt(1))) == 'e') 
            pos += 'right:' + (m + plotOffset.right) + 'px;';
          else if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1367,60611,60622,p.charAt,false,false) || window.parent._wrap_popCallStack(p.charAt(1))) == 'w') 
            pos += 'left:' + (m + plotOffset.left) + 'px;';
          var div = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1369,60712,60858,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1369,60712,60850,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1369,60712,60823,this.el.insert,false,false) || window.parent._wrap_popCallStack(this.el.insert('<div class="flotr-legend" style="position:absolute;z-index:2;' + pos + '">' + table + '</div>'))).select('div.flotr-legend'))).first()));
          if (options.legend.backgroundOpacity != 0.0) {
            var c = options.legend.backgroundColor;
            if (c == null) {
              var tmp = (options.grid.backgroundColor != null) ? options.grid.backgroundColor : (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1373,61094,61117,Flotr.extractColor,false,false) || window.parent._wrap_popCallStack(Flotr.extractColor(div)));
              c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1374,61137,61197,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1374,61137,61186,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1374,61137,61158,Flotr.parseColor,false,false) || window.parent._wrap_popCallStack(Flotr.parseColor(tmp))).adjust(null, null, null, 1))).toString()));
            }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1376,61225,61502,null,false,false) || window.parent._wrap_popCallStack(            (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1376,61225,61446,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1376,61225,61438,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1376,61225,61408,this.el.insert,false,false) || window.parent._wrap_popCallStack(this.el.insert('<div class="flotr-legend-bg" style="position:absolute;width:' + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1376,61305,61319,div.getWidth,false,false) || window.parent._wrap_popCallStack(div.getWidth())) + 'px;height:' + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1376,61337,61352,div.getHeight,false,false) || window.parent._wrap_popCallStack(div.getHeight())) + 'px;' + pos + 'background-color:' + c + ';"> </div>'))).select('div.flotr-legend-bg'))).first())).setStyle({'opacity': options.legend.backgroundOpacity})));
          }
        }
      }
    }
  }
}, getEventPosition: function(event) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1382, 61565,62304, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var offset = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1383,61598,61629,this.overlay.cumulativeOffset,false,false) || window.parent._wrap_popCallStack(this.overlay.cumulativeOffset())), rx = (event.pageX - offset.left - this.plotOffset.left), ry = (event.pageY - offset.top - this.plotOffset.top), ax = 0, ay = 0;
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
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1393, 62320,62480, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (this.ignoreClick) {
    this.ignoreClick = false;
    return;
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1398,62412,62477,this.el.fire,false,false) || window.parent._wrap_popCallStack(  this.el.fire('flotr:click', [(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1398,62441,62469,this.getEventPosition,false,false) || window.parent._wrap_popCallStack(this.getEventPosition(event))), this])));
}, mouseMoveHandler: function(event) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1399, 62500,62856, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var pos = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1400,62530,62558,this.getEventPosition,false,false) || window.parent._wrap_popCallStack(this.getEventPosition(event)));
  this.lastMousePos.pageX = pos.absX;
  this.lastMousePos.pageY = pos.absY;
  if (this.selectionInterval == null && (this.options.mouse.track || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1403,62705,62772,this.series.any,false,false) || window.parent._wrap_popCallStack(this.series.any(function(s) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1403, 62721,62771, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return s.mouse && s.mouse.track;
}))))) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1406,62781,62794,this.hit,false,false) || window.parent._wrap_popCallStack(    this.hit(pos)));
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1408,62802,62853,this.el.fire,false,false) || window.parent._wrap_popCallStack(  this.el.fire('flotr:mousemove', [event, pos, this])));
}, mouseDownHandler: function(event) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1409, 62876,63661, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1410,62900,62920,event.isRightClick,false,false) || window.parent._wrap_popCallStack(event.isRightClick()))) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1411,62928,62940,event.stop,false,false) || window.parent._wrap_popCallStack(    event.stop()));
    var overlay = this.overlay;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1413,62978,62992,overlay.hide,false,false) || window.parent._wrap_popCallStack(    overlay.hide()));
    function cancelContextMenu() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1414, 62998,63121, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1415,63035,63049,overlay.show,false,false) || window.parent._wrap_popCallStack(      overlay.show()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1416,63057,63114,null,false,false) || window.parent._wrap_popCallStack(      (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1416,63057,63068,$,false,false) || window.parent._wrap_popCallStack($(document))).stopObserving('mousemove', cancelContextMenu)));
    }(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1417,63125,63176,null,false,false) || window.parent._wrap_popCallStack(    (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1417,63125,63136,$,false,false) || window.parent._wrap_popCallStack($(document))).observe('mousemove', cancelContextMenu)));
    return;
  }
  if (!this.options.selection.mode || !(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1420,63233,63252,event.isLeftClick,false,false) || window.parent._wrap_popCallStack(event.isLeftClick()))) 
    return;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1422,63269,63318,this.setSelectionPos,false,false) || window.parent._wrap_popCallStack(  this.setSelectionPos(this.selection.first, event)));
  if (this.selectionInterval != null) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1424,63364,63401,clearInterval,false,false) || window.parent._wrap_popCallStack(    clearInterval(this.selectionInterval)));
  }
  this.lastMousePos.pageX = null;
  this.selectionInterval = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1427,63468,63547,setInterval,false,false) || window.parent._wrap_popCallStack(setInterval((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1427,63480,63511,this.updateSelection.bind,false,false) || window.parent._wrap_popCallStack(this.updateSelection.bind(this))), 1000 / this.options.selection.fps)));
  this.mouseUpHandler = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1428,63573,63603,this.mouseUpHandler.bind,false,false) || window.parent._wrap_popCallStack(this.mouseUpHandler.bind(this)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1429,63607,63658,null,false,false) || window.parent._wrap_popCallStack(  (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1429,63607,63618,$,false,false) || window.parent._wrap_popCallStack($(document))).observe('mouseup', this.mouseUpHandler)));
}, fireSelectEvent: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1430, 63680,64305, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var a = this.axes, selection = this.selection, x1 = (selection.first.x <= selection.second.x) ? selection.first.x : selection.second.x, x2 = (selection.first.x <= selection.second.x) ? selection.second.x : selection.first.x, y1 = (selection.first.y >= selection.second.y) ? selection.first.y : selection.second.y, y2 = (selection.first.y >= selection.second.y) ? selection.second.y : selection.first.y;
  x1 = a.x.min + x1 / a.x.scale;
  x2 = a.x.min + x2 / a.x.scale;
  y1 = a.y.max - y1 / a.y.scale;
  y2 = a.y.max - y2 / a.y.scale;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1436,64232,64302,this.el.fire,false,false) || window.parent._wrap_popCallStack(  this.el.fire('flotr:select', [{x1: x1, y1: y1, x2: x2, y2: y2}, this])));
}, mouseUpHandler: function(event) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1437, 64323,64739, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1438,64343,64400,null,false,false) || window.parent._wrap_popCallStack(  (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1438,64343,64354,$,false,false) || window.parent._wrap_popCallStack($(document))).stopObserving('mouseup', this.mouseUpHandler)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1439,64404,64416,event.stop,false,false) || window.parent._wrap_popCallStack(  event.stop()));
  if (this.selectionInterval != null) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1441,64462,64499,clearInterval,false,false) || window.parent._wrap_popCallStack(    clearInterval(this.selectionInterval)));
    this.selectionInterval = null;
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1444,64542,64592,this.setSelectionPos,false,false) || window.parent._wrap_popCallStack(  this.setSelectionPos(this.selection.second, event)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1445,64596,64617,this.clearSelection,false,false) || window.parent._wrap_popCallStack(  this.clearSelection()));
  if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1446,64625,64647,this.selectionIsSane,false,false) || window.parent._wrap_popCallStack(this.selectionIsSane()))) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1447,64655,64675,this.drawSelection,false,false) || window.parent._wrap_popCallStack(    this.drawSelection()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1448,64681,64703,this.fireSelectEvent,false,false) || window.parent._wrap_popCallStack(    this.fireSelectEvent()));
    this.ignoreClick = true;
  }
}, setSelectionPos: function(pos, event) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1451, 64758,65357, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var options = this.options, offset = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1452,64820,64854,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1452,64820,64835,$,false,false) || window.parent._wrap_popCallStack($(this.overlay))).cumulativeOffset()));
  if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1453,64862,64897,options.selection.mode.indexOf,false,false) || window.parent._wrap_popCallStack(options.selection.mode.indexOf('x'))) == -1) {
    pos.x = (pos == this.selection.first) ? 0 : this.plotWidth;
  } else {
    pos.x = event.pageX - offset.left - this.plotOffset.left;
    pos.x = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1457,65056,65100,Math.min,false,false) || window.parent._wrap_popCallStack(Math.min((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1457,65065,65083,Math.max,false,false) || window.parent._wrap_popCallStack(Math.max(0, pos.x))), this.plotWidth)));
  }
  if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1459,65112,65147,options.selection.mode.indexOf,false,false) || window.parent._wrap_popCallStack(options.selection.mode.indexOf('y'))) == -1) {
    pos.y = (pos == this.selection.first) ? 0 : this.plotHeight;
  } else {
    pos.y = event.pageY - offset.top - this.plotOffset.top;
    pos.y = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1463,65305,65350,Math.min,false,false) || window.parent._wrap_popCallStack(Math.min((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1463,65314,65332,Math.max,false,false) || window.parent._wrap_popCallStack(Math.max(0, pos.y))), this.plotHeight)));
  }
}, updateSelection: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1465, 65376,65590, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (this.lastMousePos.pageX == null) 
    return;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1468,65443,65505,this.setSelectionPos,false,false) || window.parent._wrap_popCallStack(  this.setSelectionPos(this.selection.second, this.lastMousePos)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1469,65509,65530,this.clearSelection,false,false) || window.parent._wrap_popCallStack(  this.clearSelection()));
  if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1470,65538,65560,this.selectionIsSane,false,false) || window.parent._wrap_popCallStack(this.selectionIsSane()))) 
    (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1471,65567,65587,this.drawSelection,false,false) || window.parent._wrap_popCallStack(  this.drawSelection()));
}, clearSelection: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1472, 65608,66175, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (this.prevSelection == null) 
    return;
  var prevSelection = this.prevSelection, octx = this.octx, plotOffset = this.plotOffset, x = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1475,65762,65817,Math.min,false,false) || window.parent._wrap_popCallStack(Math.min(prevSelection.first.x, prevSelection.second.x))), y = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1475,65823,65878,Math.min,false,false) || window.parent._wrap_popCallStack(Math.min(prevSelection.first.y, prevSelection.second.y))), w = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1475,65884,65940,Math.abs,false,false) || window.parent._wrap_popCallStack(Math.abs(prevSelection.second.x - prevSelection.first.x))), h = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1475,65946,66002,Math.abs,false,false) || window.parent._wrap_popCallStack(Math.abs(prevSelection.second.y - prevSelection.first.y)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1476,66006,66143,octx.clearRect,false,false) || window.parent._wrap_popCallStack(  octx.clearRect(x + plotOffset.left - octx.lineWidth, y + plotOffset.top - octx.lineWidth, w + octx.lineWidth * 2, h + octx.lineWidth * 2)));
  this.prevSelection = null;
}, setSelection: function(area) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1478, 66191,66806, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var options = this.options, xa = this.axes.x, ya = this.axes.y, vertScale = yaxis.scale, hozScale = xaxis.scale, selX = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1479,66330,66365,options.selection.mode.indexOf,false,false) || window.parent._wrap_popCallStack(options.selection.mode.indexOf('x'))) != -1, selY = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1479,66380,66415,options.selection.mode.indexOf,false,false) || window.parent._wrap_popCallStack(options.selection.mode.indexOf('y'))) != -1;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1480,66425,66446,this.clearSelection,false,false) || window.parent._wrap_popCallStack(  this.clearSelection()));
  this.selection.first.y = selX ? 0 : (ya.max - area.y1) * vertScale;
  this.selection.second.y = selX ? this.plotHeight : (ya.max - area.y2) * vertScale;
  this.selection.first.x = selY ? 0 : (area.x1 - xa.min) * hozScale;
  this.selection.second.x = selY ? this.plotWidth : (area.x2 - xa.min) * hozScale;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1485,66757,66777,this.drawSelection,false,false) || window.parent._wrap_popCallStack(  this.drawSelection()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1486,66781,66803,this.fireSelectEvent,false,false) || window.parent._wrap_popCallStack(  this.fireSelectEvent()));
}, drawSelection: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1487, 66823,67948, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var prevSelection = this.prevSelection, selection = this.selection, octx = this.octx, options = this.options, plotOffset = this.plotOffset;
  if (prevSelection != null && selection.first.x == prevSelection.first.x && selection.first.y == prevSelection.first.y && selection.second.x == prevSelection.second.x && selection.second.y == prevSelection.second.y) 
    return;
  octx.strokeStyle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1491,67229,67310,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1491,67229,67299,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1491,67229,67270,Flotr.parseColor,false,false) || window.parent._wrap_popCallStack(Flotr.parseColor(options.selection.color))).scale(null, null, null, 0.8))).toString()));
  octx.lineWidth = 1;
  octx.lineJoin = 'round';
  octx.fillStyle = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1494,67380,67461,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1494,67380,67450,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1494,67380,67421,Flotr.parseColor,false,false) || window.parent._wrap_popCallStack(Flotr.parseColor(options.selection.color))).scale(null, null, null, 0.4))).toString()));
  this.prevSelection = {first: {x: selection.first.x, y: selection.first.y}, second: {x: selection.second.x, y: selection.second.y}};
  var x = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1496,67607,67654,Math.min,false,false) || window.parent._wrap_popCallStack(Math.min(selection.first.x, selection.second.x))), y = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1496,67660,67707,Math.min,false,false) || window.parent._wrap_popCallStack(Math.min(selection.first.y, selection.second.y))), w = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1496,67713,67761,Math.abs,false,false) || window.parent._wrap_popCallStack(Math.abs(selection.second.x - selection.first.x))), h = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1496,67767,67815,Math.abs,false,false) || window.parent._wrap_popCallStack(Math.abs(selection.second.y - selection.first.y)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1497,67819,67879,octx.fillRect,false,false) || window.parent._wrap_popCallStack(  octx.fillRect(x + plotOffset.left, y + plotOffset.top, w, h)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1498,67883,67945,octx.strokeRect,false,false) || window.parent._wrap_popCallStack(  octx.strokeRect(x + plotOffset.left, y + plotOffset.top, w, h)));
}, selectionIsSane: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1499, 67967,68136, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var selection = this.selection;
  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1501,68023,68071,Math.abs,false,false) || window.parent._wrap_popCallStack(Math.abs(selection.second.x - selection.first.x))) >= 5 && (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1501,68080,68128,Math.abs,false,false) || window.parent._wrap_popCallStack(Math.abs(selection.second.y - selection.first.y))) >= 5;
}, clearHit: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1502, 68148,68576, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (this.prevHit) {
    var options = this.options, plotOffset = this.plotOffset, prevHit = this.prevHit;
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1505,68273,68544,this.octx.clearRect,false,false) || window.parent._wrap_popCallStack(    this.octx.clearRect((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1505,68293,68313,this.tHoz,false,false) || window.parent._wrap_popCallStack(this.tHoz(prevHit.x))) + plotOffset.left - options.points.radius * 2, (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1505,68361,68382,this.tVert,false,false) || window.parent._wrap_popCallStack(this.tVert(prevHit.y))) + plotOffset.top - options.points.radius * 2, options.points.radius * 3 + options.points.lineWidth * 3, options.points.radius * 3 + options.points.lineWidth * 3)));
    this.prevHit = null;
  }
}, hit: function(mouse) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1508, 68583,71981, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
      xpow = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1520,69221,69272,Math.pow,false,false) || window.parent._wrap_popCallStack(Math.pow(s.xaxis.scale * (data[j][0] - mouse.x), 2)));
      ypow = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1521,69287,69338,Math.pow,false,false) || window.parent._wrap_popCallStack(Math.pow(s.yaxis.scale * (data[j][1] - mouse.y), 2)));
      if (xpow < xsens && ypow < ysens && (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1522,69382,69404,Math.sqrt,false,false) || window.parent._wrap_popCallStack(Math.sqrt(xpow + ypow))) < n.dist) {
        n.dist = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1523,69434,69456,Math.sqrt,false,false) || window.parent._wrap_popCallStack(Math.sqrt(xpow + ypow)));
        n.x = data[j][0];
        n.y = data[j][1];
        n.mouse = s.mouse;
      }
    }
  }
  if (n.mouse && n.mouse.track && !prevHit || (prevHit && (n.x != prevHit.x || n.y != prevHit.y))) {
    var mt = this.mouseTrack || (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1531,69688,69724,this.el.select,false,false) || window.parent._wrap_popCallStack(this.el.select(".flotr-mouse-value")))[0], pos = '', p = options.mouse.position, m = options.mouse.margin, elStyle = 'opacity:0.7;background-color:#000;color:#fff;display:none;position:absolute;padding:2px 8px;-moz-border-radius:4px;border-radius:4px;white-space:nowrap;';
    if (!options.mouse.relative) {
      if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1533,70004,70015,p.charAt,false,false) || window.parent._wrap_popCallStack(p.charAt(0))) == 'n') 
        pos += 'top:' + (m + plotOffset.top) + 'px;';
      else if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1535,70094,70105,p.charAt,false,false) || window.parent._wrap_popCallStack(p.charAt(0))) == 's') 
        pos += 'bottom:' + (m + plotOffset.bottom) + 'px;';
      if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1537,70185,70196,p.charAt,false,false) || window.parent._wrap_popCallStack(p.charAt(1))) == 'e') 
        pos += 'right:' + (m + plotOffset.right) + 'px;';
      else if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1539,70279,70290,p.charAt,false,false) || window.parent._wrap_popCallStack(p.charAt(1))) == 'w') 
        pos += 'left:' + (m + plotOffset.left) + 'px;';
    } else {
      if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1542,70379,70390,p.charAt,false,false) || window.parent._wrap_popCallStack(p.charAt(0))) == 'n') 
        pos += 'bottom:' + (m - plotOffset.top - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1543,70449,70464,this.tVert,false,false) || window.parent._wrap_popCallStack(this.tVert(n.y))) + this.canvasHeight) + 'px;';
      else if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1544,70510,70521,p.charAt,false,false) || window.parent._wrap_popCallStack(p.charAt(0))) == 's') 
        pos += 'top:' + (m + plotOffset.top + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1545,70577,70592,this.tVert,false,false) || window.parent._wrap_popCallStack(this.tVert(n.y)))) + 'px;';
      if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1546,70613,70624,p.charAt,false,false) || window.parent._wrap_popCallStack(p.charAt(1))) == 'e') 
        pos += 'left:' + (m + plotOffset.left + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1547,70682,70696,this.tHoz,false,false) || window.parent._wrap_popCallStack(this.tHoz(n.x)))) + 'px;';
      else if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1548,70722,70733,p.charAt,false,false) || window.parent._wrap_popCallStack(p.charAt(1))) == 'w') 
        pos += 'right:' + (m - plotOffset.left - (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1549,70792,70806,this.tHoz,false,false) || window.parent._wrap_popCallStack(this.tHoz(n.x))) + this.canvasWidth) + 'px;';
    }
    elStyle += pos;
    if (!mt) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1553,70883,70962,this.el.insert,false,false) || window.parent._wrap_popCallStack(      this.el.insert('<div class="flotr-mouse-value" style="' + elStyle + '"></div>')));
      mt = this.mouseTrack = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1554,70993,71037,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1554,70993,71029,this.el.select,false,false) || window.parent._wrap_popCallStack(this.el.select('.flotr-mouse-value'))).first()));
    } else {
      this.mouseTrack = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1556,71076,71096,mt.setStyle,false,false) || window.parent._wrap_popCallStack(mt.setStyle(elStyle)));
    }
    if (n.x !== null && n.y !== null) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1559,71150,71159,mt.show,false,false) || window.parent._wrap_popCallStack(      mt.show()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1560,71167,71182,this.clearHit,false,false) || window.parent._wrap_popCallStack(      this.clearHit()));
      if (n.mouse.lineColor != null) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1562,71231,71242,octx.save,false,false) || window.parent._wrap_popCallStack(        octx.save()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1563,71252,71299,octx.translate,false,false) || window.parent._wrap_popCallStack(        octx.translate(plotOffset.left, plotOffset.top)));
        octx.lineWidth = options.points.lineWidth;
        octx.strokeStyle = n.mouse.lineColor;
        octx.fillStyle = '#ffffff';
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1567,71442,71458,octx.beginPath,false,false) || window.parent._wrap_popCallStack(        octx.beginPath()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1568,71468,71553,octx.arc,false,false) || window.parent._wrap_popCallStack(        octx.arc((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1568,71477,71491,this.tHoz,false,false) || window.parent._wrap_popCallStack(this.tHoz(n.x))), (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1568,71493,71508,this.tVert,false,false) || window.parent._wrap_popCallStack(this.tVert(n.y))), options.mouse.radius, 0, 2 * Math.PI, true)));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1569,71563,71574,octx.fill,false,false) || window.parent._wrap_popCallStack(        octx.fill()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1570,71584,71597,octx.stroke,false,false) || window.parent._wrap_popCallStack(        octx.stroke()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1571,71607,71621,octx.restore,false,false) || window.parent._wrap_popCallStack(        octx.restore()));
      }
      this.prevHit = n;
      var decimals = n.mouse.trackDecimals;
      if (decimals == null || decimals < 0) 
        decimals = 0;
      mt.innerHTML = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1577,71787,71863,n.mouse.trackFormatter,false,false) || window.parent._wrap_popCallStack(n.mouse.trackFormatter({x: (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1577,71814,71835,n.x.toFixed,false,false) || window.parent._wrap_popCallStack(n.x.toFixed(decimals))), y: (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1577,71840,71861,n.y.toFixed,false,false) || window.parent._wrap_popCallStack(n.y.toFixed(decimals)))})));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1578,71871,71902,mt.fire,false,false) || window.parent._wrap_popCallStack(      mt.fire('flotr:hit', [n, this])));
    } else if (prevHit) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1580,71936,71945,mt.hide,false,false) || window.parent._wrap_popCallStack(      mt.hide()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1581,71953,71968,this.clearHit,false,false) || window.parent._wrap_popCallStack(      this.clearHit()));
    }
  }
}, saveImage: function(type, width, height, replaceCanvas) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1584, 71994,72634, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var image = null;
  switch (type) {
    case 'jpeg':
    case 'jpg':
      image = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1589,72126,72192,Canvas2Image.saveAsJPEG,false,false) || window.parent._wrap_popCallStack(Canvas2Image.saveAsJPEG(this.canvas, replaceCanvas, width, height)));
      break;
    default:
    case 'png':
      image = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1593,72250,72315,Canvas2Image.saveAsPNG,false,false) || window.parent._wrap_popCallStack(Canvas2Image.saveAsPNG(this.canvas, replaceCanvas, width, height)));
      break;
    case 'bmp':
      image = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1596,72360,72425,Canvas2Image.saveAsBMP,false,false) || window.parent._wrap_popCallStack(Canvas2Image.saveAsBMP(this.canvas, replaceCanvas, width, height)));
      break;
  }
  if ((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1599,72450,72473,Object.isElement,false,false) || window.parent._wrap_popCallStack(Object.isElement(image))) && replaceCanvas) {
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1600,72498,72518,this.restoreCanvas,false,false) || window.parent._wrap_popCallStack(    this.restoreCanvas()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1601,72524,72542,this.canvas.hide,false,false) || window.parent._wrap_popCallStack(    this.canvas.hide()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1602,72548,72567,this.overlay.hide,false,false) || window.parent._wrap_popCallStack(    this.overlay.hide()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1603,72573,72627,this.el.insert,false,false) || window.parent._wrap_popCallStack(    this.el.insert((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1603,72588,72626,image.setStyle,false,false) || window.parent._wrap_popCallStack(image.setStyle({position: 'absolute'}))))));
  }
}, restoreCanvas: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1605, 72651,72752, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1606,72666,72684,this.canvas.show,false,false) || window.parent._wrap_popCallStack(  this.canvas.show()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1607,72688,72707,this.overlay.show,false,false) || window.parent._wrap_popCallStack(  this.overlay.show()));
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1608,72711,72749,null,false,false) || window.parent._wrap_popCallStack(  (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1608,72711,72732,this.el.select,false,false) || window.parent._wrap_popCallStack(this.el.select('img'))).invoke('remove')));
}})));
Flotr.Color = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1610,72770,74130,Class.create,true,false) || window.parent._wrap_popCallStack(Class.create({initialize: function(r, g, b, a) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1610, 72796,72977, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.rgba = ['r', 'g', 'b', 'a'];
  var x = 4;
  while (-1 < --x) {
    this[this.rgba[x]] = arguments[x] || ((x == 3) ? 1.0 : 0);
  }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1616,72958,72974,this.normalize,false,false) || window.parent._wrap_popCallStack(  this.normalize()));
}, adjust: function(rd, gd, bd, ad) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1617, 72987,73153, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var x = 4;
  while (-1 < --x) {
    if (arguments[x] != null) 
      this[this.rgba[x]] += arguments[x];
  }
  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1623,73134,73150,this.normalize,false,false) || window.parent._wrap_popCallStack(this.normalize()));
}, clone: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1624, 73162,73234, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1625,73184,73231,Flotr.Color,false,false) || window.parent._wrap_popCallStack(new Flotr.Color(this.r, this.b, this.g, this.a)));
}, limit: function(val, minVal, maxVal) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1626, 73243,73326, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1627,73284,73323,Math.max,false,false) || window.parent._wrap_popCallStack(Math.max((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1627,73293,73314,Math.min,false,false) || window.parent._wrap_popCallStack(Math.min(val, maxVal))), minVal)));
}, normalize: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1628, 73339,73558, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var limit = this.limit;
  this.r = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1630,73389,73420,limit,false,false) || window.parent._wrap_popCallStack(limit((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1630,73395,73411,parseInt,false,false) || window.parent._wrap_popCallStack(parseInt(this.r))), 0, 255)));
  this.g = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1631,73433,73464,limit,false,false) || window.parent._wrap_popCallStack(limit((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1631,73439,73455,parseInt,false,false) || window.parent._wrap_popCallStack(parseInt(this.g))), 0, 255)));
  this.b = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1632,73477,73508,limit,false,false) || window.parent._wrap_popCallStack(limit((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1632,73483,73499,parseInt,false,false) || window.parent._wrap_popCallStack(parseInt(this.b))), 0, 255)));
  this.a = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1633,73521,73540,limit,false,false) || window.parent._wrap_popCallStack(limit(this.a, 0, 1)));
  return this;
}, scale: function(rf, gf, bf, af) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1635, 73567,73733, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var x = 4;
  while (-1 < --x) {
    if (arguments[x] != null) 
      this[this.rgba[x]] *= arguments[x];
  }
  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1641,73714,73730,this.normalize,false,false) || window.parent._wrap_popCallStack(this.normalize()));
}, distance: function(color) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1642, 73745,73963, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!color) 
    return;
  color = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1645,73800,73827,Flotr.parseColor,false,false) || window.parent._wrap_popCallStack(new Flotr.parseColor(color)));
  var dist = 0;
  var x = 3;
  while (-1 < --x) {
    dist += (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1649,73891,73941,Math.abs,false,false) || window.parent._wrap_popCallStack(Math.abs(this[this.rgba[x]] - color[this.rgba[x]])));
  }
  return dist;
}, toString: function() {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1652, 73975,74128, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (this.a >= 1.0) ? 'rgb(' + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1653,74024,74058,[this.r, this.g, this.b].join,false,false) || window.parent._wrap_popCallStack([this.r, this.g, this.b].join(','))) + ')' : 'rgba(' + (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1653,74077,74119,[this.r, this.g, this.b, this.a].join,false,false) || window.parent._wrap_popCallStack([this.r, this.g, this.b, this.a].join(','))) + ')';
}})));
Flotr.Color.lookupColors = {aqua: [0, 255, 255], azure: [240, 255, 255], beige: [245, 245, 220], black: [0, 0, 0], blue: [0, 0, 255], brown: [165, 42, 42], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgrey: [169, 169, 169], darkgreen: [0, 100, 0], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkviolet: [148, 0, 211], fuchsia: [255, 0, 255], gold: [255, 215, 0], green: [0, 128, 0], indigo: [75, 0, 130], khaki: [240, 230, 140], lightblue: [173, 216, 230], lightcyan: [224, 255, 255], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightyellow: [255, 255, 224], lime: [0, 255, 0], magenta: [255, 0, 255], maroon: [128, 0, 0], navy: [0, 0, 128], olive: [128, 128, 0], orange: [255, 165, 0], pink: [255, 192, 203], purple: [128, 0, 128], violet: [128, 0, 128], red: [255, 0, 0], silver: [192, 192, 192], white: [255, 255, 255], yellow: [255, 255, 0]};
Flotr.Date = {format: function(d, format) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1656, 75220,76304, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!d) 
    return;
  var leftPad = function(n) {
window.parent._wrap_addFunctionToMap('flotr-0.2.0-alpha.js', 1659, 75281,75354, (typeof arguments === 'object' ? arguments.callee.caller : null));

  n = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1660,75301,75313,n.toString,false,false) || window.parent._wrap_popCallStack(n.toString()));
  return n.length == 1 ? "0" + n : n;
};
  var r = [];
  var escape = false;
  for (var i = 0; i < format.length; ++i) {
    var c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1666,75448,75464,format.charAt,false,false) || window.parent._wrap_popCallStack(format.charAt(i)));
    if (escape) {
      switch (c) {
        case 'h':
          c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1670,75535,75561,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1670,75535,75550,d.getUTCHours,false,false) || window.parent._wrap_popCallStack(d.getUTCHours())).toString()));
          break;
        case 'H':
          c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1673,75612,75636,leftPad,false,false) || window.parent._wrap_popCallStack(leftPad((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1673,75620,75635,d.getUTCHours,false,false) || window.parent._wrap_popCallStack(d.getUTCHours())))));
          break;
        case 'M':
          c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1676,75687,75713,leftPad,false,false) || window.parent._wrap_popCallStack(leftPad((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1676,75695,75712,d.getUTCMinutes,false,false) || window.parent._wrap_popCallStack(d.getUTCMinutes())))));
          break;
        case 'S':
          c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1679,75764,75790,leftPad,false,false) || window.parent._wrap_popCallStack(leftPad((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1679,75772,75789,d.getUTCSeconds,false,false) || window.parent._wrap_popCallStack(d.getUTCSeconds())))));
          break;
        case 'd':
          c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1682,75841,75866,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1682,75841,75855,d.getUTCDate,false,false) || window.parent._wrap_popCallStack(d.getUTCDate())).toString()));
          break;
        case 'm':
          c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1685,75918,75949,null,false,false) || window.parent._wrap_popCallStack(((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1685,75918,75933,d.getUTCMonth,false,false) || window.parent._wrap_popCallStack(d.getUTCMonth())) + 1).toString()));
          break;
        case 'y':
          c = (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1688,76000,76029,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1688,76000,76018,d.getUTCFullYear,false,false) || window.parent._wrap_popCallStack(d.getUTCFullYear())).toString()));
          break;
        case 'b':
          c = Flotr.Date.monthNames[(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1691,76102,76117,d.getUTCMonth,false,false) || window.parent._wrap_popCallStack(d.getUTCMonth()))];
          break;
      }
(window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1694,76151,76160,r.push,false,false) || window.parent._wrap_popCallStack(      r.push(c)));
      escape = false;
    } else {
      if (c == "%") 
        escape = true;
      else 
        (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1700,76261,76270,r.push,false,false) || window.parent._wrap_popCallStack(      r.push(c)));
    }
  }
  return (window.parent._wrap_setLastFunctionCall("flotr-0.2.0-alpha.js",1703,76291,76301,r.join,false,false) || window.parent._wrap_popCallStack(r.join("")));
}, timeUnits: {"second": 1000, "minute": 60 * 1000, "hour": 60 * 60 * 1000, "day": 24 * 60 * 60 * 1000, "month": 30 * 24 * 60 * 60 * 1000, "year": 365.2425 * 24 * 60 * 60 * 1000}, spec: [[1, "second"], [2, "second"], [5, "second"], [10, "second"], [30, "second"], [1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"], [30, "minute"], [1, "hour"], [2, "hour"], [4, "hour"], [8, "hour"], [12, "hour"], [1, "day"], [2, "day"], [3, "day"], [0.25, "month"], [0.5, "month"], [1, "month"], [2, "month"], [3, "month"], [6, "month"], [1, "year"]], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]};
