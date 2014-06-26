_wrap_staticMeasuredFunctions['fullcalendar.js'] = 375;
_wrap_staticMeasuredCalls['fullcalendar.js'] =1479;
((_wrap_setLastFunctionCall("fullcalendar.js",1,1,148424) || function($, undefined) {
_wrap_addFunctionToMap('fullcalendar.js', 1, 1,148416, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var defaults = {defaultView: 'month', aspectRatio: 1.35, header: {left: 'title', center: '', right: 'today prev,next'}, weekends: true, allDayDefault: true, ignoreTimezone: true, lazyFetching: true, startParam: 'start', endParam: 'end', titleFormat: {month: 'MMMM yyyy', week: 'MMM d[ yyyy]{ \'&#8212;\'[ MMM] d yyyy}', day: 'dddd, MMM d, yyyy'}, columnFormat: {month: 'ddd', week: 'ddd M/d', day: 'dddd M/d'}, timeFormat: {'': 'h(:mm)t'}, isRTL: false, firstDay: 0, monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], buttonText: {prev: '&nbsp;&#9668;&nbsp;', next: '&nbsp;&#9658;&nbsp;', prevYear: '&nbsp;&lt;&lt;&nbsp;', nextYear: '&nbsp;&gt;&gt;&nbsp;', today: 'today', month: 'month', week: 'week', day: 'day'}, theme: false, buttonIcons: {prev: 'circle-triangle-w', next: 'circle-triangle-e'}, unselectAuto: true, dropAccept: '*'};
  var rtlDefaults = {header: {left: 'next,prev today', center: '', right: 'title'}, buttonText: {prev: '&nbsp;&#9658;&nbsp;', next: '&nbsp;&#9668;&nbsp;', prevYear: '&nbsp;&gt;&gt;&nbsp;', nextYear: '&nbsp;&lt;&lt;&nbsp;'}, buttonIcons: {prev: 'circle-triangle-e', next: 'circle-triangle-w'}};
  var fc = $.fullCalendar = {version: '1.5.3'};
  var fcViews = fc.views = {};
  $.fn.fullCalendar = function(options) {
_wrap_addFunctionToMap('fullcalendar.js', 112, 3175,4565, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (typeof options == 'string') {
    var args = (_wrap_setLastFunctionCall("fullcalendar.js",114,3261,3301) || Array.prototype.slice.call(arguments, 1));
    var res;
(_wrap_setLastFunctionCall("fullcalendar.js",116,3336,3819) ||     this.each(function() {
_wrap_addFunctionToMap('fullcalendar.js', 116, 3346,3818, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var calendar = (_wrap_setLastFunctionCall("fullcalendar.js",117,3391,3419) || $.data(this, 'fullCalendar'));
  if (calendar && (_wrap_setLastFunctionCall("fullcalendar.js",118,3453,3484) || $.isFunction(calendar[options]))) {
    var r = (_wrap_setLastFunctionCall("fullcalendar.js",119,3516,3555) || calendar[options].apply(calendar, args));
    if (res === undefined) {
      res = r;
    }
    if (options == 'destroy') {
(_wrap_setLastFunctionCall("fullcalendar.js",124,3729,3763) ||       $.removeData(this, 'fullCalendar'));
    }
  }
}));
    if (res !== undefined) {
      return res;
    }
    return this;
  }
  var eventSources = options.eventSources || [];
  delete options.eventSources;
  if (options.events) {
(_wrap_setLastFunctionCall("fullcalendar.js",136,4069,4102) ||     eventSources.push(options.events));
    delete options.events;
  }
  options = (_wrap_setLastFunctionCall("fullcalendar.js",139,4167,4287) || $.extend(true, {}, defaults, options.isRTL || options.isRTL === undefined && defaults.isRTL ? rtlDefaults : {}, options));
(_wrap_setLastFunctionCall("fullcalendar.js",140,4297,4537) ||   this.each(function(i, _element) {
_wrap_addFunctionToMap('fullcalendar.js', 140, 4307,4536, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var element = (_wrap_setLastFunctionCall("fullcalendar.js",141,4358,4369) || $(_element));
  var calendar = (_wrap_setLastFunctionCall("fullcalendar.js",142,4398,4442) || new Calendar(element, options, eventSources));
(_wrap_setLastFunctionCall("fullcalendar.js",143,4456,4494) ||   element.data('fullCalendar', calendar));
(_wrap_setLastFunctionCall("fullcalendar.js",144,4508,4525) ||   calendar.render());
}));
  return this;
};
  function setDefaults(d) {
_wrap_addFunctionToMap('fullcalendar.js', 148, 4571,4639, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",149,4605,4632) ||     $.extend(true, defaults, d));
  }
  function Calendar(element, options, eventSources) {
_wrap_addFunctionToMap('fullcalendar.js', 151, 4644,16838, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.options = options;
    t.render = render;
    t.destroy = destroy;
    t.refetchEvents = refetchEvents;
    t.reportEvents = reportEvents;
    t.reportEventChange = reportEventChange;
    t.rerenderEvents = rerenderEvents;
    t.changeView = changeView;
    t.select = select;
    t.unselect = unselect;
    t.prev = prev;
    t.next = next;
    t.prevYear = prevYear;
    t.nextYear = nextYear;
    t.today = today;
    t.gotoDate = gotoDate;
    t.incrementDate = incrementDate;
    t.formatDate = function(format, date) {
_wrap_addFunctionToMap('fullcalendar.js', 170, 5296,5385, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",171,5341,5374) || formatDate(format, date, options));
};
    t.formatDates = function(format, date1, date2) {
_wrap_addFunctionToMap('fullcalendar.js', 173, 5411,5517, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",174,5464,5506) || formatDates(format, date1, date2, options));
};
    t.getDate = getDate;
    t.getView = getView;
    t.option = option;
    t.trigger = trigger;
(_wrap_setLastFunctionCall("fullcalendar.js",180,5641,5684) ||     EventManager.call(t, options, eventSources));
    var isFetchNeeded = t.isFetchNeeded;
    var fetchEvents = t.fetchEvents;
    var _element = element[0];
    var header;
    var headerElement;
    var content;
    var tm;
    var currentView;
    var viewInstances = {};
    var elementOuterWidth;
    var suggestedViewHeight;
    var absoluteViewElement;
    var resizeUID = 0;
    var ignoreWindowResize = 0;
    var date = (_wrap_setLastFunctionCall("fullcalendar.js",195,6127,6137) || new Date());
    var events = [];
    var _dragElement;
(_wrap_setLastFunctionCall("fullcalendar.js",198,6198,6253) ||     setYMD(date, options.year, options.month, options.date));
    function render(inc) {
_wrap_addFunctionToMap('fullcalendar.js', 199, 6263,6521, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (!content) {
(_wrap_setLastFunctionCall("fullcalendar.js",201,6330,6345) ||         initialRender());
      } else {
(_wrap_setLastFunctionCall("fullcalendar.js",203,6384,6394) ||         calcSize());
(_wrap_setLastFunctionCall("fullcalendar.js",204,6412,6428) ||         markSizesDirty());
(_wrap_setLastFunctionCall("fullcalendar.js",205,6446,6463) ||         markEventsDirty());
(_wrap_setLastFunctionCall("fullcalendar.js",206,6481,6496) ||         renderView(inc));
      }
    }
    function initialRender() {
_wrap_addFunctionToMap('fullcalendar.js', 209, 6530,7288, (typeof arguments === 'object' ? arguments.callee.caller : null));

      tm = options.theme ? 'ui' : 'fc';
(_wrap_setLastFunctionCall("fullcalendar.js",211,6615,6637) ||       element.addClass('fc'));
      if (options.isRTL) {
(_wrap_setLastFunctionCall("fullcalendar.js",213,6688,6714) ||         element.addClass('fc-rtl'));
      }
      if (options.theme) {
(_wrap_setLastFunctionCall("fullcalendar.js",216,6779,6808) ||         element.addClass('ui-widget'));
      }
      content = (_wrap_setLastFunctionCall("fullcalendar.js",218,6846,6925) || (_wrap_setLastFunctionCall("fullcalendar.js",218,6846,6906) || $('<div class=\'fc-content\' style=\'position:relative\'/>')).prependTo(element));
      header = (_wrap_setLastFunctionCall("fullcalendar.js",219,6948,6970) || new Header(t, options));
      headerElement = (_wrap_setLastFunctionCall("fullcalendar.js",220,7000,7015) || header.render());
      if (headerElement) {
(_wrap_setLastFunctionCall("fullcalendar.js",222,7066,7096) ||         element.prepend(headerElement));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",224,7124,7155) ||       changeView(options.defaultView));
(_wrap_setLastFunctionCall("fullcalendar.js",225,7169,7199) ||       (_wrap_setLastFunctionCall("fullcalendar.js",225,7169,7178) || $(window)).resize(windowResize));
      if (!(_wrap_setLastFunctionCall("fullcalendar.js",226,7218,7231) || bodyVisible())) {
(_wrap_setLastFunctionCall("fullcalendar.js",227,7251,7263) ||         lateRender());
      }
    }
    function lateRender() {
_wrap_addFunctionToMap('fullcalendar.js', 230, 7297,7497, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",231,7333,7486) ||       setTimeout(function() {
_wrap_addFunctionToMap('fullcalendar.js', 231, 7344,7482, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!currentView.start && (_wrap_setLastFunctionCall("fullcalendar.js",232,7400,7413) || bodyVisible())) {
(_wrap_setLastFunctionCall("fullcalendar.js",233,7437,7449) ||     renderView());
  }
}, 0));
    }
    function destroy() {
_wrap_addFunctionToMap('fullcalendar.js', 237, 7506,7706, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",238,7539,7579) ||       (_wrap_setLastFunctionCall("fullcalendar.js",238,7539,7548) || $(window)).unbind('resize', windowResize));
(_wrap_setLastFunctionCall("fullcalendar.js",239,7593,7609) ||       header.destroy());
(_wrap_setLastFunctionCall("fullcalendar.js",240,7623,7639) ||       content.remove());
(_wrap_setLastFunctionCall("fullcalendar.js",241,7653,7695) ||       element.removeClass('fc fc-rtl ui-widget'));
    }
    function elementVisible() {
_wrap_addFunctionToMap('fullcalendar.js', 243, 7715,7799, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return _element.offsetWidth !== 0;
    }
    function bodyVisible() {
_wrap_addFunctionToMap('fullcalendar.js', 246, 7808,7893, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",247,7852,7861) || $('body'))[0].offsetWidth !== 0;
    }
    function changeView(newViewName) {
_wrap_addFunctionToMap('fullcalendar.js', 249, 7902,9400, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (!currentView || newViewName != currentView.name) {
        ignoreWindowResize++;
(_wrap_setLastFunctionCall("fullcalendar.js",252,8058,8068) ||         unselect());
        var oldView = currentView;
        var newViewElement;
        if (oldView) {
(_wrap_setLastFunctionCall("fullcalendar.js",256,8201,8230) ||           (oldView.beforeHide || noop)());
(_wrap_setLastFunctionCall("fullcalendar.js",257,8252,8291) ||           setMinHeight(content, (_wrap_setLastFunctionCall("fullcalendar.js",257,8274,8290) || content.height())));
(_wrap_setLastFunctionCall("fullcalendar.js",258,8313,8335) ||           oldView.element.hide());
        } else {
(_wrap_setLastFunctionCall("fullcalendar.js",260,8382,8406) ||           setMinHeight(content, 1));
        }
(_wrap_setLastFunctionCall("fullcalendar.js",262,8442,8475) ||         content.css('overflow', 'hidden'));
        currentView = viewInstances[newViewName];
        if (currentView) {
(_wrap_setLastFunctionCall("fullcalendar.js",265,8590,8616) ||           currentView.element.show());
        } else {
          currentView = viewInstances[newViewName] = (_wrap_setLastFunctionCall("fullcalendar.js",267,8706,8877) || new fcViews[newViewName](newViewElement = absoluteViewElement = (_wrap_setLastFunctionCall("fullcalendar.js",267,8770,8873) || (_wrap_setLastFunctionCall("fullcalendar.js",267,8770,8855) || $('<div class=\'fc-view fc-view-' + newViewName + '\' style=\'position:absolute\'/>')).appendTo(content)), t));
        }
        if (oldView) {
(_wrap_setLastFunctionCall("fullcalendar.js",270,8948,8985) ||           header.deactivateButton(oldView.name));
        }
(_wrap_setLastFunctionCall("fullcalendar.js",272,9021,9055) ||         header.activateButton(newViewName));
(_wrap_setLastFunctionCall("fullcalendar.js",273,9073,9085) ||         renderView());
(_wrap_setLastFunctionCall("fullcalendar.js",274,9103,9130) ||         content.css('overflow', ''));
        if (oldView) {
(_wrap_setLastFunctionCall("fullcalendar.js",276,9183,9207) ||           setMinHeight(content, 1));
        }
        if (!newViewElement) {
(_wrap_setLastFunctionCall("fullcalendar.js",279,9287,9319) ||           (currentView.afterShow || noop)());
        }
        ignoreWindowResize--;
      }
    }
    function renderView(inc) {
_wrap_addFunctionToMap('fullcalendar.js', 284, 9409,10911, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if ((_wrap_setLastFunctionCall("fullcalendar.js",285,9452,9468) || elementVisible())) {
        ignoreWindowResize++;
(_wrap_setLastFunctionCall("fullcalendar.js",287,9526,9536) ||         unselect());
        if (suggestedViewHeight === undefined) {
(_wrap_setLastFunctionCall("fullcalendar.js",289,9615,9625) ||           calcSize());
        }
        var forceEventRender = false;
        if (!currentView.start || inc || date < currentView.start || date >= currentView.end) {
(_wrap_setLastFunctionCall("fullcalendar.js",293,9815,9849) ||           currentView.render(date, inc || 0));
(_wrap_setLastFunctionCall("fullcalendar.js",294,9871,9884) ||           setSize(true));
          forceEventRender = true;
        } else if (currentView.sizeDirty) {
(_wrap_setLastFunctionCall("fullcalendar.js",297,10003,10028) ||           currentView.clearEvents());
(_wrap_setLastFunctionCall("fullcalendar.js",298,10050,10059) ||           setSize());
          forceEventRender = true;
        } else if (currentView.eventsDirty) {
(_wrap_setLastFunctionCall("fullcalendar.js",301,10180,10205) ||           currentView.clearEvents());
          forceEventRender = true;
        }
        currentView.sizeDirty = false;
        currentView.eventsDirty = false;
(_wrap_setLastFunctionCall("fullcalendar.js",306,10382,10412) ||         updateEvents(forceEventRender));
        elementOuterWidth = (_wrap_setLastFunctionCall("fullcalendar.js",307,10450,10470) || element.outerWidth());
(_wrap_setLastFunctionCall("fullcalendar.js",308,10488,10525) ||         header.updateTitle(currentView.title));
        var today = (_wrap_setLastFunctionCall("fullcalendar.js",309,10555,10565) || new Date());
        if (today >= currentView.start && today < currentView.end) {
(_wrap_setLastFunctionCall("fullcalendar.js",311,10664,10693) ||           header.disableButton('today'));
        } else {
(_wrap_setLastFunctionCall("fullcalendar.js",313,10740,10768) ||           header.enableButton('today'));
        }
        ignoreWindowResize--;
(_wrap_setLastFunctionCall("fullcalendar.js",316,10842,10886) ||         currentView.trigger('viewDisplay', _element));
      }
    }
    function updateSize() {
_wrap_addFunctionToMap('fullcalendar.js', 319, 10920,11256, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",320,10956,10972) ||       markSizesDirty());
      if ((_wrap_setLastFunctionCall("fullcalendar.js",321,10990,11006) || elementVisible())) {
(_wrap_setLastFunctionCall("fullcalendar.js",322,11026,11036) ||         calcSize());
(_wrap_setLastFunctionCall("fullcalendar.js",323,11054,11063) ||         setSize());
(_wrap_setLastFunctionCall("fullcalendar.js",324,11081,11091) ||         unselect());
(_wrap_setLastFunctionCall("fullcalendar.js",325,11109,11134) ||         currentView.clearEvents());
(_wrap_setLastFunctionCall("fullcalendar.js",326,11152,11184) ||         currentView.renderEvents(events));
        currentView.sizeDirty = false;
      }
    }
    function markSizesDirty() {
_wrap_addFunctionToMap('fullcalendar.js', 330, 11265,11412, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",331,11305,11401) ||       $.each(viewInstances, function(i, inst) {
_wrap_addFunctionToMap('fullcalendar.js', 331, 11327,11400, (typeof arguments === 'object' ? arguments.callee.caller : null));

  inst.sizeDirty = true;
}));
    }
    function calcSize() {
_wrap_addFunctionToMap('fullcalendar.js', 335, 11421,11853, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (options.contentHeight) {
        suggestedViewHeight = options.contentHeight;
      } else if (options.height) {
        suggestedViewHeight = options.height - (headerElement ? (_wrap_setLastFunctionCall("fullcalendar.js",339,11658,11680) || headerElement.height()) : 0) - (_wrap_setLastFunctionCall("fullcalendar.js",339,11688,11703) || vsides(content));
      } else {
        suggestedViewHeight = (_wrap_setLastFunctionCall("fullcalendar.js",341,11764,11828) || Math.round((_wrap_setLastFunctionCall("fullcalendar.js",341,11775,11790) || content.width()) / (_wrap_setLastFunctionCall("fullcalendar.js",341,11793,11827) || Math.max(options.aspectRatio, 0.5))));
      }
    }
    function setSize(dateChanged) {
_wrap_addFunctionToMap('fullcalendar.js', 344, 11862,12266, (typeof arguments === 'object' ? arguments.callee.caller : null));

      ignoreWindowResize++;
(_wrap_setLastFunctionCall("fullcalendar.js",346,11940,11995) ||       currentView.setHeight(suggestedViewHeight, dateChanged));
      if (absoluteViewElement) {
(_wrap_setLastFunctionCall("fullcalendar.js",348,12052,12099) ||         absoluteViewElement.css('position', 'relative'));
        absoluteViewElement = null;
      }
(_wrap_setLastFunctionCall("fullcalendar.js",351,12171,12221) ||       currentView.setWidth((_wrap_setLastFunctionCall("fullcalendar.js",351,12192,12207) || content.width()), dateChanged));
      ignoreWindowResize--;
    }
    function windowResize() {
_wrap_addFunctionToMap('fullcalendar.js', 354, 12275,13077, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (!ignoreWindowResize) {
        if (currentView.start) {
          var uid = ++resizeUID;
(_wrap_setLastFunctionCall("fullcalendar.js",358,12444,12975) ||           setTimeout(function() {
_wrap_addFunctionToMap('fullcalendar.js', 358, 12455,12969, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (uid == resizeUID && !ignoreWindowResize && (_wrap_setLastFunctionCall("fullcalendar.js",359,12540,12556) || elementVisible())) {
    if (elementOuterWidth != (elementOuterWidth = (_wrap_setLastFunctionCall("fullcalendar.js",360,12634,12654) || element.outerWidth()))) {
      ignoreWindowResize++;
(_wrap_setLastFunctionCall("fullcalendar.js",362,12745,12757) ||       updateSize());
(_wrap_setLastFunctionCall("fullcalendar.js",363,12791,12836) ||       currentView.trigger('windowResize', _element));
      ignoreWindowResize--;
    }
  }
}, 200));
        } else {
(_wrap_setLastFunctionCall("fullcalendar.js",369,13022,13034) ||           lateRender());
        }
      }
    }
    function updateEvents(forceRender) {
_wrap_addFunctionToMap('fullcalendar.js', 373, 13086,13351, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (!options.lazyFetching || (_wrap_setLastFunctionCall("fullcalendar.js",374,13164,13219) || isFetchNeeded(currentView.visStart, currentView.visEnd))) {
(_wrap_setLastFunctionCall("fullcalendar.js",375,13239,13254) ||         refetchEvents());
      } else if (forceRender) {
(_wrap_setLastFunctionCall("fullcalendar.js",377,13310,13326) ||         rerenderEvents());
      }
    }
    function refetchEvents() {
_wrap_addFunctionToMap('fullcalendar.js', 380, 13360,13463, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",381,13399,13452) ||       fetchEvents(currentView.visStart, currentView.visEnd));
    }
    function reportEvents(_events) {
_wrap_addFunctionToMap('fullcalendar.js', 383, 13472,13574, (typeof arguments === 'object' ? arguments.callee.caller : null));

      events = _events;
(_wrap_setLastFunctionCall("fullcalendar.js",385,13547,13563) ||       rerenderEvents());
    }
    function reportEventChange(eventID) {
_wrap_addFunctionToMap('fullcalendar.js', 387, 13583,13667, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",388,13633,13656) ||       rerenderEvents(eventID));
    }
    function rerenderEvents(modifiedEventID) {
_wrap_addFunctionToMap('fullcalendar.js', 390, 13676,13968, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",391,13731,13748) ||       markEventsDirty());
      if ((_wrap_setLastFunctionCall("fullcalendar.js",392,13766,13782) || elementVisible())) {
(_wrap_setLastFunctionCall("fullcalendar.js",393,13802,13827) ||         currentView.clearEvents());
(_wrap_setLastFunctionCall("fullcalendar.js",394,13845,13894) ||         currentView.renderEvents(events, modifiedEventID));
        currentView.eventsDirty = false;
      }
    }
    function markEventsDirty() {
_wrap_addFunctionToMap('fullcalendar.js', 398, 13977,14127, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",399,14018,14116) ||       $.each(viewInstances, function(i, inst) {
_wrap_addFunctionToMap('fullcalendar.js', 399, 14040,14115, (typeof arguments === 'object' ? arguments.callee.caller : null));

  inst.eventsDirty = true;
}));
    }
    function select(start, end, allDay) {
_wrap_addFunctionToMap('fullcalendar.js', 403, 14136,14265, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",404,14186,14254) ||       currentView.select(start, end, allDay === undefined ? true : allDay));
    }
    function unselect() {
_wrap_addFunctionToMap('fullcalendar.js', 406, 14274,14390, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (currentView) {
(_wrap_setLastFunctionCall("fullcalendar.js",408,14343,14365) ||         currentView.unselect());
      }
    }
    function prev() {
_wrap_addFunctionToMap('fullcalendar.js', 411, 14399,14454, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",412,14429,14443) ||       renderView(-1));
    }
    function next() {
_wrap_addFunctionToMap('fullcalendar.js', 414, 14463,14517, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",415,14493,14506) ||       renderView(1));
    }
    function prevYear() {
_wrap_addFunctionToMap('fullcalendar.js', 417, 14526,14615, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",418,14560,14578) ||       addYears(date, -1));
(_wrap_setLastFunctionCall("fullcalendar.js",419,14592,14604) ||       renderView());
    }
    function nextYear() {
_wrap_addFunctionToMap('fullcalendar.js', 421, 14624,14712, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",422,14658,14675) ||       addYears(date, 1));
(_wrap_setLastFunctionCall("fullcalendar.js",423,14689,14701) ||       renderView());
    }
    function today() {
_wrap_addFunctionToMap('fullcalendar.js', 425, 14721,14806, (typeof arguments === 'object' ? arguments.callee.caller : null));

      date = (_wrap_setLastFunctionCall("fullcalendar.js",426,14759,14769) || new Date());
(_wrap_setLastFunctionCall("fullcalendar.js",427,14783,14795) ||       renderView());
    }
    function gotoDate(year, month, dateOfMonth) {
_wrap_addFunctionToMap('fullcalendar.js', 429, 14815,15067, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (year instanceof Date) {
        date = (_wrap_setLastFunctionCall("fullcalendar.js",431,14924,14939) || cloneDate(year));
      } else {
(_wrap_setLastFunctionCall("fullcalendar.js",433,14978,15016) ||         setYMD(date, year, month, dateOfMonth));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",435,15044,15056) ||       renderView());
    }
    function incrementDate(years, months, days) {
_wrap_addFunctionToMap('fullcalendar.js', 437, 15076,15433, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (years !== undefined) {
(_wrap_setLastFunctionCall("fullcalendar.js",439,15177,15198) ||         addYears(date, years));
      }
      if (months !== undefined) {
(_wrap_setLastFunctionCall("fullcalendar.js",442,15270,15293) ||         addMonths(date, months));
      }
      if (days !== undefined) {
(_wrap_setLastFunctionCall("fullcalendar.js",445,15363,15382) ||         addDays(date, days));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",447,15410,15422) ||       renderView());
    }
    function getDate() {
_wrap_addFunctionToMap('fullcalendar.js', 449, 15442,15508, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",450,15482,15497) || cloneDate(date));
    }
    function getView() {
_wrap_addFunctionToMap('fullcalendar.js', 452, 15517,15579, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return currentView;
    }
    function option(name, value) {
_wrap_addFunctionToMap('fullcalendar.js', 455, 15588,15890, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (value === undefined) {
        return options[name];
      }
      if (name == 'height' || name == 'contentHeight' || name == 'aspectRatio') {
        options[name] = value;
(_wrap_setLastFunctionCall("fullcalendar.js",461,15853,15865) ||         updateSize());
      }
    }
    function trigger(name, thisObj) {
_wrap_addFunctionToMap('fullcalendar.js', 464, 15899,16096, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (options[name]) {
        return (_wrap_setLastFunctionCall("fullcalendar.js",466,15989,16071) || options[name].apply(thisObj || _element, (_wrap_setLastFunctionCall("fullcalendar.js",466,16030,16070) || Array.prototype.slice.call(arguments, 2))));
      }
    }
    if (options.droppable) {
(_wrap_setLastFunctionCall("fullcalendar.js",480,16142,16821) ||       (_wrap_setLastFunctionCall("fullcalendar.js",470,16142,16610) || (_wrap_setLastFunctionCall("fullcalendar.js",470,16142,16153) || $(document)).bind('dragstart', function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 470, 16172,16609, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var _e = ev.target;
  var e = (_wrap_setLastFunctionCall("fullcalendar.js",472,16252,16257) || $(_e));
  if (!(_wrap_setLastFunctionCall("fullcalendar.js",473,16280,16296) || e.parents('.fc')).length) {
    var accept = options.dropAccept;
    if ((_wrap_setLastFunctionCall("fullcalendar.js",475,16384,16404) || $.isFunction(accept)) ? (_wrap_setLastFunctionCall("fullcalendar.js",475,16407,16425) || accept.call(_e, e)) : (_wrap_setLastFunctionCall("fullcalendar.js",475,16428,16440) || e.is(accept))) {
      _dragElement = _e;
(_wrap_setLastFunctionCall("fullcalendar.js",477,16511,16554) ||       currentView.dragStart(_dragElement, ev, ui));
    }
  }
})).bind('dragstop', function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 480, 16628,16820, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (_dragElement) {
(_wrap_setLastFunctionCall("fullcalendar.js",482,16704,16746) ||     currentView.dragStop(_dragElement, ev, ui));
    _dragElement = null;
  }
}));
    }
  }
  function Header(calendar, options) {
_wrap_addFunctionToMap('fullcalendar.js', 488, 16843,21995, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.render = render;
    t.destroy = destroy;
    t.updateTitle = updateTitle;
    t.activateButton = activateButton;
    t.deactivateButton = deactivateButton;
    t.disableButton = disableButton;
    t.enableButton = enableButton;
    var element = (_wrap_setLastFunctionCall("fullcalendar.js",497,17187,17192) || $([]));
    var tm;
    function render() {
_wrap_addFunctionToMap('fullcalendar.js', 499, 17218,17604, (typeof arguments === 'object' ? arguments.callee.caller : null));

      tm = options.theme ? 'ui' : 'fc';
      var sections = options.header;
      if (sections) {
        element = (_wrap_setLastFunctionCall("fullcalendar.js",503,17381,17547) || (_wrap_setLastFunctionCall("fullcalendar.js",503,17381,17435) || $('<table class=\'fc-header\' style=\'width:100%\'/>')).append((_wrap_setLastFunctionCall("fullcalendar.js",503,17443,17546) || (_wrap_setLastFunctionCall("fullcalendar.js",503,17443,17515) || (_wrap_setLastFunctionCall("fullcalendar.js",503,17443,17483) || (_wrap_setLastFunctionCall("fullcalendar.js",503,17443,17453) || $('<tr/>')).append((_wrap_setLastFunctionCall("fullcalendar.js",503,17461,17482) || renderSection('left')))).append((_wrap_setLastFunctionCall("fullcalendar.js",503,17491,17514) || renderSection('center')))).append((_wrap_setLastFunctionCall("fullcalendar.js",503,17523,17545) || renderSection('right'))))));
        return element;
      }
    }
    function destroy() {
_wrap_addFunctionToMap('fullcalendar.js', 507, 17613,17673, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",508,17646,17662) ||       element.remove());
    }
    function renderSection(position) {
_wrap_addFunctionToMap('fullcalendar.js', 510, 17682,21310, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var e = (_wrap_setLastFunctionCall("fullcalendar.js",511,17737,17784) || $('<td class=\'fc-header-' + position + '\'/>'));
      var buttonStr = options.header[position];
      if (buttonStr) {
(_wrap_setLastFunctionCall("fullcalendar.js",514,17885,21263) ||         $.each((_wrap_setLastFunctionCall("fullcalendar.js",514,17892,17912) || buttonStr.split(' ')), function(i) {
_wrap_addFunctionToMap('fullcalendar.js', 514, 17914,21262, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (i > 0) {
(_wrap_setLastFunctionCall("fullcalendar.js",516,17986,18031) ||     e.append('<span class=\'fc-header-space\'/>'));
  }
  var prevButton;
(_wrap_setLastFunctionCall("fullcalendar.js",519,18111,21116) ||   $.each((_wrap_setLastFunctionCall("fullcalendar.js",519,18118,18133) || this.split(',')), function(j, buttonName) {
_wrap_addFunctionToMap('fullcalendar.js', 519, 18135,21115, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (buttonName == 'title') {
(_wrap_setLastFunctionCall("fullcalendar.js",521,18243,18309) ||     e.append('<span class=\'fc-header-title\'><h2>&nbsp;</h2></span>'));
    if (prevButton) {
(_wrap_setLastFunctionCall("fullcalendar.js",523,18389,18430) ||       prevButton.addClass(tm + '-corner-right'));
    }
    prevButton = null;
  } else {
    var buttonClick;
    if (calendar[buttonName]) {
      buttonClick = calendar[buttonName];
    } else if (fcViews[buttonName]) {
      buttonClick = function() {
_wrap_addFunctionToMap('fullcalendar.js', 531, 18819,19012, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",532,18869,18908) ||   button.removeClass(tm + '-state-hover'));
(_wrap_setLastFunctionCall("fullcalendar.js",533,18946,18977) ||   calendar.changeView(buttonName));
};
    }
    if (buttonClick) {
      var icon = options.theme ? (_wrap_setLastFunctionCall("fullcalendar.js",537,19150,19196) || smartProperty(options.buttonIcons, buttonName)) : null;
      var text = (_wrap_setLastFunctionCall("fullcalendar.js",538,19248,19293) || smartProperty(options.buttonText, buttonName));
      var button = (_wrap_setLastFunctionCall("fullcalendar.js",539,19340,19708) || $('<span class=\'fc-button fc-button-' + buttonName + ' ' + tm + '-state-default\'>' + '<span class=\'fc-button-inner\'>' + '<span class=\'fc-button-content\'>' + (icon ? '<span class=\'fc-icon-wrap\'>' + '<span class=\'ui-icon ui-icon-' + icon + '\'/>' + '</span>' : text) + '</span>' + '<span class=\'fc-button-effect\'><span></span></span>' + '</span>' + '</span>'));
      if (button) {
(_wrap_setLastFunctionCall("fullcalendar.js",553,19792,20774) ||         (_wrap_setLastFunctionCall("fullcalendar.js",549,19792,20762) || (_wrap_setLastFunctionCall("fullcalendar.js",547,19792,20393) || (_wrap_setLastFunctionCall("fullcalendar.js",545,19792,20252) || (_wrap_setLastFunctionCall("fullcalendar.js",541,19792,20046) || button.click(function() {
_wrap_addFunctionToMap('fullcalendar.js', 541, 19805,20045, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!(_wrap_setLastFunctionCall("fullcalendar.js",542,19864,19903) || button.hasClass(tm + '-state-disabled'))) {
(_wrap_setLastFunctionCall("fullcalendar.js",543,19951,19964) ||     buttonClick());
  }
})).mousedown(function() {
_wrap_addFunctionToMap('fullcalendar.js', 545, 20057,20251, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",546,20111,20212) ||   (_wrap_setLastFunctionCall("fullcalendar.js",546,20111,20183) || (_wrap_setLastFunctionCall("fullcalendar.js",546,20111,20149) || button.not('.' + tm + '-state-active')).not('.' + tm + '-state-disabled')).addClass(tm + '-state-down'));
})).mouseup(function() {
_wrap_addFunctionToMap('fullcalendar.js', 547, 20261,20392, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",548,20315,20353) ||   button.removeClass(tm + '-state-down'));
})).hover(function() {
_wrap_addFunctionToMap('fullcalendar.js', 549, 20400,20595, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",550,20454,20556) ||   (_wrap_setLastFunctionCall("fullcalendar.js",550,20454,20526) || (_wrap_setLastFunctionCall("fullcalendar.js",550,20454,20492) || button.not('.' + tm + '-state-active')).not('.' + tm + '-state-disabled')).addClass(tm + '-state-hover'));
}, function() {
_wrap_addFunctionToMap('fullcalendar.js', 551, 20597,20761, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",552,20651,20722) ||   (_wrap_setLastFunctionCall("fullcalendar.js",552,20651,20690) || button.removeClass(tm + '-state-hover')).removeClass(tm + '-state-down'));
})).appendTo(e));
        if (!prevButton) {
(_wrap_setLastFunctionCall("fullcalendar.js",555,20871,20907) ||           button.addClass(tm + '-corner-left'));
        }
        prevButton = button;
      }
    }
  }
}));
  if (prevButton) {
(_wrap_setLastFunctionCall("fullcalendar.js",563,21180,21221) ||     prevButton.addClass(tm + '-corner-right'));
  }
}));
      }
      return e;
    }
    function updateTitle(html) {
_wrap_addFunctionToMap('fullcalendar.js', 569, 21319,21400, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",570,21360,21389) ||       (_wrap_setLastFunctionCall("fullcalendar.js",570,21360,21378) || element.find('h2')).html(html));
    }
    function activateButton(buttonName) {
_wrap_addFunctionToMap('fullcalendar.js', 572, 21409,21545, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",573,21459,21534) ||       (_wrap_setLastFunctionCall("fullcalendar.js",573,21459,21503) || element.find('span.fc-button-' + buttonName)).addClass(tm + '-state-active'));
    }
    function deactivateButton(buttonName) {
_wrap_addFunctionToMap('fullcalendar.js', 575, 21554,21695, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",576,21606,21684) ||       (_wrap_setLastFunctionCall("fullcalendar.js",576,21606,21650) || element.find('span.fc-button-' + buttonName)).removeClass(tm + '-state-active'));
    }
    function disableButton(buttonName) {
_wrap_addFunctionToMap('fullcalendar.js', 578, 21704,21841, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",579,21753,21830) ||       (_wrap_setLastFunctionCall("fullcalendar.js",579,21753,21797) || element.find('span.fc-button-' + buttonName)).addClass(tm + '-state-disabled'));
    }
    function enableButton(buttonName) {
_wrap_addFunctionToMap('fullcalendar.js', 581, 21850,21989, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",582,21898,21978) ||       (_wrap_setLastFunctionCall("fullcalendar.js",582,21898,21942) || element.find('span.fc-button-' + buttonName)).removeClass(tm + '-state-disabled'));
    }
  }
  fc.sourceNormalizers = [];
  fc.sourceFetchers = [];
  var ajaxDefaults = {dataType: 'json', cache: false};
  var eventGUID = 1;
  function EventManager(options, _sources) {
_wrap_addFunctionToMap('fullcalendar.js', 592, 22173,33192, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.isFetchNeeded = isFetchNeeded;
    t.fetchEvents = fetchEvents;
    t.addEventSource = addEventSource;
    t.removeEventSource = removeEventSource;
    t.updateEvent = updateEvent;
    t.renderEvent = renderEvent;
    t.removeEvents = removeEvents;
    t.clientEvents = clientEvents;
    t.normalizeEvent = normalizeEvent;
    var trigger = t.trigger;
    var getView = t.getView;
    var reportEvents = t.reportEvents;
    var stickySource = {events: []};
    var sources = [stickySource];
    var rangeStart, rangeEnd;
    var currentFetchID = 0;
    var pendingSourceCnt = 0;
    var loadingLevel = 0;
    var cache = [];
    for (var i = 0; i < _sources.length; i++) {
(_wrap_setLastFunctionCall("fullcalendar.js",614,23011,23039) ||       _addEventSource(_sources[i]));
    }
    function isFetchNeeded(start, end) {
_wrap_addFunctionToMap('fullcalendar.js', 616, 23059,23177, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return !rangeStart || start < rangeStart || end > rangeEnd;
    }
    function fetchEvents(start, end) {
_wrap_addFunctionToMap('fullcalendar.js', 619, 23186,23545, (typeof arguments === 'object' ? arguments.callee.caller : null));

      rangeStart = start;
      rangeEnd = end;
      cache = [];
      var fetchID = ++currentFetchID;
      var len = sources.length;
      pendingSourceCnt = len;
      for (var i = 0; i < len; i++) {
(_wrap_setLastFunctionCall("fullcalendar.js",627,23483,23520) ||         fetchEventSource(sources[i], fetchID));
      }
    }
    function fetchEventSource(source, fetchID) {
_wrap_addFunctionToMap('fullcalendar.js', 630, 23554,24213, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",631,23611,24202) ||       _fetchEventSource(source, function(events) {
_wrap_addFunctionToMap('fullcalendar.js', 631, 23637,24201, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (fetchID == currentFetchID) {
    if (events) {
      for (var i = 0; i < events.length; i++) {
        events[i].source = source;
(_wrap_setLastFunctionCall("fullcalendar.js",636,23889,23914) ||         normalizeEvent(events[i]));
      }
      cache = (_wrap_setLastFunctionCall("fullcalendar.js",638,23974,23994) || cache.concat(events));
    }
    pendingSourceCnt--;
    if (!pendingSourceCnt) {
(_wrap_setLastFunctionCall("fullcalendar.js",642,24127,24146) ||       reportEvents(cache));
    }
  }
}));
    }
    function _fetchEventSource(source, callback) {
_wrap_addFunctionToMap('fullcalendar.js', 647, 24222,26940, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i;
      var fetchers = fc.sourceFetchers;
      var res;
      for (i = 0; i < fetchers.length; i++) {
        res = (_wrap_setLastFunctionCall("fullcalendar.js",652,24429,24480) || fetchers[i](source, rangeStart, rangeEnd, callback));
        if (res === true) {
          return;
        } else if (typeof res == 'object') {
(_wrap_setLastFunctionCall("fullcalendar.js",656,24619,24651) ||           _fetchEventSource(res, callback));
          return;
        }
      }
      var events = source.events;
      if (events) {
        if ((_wrap_setLastFunctionCall("fullcalendar.js",662,24799,24819) || $.isFunction(events))) {
(_wrap_setLastFunctionCall("fullcalendar.js",663,24843,24856) ||           pushLoading());
(_wrap_setLastFunctionCall("fullcalendar.js",664,24878,25051) ||           events((_wrap_setLastFunctionCall("fullcalendar.js",664,24885,24906) || cloneDate(rangeStart)), (_wrap_setLastFunctionCall("fullcalendar.js",664,24908,24927) || cloneDate(rangeEnd)), function(events) {
_wrap_addFunctionToMap('fullcalendar.js', 664, 24929,25050, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",665,24973,24989) ||   callback(events));
(_wrap_setLastFunctionCall("fullcalendar.js",666,25015,25027) ||   popLoading());
}));
        } else if ((_wrap_setLastFunctionCall("fullcalendar.js",668,25080,25097) || $.isArray(events))) {
(_wrap_setLastFunctionCall("fullcalendar.js",669,25121,25137) ||           callback(events));
        } else {
(_wrap_setLastFunctionCall("fullcalendar.js",671,25184,25194) ||           callback());
        }
      } else {
        var url = source.url;
        if (url) {
          var success = source.success;
          var error = source.error;
          var complete = source.complete;
          var data = (_wrap_setLastFunctionCall("fullcalendar.js",679,25479,25510) || $.extend({}, source.data || {}));
          var startParam = (_wrap_setLastFunctionCall("fullcalendar.js",680,25549,25600) || firstDefined(source.startParam, options.startParam));
          var endParam = (_wrap_setLastFunctionCall("fullcalendar.js",681,25637,25684) || firstDefined(source.endParam, options.endParam));
          if (startParam) {
            data[startParam] = (_wrap_setLastFunctionCall("fullcalendar.js",683,25767,25797) || Math.round(+rangeStart / 1000));
          }
          if (endParam) {
            data[endParam] = (_wrap_setLastFunctionCall("fullcalendar.js",686,25898,25926) || Math.round(+rangeEnd / 1000));
          }
(_wrap_setLastFunctionCall("fullcalendar.js",688,25970,25983) ||           pushLoading());
(_wrap_setLastFunctionCall("fullcalendar.js",689,26005,26840) ||           $.ajax((_wrap_setLastFunctionCall("fullcalendar.js",689,26012,26839) || $.extend({}, ajaxDefaults, source, {data: data, success: function(events) {
_wrap_addFunctionToMap('fullcalendar.js', 691, 26118,26460, (typeof arguments === 'object' ? arguments.callee.caller : null));

  events = events || [];
  var res = (_wrap_setLastFunctionCall("fullcalendar.js",693,26227,26261) || applyAll(success, this, arguments));
  if ((_wrap_setLastFunctionCall("fullcalendar.js",694,26295,26309) || $.isArray(res))) {
    events = res;
  }
(_wrap_setLastFunctionCall("fullcalendar.js",697,26417,26433) ||   callback(events));
}, error: function() {
_wrap_addFunctionToMap('fullcalendar.js', 699, 26493,26634, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",700,26535,26567) ||   applyAll(error, this, arguments));
(_wrap_setLastFunctionCall("fullcalendar.js",701,26597,26607) ||   callback());
}, complete: function() {
_wrap_addFunctionToMap('fullcalendar.js', 703, 26670,26816, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",704,26712,26747) ||   applyAll(complete, this, arguments));
(_wrap_setLastFunctionCall("fullcalendar.js",705,26777,26789) ||   popLoading());
}}))));
        } else {
(_wrap_setLastFunctionCall("fullcalendar.js",709,26887,26897) ||           callback());
        }
      }
    }
    function addEventSource(source) {
_wrap_addFunctionToMap('fullcalendar.js', 713, 26949,27172, (typeof arguments === 'object' ? arguments.callee.caller : null));

      source = (_wrap_setLastFunctionCall("fullcalendar.js",714,27004,27027) || _addEventSource(source));
      if (source) {
        pendingSourceCnt++;
(_wrap_setLastFunctionCall("fullcalendar.js",717,27107,27147) ||         fetchEventSource(source, currentFetchID));
      }
    }
    function _addEventSource(source) {
_wrap_addFunctionToMap('fullcalendar.js', 720, 27181,27608, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if ((_wrap_setLastFunctionCall("fullcalendar.js",721,27232,27252) || $.isFunction(source)) || (_wrap_setLastFunctionCall("fullcalendar.js",721,27256,27273) || $.isArray(source))) {
        source = {events: source};
      } else if (typeof source == 'string') {
        source = {url: source};
      }
      if (typeof source == 'object') {
(_wrap_setLastFunctionCall("fullcalendar.js",727,27491,27514) ||         normalizeSource(source));
(_wrap_setLastFunctionCall("fullcalendar.js",728,27532,27552) ||         sources.push(source));
        return source;
      }
    }
    function removeEventSource(source) {
_wrap_addFunctionToMap('fullcalendar.js', 732, 27617,27943, (typeof arguments === 'object' ? arguments.callee.caller : null));

      sources = (_wrap_setLastFunctionCall("fullcalendar.js",733,27676,27776) || $.grep(sources, function(src) {
_wrap_addFunctionToMap('fullcalendar.js', 733, 27692,27775, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return !(_wrap_setLastFunctionCall("fullcalendar.js",734,27733,27760) || isSourcesEqual(src, source));
}));
      cache = (_wrap_setLastFunctionCall("fullcalendar.js",736,27798,27899) || $.grep(cache, function(e) {
_wrap_addFunctionToMap('fullcalendar.js', 736, 27812,27898, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return !(_wrap_setLastFunctionCall("fullcalendar.js",737,27851,27883) || isSourcesEqual(e.source, source));
}));
(_wrap_setLastFunctionCall("fullcalendar.js",739,27913,27932) ||       reportEvents(cache));
    }
    function updateEvent(event) {
_wrap_addFunctionToMap('fullcalendar.js', 741, 27952,29328, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i, len = cache.length, e, defaultEventEnd = (_wrap_setLastFunctionCall("fullcalendar.js",742,28042,28051) || getView()).defaultEventEnd, startDelta = event.start - event._start, endDelta = event.end ? event.end - (event._end || (_wrap_setLastFunctionCall("fullcalendar.js",742,28160,28182) || defaultEventEnd(event))) : 0;
      for (i = 0; i < len; i++) {
        e = cache[i];
        if (e._id == event._id && e != event) {
          e.start = (_wrap_setLastFunctionCall("fullcalendar.js",746,28345,28376) || new Date(+e.start + startDelta));
          if (event.end) {
            if (e.end) {
              e.end = (_wrap_setLastFunctionCall("fullcalendar.js",749,28488,28515) || new Date(+e.end + endDelta));
            } else {
              e.end = (_wrap_setLastFunctionCall("fullcalendar.js",751,28586,28626) || new Date(+(_wrap_setLastFunctionCall("fullcalendar.js",751,28596,28614) || defaultEventEnd(e)) + endDelta));
            }
          } else {
            e.end = null;
          }
          e.title = event.title;
          e.url = event.url;
          e.allDay = event.allDay;
          e.className = event.className;
          e.editable = event.editable;
          e.color = event.color;
          e.backgroudColor = event.backgroudColor;
          e.borderColor = event.borderColor;
          e.textColor = event.textColor;
(_wrap_setLastFunctionCall("fullcalendar.js",765,29200,29217) ||           normalizeEvent(e));
        }
      }
(_wrap_setLastFunctionCall("fullcalendar.js",768,29263,29284) ||       normalizeEvent(event));
(_wrap_setLastFunctionCall("fullcalendar.js",769,29298,29317) ||       reportEvents(cache));
    }
    function renderEvent(event, stick) {
_wrap_addFunctionToMap('fullcalendar.js', 771, 29337,29682, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",772,29386,29407) ||       normalizeEvent(event));
      if (!event.source) {
        if (stick) {
(_wrap_setLastFunctionCall("fullcalendar.js",775,29491,29522) ||           stickySource.events.push(event));
          event.source = stickySource;
        }
(_wrap_setLastFunctionCall("fullcalendar.js",778,29607,29624) ||         cache.push(event));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",780,29652,29671) ||       reportEvents(cache));
    }
    function removeEvents(filter) {
_wrap_addFunctionToMap('fullcalendar.js', 782, 29691,30567, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (!filter) {
        cache = [];
        for (var i = 0; i < sources.length; i++) {
          if ((_wrap_setLastFunctionCall("fullcalendar.js",786,29861,29889) || $.isArray(sources[i].events))) {
            sources[i].events = [];
          }
        }
      } else {
        if (!(_wrap_setLastFunctionCall("fullcalendar.js",791,30023,30043) || $.isFunction(filter))) {
          var id = filter + '';
          filter = function(e) {
_wrap_addFunctionToMap('fullcalendar.js', 793, 30118,30198, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return e._id == id;
};
        }
        cache = (_wrap_setLastFunctionCall("fullcalendar.js",797,30242,30269) || $.grep(cache, filter, true));
        for (var i = 0; i < sources.length; i++) {
          if ((_wrap_setLastFunctionCall("fullcalendar.js",799,30354,30382) || $.isArray(sources[i].events))) {
            sources[i].events = (_wrap_setLastFunctionCall("fullcalendar.js",800,30430,30469) || $.grep(sources[i].events, filter, true));
          }
        }
      }
(_wrap_setLastFunctionCall("fullcalendar.js",804,30537,30556) ||       reportEvents(cache));
    }
    function clientEvents(filter) {
_wrap_addFunctionToMap('fullcalendar.js', 806, 30576,30922, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if ((_wrap_setLastFunctionCall("fullcalendar.js",807,30624,30644) || $.isFunction(filter))) {
        return (_wrap_setLastFunctionCall("fullcalendar.js",808,30671,30692) || $.grep(cache, filter));
      } else if (filter) {
        filter += '';
        return (_wrap_setLastFunctionCall("fullcalendar.js",811,30780,30871) || $.grep(cache, function(e) {
_wrap_addFunctionToMap('fullcalendar.js', 811, 30794,30870, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return e._id == filter;
}));
      }
      return cache;
    }
    function pushLoading() {
_wrap_addFunctionToMap('fullcalendar.js', 817, 30931,31062, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (!loadingLevel++) {
(_wrap_setLastFunctionCall("fullcalendar.js",819,31007,31037) ||         trigger('loading', null, true));
      }
    }
    function popLoading() {
_wrap_addFunctionToMap('fullcalendar.js', 822, 31071,31202, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (!--loadingLevel) {
(_wrap_setLastFunctionCall("fullcalendar.js",824,31146,31177) ||         trigger('loading', null, false));
      }
    }
    function normalizeEvent(event) {
_wrap_addFunctionToMap('fullcalendar.js', 827, 31211,32399, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var source = event.source || {};
      var ignoreTimezone = (_wrap_setLastFunctionCall("fullcalendar.js",829,31322,31381) || firstDefined(source.ignoreTimezone, options.ignoreTimezone));
      event._id = event._id || (event.id === undefined ? '_fc' + eventGUID++ : event.id + '');
      if (event.date) {
        if (!event.start) {
          event.start = event.date;
        }
        delete event.date;
      }
      event._start = (_wrap_setLastFunctionCall("fullcalendar.js",837,31690,31753) || cloneDate(event.start = (_wrap_setLastFunctionCall("fullcalendar.js",837,31714,31752) || parseDate(event.start, ignoreTimezone))));
      event.end = (_wrap_setLastFunctionCall("fullcalendar.js",838,31779,31815) || parseDate(event.end, ignoreTimezone));
      if (event.end && event.end <= event.start) {
        event.end = null;
      }
      event._end = event.end ? (_wrap_setLastFunctionCall("fullcalendar.js",842,31959,31979) || cloneDate(event.end)) : null;
      if (event.allDay === undefined) {
        event.allDay = (_wrap_setLastFunctionCall("fullcalendar.js",844,32065,32122) || firstDefined(source.allDayDefault, options.allDayDefault));
      }
      if (event.className) {
        if (typeof event.className == 'string') {
          event.className = (_wrap_setLastFunctionCall("fullcalendar.js",848,32269,32297) || event.className.split(/\s+/));
        }
      } else {
        event.className = [];
      }
    }
    function normalizeSource(source) {
_wrap_addFunctionToMap('fullcalendar.js', 854, 32408,32874, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (source.className) {
        if (typeof source.className == 'string') {
          source.className = (_wrap_setLastFunctionCall("fullcalendar.js",857,32577,32606) || source.className.split(/\s+/));
        }
      } else {
        source.className = [];
      }
      var normalizers = fc.sourceNormalizers;
      for (var i = 0; i < normalizers.length; i++) {
(_wrap_setLastFunctionCall("fullcalendar.js",864,32827,32849) ||         normalizers[i](source));
      }
    }
    function isSourcesEqual(source1, source2) {
_wrap_addFunctionToMap('fullcalendar.js', 867, 32883,33037, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return source1 && source2 && (_wrap_setLastFunctionCall("fullcalendar.js",868,32968,32995) || getSourcePrimitive(source1)) == (_wrap_setLastFunctionCall("fullcalendar.js",868,32999,33026) || getSourcePrimitive(source2));
    }
    function getSourcePrimitive(source) {
_wrap_addFunctionToMap('fullcalendar.js', 870, 33046,33186, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (typeof source == 'object' ? source.events || source.url : '') || source;
    }
  }
  fc.addDays = addDays;
  fc.cloneDate = cloneDate;
  fc.parseDate = parseDate;
  fc.parseISO8601 = parseISO8601;
  fc.parseTime = parseTime;
  fc.formatDate = formatDate;
  fc.formatDates = formatDates;
  var dayIDs = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'], DAY_MS = 86400000, HOUR_MS = 3600000, MINUTE_MS = 60000;
  function addYears(d, n, keepTime) {
_wrap_addFunctionToMap('fullcalendar.js', 890, 33634,33798, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",891,33678,33712) ||     d.setFullYear((_wrap_setLastFunctionCall("fullcalendar.js",891,33692,33707) || d.getFullYear()) + n));
    if (!keepTime) {
(_wrap_setLastFunctionCall("fullcalendar.js",893,33751,33763) ||       clearTime(d));
    }
    return d;
  }
  function addMonths(d, n, keepTime) {
_wrap_addFunctionToMap('fullcalendar.js', 897, 33803,34244, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (+d) {
      var m = (_wrap_setLastFunctionCall("fullcalendar.js",899,33878,33890) || d.getMonth()) + n, check = (_wrap_setLastFunctionCall("fullcalendar.js",899,33904,33916) || cloneDate(d));
(_wrap_setLastFunctionCall("fullcalendar.js",900,33930,33946) ||       check.setDate(1));
(_wrap_setLastFunctionCall("fullcalendar.js",901,33960,33977) ||       check.setMonth(m));
(_wrap_setLastFunctionCall("fullcalendar.js",902,33991,34004) ||       d.setMonth(m));
      if (!keepTime) {
(_wrap_setLastFunctionCall("fullcalendar.js",904,34051,34063) ||         clearTime(d));
      }
      while ((_wrap_setLastFunctionCall("fullcalendar.js",906,34098,34110) || d.getMonth()) != (_wrap_setLastFunctionCall("fullcalendar.js",906,34114,34130) || check.getMonth())) {
(_wrap_setLastFunctionCall("fullcalendar.js",907,34150,34195) ||         d.setDate((_wrap_setLastFunctionCall("fullcalendar.js",907,34160,34171) || d.getDate()) + (d < check ? 1 : -1)));
      }
    }
    return d;
  }
  function addDays(d, n, keepTime) {
_wrap_addFunctionToMap('fullcalendar.js', 912, 34249,34588, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (+d) {
      var dd = (_wrap_setLastFunctionCall("fullcalendar.js",914,34323,34334) || d.getDate()) + n, check = (_wrap_setLastFunctionCall("fullcalendar.js",914,34348,34360) || cloneDate(d));
(_wrap_setLastFunctionCall("fullcalendar.js",915,34374,34391) ||       check.setHours(9));
(_wrap_setLastFunctionCall("fullcalendar.js",916,34405,34422) ||       check.setDate(dd));
(_wrap_setLastFunctionCall("fullcalendar.js",917,34436,34449) ||       d.setDate(dd));
      if (!keepTime) {
(_wrap_setLastFunctionCall("fullcalendar.js",919,34496,34508) ||         clearTime(d));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",921,34536,34553) ||       fixDate(d, check));
    }
    return d;
  }
  function fixDate(d, check) {
_wrap_addFunctionToMap('fullcalendar.js', 925, 34593,34786, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (+d) {
      while ((_wrap_setLastFunctionCall("fullcalendar.js",927,34659,34670) || d.getDate()) != (_wrap_setLastFunctionCall("fullcalendar.js",927,34674,34689) || check.getDate())) {
(_wrap_setLastFunctionCall("fullcalendar.js",928,34709,34755) ||         d.setTime(+d + (d < check ? 1 : -1) * HOUR_MS));
      }
    }
  }
  function addMinutes(d, n) {
_wrap_addFunctionToMap('fullcalendar.js', 932, 34791,34884, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",933,34827,34859) ||     d.setMinutes((_wrap_setLastFunctionCall("fullcalendar.js",933,34840,34854) || d.getMinutes()) + n));
    return d;
  }
  function clearTime(d) {
_wrap_addFunctionToMap('fullcalendar.js', 936, 34889,35039, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",937,34921,34934) ||     d.setHours(0));
(_wrap_setLastFunctionCall("fullcalendar.js",938,34944,34959) ||     d.setMinutes(0));
(_wrap_setLastFunctionCall("fullcalendar.js",939,34969,34984) ||     d.setSeconds(0));
(_wrap_setLastFunctionCall("fullcalendar.js",940,34994,35014) ||     d.setMilliseconds(0));
    return d;
  }
  function cloneDate(d, dontKeepTime) {
_wrap_addFunctionToMap('fullcalendar.js', 943, 35044,35198, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (dontKeepTime) {
      return (_wrap_setLastFunctionCall("fullcalendar.js",945,35129,35152) || clearTime((_wrap_setLastFunctionCall("fullcalendar.js",945,35139,35151) || new Date(+d))));
    }
    return (_wrap_setLastFunctionCall("fullcalendar.js",947,35179,35191) || new Date(+d));
  }
  function zeroDate() {
_wrap_addFunctionToMap('fullcalendar.js', 949, 35203,35355, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var i = 0, d;
    do {
      d = (_wrap_setLastFunctionCall("fullcalendar.js",952,35276,35298) || new Date(1970, i++, 1));
    } while ((_wrap_setLastFunctionCall("fullcalendar.js",953,35317,35329) || d.getHours()));
    return d;
  }
  function skipWeekend(date, inc, excl) {
_wrap_addFunctionToMap('fullcalendar.js', 956, 35360,35588, (typeof arguments === 'object' ? arguments.callee.caller : null));

    inc = inc || 1;
    while (!(_wrap_setLastFunctionCall("fullcalendar.js",958,35440,35453) || date.getDay()) || (excl && (_wrap_setLastFunctionCall("fullcalendar.js",958,35466,35479) || date.getDay()) == 1 || !excl && (_wrap_setLastFunctionCall("fullcalendar.js",958,35497,35510) || date.getDay()) == 6)) {
(_wrap_setLastFunctionCall("fullcalendar.js",959,35532,35550) ||       addDays(date, inc));
    }
    return date;
  }
  function dayDiff(d1, d2) {
_wrap_addFunctionToMap('fullcalendar.js', 963, 35593,35706, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return (_wrap_setLastFunctionCall("fullcalendar.js",964,35635,35699) || Math.round(((_wrap_setLastFunctionCall("fullcalendar.js",964,35647,35666) || cloneDate(d1, true)) - (_wrap_setLastFunctionCall("fullcalendar.js",964,35669,35688) || cloneDate(d2, true))) / DAY_MS));
  }
  function setYMD(date, y, m, d) {
_wrap_addFunctionToMap('fullcalendar.js', 966, 35711,36103, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (y !== undefined && y != (_wrap_setLastFunctionCall("fullcalendar.js",967,35780,35798) || date.getFullYear())) {
(_wrap_setLastFunctionCall("fullcalendar.js",968,35814,35829) ||       date.setDate(1));
(_wrap_setLastFunctionCall("fullcalendar.js",969,35843,35859) ||       date.setMonth(0));
(_wrap_setLastFunctionCall("fullcalendar.js",970,35873,35892) ||       date.setFullYear(y));
    }
    if (m !== undefined && m != (_wrap_setLastFunctionCall("fullcalendar.js",972,35940,35955) || date.getMonth())) {
(_wrap_setLastFunctionCall("fullcalendar.js",973,35971,35986) ||       date.setDate(1));
(_wrap_setLastFunctionCall("fullcalendar.js",974,36000,36016) ||       date.setMonth(m));
    }
    if (d !== undefined) {
(_wrap_setLastFunctionCall("fullcalendar.js",977,36071,36086) ||       date.setDate(d));
    }
  }
  function parseDate(s, ignoreTimezone) {
_wrap_addFunctionToMap('fullcalendar.js', 980, 36108,36667, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (typeof s == 'object') {
      return s;
    }
    if (typeof s == 'number') {
      return (_wrap_setLastFunctionCall("fullcalendar.js",985,36271,36289) || new Date(s * 1000));
    }
    if (typeof s == 'string') {
      if ((_wrap_setLastFunctionCall("fullcalendar.js",988,36353,36377) || s.match(/^\d+(\.\d+)?$/))) {
        return (_wrap_setLastFunctionCall("fullcalendar.js",989,36404,36434) || new Date((_wrap_setLastFunctionCall("fullcalendar.js",989,36413,36426) || parseFloat(s)) * 1000));
      }
      if (ignoreTimezone === undefined) {
        ignoreTimezone = true;
      }
      return (_wrap_setLastFunctionCall("fullcalendar.js",994,36570,36601) || parseISO8601(s, ignoreTimezone)) || (s ? (_wrap_setLastFunctionCall("fullcalendar.js",994,36610,36621) || new Date(s)) : null);
    }
    return null;
  }
  function parseISO8601(s, ignoreTimezone) {
_wrap_addFunctionToMap('fullcalendar.js', 998, 36672,38157, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var m = (_wrap_setLastFunctionCall("fullcalendar.js",999,36731,36875) || s.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/));
    if (!m) {
      return null;
    }
    var date = (_wrap_setLastFunctionCall("fullcalendar.js",1003,36949,36969) || new Date(m[1], 0, 1));
    if (ignoreTimezone || !m[13]) {
      var check = (_wrap_setLastFunctionCall("fullcalendar.js",1005,37035,37061) || new Date(m[1], 0, 1, 9, 0));
      if (m[3]) {
(_wrap_setLastFunctionCall("fullcalendar.js",1007,37103,37126) ||         date.setMonth(m[3] - 1));
(_wrap_setLastFunctionCall("fullcalendar.js",1008,37144,37168) ||         check.setMonth(m[3] - 1));
      }
      if (m[5]) {
(_wrap_setLastFunctionCall("fullcalendar.js",1011,37224,37242) ||         date.setDate(m[5]));
(_wrap_setLastFunctionCall("fullcalendar.js",1012,37260,37279) ||         check.setDate(m[5]));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",1014,37307,37327) ||       fixDate(date, check));
      if (m[7]) {
(_wrap_setLastFunctionCall("fullcalendar.js",1016,37369,37388) ||         date.setHours(m[7]));
      }
      if (m[8]) {
(_wrap_setLastFunctionCall("fullcalendar.js",1019,37444,37465) ||         date.setMinutes(m[8]));
      }
      if (m[10]) {
(_wrap_setLastFunctionCall("fullcalendar.js",1022,37522,37544) ||         date.setSeconds(m[10]));
      }
      if (m[12]) {
(_wrap_setLastFunctionCall("fullcalendar.js",1025,37601,37650) ||         date.setMilliseconds((_wrap_setLastFunctionCall("fullcalendar.js",1025,37622,37642) || Number('0.' + m[12])) * 1000));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",1027,37678,37698) ||       fixDate(date, check));
    } else {
(_wrap_setLastFunctionCall("fullcalendar.js",1029,37729,37786) ||       date.setUTCFullYear(m[1], m[3] ? m[3] - 1 : 0, m[5] || 1));
(_wrap_setLastFunctionCall("fullcalendar.js",1030,37800,37891) ||       date.setUTCHours(m[7] || 0, m[8] || 0, m[10] || 0, m[12] ? (_wrap_setLastFunctionCall("fullcalendar.js",1030,37859,37879) || Number('0.' + m[12])) * 1000 : 0));
      if (m[14]) {
        var offset = (_wrap_setLastFunctionCall("fullcalendar.js",1032,37947,37960) || Number(m[16])) * 60 + (m[18] ? (_wrap_setLastFunctionCall("fullcalendar.js",1032,37977,37990) || Number(m[18])) : 0);
        offset *= m[15] == '-' ? 1 : -1;
        date = (_wrap_setLastFunctionCall("fullcalendar.js",1034,38069,38105) || new Date(+date + offset * 60 * 1000));
      }
    }
    return date;
  }
  function parseTime(s) {
_wrap_addFunctionToMap('fullcalendar.js', 1039, 38162,38716, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (typeof s == 'number') {
      return s * 60;
    }
    if (typeof s == 'object') {
      return (_wrap_setLastFunctionCall("fullcalendar.js",1044,38314,38326) || s.getHours()) * 60 + (_wrap_setLastFunctionCall("fullcalendar.js",1044,38334,38348) || s.getMinutes());
    }
    var m = (_wrap_setLastFunctionCall("fullcalendar.js",1046,38376,38412) || s.match(/(\d+)(?::(\d+))?\s*(\w+)?/));
    if (m) {
      var h = (_wrap_setLastFunctionCall("fullcalendar.js",1048,38451,38469) || parseInt(m[1], 10));
      if (m[3]) {
        h %= 12;
        if ((_wrap_setLastFunctionCall("fullcalendar.js",1051,38540,38568) || (_wrap_setLastFunctionCall("fullcalendar.js",1051,38540,38558) || m[3].toLowerCase()).charAt(0)) == 'p') {
          h += 12;
        }
      }
      return h * 60 + (m[2] ? (_wrap_setLastFunctionCall("fullcalendar.js",1055,38676,38694) || parseInt(m[2], 10)) : 0);
    }
  }
  function formatDate(date, format, options) {
_wrap_addFunctionToMap('fullcalendar.js', 1058, 38721,38828, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return (_wrap_setLastFunctionCall("fullcalendar.js",1059,38781,38821) || formatDates(date, null, format, options));
  }
  function formatDates(date1, date2, format, options) {
_wrap_addFunctionToMap('fullcalendar.js', 1061, 38833,41395, (typeof arguments === 'object' ? arguments.callee.caller : null));

    options = options || defaults;
    var date = date1, otherDate = date2, i, len = format.length, c, i2, formatter, res = '';
    for (i = 0; i < len; i++) {
      c = (_wrap_setLastFunctionCall("fullcalendar.js",1065,39075,39091) || format.charAt(i));
      if (c == '\'') {
        for (i2 = i + 1; i2 < len; i2++) {
          if ((_wrap_setLastFunctionCall("fullcalendar.js",1068,39197,39214) || format.charAt(i2)) == '\'') {
            if (date) {
              if (i2 == i + 1) {
                res += '\'';
              } else {
                res += (_wrap_setLastFunctionCall("fullcalendar.js",1073,39430,39457) || format.substring(i + 1, i2));
              }
              i = i2;
            }
            break;
          }
        }
      } else if (c == '(') {
        for (i2 = i + 1; i2 < len; i2++) {
          if ((_wrap_setLastFunctionCall("fullcalendar.js",1082,39732,39749) || format.charAt(i2)) == ')') {
            var subres = (_wrap_setLastFunctionCall("fullcalendar.js",1083,39797,39851) || formatDate(date, (_wrap_setLastFunctionCall("fullcalendar.js",1083,39814,39841) || format.substring(i + 1, i2)), options));
            if ((_wrap_setLastFunctionCall("fullcalendar.js",1084,39881,39919) || parseInt((_wrap_setLastFunctionCall("fullcalendar.js",1084,39890,39914) || subres.replace(/\D/, '')), 10))) {
              res += subres;
            }
            i = i2;
            break;
          }
        }
      } else if (c == '[') {
        for (i2 = i + 1; i2 < len; i2++) {
          if ((_wrap_setLastFunctionCall("fullcalendar.js",1093,40205,40222) || format.charAt(i2)) == ']') {
            var subformat = (_wrap_setLastFunctionCall("fullcalendar.js",1094,40273,40300) || format.substring(i + 1, i2));
            var subres = (_wrap_setLastFunctionCall("fullcalendar.js",1095,40339,40375) || formatDate(date, subformat, options));
            if (subres != (_wrap_setLastFunctionCall("fullcalendar.js",1096,40415,40456) || formatDate(otherDate, subformat, options))) {
              res += subres;
            }
            i = i2;
            break;
          }
        }
      } else if (c == '{') {
        date = date2;
        otherDate = date1;
      } else if (c == '}') {
        date = date1;
        otherDate = date2;
      } else {
        for (i2 = len; i2 > i; i2--) {
          if (formatter = dateFormatters[(_wrap_setLastFunctionCall("fullcalendar.js",1111,40951,40974) || format.substring(i, i2))]) {
            if (date) {
              res += (_wrap_setLastFunctionCall("fullcalendar.js",1113,41050,41074) || formatter(date, options));
            }
            i = i2 - 1;
            break;
          }
        }
        if (i2 == i) {
          if (date) {
            res += c;
          }
        }
      }
    }
    return res;
  }
  ;
  var dateFormatters = {s: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1130, 41444,41511, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1131,41482,41496) || d.getSeconds());
}, ss: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1133, 41529,41605, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1134,41567,41590) || zeroPad((_wrap_setLastFunctionCall("fullcalendar.js",1134,41575,41589) || d.getSeconds())));
}, m: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1136, 41622,41689, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1137,41660,41674) || d.getMinutes());
}, mm: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1139, 41707,41783, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1140,41745,41768) || zeroPad((_wrap_setLastFunctionCall("fullcalendar.js",1140,41753,41767) || d.getMinutes())));
}, h: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1142, 41800,41876, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1143,41838,41850) || d.getHours()) % 12 || 12;
}, hh: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1145, 41894,41979, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1146,41932,41964) || zeroPad((_wrap_setLastFunctionCall("fullcalendar.js",1146,41940,41952) || d.getHours()) % 12 || 12));
}, H: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1148, 41996,42061, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1149,42034,42046) || d.getHours());
}, HH: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1151, 42079,42153, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1152,42117,42138) || zeroPad((_wrap_setLastFunctionCall("fullcalendar.js",1152,42125,42137) || d.getHours())));
}, d: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1154, 42170,42234, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1155,42208,42219) || d.getDate());
}, dd: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1157, 42252,42325, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1158,42290,42310) || zeroPad((_wrap_setLastFunctionCall("fullcalendar.js",1158,42298,42309) || d.getDate())));
}, ddd: function(d, o) {
_wrap_addFunctionToMap('fullcalendar.js', 1160, 42344,42427, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return o.dayNamesShort[(_wrap_setLastFunctionCall("fullcalendar.js",1161,42401,42411) || d.getDay())];
}, dddd: function(d, o) {
_wrap_addFunctionToMap('fullcalendar.js', 1163, 42447,42525, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return o.dayNames[(_wrap_setLastFunctionCall("fullcalendar.js",1164,42499,42509) || d.getDay())];
}, M: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1166, 42542,42611, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1167,42580,42592) || d.getMonth()) + 1;
}, MM: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1169, 42629,42707, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1170,42667,42692) || zeroPad((_wrap_setLastFunctionCall("fullcalendar.js",1170,42675,42687) || d.getMonth()) + 1));
}, MMM: function(d, o) {
_wrap_addFunctionToMap('fullcalendar.js', 1172, 42726,42813, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return o.monthNamesShort[(_wrap_setLastFunctionCall("fullcalendar.js",1173,42785,42797) || d.getMonth())];
}, MMMM: function(d, o) {
_wrap_addFunctionToMap('fullcalendar.js', 1175, 42833,42915, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return o.monthNames[(_wrap_setLastFunctionCall("fullcalendar.js",1176,42887,42899) || d.getMonth())];
}, yy: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1178, 42933,43021, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1179,42972,43006) || ((_wrap_setLastFunctionCall("fullcalendar.js",1179,42972,42987) || d.getFullYear()) + '').substring(2));
}, yyyy: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1181, 43041,43109, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1182,43079,43094) || d.getFullYear());
}, t: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1184, 43126,43208, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1185,43164,43176) || d.getHours()) < 12 ? 'a' : 'p';
}, tt: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1187, 43226,43310, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1188,43264,43276) || d.getHours()) < 12 ? 'am' : 'pm';
}, T: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1190, 43327,43409, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1191,43365,43377) || d.getHours()) < 12 ? 'A' : 'P';
}, TT: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1193, 43427,43511, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1194,43465,43477) || d.getHours()) < 12 ? 'AM' : 'PM';
}, u: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1196, 43528,43626, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1197,43566,43611) || formatDate(d, 'yyyy-MM-dd\'T\'HH:mm:ss\'Z\''));
}, S: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1199, 43643,43952, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var date = (_wrap_setLastFunctionCall("fullcalendar.js",1200,43685,43696) || d.getDate());
  if (date > 10 && date < 20) {
    return 'th';
  }
  return ['st', 'nd', 'rd'][date % 10 - 1] || 'th';
}};
  fc.applyAll = applyAll;
  function exclEndDay(event) {
_wrap_addFunctionToMap('fullcalendar.js', 1212, 43996,44194, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (event.end) {
      return (_wrap_setLastFunctionCall("fullcalendar.js",1214,44069,44105) || _exclEndDay(event.end, event.allDay));
    } else {
      return (_wrap_setLastFunctionCall("fullcalendar.js",1216,44143,44177) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",1216,44151,44173) || cloneDate(event.start)), 1));
    }
  }
  function _exclEndDay(end, allDay) {
_wrap_addFunctionToMap('fullcalendar.js', 1219, 44199,44366, (typeof arguments === 'object' ? arguments.callee.caller : null));

    end = (_wrap_setLastFunctionCall("fullcalendar.js",1220,44249,44263) || cloneDate(end));
    return allDay || (_wrap_setLastFunctionCall("fullcalendar.js",1221,44290,44304) || end.getHours()) || (_wrap_setLastFunctionCall("fullcalendar.js",1221,44308,44324) || end.getMinutes()) ? (_wrap_setLastFunctionCall("fullcalendar.js",1221,44327,44342) || addDays(end, 1)) : (_wrap_setLastFunctionCall("fullcalendar.js",1221,44345,44359) || clearTime(end));
  }
  function segCmp(a, b) {
_wrap_addFunctionToMap('fullcalendar.js', 1223, 44371,44482, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return (b.msLength - a.msLength) * 100 + (a.event.start - b.event.start);
  }
  function segsCollide(seg1, seg2) {
_wrap_addFunctionToMap('fullcalendar.js', 1226, 44487,44590, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return seg1.end > seg2.start && seg1.start < seg2.end;
  }
  function sliceSegs(events, visEventEnds, start, end) {
_wrap_addFunctionToMap('fullcalendar.js', 1229, 44595,45780, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var segs = [], i, len = events.length, event, eventStart, eventEnd, segStart, segEnd, isStart, isEnd;
    for (i = 0; i < len; i++) {
      event = events[i];
      eventStart = event.start;
      eventEnd = visEventEnds[i];
      if (eventEnd > start && eventStart < end) {
        if (eventStart < start) {
          segStart = (_wrap_setLastFunctionCall("fullcalendar.js",1237,45034,45050) || cloneDate(start));
          isStart = false;
        } else {
          segStart = eventStart;
          isStart = true;
        }
        if (eventEnd > end) {
          segEnd = (_wrap_setLastFunctionCall("fullcalendar.js",1244,45278,45292) || cloneDate(end));
          isEnd = false;
        } else {
          segEnd = eventEnd;
          isEnd = true;
        }
(_wrap_setLastFunctionCall("fullcalendar.js",1250,45461,45715) ||         segs.push({event: event, start: segStart, end: segEnd, isStart: isStart, isEnd: isEnd, msLength: segEnd - segStart}));
      }
    }
    return (_wrap_setLastFunctionCall("fullcalendar.js",1260,45756,45773) || segs.sort(segCmp));
  }
  function stackSegs(segs) {
_wrap_addFunctionToMap('fullcalendar.js', 1262, 45785,46636, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var levels = [], i, len = segs.length, seg, j, collide, k;
    for (i = 0; i < len; i++) {
      seg = segs[i];
      j = 0;
      while (true) {
        collide = false;
        if (levels[j]) {
          for (k = 0; k < levels[j].length; k++) {
            if ((_wrap_setLastFunctionCall("fullcalendar.js",1271,46143,46173) || segsCollide(levels[j][k], seg))) {
              collide = true;
              break;
            }
          }
        }
        if (collide) {
          j++;
        } else {
          break;
        }
      }
      if (levels[j]) {
(_wrap_setLastFunctionCall("fullcalendar.js",1284,46507,46526) ||         levels[j].push(seg));
      } else {
        levels[j] = [seg];
      }
    }
    return levels;
  }
  function lazySegBind(container, segs, bindHandlers) {
_wrap_addFunctionToMap('fullcalendar.js', 1291, 46641,47208, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1292,46703,47201) ||     (_wrap_setLastFunctionCall("fullcalendar.js",1292,46703,46732) || container.unbind('mouseover')).mouseover(function(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 1292, 46743,47200, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var parent = ev.target, e, i, seg;
  while (parent != this) {
    e = parent;
    parent = parent.parentNode;
  }
  if ((i = e._fci) !== undefined) {
    e._fci = undefined;
    seg = segs[i];
(_wrap_setLastFunctionCall("fullcalendar.js",1301,47058,47099) ||     bindHandlers(seg.event, seg.element, seg));
(_wrap_setLastFunctionCall("fullcalendar.js",1302,47117,47141) ||     (_wrap_setLastFunctionCall("fullcalendar.js",1302,47117,47129) || $(ev.target)).trigger(ev));
  }
(_wrap_setLastFunctionCall("fullcalendar.js",1304,47169,47189) ||   ev.stopPropagation());
}));
  }
  function setOuterWidth(element, width, includeMargins) {
_wrap_addFunctionToMap('fullcalendar.js', 1307, 47213,47439, (typeof arguments === 'object' ? arguments.callee.caller : null));

    for (var i = 0, e; i < element.length; i++) {
      e = (_wrap_setLastFunctionCall("fullcalendar.js",1309,47340,47353) || $(element[i]));
(_wrap_setLastFunctionCall("fullcalendar.js",1310,47367,47422) ||       e.width((_wrap_setLastFunctionCall("fullcalendar.js",1310,47375,47421) || Math.max(0, width - (_wrap_setLastFunctionCall("fullcalendar.js",1310,47395,47420) || hsides(e, includeMargins))))));
    }
  }
  function setOuterHeight(element, height, includeMargins) {
_wrap_addFunctionToMap('fullcalendar.js', 1313, 47444,47674, (typeof arguments === 'object' ? arguments.callee.caller : null));

    for (var i = 0, e; i < element.length; i++) {
      e = (_wrap_setLastFunctionCall("fullcalendar.js",1315,47573,47586) || $(element[i]));
(_wrap_setLastFunctionCall("fullcalendar.js",1316,47600,47657) ||       e.height((_wrap_setLastFunctionCall("fullcalendar.js",1316,47609,47656) || Math.max(0, height - (_wrap_setLastFunctionCall("fullcalendar.js",1316,47630,47655) || vsides(e, includeMargins))))));
    }
  }
  function hsides(element, includeMargins) {
_wrap_addFunctionToMap('fullcalendar.js', 1319, 47679,47824, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return (_wrap_setLastFunctionCall("fullcalendar.js",1320,47737,47754) || hpadding(element)) + (_wrap_setLastFunctionCall("fullcalendar.js",1320,47757,47774) || hborders(element)) + (includeMargins ? (_wrap_setLastFunctionCall("fullcalendar.js",1320,47795,47812) || hmargins(element)) : 0);
  }
  function hpadding(element) {
_wrap_addFunctionToMap('fullcalendar.js', 1322, 47829,48004, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return ((_wrap_setLastFunctionCall("fullcalendar.js",1323,47874,47927) || parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1323,47885,47926) || $.curCSS(element[0], 'paddingLeft', true)))) || 0) + ((_wrap_setLastFunctionCall("fullcalendar.js",1323,47937,47991) || parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1323,47948,47990) || $.curCSS(element[0], 'paddingRight', true)))) || 0);
  }
  function hmargins(element) {
_wrap_addFunctionToMap('fullcalendar.js', 1325, 48009,48182, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return ((_wrap_setLastFunctionCall("fullcalendar.js",1326,48054,48106) || parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1326,48065,48105) || $.curCSS(element[0], 'marginLeft', true)))) || 0) + ((_wrap_setLastFunctionCall("fullcalendar.js",1326,48116,48169) || parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1326,48127,48168) || $.curCSS(element[0], 'marginRight', true)))) || 0);
  }
  function hborders(element) {
_wrap_addFunctionToMap('fullcalendar.js', 1328, 48187,48370, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return ((_wrap_setLastFunctionCall("fullcalendar.js",1329,48232,48289) || parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1329,48243,48288) || $.curCSS(element[0], 'borderLeftWidth', true)))) || 0) + ((_wrap_setLastFunctionCall("fullcalendar.js",1329,48299,48357) || parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1329,48310,48356) || $.curCSS(element[0], 'borderRightWidth', true)))) || 0);
  }
  function vsides(element, includeMargins) {
_wrap_addFunctionToMap('fullcalendar.js', 1331, 48375,48520, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return (_wrap_setLastFunctionCall("fullcalendar.js",1332,48433,48450) || vpadding(element)) + (_wrap_setLastFunctionCall("fullcalendar.js",1332,48453,48470) || vborders(element)) + (includeMargins ? (_wrap_setLastFunctionCall("fullcalendar.js",1332,48491,48508) || vmargins(element)) : 0);
  }
  function vpadding(element) {
_wrap_addFunctionToMap('fullcalendar.js', 1334, 48525,48700, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return ((_wrap_setLastFunctionCall("fullcalendar.js",1335,48570,48622) || parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1335,48581,48621) || $.curCSS(element[0], 'paddingTop', true)))) || 0) + ((_wrap_setLastFunctionCall("fullcalendar.js",1335,48632,48687) || parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1335,48643,48686) || $.curCSS(element[0], 'paddingBottom', true)))) || 0);
  }
  function vmargins(element) {
_wrap_addFunctionToMap('fullcalendar.js', 1337, 48705,48878, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return ((_wrap_setLastFunctionCall("fullcalendar.js",1338,48750,48801) || parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1338,48761,48800) || $.curCSS(element[0], 'marginTop', true)))) || 0) + ((_wrap_setLastFunctionCall("fullcalendar.js",1338,48811,48865) || parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1338,48822,48864) || $.curCSS(element[0], 'marginBottom', true)))) || 0);
  }
  function vborders(element) {
_wrap_addFunctionToMap('fullcalendar.js', 1340, 48883,49066, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return ((_wrap_setLastFunctionCall("fullcalendar.js",1341,48928,48984) || parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1341,48939,48983) || $.curCSS(element[0], 'borderTopWidth', true)))) || 0) + ((_wrap_setLastFunctionCall("fullcalendar.js",1341,48994,49053) || parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1341,49005,49052) || $.curCSS(element[0], 'borderBottomWidth', true)))) || 0);
  }
  function setMinHeight(element, height) {
_wrap_addFunctionToMap('fullcalendar.js', 1343, 49071,49330, (typeof arguments === 'object' ? arguments.callee.caller : null));

    height = typeof height == 'number' ? height + 'px' : height;
(_wrap_setLastFunctionCall("fullcalendar.js",1345,49189,49323) ||     element.each(function(i, _element) {
_wrap_addFunctionToMap('fullcalendar.js', 1345, 49202,49322, (typeof arguments === 'object' ? arguments.callee.caller : null));

  _element.style.cssText += ';min-height:' + height + ';_height:' + height;
}));
  }
  function noop() {
_wrap_addFunctionToMap('fullcalendar.js', 1349, 49335,49358, (typeof arguments === 'object' ? arguments.callee.caller : null));

  }
  function cmp(a, b) {
_wrap_addFunctionToMap('fullcalendar.js', 1351, 49363,49411, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return a - b;
  }
  function arrayMax(a) {
_wrap_addFunctionToMap('fullcalendar.js', 1354, 49416,49484, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return (_wrap_setLastFunctionCall("fullcalendar.js",1355,49454,49477) || Math.max.apply(Math, a));
  }
  function zeroPad(n) {
_wrap_addFunctionToMap('fullcalendar.js', 1357, 49489,49556, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return (n < 10 ? '0' : '') + n;
  }
  function smartProperty(obj, name) {
_wrap_addFunctionToMap('fullcalendar.js', 1360, 49561,49943, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (obj[name] !== undefined) {
      return obj[name];
    }
    var parts = (_wrap_setLastFunctionCall("fullcalendar.js",1364,49696,49719) || name.split(/(?=[A-Z])/)), i = parts.length - 1, res;
    for (; i >= 0; i--) {
      res = obj[(_wrap_setLastFunctionCall("fullcalendar.js",1366,49800,49822) || parts[i].toLowerCase())];
      if (res !== undefined) {
        return res;
      }
    }
    return obj[''];
  }
  function htmlEscape(s) {
_wrap_addFunctionToMap('fullcalendar.js', 1373, 49948,50136, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return (_wrap_setLastFunctionCall("fullcalendar.js",1374,49988,50129) || (_wrap_setLastFunctionCall("fullcalendar.js",1374,49988,50104) || (_wrap_setLastFunctionCall("fullcalendar.js",1374,49988,50080) || (_wrap_setLastFunctionCall("fullcalendar.js",1374,49988,50056) || (_wrap_setLastFunctionCall("fullcalendar.js",1374,49988,50034) || (_wrap_setLastFunctionCall("fullcalendar.js",1374,49988,50012) || s.replace(/&/g, '&amp;')).replace(/</g, '&lt;')).replace(/>/g, '&gt;')).replace(/'/g, '&#039;')).replace(/"/g, '&quot;')).replace(/\n/g, '<br />'));
  }
  function cssKey(_element) {
_wrap_addFunctionToMap('fullcalendar.js', 1376, 50141,50318, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return _element.id + '/' + _element.className + '/' + (_wrap_setLastFunctionCall("fullcalendar.js",1377,50231,50311) || _element.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/gi, ''));
  }
  function disableTextSelection(element) {
_wrap_addFunctionToMap('fullcalendar.js', 1379, 50323,50516, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1380,50372,50509) ||     (_wrap_setLastFunctionCall("fullcalendar.js",1380,50372,50435) || (_wrap_setLastFunctionCall("fullcalendar.js",1380,50372,50406) || element.attr('unselectable', 'on')).css('MozUserSelect', 'none')).bind('selectstart.ui', function() {
_wrap_addFunctionToMap('fullcalendar.js', 1380, 50459,50508, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return false;
}));
  }
  function markFirstLast(e) {
_wrap_addFunctionToMap('fullcalendar.js', 1384, 50521,50700, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1385,50557,50693) ||     (_wrap_setLastFunctionCall("fullcalendar.js",1385,50557,50673) || (_wrap_setLastFunctionCall("fullcalendar.js",1385,50557,50651) || (_wrap_setLastFunctionCall("fullcalendar.js",1385,50557,50645) || (_wrap_setLastFunctionCall("fullcalendar.js",1385,50557,50624) || (_wrap_setLastFunctionCall("fullcalendar.js",1385,50557,50601) || (_wrap_setLastFunctionCall("fullcalendar.js",1385,50557,50569) || e.children()).removeClass('fc-first fc-last')).filter(':first-child')).addClass('fc-first')).end()).filter(':last-child')).addClass('fc-last'));
  }
  function setDayID(cell, date) {
_wrap_addFunctionToMap('fullcalendar.js', 1387, 50705,50891, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1388,50745,50884) ||     cell.each(function(i, _cell) {
_wrap_addFunctionToMap('fullcalendar.js', 1388, 50755,50883, (typeof arguments === 'object' ? arguments.callee.caller : null));

  _cell.className = (_wrap_setLastFunctionCall("fullcalendar.js",1389,50807,50872) || _cell.className.replace(/^fc-\w*/, 'fc-' + dayIDs[(_wrap_setLastFunctionCall("fullcalendar.js",1389,50857,50870) || date.getDay())]));
}));
  }
  function getSkinCss(event, opt) {
_wrap_addFunctionToMap('fullcalendar.js', 1392, 50896,51835, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var source = event.source || {};
    var eventColor = event.color;
    var sourceColor = source.color;
    var optionColor = (_wrap_setLastFunctionCall("fullcalendar.js",1396,51075,51092) || opt('eventColor'));
    var backgroundColor = event.backgroundColor || eventColor || source.backgroundColor || sourceColor || (_wrap_setLastFunctionCall("fullcalendar.js",1397,51204,51231) || opt('eventBackgroundColor')) || optionColor;
    var borderColor = event.borderColor || eventColor || source.borderColor || sourceColor || (_wrap_setLastFunctionCall("fullcalendar.js",1398,51346,51369) || opt('eventBorderColor')) || optionColor;
    var textColor = event.textColor || source.textColor || (_wrap_setLastFunctionCall("fullcalendar.js",1399,51449,51470) || opt('eventTextColor'));
    var statements = [];
    if (backgroundColor) {
(_wrap_setLastFunctionCall("fullcalendar.js",1402,51544,51598) ||       statements.push('background-color:' + backgroundColor));
    }
    if (borderColor) {
(_wrap_setLastFunctionCall("fullcalendar.js",1405,51649,51695) ||       statements.push('border-color:' + borderColor));
    }
    if (textColor) {
(_wrap_setLastFunctionCall("fullcalendar.js",1408,51744,51781) ||       statements.push('color:' + textColor));
    }
    return (_wrap_setLastFunctionCall("fullcalendar.js",1410,51808,51828) || statements.join(';'));
  }
  function applyAll(functions, thisObj, args) {
_wrap_addFunctionToMap('fullcalendar.js', 1412, 51840,52207, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if ((_wrap_setLastFunctionCall("fullcalendar.js",1413,51898,51921) || $.isFunction(functions))) {
      functions = [functions];
    }
    if (functions) {
      var i;
      var ret;
      for (i = 0; i < functions.length; i++) {
        ret = (_wrap_setLastFunctionCall("fullcalendar.js",1420,52112,52145) || functions[i].apply(thisObj, args)) || ret;
      }
      return ret;
    }
  }
  function firstDefined() {
_wrap_addFunctionToMap('fullcalendar.js', 1425, 52212,52403, (typeof arguments === 'object' ? arguments.callee.caller : null));

    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] !== undefined) {
        return arguments[i];
      }
    }
  }
  fcViews.month = MonthView;
  function MonthView(element, calendar) {
_wrap_addFunctionToMap('fullcalendar.js', 1433, 52439,53911, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.render = render;
(_wrap_setLastFunctionCall("fullcalendar.js",1436,52536,52581) ||     BasicView.call(t, element, calendar, 'month'));
    var opt = t.opt;
    var renderBasic = t.renderBasic;
    var formatDate = calendar.formatDate;
    function render(date, delta) {
_wrap_addFunctionToMap('fullcalendar.js', 1440, 52703,53905, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (delta) {
(_wrap_setLastFunctionCall("fullcalendar.js",1442,52775,52797) ||         addMonths(date, delta));
(_wrap_setLastFunctionCall("fullcalendar.js",1443,52815,52830) ||         date.setDate(1));
      }
      var start = (_wrap_setLastFunctionCall("fullcalendar.js",1445,52870,52891) || cloneDate(date, true));
(_wrap_setLastFunctionCall("fullcalendar.js",1446,52905,52921) ||       start.setDate(1));
      var end = (_wrap_setLastFunctionCall("fullcalendar.js",1447,52945,52975) || addMonths((_wrap_setLastFunctionCall("fullcalendar.js",1447,52955,52971) || cloneDate(start)), 1));
      var visStart = (_wrap_setLastFunctionCall("fullcalendar.js",1448,53004,53020) || cloneDate(start));
      var visEnd = (_wrap_setLastFunctionCall("fullcalendar.js",1449,53047,53061) || cloneDate(end));
      var firstDay = (_wrap_setLastFunctionCall("fullcalendar.js",1450,53090,53105) || opt('firstDay'));
      var nwe = (_wrap_setLastFunctionCall("fullcalendar.js",1451,53129,53144) || opt('weekends')) ? 0 : 1;
      if (nwe) {
(_wrap_setLastFunctionCall("fullcalendar.js",1453,53193,53214) ||         skipWeekend(visStart));
(_wrap_setLastFunctionCall("fullcalendar.js",1454,53232,53261) ||         skipWeekend(visEnd, -1, true));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",1456,53289,53364) ||       addDays(visStart, -(((_wrap_setLastFunctionCall("fullcalendar.js",1456,53310,53327) || visStart.getDay()) - (_wrap_setLastFunctionCall("fullcalendar.js",1456,53330,53353) || Math.max(firstDay, nwe)) + 7) % 7)));
(_wrap_setLastFunctionCall("fullcalendar.js",1457,53378,53446) ||       addDays(visEnd, (7 - (_wrap_setLastFunctionCall("fullcalendar.js",1457,53399,53414) || visEnd.getDay()) + (_wrap_setLastFunctionCall("fullcalendar.js",1457,53417,53440) || Math.max(firstDay, nwe))) % 7));
      var rowCnt = (_wrap_setLastFunctionCall("fullcalendar.js",1458,53473,53519) || Math.round((visEnd - visStart) / (DAY_MS * 7)));
      if ((_wrap_setLastFunctionCall("fullcalendar.js",1459,53537,53552) || opt('weekMode')) == 'fixed') {
(_wrap_setLastFunctionCall("fullcalendar.js",1460,53583,53616) ||         addDays(visEnd, (6 - rowCnt) * 7));
        rowCnt = 6;
      }
      t.title = (_wrap_setLastFunctionCall("fullcalendar.js",1463,53682,53719) || formatDate(start, (_wrap_setLastFunctionCall("fullcalendar.js",1463,53700,53718) || opt('titleFormat'))));
      t.start = start;
      t.end = end;
      t.visStart = visStart;
      t.visEnd = visEnd;
(_wrap_setLastFunctionCall("fullcalendar.js",1468,53853,53894) ||       renderBasic(6, rowCnt, nwe ? 5 : 7, true));
    }
  }
  fcViews.basicWeek = BasicWeekView;
  function BasicWeekView(element, calendar) {
_wrap_addFunctionToMap('fullcalendar.js', 1472, 53955,55036, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.render = render;
(_wrap_setLastFunctionCall("fullcalendar.js",1475,54056,54105) ||     BasicView.call(t, element, calendar, 'basicWeek'));
    var opt = t.opt;
    var renderBasic = t.renderBasic;
    var formatDates = calendar.formatDates;
    function render(date, delta) {
_wrap_addFunctionToMap('fullcalendar.js', 1479, 54229,55030, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (delta) {
(_wrap_setLastFunctionCall("fullcalendar.js",1481,54301,54325) ||         addDays(date, delta * 7));
      }
      var start = (_wrap_setLastFunctionCall("fullcalendar.js",1483,54365,54435) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",1483,54373,54388) || cloneDate(date)), -(((_wrap_setLastFunctionCall("fullcalendar.js",1483,54393,54406) || date.getDay()) - (_wrap_setLastFunctionCall("fullcalendar.js",1483,54409,54424) || opt('firstDay')) + 7) % 7)));
      var end = (_wrap_setLastFunctionCall("fullcalendar.js",1484,54459,54487) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",1484,54467,54483) || cloneDate(start)), 7));
      var visStart = (_wrap_setLastFunctionCall("fullcalendar.js",1485,54516,54532) || cloneDate(start));
      var visEnd = (_wrap_setLastFunctionCall("fullcalendar.js",1486,54559,54573) || cloneDate(end));
      var weekends = (_wrap_setLastFunctionCall("fullcalendar.js",1487,54602,54617) || opt('weekends'));
      if (!weekends) {
(_wrap_setLastFunctionCall("fullcalendar.js",1489,54664,54685) ||         skipWeekend(visStart));
(_wrap_setLastFunctionCall("fullcalendar.js",1490,54703,54732) ||         skipWeekend(visEnd, -1, true));
      }
      t.title = (_wrap_setLastFunctionCall("fullcalendar.js",1492,54770,54843) || formatDates(visStart, (_wrap_setLastFunctionCall("fullcalendar.js",1492,54792,54822) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",1492,54800,54817) || cloneDate(visEnd)), -1)), (_wrap_setLastFunctionCall("fullcalendar.js",1492,54824,54842) || opt('titleFormat'))));
      t.start = start;
      t.end = end;
      t.visStart = visStart;
      t.visEnd = visEnd;
(_wrap_setLastFunctionCall("fullcalendar.js",1497,54977,55019) ||       renderBasic(1, 1, weekends ? 7 : 5, false));
    }
  }
  fcViews.basicDay = BasicDayView;
  function BasicDayView(element, calendar) {
_wrap_addFunctionToMap('fullcalendar.js', 1501, 55078,55810, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.render = render;
(_wrap_setLastFunctionCall("fullcalendar.js",1504,55178,55226) ||     BasicView.call(t, element, calendar, 'basicDay'));
    var opt = t.opt;
    var renderBasic = t.renderBasic;
    var formatDate = calendar.formatDate;
    function render(date, delta) {
_wrap_addFunctionToMap('fullcalendar.js', 1508, 55348,55804, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (delta) {
(_wrap_setLastFunctionCall("fullcalendar.js",1510,55420,55440) ||         addDays(date, delta));
        if (!(_wrap_setLastFunctionCall("fullcalendar.js",1511,55463,55478) || opt('weekends'))) {
(_wrap_setLastFunctionCall("fullcalendar.js",1512,55502,55539) ||           skipWeekend(date, delta < 0 ? -1 : 1));
        }
      }
      t.title = (_wrap_setLastFunctionCall("fullcalendar.js",1515,55595,55631) || formatDate(date, (_wrap_setLastFunctionCall("fullcalendar.js",1515,55612,55630) || opt('titleFormat'))));
      t.start = t.visStart = (_wrap_setLastFunctionCall("fullcalendar.js",1516,55668,55689) || cloneDate(date, true));
      t.end = t.visEnd = (_wrap_setLastFunctionCall("fullcalendar.js",1517,55722,55752) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",1517,55730,55748) || cloneDate(t.start)), 1));
(_wrap_setLastFunctionCall("fullcalendar.js",1518,55766,55793) ||       renderBasic(1, 1, 1, false));
    }
  }
(_wrap_setLastFunctionCall("fullcalendar.js",1521,55815,55849) ||   setDefaults({weekMode: 'fixed'}));
  function BasicView(element, calendar, viewName) {
_wrap_addFunctionToMap('fullcalendar.js', 1522, 55855,68384, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.renderBasic = renderBasic;
    t.setHeight = setHeight;
    t.setWidth = setWidth;
    t.renderDayOverlay = renderDayOverlay;
    t.defaultSelectionEnd = defaultSelectionEnd;
    t.renderSelection = renderSelection;
    t.clearSelection = clearSelection;
    t.reportDayClick = reportDayClick;
    t.dragStart = dragStart;
    t.dragStop = dragStop;
    t.defaultEventEnd = defaultEventEnd;
    t.getHoverListener = function() {
_wrap_addFunctionToMap('fullcalendar.js', 1535, 56397,56454, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return hoverListener;
};
    t.colContentLeft = colContentLeft;
    t.colContentRight = colContentRight;
    t.dayOfWeekCol = dayOfWeekCol;
    t.dateCell = dateCell;
    t.cellDate = cellDate;
    t.cellIsAllDay = function() {
_wrap_addFunctionToMap('fullcalendar.js', 1543, 56670,56718, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return true;
};
    t.allDayRow = allDayRow;
    t.allDayBounds = allDayBounds;
    t.getRowCnt = function() {
_wrap_addFunctionToMap('fullcalendar.js', 1548, 56814,56864, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return rowCnt;
};
    t.getColCnt = function() {
_wrap_addFunctionToMap('fullcalendar.js', 1551, 56888,56938, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return colCnt;
};
    t.getColWidth = function() {
_wrap_addFunctionToMap('fullcalendar.js', 1554, 56964,57016, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return colWidth;
};
    t.getDaySegmentContainer = function() {
_wrap_addFunctionToMap('fullcalendar.js', 1557, 57053,57116, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return daySegmentContainer;
};
(_wrap_setLastFunctionCall("fullcalendar.js",1560,57126,57167) ||     View.call(t, element, calendar, viewName));
(_wrap_setLastFunctionCall("fullcalendar.js",1561,57177,57199) ||     OverlayManager.call(t));
(_wrap_setLastFunctionCall("fullcalendar.js",1562,57209,57233) ||     SelectionManager.call(t));
(_wrap_setLastFunctionCall("fullcalendar.js",1563,57243,57269) ||     BasicEventRenderer.call(t));
    var opt = t.opt;
    var trigger = t.trigger;
    var clearEvents = t.clearEvents;
    var renderOverlay = t.renderOverlay;
    var clearOverlays = t.clearOverlays;
    var daySelectionMousedown = t.daySelectionMousedown;
    var formatDate = calendar.formatDate;
    var head;
    var headCells;
    var body;
    var bodyRows;
    var bodyCells;
    var bodyFirstCells;
    var bodyCellTopInners;
    var daySegmentContainer;
    var viewWidth;
    var viewHeight;
    var colWidth;
    var rowCnt, colCnt;
    var coordinateGrid;
    var hoverListener;
    var colContentPositions;
    var rtl, dis, dit;
    var firstDay;
    var nwe;
    var tm;
    var colFormat;
(_wrap_setLastFunctionCall("fullcalendar.js",1591,58061,58110) ||     disableTextSelection((_wrap_setLastFunctionCall("fullcalendar.js",1591,58082,58109) || element.addClass('fc-grid'))));
    function renderBasic(maxr, r, c, showNumbers) {
_wrap_addFunctionToMap('fullcalendar.js', 1592, 58120,58470, (typeof arguments === 'object' ? arguments.callee.caller : null));

      rowCnt = r;
      colCnt = c;
(_wrap_setLastFunctionCall("fullcalendar.js",1595,58228,58243) ||       updateOptions());
      var firstTime = !body;
      if (firstTime) {
(_wrap_setLastFunctionCall("fullcalendar.js",1598,58325,58357) ||         buildSkeleton(maxr, showNumbers));
      } else {
(_wrap_setLastFunctionCall("fullcalendar.js",1600,58396,58409) ||         clearEvents());
      }
(_wrap_setLastFunctionCall("fullcalendar.js",1602,58437,58459) ||       updateCells(firstTime));
    }
    function updateOptions() {
_wrap_addFunctionToMap('fullcalendar.js', 1604, 58479,58888, (typeof arguments === 'object' ? arguments.callee.caller : null));

      rtl = (_wrap_setLastFunctionCall("fullcalendar.js",1605,58524,58536) || opt('isRTL'));
      if (rtl) {
        dis = -1;
        dit = colCnt - 1;
      } else {
        dis = 1;
        dit = 0;
      }
      firstDay = (_wrap_setLastFunctionCall("fullcalendar.js",1613,58729,58744) || opt('firstDay'));
      nwe = (_wrap_setLastFunctionCall("fullcalendar.js",1614,58764,58779) || opt('weekends')) ? 0 : 1;
      tm = (_wrap_setLastFunctionCall("fullcalendar.js",1615,58806,58818) || opt('theme')) ? 'ui' : 'fc';
      colFormat = (_wrap_setLastFunctionCall("fullcalendar.js",1616,58858,58877) || opt('columnFormat'));
    }
    function buildSkeleton(maxRowCnt, showNumbers) {
_wrap_addFunctionToMap('fullcalendar.js', 1618, 58897,60626, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var s;
      var headerClass = tm + '-widget-header';
      var contentClass = tm + '-widget-content';
      var i, j;
      var table;
      s = '<table class=\'fc-border-separate\' style=\'width:100%\' cellspacing=\'0\'>' + '<thead>' + '<tr>';
      for (i = 0; i < colCnt; i++) {
        s += '<th class=\'fc- ' + headerClass + '\'/>';
      }
      s += '</tr>' + '</thead>' + '<tbody>';
      for (i = 0; i < maxRowCnt; i++) {
        s += '<tr class=\'fc-week' + i + '\'>';
        for (j = 0; j < colCnt; j++) {
          s += '<td class=\'fc- ' + contentClass + ' fc-day' + (i * colCnt + j) + '\'>' + '<div>' + (showNumbers ? '<div class=\'fc-day-number\'/>' : '') + '<div class=\'fc-day-content\'>' + '<div style=\'position:relative\'>&nbsp;</div>' + '</div>' + '</div>' + '</td>';
        }
        s += '</tr>';
      }
      s += '</tbody>' + '</table>';
      table = (_wrap_setLastFunctionCall("fullcalendar.js",1637,59961,59983) || (_wrap_setLastFunctionCall("fullcalendar.js",1637,59961,59965) || $(s)).appendTo(element));
      head = (_wrap_setLastFunctionCall("fullcalendar.js",1638,60004,60023) || table.find('thead'));
      headCells = (_wrap_setLastFunctionCall("fullcalendar.js",1639,60049,60064) || head.find('th'));
      body = (_wrap_setLastFunctionCall("fullcalendar.js",1640,60085,60104) || table.find('tbody'));
      bodyRows = (_wrap_setLastFunctionCall("fullcalendar.js",1641,60129,60144) || body.find('tr'));
      bodyCells = (_wrap_setLastFunctionCall("fullcalendar.js",1642,60170,60185) || body.find('td'));
      bodyFirstCells = (_wrap_setLastFunctionCall("fullcalendar.js",1643,60216,60248) || bodyCells.filter(':first-child'));
      bodyCellTopInners = (_wrap_setLastFunctionCall("fullcalendar.js",1644,60282,60327) || (_wrap_setLastFunctionCall("fullcalendar.js",1644,60282,60296) || bodyRows.eq(0)).find('div.fc-day-content div'));
(_wrap_setLastFunctionCall("fullcalendar.js",1645,60341,60381) ||       markFirstLast((_wrap_setLastFunctionCall("fullcalendar.js",1645,60355,60380) || head.add((_wrap_setLastFunctionCall("fullcalendar.js",1645,60364,60379) || head.find('tr'))))));
(_wrap_setLastFunctionCall("fullcalendar.js",1646,60395,60418) ||       markFirstLast(bodyRows));
(_wrap_setLastFunctionCall("fullcalendar.js",1647,60432,60467) ||       (_wrap_setLastFunctionCall("fullcalendar.js",1647,60432,60446) || bodyRows.eq(0)).addClass('fc-first'));
(_wrap_setLastFunctionCall("fullcalendar.js",1648,60481,60499) ||       dayBind(bodyCells));
      daySegmentContainer = (_wrap_setLastFunctionCall("fullcalendar.js",1649,60535,60615) || (_wrap_setLastFunctionCall("fullcalendar.js",1649,60535,60597) || $('<div style=\'position:absolute;z-index:8;top:0;left:0\'/>')).appendTo(element));
    }
    function updateCells(firstTime) {
_wrap_addFunctionToMap('fullcalendar.js', 1651, 60635,62331, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var dowDirty = firstTime || rowCnt == 1;
      var month = (_wrap_setLastFunctionCall("fullcalendar.js",1653,60746,60764) || t.start.getMonth());
      var today = (_wrap_setLastFunctionCall("fullcalendar.js",1654,60790,60811) || clearTime((_wrap_setLastFunctionCall("fullcalendar.js",1654,60800,60810) || new Date())));
      var cell;
      var date;
      var row;
      if (dowDirty) {
(_wrap_setLastFunctionCall("fullcalendar.js",1659,60922,61157) ||         headCells.each(function(i, _cell) {
_wrap_addFunctionToMap('fullcalendar.js', 1659, 60937,61156, (typeof arguments === 'object' ? arguments.callee.caller : null));

  cell = (_wrap_setLastFunctionCall("fullcalendar.js",1660,60986,60994) || $(_cell));
  date = (_wrap_setLastFunctionCall("fullcalendar.js",1661,61023,61035) || indexDate(i));
(_wrap_setLastFunctionCall("fullcalendar.js",1662,61057,61095) ||   cell.html((_wrap_setLastFunctionCall("fullcalendar.js",1662,61067,61094) || formatDate(date, colFormat))));
(_wrap_setLastFunctionCall("fullcalendar.js",1663,61117,61137) ||   setDayID(cell, date));
}));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",1666,61185,61890) ||       bodyCells.each(function(i, _cell) {
_wrap_addFunctionToMap('fullcalendar.js', 1666, 61200,61889, (typeof arguments === 'object' ? arguments.callee.caller : null));

  cell = (_wrap_setLastFunctionCall("fullcalendar.js",1667,61245,61253) || $(_cell));
  date = (_wrap_setLastFunctionCall("fullcalendar.js",1668,61278,61290) || indexDate(i));
  if ((_wrap_setLastFunctionCall("fullcalendar.js",1669,61312,61327) || date.getMonth()) == month) {
(_wrap_setLastFunctionCall("fullcalendar.js",1670,61360,61394) ||     cell.removeClass('fc-other-month'));
  } else {
(_wrap_setLastFunctionCall("fullcalendar.js",1672,61441,61472) ||     cell.addClass('fc-other-month'));
  }
  if (+date == +today) {
(_wrap_setLastFunctionCall("fullcalendar.js",1675,61551,61598) ||     cell.addClass(tm + '-state-highlight fc-today'));
  } else {
(_wrap_setLastFunctionCall("fullcalendar.js",1677,61645,61695) ||     cell.removeClass(tm + '-state-highlight fc-today'));
  }
(_wrap_setLastFunctionCall("fullcalendar.js",1679,61731,61782) ||   (_wrap_setLastFunctionCall("fullcalendar.js",1679,61731,61761) || cell.find('div.fc-day-number')).text((_wrap_setLastFunctionCall("fullcalendar.js",1679,61767,61781) || date.getDate())));
  if (dowDirty) {
(_wrap_setLastFunctionCall("fullcalendar.js",1681,61836,61856) ||     setDayID(cell, date));
  }
}));
(_wrap_setLastFunctionCall("fullcalendar.js",1684,61904,62320) ||       bodyRows.each(function(i, _row) {
_wrap_addFunctionToMap('fullcalendar.js', 1684, 61918,62319, (typeof arguments === 'object' ? arguments.callee.caller : null));

  row = (_wrap_setLastFunctionCall("fullcalendar.js",1685,61961,61968) || $(_row));
  if (i < rowCnt) {
(_wrap_setLastFunctionCall("fullcalendar.js",1687,62024,62034) ||     row.show());
    if (i == rowCnt - 1) {
(_wrap_setLastFunctionCall("fullcalendar.js",1689,62103,62126) ||       row.addClass('fc-last'));
    } else {
(_wrap_setLastFunctionCall("fullcalendar.js",1691,62181,62207) ||       row.removeClass('fc-last'));
    }
  } else {
(_wrap_setLastFunctionCall("fullcalendar.js",1694,62276,62286) ||     row.hide());
  }
}));
    }
    function setHeight(height) {
_wrap_addFunctionToMap('fullcalendar.js', 1698, 62340,63131, (typeof arguments === 'object' ? arguments.callee.caller : null));

      viewHeight = height;
      var bodyHeight = viewHeight - (_wrap_setLastFunctionCall("fullcalendar.js",1700,62444,62457) || head.height());
      var rowHeight;
      var rowHeightLast;
      var cell;
      if ((_wrap_setLastFunctionCall("fullcalendar.js",1704,62555,62570) || opt('weekMode')) == 'variable') {
        rowHeight = rowHeightLast = (_wrap_setLastFunctionCall("fullcalendar.js",1705,62632,62678) || Math.floor(bodyHeight / (rowCnt == 1 ? 2 : 6)));
      } else {
        rowHeight = (_wrap_setLastFunctionCall("fullcalendar.js",1707,62729,62760) || Math.floor(bodyHeight / rowCnt));
        rowHeightLast = bodyHeight - rowHeight * (rowCnt - 1);
      }
(_wrap_setLastFunctionCall("fullcalendar.js",1710,62859,63120) ||       bodyFirstCells.each(function(i, _cell) {
_wrap_addFunctionToMap('fullcalendar.js', 1710, 62879,63119, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (i < rowCnt) {
    cell = (_wrap_setLastFunctionCall("fullcalendar.js",1712,62962,62970) || $(_cell));
(_wrap_setLastFunctionCall("fullcalendar.js",1713,62992,63086) ||     setMinHeight((_wrap_setLastFunctionCall("fullcalendar.js",1713,63005,63023) || cell.find('> div')), (i == rowCnt - 1 ? rowHeightLast : rowHeight) - (_wrap_setLastFunctionCall("fullcalendar.js",1713,63073,63085) || vsides(cell))));
  }
}));
    }
    function setWidth(width) {
_wrap_addFunctionToMap('fullcalendar.js', 1717, 63140,63364, (typeof arguments === 'object' ? arguments.callee.caller : null));

      viewWidth = width;
(_wrap_setLastFunctionCall("fullcalendar.js",1719,63210,63237) ||       colContentPositions.clear());
      colWidth = (_wrap_setLastFunctionCall("fullcalendar.js",1720,63262,63292) || Math.floor(viewWidth / colCnt));
(_wrap_setLastFunctionCall("fullcalendar.js",1721,63306,63353) ||       setOuterWidth((_wrap_setLastFunctionCall("fullcalendar.js",1721,63320,63342) || headCells.slice(0, -1)), colWidth));
    }
    function dayBind(days) {
_wrap_addFunctionToMap('fullcalendar.js', 1723, 63373,63474, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1724,63410,63463) ||       (_wrap_setLastFunctionCall("fullcalendar.js",1724,63410,63430) || days.click(dayClick)).mousedown(daySelectionMousedown));
    }
    function dayClick(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 1726, 63483,63751, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (!(_wrap_setLastFunctionCall("fullcalendar.js",1727,63524,63541) || opt('selectable'))) {
        var index = (_wrap_setLastFunctionCall("fullcalendar.js",1728,63573,63622) || parseInt((_wrap_setLastFunctionCall("fullcalendar.js",1728,63582,63618) || this.className.match(/fc\-day(\d+)/))[1]));
        var date = (_wrap_setLastFunctionCall("fullcalendar.js",1729,63651,63667) || indexDate(index));
(_wrap_setLastFunctionCall("fullcalendar.js",1730,63685,63726) ||         trigger('dayClick', this, date, true, ev));
      }
    }
    function renderDayOverlay(overlayStart, overlayEnd, refreshCoordinateGrid) {
_wrap_addFunctionToMap('fullcalendar.js', 1733, 63760,64904, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (refreshCoordinateGrid) {
(_wrap_setLastFunctionCall("fullcalendar.js",1735,63894,63916) ||         coordinateGrid.build());
      }
      var rowStart = (_wrap_setLastFunctionCall("fullcalendar.js",1737,63959,63980) || cloneDate(t.visStart));
      var rowEnd = (_wrap_setLastFunctionCall("fullcalendar.js",1738,64007,64043) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",1738,64015,64034) || cloneDate(rowStart)), colCnt));
      for (var i = 0; i < rowCnt; i++) {
        var stretchStart = (_wrap_setLastFunctionCall("fullcalendar.js",1740,64127,64169) || new Date((_wrap_setLastFunctionCall("fullcalendar.js",1740,64136,64168) || Math.max(rowStart, overlayStart))));
        var stretchEnd = (_wrap_setLastFunctionCall("fullcalendar.js",1741,64204,64242) || new Date((_wrap_setLastFunctionCall("fullcalendar.js",1741,64213,64241) || Math.min(rowEnd, overlayEnd))));
        if (stretchStart < stretchEnd) {
          var colStart, colEnd;
          if (rtl) {
            colStart = (_wrap_setLastFunctionCall("fullcalendar.js",1745,64401,64430) || dayDiff(stretchEnd, rowStart)) * dis + dit + 1;
            colEnd = (_wrap_setLastFunctionCall("fullcalendar.js",1746,64481,64512) || dayDiff(stretchStart, rowStart)) * dis + dit + 1;
          } else {
            colStart = (_wrap_setLastFunctionCall("fullcalendar.js",1748,64594,64625) || dayDiff(stretchStart, rowStart));
            colEnd = (_wrap_setLastFunctionCall("fullcalendar.js",1749,64660,64689) || dayDiff(stretchEnd, rowStart));
          }
(_wrap_setLastFunctionCall("fullcalendar.js",1751,64733,64787) ||           dayBind((_wrap_setLastFunctionCall("fullcalendar.js",1751,64741,64786) || renderCellOverlay(i, colStart, i, colEnd - 1))));
        }
(_wrap_setLastFunctionCall("fullcalendar.js",1753,64823,64843) ||         addDays(rowStart, 7));
(_wrap_setLastFunctionCall("fullcalendar.js",1754,64861,64879) ||         addDays(rowEnd, 7));
      }
    }
    function renderCellOverlay(row0, col0, row1, col1) {
_wrap_addFunctionToMap('fullcalendar.js', 1757, 64913,65101, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var rect = (_wrap_setLastFunctionCall("fullcalendar.js",1758,64989,65041) || coordinateGrid.rect(row0, col0, row1, col1, element));
      return (_wrap_setLastFunctionCall("fullcalendar.js",1759,65062,65090) || renderOverlay(rect, element));
    }
    function defaultSelectionEnd(startDate, allDay) {
_wrap_addFunctionToMap('fullcalendar.js', 1761, 65110,65210, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",1762,65179,65199) || cloneDate(startDate));
    }
    function renderSelection(startDate, endDate, allDay) {
_wrap_addFunctionToMap('fullcalendar.js', 1764, 65219,65362, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1765,65286,65351) ||       renderDayOverlay(startDate, (_wrap_setLastFunctionCall("fullcalendar.js",1765,65314,65344) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",1765,65322,65340) || cloneDate(endDate)), 1)), true));
    }
    function clearSelection() {
_wrap_addFunctionToMap('fullcalendar.js', 1767, 65371,65437, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1768,65411,65426) ||       clearOverlays());
    }
    function reportDayClick(date, allDay, ev) {
_wrap_addFunctionToMap('fullcalendar.js', 1770, 65446,65667, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var cell = (_wrap_setLastFunctionCall("fullcalendar.js",1771,65513,65527) || dateCell(date));
      var _element = bodyCells[cell.row * colCnt + cell.col];
(_wrap_setLastFunctionCall("fullcalendar.js",1773,65609,65656) ||       trigger('dayClick', _element, date, allDay, ev));
    }
    function dragStart(_dragElement, ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 1775, 65676,65956, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1776,65731,65945) ||       hoverListener.start(function(cell) {
_wrap_addFunctionToMap('fullcalendar.js', 1776, 65751,65940, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1777,65785,65800) ||   clearOverlays());
  if (cell) {
(_wrap_setLastFunctionCall("fullcalendar.js",1779,65850,65907) ||     renderCellOverlay(cell.row, cell.col, cell.row, cell.col));
  }
}, ev));
    }
    function dragStop(_dragElement, ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 1783, 65965,66232, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var cell = (_wrap_setLastFunctionCall("fullcalendar.js",1784,66030,66050) || hoverListener.stop());
(_wrap_setLastFunctionCall("fullcalendar.js",1785,66064,66079) ||       clearOverlays());
      if (cell) {
        var d = (_wrap_setLastFunctionCall("fullcalendar.js",1787,66129,66143) || cellDate(cell));
(_wrap_setLastFunctionCall("fullcalendar.js",1788,66161,66207) ||         trigger('drop', _dragElement, d, true, ev, ui));
      }
    }
    function defaultEventEnd(event) {
_wrap_addFunctionToMap('fullcalendar.js', 1791, 66241,66327, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",1792,66294,66316) || cloneDate(event.start));
    }
    coordinateGrid = (_wrap_setLastFunctionCall("fullcalendar.js",1794,66353,67094) || new CoordinateGrid(function(rows, cols) {
_wrap_addFunctionToMap('fullcalendar.js', 1794, 66372,67093, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var e, n, p;
(_wrap_setLastFunctionCall("fullcalendar.js",1796,66433,66672) ||   headCells.each(function(i, _e) {
_wrap_addFunctionToMap('fullcalendar.js', 1796, 66448,66671, (typeof arguments === 'object' ? arguments.callee.caller : null));

  e = (_wrap_setLastFunctionCall("fullcalendar.js",1797,66487,66492) || $(_e));
  n = (_wrap_setLastFunctionCall("fullcalendar.js",1798,66514,66524) || e.offset()).left;
  if (i) {
    p[1] = n;
  }
  p = [n];
  cols[i] = p;
}));
  p[1] = n + (_wrap_setLastFunctionCall("fullcalendar.js",1805,66697,66711) || e.outerWidth());
(_wrap_setLastFunctionCall("fullcalendar.js",1806,66725,67042) ||   bodyRows.each(function(i, _e) {
_wrap_addFunctionToMap('fullcalendar.js', 1806, 66739,67041, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (i < rowCnt) {
    e = (_wrap_setLastFunctionCall("fullcalendar.js",1808,66816,66821) || $(_e));
    n = (_wrap_setLastFunctionCall("fullcalendar.js",1809,66847,66857) || e.offset()).top;
    if (i) {
      p[1] = n;
    }
    p = [n];
    rows[i] = p;
  }
}));
  p[1] = n + (_wrap_setLastFunctionCall("fullcalendar.js",1817,67067,67082) || e.outerHeight());
}));
    hoverListener = (_wrap_setLastFunctionCall("fullcalendar.js",1819,67120,67153) || new HoverListener(coordinateGrid));
    colContentPositions = (_wrap_setLastFunctionCall("fullcalendar.js",1820,67185,67286) || new HorizontalPositionCache(function(col) {
_wrap_addFunctionToMap('fullcalendar.js', 1820, 67213,67285, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1821,67249,67274) || bodyCellTopInners.eq(col));
}));
    function colContentLeft(col) {
_wrap_addFunctionToMap('fullcalendar.js', 1823, 67296,67386, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",1824,67346,67375) || colContentPositions.left(col));
    }
    function colContentRight(col) {
_wrap_addFunctionToMap('fullcalendar.js', 1826, 67395,67487, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",1827,67446,67476) || colContentPositions.right(col));
    }
    function dateCell(date) {
_wrap_addFunctionToMap('fullcalendar.js', 1829, 67496,67680, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return {row: (_wrap_setLastFunctionCall("fullcalendar.js",1831,67564,67605) || Math.floor((_wrap_setLastFunctionCall("fullcalendar.js",1831,67575,67600) || dayDiff(date, t.visStart)) / 7)), col: (_wrap_setLastFunctionCall("fullcalendar.js",1832,67628,67655) || dayOfWeekCol((_wrap_setLastFunctionCall("fullcalendar.js",1832,67641,67654) || date.getDay())))};
    }
    function cellDate(cell) {
_wrap_addFunctionToMap('fullcalendar.js', 1835, 67689,67774, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",1836,67734,67763) || _cellDate(cell.row, cell.col));
    }
    function _cellDate(row, col) {
_wrap_addFunctionToMap('fullcalendar.js', 1838, 67783,67901, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",1839,67833,67890) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",1839,67841,67862) || cloneDate(t.visStart)), row * 7 + col * dis + dit));
    }
    function indexDate(index) {
_wrap_addFunctionToMap('fullcalendar.js', 1841, 67910,68021, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",1842,67957,68010) || _cellDate((_wrap_setLastFunctionCall("fullcalendar.js",1842,67967,67993) || Math.floor(index / colCnt)), index % colCnt));
    }
    function dayOfWeekCol(dayOfWeek) {
_wrap_addFunctionToMap('fullcalendar.js', 1844, 68030,68162, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (dayOfWeek - (_wrap_setLastFunctionCall("fullcalendar.js",1845,68097,68120) || Math.max(firstDay, nwe)) + colCnt) % colCnt * dis + dit;
    }
    function allDayRow(i) {
_wrap_addFunctionToMap('fullcalendar.js', 1847, 68171,68239, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",1848,68214,68228) || bodyRows.eq(i));
    }
    function allDayBounds(i) {
_wrap_addFunctionToMap('fullcalendar.js', 1850, 68248,68378, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return {left: 0, right: viewWidth};
    }
  }
  function BasicEventRenderer() {
_wrap_addFunctionToMap('fullcalendar.js', 1857, 68389,72575, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.renderEvents = renderEvents;
    t.compileDaySegs = compileSegs;
    t.clearEvents = clearEvents;
    t.bindDaySeg = bindDaySeg;
(_wrap_setLastFunctionCall("fullcalendar.js",1863,68602,68626) ||     DayEventRenderer.call(t));
    var opt = t.opt;
    var trigger = t.trigger;
    var isEventDraggable = t.isEventDraggable;
    var isEventResizable = t.isEventResizable;
    var reportEvents = t.reportEvents;
    var reportEventClear = t.reportEventClear;
    var eventElementHandlers = t.eventElementHandlers;
    var showEvents = t.showEvents;
    var hideEvents = t.hideEvents;
    var eventDrop = t.eventDrop;
    var getDaySegmentContainer = t.getDaySegmentContainer;
    var getHoverListener = t.getHoverListener;
    var renderDayOverlay = t.renderDayOverlay;
    var clearOverlays = t.clearOverlays;
    var getRowCnt = t.getRowCnt;
    var getColCnt = t.getColCnt;
    var renderDaySegs = t.renderDaySegs;
    var resizableDayEvent = t.resizableDayEvent;
    function renderEvents(events, modifiedEventId) {
_wrap_addFunctionToMap('fullcalendar.js', 1882, 69446,69603, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1883,69507,69527) ||       reportEvents(events));
(_wrap_setLastFunctionCall("fullcalendar.js",1884,69541,69592) ||       renderDaySegs((_wrap_setLastFunctionCall("fullcalendar.js",1884,69555,69574) || compileSegs(events)), modifiedEventId));
    }
    function clearEvents() {
_wrap_addFunctionToMap('fullcalendar.js', 1886, 69612,69724, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1887,69649,69667) ||       reportEventClear());
(_wrap_setLastFunctionCall("fullcalendar.js",1888,69681,69713) ||       (_wrap_setLastFunctionCall("fullcalendar.js",1888,69681,69705) || getDaySegmentContainer()).empty());
    }
    function compileSegs(events) {
_wrap_addFunctionToMap('fullcalendar.js', 1890, 69733,70539, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var rowCnt = (_wrap_setLastFunctionCall("fullcalendar.js",1891,69789,69800) || getRowCnt()), colCnt = (_wrap_setLastFunctionCall("fullcalendar.js",1891,69811,69822) || getColCnt()), d1 = (_wrap_setLastFunctionCall("fullcalendar.js",1891,69829,69850) || cloneDate(t.visStart)), d2 = (_wrap_setLastFunctionCall("fullcalendar.js",1891,69857,69887) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",1891,69865,69878) || cloneDate(d1)), colCnt)), visEventsEnds = (_wrap_setLastFunctionCall("fullcalendar.js",1891,69905,69930) || $.map(events, exclEndDay)), i, row, j, level, k, seg, segs = [];
      for (i = 0; i < rowCnt; i++) {
        row = (_wrap_setLastFunctionCall("fullcalendar.js",1893,70034,70085) || stackSegs((_wrap_setLastFunctionCall("fullcalendar.js",1893,70044,70084) || sliceSegs(events, visEventsEnds, d1, d2))));
        for (j = 0; j < row.length; j++) {
          level = row[j];
          for (k = 0; k < level.length; k++) {
            seg = level[k];
            seg.row = i;
            seg.level = j;
(_wrap_setLastFunctionCall("fullcalendar.js",1900,70371,70385) ||             segs.push(seg));
          }
        }
(_wrap_setLastFunctionCall("fullcalendar.js",1903,70443,70457) ||         addDays(d1, 7));
(_wrap_setLastFunctionCall("fullcalendar.js",1904,70475,70489) ||         addDays(d2, 7));
      }
      return segs;
    }
    function bindDaySeg(event, eventElement, seg) {
_wrap_addFunctionToMap('fullcalendar.js', 1908, 70548,70904, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if ((_wrap_setLastFunctionCall("fullcalendar.js",1909,70612,70635) || isEventDraggable(event))) {
(_wrap_setLastFunctionCall("fullcalendar.js",1910,70655,70693) ||         draggableDayEvent(event, eventElement));
      }
      if (seg.isEnd && (_wrap_setLastFunctionCall("fullcalendar.js",1912,70738,70761) || isEventResizable(event))) {
(_wrap_setLastFunctionCall("fullcalendar.js",1913,70781,70824) ||         resizableDayEvent(event, eventElement, seg));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",1915,70852,70893) ||       eventElementHandlers(event, eventElement));
    }
    function draggableDayEvent(event, eventElement) {
_wrap_addFunctionToMap('fullcalendar.js', 1917, 70913,72569, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var hoverListener = (_wrap_setLastFunctionCall("fullcalendar.js",1918,70995,71013) || getHoverListener());
      var dayDelta;
(_wrap_setLastFunctionCall("fullcalendar.js",1920,71053,72558) ||       eventElement.draggable({zIndex: 9, delay: 50, opacity: (_wrap_setLastFunctionCall("fullcalendar.js",1923,71157,71175) || opt('dragOpacity')), revertDuration: (_wrap_setLastFunctionCall("fullcalendar.js",1924,71209,71234) || opt('dragRevertDuration')), start: function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 1925, 71259,72045, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1926,71299,71353) ||   trigger('eventDragStart', eventElement, event, ev, ui));
(_wrap_setLastFunctionCall("fullcalendar.js",1927,71375,71406) ||   hideEvents(event, eventElement));
(_wrap_setLastFunctionCall("fullcalendar.js",1928,71428,72026) ||   hoverListener.start(function(cell, origCell, rowDelta, colDelta) {
_wrap_addFunctionToMap('fullcalendar.js', 1928, 71448,72013, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1929,71520,71595) ||   eventElement.draggable('option', 'revert', !cell || !rowDelta && !colDelta));
(_wrap_setLastFunctionCall("fullcalendar.js",1930,71621,71636) ||   clearOverlays());
  if (cell) {
    dayDelta = rowDelta * 7 + colDelta * ((_wrap_setLastFunctionCall("fullcalendar.js",1932,71740,71752) || opt('isRTL')) ? -1 : 1);
(_wrap_setLastFunctionCall("fullcalendar.js",1933,71792,71889) ||     renderDayOverlay((_wrap_setLastFunctionCall("fullcalendar.js",1933,71809,71850) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",1933,71817,71839) || cloneDate(event.start)), dayDelta)), (_wrap_setLastFunctionCall("fullcalendar.js",1933,71852,71888) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",1933,71860,71877) || exclEndDay(event)), dayDelta))));
  } else {
    dayDelta = 0;
  }
}, ev, 'drag'));
}, stop: function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 1939, 72069,72543, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1940,72109,72129) ||   hoverListener.stop());
(_wrap_setLastFunctionCall("fullcalendar.js",1941,72151,72166) ||   clearOverlays());
(_wrap_setLastFunctionCall("fullcalendar.js",1942,72188,72241) ||   trigger('eventDragStop', eventElement, event, ev, ui));
  if (dayDelta) {
(_wrap_setLastFunctionCall("fullcalendar.js",1944,72303,72360) ||     eventDrop(this, event, dayDelta, 0, event.allDay, ev, ui));
  } else {
(_wrap_setLastFunctionCall("fullcalendar.js",1946,72415,72445) ||     eventElement.css('filter', ''));
(_wrap_setLastFunctionCall("fullcalendar.js",1947,72471,72502) ||     showEvents(event, eventElement));
  }
}}));
    }
  }
  fcViews.agendaWeek = AgendaWeekView;
  function AgendaWeekView(element, calendar) {
_wrap_addFunctionToMap('fullcalendar.js', 1954, 72621,73695, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.render = render;
(_wrap_setLastFunctionCall("fullcalendar.js",1957,72723,72774) ||     AgendaView.call(t, element, calendar, 'agendaWeek'));
    var opt = t.opt;
    var renderAgenda = t.renderAgenda;
    var formatDates = calendar.formatDates;
    function render(date, delta) {
_wrap_addFunctionToMap('fullcalendar.js', 1961, 72900,73689, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (delta) {
(_wrap_setLastFunctionCall("fullcalendar.js",1963,72972,72996) ||         addDays(date, delta * 7));
      }
      var start = (_wrap_setLastFunctionCall("fullcalendar.js",1965,73036,73106) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",1965,73044,73059) || cloneDate(date)), -(((_wrap_setLastFunctionCall("fullcalendar.js",1965,73064,73077) || date.getDay()) - (_wrap_setLastFunctionCall("fullcalendar.js",1965,73080,73095) || opt('firstDay')) + 7) % 7)));
      var end = (_wrap_setLastFunctionCall("fullcalendar.js",1966,73130,73158) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",1966,73138,73154) || cloneDate(start)), 7));
      var visStart = (_wrap_setLastFunctionCall("fullcalendar.js",1967,73187,73203) || cloneDate(start));
      var visEnd = (_wrap_setLastFunctionCall("fullcalendar.js",1968,73230,73244) || cloneDate(end));
      var weekends = (_wrap_setLastFunctionCall("fullcalendar.js",1969,73273,73288) || opt('weekends'));
      if (!weekends) {
(_wrap_setLastFunctionCall("fullcalendar.js",1971,73335,73356) ||         skipWeekend(visStart));
(_wrap_setLastFunctionCall("fullcalendar.js",1972,73374,73403) ||         skipWeekend(visEnd, -1, true));
      }
      t.title = (_wrap_setLastFunctionCall("fullcalendar.js",1974,73441,73514) || formatDates(visStart, (_wrap_setLastFunctionCall("fullcalendar.js",1974,73463,73493) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",1974,73471,73488) || cloneDate(visEnd)), -1)), (_wrap_setLastFunctionCall("fullcalendar.js",1974,73495,73513) || opt('titleFormat'))));
      t.start = start;
      t.end = end;
      t.visStart = visStart;
      t.visEnd = visEnd;
(_wrap_setLastFunctionCall("fullcalendar.js",1979,73648,73678) ||       renderAgenda(weekends ? 7 : 5));
    }
  }
  fcViews.agendaDay = AgendaDayView;
  function AgendaDayView(element, calendar) {
_wrap_addFunctionToMap('fullcalendar.js', 1983, 73739,74520, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.render = render;
(_wrap_setLastFunctionCall("fullcalendar.js",1986,73840,73890) ||     AgendaView.call(t, element, calendar, 'agendaDay'));
    var opt = t.opt;
    var renderAgenda = t.renderAgenda;
    var formatDate = calendar.formatDate;
    function render(date, delta) {
_wrap_addFunctionToMap('fullcalendar.js', 1990, 74014,74514, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (delta) {
(_wrap_setLastFunctionCall("fullcalendar.js",1992,74086,74106) ||         addDays(date, delta));
        if (!(_wrap_setLastFunctionCall("fullcalendar.js",1993,74129,74144) || opt('weekends'))) {
(_wrap_setLastFunctionCall("fullcalendar.js",1994,74168,74205) ||           skipWeekend(date, delta < 0 ? -1 : 1));
        }
      }
      var start = (_wrap_setLastFunctionCall("fullcalendar.js",1997,74263,74284) || cloneDate(date, true));
      var end = (_wrap_setLastFunctionCall("fullcalendar.js",1998,74308,74336) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",1998,74316,74332) || cloneDate(start)), 1));
      t.title = (_wrap_setLastFunctionCall("fullcalendar.js",1999,74360,74396) || formatDate(date, (_wrap_setLastFunctionCall("fullcalendar.js",1999,74377,74395) || opt('titleFormat'))));
      t.start = t.visStart = start;
      t.end = t.visEnd = end;
(_wrap_setLastFunctionCall("fullcalendar.js",2002,74488,74503) ||       renderAgenda(1));
    }
  }
(_wrap_setLastFunctionCall("fullcalendar.js",2005,74525,74842) ||   setDefaults({allDaySlot: true, allDayText: 'all-day', firstHour: 6, slotMinutes: 30, defaultEventMinutes: 120, axisFormat: 'h(:mm)tt', timeFormat: {agenda: 'h:mm{ - h:mm}'}, dragOpacity: {agenda: 0.5}, minTime: 0, maxTime: 24}));
  function AgendaView(element, calendar, viewName) {
_wrap_addFunctionToMap('fullcalendar.js', 2017, 74848,98446, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.renderAgenda = renderAgenda;
    t.setWidth = setWidth;
    t.setHeight = setHeight;
    t.beforeHide = beforeHide;
    t.afterShow = afterShow;
    t.defaultEventEnd = defaultEventEnd;
    t.timePosition = timePosition;
    t.dayOfWeekCol = dayOfWeekCol;
    t.dateCell = dateCell;
    t.cellDate = cellDate;
    t.cellIsAllDay = cellIsAllDay;
    t.allDayRow = getAllDayRow;
    t.allDayBounds = allDayBounds;
    t.getHoverListener = function() {
_wrap_addFunctionToMap('fullcalendar.js', 2032, 75420,75477, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return hoverListener;
};
    t.colContentLeft = colContentLeft;
    t.colContentRight = colContentRight;
    t.getDaySegmentContainer = function() {
_wrap_addFunctionToMap('fullcalendar.js', 2037, 75602,75665, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return daySegmentContainer;
};
    t.getSlotSegmentContainer = function() {
_wrap_addFunctionToMap('fullcalendar.js', 2040, 75703,75767, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return slotSegmentContainer;
};
    t.getMinMinute = function() {
_wrap_addFunctionToMap('fullcalendar.js', 2043, 75794,75847, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return minMinute;
};
    t.getMaxMinute = function() {
_wrap_addFunctionToMap('fullcalendar.js', 2046, 75874,75927, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return maxMinute;
};
    t.getBodyContent = function() {
_wrap_addFunctionToMap('fullcalendar.js', 2049, 75956,76011, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return slotContent;
};
    t.getRowCnt = function() {
_wrap_addFunctionToMap('fullcalendar.js', 2052, 76035,76080, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return 1;
};
    t.getColCnt = function() {
_wrap_addFunctionToMap('fullcalendar.js', 2055, 76104,76154, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return colCnt;
};
    t.getColWidth = function() {
_wrap_addFunctionToMap('fullcalendar.js', 2058, 76180,76232, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return colWidth;
};
    t.getSlotHeight = function() {
_wrap_addFunctionToMap('fullcalendar.js', 2061, 76260,76314, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return slotHeight;
};
    t.defaultSelectionEnd = defaultSelectionEnd;
    t.renderDayOverlay = renderDayOverlay;
    t.renderSelection = renderSelection;
    t.clearSelection = clearSelection;
    t.reportDayClick = reportDayClick;
    t.dragStart = dragStart;
    t.dragStop = dragStop;
(_wrap_setLastFunctionCall("fullcalendar.js",2071,76619,76660) ||     View.call(t, element, calendar, viewName));
(_wrap_setLastFunctionCall("fullcalendar.js",2072,76670,76692) ||     OverlayManager.call(t));
(_wrap_setLastFunctionCall("fullcalendar.js",2073,76702,76726) ||     SelectionManager.call(t));
(_wrap_setLastFunctionCall("fullcalendar.js",2074,76736,76763) ||     AgendaEventRenderer.call(t));
    var opt = t.opt;
    var trigger = t.trigger;
    var clearEvents = t.clearEvents;
    var renderOverlay = t.renderOverlay;
    var clearOverlays = t.clearOverlays;
    var reportSelection = t.reportSelection;
    var unselect = t.unselect;
    var daySelectionMousedown = t.daySelectionMousedown;
    var slotSegHtml = t.slotSegHtml;
    var formatDate = calendar.formatDate;
    var dayTable;
    var dayHead;
    var dayHeadCells;
    var dayBody;
    var dayBodyCells;
    var dayBodyCellInners;
    var dayBodyFirstCell;
    var dayBodyFirstCellStretcher;
    var slotLayer;
    var daySegmentContainer;
    var allDayTable;
    var allDayRow;
    var slotScroller;
    var slotContent;
    var slotSegmentContainer;
    var slotTable;
    var slotTableFirstInner;
    var axisFirstCells;
    var gutterCells;
    var selectionHelper;
    var viewWidth;
    var viewHeight;
    var axisWidth;
    var colWidth;
    var gutterWidth;
    var slotHeight;
    var savedScrollTop;
    var colCnt;
    var slotCnt;
    var coordinateGrid;
    var hoverListener;
    var colContentPositions;
    var slotTopCache = {};
    var tm;
    var firstDay;
    var nwe;
    var rtl, dis, dit;
    var minMinute, maxMinute;
    var colFormat;
(_wrap_setLastFunctionCall("fullcalendar.js",2124,78205,78256) ||     disableTextSelection((_wrap_setLastFunctionCall("fullcalendar.js",2124,78226,78255) || element.addClass('fc-agenda'))));
    function renderAgenda(c) {
_wrap_addFunctionToMap('fullcalendar.js', 2125, 78266,78510, (typeof arguments === 'object' ? arguments.callee.caller : null));

      colCnt = c;
(_wrap_setLastFunctionCall("fullcalendar.js",2127,78329,78344) ||       updateOptions());
      if (!dayTable) {
(_wrap_setLastFunctionCall("fullcalendar.js",2129,78391,78406) ||         buildSkeleton());
      } else {
(_wrap_setLastFunctionCall("fullcalendar.js",2131,78445,78458) ||         clearEvents());
      }
(_wrap_setLastFunctionCall("fullcalendar.js",2133,78486,78499) ||       updateCells());
    }
    function updateOptions() {
_wrap_addFunctionToMap('fullcalendar.js', 2135, 78519,79013, (typeof arguments === 'object' ? arguments.callee.caller : null));

      tm = (_wrap_setLastFunctionCall("fullcalendar.js",2136,78563,78575) || opt('theme')) ? 'ui' : 'fc';
      nwe = (_wrap_setLastFunctionCall("fullcalendar.js",2137,78609,78624) || opt('weekends')) ? 0 : 1;
      firstDay = (_wrap_setLastFunctionCall("fullcalendar.js",2138,78657,78672) || opt('firstDay'));
      if (rtl = (_wrap_setLastFunctionCall("fullcalendar.js",2139,78696,78708) || opt('isRTL'))) {
        dis = -1;
        dit = colCnt - 1;
      } else {
        dis = 1;
        dit = 0;
      }
      minMinute = (_wrap_setLastFunctionCall("fullcalendar.js",2146,78881,78906) || parseTime((_wrap_setLastFunctionCall("fullcalendar.js",2146,78891,78905) || opt('minTime'))));
      maxMinute = (_wrap_setLastFunctionCall("fullcalendar.js",2147,78932,78957) || parseTime((_wrap_setLastFunctionCall("fullcalendar.js",2147,78942,78956) || opt('maxTime'))));
      colFormat = (_wrap_setLastFunctionCall("fullcalendar.js",2148,78983,79002) || opt('columnFormat'));
    }
    function buildSkeleton() {
_wrap_addFunctionToMap('fullcalendar.js', 2150, 79022,83547, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var headerClass = tm + '-widget-header';
      var contentClass = tm + '-widget-content';
      var s;
      var i;
      var d;
      var maxd;
      var minutes;
      var slotNormal = (_wrap_setLastFunctionCall("fullcalendar.js",2158,79290,79308) || opt('slotMinutes')) % 15 == 0;
      s = '<table style=\'width:100%\' class=\'fc-agenda-days fc-border-separate\' cellspacing=\'0\'>' + '<thead>' + '<tr>' + '<th class=\'fc-agenda-axis ' + headerClass + '\'>&nbsp;</th>';
      for (i = 0; i < colCnt; i++) {
        s += '<th class=\'fc- fc-col' + i + ' ' + headerClass + '\'/>';
      }
      s += '<th class=\'fc-agenda-gutter ' + headerClass + '\'>&nbsp;</th>' + '</tr>' + '</thead>' + '<tbody>' + '<tr>' + '<th class=\'fc-agenda-axis ' + headerClass + '\'>&nbsp;</th>';
      for (i = 0; i < colCnt; i++) {
        s += '<td class=\'fc- fc-col' + i + ' ' + contentClass + '\'>' + '<div>' + '<div class=\'fc-day-content\'>' + '<div style=\'position:relative\'>&nbsp;</div>' + '</div>' + '</div>' + '</td>';
      }
      s += '<td class=\'fc-agenda-gutter ' + contentClass + '\'>&nbsp;</td>' + '</tr>' + '</tbody>' + '</table>';
      dayTable = (_wrap_setLastFunctionCall("fullcalendar.js",2168,80252,80274) || (_wrap_setLastFunctionCall("fullcalendar.js",2168,80252,80256) || $(s)).appendTo(element));
      dayHead = (_wrap_setLastFunctionCall("fullcalendar.js",2169,80298,80320) || dayTable.find('thead'));
      dayHeadCells = (_wrap_setLastFunctionCall("fullcalendar.js",2170,80349,80380) || (_wrap_setLastFunctionCall("fullcalendar.js",2170,80349,80367) || dayHead.find('th')).slice(1, -1));
      dayBody = (_wrap_setLastFunctionCall("fullcalendar.js",2171,80404,80426) || dayTable.find('tbody'));
      dayBodyCells = (_wrap_setLastFunctionCall("fullcalendar.js",2172,80455,80486) || (_wrap_setLastFunctionCall("fullcalendar.js",2172,80455,80473) || dayBody.find('td')).slice(0, -1));
      dayBodyCellInners = (_wrap_setLastFunctionCall("fullcalendar.js",2173,80520,80563) || dayBodyCells.find('div.fc-day-content div'));
      dayBodyFirstCell = (_wrap_setLastFunctionCall("fullcalendar.js",2174,80596,80614) || dayBodyCells.eq(0));
      dayBodyFirstCellStretcher = (_wrap_setLastFunctionCall("fullcalendar.js",2175,80656,80686) || dayBodyFirstCell.find('> div'));
(_wrap_setLastFunctionCall("fullcalendar.js",2176,80700,80746) ||       markFirstLast((_wrap_setLastFunctionCall("fullcalendar.js",2176,80714,80745) || dayHead.add((_wrap_setLastFunctionCall("fullcalendar.js",2176,80726,80744) || dayHead.find('tr'))))));
(_wrap_setLastFunctionCall("fullcalendar.js",2177,80760,80806) ||       markFirstLast((_wrap_setLastFunctionCall("fullcalendar.js",2177,80774,80805) || dayBody.add((_wrap_setLastFunctionCall("fullcalendar.js",2177,80786,80804) || dayBody.find('tr'))))));
      axisFirstCells = (_wrap_setLastFunctionCall("fullcalendar.js",2178,80837,80861) || dayHead.find('th:first'));
      gutterCells = (_wrap_setLastFunctionCall("fullcalendar.js",2179,80889,80923) || dayTable.find('.fc-agenda-gutter'));
      slotLayer = (_wrap_setLastFunctionCall("fullcalendar.js",2180,80949,81034) || (_wrap_setLastFunctionCall("fullcalendar.js",2180,80949,81016) || $('<div style=\'position:absolute;z-index:2;left:0;width:100%\'/>')).appendTo(element));
      if ((_wrap_setLastFunctionCall("fullcalendar.js",2181,81052,81069) || opt('allDaySlot'))) {
        daySegmentContainer = (_wrap_setLastFunctionCall("fullcalendar.js",2182,81111,81193) || (_wrap_setLastFunctionCall("fullcalendar.js",2182,81111,81173) || $('<div style=\'position:absolute;z-index:8;top:0;left:0\'/>')).appendTo(slotLayer));
        s = '<table style=\'width:100%\' class=\'fc-agenda-allday\' cellspacing=\'0\'>' + '<tr>' + '<th class=\'' + headerClass + ' fc-agenda-axis\'>' + (_wrap_setLastFunctionCall("fullcalendar.js",2183,81356,81373) || opt('allDayText')) + '</th>' + '<td>' + '<div class=\'fc-day-content\'><div style=\'position:relative\'/></div>' + '</td>' + '<th class=\'' + headerClass + ' fc-agenda-gutter\'>&nbsp;</th>' + '</tr>' + '</table>';
        allDayTable = (_wrap_setLastFunctionCall("fullcalendar.js",2184,81599,81623) || (_wrap_setLastFunctionCall("fullcalendar.js",2184,81599,81603) || $(s)).appendTo(slotLayer));
        allDayRow = (_wrap_setLastFunctionCall("fullcalendar.js",2185,81653,81675) || allDayTable.find('tr'));
(_wrap_setLastFunctionCall("fullcalendar.js",2186,81693,81722) ||         dayBind((_wrap_setLastFunctionCall("fullcalendar.js",2186,81701,81721) || allDayRow.find('td'))));
        axisFirstCells = (_wrap_setLastFunctionCall("fullcalendar.js",2187,81757,81805) || axisFirstCells.add((_wrap_setLastFunctionCall("fullcalendar.js",2187,81776,81804) || allDayTable.find('th:first'))));
        gutterCells = (_wrap_setLastFunctionCall("fullcalendar.js",2188,81837,81893) || gutterCells.add((_wrap_setLastFunctionCall("fullcalendar.js",2188,81853,81892) || allDayTable.find('th.fc-agenda-gutter'))));
(_wrap_setLastFunctionCall("fullcalendar.js",2189,81911,82040) ||         slotLayer.append('<div class=\'fc-agenda-divider ' + headerClass + '\'>' + '<div class=\'fc-agenda-divider-inner\'/>' + '</div>'));
      } else {
        daySegmentContainer = (_wrap_setLastFunctionCall("fullcalendar.js",2191,82101,82106) || $([]));
      }
      slotScroller = (_wrap_setLastFunctionCall("fullcalendar.js",2193,82149,82253) || (_wrap_setLastFunctionCall("fullcalendar.js",2193,82149,82233) || $('<div style=\'position:absolute;width:100%;overflow-x:hidden;overflow-y:auto\'/>')).appendTo(slotLayer));
      slotContent = (_wrap_setLastFunctionCall("fullcalendar.js",2194,82281,82370) || (_wrap_setLastFunctionCall("fullcalendar.js",2194,82281,82347) || $('<div style=\'position:relative;width:100%;overflow:hidden\'/>')).appendTo(slotScroller));
      slotSegmentContainer = (_wrap_setLastFunctionCall("fullcalendar.js",2195,82407,82491) || (_wrap_setLastFunctionCall("fullcalendar.js",2195,82407,82469) || $('<div style=\'position:absolute;z-index:8;top:0;left:0\'/>')).appendTo(slotContent));
      s = '<table class=\'fc-agenda-slots\' style=\'width:100%\' cellspacing=\'0\'>' + '<tbody>';
      d = (_wrap_setLastFunctionCall("fullcalendar.js",2197,82613,82623) || zeroDate());
      maxd = (_wrap_setLastFunctionCall("fullcalendar.js",2198,82644,82679) || addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2198,82655,82667) || cloneDate(d)), maxMinute));
(_wrap_setLastFunctionCall("fullcalendar.js",2199,82693,82717) ||       addMinutes(d, minMinute));
      slotCnt = 0;
      for (i = 0; d < maxd; i++) {
        minutes = (_wrap_setLastFunctionCall("fullcalendar.js",2202,82811,82825) || d.getMinutes());
        s += '<tr class=\'fc-slot' + i + ' ' + (!minutes ? '' : 'fc-minor') + '\'>' + '<th class=\'fc-agenda-axis ' + headerClass + '\'>' + (!slotNormal || !minutes ? (_wrap_setLastFunctionCall("fullcalendar.js",2203,83002,83034) || formatDate(d, (_wrap_setLastFunctionCall("fullcalendar.js",2203,83016,83033) || opt('axisFormat')))) : '&nbsp;') + '</th>' + '<td class=\'' + contentClass + '\'>' + '<div style=\'position:relative\'>&nbsp;</div>' + '</td>' + '</tr>';
(_wrap_setLastFunctionCall("fullcalendar.js",2204,83184,83217) ||         addMinutes(d, (_wrap_setLastFunctionCall("fullcalendar.js",2204,83198,83216) || opt('slotMinutes'))));
        slotCnt++;
      }
      s += '</tbody>' + '</table>';
      slotTable = (_wrap_setLastFunctionCall("fullcalendar.js",2208,83326,83352) || (_wrap_setLastFunctionCall("fullcalendar.js",2208,83326,83330) || $(s)).appendTo(slotContent));
      slotTableFirstInner = (_wrap_setLastFunctionCall("fullcalendar.js",2209,83388,83415) || slotTable.find('div:first'));
(_wrap_setLastFunctionCall("fullcalendar.js",2210,83429,83459) ||       slotBind((_wrap_setLastFunctionCall("fullcalendar.js",2210,83438,83458) || slotTable.find('td'))));
      axisFirstCells = (_wrap_setLastFunctionCall("fullcalendar.js",2211,83490,83536) || axisFirstCells.add((_wrap_setLastFunctionCall("fullcalendar.js",2211,83509,83535) || slotTable.find('th:first'))));
    }
    function updateCells() {
_wrap_addFunctionToMap('fullcalendar.js', 2213, 83556,84263, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i;
      var headCell;
      var bodyCell;
      var date;
      var today = (_wrap_setLastFunctionCall("fullcalendar.js",2218,83698,83719) || clearTime((_wrap_setLastFunctionCall("fullcalendar.js",2218,83708,83718) || new Date())));
      for (i = 0; i < colCnt; i++) {
        date = (_wrap_setLastFunctionCall("fullcalendar.js",2220,83787,83797) || colDate(i));
        headCell = (_wrap_setLastFunctionCall("fullcalendar.js",2221,83826,83844) || dayHeadCells.eq(i));
(_wrap_setLastFunctionCall("fullcalendar.js",2222,83862,83904) ||         headCell.html((_wrap_setLastFunctionCall("fullcalendar.js",2222,83876,83903) || formatDate(date, colFormat))));
        bodyCell = (_wrap_setLastFunctionCall("fullcalendar.js",2223,83933,83951) || dayBodyCells.eq(i));
        if (+date == +today) {
(_wrap_setLastFunctionCall("fullcalendar.js",2225,84012,84063) ||           bodyCell.addClass(tm + '-state-highlight fc-today'));
        } else {
(_wrap_setLastFunctionCall("fullcalendar.js",2227,84110,84164) ||           bodyCell.removeClass(tm + '-state-highlight fc-today'));
        }
(_wrap_setLastFunctionCall("fullcalendar.js",2229,84200,84238) ||         setDayID((_wrap_setLastFunctionCall("fullcalendar.js",2229,84209,84231) || headCell.add(bodyCell)), date));
      }
    }
    function setHeight(height, dateChanged) {
_wrap_addFunctionToMap('fullcalendar.js', 2232, 84272,85020, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (height === undefined) {
        height = viewHeight;
      }
      viewHeight = height;
      slotTopCache = {};
      var headHeight = (_wrap_setLastFunctionCall("fullcalendar.js",2238,84498,84516) || dayBody.position()).top;
      var allDayHeight = (_wrap_setLastFunctionCall("fullcalendar.js",2239,84553,84576) || slotScroller.position()).top;
      var bodyHeight = (_wrap_setLastFunctionCall("fullcalendar.js",2240,84611,84679) || Math.min(height - headHeight, (_wrap_setLastFunctionCall("fullcalendar.js",2240,84641,84659) || slotTable.height()) + allDayHeight + 1));
(_wrap_setLastFunctionCall("fullcalendar.js",2241,84693,84764) ||       dayBodyFirstCellStretcher.height(bodyHeight - (_wrap_setLastFunctionCall("fullcalendar.js",2241,84739,84763) || vsides(dayBodyFirstCell))));
(_wrap_setLastFunctionCall("fullcalendar.js",2242,84778,84810) ||       slotLayer.css('top', headHeight));
(_wrap_setLastFunctionCall("fullcalendar.js",2243,84824,84874) ||       slotScroller.height(bodyHeight - allDayHeight - 1));
      slotHeight = (_wrap_setLastFunctionCall("fullcalendar.js",2244,84901,84929) || slotTableFirstInner.height()) + 1;
      if (dateChanged) {
(_wrap_setLastFunctionCall("fullcalendar.js",2246,84982,84995) ||         resetScroll());
      }
    }
    function setWidth(width) {
_wrap_addFunctionToMap('fullcalendar.js', 2249, 85029,85859, (typeof arguments === 'object' ? arguments.callee.caller : null));

      viewWidth = width;
(_wrap_setLastFunctionCall("fullcalendar.js",2251,85099,85126) ||       colContentPositions.clear());
      axisWidth = 0;
(_wrap_setLastFunctionCall("fullcalendar.js",2253,85167,85331) ||       setOuterWidth((_wrap_setLastFunctionCall("fullcalendar.js",2253,85181,85319) || (_wrap_setLastFunctionCall("fullcalendar.js",2253,85181,85205) || axisFirstCells.width('')).each(function(i, _cell) {
_wrap_addFunctionToMap('fullcalendar.js', 2253, 85211,85318, (typeof arguments === 'object' ? arguments.callee.caller : null));

  axisWidth = (_wrap_setLastFunctionCall("fullcalendar.js",2254,85261,85303) || Math.max(axisWidth, (_wrap_setLastFunctionCall("fullcalendar.js",2254,85281,85302) || (_wrap_setLastFunctionCall("fullcalendar.js",2254,85281,85289) || $(_cell)).outerWidth())));
})), axisWidth));
      var slotTableWidth = slotScroller[0].clientWidth;
      gutterWidth = (_wrap_setLastFunctionCall("fullcalendar.js",2257,85421,85441) || slotScroller.width()) - slotTableWidth;
      if (gutterWidth) {
(_wrap_setLastFunctionCall("fullcalendar.js",2259,85507,85546) ||         setOuterWidth(gutterCells, gutterWidth));
(_wrap_setLastFunctionCall("fullcalendar.js",2260,85564,85612) ||         (_wrap_setLastFunctionCall("fullcalendar.js",2260,85564,85589) || (_wrap_setLastFunctionCall("fullcalendar.js",2260,85564,85582) || gutterCells.show()).prev()).removeClass('fc-last'));
      } else {
(_wrap_setLastFunctionCall("fullcalendar.js",2262,85651,85696) ||         (_wrap_setLastFunctionCall("fullcalendar.js",2262,85651,85676) || (_wrap_setLastFunctionCall("fullcalendar.js",2262,85651,85669) || gutterCells.hide()).prev()).addClass('fc-last'));
      }
      colWidth = (_wrap_setLastFunctionCall("fullcalendar.js",2264,85735,85784) || Math.floor((slotTableWidth - axisWidth) / colCnt));
(_wrap_setLastFunctionCall("fullcalendar.js",2265,85798,85848) ||       setOuterWidth((_wrap_setLastFunctionCall("fullcalendar.js",2265,85812,85837) || dayHeadCells.slice(0, -1)), colWidth));
    }
    function resetScroll() {
_wrap_addFunctionToMap('fullcalendar.js', 2267, 85868,86234, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var d0 = (_wrap_setLastFunctionCall("fullcalendar.js",2268,85914,85924) || zeroDate());
      var scrollDate = (_wrap_setLastFunctionCall("fullcalendar.js",2269,85955,85968) || cloneDate(d0));
(_wrap_setLastFunctionCall("fullcalendar.js",2270,85982,86019) ||       scrollDate.setHours((_wrap_setLastFunctionCall("fullcalendar.js",2270,86002,86018) || opt('firstHour'))));
      var top = (_wrap_setLastFunctionCall("fullcalendar.js",2271,86043,86071) || timePosition(d0, scrollDate)) + 1;
      function scroll() {
_wrap_addFunctionToMap('fullcalendar.js', 2272, 86089,86167, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2273,86125,86152) ||         slotScroller.scrollTop(top));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",2275,86180,86188) ||       scroll());
(_wrap_setLastFunctionCall("fullcalendar.js",2276,86202,86223) ||       setTimeout(scroll, 0));
    }
    function beforeHide() {
_wrap_addFunctionToMap('fullcalendar.js', 2278, 86243,86331, (typeof arguments === 'object' ? arguments.callee.caller : null));

      savedScrollTop = (_wrap_setLastFunctionCall("fullcalendar.js",2279,86296,86320) || slotScroller.scrollTop());
    }
    function afterShow() {
_wrap_addFunctionToMap('fullcalendar.js', 2281, 86340,86424, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2282,86375,86413) ||       slotScroller.scrollTop(savedScrollTop));
    }
    function dayBind(cells) {
_wrap_addFunctionToMap('fullcalendar.js', 2284, 86433,86537, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2285,86471,86526) ||       (_wrap_setLastFunctionCall("fullcalendar.js",2285,86471,86493) || cells.click(slotClick)).mousedown(daySelectionMousedown));
    }
    function slotBind(cells) {
_wrap_addFunctionToMap('fullcalendar.js', 2287, 86546,86652, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2288,86585,86641) ||       (_wrap_setLastFunctionCall("fullcalendar.js",2288,86585,86607) || cells.click(slotClick)).mousedown(slotSelectionMousedown));
    }
    function slotClick(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 2290, 86661,87448, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (!(_wrap_setLastFunctionCall("fullcalendar.js",2291,86703,86720) || opt('selectable'))) {
        var col = (_wrap_setLastFunctionCall("fullcalendar.js",2292,86750,86842) || Math.min(colCnt - 1, (_wrap_setLastFunctionCall("fullcalendar.js",2292,86771,86841) || Math.floor((ev.pageX - (_wrap_setLastFunctionCall("fullcalendar.js",2292,86794,86811) || dayTable.offset()).left - axisWidth) / colWidth))));
        var date = (_wrap_setLastFunctionCall("fullcalendar.js",2293,86871,86883) || colDate(col));
        var rowMatch = (_wrap_setLastFunctionCall("fullcalendar.js",2294,86916,86963) || this.parentNode.className.match(/fc-slot(\d+)/));
        if (rowMatch) {
          var mins = (_wrap_setLastFunctionCall("fullcalendar.js",2296,87028,87049) || parseInt(rowMatch[1])) * (_wrap_setLastFunctionCall("fullcalendar.js",2296,87052,87070) || opt('slotMinutes'));
          var hours = (_wrap_setLastFunctionCall("fullcalendar.js",2297,87104,87125) || Math.floor(mins / 60));
(_wrap_setLastFunctionCall("fullcalendar.js",2298,87147,87167) ||           date.setHours(hours));
(_wrap_setLastFunctionCall("fullcalendar.js",2299,87189,87227) ||           date.setMinutes(mins % 60 + minMinute));
(_wrap_setLastFunctionCall("fullcalendar.js",2300,87249,87304) ||           trigger('dayClick', dayBodyCells[col], date, false, ev));
        } else {
(_wrap_setLastFunctionCall("fullcalendar.js",2302,87351,87405) ||           trigger('dayClick', dayBodyCells[col], date, true, ev));
        }
      }
    }
    function renderDayOverlay(startDate, endDate, refreshCoordinateGrid) {
_wrap_addFunctionToMap('fullcalendar.js', 2306, 87457,88242, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (refreshCoordinateGrid) {
(_wrap_setLastFunctionCall("fullcalendar.js",2308,87585,87607) ||         coordinateGrid.build());
      }
      var visStart = (_wrap_setLastFunctionCall("fullcalendar.js",2310,87650,87671) || cloneDate(t.visStart));
      var startCol, endCol;
      if (rtl) {
        startCol = (_wrap_setLastFunctionCall("fullcalendar.js",2313,87757,87783) || dayDiff(endDate, visStart)) * dis + dit + 1;
        endCol = (_wrap_setLastFunctionCall("fullcalendar.js",2314,87826,87854) || dayDiff(startDate, visStart)) * dis + dit + 1;
      } else {
        startCol = (_wrap_setLastFunctionCall("fullcalendar.js",2316,87920,87948) || dayDiff(startDate, visStart));
        endCol = (_wrap_setLastFunctionCall("fullcalendar.js",2317,87975,88001) || dayDiff(endDate, visStart));
      }
      startCol = (_wrap_setLastFunctionCall("fullcalendar.js",2319,88040,88061) || Math.max(0, startCol));
      endCol = (_wrap_setLastFunctionCall("fullcalendar.js",2320,88084,88108) || Math.min(colCnt, endCol));
      if (startCol < endCol) {
(_wrap_setLastFunctionCall("fullcalendar.js",2322,88163,88217) ||         dayBind((_wrap_setLastFunctionCall("fullcalendar.js",2322,88171,88216) || renderCellOverlay(0, startCol, 0, endCol - 1))));
      }
    }
    function renderCellOverlay(row0, col0, row1, col1) {
_wrap_addFunctionToMap('fullcalendar.js', 2325, 88251,88443, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var rect = (_wrap_setLastFunctionCall("fullcalendar.js",2326,88327,88381) || coordinateGrid.rect(row0, col0, row1, col1, slotLayer));
      return (_wrap_setLastFunctionCall("fullcalendar.js",2327,88402,88432) || renderOverlay(rect, slotLayer));
    }
    function renderSlotOverlay(overlayStart, overlayEnd) {
_wrap_addFunctionToMap('fullcalendar.js', 2329, 88452,89389, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var dayStart = (_wrap_setLastFunctionCall("fullcalendar.js",2330,88534,88555) || cloneDate(t.visStart));
      var dayEnd = (_wrap_setLastFunctionCall("fullcalendar.js",2331,88582,88613) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",2331,88590,88609) || cloneDate(dayStart)), 1));
      for (var i = 0; i < colCnt; i++) {
        var stretchStart = (_wrap_setLastFunctionCall("fullcalendar.js",2333,88697,88739) || new Date((_wrap_setLastFunctionCall("fullcalendar.js",2333,88706,88738) || Math.max(dayStart, overlayStart))));
        var stretchEnd = (_wrap_setLastFunctionCall("fullcalendar.js",2334,88774,88812) || new Date((_wrap_setLastFunctionCall("fullcalendar.js",2334,88783,88811) || Math.min(dayEnd, overlayEnd))));
        if (stretchStart < stretchEnd) {
          var col = i * dis + dit;
          var rect = (_wrap_setLastFunctionCall("fullcalendar.js",2337,88939,88987) || coordinateGrid.rect(0, col, 0, col, slotContent));
          var top = (_wrap_setLastFunctionCall("fullcalendar.js",2338,89019,89055) || timePosition(dayStart, stretchStart));
          var bottom = (_wrap_setLastFunctionCall("fullcalendar.js",2339,89090,89124) || timePosition(dayStart, stretchEnd));
          rect.top = top;
          rect.height = bottom - top;
(_wrap_setLastFunctionCall("fullcalendar.js",2342,89230,89272) ||           slotBind((_wrap_setLastFunctionCall("fullcalendar.js",2342,89239,89271) || renderOverlay(rect, slotContent))));
        }
(_wrap_setLastFunctionCall("fullcalendar.js",2344,89308,89328) ||         addDays(dayStart, 1));
(_wrap_setLastFunctionCall("fullcalendar.js",2345,89346,89364) ||         addDays(dayEnd, 1));
      }
    }
    coordinateGrid = (_wrap_setLastFunctionCall("fullcalendar.js",2348,89415,90589) || new CoordinateGrid(function(rows, cols) {
_wrap_addFunctionToMap('fullcalendar.js', 2348, 89434,90588, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var e, n, p;
(_wrap_setLastFunctionCall("fullcalendar.js",2350,89495,89737) ||   dayHeadCells.each(function(i, _e) {
_wrap_addFunctionToMap('fullcalendar.js', 2350, 89513,89736, (typeof arguments === 'object' ? arguments.callee.caller : null));

  e = (_wrap_setLastFunctionCall("fullcalendar.js",2351,89552,89557) || $(_e));
  n = (_wrap_setLastFunctionCall("fullcalendar.js",2352,89579,89589) || e.offset()).left;
  if (i) {
    p[1] = n;
  }
  p = [n];
  cols[i] = p;
}));
  p[1] = n + (_wrap_setLastFunctionCall("fullcalendar.js",2359,89762,89776) || e.outerWidth());
  if ((_wrap_setLastFunctionCall("fullcalendar.js",2360,89794,89811) || opt('allDaySlot'))) {
    e = allDayRow;
    n = (_wrap_setLastFunctionCall("fullcalendar.js",2362,89866,89876) || e.offset()).top;
    rows[0] = [n, n + (_wrap_setLastFunctionCall("fullcalendar.js",2365,89957,89972) || e.outerHeight())];
  }
  var slotTableTop = (_wrap_setLastFunctionCall("fullcalendar.js",2368,90037,90057) || slotContent.offset()).top;
  var slotScrollerTop = (_wrap_setLastFunctionCall("fullcalendar.js",2369,90097,90118) || slotScroller.offset()).top;
  var slotScrollerBottom = slotScrollerTop + (_wrap_setLastFunctionCall("fullcalendar.js",2370,90179,90205) || slotScroller.outerHeight());
  function constrain(n) {
_wrap_addFunctionToMap('fullcalendar.js', 2371, 90219,90339, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return (_wrap_setLastFunctionCall("fullcalendar.js",2372,90266,90324) || Math.max(slotScrollerTop, (_wrap_setLastFunctionCall("fullcalendar.js",2372,90292,90323) || Math.min(slotScrollerBottom, n))));
  }
  for (var i = 0; i < slotCnt; i++) {
(_wrap_setLastFunctionCall("fullcalendar.js",2375,90404,90563) ||     rows.push([(_wrap_setLastFunctionCall("fullcalendar.js",2376,90436,90476) || constrain(slotTableTop + slotHeight * i)), (_wrap_setLastFunctionCall("fullcalendar.js",2377,90498,90544) || constrain(slotTableTop + slotHeight * (i + 1)))]));
  }
}));
    hoverListener = (_wrap_setLastFunctionCall("fullcalendar.js",2381,90615,90648) || new HoverListener(coordinateGrid));
    colContentPositions = (_wrap_setLastFunctionCall("fullcalendar.js",2382,90680,90781) || new HorizontalPositionCache(function(col) {
_wrap_addFunctionToMap('fullcalendar.js', 2382, 90708,90780, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",2383,90744,90769) || dayBodyCellInners.eq(col));
}));
    function colContentLeft(col) {
_wrap_addFunctionToMap('fullcalendar.js', 2385, 90791,90881, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",2386,90841,90870) || colContentPositions.left(col));
    }
    function colContentRight(col) {
_wrap_addFunctionToMap('fullcalendar.js', 2388, 90890,90982, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",2389,90941,90971) || colContentPositions.right(col));
    }
    function dateCell(date) {
_wrap_addFunctionToMap('fullcalendar.js', 2391, 90991,91175, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return {row: (_wrap_setLastFunctionCall("fullcalendar.js",2393,91059,91100) || Math.floor((_wrap_setLastFunctionCall("fullcalendar.js",2393,91070,91095) || dayDiff(date, t.visStart)) / 7)), col: (_wrap_setLastFunctionCall("fullcalendar.js",2394,91123,91150) || dayOfWeekCol((_wrap_setLastFunctionCall("fullcalendar.js",2394,91136,91149) || date.getDay())))};
    }
    function cellDate(cell) {
_wrap_addFunctionToMap('fullcalendar.js', 2397, 91184,91521, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var d = (_wrap_setLastFunctionCall("fullcalendar.js",2398,91230,91247) || colDate(cell.col));
      var slotIndex = cell.row;
      if ((_wrap_setLastFunctionCall("fullcalendar.js",2400,91303,91320) || opt('allDaySlot'))) {
        slotIndex--;
      }
      if (slotIndex >= 0) {
(_wrap_setLastFunctionCall("fullcalendar.js",2404,91417,91474) ||         addMinutes(d, minMinute + slotIndex * (_wrap_setLastFunctionCall("fullcalendar.js",2404,91455,91473) || opt('slotMinutes'))));
      }
      return d;
    }
    function colDate(col) {
_wrap_addFunctionToMap('fullcalendar.js', 2408, 91530,91631, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",2409,91573,91620) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",2409,91581,91602) || cloneDate(t.visStart)), col * dis + dit));
    }
    function cellIsAllDay(cell) {
_wrap_addFunctionToMap('fullcalendar.js', 2411, 91640,91730, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",2412,91689,91706) || opt('allDaySlot')) && !cell.row;
    }
    function dayOfWeekCol(dayOfWeek) {
_wrap_addFunctionToMap('fullcalendar.js', 2414, 91739,91871, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (dayOfWeek - (_wrap_setLastFunctionCall("fullcalendar.js",2415,91806,91829) || Math.max(firstDay, nwe)) + colCnt) % colCnt * dis + dit;
    }
    function timePosition(day, time) {
_wrap_addFunctionToMap('fullcalendar.js', 2417, 91880,92651, (typeof arguments === 'object' ? arguments.callee.caller : null));

      day = (_wrap_setLastFunctionCall("fullcalendar.js",2418,91933,91953) || cloneDate(day, true));
      if (time < (_wrap_setLastFunctionCall("fullcalendar.js",2419,91978,92015) || addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2419,91989,92003) || cloneDate(day)), minMinute))) {
        return 0;
      }
      if (time >= (_wrap_setLastFunctionCall("fullcalendar.js",2422,92083,92120) || addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2422,92094,92108) || cloneDate(day)), maxMinute))) {
        return (_wrap_setLastFunctionCall("fullcalendar.js",2423,92147,92165) || slotTable.height());
      }
      var slotMinutes = (_wrap_setLastFunctionCall("fullcalendar.js",2425,92211,92229) || opt('slotMinutes')), minutes = (_wrap_setLastFunctionCall("fullcalendar.js",2425,92241,92256) || time.getHours()) * 60 + (_wrap_setLastFunctionCall("fullcalendar.js",2425,92264,92281) || time.getMinutes()) - minMinute, slotI = (_wrap_setLastFunctionCall("fullcalendar.js",2425,92303,92336) || Math.floor(minutes / slotMinutes)), slotTop = slotTopCache[slotI];
      if (slotTop === undefined) {
        slotTop = slotTopCache[slotI] = (_wrap_setLastFunctionCall("fullcalendar.js",2427,92458,92503) || slotTable.find('tr:eq(' + slotI + ') td div'))[0].offsetTop;
      }
      return (_wrap_setLastFunctionCall("fullcalendar.js",2429,92551,92640) || Math.max(0, (_wrap_setLastFunctionCall("fullcalendar.js",2429,92563,92639) || Math.round(slotTop - 1 + slotHeight * (minutes % slotMinutes / slotMinutes)))));
    }
    function allDayBounds() {
_wrap_addFunctionToMap('fullcalendar.js', 2431, 92660,92811, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return {left: axisWidth, right: viewWidth - gutterWidth};
    }
    function getAllDayRow(index) {
_wrap_addFunctionToMap('fullcalendar.js', 2437, 92820,92890, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return allDayRow;
    }
    function defaultEventEnd(event) {
_wrap_addFunctionToMap('fullcalendar.js', 2440, 92899,93132, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var start = (_wrap_setLastFunctionCall("fullcalendar.js",2441,92957,92979) || cloneDate(event.start));
      if (event.allDay) {
        return start;
      }
      return (_wrap_setLastFunctionCall("fullcalendar.js",2445,93076,93121) || addMinutes(start, (_wrap_setLastFunctionCall("fullcalendar.js",2445,93094,93120) || opt('defaultEventMinutes'))));
    }
    function defaultSelectionEnd(startDate, allDay) {
_wrap_addFunctionToMap('fullcalendar.js', 2447, 93141,93358, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (allDay) {
        return (_wrap_setLastFunctionCall("fullcalendar.js",2449,93240,93260) || cloneDate(startDate));
      }
      return (_wrap_setLastFunctionCall("fullcalendar.js",2451,93295,93347) || addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2451,93306,93326) || cloneDate(startDate)), (_wrap_setLastFunctionCall("fullcalendar.js",2451,93328,93346) || opt('slotMinutes'))));
    }
    function renderSelection(startDate, endDate, allDay) {
_wrap_addFunctionToMap('fullcalendar.js', 2453, 93367,93695, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (allDay) {
        if ((_wrap_setLastFunctionCall("fullcalendar.js",2455,93468,93485) || opt('allDaySlot'))) {
(_wrap_setLastFunctionCall("fullcalendar.js",2456,93509,93574) ||           renderDayOverlay(startDate, (_wrap_setLastFunctionCall("fullcalendar.js",2456,93537,93567) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",2456,93545,93563) || cloneDate(endDate)), 1)), true));
        }
      } else {
(_wrap_setLastFunctionCall("fullcalendar.js",2459,93631,93670) ||         renderSlotSelection(startDate, endDate));
      }
    }
    function renderSlotSelection(startDate, endDate) {
_wrap_addFunctionToMap('fullcalendar.js', 2462, 93704,95914, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var helperOption = (_wrap_setLastFunctionCall("fullcalendar.js",2463,93786,93805) || opt('selectHelper'));
(_wrap_setLastFunctionCall("fullcalendar.js",2464,93819,93841) ||       coordinateGrid.build());
      if (helperOption) {
        var col = (_wrap_setLastFunctionCall("fullcalendar.js",2466,93901,93931) || dayDiff(startDate, t.visStart)) * dis + dit;
        if (col >= 0 && col < colCnt) {
          var rect = (_wrap_setLastFunctionCall("fullcalendar.js",2468,94024,94072) || coordinateGrid.rect(0, col, 0, col, slotContent));
          var top = (_wrap_setLastFunctionCall("fullcalendar.js",2469,94104,94138) || timePosition(startDate, startDate));
          var bottom = (_wrap_setLastFunctionCall("fullcalendar.js",2470,94173,94205) || timePosition(startDate, endDate));
          if (bottom > top) {
            rect.top = top;
            rect.height = bottom - top;
            rect.left += 2;
            rect.width -= 5;
            if ((_wrap_setLastFunctionCall("fullcalendar.js",2476,94448,94474) || $.isFunction(helperOption))) {
              var helperRes = (_wrap_setLastFunctionCall("fullcalendar.js",2477,94522,94554) || helperOption(startDate, endDate));
              if (helperRes) {
                rect.position = 'absolute';
                rect.zIndex = 8;
                selectionHelper = (_wrap_setLastFunctionCall("fullcalendar.js",2481,94760,94804) || (_wrap_setLastFunctionCall("fullcalendar.js",2481,94760,94782) || (_wrap_setLastFunctionCall("fullcalendar.js",2481,94760,94772) || $(helperRes)).css(rect)).appendTo(slotContent));
              }
            } else {
              rect.isStart = true;
              rect.isEnd = true;
              selectionHelper = (_wrap_setLastFunctionCall("fullcalendar.js",2486,95011,95316) || $((_wrap_setLastFunctionCall("fullcalendar.js",2486,95013,95315) || slotSegHtml({title: '', start: startDate, end: endDate, className: ['fc-select-helper'], editable: false}, rect))));
(_wrap_setLastFunctionCall("fullcalendar.js",2493,95346,95396) ||               selectionHelper.css('opacity', (_wrap_setLastFunctionCall("fullcalendar.js",2493,95377,95395) || opt('dragOpacity'))));
            }
            if (selectionHelper) {
(_wrap_setLastFunctionCall("fullcalendar.js",2496,95499,95524) ||               slotBind(selectionHelper));
(_wrap_setLastFunctionCall("fullcalendar.js",2497,95554,95589) ||               slotContent.append(selectionHelper));
(_wrap_setLastFunctionCall("fullcalendar.js",2498,95619,95667) ||               setOuterWidth(selectionHelper, rect.width, true));
(_wrap_setLastFunctionCall("fullcalendar.js",2499,95697,95747) ||               setOuterHeight(selectionHelper, rect.height, true));
            }
          }
        }
      } else {
(_wrap_setLastFunctionCall("fullcalendar.js",2504,95852,95889) ||         renderSlotOverlay(startDate, endDate));
      }
    }
    function clearSelection() {
_wrap_addFunctionToMap('fullcalendar.js', 2507, 95923,96120, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2508,95963,95978) ||       clearOverlays());
      if (selectionHelper) {
(_wrap_setLastFunctionCall("fullcalendar.js",2510,96031,96055) ||         selectionHelper.remove());
        selectionHelper = null;
      }
    }
    function slotSelectionMousedown(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 2514, 96129,97443, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (ev.which == 1 && (_wrap_setLastFunctionCall("fullcalendar.js",2515,96200,96217) || opt('selectable'))) {
(_wrap_setLastFunctionCall("fullcalendar.js",2516,96237,96249) ||         unselect(ev));
        var dates;
(_wrap_setLastFunctionCall("fullcalendar.js",2518,96294,97025) ||         hoverListener.start(function(cell, origCell) {
_wrap_addFunctionToMap('fullcalendar.js', 2518, 96314,97020, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2519,96362,96378) ||   clearSelection());
  if (cell && cell.col == origCell.col && !(_wrap_setLastFunctionCall("fullcalendar.js",2520,96441,96459) || cellIsAllDay(cell))) {
    var d1 = (_wrap_setLastFunctionCall("fullcalendar.js",2521,96496,96514) || cellDate(origCell));
    var d2 = (_wrap_setLastFunctionCall("fullcalendar.js",2522,96549,96563) || cellDate(cell));
    dates = (_wrap_setLastFunctionCall("fullcalendar.js",2528,96597,96847) || [d1, (_wrap_setLastFunctionCall("fullcalendar.js",2525,96659,96704) || addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2525,96670,96683) || cloneDate(d1)), (_wrap_setLastFunctionCall("fullcalendar.js",2525,96685,96703) || opt('slotMinutes')))), d2, (_wrap_setLastFunctionCall("fullcalendar.js",2527,96766,96811) || addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2527,96777,96790) || cloneDate(d2)), (_wrap_setLastFunctionCall("fullcalendar.js",2527,96792,96810) || opt('slotMinutes'))))].sort(cmp));
(_wrap_setLastFunctionCall("fullcalendar.js",2529,96873,96912) ||     renderSlotSelection(dates[0], dates[3]));
  } else {
    dates = null;
  }
}, ev));
(_wrap_setLastFunctionCall("fullcalendar.js",2534,97043,97418) ||         (_wrap_setLastFunctionCall("fullcalendar.js",2534,97043,97054) || $(document)).one('mouseup', function(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 2534, 97070,97417, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2535,97106,97126) ||   hoverListener.stop());
  if (dates) {
    if (+dates[0] == +dates[1]) {
(_wrap_setLastFunctionCall("fullcalendar.js",2538,97243,97278) ||       reportDayClick(dates[0], false, ev));
    }
(_wrap_setLastFunctionCall("fullcalendar.js",2540,97330,97376) ||     reportSelection(dates[0], dates[3], false, ev));
  }
}));
      }
    }
    function reportDayClick(date, allDay, ev) {
_wrap_addFunctionToMap('fullcalendar.js', 2545, 97452,97599, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2546,97508,97588) ||       trigger('dayClick', dayBodyCells[(_wrap_setLastFunctionCall("fullcalendar.js",2546,97541,97568) || dayOfWeekCol((_wrap_setLastFunctionCall("fullcalendar.js",2546,97554,97567) || date.getDay())))], date, allDay, ev));
    }
    function dragStart(_dragElement, ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2548, 97608,98177, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2549,97663,98166) ||       hoverListener.start(function(cell) {
_wrap_addFunctionToMap('fullcalendar.js', 2549, 97683,98161, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2550,97717,97732) ||   clearOverlays());
  if (cell) {
    if ((_wrap_setLastFunctionCall("fullcalendar.js",2552,97786,97804) || cellIsAllDay(cell))) {
(_wrap_setLastFunctionCall("fullcalendar.js",2553,97832,97889) ||       renderCellOverlay(cell.row, cell.col, cell.row, cell.col));
    } else {
      var d1 = (_wrap_setLastFunctionCall("fullcalendar.js",2555,97953,97967) || cellDate(cell));
      var d2 = (_wrap_setLastFunctionCall("fullcalendar.js",2556,98002,98055) || addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2556,98013,98026) || cloneDate(d1)), (_wrap_setLastFunctionCall("fullcalendar.js",2556,98028,98054) || opt('defaultEventMinutes'))));
(_wrap_setLastFunctionCall("fullcalendar.js",2557,98081,98106) ||       renderSlotOverlay(d1, d2));
    }
  }
}, ev));
    }
    function dragStop(_dragElement, ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2562, 98186,98440, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var cell = (_wrap_setLastFunctionCall("fullcalendar.js",2563,98251,98271) || hoverListener.stop());
(_wrap_setLastFunctionCall("fullcalendar.js",2564,98285,98300) ||       clearOverlays());
      if (cell) {
(_wrap_setLastFunctionCall("fullcalendar.js",2566,98342,98415) ||         trigger('drop', _dragElement, (_wrap_setLastFunctionCall("fullcalendar.js",2566,98372,98386) || cellDate(cell)), (_wrap_setLastFunctionCall("fullcalendar.js",2566,98388,98406) || cellIsAllDay(cell)), ev, ui));
      }
    }
  }
  function AgendaEventRenderer() {
_wrap_addFunctionToMap('fullcalendar.js', 2570, 98451,119167, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.renderEvents = renderEvents;
    t.compileDaySegs = compileDaySegs;
    t.clearEvents = clearEvents;
    t.slotSegHtml = slotSegHtml;
    t.bindDaySeg = bindDaySeg;
(_wrap_setLastFunctionCall("fullcalendar.js",2577,98705,98729) ||     DayEventRenderer.call(t));
    var opt = t.opt;
    var trigger = t.trigger;
    var isEventDraggable = t.isEventDraggable;
    var isEventResizable = t.isEventResizable;
    var eventEnd = t.eventEnd;
    var reportEvents = t.reportEvents;
    var reportEventClear = t.reportEventClear;
    var eventElementHandlers = t.eventElementHandlers;
    var setHeight = t.setHeight;
    var getDaySegmentContainer = t.getDaySegmentContainer;
    var getSlotSegmentContainer = t.getSlotSegmentContainer;
    var getHoverListener = t.getHoverListener;
    var getMaxMinute = t.getMaxMinute;
    var getMinMinute = t.getMinMinute;
    var timePosition = t.timePosition;
    var colContentLeft = t.colContentLeft;
    var colContentRight = t.colContentRight;
    var renderDaySegs = t.renderDaySegs;
    var resizableDayEvent = t.resizableDayEvent;
    var getColCnt = t.getColCnt;
    var getColWidth = t.getColWidth;
    var getSlotHeight = t.getSlotHeight;
    var getBodyContent = t.getBodyContent;
    var reportEventElement = t.reportEventElement;
    var showEvents = t.showEvents;
    var hideEvents = t.hideEvents;
    var eventDrop = t.eventDrop;
    var eventResize = t.eventResize;
    var renderDayOverlay = t.renderDayOverlay;
    var clearOverlays = t.clearOverlays;
    var calendar = t.calendar;
    var formatDate = calendar.formatDate;
    var formatDates = calendar.formatDates;
    function renderEvents(events, modifiedEventId) {
_wrap_addFunctionToMap('fullcalendar.js', 2611, 100232,100858, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2612,100293,100313) ||       reportEvents(events));
      var i, len = events.length, dayEvents = [], slotEvents = [];
      for (i = 0; i < len; i++) {
        if (events[i].allDay) {
(_wrap_setLastFunctionCall("fullcalendar.js",2616,100488,100513) ||           dayEvents.push(events[i]));
        } else {
(_wrap_setLastFunctionCall("fullcalendar.js",2618,100560,100586) ||           slotEvents.push(events[i]));
        }
      }
      if ((_wrap_setLastFunctionCall("fullcalendar.js",2621,100636,100653) || opt('allDaySlot'))) {
(_wrap_setLastFunctionCall("fullcalendar.js",2622,100673,100730) ||         renderDaySegs((_wrap_setLastFunctionCall("fullcalendar.js",2622,100687,100712) || compileDaySegs(dayEvents)), modifiedEventId));
(_wrap_setLastFunctionCall("fullcalendar.js",2623,100748,100759) ||         setHeight());
      }
(_wrap_setLastFunctionCall("fullcalendar.js",2625,100787,100847) ||       renderSlotSegs((_wrap_setLastFunctionCall("fullcalendar.js",2625,100802,100829) || compileSlotSegs(slotEvents)), modifiedEventId));
    }
    function clearEvents() {
_wrap_addFunctionToMap('fullcalendar.js', 2627, 100867,101026, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2628,100904,100922) ||       reportEventClear());
(_wrap_setLastFunctionCall("fullcalendar.js",2629,100936,100968) ||       (_wrap_setLastFunctionCall("fullcalendar.js",2629,100936,100960) || getDaySegmentContainer()).empty());
(_wrap_setLastFunctionCall("fullcalendar.js",2630,100982,101015) ||       (_wrap_setLastFunctionCall("fullcalendar.js",2630,100982,101007) || getSlotSegmentContainer()).empty());
    }
    function compileDaySegs(events) {
_wrap_addFunctionToMap('fullcalendar.js', 2632, 101035,101567, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var levels = (_wrap_setLastFunctionCall("fullcalendar.js",2633,101094,101171) || stackSegs((_wrap_setLastFunctionCall("fullcalendar.js",2633,101104,101170) || sliceSegs(events, (_wrap_setLastFunctionCall("fullcalendar.js",2633,101122,101147) || $.map(events, exclEndDay)), t.visStart, t.visEnd)))), i, levelCnt = levels.length, level, j, seg, segs = [];
      for (i = 0; i < levelCnt; i++) {
        level = levels[i];
        for (j = 0; j < level.length; j++) {
          seg = level[j];
          seg.row = 0;
          seg.level = i;
(_wrap_setLastFunctionCall("fullcalendar.js",2640,101485,101499) ||           segs.push(seg));
        }
      }
      return segs;
    }
    function compileSlotSegs(events) {
_wrap_addFunctionToMap('fullcalendar.js', 2645, 101576,102461, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var colCnt = (_wrap_setLastFunctionCall("fullcalendar.js",2646,101636,101647) || getColCnt()), minMinute = (_wrap_setLastFunctionCall("fullcalendar.js",2646,101661,101675) || getMinMinute()), maxMinute = (_wrap_setLastFunctionCall("fullcalendar.js",2646,101689,101703) || getMaxMinute()), d = (_wrap_setLastFunctionCall("fullcalendar.js",2646,101709,101753) || addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2646,101720,101741) || cloneDate(t.visStart)), minMinute)), visEventEnds = (_wrap_setLastFunctionCall("fullcalendar.js",2646,101770,101797) || $.map(events, slotEventEnd)), i, col, j, level, k, seg, segs = [];
      for (i = 0; i < colCnt; i++) {
        col = (_wrap_setLastFunctionCall("fullcalendar.js",2648,101901,101995) || stackSegs((_wrap_setLastFunctionCall("fullcalendar.js",2648,101911,101994) || sliceSegs(events, visEventEnds, d, (_wrap_setLastFunctionCall("fullcalendar.js",2648,101946,101993) || addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2648,101957,101969) || cloneDate(d)), maxMinute - minMinute))))));
(_wrap_setLastFunctionCall("fullcalendar.js",2649,102013,102034) ||         countForwardSegs(col));
        for (j = 0; j < col.length; j++) {
          level = col[j];
          for (k = 0; k < level.length; k++) {
            seg = level[k];
            seg.col = i;
            seg.level = j;
(_wrap_setLastFunctionCall("fullcalendar.js",2656,102320,102334) ||             segs.push(seg));
          }
        }
(_wrap_setLastFunctionCall("fullcalendar.js",2659,102392,102411) ||         addDays(d, 1, true));
      }
      return segs;
    }
    function slotEventEnd(event) {
_wrap_addFunctionToMap('fullcalendar.js', 2663, 102470,102706, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (event.end) {
        return (_wrap_setLastFunctionCall("fullcalendar.js",2665,102553,102573) || cloneDate(event.end));
      } else {
        return (_wrap_setLastFunctionCall("fullcalendar.js",2667,102619,102681) || addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2667,102630,102652) || cloneDate(event.start)), (_wrap_setLastFunctionCall("fullcalendar.js",2667,102654,102680) || opt('defaultEventMinutes'))));
      }
    }
    function renderSlotSegs(segs, modifiedEventId) {
_wrap_addFunctionToMap('fullcalendar.js', 2670, 102715,107368, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i, segCnt = segs.length, seg, event, classes, top, bottom, colI, levelI, forward, leftmost, availWidth, outerWidth, left, html = '', eventElements, eventElement, triggerRes, vsideCache = {}, hsideCache = {}, key, val, contentElement, height, slotSegmentContainer = (_wrap_setLastFunctionCall("fullcalendar.js",2671,103045,103070) || getSlotSegmentContainer()), rtl, dis, dit, colCnt = (_wrap_setLastFunctionCall("fullcalendar.js",2671,103096,103107) || getColCnt());
      if (rtl = (_wrap_setLastFunctionCall("fullcalendar.js",2672,103131,103143) || opt('isRTL'))) {
        dis = -1;
        dit = colCnt - 1;
      } else {
        dis = 1;
        dit = 0;
      }
      for (i = 0; i < segCnt; i++) {
        seg = segs[i];
        event = seg.event;
        top = (_wrap_setLastFunctionCall("fullcalendar.js",2682,103423,103457) || timePosition(seg.start, seg.start));
        bottom = (_wrap_setLastFunctionCall("fullcalendar.js",2683,103484,103516) || timePosition(seg.start, seg.end));
        colI = seg.col;
        levelI = seg.level;
        forward = seg.forward || 0;
        leftmost = (_wrap_setLastFunctionCall("fullcalendar.js",2687,103657,103689) || colContentLeft(colI * dis + dit));
        availWidth = (_wrap_setLastFunctionCall("fullcalendar.js",2688,103720,103753) || colContentRight(colI * dis + dit)) - leftmost;
        availWidth = (_wrap_setLastFunctionCall("fullcalendar.js",2689,103795,103838) || Math.min(availWidth - 6, availWidth * 0.95));
        if (levelI) {
          outerWidth = availWidth / (levelI + forward + 1);
        } else {
          if (forward) {
            outerWidth = (availWidth / (forward + 1) - 12 / 2) * 2;
          } else {
            outerWidth = availWidth;
          }
        }
        left = leftmost + availWidth / (levelI + forward + 1) * levelI * dis + (rtl ? availWidth - outerWidth : 0);
        seg.top = top;
        seg.left = left;
        seg.outerWidth = outerWidth;
        seg.outerHeight = bottom - top;
        html += (_wrap_setLastFunctionCall("fullcalendar.js",2704,104503,104526) || slotSegHtml(event, seg));
      }
      slotSegmentContainer[0].innerHTML = html;
      eventElements = (_wrap_setLastFunctionCall("fullcalendar.js",2707,104624,104655) || slotSegmentContainer.children());
      for (i = 0; i < segCnt; i++) {
        seg = segs[i];
        event = seg.event;
        eventElement = (_wrap_setLastFunctionCall("fullcalendar.js",2711,104797,104816) || $(eventElements[i]));
        triggerRes = (_wrap_setLastFunctionCall("fullcalendar.js",2712,104847,104897) || trigger('eventRender', event, event, eventElement));
        if (triggerRes === false) {
(_wrap_setLastFunctionCall("fullcalendar.js",2714,104963,104984) ||           eventElement.remove());
        } else {
          if (triggerRes && triggerRes !== true) {
(_wrap_setLastFunctionCall("fullcalendar.js",2717,105096,105117) ||             eventElement.remove());
            eventElement = (_wrap_setLastFunctionCall("fullcalendar.js",2722,105158,105370) || (_wrap_setLastFunctionCall("fullcalendar.js",2718,105158,105339) || (_wrap_setLastFunctionCall("fullcalendar.js",2718,105158,105171) || $(triggerRes)).css({position: 'absolute', top: seg.top, left: seg.left})).appendTo(slotSegmentContainer));
          }
          seg.element = eventElement;
          if (event._id === modifiedEventId) {
(_wrap_setLastFunctionCall("fullcalendar.js",2726,105523,105560) ||             bindSlotSeg(event, eventElement, seg));
          } else {
            eventElement[0]._fci = i;
          }
(_wrap_setLastFunctionCall("fullcalendar.js",2730,105683,105722) ||           reportEventElement(event, eventElement));
        }
      }
(_wrap_setLastFunctionCall("fullcalendar.js",2733,105768,105820) ||       lazySegBind(slotSegmentContainer, segs, bindSlotSeg));
      for (i = 0; i < segCnt; i++) {
        seg = segs[i];
        if (eventElement = seg.element) {
          val = vsideCache[key = seg.key = (_wrap_setLastFunctionCall("fullcalendar.js",2737,105999,106022) || cssKey(eventElement[0]))];
          seg.vsides = val === undefined ? vsideCache[key] = (_wrap_setLastFunctionCall("fullcalendar.js",2738,106096,106122) || vsides(eventElement, true)) : val;
          val = hsideCache[key];
          seg.hsides = val === undefined ? hsideCache[key] = (_wrap_setLastFunctionCall("fullcalendar.js",2740,106244,106270) || hsides(eventElement, true)) : val;
          contentElement = (_wrap_setLastFunctionCall("fullcalendar.js",2741,106315,106356) || eventElement.find('div.fc-event-content'));
          if (contentElement.length) {
            seg.contentTop = contentElement[0].offsetTop;
          }
        }
      }
      for (i = 0; i < segCnt; i++) {
        seg = segs[i];
        if (eventElement = seg.element) {
          eventElement[0].style.width = (_wrap_setLastFunctionCall("fullcalendar.js",2750,106705,106745) || Math.max(0, seg.outerWidth - seg.hsides)) + 'px';
          height = (_wrap_setLastFunctionCall("fullcalendar.js",2751,106783,106824) || Math.max(0, seg.outerHeight - seg.vsides));
          eventElement[0].style.height = height + 'px';
          event = seg.event;
          if (seg.contentTop !== undefined && height - seg.contentTop < 10) {
(_wrap_setLastFunctionCall("fullcalendar.js",2755,107043,107152) ||             (_wrap_setLastFunctionCall("fullcalendar.js",2755,107043,107081) || eventElement.find('div.fc-event-time')).text((_wrap_setLastFunctionCall("fullcalendar.js",2755,107087,107129) || formatDate(event.start, (_wrap_setLastFunctionCall("fullcalendar.js",2755,107111,107128) || opt('timeFormat')))) + ' - ' + event.title));
(_wrap_setLastFunctionCall("fullcalendar.js",2756,107178,107226) ||             (_wrap_setLastFunctionCall("fullcalendar.js",2756,107178,107217) || eventElement.find('div.fc-event-title')).remove());
          }
(_wrap_setLastFunctionCall("fullcalendar.js",2758,107270,107325) ||           trigger('eventAfterRender', event, event, eventElement));
        }
      }
    }
    function slotSegHtml(event, seg) {
_wrap_addFunctionToMap('fullcalendar.js', 2762, 107377,109217, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var html = '<';
      var url = event.url;
      var skinCss = (_wrap_setLastFunctionCall("fullcalendar.js",2765,107499,107521) || getSkinCss(event, opt));
      var skinCssAttr = skinCss ? ' style=\'' + skinCss + '\'' : '';
      var classes = ['fc-event', 'fc-event-skin', 'fc-event-vert'];
      if ((_wrap_setLastFunctionCall("fullcalendar.js",2772,107766,107789) || isEventDraggable(event))) {
(_wrap_setLastFunctionCall("fullcalendar.js",2773,107809,107843) ||         classes.push('fc-event-draggable'));
      }
      if (seg.isStart) {
(_wrap_setLastFunctionCall("fullcalendar.js",2776,107906,107935) ||         classes.push('fc-corner-top'));
      }
      if (seg.isEnd) {
(_wrap_setLastFunctionCall("fullcalendar.js",2779,107996,108028) ||         classes.push('fc-corner-bottom'));
      }
      classes = (_wrap_setLastFunctionCall("fullcalendar.js",2781,108066,108097) || classes.concat(event.className));
      if (event.source) {
        classes = (_wrap_setLastFunctionCall("fullcalendar.js",2783,108157,108201) || classes.concat(event.source.className || []));
      }
      if (url) {
        html += 'a href=\'' + (_wrap_setLastFunctionCall("fullcalendar.js",2786,108278,108299) || htmlEscape(event.url)) + '\'';
      } else {
        html += 'div';
      }
      html += ' class=\'' + (_wrap_setLastFunctionCall("fullcalendar.js",2790,108408,108425) || classes.join(' ')) + '\'' + ' style=\'position:absolute;z-index:8;top:' + seg.top + 'px;left:' + seg.left + 'px;' + skinCss + '\'' + '>' + '<div class=\'fc-event-inner fc-event-skin\'' + skinCssAttr + '>' + '<div class=\'fc-event-head fc-event-skin\'' + skinCssAttr + '>' + '<div class=\'fc-event-time\'>' + (_wrap_setLastFunctionCall("fullcalendar.js",2790,108715,108781) || htmlEscape((_wrap_setLastFunctionCall("fullcalendar.js",2790,108726,108780) || formatDates(event.start, event.end, (_wrap_setLastFunctionCall("fullcalendar.js",2790,108762,108779) || opt('timeFormat')))))) + '</div>' + '</div>' + '<div class=\'fc-event-content\'>' + '<div class=\'fc-event-title\'>' + (_wrap_setLastFunctionCall("fullcalendar.js",2790,108878,108901) || htmlEscape(event.title)) + '</div>' + '</div>' + '<div class=\'fc-event-bg\'></div>' + '</div>';
      if (seg.isEnd && (_wrap_setLastFunctionCall("fullcalendar.js",2791,109003,109026) || isEventResizable(event))) {
        html += '<div class=\'ui-resizable-handle ui-resizable-s\'>=</div>';
      }
      html += '</' + (url ? 'a' : 'div') + '>';
      return html;
    }
    function bindDaySeg(event, eventElement, seg) {
_wrap_addFunctionToMap('fullcalendar.js', 2797, 109226,109595, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if ((_wrap_setLastFunctionCall("fullcalendar.js",2798,109290,109313) || isEventDraggable(event))) {
(_wrap_setLastFunctionCall("fullcalendar.js",2799,109333,109384) ||         draggableDayEvent(event, eventElement, seg.isStart));
      }
      if (seg.isEnd && (_wrap_setLastFunctionCall("fullcalendar.js",2801,109429,109452) || isEventResizable(event))) {
(_wrap_setLastFunctionCall("fullcalendar.js",2802,109472,109515) ||         resizableDayEvent(event, eventElement, seg));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",2804,109543,109584) ||       eventElementHandlers(event, eventElement));
    }
    function bindSlotSeg(event, eventElement, seg) {
_wrap_addFunctionToMap('fullcalendar.js', 2806, 109604,110054, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var timeElement = (_wrap_setLastFunctionCall("fullcalendar.js",2807,109683,109721) || eventElement.find('div.fc-event-time'));
      if ((_wrap_setLastFunctionCall("fullcalendar.js",2808,109739,109762) || isEventDraggable(event))) {
(_wrap_setLastFunctionCall("fullcalendar.js",2809,109782,109834) ||         draggableSlotEvent(event, eventElement, timeElement));
      }
      if (seg.isEnd && (_wrap_setLastFunctionCall("fullcalendar.js",2811,109879,109902) || isEventResizable(event))) {
(_wrap_setLastFunctionCall("fullcalendar.js",2812,109922,109974) ||         resizableSlotEvent(event, eventElement, timeElement));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",2814,110002,110043) ||       eventElementHandlers(event, eventElement));
    }
    function draggableDayEvent(event, eventElement, isStart) {
_wrap_addFunctionToMap('fullcalendar.js', 2816, 110063,113705, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var origWidth;
      var revert;
      var allDay = true;
      var dayDelta;
      var dis = (_wrap_setLastFunctionCall("fullcalendar.js",2821,110252,110264) || opt('isRTL')) ? -1 : 1;
      var hoverListener = (_wrap_setLastFunctionCall("fullcalendar.js",2822,110307,110325) || getHoverListener());
      var colWidth = (_wrap_setLastFunctionCall("fullcalendar.js",2823,110354,110367) || getColWidth());
      var slotHeight = (_wrap_setLastFunctionCall("fullcalendar.js",2824,110398,110413) || getSlotHeight());
      var minMinute = (_wrap_setLastFunctionCall("fullcalendar.js",2825,110443,110457) || getMinMinute());
(_wrap_setLastFunctionCall("fullcalendar.js",2826,110471,113462) ||       eventElement.draggable({zIndex: 9, opacity: (_wrap_setLastFunctionCall("fullcalendar.js",2828,110548,110575) || opt('dragOpacity', 'month')), revertDuration: (_wrap_setLastFunctionCall("fullcalendar.js",2829,110609,110634) || opt('dragRevertDuration')), start: function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2830, 110659,112577, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2831,110699,110753) ||   trigger('eventDragStart', eventElement, event, ev, ui));
(_wrap_setLastFunctionCall("fullcalendar.js",2832,110775,110806) ||   hideEvents(event, eventElement));
  origWidth = (_wrap_setLastFunctionCall("fullcalendar.js",2833,110840,110860) || eventElement.width());
(_wrap_setLastFunctionCall("fullcalendar.js",2834,110882,112558) ||   hoverListener.start(function(cell, origCell, rowDelta, colDelta) {
_wrap_addFunctionToMap('fullcalendar.js', 2834, 110902,112545, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2835,110974,110989) ||   clearOverlays());
  if (cell) {
    revert = false;
    dayDelta = colDelta * dis;
    if (!cell.row) {
(_wrap_setLastFunctionCall("fullcalendar.js",2840,111203,111300) ||       renderDayOverlay((_wrap_setLastFunctionCall("fullcalendar.js",2840,111220,111261) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",2840,111228,111250) || cloneDate(event.start)), dayDelta)), (_wrap_setLastFunctionCall("fullcalendar.js",2840,111263,111299) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",2840,111271,111288) || exclEndDay(event)), dayDelta))));
(_wrap_setLastFunctionCall("fullcalendar.js",2841,111334,111348) ||       resetElement());
    } else {
      if (isStart) {
        if (allDay) {
(_wrap_setLastFunctionCall("fullcalendar.js",2845,111524,111557) ||           eventElement.width(colWidth - 10));
(_wrap_setLastFunctionCall("fullcalendar.js",2846,111599,111755) ||           setOuterHeight(eventElement, slotHeight * (_wrap_setLastFunctionCall("fullcalendar.js",2846,111641,111754) || Math.round((event.end ? (event.end - event.start) / MINUTE_MS : (_wrap_setLastFunctionCall("fullcalendar.js",2846,111705,111731) || opt('defaultEventMinutes'))) / (_wrap_setLastFunctionCall("fullcalendar.js",2846,111735,111753) || opt('slotMinutes'))))));
(_wrap_setLastFunctionCall("fullcalendar.js",2847,111797,111982) ||           eventElement.draggable('option', 'grid', [colWidth, 1]));
          allDay = false;
        }
      } else {
        revert = true;
      }
    }
    revert = revert || allDay && !dayDelta;
  } else {
(_wrap_setLastFunctionCall("fullcalendar.js",2859,112363,112377) ||     resetElement());
    revert = true;
  }
(_wrap_setLastFunctionCall("fullcalendar.js",2862,112472,112522) ||   eventElement.draggable('option', 'revert', revert));
}, ev, 'drag'));
}, stop: function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2865, 112601,113447, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2866,112641,112661) ||   hoverListener.stop());
(_wrap_setLastFunctionCall("fullcalendar.js",2867,112683,112698) ||   clearOverlays());
(_wrap_setLastFunctionCall("fullcalendar.js",2868,112720,112773) ||   trigger('eventDragStop', eventElement, event, ev, ui));
  if (revert) {
(_wrap_setLastFunctionCall("fullcalendar.js",2870,112833,112847) ||     resetElement());
(_wrap_setLastFunctionCall("fullcalendar.js",2871,112873,112903) ||     eventElement.css('filter', ''));
(_wrap_setLastFunctionCall("fullcalendar.js",2872,112929,112960) ||     showEvents(event, eventElement));
  } else {
    var minuteDelta = 0;
    if (!allDay) {
      minuteDelta = (_wrap_setLastFunctionCall("fullcalendar.js",2876,113117,113201) || Math.round(((_wrap_setLastFunctionCall("fullcalendar.js",2876,113129,113150) || eventElement.offset()).top - (_wrap_setLastFunctionCall("fullcalendar.js",2876,113157,113182) || (_wrap_setLastFunctionCall("fullcalendar.js",2876,113157,113173) || getBodyContent()).offset()).top) / slotHeight)) * (_wrap_setLastFunctionCall("fullcalendar.js",2876,113204,113222) || opt('slotMinutes')) + minMinute - ((_wrap_setLastFunctionCall("fullcalendar.js",2876,113238,113260) || event.start.getHours()) * 60 + (_wrap_setLastFunctionCall("fullcalendar.js",2876,113268,113292) || event.start.getMinutes()));
    }
(_wrap_setLastFunctionCall("fullcalendar.js",2878,113345,113406) ||     eventDrop(this, event, dayDelta, minuteDelta, allDay, ev, ui));
  }
}}));
      function resetElement() {
_wrap_addFunctionToMap('fullcalendar.js', 2882, 113476,113695, (typeof arguments === 'object' ? arguments.callee.caller : null));

        if (!allDay) {
(_wrap_setLastFunctionCall("fullcalendar.js",2884,113553,113627) ||           (_wrap_setLastFunctionCall("fullcalendar.js",2884,113553,113593) || (_wrap_setLastFunctionCall("fullcalendar.js",2884,113553,113582) || eventElement.width(origWidth)).height('')).draggable('option', 'grid', null));
          allDay = true;
        }
      }
    }
    function draggableSlotEvent(event, eventElement, timeElement) {
_wrap_addFunctionToMap('fullcalendar.js', 2889, 113714,117638, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var origPosition;
      var allDay = false;
      var dayDelta;
      var minuteDelta;
      var prevMinuteDelta;
      var dis = (_wrap_setLastFunctionCall("fullcalendar.js",2895,113950,113962) || opt('isRTL')) ? -1 : 1;
      var hoverListener = (_wrap_setLastFunctionCall("fullcalendar.js",2896,114005,114023) || getHoverListener());
      var colCnt = (_wrap_setLastFunctionCall("fullcalendar.js",2897,114050,114061) || getColCnt());
      var colWidth = (_wrap_setLastFunctionCall("fullcalendar.js",2898,114090,114103) || getColWidth());
      var slotHeight = (_wrap_setLastFunctionCall("fullcalendar.js",2899,114134,114149) || getSlotHeight());
(_wrap_setLastFunctionCall("fullcalendar.js",2900,114163,116899) ||       eventElement.draggable({zIndex: 9, scroll: false, grid: [colWidth, slotHeight], axis: colCnt == 1 ? 'y' : false, opacity: (_wrap_setLastFunctionCall("fullcalendar.js",2908,114424,114442) || opt('dragOpacity')), revertDuration: (_wrap_setLastFunctionCall("fullcalendar.js",2909,114476,114501) || opt('dragRevertDuration')), start: function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2910, 114526,115748, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2911,114566,114620) ||   trigger('eventDragStart', eventElement, event, ev, ui));
(_wrap_setLastFunctionCall("fullcalendar.js",2912,114642,114673) ||   hideEvents(event, eventElement));
  origPosition = (_wrap_setLastFunctionCall("fullcalendar.js",2913,114710,114733) || eventElement.position());
  minuteDelta = prevMinuteDelta = 0;
(_wrap_setLastFunctionCall("fullcalendar.js",2915,114810,115729) ||   hoverListener.start(function(cell, origCell, rowDelta, colDelta) {
_wrap_addFunctionToMap('fullcalendar.js', 2915, 114830,115716, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2916,114902,114951) ||   eventElement.draggable('option', 'revert', !cell));
(_wrap_setLastFunctionCall("fullcalendar.js",2917,114977,114992) ||   clearOverlays());
  if (cell) {
    dayDelta = colDelta * dis;
    if ((_wrap_setLastFunctionCall("fullcalendar.js",2920,115117,115134) || opt('allDaySlot')) && !cell.row) {
      if (!allDay) {
        allDay = true;
(_wrap_setLastFunctionCall("fullcalendar.js",2923,115285,115303) ||         timeElement.hide());
(_wrap_setLastFunctionCall("fullcalendar.js",2924,115341,115387) ||         eventElement.draggable('option', 'grid', null));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",2926,115455,115552) ||       renderDayOverlay((_wrap_setLastFunctionCall("fullcalendar.js",2926,115472,115513) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",2926,115480,115502) || cloneDate(event.start)), dayDelta)), (_wrap_setLastFunctionCall("fullcalendar.js",2926,115515,115551) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",2926,115523,115540) || exclEndDay(event)), dayDelta))));
    } else {
(_wrap_setLastFunctionCall("fullcalendar.js",2928,115623,115637) ||       resetElement());
    }
  }
}, ev, 'drag'));
}, drag: function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2933, 115772,116184, (typeof arguments === 'object' ? arguments.callee.caller : null));

  minuteDelta = (_wrap_setLastFunctionCall("fullcalendar.js",2934,115826,115887) || Math.round((ui.position.top - origPosition.top) / slotHeight)) * (_wrap_setLastFunctionCall("fullcalendar.js",2934,115890,115908) || opt('slotMinutes'));
  if (minuteDelta != prevMinuteDelta) {
    if (!allDay) {
(_wrap_setLastFunctionCall("fullcalendar.js",2937,116035,116062) ||       updateTimeText(minuteDelta));
    }
    prevMinuteDelta = minuteDelta;
  }
}, stop: function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2942, 116208,116884, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var cell = (_wrap_setLastFunctionCall("fullcalendar.js",2943,116259,116279) || hoverListener.stop());
(_wrap_setLastFunctionCall("fullcalendar.js",2944,116301,116316) ||   clearOverlays());
(_wrap_setLastFunctionCall("fullcalendar.js",2945,116338,116391) ||   trigger('eventDragStop', eventElement, event, ev, ui));
  if (cell && (dayDelta || minuteDelta || allDay)) {
(_wrap_setLastFunctionCall("fullcalendar.js",2947,116488,116562) ||     eventDrop(this, event, dayDelta, allDay ? 0 : minuteDelta, allDay, ev, ui));
  } else {
(_wrap_setLastFunctionCall("fullcalendar.js",2949,116617,116631) ||     resetElement());
(_wrap_setLastFunctionCall("fullcalendar.js",2950,116657,116687) ||     eventElement.css('filter', ''));
(_wrap_setLastFunctionCall("fullcalendar.js",2951,116713,116743) ||     eventElement.css(origPosition));
(_wrap_setLastFunctionCall("fullcalendar.js",2952,116769,116786) ||     updateTimeText(0));
(_wrap_setLastFunctionCall("fullcalendar.js",2953,116812,116843) ||     showEvents(event, eventElement));
  }
}}));
      function updateTimeText(minuteDelta) {
_wrap_addFunctionToMap('fullcalendar.js', 2957, 116913,117284, (typeof arguments === 'object' ? arguments.callee.caller : null));

        var newStart = (_wrap_setLastFunctionCall("fullcalendar.js",2958,116983,117030) || addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2958,116994,117016) || cloneDate(event.start)), minuteDelta));
        var newEnd;
        if (event.end) {
          newEnd = (_wrap_setLastFunctionCall("fullcalendar.js",2961,117122,117167) || addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2961,117133,117153) || cloneDate(event.end)), minuteDelta));
        }
(_wrap_setLastFunctionCall("fullcalendar.js",2963,117203,117269) ||         timeElement.text((_wrap_setLastFunctionCall("fullcalendar.js",2963,117220,117268) || formatDates(newStart, newEnd, (_wrap_setLastFunctionCall("fullcalendar.js",2963,117250,117267) || opt('timeFormat'))))));
      }
      function resetElement() {
_wrap_addFunctionToMap('fullcalendar.js', 2965, 117297,117628, (typeof arguments === 'object' ? arguments.callee.caller : null));

        if (allDay) {
(_wrap_setLastFunctionCall("fullcalendar.js",2967,117373,117403) ||           timeElement.css('display', ''));
(_wrap_setLastFunctionCall("fullcalendar.js",2968,117425,117559) ||           eventElement.draggable('option', 'grid', [colWidth, slotHeight]));
          allDay = false;
        }
      }
    }
    function resizableSlotEvent(event, eventElement, timeElement) {
_wrap_addFunctionToMap('fullcalendar.js', 2976, 117647,119161, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var slotDelta, prevSlotDelta;
      var slotHeight = (_wrap_setLastFunctionCall("fullcalendar.js",2978,117782,117797) || getSlotHeight());
(_wrap_setLastFunctionCall("fullcalendar.js",2979,117811,119150) ||       eventElement.resizable({handles: {s: 'div.ui-resizable-s'}, grid: slotHeight, start: function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2982, 117947,118210, (typeof arguments === 'object' ? arguments.callee.caller : null));

  slotDelta = prevSlotDelta = 0;
(_wrap_setLastFunctionCall("fullcalendar.js",2984,118038,118069) ||   hideEvents(event, eventElement));
(_wrap_setLastFunctionCall("fullcalendar.js",2985,118091,118121) ||   eventElement.css('z-index', 9));
(_wrap_setLastFunctionCall("fullcalendar.js",2986,118143,118191) ||   trigger('eventResizeStart', this, event, ev, ui));
}, resize: function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2988, 118236,118711, (typeof arguments === 'object' ? arguments.callee.caller : null));

  slotDelta = (_wrap_setLastFunctionCall("fullcalendar.js",2989,118288,118383) || Math.round(((_wrap_setLastFunctionCall("fullcalendar.js",2989,118300,118343) || Math.max(slotHeight, (_wrap_setLastFunctionCall("fullcalendar.js",2989,118321,118342) || eventElement.height()))) - ui.originalSize.height) / slotHeight));
  if (slotDelta != prevSlotDelta) {
(_wrap_setLastFunctionCall("fullcalendar.js",2991,118463,118619) ||     timeElement.text((_wrap_setLastFunctionCall("fullcalendar.js",2991,118480,118618) || formatDates(event.start, !slotDelta && !event.end ? null : (_wrap_setLastFunctionCall("fullcalendar.js",2991,118539,118598) || addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2991,118550,118565) || eventEnd(event)), (_wrap_setLastFunctionCall("fullcalendar.js",2991,118567,118585) || opt('slotMinutes')) * slotDelta)), (_wrap_setLastFunctionCall("fullcalendar.js",2991,118600,118617) || opt('timeFormat'))))));
    prevSlotDelta = slotDelta;
  }
}, stop: function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2995, 118735,119135, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2996,118775,118822) ||   trigger('eventResizeStop', this, event, ev, ui));
  if (slotDelta) {
(_wrap_setLastFunctionCall("fullcalendar.js",2998,118885,118952) ||     eventResize(this, event, 0, (_wrap_setLastFunctionCall("fullcalendar.js",2998,118913,118931) || opt('slotMinutes')) * slotDelta, ev, ui));
  } else {
(_wrap_setLastFunctionCall("fullcalendar.js",3000,119007,119037) ||     eventElement.css('z-index', 8));
(_wrap_setLastFunctionCall("fullcalendar.js",3001,119063,119094) ||     showEvents(event, eventElement));
  }
}}));
    }
  }
  function countForwardSegs(levels) {
_wrap_addFunctionToMap('fullcalendar.js', 3007, 119172,119769, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var i, j, k, level, segForward, segBack;
    for (i = levels.length - 1; i > 0; i--) {
      level = levels[i];
      for (j = 0; j < level.length; j++) {
        segForward = level[j];
        for (k = 0; k < levels[i - 1].length; k++) {
          segBack = levels[i - 1][k];
          if ((_wrap_setLastFunctionCall("fullcalendar.js",3015,119559,119591) || segsCollide(segForward, segBack))) {
            segBack.forward = (_wrap_setLastFunctionCall("fullcalendar.js",3016,119637,119698) || Math.max(segBack.forward || 0, (segForward.forward || 0) + 1));
          }
        }
      }
    }
  }
  function View(element, calendar, viewName) {
_wrap_addFunctionToMap('fullcalendar.js', 3022, 119774,125617, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.element = element;
    t.calendar = calendar;
    t.name = viewName;
    t.opt = opt;
    t.trigger = trigger;
    t.isEventDraggable = isEventDraggable;
    t.isEventResizable = isEventResizable;
    t.reportEvents = reportEvents;
    t.eventEnd = eventEnd;
    t.reportEventElement = reportEventElement;
    t.reportEventClear = reportEventClear;
    t.eventElementHandlers = eventElementHandlers;
    t.showEvents = showEvents;
    t.hideEvents = hideEvents;
    t.eventDrop = eventDrop;
    t.eventResize = eventResize;
    var defaultEventEnd = t.defaultEventEnd;
    var normalizeEvent = calendar.normalizeEvent;
    var reportEventChange = calendar.reportEventChange;
    var eventsByID = {};
    var eventElements = [];
    var eventElementsByID = {};
    var options = calendar.options;
    function opt(name, viewNameOverride) {
_wrap_addFunctionToMap('fullcalendar.js', 3047, 120743,120973, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var v = options[name];
      if (typeof v == 'object') {
        return (_wrap_setLastFunctionCall("fullcalendar.js",3050,120880,120926) || smartProperty(v, viewNameOverride || viewName));
      }
      return v;
    }
    function trigger(name, thisObj) {
_wrap_addFunctionToMap('fullcalendar.js', 3054, 120982,121200, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",3055,121035,121189) || calendar.trigger.apply(calendar, (_wrap_setLastFunctionCall("fullcalendar.js",3058,121068,121188) || [name, thisObj || t].concat((_wrap_setLastFunctionCall("fullcalendar.js",3058,121142,121182) || Array.prototype.slice.call(arguments, 2)), [t]))));
    }
    function isEventDraggable(event) {
_wrap_addFunctionToMap('fullcalendar.js', 3060, 121209,121323, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",3061,121263,121285) || isEventEditable(event)) && !(_wrap_setLastFunctionCall("fullcalendar.js",3061,121290,121312) || opt('disableDragging'));
    }
    function isEventResizable(event) {
_wrap_addFunctionToMap('fullcalendar.js', 3063, 121332,121446, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",3064,121386,121408) || isEventEditable(event)) && !(_wrap_setLastFunctionCall("fullcalendar.js",3064,121413,121435) || opt('disableResizing'));
    }
    function isEventEditable(event) {
_wrap_addFunctionToMap('fullcalendar.js', 3066, 121455,121595, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",3067,121508,121584) || firstDefined(event.editable, (event.source || {}).editable, (_wrap_setLastFunctionCall("fullcalendar.js",3067,121568,121583) || opt('editable'))));
    }
    function reportEvents(events) {
_wrap_addFunctionToMap('fullcalendar.js', 3069, 121604,122006, (typeof arguments === 'object' ? arguments.callee.caller : null));

      eventsByID = {};
      var i, len = events.length, event;
      for (i = 0; i < len; i++) {
        event = events[i];
        if (eventsByID[event._id]) {
(_wrap_setLastFunctionCall("fullcalendar.js",3075,121852,121885) ||           eventsByID[event._id].push(event));
        } else {
          eventsByID[event._id] = [event];
        }
      }
    }
    function eventEnd(event) {
_wrap_addFunctionToMap('fullcalendar.js', 3081, 122015,122129, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return event.end ? (_wrap_setLastFunctionCall("fullcalendar.js",3082,122073,122093) || cloneDate(event.end)) : (_wrap_setLastFunctionCall("fullcalendar.js",3082,122096,122118) || defaultEventEnd(event));
    }
    function reportEventElement(event, element) {
_wrap_addFunctionToMap('fullcalendar.js', 3084, 122138,122435, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3085,122196,122223) ||       eventElements.push(element));
      if (eventElementsByID[event._id]) {
(_wrap_setLastFunctionCall("fullcalendar.js",3087,122289,122331) ||         eventElementsByID[event._id].push(element));
      } else {
        eventElementsByID[event._id] = [element];
      }
    }
    function reportEventClear() {
_wrap_addFunctionToMap('fullcalendar.js', 3092, 122444,122551, (typeof arguments === 'object' ? arguments.callee.caller : null));

      eventElements = [];
      eventElementsByID = {};
    }
    function eventElementHandlers(event, eventElement) {
_wrap_addFunctionToMap('fullcalendar.js', 3096, 122560,123079, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3101,122625,123068) ||       (_wrap_setLastFunctionCall("fullcalendar.js",3097,122625,122881) || eventElement.click(function(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3097, 122644,122880, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!(_wrap_setLastFunctionCall("fullcalendar.js",3098,122681,122727) || eventElement.hasClass('ui-draggable-dragging')) && !(_wrap_setLastFunctionCall("fullcalendar.js",3098,122732,122778) || eventElement.hasClass('ui-resizable-resizing'))) {
    return (_wrap_setLastFunctionCall("fullcalendar.js",3099,122809,122847) || trigger('eventClick', this, event, ev));
  }
})).hover(function(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3101, 122888,122977, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3102,122920,122962) ||   trigger('eventMouseover', this, event, ev));
}, function(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3103, 122979,123067, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3104,123011,123052) ||   trigger('eventMouseout', this, event, ev));
}));
    }
    function showEvents(event, exceptElement) {
_wrap_addFunctionToMap('fullcalendar.js', 3107, 123088,123201, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3108,123144,123190) ||       eachEventElement(event, exceptElement, 'show'));
    }
    function hideEvents(event, exceptElement) {
_wrap_addFunctionToMap('fullcalendar.js', 3110, 123210,123323, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3111,123266,123312) ||       eachEventElement(event, exceptElement, 'hide'));
    }
    function eachEventElement(event, exceptElement, funcName) {
_wrap_addFunctionToMap('fullcalendar.js', 3113, 123332,123677, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var elements = eventElementsByID[event._id], i, len = elements.length;
      for (i = 0; i < len; i++) {
        if (!exceptElement || elements[i][0] != exceptElement[0]) {
(_wrap_setLastFunctionCall("fullcalendar.js",3117,123611,123634) ||           elements[i][funcName]());
        }
      }
    }
    function eventDrop(e, event, dayDelta, minuteDelta, allDay, ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 3121, 123686,124201, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var oldAllDay = event.allDay;
      var eventId = event._id;
(_wrap_setLastFunctionCall("fullcalendar.js",3124,123847,123909) ||       moveEvents(eventsByID[eventId], dayDelta, minuteDelta, allDay));
(_wrap_setLastFunctionCall("fullcalendar.js",3125,123923,124150) ||       trigger('eventDrop', e, event, dayDelta, minuteDelta, allDay, function() {
_wrap_addFunctionToMap('fullcalendar.js', 3125, 123985,124141, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3126,124015,124082) ||   moveEvents(eventsByID[eventId], -dayDelta, -minuteDelta, oldAllDay));
(_wrap_setLastFunctionCall("fullcalendar.js",3127,124100,124126) ||   reportEventChange(eventId));
}, ev, ui));
(_wrap_setLastFunctionCall("fullcalendar.js",3129,124164,124190) ||       reportEventChange(eventId));
    }
    function eventResize(e, event, dayDelta, minuteDelta, ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 3131, 124210,124660, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var eventId = event._id;
(_wrap_setLastFunctionCall("fullcalendar.js",3133,124323,124381) ||       elongateEvents(eventsByID[eventId], dayDelta, minuteDelta));
(_wrap_setLastFunctionCall("fullcalendar.js",3134,124395,124609) ||       trigger('eventResize', e, event, dayDelta, minuteDelta, function() {
_wrap_addFunctionToMap('fullcalendar.js', 3134, 124451,124600, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3135,124481,124541) ||   elongateEvents(eventsByID[eventId], -dayDelta, -minuteDelta));
(_wrap_setLastFunctionCall("fullcalendar.js",3136,124559,124585) ||   reportEventChange(eventId));
}, ev, ui));
(_wrap_setLastFunctionCall("fullcalendar.js",3138,124623,124649) ||       reportEventChange(eventId));
    }
    function moveEvents(events, dayDelta, minuteDelta, allDay) {
_wrap_addFunctionToMap('fullcalendar.js', 3140, 124669,125248, (typeof arguments === 'object' ? arguments.callee.caller : null));

      minuteDelta = minuteDelta || 0;
      for (var e, len = events.length, i = 0; i < len; i++) {
        e = events[i];
        if (allDay !== undefined) {
          e.allDay = allDay;
        }
(_wrap_setLastFunctionCall("fullcalendar.js",3147,124990,125047) ||         addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",3147,125001,125033) || addDays(e.start, dayDelta, true)), minuteDelta));
        if (e.end) {
          e.end = (_wrap_setLastFunctionCall("fullcalendar.js",3149,125106,125161) || addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",3149,125117,125147) || addDays(e.end, dayDelta, true)), minuteDelta));
        }
(_wrap_setLastFunctionCall("fullcalendar.js",3151,125197,125223) ||         normalizeEvent(e, options));
      }
    }
    function elongateEvents(events, dayDelta, minuteDelta) {
_wrap_addFunctionToMap('fullcalendar.js', 3154, 125257,125611, (typeof arguments === 'object' ? arguments.callee.caller : null));

      minuteDelta = minuteDelta || 0;
      for (var e, len = events.length, i = 0; i < len; i++) {
        e = events[i];
        e.end = (_wrap_setLastFunctionCall("fullcalendar.js",3158,125481,125542) || addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",3158,125492,125528) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",3158,125500,125511) || eventEnd(e)), dayDelta, true)), minuteDelta));
(_wrap_setLastFunctionCall("fullcalendar.js",3159,125560,125586) ||         normalizeEvent(e, options));
      }
    }
  }
  function DayEventRenderer() {
_wrap_addFunctionToMap('fullcalendar.js', 3163, 125622,141572, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.renderDaySegs = renderDaySegs;
    t.resizableDayEvent = resizableDayEvent;
    var opt = t.opt;
    var trigger = t.trigger;
    var isEventDraggable = t.isEventDraggable;
    var isEventResizable = t.isEventResizable;
    var eventEnd = t.eventEnd;
    var reportEventElement = t.reportEventElement;
    var showEvents = t.showEvents;
    var hideEvents = t.hideEvents;
    var eventResize = t.eventResize;
    var getRowCnt = t.getRowCnt;
    var getColCnt = t.getColCnt;
    var getColWidth = t.getColWidth;
    var allDayRow = t.allDayRow;
    var allDayBounds = t.allDayBounds;
    var colContentLeft = t.colContentLeft;
    var colContentRight = t.colContentRight;
    var dayOfWeekCol = t.dayOfWeekCol;
    var dateCell = t.dateCell;
    var compileDaySegs = t.compileDaySegs;
    var getDaySegmentContainer = t.getDaySegmentContainer;
    var bindDaySeg = t.bindDaySeg;
    var formatDates = t.calendar.formatDates;
    var renderDayOverlay = t.renderDayOverlay;
    var clearOverlays = t.clearOverlays;
    var clearSelection = t.clearSelection;
    function renderDaySegs(segs, modifiedEventId) {
_wrap_addFunctionToMap('fullcalendar.js', 3192, 126852,128417, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var segmentContainer = (_wrap_setLastFunctionCall("fullcalendar.js",3193,126935,126959) || getDaySegmentContainer());
      var rowDivs;
      var rowCnt = (_wrap_setLastFunctionCall("fullcalendar.js",3195,127011,127022) || getRowCnt());
      var colCnt = (_wrap_setLastFunctionCall("fullcalendar.js",3196,127049,127060) || getColCnt());
      var i = 0;
      var rowI;
      var levelI;
      var colHeights;
      var j;
      var segCnt = segs.length;
      var seg;
      var top;
      var k;
      segmentContainer[0].innerHTML = (_wrap_setLastFunctionCall("fullcalendar.js",3206,127321,127337) || daySegHTML(segs));
(_wrap_setLastFunctionCall("fullcalendar.js",3207,127351,127406) ||       daySegElementResolve(segs, (_wrap_setLastFunctionCall("fullcalendar.js",3207,127378,127405) || segmentContainer.children())));
(_wrap_setLastFunctionCall("fullcalendar.js",3208,127420,127445) ||       daySegElementReport(segs));
(_wrap_setLastFunctionCall("fullcalendar.js",3209,127459,127514) ||       daySegHandlers(segs, segmentContainer, modifiedEventId));
(_wrap_setLastFunctionCall("fullcalendar.js",3210,127528,127550) ||       daySegCalcHSides(segs));
(_wrap_setLastFunctionCall("fullcalendar.js",3211,127564,127585) ||       daySegSetWidths(segs));
(_wrap_setLastFunctionCall("fullcalendar.js",3212,127599,127622) ||       daySegCalcHeights(segs));
      rowDivs = (_wrap_setLastFunctionCall("fullcalendar.js",3213,127646,127658) || getRowDivs());
      for (rowI = 0; rowI < rowCnt; rowI++) {
        levelI = 0;
        colHeights = [];
        for (j = 0; j < colCnt; j++) {
          colHeights[j] = 0;
        }
        while (i < segCnt && (seg = segs[i]).row == rowI) {
          top = (_wrap_setLastFunctionCall("fullcalendar.js",3221,127971,128023) || arrayMax((_wrap_setLastFunctionCall("fullcalendar.js",3221,127980,128022) || colHeights.slice(seg.startCol, seg.endCol))));
          seg.top = top;
          top += seg.outerHeight;
          for (k = seg.startCol; k < seg.endCol; k++) {
            colHeights[k] = top;
          }
          i++;
        }
(_wrap_setLastFunctionCall("fullcalendar.js",3229,128296,128338) ||         rowDivs[rowI].height((_wrap_setLastFunctionCall("fullcalendar.js",3229,128317,128337) || arrayMax(colHeights))));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",3231,128366,128406) ||       daySegSetTops(segs, (_wrap_setLastFunctionCall("fullcalendar.js",3231,128386,128405) || getRowTops(rowDivs))));
    }
    function renderTempDaySegs(segs, adjustRow, adjustTop) {
_wrap_addFunctionToMap('fullcalendar.js', 3233, 128426,129463, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var tempContainer = (_wrap_setLastFunctionCall("fullcalendar.js",3234,128515,128526) || $('<div/>'));
      var elements;
      var segmentContainer = (_wrap_setLastFunctionCall("fullcalendar.js",3236,128589,128613) || getDaySegmentContainer());
      var i;
      var segCnt = segs.length;
      var element;
      tempContainer[0].innerHTML = (_wrap_setLastFunctionCall("fullcalendar.js",3240,128738,128754) || daySegHTML(segs));
      elements = (_wrap_setLastFunctionCall("fullcalendar.js",3241,128779,128803) || tempContainer.children());
(_wrap_setLastFunctionCall("fullcalendar.js",3242,128817,128850) ||       segmentContainer.append(elements));
(_wrap_setLastFunctionCall("fullcalendar.js",3243,128864,128900) ||       daySegElementResolve(segs, elements));
(_wrap_setLastFunctionCall("fullcalendar.js",3244,128914,128936) ||       daySegCalcHSides(segs));
(_wrap_setLastFunctionCall("fullcalendar.js",3245,128950,128971) ||       daySegSetWidths(segs));
(_wrap_setLastFunctionCall("fullcalendar.js",3246,128985,129008) ||       daySegCalcHeights(segs));
(_wrap_setLastFunctionCall("fullcalendar.js",3247,129022,129067) ||       daySegSetTops(segs, (_wrap_setLastFunctionCall("fullcalendar.js",3247,129042,129066) || getRowTops((_wrap_setLastFunctionCall("fullcalendar.js",3247,129053,129065) || getRowDivs())))));
      elements = [];
      for (i = 0; i < segCnt; i++) {
        element = segs[i].element;
        if (element) {
          if (segs[i].row === adjustRow) {
(_wrap_setLastFunctionCall("fullcalendar.js",3253,129290,129319) ||             element.css('top', adjustTop));
          }
(_wrap_setLastFunctionCall("fullcalendar.js",3255,129363,129388) ||           elements.push(element[0]));
        }
      }
      return (_wrap_setLastFunctionCall("fullcalendar.js",3258,129441,129452) || $(elements));
    }
    function daySegHTML(segs) {
_wrap_addFunctionToMap('fullcalendar.js', 3260, 129472,132946, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var rtl = (_wrap_setLastFunctionCall("fullcalendar.js",3261,129522,129534) || opt('isRTL'));
      var i;
      var segCnt = segs.length;
      var seg;
      var event;
      var url;
      var classes;
      var bounds = (_wrap_setLastFunctionCall("fullcalendar.js",3268,129708,129722) || allDayBounds());
      var minLeft = bounds.left;
      var maxLeft = bounds.right;
      var leftCol;
      var rightCol;
      var left;
      var right;
      var skinCss;
      var html = '';
      for (i = 0; i < segCnt; i++) {
        seg = segs[i];
        event = seg.event;
        classes = ['fc-event', 'fc-event-skin', 'fc-event-hori'];
        if ((_wrap_setLastFunctionCall("fullcalendar.js",3285,130232,130255) || isEventDraggable(event))) {
(_wrap_setLastFunctionCall("fullcalendar.js",3286,130279,130313) ||           classes.push('fc-event-draggable'));
        }
        if (rtl) {
          if (seg.isStart) {
(_wrap_setLastFunctionCall("fullcalendar.js",3290,130423,130454) ||             classes.push('fc-corner-right'));
          }
          if (seg.isEnd) {
(_wrap_setLastFunctionCall("fullcalendar.js",3293,130539,130569) ||             classes.push('fc-corner-left'));
          }
          leftCol = (_wrap_setLastFunctionCall("fullcalendar.js",3295,130623,130657) || dayOfWeekCol((_wrap_setLastFunctionCall("fullcalendar.js",3295,130636,130652) || seg.end.getDay()) - 1));
          rightCol = (_wrap_setLastFunctionCall("fullcalendar.js",3296,130690,130722) || dayOfWeekCol((_wrap_setLastFunctionCall("fullcalendar.js",3296,130703,130721) || seg.start.getDay())));
          left = seg.isEnd ? (_wrap_setLastFunctionCall("fullcalendar.js",3297,130763,130786) || colContentLeft(leftCol)) : minLeft;
          right = seg.isStart ? (_wrap_setLastFunctionCall("fullcalendar.js",3298,130840,130865) || colContentRight(rightCol)) : maxLeft;
        } else {
          if (seg.isStart) {
(_wrap_setLastFunctionCall("fullcalendar.js",3301,130965,130995) ||             classes.push('fc-corner-left'));
          }
          if (seg.isEnd) {
(_wrap_setLastFunctionCall("fullcalendar.js",3304,131080,131111) ||             classes.push('fc-corner-right'));
          }
          leftCol = (_wrap_setLastFunctionCall("fullcalendar.js",3306,131165,131197) || dayOfWeekCol((_wrap_setLastFunctionCall("fullcalendar.js",3306,131178,131196) || seg.start.getDay())));
          rightCol = (_wrap_setLastFunctionCall("fullcalendar.js",3307,131230,131264) || dayOfWeekCol((_wrap_setLastFunctionCall("fullcalendar.js",3307,131243,131259) || seg.end.getDay()) - 1));
          left = seg.isStart ? (_wrap_setLastFunctionCall("fullcalendar.js",3308,131307,131330) || colContentLeft(leftCol)) : minLeft;
          right = seg.isEnd ? (_wrap_setLastFunctionCall("fullcalendar.js",3309,131382,131407) || colContentRight(rightCol)) : maxLeft;
        }
        classes = (_wrap_setLastFunctionCall("fullcalendar.js",3311,131463,131494) || classes.concat(event.className));
        if (event.source) {
          classes = (_wrap_setLastFunctionCall("fullcalendar.js",3313,131562,131606) || classes.concat(event.source.className || []));
        }
        url = event.url;
        skinCss = (_wrap_setLastFunctionCall("fullcalendar.js",3316,131685,131707) || getSkinCss(event, opt));
        if (url) {
          html += '<a href=\'' + (_wrap_setLastFunctionCall("fullcalendar.js",3318,131779,131794) || htmlEscape(url)) + '\'';
        } else {
          html += '<div';
        }
        html += ' class=\'' + (_wrap_setLastFunctionCall("fullcalendar.js",3322,131920,131937) || classes.join(' ')) + '\'' + ' style=\'position:absolute;z-index:8;left:' + left + 'px;' + skinCss + '\'' + '>' + '<div' + ' class=\'fc-event-inner fc-event-skin\'' + (skinCss ? ' style=\'' + skinCss + '\'' : '') + '>';
        if (!event.allDay && seg.isStart) {
          html += '<span class=\'fc-event-time\'>' + (_wrap_setLastFunctionCall("fullcalendar.js",3324,132253,132319) || htmlEscape((_wrap_setLastFunctionCall("fullcalendar.js",3324,132264,132318) || formatDates(event.start, event.end, (_wrap_setLastFunctionCall("fullcalendar.js",3324,132300,132317) || opt('timeFormat')))))) + '</span>';
        }
        html += '<span class=\'fc-event-title\'>' + (_wrap_setLastFunctionCall("fullcalendar.js",3326,132411,132434) || htmlEscape(event.title)) + '</span>' + '</div>';
        if (seg.isEnd && (_wrap_setLastFunctionCall("fullcalendar.js",3327,132492,132515) || isEventResizable(event))) {
          html += '<div class=\'ui-resizable-handle ui-resizable-' + (rtl ? 'w' : 'e') + '\'>' + '&nbsp;&nbsp;&nbsp;' + '</div>';
        }
        html += '</' + (url ? 'a' : 'div') + '>';
        seg.left = left;
        seg.outerWidth = right - left;
        seg.startCol = leftCol;
        seg.endCol = rightCol + 1;
      }
      return html;
    }
    function daySegElementResolve(segs, elements) {
_wrap_addFunctionToMap('fullcalendar.js', 3338, 132955,133939, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i;
      var segCnt = segs.length;
      var seg;
      var event;
      var element;
      var triggerRes;
      for (i = 0; i < segCnt; i++) {
        seg = segs[i];
        event = seg.event;
        element = (_wrap_setLastFunctionCall("fullcalendar.js",3348,133292,133306) || $(elements[i]));
        triggerRes = (_wrap_setLastFunctionCall("fullcalendar.js",3349,133337,133382) || trigger('eventRender', event, event, element));
        if (triggerRes === false) {
(_wrap_setLastFunctionCall("fullcalendar.js",3351,133448,133464) ||           element.remove());
        } else {
          if (triggerRes && triggerRes !== true) {
            triggerRes = (_wrap_setLastFunctionCall("fullcalendar.js",3354,133589,133728) || (_wrap_setLastFunctionCall("fullcalendar.js",3354,133589,133602) || $(triggerRes)).css({position: 'absolute', left: seg.left}));
(_wrap_setLastFunctionCall("fullcalendar.js",3358,133754,133785) ||             element.replaceWith(triggerRes));
            element = triggerRes;
          }
          seg.element = element;
        }
      }
    }
    function daySegElementReport(segs) {
_wrap_addFunctionToMap('fullcalendar.js', 3365, 133948,134333, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i;
      var segCnt = segs.length;
      var seg;
      var element;
      for (i = 0; i < segCnt; i++) {
        seg = segs[i];
        element = seg.element;
        if (element) {
(_wrap_setLastFunctionCall("fullcalendar.js",3374,134252,134290) ||           reportEventElement(seg.event, element));
        }
      }
    }
    function daySegHandlers(segs, segmentContainer, modifiedEventId) {
_wrap_addFunctionToMap('fullcalendar.js', 3378, 134342,135030, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i;
      var segCnt = segs.length;
      var seg;
      var element;
      var event;
      for (i = 0; i < segCnt; i++) {
        seg = segs[i];
        element = seg.element;
        if (element) {
          event = seg.event;
          if (event._id === modifiedEventId) {
(_wrap_setLastFunctionCall("fullcalendar.js",3390,134799,134830) ||             bindDaySeg(event, element, seg));
          } else {
            element[0]._fci = i;
          }
        }
      }
(_wrap_setLastFunctionCall("fullcalendar.js",3396,134972,135019) ||       lazySegBind(segmentContainer, segs, bindDaySeg));
    }
    function daySegCalcHSides(segs) {
_wrap_addFunctionToMap('fullcalendar.js', 3398, 135039,135695, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i;
      var segCnt = segs.length;
      var seg;
      var element;
      var key, val;
      var hsideCache = {};
      for (i = 0; i < segCnt; i++) {
        seg = segs[i];
        element = seg.element;
        if (element) {
          key = seg.key = (_wrap_setLastFunctionCall("fullcalendar.js",3409,135415,135433) || cssKey(element[0]));
          val = hsideCache[key];
          if (val === undefined) {
            val = hsideCache[key] = (_wrap_setLastFunctionCall("fullcalendar.js",3412,135571,135592) || hsides(element, true));
          }
          seg.hsides = val;
        }
      }
    }
    function daySegSetWidths(segs) {
_wrap_addFunctionToMap('fullcalendar.js', 3418, 135704,136119, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i;
      var segCnt = segs.length;
      var seg;
      var element;
      for (i = 0; i < segCnt; i++) {
        seg = segs[i];
        element = seg.element;
        if (element) {
          element[0].style.width = (_wrap_setLastFunctionCall("fullcalendar.js",3427,136029,136069) || Math.max(0, seg.outerWidth - seg.hsides)) + 'px';
        }
      }
    }
    function daySegCalcHeights(segs) {
_wrap_addFunctionToMap('fullcalendar.js', 3431, 136128,136797, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i;
      var segCnt = segs.length;
      var seg;
      var element;
      var key, val;
      var vmarginCache = {};
      for (i = 0; i < segCnt; i++) {
        seg = segs[i];
        element = seg.element;
        if (element) {
          key = seg.key;
          val = vmarginCache[key];
          if (val === undefined) {
            val = vmarginCache[key] = (_wrap_setLastFunctionCall("fullcalendar.js",3445,136646,136663) || vmargins(element));
          }
          seg.outerHeight = element[0].offsetHeight + val;
        }
      }
    }
    function getRowDivs() {
_wrap_addFunctionToMap('fullcalendar.js', 3451, 136806,137096, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i;
      var rowCnt = (_wrap_setLastFunctionCall("fullcalendar.js",3453,136874,136885) || getRowCnt());
      var rowDivs = [];
      for (i = 0; i < rowCnt; i++) {
        rowDivs[i] = (_wrap_setLastFunctionCall("fullcalendar.js",3456,136989,137043) || (_wrap_setLastFunctionCall("fullcalendar.js",3456,136989,137001) || allDayRow(i)).find('td:first div.fc-day-content > div'));
      }
      return rowDivs;
    }
    function getRowTops(rowDivs) {
_wrap_addFunctionToMap('fullcalendar.js', 3460, 137105,137365, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i;
      var rowCnt = rowDivs.length;
      var tops = [];
      for (i = 0; i < rowCnt; i++) {
        tops[i] = rowDivs[i][0].offsetTop;
      }
      return tops;
    }
    function daySegSetTops(segs, rowTops) {
_wrap_addFunctionToMap('fullcalendar.js', 3469, 137374,137921, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i;
      var segCnt = segs.length;
      var seg;
      var element;
      var event;
      for (i = 0; i < segCnt; i++) {
        seg = segs[i];
        element = seg.element;
        if (element) {
          element[0].style.top = rowTops[seg.row] + (seg.top || 0) + 'px';
          event = seg.event;
(_wrap_setLastFunctionCall("fullcalendar.js",3481,137828,137878) ||           trigger('eventAfterRender', event, event, element));
        }
      }
    }
    function resizableDayEvent(event, element, seg) {
_wrap_addFunctionToMap('fullcalendar.js', 3485, 137930,141566, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var rtl = (_wrap_setLastFunctionCall("fullcalendar.js",3486,138002,138014) || opt('isRTL'));
      var direction = rtl ? 'w' : 'e';
      var handle = (_wrap_setLastFunctionCall("fullcalendar.js",3488,138086,138131) || element.find('div.ui-resizable-' + direction));
      var isResizing = false;
(_wrap_setLastFunctionCall("fullcalendar.js",3490,138181,138210) ||       disableTextSelection(element));
(_wrap_setLastFunctionCall("fullcalendar.js",3493,138224,138490) ||       (_wrap_setLastFunctionCall("fullcalendar.js",3491,138224,138309) || element.mousedown(function(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3491, 138242,138308, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3492,138274,138293) ||   ev.preventDefault());
})).click(function(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3493, 138316,138489, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (isResizing) {
(_wrap_setLastFunctionCall("fullcalendar.js",3495,138386,138405) ||     ev.preventDefault());
(_wrap_setLastFunctionCall("fullcalendar.js",3496,138427,138456) ||     ev.stopImmediatePropagation());
  }
}));
(_wrap_setLastFunctionCall("fullcalendar.js",3499,138504,141555) ||       handle.mousedown(function(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3499, 138521,141554, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (ev.which != 1) {
    return;
  }
  isResizing = true;
  var hoverListener = (_wrap_setLastFunctionCall("fullcalendar.js",3504,138691,138711) || t.getHoverListener());
  var rowCnt = (_wrap_setLastFunctionCall("fullcalendar.js",3505,138742,138753) || getRowCnt());
  var colCnt = (_wrap_setLastFunctionCall("fullcalendar.js",3506,138784,138795) || getColCnt());
  var dis = rtl ? -1 : 1;
  var dit = rtl ? colCnt - 1 : 0;
  var elementTop = (_wrap_setLastFunctionCall("fullcalendar.js",3509,138918,138936) || element.css('top'));
  var dayDelta;
  var helpers;
  var eventCopy = (_wrap_setLastFunctionCall("fullcalendar.js",3512,139029,139048) || $.extend({}, event));
  var minCell = (_wrap_setLastFunctionCall("fullcalendar.js",3513,139080,139101) || dateCell(event.start));
(_wrap_setLastFunctionCall("fullcalendar.js",3514,139119,139135) ||   clearSelection());
(_wrap_setLastFunctionCall("fullcalendar.js",3515,139153,139223) ||   (_wrap_setLastFunctionCall("fullcalendar.js",3515,139153,139199) || (_wrap_setLastFunctionCall("fullcalendar.js",3515,139153,139162) || $('body')).css('cursor', direction + '-resize')).one('mouseup', mouseup));
(_wrap_setLastFunctionCall("fullcalendar.js",3516,139241,139285) ||   trigger('eventResizeStart', this, event, ev));
(_wrap_setLastFunctionCall("fullcalendar.js",3517,139303,141048) ||   hoverListener.start(function(cell, origCell) {
_wrap_addFunctionToMap('fullcalendar.js', 3517, 139323,141043, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (cell) {
    var r = (_wrap_setLastFunctionCall("fullcalendar.js",3519,139415,139446) || Math.max(minCell.row, cell.row));
    var c = cell.col;
    if (rowCnt == 1) {
      r = 0;
    }
    if (r == minCell.row) {
      if (rtl) {
        c = (_wrap_setLastFunctionCall("fullcalendar.js",3526,139717,139741) || Math.min(minCell.col, c));
      } else {
        c = (_wrap_setLastFunctionCall("fullcalendar.js",3528,139816,139840) || Math.max(minCell.col, c));
      }
    }
    dayDelta = r * 7 + c * dis + dit - (origCell.row * 7 + origCell.col * dis + dit);
    var newEnd = (_wrap_setLastFunctionCall("fullcalendar.js",3532,140041,140081) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",3532,140049,140064) || eventEnd(event)), dayDelta, true));
    if (dayDelta) {
      eventCopy.end = newEnd;
      var oldHelpers = helpers;
      helpers = (_wrap_setLastFunctionCall("fullcalendar.js",3536,140267,140334) || renderTempDaySegs((_wrap_setLastFunctionCall("fullcalendar.js",3536,140285,140312) || compileDaySegs([eventCopy])), seg.row, elementTop));
(_wrap_setLastFunctionCall("fullcalendar.js",3537,140364,140418) ||       (_wrap_setLastFunctionCall("fullcalendar.js",3537,140364,140381) || helpers.find('*')).css('cursor', direction + '-resize'));
      if (oldHelpers) {
(_wrap_setLastFunctionCall("fullcalendar.js",3539,140498,140517) ||         oldHelpers.remove());
      }
(_wrap_setLastFunctionCall("fullcalendar.js",3541,140577,140594) ||       hideEvents(event));
    } else {
      if (helpers) {
(_wrap_setLastFunctionCall("fullcalendar.js",3544,140704,140721) ||         showEvents(event));
(_wrap_setLastFunctionCall("fullcalendar.js",3545,140755,140771) ||         helpers.remove());
        helpers = null;
      }
    }
(_wrap_setLastFunctionCall("fullcalendar.js",3549,140901,140916) ||     clearOverlays());
(_wrap_setLastFunctionCall("fullcalendar.js",3550,140942,141002) ||     renderDayOverlay(event.start, (_wrap_setLastFunctionCall("fullcalendar.js",3550,140972,141001) || addDays((_wrap_setLastFunctionCall("fullcalendar.js",3550,140980,140997) || cloneDate(newEnd)), 1))));
  }
}, ev));
  function mouseup(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3553, 141066,141540, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3554,141109,141152) ||     trigger('eventResizeStop', this, event, ev));
(_wrap_setLastFunctionCall("fullcalendar.js",3555,141174,141201) ||     (_wrap_setLastFunctionCall("fullcalendar.js",3555,141174,141183) || $('body')).css('cursor', ''));
(_wrap_setLastFunctionCall("fullcalendar.js",3556,141223,141243) ||     hoverListener.stop());
(_wrap_setLastFunctionCall("fullcalendar.js",3557,141265,141280) ||     clearOverlays());
    if (dayDelta) {
(_wrap_setLastFunctionCall("fullcalendar.js",3559,141342,141383) ||       eventResize(this, event, dayDelta, 0, ev));
    }
(_wrap_setLastFunctionCall("fullcalendar.js",3561,141427,141521) ||     setTimeout(function() {
_wrap_addFunctionToMap('fullcalendar.js', 3561, 141438,141517, (typeof arguments === 'object' ? arguments.callee.caller : null));

  isResizing = false;
}, 0));
  }
}));
    }
  }
  function SelectionManager() {
_wrap_addFunctionToMap('fullcalendar.js', 3568, 141577,144404, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.select = select;
    t.unselect = unselect;
    t.reportSelection = reportSelection;
    t.daySelectionMousedown = daySelectionMousedown;
    var opt = t.opt;
    var trigger = t.trigger;
    var defaultSelectionEnd = t.defaultSelectionEnd;
    var renderSelection = t.renderSelection;
    var clearSelection = t.clearSelection;
    var selected = false;
    if ((_wrap_setLastFunctionCall("fullcalendar.js",3580,142042,142059) || opt('selectable')) && (_wrap_setLastFunctionCall("fullcalendar.js",3580,142063,142082) || opt('unselectAuto'))) {
(_wrap_setLastFunctionCall("fullcalendar.js",3581,142098,142397) ||       (_wrap_setLastFunctionCall("fullcalendar.js",3581,142098,142109) || $(document)).mousedown(function(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3581, 142120,142396, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var ignore = (_wrap_setLastFunctionCall("fullcalendar.js",3582,142165,142186) || opt('unselectCancel'));
  if (ignore) {
    if ((_wrap_setLastFunctionCall("fullcalendar.js",3584,142242,142270) || (_wrap_setLastFunctionCall("fullcalendar.js",3584,142242,142254) || $(ev.target)).parents(ignore)).length) {
      return;
    }
  }
(_wrap_setLastFunctionCall("fullcalendar.js",3588,142369,142381) ||   unselect(ev));
}));
    }
    function select(startDate, endDate, allDay) {
_wrap_addFunctionToMap('fullcalendar.js', 3591, 142417,142718, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3592,142475,142485) ||       unselect());
      if (!endDate) {
        endDate = (_wrap_setLastFunctionCall("fullcalendar.js",3594,142541,142579) || defaultSelectionEnd(startDate, allDay));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",3596,142607,142650) ||       renderSelection(startDate, endDate, allDay));
(_wrap_setLastFunctionCall("fullcalendar.js",3597,142664,142707) ||       reportSelection(startDate, endDate, allDay));
    }
    function unselect(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3599, 142727,142917, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (selected) {
        selected = false;
(_wrap_setLastFunctionCall("fullcalendar.js",3602,142829,142845) ||         clearSelection());
(_wrap_setLastFunctionCall("fullcalendar.js",3603,142863,142892) ||         trigger('unselect', null, ev));
      }
    }
    function reportSelection(startDate, endDate, allDay, ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3606, 142926,143092, (typeof arguments === 'object' ? arguments.callee.caller : null));

      selected = true;
(_wrap_setLastFunctionCall("fullcalendar.js",3608,143026,143081) ||       trigger('select', null, startDate, endDate, allDay, ev));
    }
    function daySelectionMousedown(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3610, 143101,144398, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var cellDate = t.cellDate;
      var cellIsAllDay = t.cellIsAllDay;
      var hoverListener = (_wrap_setLastFunctionCall("fullcalendar.js",3613,143256,143276) || t.getHoverListener());
      var reportDayClick = t.reportDayClick;
      if (ev.which == 1 && (_wrap_setLastFunctionCall("fullcalendar.js",3615,143362,143379) || opt('selectable'))) {
(_wrap_setLastFunctionCall("fullcalendar.js",3616,143399,143411) ||         unselect(ev));
        var _mousedownElement = this;
        var dates;
(_wrap_setLastFunctionCall("fullcalendar.js",3619,143502,143982) ||         hoverListener.start(function(cell, origCell) {
_wrap_addFunctionToMap('fullcalendar.js', 3619, 143522,143977, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3620,143570,143586) ||   clearSelection());
  if (cell && (_wrap_setLastFunctionCall("fullcalendar.js",3621,143620,143638) || cellIsAllDay(cell))) {
    dates = (_wrap_setLastFunctionCall("fullcalendar.js",3625,143674,143802) || [(_wrap_setLastFunctionCall("fullcalendar.js",3623,143704,143722) || cellDate(origCell)), (_wrap_setLastFunctionCall("fullcalendar.js",3624,143752,143766) || cellDate(cell))].sort(cmp));
(_wrap_setLastFunctionCall("fullcalendar.js",3626,143828,143869) ||     renderSelection(dates[0], dates[1], true));
  } else {
    dates = null;
  }
}, ev));
(_wrap_setLastFunctionCall("fullcalendar.js",3631,144000,144373) ||         (_wrap_setLastFunctionCall("fullcalendar.js",3631,144000,144011) || $(document)).one('mouseup', function(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3631, 144027,144372, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3632,144063,144083) ||   hoverListener.stop());
  if (dates) {
    if (+dates[0] == +dates[1]) {
(_wrap_setLastFunctionCall("fullcalendar.js",3635,144200,144234) ||       reportDayClick(dates[0], true, ev));
    }
(_wrap_setLastFunctionCall("fullcalendar.js",3637,144286,144331) ||     reportSelection(dates[0], dates[1], true, ev));
  }
}));
      }
    }
  }
  function OverlayManager() {
_wrap_addFunctionToMap('fullcalendar.js', 3643, 144409,145196, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.renderOverlay = renderOverlay;
    t.clearOverlays = clearOverlays;
    var usedOverlays = [];
    var unusedOverlays = [];
    function renderOverlay(rect, parent) {
_wrap_addFunctionToMap('fullcalendar.js', 3649, 144613,145009, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var e = (_wrap_setLastFunctionCall("fullcalendar.js",3650,144672,144694) || unusedOverlays.shift());
      if (!e) {
        e = (_wrap_setLastFunctionCall("fullcalendar.js",3652,144738,144813) || $('<div class=\'fc-cell-overlay\' style=\'position:absolute;z-index:3\'/>'));
      }
      if (e[0].parentNode != parent[0]) {
(_wrap_setLastFunctionCall("fullcalendar.js",3655,144893,144911) ||         e.appendTo(parent));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",3657,144939,144976) ||       usedOverlays.push((_wrap_setLastFunctionCall("fullcalendar.js",3657,144957,144975) || (_wrap_setLastFunctionCall("fullcalendar.js",3657,144957,144968) || e.css(rect)).show())));
      return e;
    }
    function clearOverlays() {
_wrap_addFunctionToMap('fullcalendar.js', 3660, 145018,145190, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var e;
      while (e = (_wrap_setLastFunctionCall("fullcalendar.js",3662,145087,145107) || usedOverlays.shift())) {
(_wrap_setLastFunctionCall("fullcalendar.js",3663,145127,145165) ||         unusedOverlays.push((_wrap_setLastFunctionCall("fullcalendar.js",3663,145147,145164) || (_wrap_setLastFunctionCall("fullcalendar.js",3663,145147,145155) || e.hide()).unbind())));
      }
    }
  }
  function CoordinateGrid(buildFunc) {
_wrap_addFunctionToMap('fullcalendar.js', 3667, 145201,146435, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    var rows;
    var cols;
    t.build = function() {
_wrap_addFunctionToMap('fullcalendar.js', 3671, 145314,145418, (typeof arguments === 'object' ? arguments.callee.caller : null));

  rows = [];
  cols = [];
(_wrap_setLastFunctionCall("fullcalendar.js",3674,145386,145407) ||   buildFunc(rows, cols));
};
    t.cell = function(x, y) {
_wrap_addFunctionToMap('fullcalendar.js', 3676, 145437,146056, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var rowCnt = rows.length;
  var colCnt = cols.length;
  var i, r = -1, c = -1;
  for (i = 0; i < rowCnt; i++) {
    if (y >= rows[i][0] && y < rows[i][1]) {
      r = i;
      break;
    }
  }
  for (i = 0; i < colCnt; i++) {
    if (x >= cols[i][0] && x < cols[i][1]) {
      c = i;
      break;
    }
  }
  return r >= 0 && c >= 0 ? {row: r, col: c} : null;
};
    t.rect = function(row0, col0, row1, col1, originElement) {
_wrap_addFunctionToMap('fullcalendar.js', 3697, 146075,146428, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var origin = (_wrap_setLastFunctionCall("fullcalendar.js",3698,146151,146173) || originElement.offset());
  return {top: rows[row0][0] - origin.top, left: cols[col0][0] - origin.left, width: cols[col1][1] - cols[col0][0], height: rows[row1][1] - rows[row0][0]};
};
  }
  function HoverListener(coordinateGrid) {
_wrap_addFunctionToMap('fullcalendar.js', 3707, 146440,147612, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    var bindType;
    var change;
    var firstCell;
    var cell;
    t.start = function(_change, ev, _bindType) {
_wrap_addFunctionToMap('fullcalendar.js', 3713, 146604,146871, (typeof arguments === 'object' ? arguments.callee.caller : null));

  change = _change;
  firstCell = cell = null;
(_wrap_setLastFunctionCall("fullcalendar.js",3716,146719,146741) ||   coordinateGrid.build());
(_wrap_setLastFunctionCall("fullcalendar.js",3717,146755,146764) ||   mouse(ev));
  bindType = _bindType || 'mousemove';
(_wrap_setLastFunctionCall("fullcalendar.js",3719,146827,146860) ||   (_wrap_setLastFunctionCall("fullcalendar.js",3719,146827,146838) || $(document)).bind(bindType, mouse));
};
    function mouse(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3721, 146881,147490, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3722,146914,146929) ||       _fixUIEvent(ev));
      var newCell = (_wrap_setLastFunctionCall("fullcalendar.js",3723,146957,146996) || coordinateGrid.cell(ev.pageX, ev.pageY));
      if (!newCell != !cell || newCell && (newCell.row != cell.row || newCell.col != cell.col)) {
        if (newCell) {
          if (!firstCell) {
            firstCell = newCell;
          }
(_wrap_setLastFunctionCall("fullcalendar.js",3729,147258,147342) ||           change(newCell, firstCell, newCell.row - firstCell.row, newCell.col - firstCell.col));
        } else {
(_wrap_setLastFunctionCall("fullcalendar.js",3731,147389,147415) ||           change(newCell, firstCell));
        }
        cell = newCell;
      }
    }
    t.stop = function() {
_wrap_addFunctionToMap('fullcalendar.js', 3736, 147508,147605, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3737,147534,147569) ||   (_wrap_setLastFunctionCall("fullcalendar.js",3737,147534,147545) || $(document)).unbind(bindType, mouse));
  return cell;
};
  }
  function _fixUIEvent(event) {
_wrap_addFunctionToMap('fullcalendar.js', 3741, 147617,147809, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (event.pageX === undefined) {
      event.pageX = event.originalEvent.pageX;
      event.pageY = event.originalEvent.pageY;
    }
  }
  function HorizontalPositionCache(getElement) {
_wrap_addFunctionToMap('fullcalendar.js', 3747, 147814,148414, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this, elements = {}, lefts = {}, rights = {};
    function e(i) {
_wrap_addFunctionToMap('fullcalendar.js', 3749, 147931,148019, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return elements[i] = elements[i] || (_wrap_setLastFunctionCall("fullcalendar.js",3750,147995,148008) || getElement(i));
    }
    t.left = function(i) {
_wrap_addFunctionToMap('fullcalendar.js', 3752, 148037,148149, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return lefts[i] = lefts[i] === undefined ? (_wrap_setLastFunctionCall("fullcalendar.js",3753,148107,148122) || (_wrap_setLastFunctionCall("fullcalendar.js",3753,148107,148111) || e(i)).position()).left : lefts[i];
};
    t.right = function(i) {
_wrap_addFunctionToMap('fullcalendar.js', 3755, 148169,148288, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return rights[i] = rights[i] === undefined ? (_wrap_setLastFunctionCall("fullcalendar.js",3756,148241,148250) || t.left(i)) + (_wrap_setLastFunctionCall("fullcalendar.js",3756,148253,148265) || (_wrap_setLastFunctionCall("fullcalendar.js",3756,148253,148257) || e(i)).width()) : rights[i];
};
    t.clear = function() {
_wrap_addFunctionToMap('fullcalendar.js', 3758, 148308,148407, (typeof arguments === 'object' ? arguments.callee.caller : null));

  elements = {};
  lefts = {};
  rights = {};
};
  }
}(jQuery)));
