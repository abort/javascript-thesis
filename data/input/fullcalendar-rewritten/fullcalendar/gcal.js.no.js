_wrap_staticMeasuredFunctions['gcal.js.no.js'] = 8;
_wrap_staticMeasuredCalls['gcal.js.no.js'] =24;
((_wrap_setLastFunctionCall("gcal.js.no.js",1,1,3552,null,true,false) || function($) {
_wrap_addFunctionToMap('gcal.js.no.js', 1, 1,3544, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var fc = $.fullCalendar;
  var formatDate = fc.formatDate;
  var parseISO8601 = fc.parseISO8601;
  var addDays = fc.addDays;
  var applyAll = fc.applyAll;
(_wrap_setLastFunctionCall("gcal.js.no.js",7,187,597,fc.sourceNormalizers.push,false,false) ||   fc.sourceNormalizers.push(function(sourceOptions) {
_wrap_addFunctionToMap('gcal.js.no.js', 7, 213,596, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (sourceOptions.dataType == 'gcal' || sourceOptions.dataType === undefined && (_wrap_setLastFunctionCall("gcal.js.no.js",8,329,414,null,false,false) || (sourceOptions.url || '').match(/^(http|https):\/\/www.google.com\/calendar\/feeds\//))) {
    sourceOptions.dataType = 'gcal';
    if (sourceOptions.editable === undefined) {
      sourceOptions.editable = false;
    }
  }
}));
(_wrap_setLastFunctionCall("gcal.js.no.js",15,603,793,fc.sourceFetchers.push,false,false) ||   fc.sourceFetchers.push(function(sourceOptions, start, end) {
_wrap_addFunctionToMap('gcal.js.no.js', 15, 626,792, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (sourceOptions.dataType == 'gcal') {
    return (_wrap_setLastFunctionCall("gcal.js.no.js",17,732,775,transformOptions,false,false) || transformOptions(sourceOptions, start, end));
  }
}));
  function transformOptions(sourceOptions, start, end) {
_wrap_addFunctionToMap('gcal.js.no.js', 20, 799,3377, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var success = sourceOptions.success;
    var data = (_wrap_setLastFunctionCall("gcal.js.no.js",22,918,1151,$.extend,false,false) || $.extend({}, sourceOptions.data || {}, {'start-min': (_wrap_setLastFunctionCall("gcal.js.no.js",23,988,1010,formatDate,false,false) || formatDate(start, 'u')), 'start-max': (_wrap_setLastFunctionCall("gcal.js.no.js",24,1041,1061,formatDate,false,false) || formatDate(end, 'u')), 'singleevents': true, 'max-results': 9999}));
    var ctz = sourceOptions.currentTimezone;
    if (ctz) {
      data.ctz = ctz = (_wrap_setLastFunctionCall("gcal.js.no.js",30,1250,1271,ctz.replace,false,false) || ctz.replace(' ', '_'));
    }
    return (_wrap_setLastFunctionCall("gcal.js.no.js",32,1298,3370,$.extend,false,false) || $.extend({}, sourceOptions, {url: (_wrap_setLastFunctionCall("gcal.js.no.js",33,1345,1391,sourceOptions.url.replace,false,false) || sourceOptions.url.replace(/\/basic$/, '/full')) + '?alt=json-in-script&callback=?', dataType: 'jsonp', data: data, startParam: false, endParam: false, success: function(data) {
_wrap_addFunctionToMap('gcal.js.no.js', 38, 1564,3359, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var events = [];
  if (data.feed.entry) {
(_wrap_setLastFunctionCall("gcal.js.no.js",41,1674,3064,$.each,false,false) ||     $.each(data.feed.entry, function(i, entry) {
_wrap_addFunctionToMap('gcal.js.no.js', 41, 1698,3063, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var startStr = entry['gd$when'][0]['startTime'];
  var start = (_wrap_setLastFunctionCall("gcal.js.no.js",43,1829,1857,parseISO8601,false,false) || parseISO8601(startStr, true));
  var end = (_wrap_setLastFunctionCall("gcal.js.no.js",44,1893,1943,parseISO8601,false,false) || parseISO8601(entry['gd$when'][0]['endTime'], true));
  var allDay = (_wrap_setLastFunctionCall("gcal.js.no.js",45,1982,2003,startStr.indexOf,false,false) || startStr.indexOf('T')) == -1;
  var url;
(_wrap_setLastFunctionCall("gcal.js.no.js",47,2068,2446,$.each,false,false) ||   $.each(entry.link, function(i, link) {
_wrap_addFunctionToMap('gcal.js.no.js', 47, 2087,2445, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (link.type == 'text/html') {
    url = link.href;
    if (ctz) {
      url += ((_wrap_setLastFunctionCall("gcal.js.no.js",51,2304,2320,url.indexOf,false,false) || url.indexOf('?')) == -1 ? '?' : '&') + 'ctz=' + ctz;
    }
  }
}));
  if (allDay) {
(_wrap_setLastFunctionCall("gcal.js.no.js",56,2514,2530,addDays,false,false) ||     addDays(end, -1));
  }
(_wrap_setLastFunctionCall("gcal.js.no.js",58,2582,3040,events.push,false,false) ||   events.push({id: entry['gCal$uid']['value'], title: entry['title']['$t'], url: url, start: start, end: end, allDay: allDay, location: entry['gd$where'][0]['valueString'], description: entry['content']['$t']}));
}));
  }
  var args = (_wrap_setLastFunctionCall("gcal.js.no.js",70,3111,3168,[events].concat,false,false) || [events].concat((_wrap_setLastFunctionCall("gcal.js.no.js",70,3127,3167,Array.prototype.slice.call,false,true) || Array.prototype.slice.call(arguments, 1))));
  var res = (_wrap_setLastFunctionCall("gcal.js.no.js",71,3196,3225,applyAll,false,false) || applyAll(success, this, args));
  if ((_wrap_setLastFunctionCall("gcal.js.no.js",72,3247,3261,$.isArray,false,false) || $.isArray(res))) {
    return res;
  }
  return events;
}}));
  }
  fc.gcalFeed = function(url, sourceOptions) {
_wrap_addFunctionToMap('gcal.js.no.js', 79, 3396,3541, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("gcal.js.no.js",80,3443,3534,$.extend,false,false) || $.extend({}, sourceOptions, {url: url, dataType: 'gcal'}));
};
}(jQuery)));
