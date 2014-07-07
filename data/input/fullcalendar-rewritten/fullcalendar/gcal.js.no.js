_wrap_staticMeasuredFunctions['gcal.js.no.js'] = 8;
_wrap_staticMeasuredCalls['gcal.js.no.js'] =24;
((_wrap_setLastFunctionCall("gcal.js.no.js",1,1,2379,null,true,false) || _wrap_popCallStack(function($) {
_wrap_addFunctionToMap('gcal.js.no.js', 1, 1,2371, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var fc = $.fullCalendar;
  var formatDate = fc.formatDate;
  var parseISO8601 = fc.parseISO8601;
  var addDays = fc.addDays;
  var applyAll = fc.applyAll;
(_wrap_setLastFunctionCall("gcal.js.no.js",7,174,533,fc.sourceNormalizers.push,false,false) || _wrap_popCallStack(  fc.sourceNormalizers.push(function(sourceOptions) {
_wrap_addFunctionToMap('gcal.js.no.js', 7, 200,532, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (sourceOptions.dataType == 'gcal' || sourceOptions.dataType === undefined && (_wrap_setLastFunctionCall("gcal.js.no.js",8,309,394,null,false,false) || _wrap_popCallStack((sourceOptions.url || '').match(/^(http|https):\/\/www.google.com\/calendar\/feeds\//)))) {
    sourceOptions.dataType = 'gcal';
    if (sourceOptions.editable === undefined) {
      sourceOptions.editable = false;
    }
  }
})));
(_wrap_setLastFunctionCall("gcal.js.no.js",15,537,702,fc.sourceFetchers.push,false,false) || _wrap_popCallStack(  fc.sourceFetchers.push(function(sourceOptions, start, end) {
_wrap_addFunctionToMap('gcal.js.no.js', 15, 560,701, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (sourceOptions.dataType == 'gcal') {
    return (_wrap_setLastFunctionCall("gcal.js.no.js",17,651,694,transformOptions,false,false) || _wrap_popCallStack(transformOptions(sourceOptions, start, end)));
  }
})));
  function transformOptions(sourceOptions, start, end) {
_wrap_addFunctionToMap('gcal.js.no.js', 20, 706,2251, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var success = sourceOptions.success;
    var data = (_wrap_setLastFunctionCall("gcal.js.no.js",22,817,972,$.extend,false,false) || _wrap_popCallStack($.extend({}, sourceOptions.data || {}, {'start-min': (_wrap_setLastFunctionCall("gcal.js.no.js",22,870,892,formatDate,false,false) || _wrap_popCallStack(formatDate(start, 'u'))), 'start-max': (_wrap_setLastFunctionCall("gcal.js.no.js",22,907,927,formatDate,false,false) || _wrap_popCallStack(formatDate(end, 'u'))), 'singleevents': true, 'max-results': 9999})));
    var ctz = sourceOptions.currentTimezone;
    if (ctz) {
      data.ctz = ctz = (_wrap_setLastFunctionCall("gcal.js.no.js",25,1057,1078,ctz.replace,false,false) || _wrap_popCallStack(ctz.replace(' ', '_')));
    }
    return (_wrap_setLastFunctionCall("gcal.js.no.js",27,1097,2246,$.extend,false,false) || _wrap_popCallStack($.extend({}, sourceOptions, {url: (_wrap_setLastFunctionCall("gcal.js.no.js",27,1131,1177,sourceOptions.url.replace,false,false) || _wrap_popCallStack(sourceOptions.url.replace(/\/basic$/, '/full'))) + '?alt=json-in-script&callback=?', dataType: 'jsonp', data: data, startParam: false, endParam: false, success: function(data) {
_wrap_addFunctionToMap('gcal.js.no.js', 27, 1290,2244, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var events = [];
  if (data.feed.entry) {
(_wrap_setLastFunctionCall("gcal.js.no.js",30,1355,2061,$.each,false,false) || _wrap_popCallStack(    $.each(data.feed.entry, function(i, entry) {
_wrap_addFunctionToMap('gcal.js.no.js', 30, 1379,2060, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var startStr = entry['gd$when'][0]['startTime'];
  var start = (_wrap_setLastFunctionCall("gcal.js.no.js",32,1465,1493,parseISO8601,false,false) || _wrap_popCallStack(parseISO8601(startStr, true)));
  var end = (_wrap_setLastFunctionCall("gcal.js.no.js",33,1507,1557,parseISO8601,false,false) || _wrap_popCallStack(parseISO8601(entry['gd$when'][0]['endTime'], true)));
  var allDay = (_wrap_setLastFunctionCall("gcal.js.no.js",34,1574,1595,startStr.indexOf,false,false) || _wrap_popCallStack(startStr.indexOf('T'))) == -1;
  var url;
(_wrap_setLastFunctionCall("gcal.js.no.js",36,1616,1803,$.each,false,false) || _wrap_popCallStack(  $.each(entry.link, function(i, link) {
_wrap_addFunctionToMap('gcal.js.no.js', 36, 1635,1802, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (link.type == 'text/html') {
    url = link.href;
    if (ctz) {
      url += ((_wrap_setLastFunctionCall("gcal.js.no.js",40,1739,1755,url.indexOf,false,false) || _wrap_popCallStack(url.indexOf('?'))) == -1 ? '?' : '&') + 'ctz=' + ctz;
    }
  }
})));
  if (allDay) {
(_wrap_setLastFunctionCall("gcal.js.no.js",45,1825,1841,addDays,false,false) || _wrap_popCallStack(    addDays(end, -1)));
  }
(_wrap_setLastFunctionCall("gcal.js.no.js",47,1849,2057,events.push,false,false) || _wrap_popCallStack(  events.push({id: entry['gCal$uid']['value'], title: entry['title']['$t'], url: url, start: start, end: end, allDay: allDay, location: entry['gd$where'][0]['valueString'], description: entry['content']['$t']})));
})));
  }
  var args = (_wrap_setLastFunctionCall("gcal.js.no.js",50,2080,2137,[events].concat,false,false) || _wrap_popCallStack([events].concat((_wrap_setLastFunctionCall("gcal.js.no.js",50,2096,2136,Array.prototype.slice.call,false,true) || _wrap_popCallStack(Array.prototype.slice.call(arguments, 1))))));
  var res = (_wrap_setLastFunctionCall("gcal.js.no.js",51,2151,2180,applyAll,false,false) || _wrap_popCallStack(applyAll(success, this, args)));
  if ((_wrap_setLastFunctionCall("gcal.js.no.js",52,2188,2202,$.isArray,false,false) || _wrap_popCallStack($.isArray(res)))) {
    return res;
  }
  return events;
}})));
  }
  fc.gcalFeed = function(url, sourceOptions) {
_wrap_addFunctionToMap('gcal.js.no.js', 58, 2268,2368, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("gcal.js.no.js",59,2308,2365,$.extend,false,false) || _wrap_popCallStack($.extend({}, sourceOptions, {url: url, dataType: 'gcal'})));
};
}(jQuery))));
