_wrap_staticMeasuredFunctions['fullcalendar.js'] = 375;
_wrap_staticMeasuredCalls['fullcalendar.js'] =1479;
((_wrap_setLastFunctionCall("fullcalendar.js",1,1,115723,null,true,false) || _wrap_popCallStack(function($, undefined) {
_wrap_addFunctionToMap('fullcalendar.js', 1, 1,115715, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var defaults = {defaultView: 'month', aspectRatio: 1.35, header: {left: 'title', center: '', right: 'today prev,next'}, weekends: true, allDayDefault: true, ignoreTimezone: true, lazyFetching: true, startParam: 'start', endParam: 'end', titleFormat: {month: 'MMMM yyyy', week: 'MMM d[ yyyy]{ \'&#8212;\'[ MMM] d yyyy}', day: 'dddd, MMM d, yyyy'}, columnFormat: {month: 'ddd', week: 'ddd M/d', day: 'dddd M/d'}, timeFormat: {'': 'h(:mm)t'}, isRTL: false, firstDay: 0, monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], buttonText: {prev: '&nbsp;&#9668;&nbsp;', next: '&nbsp;&#9658;&nbsp;', prevYear: '&nbsp;&lt;&lt;&nbsp;', nextYear: '&nbsp;&gt;&gt;&nbsp;', today: 'today', month: 'month', week: 'week', day: 'day'}, theme: false, buttonIcons: {prev: 'circle-triangle-w', next: 'circle-triangle-e'}, unselectAuto: true, dropAccept: '*'};
  var rtlDefaults = {header: {left: 'next,prev today', center: '', right: 'title'}, buttonText: {prev: '&nbsp;&#9658;&nbsp;', next: '&nbsp;&#9668;&nbsp;', prevYear: '&nbsp;&gt;&gt;&nbsp;', nextYear: '&nbsp;&lt;&lt;&nbsp;'}, buttonIcons: {prev: 'circle-triangle-e', next: 'circle-triangle-w'}};
  var fc = $.fullCalendar = {version: '1.5.3'};
  var fcViews = fc.views = {};
  $.fn.fullCalendar = function(options) {
_wrap_addFunctionToMap('fullcalendar.js', 6, 1604,2641, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (typeof options == 'string') {
    var args = (_wrap_setLastFunctionCall("fullcalendar.js",8,1675,1715,Array.prototype.slice.call,false,true) || _wrap_popCallStack(Array.prototype.slice.call(arguments, 1)));
    var res;
(_wrap_setLastFunctionCall("fullcalendar.js",10,1734,2046,this.each,false,false) || _wrap_popCallStack(    this.each(function() {
_wrap_addFunctionToMap('fullcalendar.js', 10, 1744,2045, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var calendar = (_wrap_setLastFunctionCall("fullcalendar.js",11,1774,1802,$.data,false,false) || _wrap_popCallStack($.data(this, 'fullCalendar')));
  if (calendar && (_wrap_setLastFunctionCall("fullcalendar.js",12,1822,1853,$.isFunction,false,false) || _wrap_popCallStack($.isFunction(calendar[options])))) {
    var r = (_wrap_setLastFunctionCall("fullcalendar.js",13,1869,1908,calendar[options].apply,false,true) || _wrap_popCallStack(calendar[options].apply(calendar, args)));
    if (res === undefined) {
      res = r;
    }
    if (options == 'destroy') {
(_wrap_setLastFunctionCall("fullcalendar.js",18,1998,2032,$.removeData,false,false) || _wrap_popCallStack(      $.removeData(this, 'fullCalendar')));
    }
  }
})));
    if (res !== undefined) {
      return res;
    }
    return this;
  }
  var eventSources = options.eventSources || [];
  delete options.eventSources;
  if (options.events) {
(_wrap_setLastFunctionCall("fullcalendar.js",30,2230,2263,eventSources.push,false,false) || _wrap_popCallStack(    eventSources.push(options.events)));
    delete options.events;
  }
  options = (_wrap_setLastFunctionCall("fullcalendar.js",33,2308,2428,$.extend,false,false) || _wrap_popCallStack($.extend(true, {}, defaults, options.isRTL || options.isRTL === undefined && defaults.isRTL ? rtlDefaults : {}, options)));
(_wrap_setLastFunctionCall("fullcalendar.js",34,2432,2623,this.each,false,false) || _wrap_popCallStack(  this.each(function(i, _element) {
_wrap_addFunctionToMap('fullcalendar.js', 34, 2442,2622, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var element = (_wrap_setLastFunctionCall("fullcalendar.js",35,2482,2493,$,false,false) || _wrap_popCallStack($(_element)));
  var calendar = (_wrap_setLastFunctionCall("fullcalendar.js",36,2512,2556,Calendar,false,false) || _wrap_popCallStack(new Calendar(element, options, eventSources)));
(_wrap_setLastFunctionCall("fullcalendar.js",37,2560,2598,element.data,false,false) || _wrap_popCallStack(  element.data('fullCalendar', calendar)));
(_wrap_setLastFunctionCall("fullcalendar.js",38,2602,2619,calendar.render,false,false) || _wrap_popCallStack(  calendar.render()));
})));
  return this;
};
  function setDefaults(d) {
_wrap_addFunctionToMap('fullcalendar.js', 42, 2645,2707, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",43,2675,2702,$.extend,false,false) || _wrap_popCallStack(    $.extend(true, defaults, d)));
  }
  function Calendar(element, options, eventSources) {
_wrap_addFunctionToMap('fullcalendar.js', 45, 2710,12482, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
_wrap_addFunctionToMap('fullcalendar.js', 64, 3286,3356, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",65,3320,3353,formatDate,false,false) || _wrap_popCallStack(formatDate(format, date, options)));
};
    t.formatDates = function(format, date1, date2) {
_wrap_addFunctionToMap('fullcalendar.js', 67, 3378,3465, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",68,3420,3462,formatDates,false,false) || _wrap_popCallStack(formatDates(format, date1, date2, options)));
};
    t.getDate = getDate;
    t.getView = getView;
    t.option = option;
    t.trigger = trigger;
(_wrap_setLastFunctionCall("fullcalendar.js",74,3569,3612,EventManager.call,false,true) || _wrap_popCallStack(    EventManager.call(t, options, eventSources)));
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
    var date = (_wrap_setLastFunctionCall("fullcalendar.js",89,3995,4005,Date,false,false) || _wrap_popCallStack(new Date()));
    var events = [];
    var _dragElement;
(_wrap_setLastFunctionCall("fullcalendar.js",92,4054,4109,setYMD,false,false) || _wrap_popCallStack(    setYMD(date, options.year, options.month, options.date)));
    function render(inc) {
_wrap_addFunctionToMap('fullcalendar.js', 93, 4115,4311, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (!content) {
(_wrap_setLastFunctionCall("fullcalendar.js",95,4168,4183,initialRender,false,false) || _wrap_popCallStack(        initialRender()));
      } else {
(_wrap_setLastFunctionCall("fullcalendar.js",97,4208,4218,calcSize,false,false) || _wrap_popCallStack(        calcSize()));
(_wrap_setLastFunctionCall("fullcalendar.js",98,4228,4244,markSizesDirty,false,false) || _wrap_popCallStack(        markSizesDirty()));
(_wrap_setLastFunctionCall("fullcalendar.js",99,4254,4271,markEventsDirty,false,false) || _wrap_popCallStack(        markEventsDirty()));
(_wrap_setLastFunctionCall("fullcalendar.js",100,4281,4296,renderView,false,false) || _wrap_popCallStack(        renderView(inc)));
      }
    }
    function initialRender() {
_wrap_addFunctionToMap('fullcalendar.js', 103, 4316,4948, (typeof arguments === 'object' ? arguments.callee.caller : null));

      tm = options.theme ? 'ui' : 'fc';
(_wrap_setLastFunctionCall("fullcalendar.js",105,4389,4411,element.addClass,false,false) || _wrap_popCallStack(      element.addClass('fc')));
      if (options.isRTL) {
(_wrap_setLastFunctionCall("fullcalendar.js",107,4448,4474,element.addClass,false,false) || _wrap_popCallStack(        element.addClass('fc-rtl')));
      }
      if (options.theme) {
(_wrap_setLastFunctionCall("fullcalendar.js",110,4519,4548,element.addClass,false,false) || _wrap_popCallStack(        element.addClass('ui-widget')));
      }
      content = (_wrap_setLastFunctionCall("fullcalendar.js",112,4574,4653,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",112,4574,4634,$,false,false) || _wrap_popCallStack($('<div class=\'fc-content\' style=\'position:relative\'/>'))).prependTo(element)));
      header = (_wrap_setLastFunctionCall("fullcalendar.js",113,4670,4692,Header,false,false) || _wrap_popCallStack(new Header(t, options)));
      headerElement = (_wrap_setLastFunctionCall("fullcalendar.js",114,4716,4731,header.render,false,false) || _wrap_popCallStack(header.render()));
      if (headerElement) {
(_wrap_setLastFunctionCall("fullcalendar.js",116,4768,4798,element.prepend,false,false) || _wrap_popCallStack(        element.prepend(headerElement)));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",118,4814,4845,changeView,false,false) || _wrap_popCallStack(      changeView(options.defaultView)));
(_wrap_setLastFunctionCall("fullcalendar.js",119,4853,4883,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("fullcalendar.js",119,4853,4862,$,false,false) || _wrap_popCallStack($(window))).resize(windowResize)));
      if (!(_wrap_setLastFunctionCall("fullcalendar.js",120,4896,4909,bodyVisible,false,false) || _wrap_popCallStack(bodyVisible()))) {
(_wrap_setLastFunctionCall("fullcalendar.js",121,4921,4933,lateRender,false,false) || _wrap_popCallStack(        lateRender()));
      }
    }
    function lateRender() {
_wrap_addFunctionToMap('fullcalendar.js', 124, 4953,5086, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",125,4983,5079,setTimeout,false,false) || _wrap_popCallStack(      setTimeout(function() {
_wrap_addFunctionToMap('fullcalendar.js', 125, 4994,5075, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!currentView.start && (_wrap_setLastFunctionCall("fullcalendar.js",126,5035,5048,bodyVisible,false,false) || _wrap_popCallStack(bodyVisible()))) {
(_wrap_setLastFunctionCall("fullcalendar.js",127,5056,5068,renderView,false,false) || _wrap_popCallStack(    renderView()));
  }
}, 0)));
    }
    function destroy() {
_wrap_addFunctionToMap('fullcalendar.js', 131, 5091,5263, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",132,5118,5158,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("fullcalendar.js",132,5118,5127,$,false,false) || _wrap_popCallStack($(window))).unbind('resize', windowResize)));
(_wrap_setLastFunctionCall("fullcalendar.js",133,5166,5182,header.destroy,false,false) || _wrap_popCallStack(      header.destroy()));
(_wrap_setLastFunctionCall("fullcalendar.js",134,5190,5206,content.remove,false,false) || _wrap_popCallStack(      content.remove()));
(_wrap_setLastFunctionCall("fullcalendar.js",135,5214,5256,element.removeClass,false,false) || _wrap_popCallStack(      element.removeClass('fc fc-rtl ui-widget')));
    }
    function elementVisible() {
_wrap_addFunctionToMap('fullcalendar.js', 137, 5268,5342, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return _element.offsetWidth !== 0;
    }
    function bodyVisible() {
_wrap_addFunctionToMap('fullcalendar.js', 140, 5347,5422, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",141,5385,5394,$,false,false) || _wrap_popCallStack($('body')))[0].offsetWidth !== 0;
    }
    function changeView(newViewName) {
_wrap_addFunctionToMap('fullcalendar.js', 143, 5427,6643, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (!currentView || newViewName != currentView.name) {
        ignoreWindowResize++;
(_wrap_setLastFunctionCall("fullcalendar.js",146,5561,5571,unselect,false,false) || _wrap_popCallStack(        unselect()));
        var oldView = currentView;
        var newViewElement;
        if (oldView) {
(_wrap_setLastFunctionCall("fullcalendar.js",150,5669,5699,null,false,false) || _wrap_popCallStack(          (oldView.beforeHide || noop)()));
(_wrap_setLastFunctionCall("fullcalendar.js",151,5711,5750,setMinHeight,false,false) || _wrap_popCallStack(          setMinHeight(content, (_wrap_setLastFunctionCall("fullcalendar.js",151,5733,5749,content.height,false,false) || _wrap_popCallStack(content.height())))));
(_wrap_setLastFunctionCall("fullcalendar.js",152,5762,5784,oldView.element.hide,false,false) || _wrap_popCallStack(          oldView.element.hide()));
        } else {
(_wrap_setLastFunctionCall("fullcalendar.js",154,5813,5837,setMinHeight,false,false) || _wrap_popCallStack(          setMinHeight(content, 1)));
        }
(_wrap_setLastFunctionCall("fullcalendar.js",156,5857,5890,content.css,false,false) || _wrap_popCallStack(        content.css('overflow', 'hidden')));
        currentView = viewInstances[newViewName];
        if (currentView) {
(_wrap_setLastFunctionCall("fullcalendar.js",159,5979,6005,currentView.element.show,false,false) || _wrap_popCallStack(          currentView.element.show()));
        } else {
          currentView = viewInstances[newViewName] = (_wrap_setLastFunctionCall("fullcalendar.js",161,6077,6248,null,false,false) || _wrap_popCallStack(new fcViews[newViewName](newViewElement = absoluteViewElement = (_wrap_setLastFunctionCall("fullcalendar.js",161,6141,6244,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",161,6141,6226,$,false,false) || _wrap_popCallStack($('<div class=\'fc-view fc-view-' + newViewName + '\' style=\'position:absolute\'/>'))).appendTo(content))), t)));
        }
        if (oldView) {
(_wrap_setLastFunctionCall("fullcalendar.js",164,6293,6330,header.deactivateButton,false,false) || _wrap_popCallStack(          header.deactivateButton(oldView.name)));
        }
(_wrap_setLastFunctionCall("fullcalendar.js",166,6350,6384,header.activateButton,false,false) || _wrap_popCallStack(        header.activateButton(newViewName)));
(_wrap_setLastFunctionCall("fullcalendar.js",167,6394,6406,renderView,false,false) || _wrap_popCallStack(        renderView()));
(_wrap_setLastFunctionCall("fullcalendar.js",168,6416,6443,content.css,false,false) || _wrap_popCallStack(        content.css('overflow', '')));
        if (oldView) {
(_wrap_setLastFunctionCall("fullcalendar.js",170,6478,6502,setMinHeight,false,false) || _wrap_popCallStack(          setMinHeight(content, 1)));
        }
        if (!newViewElement) {
(_wrap_setLastFunctionCall("fullcalendar.js",173,6555,6588,null,false,false) || _wrap_popCallStack(          (currentView.afterShow || noop)()));
        }
        ignoreWindowResize--;
      }
    }
    function renderView(inc) {
_wrap_addFunctionToMap('fullcalendar.js', 178, 6648,7864, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if ((_wrap_setLastFunctionCall("fullcalendar.js",179,6685,6701,elementVisible,false,false) || _wrap_popCallStack(elementVisible()))) {
        ignoreWindowResize++;
(_wrap_setLastFunctionCall("fullcalendar.js",181,6743,6753,unselect,false,false) || _wrap_popCallStack(        unselect()));
        if (suggestedViewHeight === undefined) {
(_wrap_setLastFunctionCall("fullcalendar.js",183,6814,6824,calcSize,false,false) || _wrap_popCallStack(          calcSize()));
        }
        var forceEventRender = false;
        if (!currentView.start || inc || date < currentView.start || date >= currentView.end) {
(_wrap_setLastFunctionCall("fullcalendar.js",187,6980,7014,currentView.render,false,false) || _wrap_popCallStack(          currentView.render(date, inc || 0)));
(_wrap_setLastFunctionCall("fullcalendar.js",188,7026,7039,setSize,false,false) || _wrap_popCallStack(          setSize(true)));
          forceEventRender = true;
        } else if (currentView.sizeDirty) {
(_wrap_setLastFunctionCall("fullcalendar.js",191,7130,7155,currentView.clearEvents,false,false) || _wrap_popCallStack(          currentView.clearEvents()));
(_wrap_setLastFunctionCall("fullcalendar.js",192,7167,7176,setSize,false,false) || _wrap_popCallStack(          setSize()));
          forceEventRender = true;
        } else if (currentView.eventsDirty) {
(_wrap_setLastFunctionCall("fullcalendar.js",195,7269,7294,currentView.clearEvents,false,false) || _wrap_popCallStack(          currentView.clearEvents()));
          forceEventRender = true;
        }
        currentView.sizeDirty = false;
        currentView.eventsDirty = false;
(_wrap_setLastFunctionCall("fullcalendar.js",200,7429,7459,updateEvents,false,false) || _wrap_popCallStack(        updateEvents(forceEventRender)));
        elementOuterWidth = (_wrap_setLastFunctionCall("fullcalendar.js",201,7489,7509,element.outerWidth,false,false) || _wrap_popCallStack(element.outerWidth()));
(_wrap_setLastFunctionCall("fullcalendar.js",202,7519,7556,header.updateTitle,false,false) || _wrap_popCallStack(        header.updateTitle(currentView.title)));
        var today = (_wrap_setLastFunctionCall("fullcalendar.js",203,7578,7588,Date,false,false) || _wrap_popCallStack(new Date()));
        if (today >= currentView.start && today < currentView.end) {
(_wrap_setLastFunctionCall("fullcalendar.js",205,7669,7698,header.disableButton,false,false) || _wrap_popCallStack(          header.disableButton('today')));
        } else {
(_wrap_setLastFunctionCall("fullcalendar.js",207,7727,7755,header.enableButton,false,false) || _wrap_popCallStack(          header.enableButton('today')));
        }
        ignoreWindowResize--;
(_wrap_setLastFunctionCall("fullcalendar.js",210,7805,7849,currentView.trigger,false,false) || _wrap_popCallStack(        currentView.trigger('viewDisplay', _element)));
      }
    }
    function updateSize() {
_wrap_addFunctionToMap('fullcalendar.js', 213, 7869,8135, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",214,7899,7915,markSizesDirty,false,false) || _wrap_popCallStack(      markSizesDirty()));
      if ((_wrap_setLastFunctionCall("fullcalendar.js",215,7927,7943,elementVisible,false,false) || _wrap_popCallStack(elementVisible()))) {
(_wrap_setLastFunctionCall("fullcalendar.js",216,7955,7965,calcSize,false,false) || _wrap_popCallStack(        calcSize()));
(_wrap_setLastFunctionCall("fullcalendar.js",217,7975,7984,setSize,false,false) || _wrap_popCallStack(        setSize()));
(_wrap_setLastFunctionCall("fullcalendar.js",218,7994,8004,unselect,false,false) || _wrap_popCallStack(        unselect()));
(_wrap_setLastFunctionCall("fullcalendar.js",219,8014,8039,currentView.clearEvents,false,false) || _wrap_popCallStack(        currentView.clearEvents()));
(_wrap_setLastFunctionCall("fullcalendar.js",220,8049,8081,currentView.renderEvents,false,false) || _wrap_popCallStack(        currentView.renderEvents(events)));
        currentView.sizeDirty = false;
      }
    }
    function markSizesDirty() {
_wrap_addFunctionToMap('fullcalendar.js', 224, 8140,8250, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",225,8174,8243,$.each,false,false) || _wrap_popCallStack(      $.each(viewInstances, function(i, inst) {
_wrap_addFunctionToMap('fullcalendar.js', 225, 8196,8242, (typeof arguments === 'object' ? arguments.callee.caller : null));

  inst.sizeDirty = true;
})));
    }
    function calcSize() {
_wrap_addFunctionToMap('fullcalendar.js', 229, 8255,8635, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (options.contentHeight) {
        suggestedViewHeight = options.contentHeight;
      } else if (options.height) {
        suggestedViewHeight = options.height - (headerElement ? (_wrap_setLastFunctionCall("fullcalendar.js",233,8464,8486,headerElement.height,false,false) || _wrap_popCallStack(headerElement.height())) : 0) - (_wrap_setLastFunctionCall("fullcalendar.js",233,8494,8509,vsides,false,false) || _wrap_popCallStack(vsides(content)));
      } else {
        suggestedViewHeight = (_wrap_setLastFunctionCall("fullcalendar.js",235,8556,8620,Math.round,false,false) || _wrap_popCallStack(Math.round((_wrap_setLastFunctionCall("fullcalendar.js",235,8567,8582,content.width,false,false) || _wrap_popCallStack(content.width())) / (_wrap_setLastFunctionCall("fullcalendar.js",235,8585,8619,Math.max,false,false) || _wrap_popCallStack(Math.max(options.aspectRatio, 0.5))))));
      }
    }
    function setSize(dateChanged) {
_wrap_addFunctionToMap('fullcalendar.js', 238, 8640,8988, (typeof arguments === 'object' ? arguments.callee.caller : null));

      ignoreWindowResize++;
(_wrap_setLastFunctionCall("fullcalendar.js",240,8706,8761,currentView.setHeight,false,false) || _wrap_popCallStack(      currentView.setHeight(suggestedViewHeight, dateChanged)));
      if (absoluteViewElement) {
(_wrap_setLastFunctionCall("fullcalendar.js",242,8804,8851,absoluteViewElement.css,false,false) || _wrap_popCallStack(        absoluteViewElement.css('position', 'relative')));
        absoluteViewElement = null;
      }
(_wrap_setLastFunctionCall("fullcalendar.js",245,8903,8953,currentView.setWidth,false,false) || _wrap_popCallStack(      currentView.setWidth((_wrap_setLastFunctionCall("fullcalendar.js",245,8924,8939,content.width,false,false) || _wrap_popCallStack(content.width())), dateChanged)));
      ignoreWindowResize--;
    }
    function windowResize() {
_wrap_addFunctionToMap('fullcalendar.js', 248, 8993,9508, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (!ignoreWindowResize) {
        if (currentView.start) {
          var uid = ++resizeUID;
(_wrap_setLastFunctionCall("fullcalendar.js",252,9128,9442,setTimeout,false,false) || _wrap_popCallStack(          setTimeout(function() {
_wrap_addFunctionToMap('fullcalendar.js', 252, 9139,9436, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (uid == resizeUID && !ignoreWindowResize && (_wrap_setLastFunctionCall("fullcalendar.js",253,9201,9217,elementVisible,false,false) || _wrap_popCallStack(elementVisible()))) {
    if (elementOuterWidth != (elementOuterWidth = (_wrap_setLastFunctionCall("fullcalendar.js",254,9271,9291,element.outerWidth,false,false) || _wrap_popCallStack(element.outerWidth())))) {
      ignoreWindowResize++;
(_wrap_setLastFunctionCall("fullcalendar.js",256,9330,9342,updateSize,false,false) || _wrap_popCallStack(      updateSize()));
(_wrap_setLastFunctionCall("fullcalendar.js",257,9350,9395,currentView.trigger,false,false) || _wrap_popCallStack(      currentView.trigger('windowResize', _element)));
      ignoreWindowResize--;
    }
  }
}, 200)));
        } else {
(_wrap_setLastFunctionCall("fullcalendar.js",263,9471,9483,lateRender,false,false) || _wrap_popCallStack(          lateRender()));
        }
      }
    }
    function updateEvents(forceRender) {
_wrap_addFunctionToMap('fullcalendar.js', 267, 9513,9740, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (!options.lazyFetching || (_wrap_setLastFunctionCall("fullcalendar.js",268,9585,9640,isFetchNeeded,false,false) || _wrap_popCallStack(isFetchNeeded(currentView.visStart, currentView.visEnd)))) {
(_wrap_setLastFunctionCall("fullcalendar.js",269,9652,9667,refetchEvents,false,false) || _wrap_popCallStack(        refetchEvents()));
      } else if (forceRender) {
(_wrap_setLastFunctionCall("fullcalendar.js",271,9709,9725,rerenderEvents,false,false) || _wrap_popCallStack(        rerenderEvents()));
      }
    }
    function refetchEvents() {
_wrap_addFunctionToMap('fullcalendar.js', 274, 9745,9838, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",275,9778,9831,fetchEvents,false,false) || _wrap_popCallStack(      fetchEvents(currentView.visStart, currentView.visEnd)));
    }
    function reportEvents(_events) {
_wrap_addFunctionToMap('fullcalendar.js', 277, 9843,9929, (typeof arguments === 'object' ? arguments.callee.caller : null));

      events = _events;
(_wrap_setLastFunctionCall("fullcalendar.js",279,9906,9922,rerenderEvents,false,false) || _wrap_popCallStack(      rerenderEvents()));
    }
    function reportEventChange(eventID) {
_wrap_addFunctionToMap('fullcalendar.js', 281, 9934,10008, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",282,9978,10001,rerenderEvents,false,false) || _wrap_popCallStack(      rerenderEvents(eventID)));
    }
    function rerenderEvents(modifiedEventID) {
_wrap_addFunctionToMap('fullcalendar.js', 284, 10013,10259, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",285,10062,10079,markEventsDirty,false,false) || _wrap_popCallStack(      markEventsDirty()));
      if ((_wrap_setLastFunctionCall("fullcalendar.js",286,10091,10107,elementVisible,false,false) || _wrap_popCallStack(elementVisible()))) {
(_wrap_setLastFunctionCall("fullcalendar.js",287,10119,10144,currentView.clearEvents,false,false) || _wrap_popCallStack(        currentView.clearEvents()));
(_wrap_setLastFunctionCall("fullcalendar.js",288,10154,10203,currentView.renderEvents,false,false) || _wrap_popCallStack(        currentView.renderEvents(events, modifiedEventID)));
        currentView.eventsDirty = false;
      }
    }
    function markEventsDirty() {
_wrap_addFunctionToMap('fullcalendar.js', 292, 10264,10377, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",293,10299,10370,$.each,false,false) || _wrap_popCallStack(      $.each(viewInstances, function(i, inst) {
_wrap_addFunctionToMap('fullcalendar.js', 293, 10321,10369, (typeof arguments === 'object' ? arguments.callee.caller : null));

  inst.eventsDirty = true;
})));
    }
    function select(start, end, allDay) {
_wrap_addFunctionToMap('fullcalendar.js', 297, 10382,10501, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",298,10426,10494,currentView.select,false,false) || _wrap_popCallStack(      currentView.select(start, end, allDay === undefined ? true : allDay)));
    }
    function unselect() {
_wrap_addFunctionToMap('fullcalendar.js', 300, 10506,10598, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (currentView) {
(_wrap_setLastFunctionCall("fullcalendar.js",302,10561,10583,currentView.unselect,false,false) || _wrap_popCallStack(        currentView.unselect()));
      }
    }
    function prev() {
_wrap_addFunctionToMap('fullcalendar.js', 305, 10603,10648, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",306,10627,10641,renderView,false,false) || _wrap_popCallStack(      renderView(-1)));
    }
    function next() {
_wrap_addFunctionToMap('fullcalendar.js', 308, 10653,10697, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",309,10677,10690,renderView,false,false) || _wrap_popCallStack(      renderView(1)));
    }
    function prevYear() {
_wrap_addFunctionToMap('fullcalendar.js', 311, 10702,10775, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",312,10730,10748,addYears,false,false) || _wrap_popCallStack(      addYears(date, -1)));
(_wrap_setLastFunctionCall("fullcalendar.js",313,10756,10768,renderView,false,false) || _wrap_popCallStack(      renderView()));
    }
    function nextYear() {
_wrap_addFunctionToMap('fullcalendar.js', 315, 10780,10852, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",316,10808,10825,addYears,false,false) || _wrap_popCallStack(      addYears(date, 1)));
(_wrap_setLastFunctionCall("fullcalendar.js",317,10833,10845,renderView,false,false) || _wrap_popCallStack(      renderView()));
    }
    function today() {
_wrap_addFunctionToMap('fullcalendar.js', 319, 10857,10926, (typeof arguments === 'object' ? arguments.callee.caller : null));

      date = (_wrap_setLastFunctionCall("fullcalendar.js",320,10889,10899,Date,false,false) || _wrap_popCallStack(new Date()));
(_wrap_setLastFunctionCall("fullcalendar.js",321,10907,10919,renderView,false,false) || _wrap_popCallStack(      renderView()));
    }
    function gotoDate(year, month, dateOfMonth) {
_wrap_addFunctionToMap('fullcalendar.js', 323, 10931,11139, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (year instanceof Date) {
        date = (_wrap_setLastFunctionCall("fullcalendar.js",325,11026,11041,cloneDate,false,false) || _wrap_popCallStack(cloneDate(year)));
      } else {
(_wrap_setLastFunctionCall("fullcalendar.js",327,11066,11104,setYMD,false,false) || _wrap_popCallStack(        setYMD(date, year, month, dateOfMonth)));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",329,11120,11132,renderView,false,false) || _wrap_popCallStack(      renderView()));
    }
    function incrementDate(years, months, days) {
_wrap_addFunctionToMap('fullcalendar.js', 331, 11144,11431, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (years !== undefined) {
(_wrap_setLastFunctionCall("fullcalendar.js",333,11231,11252,addYears,false,false) || _wrap_popCallStack(        addYears(date, years)));
      }
      if (months !== undefined) {
(_wrap_setLastFunctionCall("fullcalendar.js",336,11304,11327,addMonths,false,false) || _wrap_popCallStack(        addMonths(date, months)));
      }
      if (days !== undefined) {
(_wrap_setLastFunctionCall("fullcalendar.js",339,11377,11396,addDays,false,false) || _wrap_popCallStack(        addDays(date, days)));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",341,11412,11424,renderView,false,false) || _wrap_popCallStack(      renderView()));
    }
    function getDate() {
_wrap_addFunctionToMap('fullcalendar.js', 343, 11436,11492, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",344,11470,11485,cloneDate,false,false) || _wrap_popCallStack(cloneDate(date)));
    }
    function getView() {
_wrap_addFunctionToMap('fullcalendar.js', 346, 11497,11549, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return currentView;
    }
    function option(name, value) {
_wrap_addFunctionToMap('fullcalendar.js', 349, 11554,11804, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (value === undefined) {
        return options[name];
      }
      if (name == 'height' || name == 'contentHeight' || name == 'aspectRatio') {
        options[name] = value;
(_wrap_setLastFunctionCall("fullcalendar.js",355,11777,11789,updateSize,false,false) || _wrap_popCallStack(        updateSize()));
      }
    }
    function trigger(name, thisObj) {
_wrap_addFunctionToMap('fullcalendar.js', 358, 11809,11982, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (options[name]) {
        return (_wrap_setLastFunctionCall("fullcalendar.js",360,11885,11967,options[name].apply,false,true) || _wrap_popCallStack(options[name].apply(thisObj || _element, (_wrap_setLastFunctionCall("fullcalendar.js",360,11926,11966,Array.prototype.slice.call,false,true) || _wrap_popCallStack(Array.prototype.slice.call(arguments, 2))))));
      }
    }
    if (options.droppable) {
(_wrap_setLastFunctionCall("fullcalendar.js",374,12018,12471,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("fullcalendar.js",364,12018,12333,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",364,12018,12029,$,false,false) || _wrap_popCallStack($(document))).bind('dragstart', function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 364, 12048,12332, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var _e = ev.target;
  var e = (_wrap_setLastFunctionCall("fullcalendar.js",366,12099,12104,$,false,false) || _wrap_popCallStack($(_e)));
  if (!(_wrap_setLastFunctionCall("fullcalendar.js",367,12113,12129,e.parents,false,false) || _wrap_popCallStack(e.parents('.fc'))).length) {
    var accept = options.dropAccept;
    if ((_wrap_setLastFunctionCall("fullcalendar.js",369,12185,12205,$.isFunction,false,false) || _wrap_popCallStack($.isFunction(accept))) ? (_wrap_setLastFunctionCall("fullcalendar.js",369,12208,12226,accept.call,false,true) || _wrap_popCallStack(accept.call(_e, e))) : (_wrap_setLastFunctionCall("fullcalendar.js",369,12229,12241,e.is,false,false) || _wrap_popCallStack(e.is(accept)))) {
      _dragElement = _e;
(_wrap_setLastFunctionCall("fullcalendar.js",371,12276,12319,currentView.dragStart,false,false) || _wrap_popCallStack(      currentView.dragStart(_dragElement, ev, ui)));
    }
  }
}))).bind('dragstop', function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 374, 12351,12470, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (_dragElement) {
(_wrap_setLastFunctionCall("fullcalendar.js",376,12396,12438,currentView.dragStop,false,false) || _wrap_popCallStack(    currentView.dragStop(_dragElement, ev, ui)));
    _dragElement = null;
  }
})));
    }
  }
  function Header(calendar, options) {
_wrap_addFunctionToMap('fullcalendar.js', 382, 12485,16021, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.render = render;
    t.destroy = destroy;
    t.updateTitle = updateTitle;
    t.activateButton = activateButton;
    t.deactivateButton = deactivateButton;
    t.disableButton = disableButton;
    t.enableButton = enableButton;
    var element = (_wrap_setLastFunctionCall("fullcalendar.js",391,12793,12798,$,false,false) || _wrap_popCallStack($([])));
    var tm;
    function render() {
_wrap_addFunctionToMap('fullcalendar.js', 393, 12816,13158, (typeof arguments === 'object' ? arguments.callee.caller : null));

      tm = options.theme ? 'ui' : 'fc';
      var sections = options.header;
      if (sections) {
        element = (_wrap_setLastFunctionCall("fullcalendar.js",397,12953,13119,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",397,12953,13007,$,false,false) || _wrap_popCallStack($('<table class=\'fc-header\' style=\'width:100%\'/>'))).append((_wrap_setLastFunctionCall("fullcalendar.js",397,13015,13118,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",397,13015,13087,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",397,13015,13055,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",397,13015,13025,$,false,false) || _wrap_popCallStack($('<tr/>'))).append((_wrap_setLastFunctionCall("fullcalendar.js",397,13033,13054,renderSection,false,false) || _wrap_popCallStack(renderSection('left')))))).append((_wrap_setLastFunctionCall("fullcalendar.js",397,13063,13086,renderSection,false,false) || _wrap_popCallStack(renderSection('center')))))).append((_wrap_setLastFunctionCall("fullcalendar.js",397,13095,13117,renderSection,false,false) || _wrap_popCallStack(renderSection('right')))))))));
        return element;
      }
    }
    function destroy() {
_wrap_addFunctionToMap('fullcalendar.js', 401, 13163,13213, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",402,13190,13206,element.remove,false,false) || _wrap_popCallStack(      element.remove()));
    }
    function renderSection(position) {
_wrap_addFunctionToMap('fullcalendar.js', 404, 13218,15408, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var e = (_wrap_setLastFunctionCall("fullcalendar.js",405,13267,13314,$,false,false) || _wrap_popCallStack($('<td class=\'fc-header-' + position + '\'/>')));
      var buttonStr = options.header[position];
      if (buttonStr) {
(_wrap_setLastFunctionCall("fullcalendar.js",408,13395,15377,$.each,false,false) || _wrap_popCallStack(        $.each((_wrap_setLastFunctionCall("fullcalendar.js",408,13402,13422,buttonStr.split,false,false) || _wrap_popCallStack(buttonStr.split(' '))), function(i) {
_wrap_addFunctionToMap('fullcalendar.js', 408, 13424,15376, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (i > 0) {
(_wrap_setLastFunctionCall("fullcalendar.js",410,13457,13502,e.append,false,false) || _wrap_popCallStack(    e.append('<span class=\'fc-header-space\'/>')));
  }
  var prevButton;
(_wrap_setLastFunctionCall("fullcalendar.js",413,13528,15302,$.each,false,false) || _wrap_popCallStack(  $.each((_wrap_setLastFunctionCall("fullcalendar.js",413,13535,13550,this.split,false,false) || _wrap_popCallStack(this.split(','))), function(j, buttonName) {
_wrap_addFunctionToMap('fullcalendar.js', 413, 13552,15301, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (buttonName == 'title') {
(_wrap_setLastFunctionCall("fullcalendar.js",415,13613,13679,e.append,false,false) || _wrap_popCallStack(    e.append('<span class=\'fc-header-title\'><h2>&nbsp;</h2></span>')));
    if (prevButton) {
(_wrap_setLastFunctionCall("fullcalendar.js",417,13709,13750,prevButton.addClass,false,false) || _wrap_popCallStack(      prevButton.addClass(tm + '-corner-right')));
    }
    prevButton = null;
  } else {
    var buttonClick;
    if (calendar[buttonName]) {
      buttonClick = calendar[buttonName];
    } else if (fcViews[buttonName]) {
      buttonClick = function() {
_wrap_addFunctionToMap('fullcalendar.js', 425, 13945,14037, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",426,13960,13999,button.removeClass,false,false) || _wrap_popCallStack(  button.removeClass(tm + '-state-hover')));
(_wrap_setLastFunctionCall("fullcalendar.js",427,14003,14034,calendar.changeView,false,false) || _wrap_popCallStack(  calendar.changeView(buttonName)));
};
    }
    if (buttonClick) {
      var icon = options.theme ? (_wrap_setLastFunctionCall("fullcalendar.js",431,14101,14147,smartProperty,false,false) || _wrap_popCallStack(smartProperty(options.buttonIcons, buttonName))) : null;
      var text = (_wrap_setLastFunctionCall("fullcalendar.js",432,14173,14218,smartProperty,false,false) || _wrap_popCallStack(smartProperty(options.buttonText, buttonName)));
      var button = (_wrap_setLastFunctionCall("fullcalendar.js",433,14239,14607,$,false,false) || _wrap_popCallStack($('<span class=\'fc-button fc-button-' + buttonName + ' ' + tm + '-state-default\'>' + '<span class=\'fc-button-inner\'>' + '<span class=\'fc-button-content\'>' + (icon ? '<span class=\'fc-icon-wrap\'>' + '<span class=\'ui-icon ui-icon-' + icon + '\'/>' + '</span>' : text) + '</span>' + '<span class=\'fc-button-effect\'><span></span></span>' + '</span>' + '</span>')));
      if (button) {
(_wrap_setLastFunctionCall("fullcalendar.js",447,14637,15166,null,false,false) || _wrap_popCallStack(        (_wrap_setLastFunctionCall("fullcalendar.js",443,14637,15154,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",441,14637,14935,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",439,14637,14869,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",435,14637,14738,button.click,false,false) || _wrap_popCallStack(button.click(function() {
_wrap_addFunctionToMap('fullcalendar.js', 435, 14650,14737, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!(_wrap_setLastFunctionCall("fullcalendar.js",436,14670,14709,button.hasClass,false,false) || _wrap_popCallStack(button.hasClass(tm + '-state-disabled')))) {
(_wrap_setLastFunctionCall("fullcalendar.js",437,14717,14730,buttonClick,false,false) || _wrap_popCallStack(    buttonClick()));
  }
}))).mousedown(function() {
_wrap_addFunctionToMap('fullcalendar.js', 439, 14749,14868, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",440,14764,14865,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("fullcalendar.js",440,14764,14836,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",440,14764,14802,button.not,false,false) || _wrap_popCallStack(button.not('.' + tm + '-state-active'))).not('.' + tm + '-state-disabled'))).addClass(tm + '-state-down')));
}))).mouseup(function() {
_wrap_addFunctionToMap('fullcalendar.js', 441, 14878,14934, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",442,14893,14931,button.removeClass,false,false) || _wrap_popCallStack(  button.removeClass(tm + '-state-down')));
}))).hover(function() {
_wrap_addFunctionToMap('fullcalendar.js', 443, 14942,15062, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",444,14957,15059,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("fullcalendar.js",444,14957,15029,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",444,14957,14995,button.not,false,false) || _wrap_popCallStack(button.not('.' + tm + '-state-active'))).not('.' + tm + '-state-disabled'))).addClass(tm + '-state-hover')));
}, function() {
_wrap_addFunctionToMap('fullcalendar.js', 445, 15064,15153, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",446,15079,15150,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("fullcalendar.js",446,15079,15118,button.removeClass,false,false) || _wrap_popCallStack(button.removeClass(tm + '-state-hover'))).removeClass(tm + '-state-down')));
}))).appendTo(e)));
        if (!prevButton) {
(_wrap_setLastFunctionCall("fullcalendar.js",449,15205,15241,button.addClass,false,false) || _wrap_popCallStack(          button.addClass(tm + '-corner-left')));
        }
        prevButton = button;
      }
    }
  }
})));
  if (prevButton) {
(_wrap_setLastFunctionCall("fullcalendar.js",457,15328,15369,prevButton.addClass,false,false) || _wrap_popCallStack(    prevButton.addClass(tm + '-corner-right')));
  }
})));
      }
      return e;
    }
    function updateTitle(html) {
_wrap_addFunctionToMap('fullcalendar.js', 463, 15413,15484, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",464,15448,15477,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("fullcalendar.js",464,15448,15466,element.find,false,false) || _wrap_popCallStack(element.find('h2'))).html(html)));
    }
    function activateButton(buttonName) {
_wrap_addFunctionToMap('fullcalendar.js', 466, 15489,15615, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",467,15533,15608,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("fullcalendar.js",467,15533,15577,element.find,false,false) || _wrap_popCallStack(element.find('span.fc-button-' + buttonName))).addClass(tm + '-state-active')));
    }
    function deactivateButton(buttonName) {
_wrap_addFunctionToMap('fullcalendar.js', 469, 15620,15751, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",470,15666,15744,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("fullcalendar.js",470,15666,15710,element.find,false,false) || _wrap_popCallStack(element.find('span.fc-button-' + buttonName))).removeClass(tm + '-state-active')));
    }
    function disableButton(buttonName) {
_wrap_addFunctionToMap('fullcalendar.js', 472, 15756,15883, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",473,15799,15876,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("fullcalendar.js",473,15799,15843,element.find,false,false) || _wrap_popCallStack(element.find('span.fc-button-' + buttonName))).addClass(tm + '-state-disabled')));
    }
    function enableButton(buttonName) {
_wrap_addFunctionToMap('fullcalendar.js', 475, 15888,16017, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",476,15930,16010,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("fullcalendar.js",476,15930,15974,element.find,false,false) || _wrap_popCallStack(element.find('span.fc-button-' + buttonName))).removeClass(tm + '-state-disabled')));
    }
  }
  fc.sourceNormalizers = [];
  fc.sourceFetchers = [];
  var ajaxDefaults = {dataType: 'json', cache: false};
  var eventGUID = 1;
  function EventManager(options, _sources) {
_wrap_addFunctionToMap('fullcalendar.js', 483, 16155,24625, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
(_wrap_setLastFunctionCall("fullcalendar.js",505,16901,16929,_addEventSource,false,false) || _wrap_popCallStack(      _addEventSource(_sources[i])));
    }
    function isFetchNeeded(start, end) {
_wrap_addFunctionToMap('fullcalendar.js', 507, 16941,17049, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return !rangeStart || start < rangeStart || end > rangeEnd;
    }
    function fetchEvents(start, end) {
_wrap_addFunctionToMap('fullcalendar.js', 510, 17054,17353, (typeof arguments === 'object' ? arguments.callee.caller : null));

      rangeStart = start;
      rangeEnd = end;
      cache = [];
      var fetchID = ++currentFetchID;
      var len = sources.length;
      pendingSourceCnt = len;
      for (var i = 0; i < len; i++) {
(_wrap_setLastFunctionCall("fullcalendar.js",518,17301,17338,fetchEventSource,false,false) || _wrap_popCallStack(        fetchEventSource(sources[i], fetchID)));
      }
    }
    function fetchEventSource(source, fetchID) {
_wrap_addFunctionToMap('fullcalendar.js', 521, 17358,17774, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",522,17409,17767,_fetchEventSource,false,false) || _wrap_popCallStack(      _fetchEventSource(source, function(events) {
_wrap_addFunctionToMap('fullcalendar.js', 522, 17435,17766, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (fetchID == currentFetchID) {
    if (events) {
      for (var i = 0; i < events.length; i++) {
        events[i].source = source;
(_wrap_setLastFunctionCall("fullcalendar.js",527,17598,17623,normalizeEvent,false,false) || _wrap_popCallStack(        normalizeEvent(events[i])));
      }
      cache = (_wrap_setLastFunctionCall("fullcalendar.js",529,17647,17667,cache.concat,false,false) || _wrap_popCallStack(cache.concat(events)));
    }
    pendingSourceCnt--;
    if (!pendingSourceCnt) {
(_wrap_setLastFunctionCall("fullcalendar.js",533,17734,17753,reportEvents,false,false) || _wrap_popCallStack(      reportEvents(cache)));
    }
  }
})));
    }
    function _fetchEventSource(source, callback) {
_wrap_addFunctionToMap('fullcalendar.js', 538, 17779,19599, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i;
      var fetchers = fc.sourceFetchers;
      var res;
      for (i = 0; i < fetchers.length; i++) {
        res = (_wrap_setLastFunctionCall("fullcalendar.js",543,17954,18005,null,false,false) || _wrap_popCallStack(fetchers[i](source, rangeStart, rangeEnd, callback)));
        if (res === true) {
          return;
        } else if (typeof res == 'object') {
(_wrap_setLastFunctionCall("fullcalendar.js",547,18108,18140,_fetchEventSource,false,false) || _wrap_popCallStack(          _fetchEventSource(res, callback)));
          return;
        }
      }
      var events = source.events;
      if (events) {
        if ((_wrap_setLastFunctionCall("fullcalendar.js",553,18244,18264,$.isFunction,false,false) || _wrap_popCallStack($.isFunction(events)))) {
(_wrap_setLastFunctionCall("fullcalendar.js",554,18278,18291,pushLoading,false,false) || _wrap_popCallStack(          pushLoading()));
(_wrap_setLastFunctionCall("fullcalendar.js",555,18303,18411,events,false,false) || _wrap_popCallStack(          events((_wrap_setLastFunctionCall("fullcalendar.js",555,18310,18331,cloneDate,false,false) || _wrap_popCallStack(cloneDate(rangeStart))), (_wrap_setLastFunctionCall("fullcalendar.js",555,18333,18352,cloneDate,false,false) || _wrap_popCallStack(cloneDate(rangeEnd))), function(events) {
_wrap_addFunctionToMap('fullcalendar.js', 555, 18354,18410, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",556,18375,18391,callback,false,false) || _wrap_popCallStack(  callback(events)));
(_wrap_setLastFunctionCall("fullcalendar.js",557,18395,18407,popLoading,false,false) || _wrap_popCallStack(  popLoading()));
})));
        } else if ((_wrap_setLastFunctionCall("fullcalendar.js",559,18432,18449,$.isArray,false,false) || _wrap_popCallStack($.isArray(events)))) {
(_wrap_setLastFunctionCall("fullcalendar.js",560,18463,18479,callback,false,false) || _wrap_popCallStack(          callback(events)));
        } else {
(_wrap_setLastFunctionCall("fullcalendar.js",562,18508,18518,callback,false,false) || _wrap_popCallStack(          callback()));
        }
      } else {
        var url = source.url;
        if (url) {
          var success = source.success;
          var error = source.error;
          var complete = source.complete;
          var data = (_wrap_setLastFunctionCall("fullcalendar.js",570,18733,18764,$.extend,false,false) || _wrap_popCallStack($.extend({}, source.data || {})));
          var startParam = (_wrap_setLastFunctionCall("fullcalendar.js",571,18793,18844,firstDefined,false,false) || _wrap_popCallStack(firstDefined(source.startParam, options.startParam)));
          var endParam = (_wrap_setLastFunctionCall("fullcalendar.js",572,18871,18918,firstDefined,false,false) || _wrap_popCallStack(firstDefined(source.endParam, options.endParam)));
          if (startParam) {
            data[startParam] = (_wrap_setLastFunctionCall("fullcalendar.js",574,18979,19009,Math.round,false,false) || _wrap_popCallStack(Math.round(+rangeStart / 1000)));
          }
          if (endParam) {
            data[endParam] = (_wrap_setLastFunctionCall("fullcalendar.js",577,19078,19106,Math.round,false,false) || _wrap_popCallStack(Math.round(+rangeEnd / 1000)));
          }
(_wrap_setLastFunctionCall("fullcalendar.js",579,19130,19143,pushLoading,false,false) || _wrap_popCallStack(          pushLoading()));
(_wrap_setLastFunctionCall("fullcalendar.js",580,19155,19535,$.ajax,false,false) || _wrap_popCallStack(          $.ajax((_wrap_setLastFunctionCall("fullcalendar.js",580,19162,19534,$.extend,false,false) || _wrap_popCallStack($.extend({}, ajaxDefaults, source, {data: data, success: function(events) {
_wrap_addFunctionToMap('fullcalendar.js', 580, 19219,19378, (typeof arguments === 'object' ? arguments.callee.caller : null));

  events = events || [];
  var res = (_wrap_setLastFunctionCall("fullcalendar.js",582,19275,19309,applyAll,false,false) || _wrap_popCallStack(applyAll(success, this, arguments)));
  if ((_wrap_setLastFunctionCall("fullcalendar.js",583,19317,19331,$.isArray,false,false) || _wrap_popCallStack($.isArray(res)))) {
    events = res;
  }
(_wrap_setLastFunctionCall("fullcalendar.js",586,19359,19375,callback,false,false) || _wrap_popCallStack(  callback(events)));
}, error: function() {
_wrap_addFunctionToMap('fullcalendar.js', 587, 19387,19451, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",588,19402,19434,applyAll,false,false) || _wrap_popCallStack(  applyAll(error, this, arguments)));
(_wrap_setLastFunctionCall("fullcalendar.js",589,19438,19448,callback,false,false) || _wrap_popCallStack(  callback()));
}, complete: function() {
_wrap_addFunctionToMap('fullcalendar.js', 590, 19463,19532, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",591,19478,19513,applyAll,false,false) || _wrap_popCallStack(  applyAll(complete, this, arguments)));
(_wrap_setLastFunctionCall("fullcalendar.js",592,19517,19529,popLoading,false,false) || _wrap_popCallStack(  popLoading()));
}}))))));
        } else {
(_wrap_setLastFunctionCall("fullcalendar.js",595,19564,19574,callback,false,false) || _wrap_popCallStack(          callback()));
        }
      }
    }
    function addEventSource(source) {
_wrap_addFunctionToMap('fullcalendar.js', 599, 19604,19789, (typeof arguments === 'object' ? arguments.callee.caller : null));

      source = (_wrap_setLastFunctionCall("fullcalendar.js",600,19653,19676,_addEventSource,false,false) || _wrap_popCallStack(_addEventSource(source)));
      if (source) {
        pendingSourceCnt++;
(_wrap_setLastFunctionCall("fullcalendar.js",603,19734,19774,fetchEventSource,false,false) || _wrap_popCallStack(        fetchEventSource(source, currentFetchID)));
      }
    }
    function _addEventSource(source) {
_wrap_addFunctionToMap('fullcalendar.js', 606, 19794,20143, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if ((_wrap_setLastFunctionCall("fullcalendar.js",607,19839,19859,$.isFunction,false,false) || _wrap_popCallStack($.isFunction(source))) || (_wrap_setLastFunctionCall("fullcalendar.js",607,19863,19880,$.isArray,false,false) || _wrap_popCallStack($.isArray(source)))) {
        source = {events: source};
      } else if (typeof source == 'string') {
        source = {url: source};
      }
      if (typeof source == 'object') {
(_wrap_setLastFunctionCall("fullcalendar.js",613,20052,20075,normalizeSource,false,false) || _wrap_popCallStack(        normalizeSource(source)));
(_wrap_setLastFunctionCall("fullcalendar.js",614,20085,20105,sources.push,false,false) || _wrap_popCallStack(        sources.push(source)));
        return source;
      }
    }
    function removeEventSource(source) {
_wrap_addFunctionToMap('fullcalendar.js', 618, 20148,20398, (typeof arguments === 'object' ? arguments.callee.caller : null));

      sources = (_wrap_setLastFunctionCall("fullcalendar.js",619,20201,20274,$.grep,false,false) || _wrap_popCallStack($.grep(sources, function(src) {
_wrap_addFunctionToMap('fullcalendar.js', 619, 20217,20273, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return !(_wrap_setLastFunctionCall("fullcalendar.js",620,20243,20270,isSourcesEqual,false,false) || _wrap_popCallStack(isSourcesEqual(src, source)));
})));
      cache = (_wrap_setLastFunctionCall("fullcalendar.js",622,20290,20364,$.grep,false,false) || _wrap_popCallStack($.grep(cache, function(e) {
_wrap_addFunctionToMap('fullcalendar.js', 622, 20304,20363, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return !(_wrap_setLastFunctionCall("fullcalendar.js",623,20328,20360,isSourcesEqual,false,false) || _wrap_popCallStack(isSourcesEqual(e.source, source)));
})));
(_wrap_setLastFunctionCall("fullcalendar.js",625,20372,20391,reportEvents,false,false) || _wrap_popCallStack(      reportEvents(cache)));
    }
    function updateEvent(event) {
_wrap_addFunctionToMap('fullcalendar.js', 627, 20403,21505, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i, len = cache.length, e, defaultEventEnd = (_wrap_setLastFunctionCall("fullcalendar.js",628,20487,20496,getView,false,false) || _wrap_popCallStack(getView())).defaultEventEnd, startDelta = event.start - event._start, endDelta = event.end ? event.end - (event._end || (_wrap_setLastFunctionCall("fullcalendar.js",628,20605,20627,defaultEventEnd,false,false) || _wrap_popCallStack(defaultEventEnd(event)))) : 0;
      for (i = 0; i < len; i++) {
        e = cache[i];
        if (e._id == event._id && e != event) {
          e.start = (_wrap_setLastFunctionCall("fullcalendar.js",632,20758,20789,Date,false,false) || _wrap_popCallStack(new Date(+e.start + startDelta)));
          if (event.end) {
            if (e.end) {
              e.end = (_wrap_setLastFunctionCall("fullcalendar.js",635,20865,20892,Date,false,false) || _wrap_popCallStack(new Date(+e.end + endDelta)));
            } else {
              e.end = (_wrap_setLastFunctionCall("fullcalendar.js",637,20937,20977,Date,false,false) || _wrap_popCallStack(new Date(+(_wrap_setLastFunctionCall("fullcalendar.js",637,20947,20965,defaultEventEnd,false,false) || _wrap_popCallStack(defaultEventEnd(e))) + endDelta)));
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
(_wrap_setLastFunctionCall("fullcalendar.js",651,21407,21424,normalizeEvent,false,false) || _wrap_popCallStack(          normalizeEvent(e)));
        }
      }
(_wrap_setLastFunctionCall("fullcalendar.js",654,21450,21471,normalizeEvent,false,false) || _wrap_popCallStack(      normalizeEvent(event)));
(_wrap_setLastFunctionCall("fullcalendar.js",655,21479,21498,reportEvents,false,false) || _wrap_popCallStack(      reportEvents(cache)));
    }
    function renderEvent(event, stick) {
_wrap_addFunctionToMap('fullcalendar.js', 657, 21510,21783, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",658,21553,21574,normalizeEvent,false,false) || _wrap_popCallStack(      normalizeEvent(event)));
      if (!event.source) {
        if (stick) {
(_wrap_setLastFunctionCall("fullcalendar.js",661,21634,21665,stickySource.events.push,false,false) || _wrap_popCallStack(          stickySource.events.push(event)));
          event.source = stickySource;
        }
(_wrap_setLastFunctionCall("fullcalendar.js",664,21724,21741,cache.push,false,false) || _wrap_popCallStack(        cache.push(event)));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",666,21757,21776,reportEvents,false,false) || _wrap_popCallStack(      reportEvents(cache)));
    }
    function removeEvents(filter) {
_wrap_addFunctionToMap('fullcalendar.js', 668, 21788,22445, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (!filter) {
        cache = [];
        for (var i = 0; i < sources.length; i++) {
          if ((_wrap_setLastFunctionCall("fullcalendar.js",672,21926,21954,$.isArray,false,false) || _wrap_popCallStack($.isArray(sources[i].events)))) {
            sources[i].events = [];
          }
        }
      } else {
        if (!(_wrap_setLastFunctionCall("fullcalendar.js",677,22044,22064,$.isFunction,false,false) || _wrap_popCallStack($.isFunction(filter)))) {
          var id = filter + '';
          filter = function(e) {
_wrap_addFunctionToMap('fullcalendar.js', 679, 22119,22156, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return e._id == id;
};
        }
        cache = (_wrap_setLastFunctionCall("fullcalendar.js",683,22184,22211,$.grep,false,false) || _wrap_popCallStack($.grep(cache, filter, true)));
        for (var i = 0; i < sources.length; i++) {
          if ((_wrap_setLastFunctionCall("fullcalendar.js",685,22278,22306,$.isArray,false,false) || _wrap_popCallStack($.isArray(sources[i].events)))) {
            sources[i].events = (_wrap_setLastFunctionCall("fullcalendar.js",686,22342,22381,$.grep,false,false) || _wrap_popCallStack($.grep(sources[i].events, filter, true)));
          }
        }
      }
(_wrap_setLastFunctionCall("fullcalendar.js",690,22419,22438,reportEvents,false,false) || _wrap_popCallStack(      reportEvents(cache)));
    }
    function clientEvents(filter) {
_wrap_addFunctionToMap('fullcalendar.js', 692, 22450,22709, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if ((_wrap_setLastFunctionCall("fullcalendar.js",693,22492,22512,$.isFunction,false,false) || _wrap_popCallStack($.isFunction(filter)))) {
        return (_wrap_setLastFunctionCall("fullcalendar.js",694,22531,22552,$.grep,false,false) || _wrap_popCallStack($.grep(cache, filter)));
      } else if (filter) {
        filter += '';
        return (_wrap_setLastFunctionCall("fullcalendar.js",697,22618,22674,$.grep,false,false) || _wrap_popCallStack($.grep(cache, function(e) {
_wrap_addFunctionToMap('fullcalendar.js', 697, 22632,22673, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return e._id == filter;
})));
      }
      return cache;
    }
    function pushLoading() {
_wrap_addFunctionToMap('fullcalendar.js', 703, 22714,22821, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (!loadingLevel++) {
(_wrap_setLastFunctionCall("fullcalendar.js",705,22776,22806,trigger,false,false) || _wrap_popCallStack(        trigger('loading', null, true)));
      }
    }
    function popLoading() {
_wrap_addFunctionToMap('fullcalendar.js', 708, 22826,22933, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (!--loadingLevel) {
(_wrap_setLastFunctionCall("fullcalendar.js",710,22887,22918,trigger,false,false) || _wrap_popCallStack(        trigger('loading', null, false)));
      }
    }
    function normalizeEvent(event) {
_wrap_addFunctionToMap('fullcalendar.js', 713, 22938,23948, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var source = event.source || {};
      var ignoreTimezone = (_wrap_setLastFunctionCall("fullcalendar.js",715,23037,23096,firstDefined,false,false) || _wrap_popCallStack(firstDefined(source.ignoreTimezone, options.ignoreTimezone)));
      event._id = event._id || (event.id === undefined ? '_fc' + eventGUID++ : event.id + '');
      if (event.date) {
        if (!event.start) {
          event.start = event.date;
        }
        delete event.date;
      }
      event._start = (_wrap_setLastFunctionCall("fullcalendar.js",723,23347,23410,cloneDate,false,false) || _wrap_popCallStack(cloneDate(event.start = (_wrap_setLastFunctionCall("fullcalendar.js",723,23371,23409,parseDate,false,false) || _wrap_popCallStack(parseDate(event.start, ignoreTimezone))))));
      event.end = (_wrap_setLastFunctionCall("fullcalendar.js",724,23430,23466,parseDate,false,false) || _wrap_popCallStack(parseDate(event.end, ignoreTimezone)));
      if (event.end && event.end <= event.start) {
        event.end = null;
      }
      event._end = event.end ? (_wrap_setLastFunctionCall("fullcalendar.js",728,23584,23604,cloneDate,false,false) || _wrap_popCallStack(cloneDate(event.end))) : null;
      if (event.allDay === undefined) {
        event.allDay = (_wrap_setLastFunctionCall("fullcalendar.js",730,23676,23733,firstDefined,false,false) || _wrap_popCallStack(firstDefined(source.allDayDefault, options.allDayDefault)));
      }
      if (event.className) {
        if (typeof event.className == 'string') {
          event.className = (_wrap_setLastFunctionCall("fullcalendar.js",734,23850,23878,event.className.split,false,false) || _wrap_popCallStack(event.className.split(/\s+/)));
        }
      } else {
        event.className = [];
      }
    }
    function normalizeSource(source) {
_wrap_addFunctionToMap('fullcalendar.js', 740, 23953,24337, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (source.className) {
        if (typeof source.className == 'string') {
          source.className = (_wrap_setLastFunctionCall("fullcalendar.js",743,24098,24127,source.className.split,false,false) || _wrap_popCallStack(source.className.split(/\s+/)));
        }
      } else {
        source.className = [];
      }
      var normalizers = fc.sourceNormalizers;
      for (var i = 0; i < normalizers.length; i++) {
(_wrap_setLastFunctionCall("fullcalendar.js",750,24300,24322,null,false,false) || _wrap_popCallStack(        normalizers[i](source)));
      }
    }
    function isSourcesEqual(source1, source2) {
_wrap_addFunctionToMap('fullcalendar.js', 753, 24342,24486, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return source1 && source2 && (_wrap_setLastFunctionCall("fullcalendar.js",754,24421,24448,getSourcePrimitive,false,false) || _wrap_popCallStack(getSourcePrimitive(source1))) == (_wrap_setLastFunctionCall("fullcalendar.js",754,24452,24479,getSourcePrimitive,false,false) || _wrap_popCallStack(getSourcePrimitive(source2)));
    }
    function getSourcePrimitive(source) {
_wrap_addFunctionToMap('fullcalendar.js', 756, 24491,24621, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
_wrap_addFunctionToMap('fullcalendar.js', 768, 24955,25095, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",769,24995,25029,d.setFullYear,false,false) || _wrap_popCallStack(    d.setFullYear((_wrap_setLastFunctionCall("fullcalendar.js",769,25009,25024,d.getFullYear,false,false) || _wrap_popCallStack(d.getFullYear())) + n)));
    if (!keepTime) {
(_wrap_setLastFunctionCall("fullcalendar.js",771,25058,25070,clearTime,false,false) || _wrap_popCallStack(      clearTime(d)));
    }
    return d;
  }
  function addMonths(d, n, keepTime) {
_wrap_addFunctionToMap('fullcalendar.js', 775, 25098,25461, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (+d) {
      var m = (_wrap_setLastFunctionCall("fullcalendar.js",777,25163,25175,d.getMonth,false,false) || _wrap_popCallStack(d.getMonth())) + n, check = (_wrap_setLastFunctionCall("fullcalendar.js",777,25189,25201,cloneDate,false,false) || _wrap_popCallStack(cloneDate(d)));
(_wrap_setLastFunctionCall("fullcalendar.js",778,25209,25225,check.setDate,false,false) || _wrap_popCallStack(      check.setDate(1)));
(_wrap_setLastFunctionCall("fullcalendar.js",779,25233,25250,check.setMonth,false,false) || _wrap_popCallStack(      check.setMonth(m)));
(_wrap_setLastFunctionCall("fullcalendar.js",780,25258,25271,d.setMonth,false,false) || _wrap_popCallStack(      d.setMonth(m)));
      if (!keepTime) {
(_wrap_setLastFunctionCall("fullcalendar.js",782,25304,25316,clearTime,false,false) || _wrap_popCallStack(        clearTime(d)));
      }
      while ((_wrap_setLastFunctionCall("fullcalendar.js",784,25339,25351,d.getMonth,false,false) || _wrap_popCallStack(d.getMonth())) != (_wrap_setLastFunctionCall("fullcalendar.js",784,25355,25371,check.getMonth,false,false) || _wrap_popCallStack(check.getMonth()))) {
(_wrap_setLastFunctionCall("fullcalendar.js",785,25383,25428,d.setDate,false,false) || _wrap_popCallStack(        d.setDate((_wrap_setLastFunctionCall("fullcalendar.js",785,25393,25404,d.getDate,false,false) || _wrap_popCallStack(d.getDate())) + (d < check ? 1 : -1))));
      }
    }
    return d;
  }
  function addDays(d, n, keepTime) {
_wrap_addFunctionToMap('fullcalendar.js', 790, 25464,25739, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (+d) {
      var dd = (_wrap_setLastFunctionCall("fullcalendar.js",792,25528,25539,d.getDate,false,false) || _wrap_popCallStack(d.getDate())) + n, check = (_wrap_setLastFunctionCall("fullcalendar.js",792,25553,25565,cloneDate,false,false) || _wrap_popCallStack(cloneDate(d)));
(_wrap_setLastFunctionCall("fullcalendar.js",793,25573,25590,check.setHours,false,false) || _wrap_popCallStack(      check.setHours(9)));
(_wrap_setLastFunctionCall("fullcalendar.js",794,25598,25615,check.setDate,false,false) || _wrap_popCallStack(      check.setDate(dd)));
(_wrap_setLastFunctionCall("fullcalendar.js",795,25623,25636,d.setDate,false,false) || _wrap_popCallStack(      d.setDate(dd)));
      if (!keepTime) {
(_wrap_setLastFunctionCall("fullcalendar.js",797,25669,25681,clearTime,false,false) || _wrap_popCallStack(        clearTime(d)));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",799,25697,25714,fixDate,false,false) || _wrap_popCallStack(      fixDate(d, check)));
    }
    return d;
  }
  function fixDate(d, check) {
_wrap_addFunctionToMap('fullcalendar.js', 803, 25742,25905, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (+d) {
      while ((_wrap_setLastFunctionCall("fullcalendar.js",805,25798,25809,d.getDate,false,false) || _wrap_popCallStack(d.getDate())) != (_wrap_setLastFunctionCall("fullcalendar.js",805,25813,25828,check.getDate,false,false) || _wrap_popCallStack(check.getDate()))) {
(_wrap_setLastFunctionCall("fullcalendar.js",806,25840,25886,d.setTime,false,false) || _wrap_popCallStack(        d.setTime(+d + (d < check ? 1 : -1) * HOUR_MS)));
      }
    }
  }
  function addMinutes(d, n) {
_wrap_addFunctionToMap('fullcalendar.js', 810, 25908,25991, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",811,25940,25972,d.setMinutes,false,false) || _wrap_popCallStack(    d.setMinutes((_wrap_setLastFunctionCall("fullcalendar.js",811,25953,25967,d.getMinutes,false,false) || _wrap_popCallStack(d.getMinutes())) + n)));
    return d;
  }
  function clearTime(d) {
_wrap_addFunctionToMap('fullcalendar.js', 814, 25994,26122, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",815,26022,26035,d.setHours,false,false) || _wrap_popCallStack(    d.setHours(0)));
(_wrap_setLastFunctionCall("fullcalendar.js",816,26041,26056,d.setMinutes,false,false) || _wrap_popCallStack(    d.setMinutes(0)));
(_wrap_setLastFunctionCall("fullcalendar.js",817,26062,26077,d.setSeconds,false,false) || _wrap_popCallStack(    d.setSeconds(0)));
(_wrap_setLastFunctionCall("fullcalendar.js",818,26083,26103,d.setMilliseconds,false,false) || _wrap_popCallStack(    d.setMilliseconds(0)));
    return d;
  }
  function cloneDate(d, dontKeepTime) {
_wrap_addFunctionToMap('fullcalendar.js', 821, 26125,26259, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (dontKeepTime) {
      return (_wrap_setLastFunctionCall("fullcalendar.js",823,26200,26223,clearTime,false,false) || _wrap_popCallStack(clearTime((_wrap_setLastFunctionCall("fullcalendar.js",823,26210,26222,Date,false,false) || _wrap_popCallStack(new Date(+d))))));
    }
    return (_wrap_setLastFunctionCall("fullcalendar.js",825,26242,26254,Date,false,false) || _wrap_popCallStack(new Date(+d)));
  }
  function zeroDate() {
_wrap_addFunctionToMap('fullcalendar.js', 827, 26262,26390, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var i = 0, d;
    do {
      d = (_wrap_setLastFunctionCall("fullcalendar.js",830,26321,26343,Date,false,false) || _wrap_popCallStack(new Date(1970, i++, 1)));
    } while ((_wrap_setLastFunctionCall("fullcalendar.js",831,26358,26370,d.getHours,false,false) || _wrap_popCallStack(d.getHours())));
    return d;
  }
  function skipWeekend(date, inc, excl) {
_wrap_addFunctionToMap('fullcalendar.js', 834, 26393,26597, (typeof arguments === 'object' ? arguments.callee.caller : null));

    inc = inc || 1;
    while (!(_wrap_setLastFunctionCall("fullcalendar.js",836,26465,26478,date.getDay,false,false) || _wrap_popCallStack(date.getDay())) || (excl && (_wrap_setLastFunctionCall("fullcalendar.js",836,26491,26504,date.getDay,false,false) || _wrap_popCallStack(date.getDay())) == 1 || !excl && (_wrap_setLastFunctionCall("fullcalendar.js",836,26522,26535,date.getDay,false,false) || _wrap_popCallStack(date.getDay())) == 6)) {
(_wrap_setLastFunctionCall("fullcalendar.js",837,26551,26569,addDays,false,false) || _wrap_popCallStack(      addDays(date, inc)));
    }
    return date;
  }
  function dayDiff(d1, d2) {
_wrap_addFunctionToMap('fullcalendar.js', 841, 26600,26707, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return (_wrap_setLastFunctionCall("fullcalendar.js",842,26638,26702,Math.round,false,false) || _wrap_popCallStack(Math.round(((_wrap_setLastFunctionCall("fullcalendar.js",842,26650,26669,cloneDate,false,false) || _wrap_popCallStack(cloneDate(d1, true))) - (_wrap_setLastFunctionCall("fullcalendar.js",842,26672,26691,cloneDate,false,false) || _wrap_popCallStack(cloneDate(d2, true)))) / DAY_MS)));
  }
  function setYMD(date, y, m, d) {
_wrap_addFunctionToMap('fullcalendar.js', 844, 26710,27040, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (y !== undefined && y != (_wrap_setLastFunctionCall("fullcalendar.js",845,26775,26793,date.getFullYear,false,false) || _wrap_popCallStack(date.getFullYear()))) {
(_wrap_setLastFunctionCall("fullcalendar.js",846,26803,26818,date.setDate,false,false) || _wrap_popCallStack(      date.setDate(1)));
(_wrap_setLastFunctionCall("fullcalendar.js",847,26826,26842,date.setMonth,false,false) || _wrap_popCallStack(      date.setMonth(0)));
(_wrap_setLastFunctionCall("fullcalendar.js",848,26850,26869,date.setFullYear,false,false) || _wrap_popCallStack(      date.setFullYear(y)));
    }
    if (m !== undefined && m != (_wrap_setLastFunctionCall("fullcalendar.js",850,26909,26924,date.getMonth,false,false) || _wrap_popCallStack(date.getMonth()))) {
(_wrap_setLastFunctionCall("fullcalendar.js",851,26934,26949,date.setDate,false,false) || _wrap_popCallStack(      date.setDate(1)));
(_wrap_setLastFunctionCall("fullcalendar.js",852,26957,26973,date.setMonth,false,false) || _wrap_popCallStack(      date.setMonth(m)));
    }
    if (d !== undefined) {
(_wrap_setLastFunctionCall("fullcalendar.js",855,27014,27029,date.setDate,false,false) || _wrap_popCallStack(      date.setDate(d)));
    }
  }
  function parseDate(s, ignoreTimezone) {
_wrap_addFunctionToMap('fullcalendar.js', 858, 27043,27514, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (typeof s == 'object') {
      return s;
    }
    if (typeof s == 'number') {
      return (_wrap_setLastFunctionCall("fullcalendar.js",863,27182,27200,Date,false,false) || _wrap_popCallStack(new Date(s * 1000)));
    }
    if (typeof s == 'string') {
      if ((_wrap_setLastFunctionCall("fullcalendar.js",866,27250,27274,s.match,false,false) || _wrap_popCallStack(s.match(/^\d+(\.\d+)?$/)))) {
        return (_wrap_setLastFunctionCall("fullcalendar.js",867,27293,27323,Date,false,false) || _wrap_popCallStack(new Date((_wrap_setLastFunctionCall("fullcalendar.js",867,27302,27315,parseFloat,false,false) || _wrap_popCallStack(parseFloat(s))) * 1000)));
      }
      if (ignoreTimezone === undefined) {
        ignoreTimezone = true;
      }
      return (_wrap_setLastFunctionCall("fullcalendar.js",872,27427,27458,parseISO8601,false,false) || _wrap_popCallStack(parseISO8601(s, ignoreTimezone))) || (s ? (_wrap_setLastFunctionCall("fullcalendar.js",872,27467,27478,Date,false,false) || _wrap_popCallStack(new Date(s))) : null);
    }
    return null;
  }
  function parseISO8601(s, ignoreTimezone) {
_wrap_addFunctionToMap('fullcalendar.js', 876, 27517,28760, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var m = (_wrap_setLastFunctionCall("fullcalendar.js",877,27572,27716,s.match,false,false) || _wrap_popCallStack(s.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/)));
    if (!m) {
      return null;
    }
    var date = (_wrap_setLastFunctionCall("fullcalendar.js",881,27772,27792,Date,false,false) || _wrap_popCallStack(new Date(m[1], 0, 1)));
    if (ignoreTimezone || !m[13]) {
      var check = (_wrap_setLastFunctionCall("fullcalendar.js",883,27848,27874,Date,false,false) || _wrap_popCallStack(new Date(m[1], 0, 1, 9, 0)));
      if (m[3]) {
(_wrap_setLastFunctionCall("fullcalendar.js",885,27902,27925,date.setMonth,false,false) || _wrap_popCallStack(        date.setMonth(m[3] - 1)));
(_wrap_setLastFunctionCall("fullcalendar.js",886,27935,27959,check.setMonth,false,false) || _wrap_popCallStack(        check.setMonth(m[3] - 1)));
      }
      if (m[5]) {
(_wrap_setLastFunctionCall("fullcalendar.js",889,27995,28013,date.setDate,false,false) || _wrap_popCallStack(        date.setDate(m[5])));
(_wrap_setLastFunctionCall("fullcalendar.js",890,28023,28042,check.setDate,false,false) || _wrap_popCallStack(        check.setDate(m[5])));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",892,28058,28078,fixDate,false,false) || _wrap_popCallStack(      fixDate(date, check)));
      if (m[7]) {
(_wrap_setLastFunctionCall("fullcalendar.js",894,28106,28125,date.setHours,false,false) || _wrap_popCallStack(        date.setHours(m[7])));
      }
      if (m[8]) {
(_wrap_setLastFunctionCall("fullcalendar.js",897,28161,28182,date.setMinutes,false,false) || _wrap_popCallStack(        date.setMinutes(m[8])));
      }
      if (m[10]) {
(_wrap_setLastFunctionCall("fullcalendar.js",900,28219,28241,date.setSeconds,false,false) || _wrap_popCallStack(        date.setSeconds(m[10])));
      }
      if (m[12]) {
(_wrap_setLastFunctionCall("fullcalendar.js",903,28278,28327,date.setMilliseconds,false,false) || _wrap_popCallStack(        date.setMilliseconds((_wrap_setLastFunctionCall("fullcalendar.js",903,28299,28319,Number,false,false) || _wrap_popCallStack(Number('0.' + m[12]))) * 1000)));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",905,28343,28363,fixDate,false,false) || _wrap_popCallStack(      fixDate(date, check)));
    } else {
(_wrap_setLastFunctionCall("fullcalendar.js",907,28384,28441,date.setUTCFullYear,false,false) || _wrap_popCallStack(      date.setUTCFullYear(m[1], m[3] ? m[3] - 1 : 0, m[5] || 1)));
(_wrap_setLastFunctionCall("fullcalendar.js",908,28449,28540,date.setUTCHours,false,false) || _wrap_popCallStack(      date.setUTCHours(m[7] || 0, m[8] || 0, m[10] || 0, m[12] ? (_wrap_setLastFunctionCall("fullcalendar.js",908,28508,28528,Number,false,false) || _wrap_popCallStack(Number('0.' + m[12]))) * 1000 : 0)));
      if (m[14]) {
        var offset = (_wrap_setLastFunctionCall("fullcalendar.js",910,28582,28595,Number,false,false) || _wrap_popCallStack(Number(m[16]))) * 60 + (m[18] ? (_wrap_setLastFunctionCall("fullcalendar.js",910,28612,28625,Number,false,false) || _wrap_popCallStack(Number(m[18]))) : 0);
        offset *= m[15] == '-' ? 1 : -1;
        date = (_wrap_setLastFunctionCall("fullcalendar.js",912,28688,28724,Date,false,false) || _wrap_popCallStack(new Date(+date + offset * 60 * 1000)));
      }
    }
    return date;
  }
  function parseTime(s) {
_wrap_addFunctionToMap('fullcalendar.js', 917, 28763,29217, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (typeof s == 'number') {
      return s * 60;
    }
    if (typeof s == 'object') {
      return (_wrap_setLastFunctionCall("fullcalendar.js",922,28891,28903,s.getHours,false,false) || _wrap_popCallStack(s.getHours())) * 60 + (_wrap_setLastFunctionCall("fullcalendar.js",922,28911,28925,s.getMinutes,false,false) || _wrap_popCallStack(s.getMinutes()));
    }
    var m = (_wrap_setLastFunctionCall("fullcalendar.js",924,28945,28981,s.match,false,false) || _wrap_popCallStack(s.match(/(\d+)(?::(\d+))?\s*(\w+)?/)));
    if (m) {
      var h = (_wrap_setLastFunctionCall("fullcalendar.js",926,29010,29028,parseInt,false,false) || _wrap_popCallStack(parseInt(m[1], 10)));
      if (m[3]) {
        h %= 12;
        if ((_wrap_setLastFunctionCall("fullcalendar.js",929,29077,29105,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",929,29077,29095,m[3].toLowerCase,false,false) || _wrap_popCallStack(m[3].toLowerCase())).charAt(0))) == 'p') {
          h += 12;
        }
      }
      return h * 60 + (m[2] ? (_wrap_setLastFunctionCall("fullcalendar.js",933,29183,29201,parseInt,false,false) || _wrap_popCallStack(parseInt(m[2], 10))) : 0);
    }
  }
  function formatDate(date, format, options) {
_wrap_addFunctionToMap('fullcalendar.js', 936, 29220,29321, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return (_wrap_setLastFunctionCall("fullcalendar.js",937,29276,29316,formatDates,false,false) || _wrap_popCallStack(formatDates(date, null, format, options)));
  }
  function formatDates(date1, date2, format, options) {
_wrap_addFunctionToMap('fullcalendar.js', 939, 29324,31246, (typeof arguments === 'object' ? arguments.callee.caller : null));

    options = options || defaults;
    var date = date1, otherDate = date2, i, len = format.length, c, i2, formatter, res = '';
    for (i = 0; i < len; i++) {
      c = (_wrap_setLastFunctionCall("fullcalendar.js",943,29548,29564,format.charAt,false,false) || _wrap_popCallStack(format.charAt(i)));
      if (c == '\'') {
        for (i2 = i + 1; i2 < len; i2++) {
          if ((_wrap_setLastFunctionCall("fullcalendar.js",946,29646,29663,format.charAt,false,false) || _wrap_popCallStack(format.charAt(i2))) == '\'') {
            if (date) {
              if (i2 == i + 1) {
                res += '\'';
              } else {
                res += (_wrap_setLastFunctionCall("fullcalendar.js",951,29807,29834,format.substring,false,false) || _wrap_popCallStack(format.substring(i + 1, i2)));
              }
              i = i2;
            }
            break;
          }
        }
      } else if (c == '(') {
        for (i2 = i + 1; i2 < len; i2++) {
          if ((_wrap_setLastFunctionCall("fullcalendar.js",960,30015,30032,format.charAt,false,false) || _wrap_popCallStack(format.charAt(i2))) == ')') {
            var subres = (_wrap_setLastFunctionCall("fullcalendar.js",961,30068,30122,formatDate,false,false) || _wrap_popCallStack(formatDate(date, (_wrap_setLastFunctionCall("fullcalendar.js",961,30085,30112,format.substring,false,false) || _wrap_popCallStack(format.substring(i + 1, i2))), options)));
            if ((_wrap_setLastFunctionCall("fullcalendar.js",962,30140,30178,parseInt,false,false) || _wrap_popCallStack(parseInt((_wrap_setLastFunctionCall("fullcalendar.js",962,30149,30173,subres.replace,false,false) || _wrap_popCallStack(subres.replace(/\D/, ''))), 10)))) {
              res += subres;
            }
            i = i2;
            break;
          }
        }
      } else if (c == '[') {
        for (i2 = i + 1; i2 < len; i2++) {
          if ((_wrap_setLastFunctionCall("fullcalendar.js",971,30372,30389,format.charAt,false,false) || _wrap_popCallStack(format.charAt(i2))) == ']') {
            var subformat = (_wrap_setLastFunctionCall("fullcalendar.js",972,30428,30455,format.substring,false,false) || _wrap_popCallStack(format.substring(i + 1, i2)));
            var subres = (_wrap_setLastFunctionCall("fullcalendar.js",973,30482,30518,formatDate,false,false) || _wrap_popCallStack(formatDate(date, subformat, options)));
            if (subres != (_wrap_setLastFunctionCall("fullcalendar.js",974,30546,30587,formatDate,false,false) || _wrap_popCallStack(formatDate(otherDate, subformat, options)))) {
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
          if (formatter = dateFormatters[(_wrap_setLastFunctionCall("fullcalendar.js",989,30946,30969,format.substring,false,false) || _wrap_popCallStack(format.substring(i, i2)))]) {
            if (date) {
              res += (_wrap_setLastFunctionCall("fullcalendar.js",991,31019,31043,formatter,false,false) || _wrap_popCallStack(formatter(date, options)));
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
_wrap_addFunctionToMap('fullcalendar.js', 1007, 31278,31318, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1008,31301,31315,d.getSeconds,false,false) || _wrap_popCallStack(d.getSeconds()));
}, ss: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1009, 31324,31373, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1010,31347,31370,zeroPad,false,false) || _wrap_popCallStack(zeroPad((_wrap_setLastFunctionCall("fullcalendar.js",1010,31355,31369,d.getSeconds,false,false) || _wrap_popCallStack(d.getSeconds())))));
}, m: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1011, 31378,31418, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1012,31401,31415,d.getMinutes,false,false) || _wrap_popCallStack(d.getMinutes()));
}, mm: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1013, 31424,31473, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1014,31447,31470,zeroPad,false,false) || _wrap_popCallStack(zeroPad((_wrap_setLastFunctionCall("fullcalendar.js",1014,31455,31469,d.getMinutes,false,false) || _wrap_popCallStack(d.getMinutes())))));
}, h: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1015, 31478,31527, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1016,31501,31513,d.getHours,false,false) || _wrap_popCallStack(d.getHours())) % 12 || 12;
}, hh: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1017, 31533,31591, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1018,31556,31588,zeroPad,false,false) || _wrap_popCallStack(zeroPad((_wrap_setLastFunctionCall("fullcalendar.js",1018,31564,31576,d.getHours,false,false) || _wrap_popCallStack(d.getHours())) % 12 || 12)));
}, H: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1019, 31596,31634, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1020,31619,31631,d.getHours,false,false) || _wrap_popCallStack(d.getHours()));
}, HH: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1021, 31640,31687, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1022,31663,31684,zeroPad,false,false) || _wrap_popCallStack(zeroPad((_wrap_setLastFunctionCall("fullcalendar.js",1022,31671,31683,d.getHours,false,false) || _wrap_popCallStack(d.getHours())))));
}, d: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1023, 31692,31729, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1024,31715,31726,d.getDate,false,false) || _wrap_popCallStack(d.getDate()));
}, dd: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1025, 31735,31781, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1026,31758,31778,zeroPad,false,false) || _wrap_popCallStack(zeroPad((_wrap_setLastFunctionCall("fullcalendar.js",1026,31766,31777,d.getDate,false,false) || _wrap_popCallStack(d.getDate())))));
}, ddd: function(d, o) {
_wrap_addFunctionToMap('fullcalendar.js', 1027, 31788,31844, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return o.dayNamesShort[(_wrap_setLastFunctionCall("fullcalendar.js",1028,31830,31840,d.getDay,false,false) || _wrap_popCallStack(d.getDay()))];
}, dddd: function(d, o) {
_wrap_addFunctionToMap('fullcalendar.js', 1029, 31852,31903, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return o.dayNames[(_wrap_setLastFunctionCall("fullcalendar.js",1030,31889,31899,d.getDay,false,false) || _wrap_popCallStack(d.getDay()))];
}, M: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1031, 31908,31950, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1032,31931,31943,d.getMonth,false,false) || _wrap_popCallStack(d.getMonth())) + 1;
}, MM: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1033, 31956,32007, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1034,31979,32004,zeroPad,false,false) || _wrap_popCallStack(zeroPad((_wrap_setLastFunctionCall("fullcalendar.js",1034,31987,31999,d.getMonth,false,false) || _wrap_popCallStack(d.getMonth())) + 1)));
}, MMM: function(d, o) {
_wrap_addFunctionToMap('fullcalendar.js', 1035, 32014,32074, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return o.monthNamesShort[(_wrap_setLastFunctionCall("fullcalendar.js",1036,32058,32070,d.getMonth,false,false) || _wrap_popCallStack(d.getMonth()))];
}, MMMM: function(d, o) {
_wrap_addFunctionToMap('fullcalendar.js', 1037, 32082,32137, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return o.monthNames[(_wrap_setLastFunctionCall("fullcalendar.js",1038,32121,32133,d.getMonth,false,false) || _wrap_popCallStack(d.getMonth()))];
}, yy: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1039, 32143,32204, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1040,32167,32201,null,false,false) || _wrap_popCallStack(((_wrap_setLastFunctionCall("fullcalendar.js",1040,32167,32182,d.getFullYear,false,false) || _wrap_popCallStack(d.getFullYear())) + '').substring(2)));
}, yyyy: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1041, 32212,32253, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1042,32235,32250,d.getFullYear,false,false) || _wrap_popCallStack(d.getFullYear()));
}, t: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1043, 32258,32313, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1044,32281,32293,d.getHours,false,false) || _wrap_popCallStack(d.getHours())) < 12 ? 'a' : 'p';
}, tt: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1045, 32319,32376, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1046,32342,32354,d.getHours,false,false) || _wrap_popCallStack(d.getHours())) < 12 ? 'am' : 'pm';
}, T: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1047, 32381,32436, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1048,32404,32416,d.getHours,false,false) || _wrap_popCallStack(d.getHours())) < 12 ? 'A' : 'P';
}, TT: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1049, 32442,32499, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1050,32465,32477,d.getHours,false,false) || _wrap_popCallStack(d.getHours())) < 12 ? 'AM' : 'PM';
}, u: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1051, 32504,32575, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1052,32527,32572,formatDate,false,false) || _wrap_popCallStack(formatDate(d, 'yyyy-MM-dd\'T\'HH:mm:ss\'Z\'')));
}, S: function(d) {
_wrap_addFunctionToMap('fullcalendar.js', 1053, 32580,32726, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var date = (_wrap_setLastFunctionCall("fullcalendar.js",1054,32607,32618,d.getDate,false,false) || _wrap_popCallStack(d.getDate()));
  if (date > 10 && date < 20) {
    return 'th';
  }
  return ['st', 'nd', 'rd'][date % 10 - 1] || 'th';
}};
  fc.applyAll = applyAll;
  function exclEndDay(event) {
_wrap_addFunctionToMap('fullcalendar.js', 1061, 32757,32929, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (event.end) {
      return (_wrap_setLastFunctionCall("fullcalendar.js",1063,32820,32856,_exclEndDay,false,false) || _wrap_popCallStack(_exclEndDay(event.end, event.allDay)));
    } else {
      return (_wrap_setLastFunctionCall("fullcalendar.js",1065,32884,32918,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",1065,32892,32914,cloneDate,false,false) || _wrap_popCallStack(cloneDate(event.start))), 1)));
    }
  }
  function _exclEndDay(end, allDay) {
_wrap_addFunctionToMap('fullcalendar.js', 1068, 32932,33089, (typeof arguments === 'object' ? arguments.callee.caller : null));

    end = (_wrap_setLastFunctionCall("fullcalendar.js",1069,32978,32992,cloneDate,false,false) || _wrap_popCallStack(cloneDate(end)));
    return allDay || (_wrap_setLastFunctionCall("fullcalendar.js",1070,33015,33029,end.getHours,false,false) || _wrap_popCallStack(end.getHours())) || (_wrap_setLastFunctionCall("fullcalendar.js",1070,33033,33049,end.getMinutes,false,false) || _wrap_popCallStack(end.getMinutes())) ? (_wrap_setLastFunctionCall("fullcalendar.js",1070,33052,33067,addDays,false,false) || _wrap_popCallStack(addDays(end, 1))) : (_wrap_setLastFunctionCall("fullcalendar.js",1070,33070,33084,clearTime,false,false) || _wrap_popCallStack(clearTime(end)));
  }
  function segCmp(a, b) {
_wrap_addFunctionToMap('fullcalendar.js', 1072, 33092,33197, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return (b.msLength - a.msLength) * 100 + (a.event.start - b.event.start);
  }
  function segsCollide(seg1, seg2) {
_wrap_addFunctionToMap('fullcalendar.js', 1075, 33200,33297, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return seg1.end > seg2.start && seg1.start < seg2.end;
  }
  function sliceSegs(events, visEventEnds, start, end) {
_wrap_addFunctionToMap('fullcalendar.js', 1078, 33300,34163, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var segs = [], i, len = events.length, event, eventStart, eventEnd, segStart, segEnd, isStart, isEnd;
    for (i = 0; i < len; i++) {
      event = events[i];
      eventStart = event.start;
      eventEnd = visEventEnds[i];
      if (eventEnd > start && eventStart < end) {
        if (eventStart < start) {
          segStart = (_wrap_setLastFunctionCall("fullcalendar.js",1086,33689,33705,cloneDate,false,false) || _wrap_popCallStack(cloneDate(start)));
          isStart = false;
        } else {
          segStart = eventStart;
          isStart = true;
        }
        if (eventEnd > end) {
          segEnd = (_wrap_setLastFunctionCall("fullcalendar.js",1093,33869,33883,cloneDate,false,false) || _wrap_popCallStack(cloneDate(end)));
          isEnd = false;
        } else {
          segEnd = eventEnd;
          isEnd = true;
        }
(_wrap_setLastFunctionCall("fullcalendar.js",1099,33998,34114,segs.push,false,false) || _wrap_popCallStack(        segs.push({event: event, start: segStart, end: segEnd, isStart: isStart, isEnd: isEnd, msLength: segEnd - segStart})));
      }
    }
    return (_wrap_setLastFunctionCall("fullcalendar.js",1102,34141,34158,segs.sort,false,false) || _wrap_popCallStack(segs.sort(segCmp)));
  }
  function stackSegs(segs) {
_wrap_addFunctionToMap('fullcalendar.js', 1104, 34166,34801, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var levels = [], i, len = segs.length, seg, j, collide, k;
    for (i = 0; i < len; i++) {
      seg = segs[i];
      j = 0;
      while (true) {
        collide = false;
        if (levels[j]) {
          for (k = 0; k < levels[j].length; k++) {
            if ((_wrap_setLastFunctionCall("fullcalendar.js",1113,34460,34490,segsCollide,false,false) || _wrap_popCallStack(segsCollide(levels[j][k], seg)))) {
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
(_wrap_setLastFunctionCall("fullcalendar.js",1126,34702,34721,levels[j].push,false,false) || _wrap_popCallStack(        levels[j].push(seg)));
      } else {
        levels[j] = [seg];
      }
    }
    return levels;
  }
  function lazySegBind(container, segs, bindHandlers) {
_wrap_addFunctionToMap('fullcalendar.js', 1133, 34804,35224, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1134,34862,35219,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("fullcalendar.js",1134,34862,34891,container.unbind,false,false) || _wrap_popCallStack(container.unbind('mouseover'))).mouseover(function(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 1134, 34902,35218, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var parent = ev.target, e, i, seg;
  while (parent != this) {
    e = parent;
    parent = parent.parentNode;
  }
  if ((i = e._fci) !== undefined) {
    e._fci = undefined;
    seg = segs[i];
(_wrap_setLastFunctionCall("fullcalendar.js",1143,35116,35157,bindHandlers,false,false) || _wrap_popCallStack(    bindHandlers(seg.event, seg.element, seg)));
(_wrap_setLastFunctionCall("fullcalendar.js",1144,35163,35187,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("fullcalendar.js",1144,35163,35175,$,false,false) || _wrap_popCallStack($(ev.target))).trigger(ev)));
  }
(_wrap_setLastFunctionCall("fullcalendar.js",1146,35195,35215,ev.stopPropagation,false,false) || _wrap_popCallStack(  ev.stopPropagation()));
})));
  }
  function setOuterWidth(element, width, includeMargins) {
_wrap_addFunctionToMap('fullcalendar.js', 1149, 35227,35431, (typeof arguments === 'object' ? arguments.callee.caller : null));

    for (var i = 0, e; i < element.length; i++) {
      e = (_wrap_setLastFunctionCall("fullcalendar.js",1151,35344,35357,$,false,false) || _wrap_popCallStack($(element[i])));
(_wrap_setLastFunctionCall("fullcalendar.js",1152,35365,35420,e.width,false,false) || _wrap_popCallStack(      e.width((_wrap_setLastFunctionCall("fullcalendar.js",1152,35373,35419,Math.max,false,false) || _wrap_popCallStack(Math.max(0, width - (_wrap_setLastFunctionCall("fullcalendar.js",1152,35393,35418,hsides,false,false) || _wrap_popCallStack(hsides(e, includeMargins)))))))));
    }
  }
  function setOuterHeight(element, height, includeMargins) {
_wrap_addFunctionToMap('fullcalendar.js', 1155, 35434,35642, (typeof arguments === 'object' ? arguments.callee.caller : null));

    for (var i = 0, e; i < element.length; i++) {
      e = (_wrap_setLastFunctionCall("fullcalendar.js",1157,35553,35566,$,false,false) || _wrap_popCallStack($(element[i])));
(_wrap_setLastFunctionCall("fullcalendar.js",1158,35574,35631,e.height,false,false) || _wrap_popCallStack(      e.height((_wrap_setLastFunctionCall("fullcalendar.js",1158,35583,35630,Math.max,false,false) || _wrap_popCallStack(Math.max(0, height - (_wrap_setLastFunctionCall("fullcalendar.js",1158,35604,35629,vsides,false,false) || _wrap_popCallStack(vsides(e, includeMargins)))))))));
    }
  }
  function hsides(element, includeMargins) {
_wrap_addFunctionToMap('fullcalendar.js', 1161, 35645,35784, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return (_wrap_setLastFunctionCall("fullcalendar.js",1162,35699,35716,hpadding,false,false) || _wrap_popCallStack(hpadding(element))) + (_wrap_setLastFunctionCall("fullcalendar.js",1162,35719,35736,hborders,false,false) || _wrap_popCallStack(hborders(element))) + (includeMargins ? (_wrap_setLastFunctionCall("fullcalendar.js",1162,35757,35774,hmargins,false,false) || _wrap_popCallStack(hmargins(element))) : 0);
  }
  function hpadding(element) {
_wrap_addFunctionToMap('fullcalendar.js', 1164, 35787,35956, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return ((_wrap_setLastFunctionCall("fullcalendar.js",1165,35828,35881,parseFloat,false,false) || _wrap_popCallStack(parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1165,35839,35880,$.curCSS,false,false) || _wrap_popCallStack($.curCSS(element[0], 'paddingLeft', true)))))) || 0) + ((_wrap_setLastFunctionCall("fullcalendar.js",1165,35891,35945,parseFloat,false,false) || _wrap_popCallStack(parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1165,35902,35944,$.curCSS,false,false) || _wrap_popCallStack($.curCSS(element[0], 'paddingRight', true)))))) || 0);
  }
  function hmargins(element) {
_wrap_addFunctionToMap('fullcalendar.js', 1167, 35959,36126, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return ((_wrap_setLastFunctionCall("fullcalendar.js",1168,36000,36052,parseFloat,false,false) || _wrap_popCallStack(parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1168,36011,36051,$.curCSS,false,false) || _wrap_popCallStack($.curCSS(element[0], 'marginLeft', true)))))) || 0) + ((_wrap_setLastFunctionCall("fullcalendar.js",1168,36062,36115,parseFloat,false,false) || _wrap_popCallStack(parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1168,36073,36114,$.curCSS,false,false) || _wrap_popCallStack($.curCSS(element[0], 'marginRight', true)))))) || 0);
  }
  function hborders(element) {
_wrap_addFunctionToMap('fullcalendar.js', 1170, 36129,36306, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return ((_wrap_setLastFunctionCall("fullcalendar.js",1171,36170,36227,parseFloat,false,false) || _wrap_popCallStack(parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1171,36181,36226,$.curCSS,false,false) || _wrap_popCallStack($.curCSS(element[0], 'borderLeftWidth', true)))))) || 0) + ((_wrap_setLastFunctionCall("fullcalendar.js",1171,36237,36295,parseFloat,false,false) || _wrap_popCallStack(parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1171,36248,36294,$.curCSS,false,false) || _wrap_popCallStack($.curCSS(element[0], 'borderRightWidth', true)))))) || 0);
  }
  function vsides(element, includeMargins) {
_wrap_addFunctionToMap('fullcalendar.js', 1173, 36309,36448, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return (_wrap_setLastFunctionCall("fullcalendar.js",1174,36363,36380,vpadding,false,false) || _wrap_popCallStack(vpadding(element))) + (_wrap_setLastFunctionCall("fullcalendar.js",1174,36383,36400,vborders,false,false) || _wrap_popCallStack(vborders(element))) + (includeMargins ? (_wrap_setLastFunctionCall("fullcalendar.js",1174,36421,36438,vmargins,false,false) || _wrap_popCallStack(vmargins(element))) : 0);
  }
  function vpadding(element) {
_wrap_addFunctionToMap('fullcalendar.js', 1176, 36451,36620, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return ((_wrap_setLastFunctionCall("fullcalendar.js",1177,36492,36544,parseFloat,false,false) || _wrap_popCallStack(parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1177,36503,36543,$.curCSS,false,false) || _wrap_popCallStack($.curCSS(element[0], 'paddingTop', true)))))) || 0) + ((_wrap_setLastFunctionCall("fullcalendar.js",1177,36554,36609,parseFloat,false,false) || _wrap_popCallStack(parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1177,36565,36608,$.curCSS,false,false) || _wrap_popCallStack($.curCSS(element[0], 'paddingBottom', true)))))) || 0);
  }
  function vmargins(element) {
_wrap_addFunctionToMap('fullcalendar.js', 1179, 36623,36790, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return ((_wrap_setLastFunctionCall("fullcalendar.js",1180,36664,36715,parseFloat,false,false) || _wrap_popCallStack(parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1180,36675,36714,$.curCSS,false,false) || _wrap_popCallStack($.curCSS(element[0], 'marginTop', true)))))) || 0) + ((_wrap_setLastFunctionCall("fullcalendar.js",1180,36725,36779,parseFloat,false,false) || _wrap_popCallStack(parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1180,36736,36778,$.curCSS,false,false) || _wrap_popCallStack($.curCSS(element[0], 'marginBottom', true)))))) || 0);
  }
  function vborders(element) {
_wrap_addFunctionToMap('fullcalendar.js', 1182, 36793,36970, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return ((_wrap_setLastFunctionCall("fullcalendar.js",1183,36834,36890,parseFloat,false,false) || _wrap_popCallStack(parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1183,36845,36889,$.curCSS,false,false) || _wrap_popCallStack($.curCSS(element[0], 'borderTopWidth', true)))))) || 0) + ((_wrap_setLastFunctionCall("fullcalendar.js",1183,36900,36959,parseFloat,false,false) || _wrap_popCallStack(parseFloat((_wrap_setLastFunctionCall("fullcalendar.js",1183,36911,36958,$.curCSS,false,false) || _wrap_popCallStack($.curCSS(element[0], 'borderBottomWidth', true)))))) || 0);
  }
  function setMinHeight(element, height) {
_wrap_addFunctionToMap('fullcalendar.js', 1185, 36973,37203, (typeof arguments === 'object' ? arguments.callee.caller : null));

    height = typeof height == 'number' ? height + 'px' : height;
(_wrap_setLastFunctionCall("fullcalendar.js",1187,37083,37198,element.each,false,false) || _wrap_popCallStack(    element.each(function(i, _element) {
_wrap_addFunctionToMap('fullcalendar.js', 1187, 37096,37197, (typeof arguments === 'object' ? arguments.callee.caller : null));

  _element.style.cssText += ';min-height:' + height + ';_height:' + height;
})));
  }
  function noop() {
_wrap_addFunctionToMap('fullcalendar.js', 1191, 37206,37227, (typeof arguments === 'object' ? arguments.callee.caller : null));

  }
  function cmp(a, b) {
_wrap_addFunctionToMap('fullcalendar.js', 1193, 37230,37272, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return a - b;
  }
  function arrayMax(a) {
_wrap_addFunctionToMap('fullcalendar.js', 1196, 37275,37337, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return (_wrap_setLastFunctionCall("fullcalendar.js",1197,37309,37332,Math.max.apply,false,true) || _wrap_popCallStack(Math.max.apply(Math, a)));
  }
  function zeroPad(n) {
_wrap_addFunctionToMap('fullcalendar.js', 1199, 37340,37401, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return (n < 10 ? '0' : '') + n;
  }
  function smartProperty(obj, name) {
_wrap_addFunctionToMap('fullcalendar.js', 1202, 37404,37728, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (obj[name] !== undefined) {
      return obj[name];
    }
    var parts = (_wrap_setLastFunctionCall("fullcalendar.js",1206,37521,37544,name.split,false,false) || _wrap_popCallStack(name.split(/(?=[A-Z])/))), i = parts.length - 1, res;
    for (; i >= 0; i--) {
      res = obj[(_wrap_setLastFunctionCall("fullcalendar.js",1208,37615,37637,parts[i].toLowerCase,false,false) || _wrap_popCallStack(parts[i].toLowerCase()))];
      if (res !== undefined) {
        return res;
      }
    }
    return obj[''];
  }
  function htmlEscape(s) {
_wrap_addFunctionToMap('fullcalendar.js', 1215, 37731,37913, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return (_wrap_setLastFunctionCall("fullcalendar.js",1216,37767,37908,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",1216,37767,37883,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",1216,37767,37859,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",1216,37767,37835,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",1216,37767,37813,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",1216,37767,37791,s.replace,false,false) || _wrap_popCallStack(s.replace(/&/g, '&amp;'))).replace(/</g, '&lt;'))).replace(/>/g, '&gt;'))).replace(/'/g, '&#039;'))).replace(/"/g, '&quot;'))).replace(/\n/g, '<br />')));
  }
  function cssKey(_element) {
_wrap_addFunctionToMap('fullcalendar.js', 1218, 37916,38087, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return _element.id + '/' + _element.className + '/' + (_wrap_setLastFunctionCall("fullcalendar.js",1219,38002,38082,_element.style.cssText.replace,false,false) || _wrap_popCallStack(_element.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/gi, '')));
  }
  function disableTextSelection(element) {
_wrap_addFunctionToMap('fullcalendar.js', 1221, 38090,38258, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1222,38135,38253,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("fullcalendar.js",1222,38135,38198,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",1222,38135,38169,element.attr,false,false) || _wrap_popCallStack(element.attr('unselectable', 'on'))).css('MozUserSelect', 'none'))).bind('selectstart.ui', function() {
_wrap_addFunctionToMap('fullcalendar.js', 1222, 38222,38252, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return false;
})));
  }
  function markFirstLast(e) {
_wrap_addFunctionToMap('fullcalendar.js', 1226, 38261,38434, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1227,38293,38429,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("fullcalendar.js",1227,38293,38409,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",1227,38293,38387,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",1227,38293,38381,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",1227,38293,38360,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",1227,38293,38337,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",1227,38293,38305,e.children,false,false) || _wrap_popCallStack(e.children())).removeClass('fc-first fc-last'))).filter(':first-child'))).addClass('fc-first'))).end())).filter(':last-child'))).addClass('fc-last')));
  }
  function setDayID(cell, date) {
_wrap_addFunctionToMap('fullcalendar.js', 1229, 38437,38598, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1230,38473,38593,cell.each,false,false) || _wrap_popCallStack(    cell.each(function(i, _cell) {
_wrap_addFunctionToMap('fullcalendar.js', 1230, 38483,38592, (typeof arguments === 'object' ? arguments.callee.caller : null));

  _cell.className = (_wrap_setLastFunctionCall("fullcalendar.js",1231,38524,38589,_cell.className.replace,false,false) || _wrap_popCallStack(_cell.className.replace(/^fc-\w*/, 'fc-' + dayIDs[(_wrap_setLastFunctionCall("fullcalendar.js",1231,38574,38587,date.getDay,false,false) || _wrap_popCallStack(date.getDay()))])));
})));
  }
  function getSkinCss(event, opt) {
_wrap_addFunctionToMap('fullcalendar.js', 1234, 38601,39460, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var source = event.source || {};
    var eventColor = event.color;
    var sourceColor = source.color;
    var optionColor = (_wrap_setLastFunctionCall("fullcalendar.js",1238,38764,38781,opt,false,false) || _wrap_popCallStack(opt('eventColor')));
    var backgroundColor = event.backgroundColor || eventColor || source.backgroundColor || sourceColor || (_wrap_setLastFunctionCall("fullcalendar.js",1239,38889,38916,opt,false,false) || _wrap_popCallStack(opt('eventBackgroundColor'))) || optionColor;
    var borderColor = event.borderColor || eventColor || source.borderColor || sourceColor || (_wrap_setLastFunctionCall("fullcalendar.js",1240,39027,39050,opt,false,false) || _wrap_popCallStack(opt('eventBorderColor'))) || optionColor;
    var textColor = event.textColor || source.textColor || (_wrap_setLastFunctionCall("fullcalendar.js",1241,39126,39147,opt,false,false) || _wrap_popCallStack(opt('eventTextColor')));
    var statements = [];
    if (backgroundColor) {
(_wrap_setLastFunctionCall("fullcalendar.js",1244,39207,39261,statements.push,false,false) || _wrap_popCallStack(      statements.push('background-color:' + backgroundColor)));
    }
    if (borderColor) {
(_wrap_setLastFunctionCall("fullcalendar.js",1247,39298,39344,statements.push,false,false) || _wrap_popCallStack(      statements.push('border-color:' + borderColor)));
    }
    if (textColor) {
(_wrap_setLastFunctionCall("fullcalendar.js",1250,39379,39416,statements.push,false,false) || _wrap_popCallStack(      statements.push('color:' + textColor)));
    }
    return (_wrap_setLastFunctionCall("fullcalendar.js",1252,39435,39455,statements.join,false,false) || _wrap_popCallStack(statements.join(';')));
  }
  function applyAll(functions, thisObj, args) {
_wrap_addFunctionToMap('fullcalendar.js', 1254, 39463,39768, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if ((_wrap_setLastFunctionCall("fullcalendar.js",1255,39517,39540,$.isFunction,false,false) || _wrap_popCallStack($.isFunction(functions)))) {
      functions = [functions];
    }
    if (functions) {
      var i;
      var ret;
      for (i = 0; i < functions.length; i++) {
        ret = (_wrap_setLastFunctionCall("fullcalendar.js",1262,39691,39724,functions[i].apply,false,true) || _wrap_popCallStack(functions[i].apply(thisObj, args))) || ret;
      }
      return ret;
    }
  }
  function firstDefined() {
_wrap_addFunctionToMap('fullcalendar.js', 1267, 39771,39932, (typeof arguments === 'object' ? arguments.callee.caller : null));

    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] !== undefined) {
        return arguments[i];
      }
    }
  }
  fcViews.month = MonthView;
  function MonthView(element, calendar) {
_wrap_addFunctionToMap('fullcalendar.js', 1275, 39964,41222, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.render = render;
(_wrap_setLastFunctionCall("fullcalendar.js",1278,40049,40094,BasicView.call,false,true) || _wrap_popCallStack(    BasicView.call(t, element, calendar, 'month')));
    var opt = t.opt;
    var renderBasic = t.renderBasic;
    var formatDate = calendar.formatDate;
    function render(date, delta) {
_wrap_addFunctionToMap('fullcalendar.js', 1282, 40200,41218, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (delta) {
(_wrap_setLastFunctionCall("fullcalendar.js",1284,40258,40280,addMonths,false,false) || _wrap_popCallStack(        addMonths(date, delta)));
(_wrap_setLastFunctionCall("fullcalendar.js",1285,40290,40305,date.setDate,false,false) || _wrap_popCallStack(        date.setDate(1)));
      }
      var start = (_wrap_setLastFunctionCall("fullcalendar.js",1287,40333,40354,cloneDate,false,false) || _wrap_popCallStack(cloneDate(date, true)));
(_wrap_setLastFunctionCall("fullcalendar.js",1288,40362,40378,start.setDate,false,false) || _wrap_popCallStack(      start.setDate(1)));
      var end = (_wrap_setLastFunctionCall("fullcalendar.js",1289,40396,40426,addMonths,false,false) || _wrap_popCallStack(addMonths((_wrap_setLastFunctionCall("fullcalendar.js",1289,40406,40422,cloneDate,false,false) || _wrap_popCallStack(cloneDate(start))), 1)));
      var visStart = (_wrap_setLastFunctionCall("fullcalendar.js",1290,40449,40465,cloneDate,false,false) || _wrap_popCallStack(cloneDate(start)));
      var visEnd = (_wrap_setLastFunctionCall("fullcalendar.js",1291,40486,40500,cloneDate,false,false) || _wrap_popCallStack(cloneDate(end)));
      var firstDay = (_wrap_setLastFunctionCall("fullcalendar.js",1292,40523,40538,opt,false,false) || _wrap_popCallStack(opt('firstDay')));
      var nwe = (_wrap_setLastFunctionCall("fullcalendar.js",1293,40556,40571,opt,false,false) || _wrap_popCallStack(opt('weekends'))) ? 0 : 1;
      if (nwe) {
(_wrap_setLastFunctionCall("fullcalendar.js",1295,40606,40627,skipWeekend,false,false) || _wrap_popCallStack(        skipWeekend(visStart)));
(_wrap_setLastFunctionCall("fullcalendar.js",1296,40637,40666,skipWeekend,false,false) || _wrap_popCallStack(        skipWeekend(visEnd, -1, true)));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",1298,40682,40757,addDays,false,false) || _wrap_popCallStack(      addDays(visStart, -(((_wrap_setLastFunctionCall("fullcalendar.js",1298,40703,40720,visStart.getDay,false,false) || _wrap_popCallStack(visStart.getDay())) - (_wrap_setLastFunctionCall("fullcalendar.js",1298,40723,40746,Math.max,false,false) || _wrap_popCallStack(Math.max(firstDay, nwe))) + 7) % 7))));
(_wrap_setLastFunctionCall("fullcalendar.js",1299,40765,40833,addDays,false,false) || _wrap_popCallStack(      addDays(visEnd, (7 - (_wrap_setLastFunctionCall("fullcalendar.js",1299,40786,40801,visEnd.getDay,false,false) || _wrap_popCallStack(visEnd.getDay())) + (_wrap_setLastFunctionCall("fullcalendar.js",1299,40804,40827,Math.max,false,false) || _wrap_popCallStack(Math.max(firstDay, nwe)))) % 7)));
      var rowCnt = (_wrap_setLastFunctionCall("fullcalendar.js",1300,40854,40900,Math.round,false,false) || _wrap_popCallStack(Math.round((visEnd - visStart) / (DAY_MS * 7))));
      if ((_wrap_setLastFunctionCall("fullcalendar.js",1301,40912,40927,opt,false,false) || _wrap_popCallStack(opt('weekMode'))) == 'fixed') {
(_wrap_setLastFunctionCall("fullcalendar.js",1302,40950,40983,addDays,false,false) || _wrap_popCallStack(        addDays(visEnd, (6 - rowCnt) * 7)));
        rowCnt = 6;
      }
      t.title = (_wrap_setLastFunctionCall("fullcalendar.js",1305,41029,41066,formatDate,false,false) || _wrap_popCallStack(formatDate(start, (_wrap_setLastFunctionCall("fullcalendar.js",1305,41047,41065,opt,false,false) || _wrap_popCallStack(opt('titleFormat'))))));
      t.start = start;
      t.end = end;
      t.visStart = visStart;
      t.visEnd = visEnd;
(_wrap_setLastFunctionCall("fullcalendar.js",1310,41170,41211,renderBasic,false,false) || _wrap_popCallStack(      renderBasic(6, rowCnt, nwe ? 5 : 7, true)));
    }
  }
  fcViews.basicWeek = BasicWeekView;
  function BasicWeekView(element, calendar) {
_wrap_addFunctionToMap('fullcalendar.js', 1314, 41262,42195, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.render = render;
(_wrap_setLastFunctionCall("fullcalendar.js",1317,41351,41400,BasicView.call,false,true) || _wrap_popCallStack(    BasicView.call(t, element, calendar, 'basicWeek')));
    var opt = t.opt;
    var renderBasic = t.renderBasic;
    var formatDates = calendar.formatDates;
    function render(date, delta) {
_wrap_addFunctionToMap('fullcalendar.js', 1321, 41508,42191, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (delta) {
(_wrap_setLastFunctionCall("fullcalendar.js",1323,41566,41590,addDays,false,false) || _wrap_popCallStack(        addDays(date, delta * 7)));
      }
      var start = (_wrap_setLastFunctionCall("fullcalendar.js",1325,41618,41688,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",1325,41626,41641,cloneDate,false,false) || _wrap_popCallStack(cloneDate(date))), -(((_wrap_setLastFunctionCall("fullcalendar.js",1325,41646,41659,date.getDay,false,false) || _wrap_popCallStack(date.getDay())) - (_wrap_setLastFunctionCall("fullcalendar.js",1325,41662,41677,opt,false,false) || _wrap_popCallStack(opt('firstDay'))) + 7) % 7))));
      var end = (_wrap_setLastFunctionCall("fullcalendar.js",1326,41706,41734,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",1326,41714,41730,cloneDate,false,false) || _wrap_popCallStack(cloneDate(start))), 7)));
      var visStart = (_wrap_setLastFunctionCall("fullcalendar.js",1327,41757,41773,cloneDate,false,false) || _wrap_popCallStack(cloneDate(start)));
      var visEnd = (_wrap_setLastFunctionCall("fullcalendar.js",1328,41794,41808,cloneDate,false,false) || _wrap_popCallStack(cloneDate(end)));
      var weekends = (_wrap_setLastFunctionCall("fullcalendar.js",1329,41831,41846,opt,false,false) || _wrap_popCallStack(opt('weekends')));
      if (!weekends) {
(_wrap_setLastFunctionCall("fullcalendar.js",1331,41879,41900,skipWeekend,false,false) || _wrap_popCallStack(        skipWeekend(visStart)));
(_wrap_setLastFunctionCall("fullcalendar.js",1332,41910,41939,skipWeekend,false,false) || _wrap_popCallStack(        skipWeekend(visEnd, -1, true)));
      }
      t.title = (_wrap_setLastFunctionCall("fullcalendar.js",1334,41965,42038,formatDates,false,false) || _wrap_popCallStack(formatDates(visStart, (_wrap_setLastFunctionCall("fullcalendar.js",1334,41987,42017,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",1334,41995,42012,cloneDate,false,false) || _wrap_popCallStack(cloneDate(visEnd))), -1))), (_wrap_setLastFunctionCall("fullcalendar.js",1334,42019,42037,opt,false,false) || _wrap_popCallStack(opt('titleFormat'))))));
      t.start = start;
      t.end = end;
      t.visStart = visStart;
      t.visEnd = visEnd;
(_wrap_setLastFunctionCall("fullcalendar.js",1339,42142,42184,renderBasic,false,false) || _wrap_popCallStack(      renderBasic(1, 1, weekends ? 7 : 5, false)));
    }
  }
  fcViews.basicDay = BasicDayView;
  function BasicDayView(element, calendar) {
_wrap_addFunctionToMap('fullcalendar.js', 1343, 42233,42861, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.render = render;
(_wrap_setLastFunctionCall("fullcalendar.js",1346,42321,42369,BasicView.call,false,true) || _wrap_popCallStack(    BasicView.call(t, element, calendar, 'basicDay')));
    var opt = t.opt;
    var renderBasic = t.renderBasic;
    var formatDate = calendar.formatDate;
    function render(date, delta) {
_wrap_addFunctionToMap('fullcalendar.js', 1350, 42475,42857, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (delta) {
(_wrap_setLastFunctionCall("fullcalendar.js",1352,42533,42553,addDays,false,false) || _wrap_popCallStack(        addDays(date, delta)));
        if (!(_wrap_setLastFunctionCall("fullcalendar.js",1353,42568,42583,opt,false,false) || _wrap_popCallStack(opt('weekends')))) {
(_wrap_setLastFunctionCall("fullcalendar.js",1354,42597,42634,skipWeekend,false,false) || _wrap_popCallStack(          skipWeekend(date, delta < 0 ? -1 : 1)));
        }
      }
      t.title = (_wrap_setLastFunctionCall("fullcalendar.js",1357,42670,42706,formatDate,false,false) || _wrap_popCallStack(formatDate(date, (_wrap_setLastFunctionCall("fullcalendar.js",1357,42687,42705,opt,false,false) || _wrap_popCallStack(opt('titleFormat'))))));
      t.start = t.visStart = (_wrap_setLastFunctionCall("fullcalendar.js",1358,42737,42758,cloneDate,false,false) || _wrap_popCallStack(cloneDate(date, true)));
      t.end = t.visEnd = (_wrap_setLastFunctionCall("fullcalendar.js",1359,42785,42815,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",1359,42793,42811,cloneDate,false,false) || _wrap_popCallStack(cloneDate(t.start))), 1)));
(_wrap_setLastFunctionCall("fullcalendar.js",1360,42823,42850,renderBasic,false,false) || _wrap_popCallStack(      renderBasic(1, 1, 1, false)));
    }
  }
(_wrap_setLastFunctionCall("fullcalendar.js",1363,42864,42896,setDefaults,false,false) || _wrap_popCallStack(  setDefaults({weekMode: 'fixed'})));
  function BasicView(element, calendar, viewName) {
_wrap_addFunctionToMap('fullcalendar.js', 1364, 42900,52862, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
_wrap_addFunctionToMap('fullcalendar.js', 1377, 43390,43428, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return hoverListener;
};
    t.colContentLeft = colContentLeft;
    t.colContentRight = colContentRight;
    t.dayOfWeekCol = dayOfWeekCol;
    t.dateCell = dateCell;
    t.cellDate = cellDate;
    t.cellIsAllDay = function() {
_wrap_addFunctionToMap('fullcalendar.js', 1385, 43620,43649, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return true;
};
    t.allDayRow = allDayRow;
    t.allDayBounds = allDayBounds;
    t.getRowCnt = function() {
_wrap_addFunctionToMap('fullcalendar.js', 1390, 43733,43764, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return rowCnt;
};
    t.getColCnt = function() {
_wrap_addFunctionToMap('fullcalendar.js', 1393, 43784,43815, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return colCnt;
};
    t.getColWidth = function() {
_wrap_addFunctionToMap('fullcalendar.js', 1396, 43837,43870, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return colWidth;
};
    t.getDaySegmentContainer = function() {
_wrap_addFunctionToMap('fullcalendar.js', 1399, 43903,43947, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return daySegmentContainer;
};
(_wrap_setLastFunctionCall("fullcalendar.js",1402,43953,43994,View.call,false,true) || _wrap_popCallStack(    View.call(t, element, calendar, viewName)));
(_wrap_setLastFunctionCall("fullcalendar.js",1403,44000,44022,OverlayManager.call,false,true) || _wrap_popCallStack(    OverlayManager.call(t)));
(_wrap_setLastFunctionCall("fullcalendar.js",1404,44028,44052,SelectionManager.call,false,true) || _wrap_popCallStack(    SelectionManager.call(t)));
(_wrap_setLastFunctionCall("fullcalendar.js",1405,44058,44084,BasicEventRenderer.call,false,true) || _wrap_popCallStack(    BasicEventRenderer.call(t)));
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
(_wrap_setLastFunctionCall("fullcalendar.js",1433,44764,44813,disableTextSelection,false,false) || _wrap_popCallStack(    disableTextSelection((_wrap_setLastFunctionCall("fullcalendar.js",1433,44785,44812,element.addClass,false,false) || _wrap_popCallStack(element.addClass('fc-grid'))))));
    function renderBasic(maxr, r, c, showNumbers) {
_wrap_addFunctionToMap('fullcalendar.js', 1434, 44819,45101, (typeof arguments === 'object' ? arguments.callee.caller : null));

      rowCnt = r;
      colCnt = c;
(_wrap_setLastFunctionCall("fullcalendar.js",1437,44909,44924,updateOptions,false,false) || _wrap_popCallStack(      updateOptions()));
      var firstTime = !body;
      if (firstTime) {
(_wrap_setLastFunctionCall("fullcalendar.js",1440,44986,45018,buildSkeleton,false,false) || _wrap_popCallStack(        buildSkeleton(maxr, showNumbers)));
      } else {
(_wrap_setLastFunctionCall("fullcalendar.js",1442,45043,45056,clearEvents,false,false) || _wrap_popCallStack(        clearEvents()));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",1444,45072,45094,updateCells,false,false) || _wrap_popCallStack(      updateCells(firstTime)));
    }
    function updateOptions() {
_wrap_addFunctionToMap('fullcalendar.js', 1446, 45106,45431, (typeof arguments === 'object' ? arguments.callee.caller : null));

      rtl = (_wrap_setLastFunctionCall("fullcalendar.js",1447,45145,45157,opt,false,false) || _wrap_popCallStack(opt('isRTL')));
      if (rtl) {
        dis = -1;
        dit = colCnt - 1;
      } else {
        dis = 1;
        dit = 0;
      }
      firstDay = (_wrap_setLastFunctionCall("fullcalendar.js",1455,45294,45309,opt,false,false) || _wrap_popCallStack(opt('firstDay')));
      nwe = (_wrap_setLastFunctionCall("fullcalendar.js",1456,45323,45338,opt,false,false) || _wrap_popCallStack(opt('weekends'))) ? 0 : 1;
      tm = (_wrap_setLastFunctionCall("fullcalendar.js",1457,45359,45371,opt,false,false) || _wrap_popCallStack(opt('theme'))) ? 'ui' : 'fc';
      colFormat = (_wrap_setLastFunctionCall("fullcalendar.js",1458,45405,45424,opt,false,false) || _wrap_popCallStack(opt('columnFormat')));
    }
    function buildSkeleton(maxRowCnt, showNumbers) {
_wrap_addFunctionToMap('fullcalendar.js', 1460, 45436,46961, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
      table = (_wrap_setLastFunctionCall("fullcalendar.js",1479,46372,46394,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",1479,46372,46376,$,false,false) || _wrap_popCallStack($(s))).appendTo(element)));
      head = (_wrap_setLastFunctionCall("fullcalendar.js",1480,46409,46428,table.find,false,false) || _wrap_popCallStack(table.find('thead')));
      headCells = (_wrap_setLastFunctionCall("fullcalendar.js",1481,46448,46463,head.find,false,false) || _wrap_popCallStack(head.find('th')));
      body = (_wrap_setLastFunctionCall("fullcalendar.js",1482,46478,46497,table.find,false,false) || _wrap_popCallStack(table.find('tbody')));
      bodyRows = (_wrap_setLastFunctionCall("fullcalendar.js",1483,46516,46531,body.find,false,false) || _wrap_popCallStack(body.find('tr')));
      bodyCells = (_wrap_setLastFunctionCall("fullcalendar.js",1484,46551,46566,body.find,false,false) || _wrap_popCallStack(body.find('td')));
      bodyFirstCells = (_wrap_setLastFunctionCall("fullcalendar.js",1485,46591,46623,bodyCells.filter,false,false) || _wrap_popCallStack(bodyCells.filter(':first-child')));
      bodyCellTopInners = (_wrap_setLastFunctionCall("fullcalendar.js",1486,46651,46696,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",1486,46651,46665,bodyRows.eq,false,false) || _wrap_popCallStack(bodyRows.eq(0))).find('div.fc-day-content div')));
(_wrap_setLastFunctionCall("fullcalendar.js",1487,46704,46744,markFirstLast,false,false) || _wrap_popCallStack(      markFirstLast((_wrap_setLastFunctionCall("fullcalendar.js",1487,46718,46743,head.add,false,false) || _wrap_popCallStack(head.add((_wrap_setLastFunctionCall("fullcalendar.js",1487,46727,46742,head.find,false,false) || _wrap_popCallStack(head.find('tr')))))))));
(_wrap_setLastFunctionCall("fullcalendar.js",1488,46752,46775,markFirstLast,false,false) || _wrap_popCallStack(      markFirstLast(bodyRows)));
(_wrap_setLastFunctionCall("fullcalendar.js",1489,46783,46818,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("fullcalendar.js",1489,46783,46797,bodyRows.eq,false,false) || _wrap_popCallStack(bodyRows.eq(0))).addClass('fc-first')));
(_wrap_setLastFunctionCall("fullcalendar.js",1490,46826,46844,dayBind,false,false) || _wrap_popCallStack(      dayBind(bodyCells)));
      daySegmentContainer = (_wrap_setLastFunctionCall("fullcalendar.js",1491,46874,46954,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",1491,46874,46936,$,false,false) || _wrap_popCallStack($('<div style=\'position:absolute;z-index:8;top:0;left:0\'/>'))).appendTo(element)));
    }
    function updateCells(firstTime) {
_wrap_addFunctionToMap('fullcalendar.js', 1493, 46966,48069, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var dowDirty = firstTime || rowCnt == 1;
      var month = (_wrap_setLastFunctionCall("fullcalendar.js",1495,47065,47083,t.start.getMonth,false,false) || _wrap_popCallStack(t.start.getMonth()));
      var today = (_wrap_setLastFunctionCall("fullcalendar.js",1496,47103,47124,clearTime,false,false) || _wrap_popCallStack(clearTime((_wrap_setLastFunctionCall("fullcalendar.js",1496,47113,47123,Date,false,false) || _wrap_popCallStack(new Date())))));
      var cell;
      var date;
      var row;
      if (dowDirty) {
(_wrap_setLastFunctionCall("fullcalendar.js",1501,47203,47349,headCells.each,false,false) || _wrap_popCallStack(        headCells.each(function(i, _cell) {
_wrap_addFunctionToMap('fullcalendar.js', 1501, 47218,47348, (typeof arguments === 'object' ? arguments.callee.caller : null));

  cell = (_wrap_setLastFunctionCall("fullcalendar.js",1502,47248,47256,$,false,false) || _wrap_popCallStack($(_cell)));
  date = (_wrap_setLastFunctionCall("fullcalendar.js",1503,47267,47279,indexDate,false,false) || _wrap_popCallStack(indexDate(i)));
(_wrap_setLastFunctionCall("fullcalendar.js",1504,47283,47321,cell.html,false,false) || _wrap_popCallStack(  cell.html((_wrap_setLastFunctionCall("fullcalendar.js",1504,47293,47320,formatDate,false,false) || _wrap_popCallStack(formatDate(date, colFormat))))));
(_wrap_setLastFunctionCall("fullcalendar.js",1505,47325,47345,setDayID,false,false) || _wrap_popCallStack(  setDayID(cell, date)));
})));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",1508,47365,47823,bodyCells.each,false,false) || _wrap_popCallStack(      bodyCells.each(function(i, _cell) {
_wrap_addFunctionToMap('fullcalendar.js', 1508, 47380,47822, (typeof arguments === 'object' ? arguments.callee.caller : null));

  cell = (_wrap_setLastFunctionCall("fullcalendar.js",1509,47410,47418,$,false,false) || _wrap_popCallStack($(_cell)));
  date = (_wrap_setLastFunctionCall("fullcalendar.js",1510,47429,47441,indexDate,false,false) || _wrap_popCallStack(indexDate(i)));
  if ((_wrap_setLastFunctionCall("fullcalendar.js",1511,47449,47464,date.getMonth,false,false) || _wrap_popCallStack(date.getMonth())) == month) {
(_wrap_setLastFunctionCall("fullcalendar.js",1512,47481,47515,cell.removeClass,false,false) || _wrap_popCallStack(    cell.removeClass('fc-other-month')));
  } else {
(_wrap_setLastFunctionCall("fullcalendar.js",1514,47532,47563,cell.addClass,false,false) || _wrap_popCallStack(    cell.addClass('fc-other-month')));
  }
  if (+date == +today) {
(_wrap_setLastFunctionCall("fullcalendar.js",1517,47598,47645,cell.addClass,false,false) || _wrap_popCallStack(    cell.addClass(tm + '-state-highlight fc-today')));
  } else {
(_wrap_setLastFunctionCall("fullcalendar.js",1519,47662,47712,cell.removeClass,false,false) || _wrap_popCallStack(    cell.removeClass(tm + '-state-highlight fc-today')));
  }
(_wrap_setLastFunctionCall("fullcalendar.js",1521,47720,47771,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("fullcalendar.js",1521,47720,47750,cell.find,false,false) || _wrap_popCallStack(cell.find('div.fc-day-number'))).text((_wrap_setLastFunctionCall("fullcalendar.js",1521,47756,47770,date.getDate,false,false) || _wrap_popCallStack(date.getDate())))));
  if (dowDirty) {
(_wrap_setLastFunctionCall("fullcalendar.js",1523,47795,47815,setDayID,false,false) || _wrap_popCallStack(    setDayID(cell, date)));
  }
})));
(_wrap_setLastFunctionCall("fullcalendar.js",1526,47831,48062,bodyRows.each,false,false) || _wrap_popCallStack(      bodyRows.each(function(i, _row) {
_wrap_addFunctionToMap('fullcalendar.js', 1526, 47845,48061, (typeof arguments === 'object' ? arguments.callee.caller : null));

  row = (_wrap_setLastFunctionCall("fullcalendar.js",1527,47873,47880,$,false,false) || _wrap_popCallStack($(_row)));
  if (i < rowCnt) {
(_wrap_setLastFunctionCall("fullcalendar.js",1529,47906,47916,row.show,false,false) || _wrap_popCallStack(    row.show()));
    if (i == rowCnt - 1) {
(_wrap_setLastFunctionCall("fullcalendar.js",1531,47951,47974,row.addClass,false,false) || _wrap_popCallStack(      row.addClass('fc-last')));
    } else {
(_wrap_setLastFunctionCall("fullcalendar.js",1533,47995,48021,row.removeClass,false,false) || _wrap_popCallStack(      row.removeClass('fc-last')));
    }
  } else {
(_wrap_setLastFunctionCall("fullcalendar.js",1536,48044,48054,row.hide,false,false) || _wrap_popCallStack(    row.hide()));
  }
})));
    }
    function setHeight(height) {
_wrap_addFunctionToMap('fullcalendar.js', 1540, 48074,48710, (typeof arguments === 'object' ? arguments.callee.caller : null));

      viewHeight = height;
      var bodyHeight = viewHeight - (_wrap_setLastFunctionCall("fullcalendar.js",1542,48166,48179,head.height,false,false) || _wrap_popCallStack(head.height()));
      var rowHeight;
      var rowHeightLast;
      var cell;
      if ((_wrap_setLastFunctionCall("fullcalendar.js",1546,48253,48268,opt,false,false) || _wrap_popCallStack(opt('weekMode'))) == 'variable') {
        rowHeight = rowHeightLast = (_wrap_setLastFunctionCall("fullcalendar.js",1547,48322,48368,Math.floor,false,false) || _wrap_popCallStack(Math.floor(bodyHeight / (rowCnt == 1 ? 2 : 6))));
      } else {
        rowHeight = (_wrap_setLastFunctionCall("fullcalendar.js",1549,48405,48436,Math.floor,false,false) || _wrap_popCallStack(Math.floor(bodyHeight / rowCnt)));
        rowHeightLast = bodyHeight - rowHeight * (rowCnt - 1);
      }
(_wrap_setLastFunctionCall("fullcalendar.js",1552,48515,48703,bodyFirstCells.each,false,false) || _wrap_popCallStack(      bodyFirstCells.each(function(i, _cell) {
_wrap_addFunctionToMap('fullcalendar.js', 1552, 48535,48702, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (i < rowCnt) {
    cell = (_wrap_setLastFunctionCall("fullcalendar.js",1554,48587,48595,$,false,false) || _wrap_popCallStack($(_cell)));
(_wrap_setLastFunctionCall("fullcalendar.js",1555,48601,48695,setMinHeight,false,false) || _wrap_popCallStack(    setMinHeight((_wrap_setLastFunctionCall("fullcalendar.js",1555,48614,48632,cell.find,false,false) || _wrap_popCallStack(cell.find('> div'))), (i == rowCnt - 1 ? rowHeightLast : rowHeight) - (_wrap_setLastFunctionCall("fullcalendar.js",1555,48682,48694,vsides,false,false) || _wrap_popCallStack(vsides(cell))))));
  }
})));
    }
    function setWidth(width) {
_wrap_addFunctionToMap('fullcalendar.js', 1559, 48715,48911, (typeof arguments === 'object' ? arguments.callee.caller : null));

      viewWidth = width;
(_wrap_setLastFunctionCall("fullcalendar.js",1561,48773,48800,colContentPositions.clear,false,false) || _wrap_popCallStack(      colContentPositions.clear()));
      colWidth = (_wrap_setLastFunctionCall("fullcalendar.js",1562,48819,48849,Math.floor,false,false) || _wrap_popCallStack(Math.floor(viewWidth / colCnt)));
(_wrap_setLastFunctionCall("fullcalendar.js",1563,48857,48904,setOuterWidth,false,false) || _wrap_popCallStack(      setOuterWidth((_wrap_setLastFunctionCall("fullcalendar.js",1563,48871,48893,headCells.slice,false,false) || _wrap_popCallStack(headCells.slice(0, -1))), colWidth)));
    }
    function dayBind(days) {
_wrap_addFunctionToMap('fullcalendar.js', 1565, 48916,49007, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1566,48947,49000,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("fullcalendar.js",1566,48947,48967,days.click,false,false) || _wrap_popCallStack(days.click(dayClick))).mousedown(daySelectionMousedown)));
    }
    function dayClick(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 1568, 49012,49240, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (!(_wrap_setLastFunctionCall("fullcalendar.js",1569,49047,49064,opt,false,false) || _wrap_popCallStack(opt('selectable')))) {
        var index = (_wrap_setLastFunctionCall("fullcalendar.js",1570,49088,49137,parseInt,false,false) || _wrap_popCallStack(parseInt((_wrap_setLastFunctionCall("fullcalendar.js",1570,49097,49133,this.className.match,false,false) || _wrap_popCallStack(this.className.match(/fc\-day(\d+)/)))[1])));
        var date = (_wrap_setLastFunctionCall("fullcalendar.js",1571,49158,49174,indexDate,false,false) || _wrap_popCallStack(indexDate(index)));
(_wrap_setLastFunctionCall("fullcalendar.js",1572,49184,49225,trigger,false,false) || _wrap_popCallStack(        trigger('dayClick', this, date, true, ev)));
      }
    }
    function renderDayOverlay(overlayStart, overlayEnd, refreshCoordinateGrid) {
_wrap_addFunctionToMap('fullcalendar.js', 1575, 49245,50195, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (refreshCoordinateGrid) {
(_wrap_setLastFunctionCall("fullcalendar.js",1577,49365,49387,coordinateGrid.build,false,false) || _wrap_popCallStack(        coordinateGrid.build()));
      }
      var rowStart = (_wrap_setLastFunctionCall("fullcalendar.js",1579,49418,49439,cloneDate,false,false) || _wrap_popCallStack(cloneDate(t.visStart)));
      var rowEnd = (_wrap_setLastFunctionCall("fullcalendar.js",1580,49460,49496,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",1580,49468,49487,cloneDate,false,false) || _wrap_popCallStack(cloneDate(rowStart))), colCnt)));
      for (var i = 0; i < rowCnt; i++) {
        var stretchStart = (_wrap_setLastFunctionCall("fullcalendar.js",1582,49566,49608,Date,false,false) || _wrap_popCallStack(new Date((_wrap_setLastFunctionCall("fullcalendar.js",1582,49575,49607,Math.max,false,false) || _wrap_popCallStack(Math.max(rowStart, overlayStart))))));
        var stretchEnd = (_wrap_setLastFunctionCall("fullcalendar.js",1583,49635,49673,Date,false,false) || _wrap_popCallStack(new Date((_wrap_setLastFunctionCall("fullcalendar.js",1583,49644,49672,Math.min,false,false) || _wrap_popCallStack(Math.min(rowEnd, overlayEnd))))));
        if (stretchStart < stretchEnd) {
          var colStart, colEnd;
          if (rtl) {
            colStart = (_wrap_setLastFunctionCall("fullcalendar.js",1587,49792,49821,dayDiff,false,false) || _wrap_popCallStack(dayDiff(stretchEnd, rowStart))) * dis + dit + 1;
            colEnd = (_wrap_setLastFunctionCall("fullcalendar.js",1588,49860,49891,dayDiff,false,false) || _wrap_popCallStack(dayDiff(stretchStart, rowStart))) * dis + dit + 1;
          } else {
            colStart = (_wrap_setLastFunctionCall("fullcalendar.js",1590,49951,49982,dayDiff,false,false) || _wrap_popCallStack(dayDiff(stretchStart, rowStart)));
            colEnd = (_wrap_setLastFunctionCall("fullcalendar.js",1591,50005,50034,dayDiff,false,false) || _wrap_popCallStack(dayDiff(stretchEnd, rowStart)));
          }
(_wrap_setLastFunctionCall("fullcalendar.js",1593,50058,50112,dayBind,false,false) || _wrap_popCallStack(          dayBind((_wrap_setLastFunctionCall("fullcalendar.js",1593,50066,50111,renderCellOverlay,false,false) || _wrap_popCallStack(renderCellOverlay(i, colStart, i, colEnd - 1))))));
        }
(_wrap_setLastFunctionCall("fullcalendar.js",1595,50132,50152,addDays,false,false) || _wrap_popCallStack(        addDays(rowStart, 7)));
(_wrap_setLastFunctionCall("fullcalendar.js",1596,50162,50180,addDays,false,false) || _wrap_popCallStack(        addDays(rowEnd, 7)));
      }
    }
    function renderCellOverlay(row0, col0, row1, col1) {
_wrap_addFunctionToMap('fullcalendar.js', 1599, 50200,50372, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var rect = (_wrap_setLastFunctionCall("fullcalendar.js",1600,50270,50322,coordinateGrid.rect,false,false) || _wrap_popCallStack(coordinateGrid.rect(row0, col0, row1, col1, element)));
      return (_wrap_setLastFunctionCall("fullcalendar.js",1601,50337,50365,renderOverlay,false,false) || _wrap_popCallStack(renderOverlay(rect, element)));
    }
    function defaultSelectionEnd(startDate, allDay) {
_wrap_addFunctionToMap('fullcalendar.js', 1603, 50377,50467, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",1604,50440,50460,cloneDate,false,false) || _wrap_popCallStack(cloneDate(startDate)));
    }
    function renderSelection(startDate, endDate, allDay) {
_wrap_addFunctionToMap('fullcalendar.js', 1606, 50472,50605, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1607,50533,50598,renderDayOverlay,false,false) || _wrap_popCallStack(      renderDayOverlay(startDate, (_wrap_setLastFunctionCall("fullcalendar.js",1607,50561,50591,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",1607,50569,50587,cloneDate,false,false) || _wrap_popCallStack(cloneDate(endDate))), 1))), true)));
    }
    function clearSelection() {
_wrap_addFunctionToMap('fullcalendar.js', 1609, 50610,50666, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1610,50644,50659,clearOverlays,false,false) || _wrap_popCallStack(      clearOverlays()));
    }
    function reportDayClick(date, allDay, ev) {
_wrap_addFunctionToMap('fullcalendar.js', 1612, 50671,50870, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var cell = (_wrap_setLastFunctionCall("fullcalendar.js",1613,50732,50746,dateCell,false,false) || _wrap_popCallStack(dateCell(date)));
      var _element = bodyCells[cell.row * colCnt + cell.col];
(_wrap_setLastFunctionCall("fullcalendar.js",1615,50816,50863,trigger,false,false) || _wrap_popCallStack(      trigger('dayClick', _element, date, allDay, ev)));
    }
    function dragStart(_dragElement, ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 1617, 50875,51074, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1618,50924,51067,hoverListener.start,false,false) || _wrap_popCallStack(      hoverListener.start(function(cell) {
_wrap_addFunctionToMap('fullcalendar.js', 1618, 50944,51062, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1619,50963,50978,clearOverlays,false,false) || _wrap_popCallStack(  clearOverlays()));
  if (cell) {
(_wrap_setLastFunctionCall("fullcalendar.js",1621,50998,51055,renderCellOverlay,false,false) || _wrap_popCallStack(    renderCellOverlay(cell.row, cell.col, cell.row, cell.col)));
  }
}, ev)));
    }
    function dragStop(_dragElement, ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 1625, 51079,51302, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var cell = (_wrap_setLastFunctionCall("fullcalendar.js",1626,51138,51158,hoverListener.stop,false,false) || _wrap_popCallStack(hoverListener.stop()));
(_wrap_setLastFunctionCall("fullcalendar.js",1627,51166,51181,clearOverlays,false,false) || _wrap_popCallStack(      clearOverlays()));
      if (cell) {
        var d = (_wrap_setLastFunctionCall("fullcalendar.js",1629,51217,51231,cellDate,false,false) || _wrap_popCallStack(cellDate(cell)));
(_wrap_setLastFunctionCall("fullcalendar.js",1630,51241,51287,trigger,false,false) || _wrap_popCallStack(        trigger('drop', _dragElement, d, true, ev, ui)));
      }
    }
    function defaultEventEnd(event) {
_wrap_addFunctionToMap('fullcalendar.js', 1633, 51307,51383, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",1634,51354,51376,cloneDate,false,false) || _wrap_popCallStack(cloneDate(event.start)));
    }
    coordinateGrid = (_wrap_setLastFunctionCall("fullcalendar.js",1636,51405,51819,CoordinateGrid,false,false) || _wrap_popCallStack(new CoordinateGrid(function(rows, cols) {
_wrap_addFunctionToMap('fullcalendar.js', 1636, 51424,51818, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var e, n, p;
(_wrap_setLastFunctionCall("fullcalendar.js",1638,51464,51590,headCells.each,false,false) || _wrap_popCallStack(  headCells.each(function(i, _e) {
_wrap_addFunctionToMap('fullcalendar.js', 1638, 51479,51589, (typeof arguments === 'object' ? arguments.callee.caller : null));

  e = (_wrap_setLastFunctionCall("fullcalendar.js",1639,51503,51508,$,false,false) || _wrap_popCallStack($(_e)));
  n = (_wrap_setLastFunctionCall("fullcalendar.js",1640,51516,51526,e.offset,false,false) || _wrap_popCallStack(e.offset())).left;
  if (i) {
    p[1] = n;
  }
  p = [n];
  cols[i] = p;
})));
  p[1] = n + (_wrap_setLastFunctionCall("fullcalendar.js",1647,51605,51619,e.outerWidth,false,false) || _wrap_popCallStack(e.outerWidth()));
(_wrap_setLastFunctionCall("fullcalendar.js",1648,51623,51785,bodyRows.each,false,false) || _wrap_popCallStack(  bodyRows.each(function(i, _e) {
_wrap_addFunctionToMap('fullcalendar.js', 1648, 51637,51784, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (i < rowCnt) {
    e = (_wrap_setLastFunctionCall("fullcalendar.js",1650,51683,51688,$,false,false) || _wrap_popCallStack($(_e)));
    n = (_wrap_setLastFunctionCall("fullcalendar.js",1651,51698,51708,e.offset,false,false) || _wrap_popCallStack(e.offset())).top;
    if (i) {
      p[1] = n;
    }
    p = [n];
    rows[i] = p;
  }
})));
  p[1] = n + (_wrap_setLastFunctionCall("fullcalendar.js",1659,51800,51815,e.outerHeight,false,false) || _wrap_popCallStack(e.outerHeight()));
})));
    hoverListener = (_wrap_setLastFunctionCall("fullcalendar.js",1661,51841,51874,HoverListener,false,false) || _wrap_popCallStack(new HoverListener(coordinateGrid)));
    colContentPositions = (_wrap_setLastFunctionCall("fullcalendar.js",1662,51902,51984,HorizontalPositionCache,false,false) || _wrap_popCallStack(new HorizontalPositionCache(function(col) {
_wrap_addFunctionToMap('fullcalendar.js', 1662, 51930,51983, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",1663,51955,51980,bodyCellTopInners.eq,false,false) || _wrap_popCallStack(bodyCellTopInners.eq(col)));
})));
    function colContentLeft(col) {
_wrap_addFunctionToMap('fullcalendar.js', 1665, 51990,52070, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",1666,52034,52063,colContentPositions.left,false,false) || _wrap_popCallStack(colContentPositions.left(col)));
    }
    function colContentRight(col) {
_wrap_addFunctionToMap('fullcalendar.js', 1668, 52075,52157, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",1669,52120,52150,colContentPositions.right,false,false) || _wrap_popCallStack(colContentPositions.right(col)));
    }
    function dateCell(date) {
_wrap_addFunctionToMap('fullcalendar.js', 1671, 52162,52290, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return {row: (_wrap_setLastFunctionCall("fullcalendar.js",1672,52207,52248,Math.floor,false,false) || _wrap_popCallStack(Math.floor((_wrap_setLastFunctionCall("fullcalendar.js",1672,52218,52243,dayDiff,false,false) || _wrap_popCallStack(dayDiff(date, t.visStart))) / 7))), col: (_wrap_setLastFunctionCall("fullcalendar.js",1672,52255,52282,dayOfWeekCol,false,false) || _wrap_popCallStack(dayOfWeekCol((_wrap_setLastFunctionCall("fullcalendar.js",1672,52268,52281,date.getDay,false,false) || _wrap_popCallStack(date.getDay())))))};
    }
    function cellDate(cell) {
_wrap_addFunctionToMap('fullcalendar.js', 1674, 52295,52370, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",1675,52334,52363,_cellDate,false,false) || _wrap_popCallStack(_cellDate(cell.row, cell.col)));
    }
    function _cellDate(row, col) {
_wrap_addFunctionToMap('fullcalendar.js', 1677, 52375,52483, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",1678,52419,52476,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",1678,52427,52448,cloneDate,false,false) || _wrap_popCallStack(cloneDate(t.visStart))), row * 7 + col * dis + dit)));
    }
    function indexDate(index) {
_wrap_addFunctionToMap('fullcalendar.js', 1680, 52488,52589, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",1681,52529,52582,_cellDate,false,false) || _wrap_popCallStack(_cellDate((_wrap_setLastFunctionCall("fullcalendar.js",1681,52539,52565,Math.floor,false,false) || _wrap_popCallStack(Math.floor(index / colCnt))), index % colCnt)));
    }
    function dayOfWeekCol(dayOfWeek) {
_wrap_addFunctionToMap('fullcalendar.js', 1683, 52594,52716, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (dayOfWeek - (_wrap_setLastFunctionCall("fullcalendar.js",1684,52655,52678,Math.max,false,false) || _wrap_popCallStack(Math.max(firstDay, nwe))) + colCnt) % colCnt * dis + dit;
    }
    function allDayRow(i) {
_wrap_addFunctionToMap('fullcalendar.js', 1686, 52721,52779, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",1687,52758,52772,bodyRows.eq,false,false) || _wrap_popCallStack(bodyRows.eq(i)));
    }
    function allDayBounds(i) {
_wrap_addFunctionToMap('fullcalendar.js', 1689, 52784,52858, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return {left: 0, right: viewWidth};
    }
  }
  function BasicEventRenderer() {
_wrap_addFunctionToMap('fullcalendar.js', 1693, 52865,56114, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.renderEvents = renderEvents;
    t.compileDaySegs = compileSegs;
    t.clearEvents = clearEvents;
    t.bindDaySeg = bindDaySeg;
(_wrap_setLastFunctionCall("fullcalendar.js",1699,53054,53078,DayEventRenderer.call,false,true) || _wrap_popCallStack(    DayEventRenderer.call(t)));
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
_wrap_addFunctionToMap('fullcalendar.js', 1718, 53822,53963, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1719,53877,53897,reportEvents,false,false) || _wrap_popCallStack(      reportEvents(events)));
(_wrap_setLastFunctionCall("fullcalendar.js",1720,53905,53956,renderDaySegs,false,false) || _wrap_popCallStack(      renderDaySegs((_wrap_setLastFunctionCall("fullcalendar.js",1720,53919,53938,compileSegs,false,false) || _wrap_popCallStack(compileSegs(events))), modifiedEventId)));
    }
    function clearEvents() {
_wrap_addFunctionToMap('fullcalendar.js', 1722, 53968,54064, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1723,53999,54017,reportEventClear,false,false) || _wrap_popCallStack(      reportEventClear()));
(_wrap_setLastFunctionCall("fullcalendar.js",1724,54025,54057,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("fullcalendar.js",1724,54025,54049,getDaySegmentContainer,false,false) || _wrap_popCallStack(getDaySegmentContainer())).empty()));
    }
    function compileSegs(events) {
_wrap_addFunctionToMap('fullcalendar.js', 1726, 54069,54729, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var rowCnt = (_wrap_setLastFunctionCall("fullcalendar.js",1727,54119,54130,getRowCnt,false,false) || _wrap_popCallStack(getRowCnt())), colCnt = (_wrap_setLastFunctionCall("fullcalendar.js",1727,54141,54152,getColCnt,false,false) || _wrap_popCallStack(getColCnt())), d1 = (_wrap_setLastFunctionCall("fullcalendar.js",1727,54159,54180,cloneDate,false,false) || _wrap_popCallStack(cloneDate(t.visStart))), d2 = (_wrap_setLastFunctionCall("fullcalendar.js",1727,54187,54217,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",1727,54195,54208,cloneDate,false,false) || _wrap_popCallStack(cloneDate(d1))), colCnt))), visEventsEnds = (_wrap_setLastFunctionCall("fullcalendar.js",1727,54235,54260,$.map,false,false) || _wrap_popCallStack($.map(events, exclEndDay))), i, row, j, level, k, seg, segs = [];
      for (i = 0; i < rowCnt; i++) {
        row = (_wrap_setLastFunctionCall("fullcalendar.js",1729,54350,54401,stackSegs,false,false) || _wrap_popCallStack(stackSegs((_wrap_setLastFunctionCall("fullcalendar.js",1729,54360,54400,sliceSegs,false,false) || _wrap_popCallStack(sliceSegs(events, visEventsEnds, d1, d2))))));
        for (j = 0; j < row.length; j++) {
          level = row[j];
          for (k = 0; k < level.length; k++) {
            seg = level[k];
            seg.row = i;
            seg.level = j;
(_wrap_setLastFunctionCall("fullcalendar.js",1736,54611,54625,segs.push,false,false) || _wrap_popCallStack(            segs.push(seg)));
          }
        }
(_wrap_setLastFunctionCall("fullcalendar.js",1739,54657,54671,addDays,false,false) || _wrap_popCallStack(        addDays(d1, 7)));
(_wrap_setLastFunctionCall("fullcalendar.js",1740,54681,54695,addDays,false,false) || _wrap_popCallStack(        addDays(d2, 7)));
      }
      return segs;
    }
    function bindDaySeg(event, eventElement, seg) {
_wrap_addFunctionToMap('fullcalendar.js', 1744, 54734,55040, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if ((_wrap_setLastFunctionCall("fullcalendar.js",1745,54792,54815,isEventDraggable,false,false) || _wrap_popCallStack(isEventDraggable(event)))) {
(_wrap_setLastFunctionCall("fullcalendar.js",1746,54827,54865,draggableDayEvent,false,false) || _wrap_popCallStack(        draggableDayEvent(event, eventElement)));
      }
      if (seg.isEnd && (_wrap_setLastFunctionCall("fullcalendar.js",1748,54898,54921,isEventResizable,false,false) || _wrap_popCallStack(isEventResizable(event)))) {
(_wrap_setLastFunctionCall("fullcalendar.js",1749,54933,54976,resizableDayEvent,false,false) || _wrap_popCallStack(        resizableDayEvent(event, eventElement, seg)));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",1751,54992,55033,eventElementHandlers,false,false) || _wrap_popCallStack(      eventElementHandlers(event, eventElement)));
    }
    function draggableDayEvent(event, eventElement) {
_wrap_addFunctionToMap('fullcalendar.js', 1753, 55045,56110, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var hoverListener = (_wrap_setLastFunctionCall("fullcalendar.js",1754,55121,55139,getHoverListener,false,false) || _wrap_popCallStack(getHoverListener()));
      var dayDelta;
(_wrap_setLastFunctionCall("fullcalendar.js",1756,55167,56103,eventElement.draggable,false,false) || _wrap_popCallStack(      eventElement.draggable({zIndex: 9, delay: 50, opacity: (_wrap_setLastFunctionCall("fullcalendar.js",1756,55222,55240,opt,false,false) || _wrap_popCallStack(opt('dragOpacity'))), revertDuration: (_wrap_setLastFunctionCall("fullcalendar.js",1756,55258,55283,opt,false,false) || _wrap_popCallStack(opt('dragRevertDuration'))), start: function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 1756, 55292,55804, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1757,55313,55367,trigger,false,false) || _wrap_popCallStack(  trigger('eventDragStart', eventElement, event, ev, ui)));
(_wrap_setLastFunctionCall("fullcalendar.js",1758,55371,55402,hideEvents,false,false) || _wrap_popCallStack(  hideEvents(event, eventElement)));
(_wrap_setLastFunctionCall("fullcalendar.js",1759,55406,55801,hoverListener.start,false,false) || _wrap_popCallStack(  hoverListener.start(function(cell, origCell, rowDelta, colDelta) {
_wrap_addFunctionToMap('fullcalendar.js', 1759, 55426,55788, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1760,55475,55550,eventElement.draggable,false,false) || _wrap_popCallStack(  eventElement.draggable('option', 'revert', !cell || !rowDelta && !colDelta)));
(_wrap_setLastFunctionCall("fullcalendar.js",1761,55554,55569,clearOverlays,false,false) || _wrap_popCallStack(  clearOverlays()));
  if (cell) {
    dayDelta = rowDelta * 7 + colDelta * ((_wrap_setLastFunctionCall("fullcalendar.js",1763,55627,55639,opt,false,false) || _wrap_popCallStack(opt('isRTL'))) ? -1 : 1);
(_wrap_setLastFunctionCall("fullcalendar.js",1764,55655,55752,renderDayOverlay,false,false) || _wrap_popCallStack(    renderDayOverlay((_wrap_setLastFunctionCall("fullcalendar.js",1764,55672,55713,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",1764,55680,55702,cloneDate,false,false) || _wrap_popCallStack(cloneDate(event.start))), dayDelta))), (_wrap_setLastFunctionCall("fullcalendar.js",1764,55715,55751,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",1764,55723,55740,exclEndDay,false,false) || _wrap_popCallStack(exclEndDay(event))), dayDelta))))));
  } else {
    dayDelta = 0;
  }
}, ev, 'drag')));
}, stop: function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 1769, 55812,56101, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",1770,55833,55853,hoverListener.stop,false,false) || _wrap_popCallStack(  hoverListener.stop()));
(_wrap_setLastFunctionCall("fullcalendar.js",1771,55857,55872,clearOverlays,false,false) || _wrap_popCallStack(  clearOverlays()));
(_wrap_setLastFunctionCall("fullcalendar.js",1772,55876,55929,trigger,false,false) || _wrap_popCallStack(  trigger('eventDragStop', eventElement, event, ev, ui)));
  if (dayDelta) {
(_wrap_setLastFunctionCall("fullcalendar.js",1774,55953,56010,eventDrop,false,false) || _wrap_popCallStack(    eventDrop(this, event, dayDelta, 0, event.allDay, ev, ui)));
  } else {
(_wrap_setLastFunctionCall("fullcalendar.js",1776,56027,56057,eventElement.css,false,false) || _wrap_popCallStack(    eventElement.css('filter', '')));
(_wrap_setLastFunctionCall("fullcalendar.js",1777,56063,56094,showEvents,false,false) || _wrap_popCallStack(    showEvents(event, eventElement)));
  }
}})));
    }
  }
  fcViews.agendaWeek = AgendaWeekView;
  function AgendaWeekView(element, calendar) {
_wrap_addFunctionToMap('fullcalendar.js', 1783, 56156,57082, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.render = render;
(_wrap_setLastFunctionCall("fullcalendar.js",1786,56246,56297,AgendaView.call,false,true) || _wrap_popCallStack(    AgendaView.call(t, element, calendar, 'agendaWeek')));
    var opt = t.opt;
    var renderAgenda = t.renderAgenda;
    var formatDates = calendar.formatDates;
    function render(date, delta) {
_wrap_addFunctionToMap('fullcalendar.js', 1790, 56407,57078, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (delta) {
(_wrap_setLastFunctionCall("fullcalendar.js",1792,56465,56489,addDays,false,false) || _wrap_popCallStack(        addDays(date, delta * 7)));
      }
      var start = (_wrap_setLastFunctionCall("fullcalendar.js",1794,56517,56587,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",1794,56525,56540,cloneDate,false,false) || _wrap_popCallStack(cloneDate(date))), -(((_wrap_setLastFunctionCall("fullcalendar.js",1794,56545,56558,date.getDay,false,false) || _wrap_popCallStack(date.getDay())) - (_wrap_setLastFunctionCall("fullcalendar.js",1794,56561,56576,opt,false,false) || _wrap_popCallStack(opt('firstDay'))) + 7) % 7))));
      var end = (_wrap_setLastFunctionCall("fullcalendar.js",1795,56605,56633,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",1795,56613,56629,cloneDate,false,false) || _wrap_popCallStack(cloneDate(start))), 7)));
      var visStart = (_wrap_setLastFunctionCall("fullcalendar.js",1796,56656,56672,cloneDate,false,false) || _wrap_popCallStack(cloneDate(start)));
      var visEnd = (_wrap_setLastFunctionCall("fullcalendar.js",1797,56693,56707,cloneDate,false,false) || _wrap_popCallStack(cloneDate(end)));
      var weekends = (_wrap_setLastFunctionCall("fullcalendar.js",1798,56730,56745,opt,false,false) || _wrap_popCallStack(opt('weekends')));
      if (!weekends) {
(_wrap_setLastFunctionCall("fullcalendar.js",1800,56778,56799,skipWeekend,false,false) || _wrap_popCallStack(        skipWeekend(visStart)));
(_wrap_setLastFunctionCall("fullcalendar.js",1801,56809,56838,skipWeekend,false,false) || _wrap_popCallStack(        skipWeekend(visEnd, -1, true)));
      }
      t.title = (_wrap_setLastFunctionCall("fullcalendar.js",1803,56864,56937,formatDates,false,false) || _wrap_popCallStack(formatDates(visStart, (_wrap_setLastFunctionCall("fullcalendar.js",1803,56886,56916,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",1803,56894,56911,cloneDate,false,false) || _wrap_popCallStack(cloneDate(visEnd))), -1))), (_wrap_setLastFunctionCall("fullcalendar.js",1803,56918,56936,opt,false,false) || _wrap_popCallStack(opt('titleFormat'))))));
      t.start = start;
      t.end = end;
      t.visStart = visStart;
      t.visEnd = visEnd;
(_wrap_setLastFunctionCall("fullcalendar.js",1808,57041,57071,renderAgenda,false,false) || _wrap_popCallStack(      renderAgenda(weekends ? 7 : 5)));
    }
  }
  fcViews.agendaDay = AgendaDayView;
  function AgendaDayView(element, calendar) {
_wrap_addFunctionToMap('fullcalendar.js', 1812, 57122,57787, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.render = render;
(_wrap_setLastFunctionCall("fullcalendar.js",1815,57211,57261,AgendaView.call,false,true) || _wrap_popCallStack(    AgendaView.call(t, element, calendar, 'agendaDay')));
    var opt = t.opt;
    var renderAgenda = t.renderAgenda;
    var formatDate = calendar.formatDate;
    function render(date, delta) {
_wrap_addFunctionToMap('fullcalendar.js', 1819, 57369,57783, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (delta) {
(_wrap_setLastFunctionCall("fullcalendar.js",1821,57427,57447,addDays,false,false) || _wrap_popCallStack(        addDays(date, delta)));
        if (!(_wrap_setLastFunctionCall("fullcalendar.js",1822,57462,57477,opt,false,false) || _wrap_popCallStack(opt('weekends')))) {
(_wrap_setLastFunctionCall("fullcalendar.js",1823,57491,57528,skipWeekend,false,false) || _wrap_popCallStack(          skipWeekend(date, delta < 0 ? -1 : 1)));
        }
      }
      var start = (_wrap_setLastFunctionCall("fullcalendar.js",1826,57566,57587,cloneDate,false,false) || _wrap_popCallStack(cloneDate(date, true)));
      var end = (_wrap_setLastFunctionCall("fullcalendar.js",1827,57605,57633,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",1827,57613,57629,cloneDate,false,false) || _wrap_popCallStack(cloneDate(start))), 1)));
      t.title = (_wrap_setLastFunctionCall("fullcalendar.js",1828,57651,57687,formatDate,false,false) || _wrap_popCallStack(formatDate(date, (_wrap_setLastFunctionCall("fullcalendar.js",1828,57668,57686,opt,false,false) || _wrap_popCallStack(opt('titleFormat'))))));
      t.start = t.visStart = start;
      t.end = t.visEnd = end;
(_wrap_setLastFunctionCall("fullcalendar.js",1831,57761,57776,renderAgenda,false,false) || _wrap_popCallStack(      renderAgenda(1)));
    }
  }
(_wrap_setLastFunctionCall("fullcalendar.js",1834,57790,58017,setDefaults,false,false) || _wrap_popCallStack(  setDefaults({allDaySlot: true, allDayText: 'all-day', firstHour: 6, slotMinutes: 30, defaultEventMinutes: 120, axisFormat: 'h(:mm)tt', timeFormat: {agenda: 'h:mm{ - h:mm}'}, dragOpacity: {agenda: 0.5}, minTime: 0, maxTime: 24})));
  function AgendaView(element, calendar, viewName) {
_wrap_addFunctionToMap('fullcalendar.js', 1835, 58021,77244, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
_wrap_addFunctionToMap('fullcalendar.js', 1850, 58533,58571, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return hoverListener;
};
    t.colContentLeft = colContentLeft;
    t.colContentRight = colContentRight;
    t.getDaySegmentContainer = function() {
_wrap_addFunctionToMap('fullcalendar.js', 1855, 58684,58728, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return daySegmentContainer;
};
    t.getSlotSegmentContainer = function() {
_wrap_addFunctionToMap('fullcalendar.js', 1858, 58762,58807, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return slotSegmentContainer;
};
    t.getMinMinute = function() {
_wrap_addFunctionToMap('fullcalendar.js', 1861, 58830,58864, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return minMinute;
};
    t.getMaxMinute = function() {
_wrap_addFunctionToMap('fullcalendar.js', 1864, 58887,58921, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return maxMinute;
};
    t.getBodyContent = function() {
_wrap_addFunctionToMap('fullcalendar.js', 1867, 58946,58982, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return slotContent;
};
    t.getRowCnt = function() {
_wrap_addFunctionToMap('fullcalendar.js', 1870, 59002,59028, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return 1;
};
    t.getColCnt = function() {
_wrap_addFunctionToMap('fullcalendar.js', 1873, 59048,59079, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return colCnt;
};
    t.getColWidth = function() {
_wrap_addFunctionToMap('fullcalendar.js', 1876, 59101,59134, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return colWidth;
};
    t.getSlotHeight = function() {
_wrap_addFunctionToMap('fullcalendar.js', 1879, 59158,59193, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return slotHeight;
};
    t.defaultSelectionEnd = defaultSelectionEnd;
    t.renderDayOverlay = renderDayOverlay;
    t.renderSelection = renderSelection;
    t.clearSelection = clearSelection;
    t.reportDayClick = reportDayClick;
    t.dragStart = dragStart;
    t.dragStop = dragStop;
(_wrap_setLastFunctionCall("fullcalendar.js",1889,59466,59507,View.call,false,true) || _wrap_popCallStack(    View.call(t, element, calendar, viewName)));
(_wrap_setLastFunctionCall("fullcalendar.js",1890,59513,59535,OverlayManager.call,false,true) || _wrap_popCallStack(    OverlayManager.call(t)));
(_wrap_setLastFunctionCall("fullcalendar.js",1891,59541,59565,SelectionManager.call,false,true) || _wrap_popCallStack(    SelectionManager.call(t)));
(_wrap_setLastFunctionCall("fullcalendar.js",1892,59571,59598,AgendaEventRenderer.call,false,true) || _wrap_popCallStack(    AgendaEventRenderer.call(t)));
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
(_wrap_setLastFunctionCall("fullcalendar.js",1942,60840,60891,disableTextSelection,false,false) || _wrap_popCallStack(    disableTextSelection((_wrap_setLastFunctionCall("fullcalendar.js",1942,60861,60890,element.addClass,false,false) || _wrap_popCallStack(element.addClass('fc-agenda'))))));
    function renderAgenda(c) {
_wrap_addFunctionToMap('fullcalendar.js', 1943, 60897,61085, (typeof arguments === 'object' ? arguments.callee.caller : null));

      colCnt = c;
(_wrap_setLastFunctionCall("fullcalendar.js",1945,60948,60963,updateOptions,false,false) || _wrap_popCallStack(      updateOptions()));
      if (!dayTable) {
(_wrap_setLastFunctionCall("fullcalendar.js",1947,60996,61011,buildSkeleton,false,false) || _wrap_popCallStack(        buildSkeleton()));
      } else {
(_wrap_setLastFunctionCall("fullcalendar.js",1949,61036,61049,clearEvents,false,false) || _wrap_popCallStack(        clearEvents()));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",1951,61065,61078,updateCells,false,false) || _wrap_popCallStack(      updateCells()));
    }
    function updateOptions() {
_wrap_addFunctionToMap('fullcalendar.js', 1953, 61090,61494, (typeof arguments === 'object' ? arguments.callee.caller : null));

      tm = (_wrap_setLastFunctionCall("fullcalendar.js",1954,61128,61140,opt,false,false) || _wrap_popCallStack(opt('theme'))) ? 'ui' : 'fc';
      nwe = (_wrap_setLastFunctionCall("fullcalendar.js",1955,61168,61183,opt,false,false) || _wrap_popCallStack(opt('weekends'))) ? 0 : 1;
      firstDay = (_wrap_setLastFunctionCall("fullcalendar.js",1956,61210,61225,opt,false,false) || _wrap_popCallStack(opt('firstDay')));
      if (rtl = (_wrap_setLastFunctionCall("fullcalendar.js",1957,61243,61255,opt,false,false) || _wrap_popCallStack(opt('isRTL')))) {
        dis = -1;
        dit = colCnt - 1;
      } else {
        dis = 1;
        dit = 0;
      }
      minMinute = (_wrap_setLastFunctionCall("fullcalendar.js",1964,61378,61403,parseTime,false,false) || _wrap_popCallStack(parseTime((_wrap_setLastFunctionCall("fullcalendar.js",1964,61388,61402,opt,false,false) || _wrap_popCallStack(opt('minTime'))))));
      maxMinute = (_wrap_setLastFunctionCall("fullcalendar.js",1965,61423,61448,parseTime,false,false) || _wrap_popCallStack(parseTime((_wrap_setLastFunctionCall("fullcalendar.js",1965,61433,61447,opt,false,false) || _wrap_popCallStack(opt('maxTime'))))));
      colFormat = (_wrap_setLastFunctionCall("fullcalendar.js",1966,61468,61487,opt,false,false) || _wrap_popCallStack(opt('columnFormat')));
    }
    function buildSkeleton() {
_wrap_addFunctionToMap('fullcalendar.js', 1968, 61499,65624, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var headerClass = tm + '-widget-header';
      var contentClass = tm + '-widget-content';
      var s;
      var i;
      var d;
      var maxd;
      var minutes;
      var slotNormal = (_wrap_setLastFunctionCall("fullcalendar.js",1976,61719,61737,opt,false,false) || _wrap_popCallStack(opt('slotMinutes'))) % 15 == 0;
      s = '<table style=\'width:100%\' class=\'fc-agenda-days fc-border-separate\' cellspacing=\'0\'>' + '<thead>' + '<tr>' + '<th class=\'fc-agenda-axis ' + headerClass + '\'>&nbsp;</th>';
      for (i = 0; i < colCnt; i++) {
        s += '<th class=\'fc- fc-col' + i + ' ' + headerClass + '\'/>';
      }
      s += '<th class=\'fc-agenda-gutter ' + headerClass + '\'>&nbsp;</th>' + '</tr>' + '</thead>' + '<tbody>' + '<tr>' + '<th class=\'fc-agenda-axis ' + headerClass + '\'>&nbsp;</th>';
      for (i = 0; i < colCnt; i++) {
        s += '<td class=\'fc- fc-col' + i + ' ' + contentClass + '\'>' + '<div>' + '<div class=\'fc-day-content\'>' + '<div style=\'position:relative\'>&nbsp;</div>' + '</div>' + '</div>' + '</td>';
      }
      s += '<td class=\'fc-agenda-gutter ' + contentClass + '\'>&nbsp;</td>' + '</tr>' + '</tbody>' + '</table>';
      dayTable = (_wrap_setLastFunctionCall("fullcalendar.js",1986,62617,62639,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",1986,62617,62621,$,false,false) || _wrap_popCallStack($(s))).appendTo(element)));
      dayHead = (_wrap_setLastFunctionCall("fullcalendar.js",1987,62657,62679,dayTable.find,false,false) || _wrap_popCallStack(dayTable.find('thead')));
      dayHeadCells = (_wrap_setLastFunctionCall("fullcalendar.js",1988,62702,62733,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",1988,62702,62720,dayHead.find,false,false) || _wrap_popCallStack(dayHead.find('th'))).slice(1, -1)));
      dayBody = (_wrap_setLastFunctionCall("fullcalendar.js",1989,62751,62773,dayTable.find,false,false) || _wrap_popCallStack(dayTable.find('tbody')));
      dayBodyCells = (_wrap_setLastFunctionCall("fullcalendar.js",1990,62796,62827,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",1990,62796,62814,dayBody.find,false,false) || _wrap_popCallStack(dayBody.find('td'))).slice(0, -1)));
      dayBodyCellInners = (_wrap_setLastFunctionCall("fullcalendar.js",1991,62855,62898,dayBodyCells.find,false,false) || _wrap_popCallStack(dayBodyCells.find('div.fc-day-content div')));
      dayBodyFirstCell = (_wrap_setLastFunctionCall("fullcalendar.js",1992,62925,62943,dayBodyCells.eq,false,false) || _wrap_popCallStack(dayBodyCells.eq(0)));
      dayBodyFirstCellStretcher = (_wrap_setLastFunctionCall("fullcalendar.js",1993,62979,63009,dayBodyFirstCell.find,false,false) || _wrap_popCallStack(dayBodyFirstCell.find('> div')));
(_wrap_setLastFunctionCall("fullcalendar.js",1994,63017,63063,markFirstLast,false,false) || _wrap_popCallStack(      markFirstLast((_wrap_setLastFunctionCall("fullcalendar.js",1994,63031,63062,dayHead.add,false,false) || _wrap_popCallStack(dayHead.add((_wrap_setLastFunctionCall("fullcalendar.js",1994,63043,63061,dayHead.find,false,false) || _wrap_popCallStack(dayHead.find('tr')))))))));
(_wrap_setLastFunctionCall("fullcalendar.js",1995,63071,63117,markFirstLast,false,false) || _wrap_popCallStack(      markFirstLast((_wrap_setLastFunctionCall("fullcalendar.js",1995,63085,63116,dayBody.add,false,false) || _wrap_popCallStack(dayBody.add((_wrap_setLastFunctionCall("fullcalendar.js",1995,63097,63115,dayBody.find,false,false) || _wrap_popCallStack(dayBody.find('tr')))))))));
      axisFirstCells = (_wrap_setLastFunctionCall("fullcalendar.js",1996,63142,63166,dayHead.find,false,false) || _wrap_popCallStack(dayHead.find('th:first')));
      gutterCells = (_wrap_setLastFunctionCall("fullcalendar.js",1997,63188,63222,dayTable.find,false,false) || _wrap_popCallStack(dayTable.find('.fc-agenda-gutter')));
      slotLayer = (_wrap_setLastFunctionCall("fullcalendar.js",1998,63242,63327,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",1998,63242,63309,$,false,false) || _wrap_popCallStack($('<div style=\'position:absolute;z-index:2;left:0;width:100%\'/>'))).appendTo(element)));
      if ((_wrap_setLastFunctionCall("fullcalendar.js",1999,63339,63356,opt,false,false) || _wrap_popCallStack(opt('allDaySlot')))) {
        daySegmentContainer = (_wrap_setLastFunctionCall("fullcalendar.js",2000,63390,63472,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",2000,63390,63452,$,false,false) || _wrap_popCallStack($('<div style=\'position:absolute;z-index:8;top:0;left:0\'/>'))).appendTo(slotLayer)));
        s = '<table style=\'width:100%\' class=\'fc-agenda-allday\' cellspacing=\'0\'>' + '<tr>' + '<th class=\'' + headerClass + ' fc-agenda-axis\'>' + (_wrap_setLastFunctionCall("fullcalendar.js",2001,63627,63644,opt,false,false) || _wrap_popCallStack(opt('allDayText'))) + '</th>' + '<td>' + '<div class=\'fc-day-content\'><div style=\'position:relative\'/></div>' + '</td>' + '<th class=\'' + headerClass + ' fc-agenda-gutter\'>&nbsp;</th>' + '</tr>' + '</table>';
        allDayTable = (_wrap_setLastFunctionCall("fullcalendar.js",2002,63862,63886,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",2002,63862,63866,$,false,false) || _wrap_popCallStack($(s))).appendTo(slotLayer)));
        allDayRow = (_wrap_setLastFunctionCall("fullcalendar.js",2003,63908,63930,allDayTable.find,false,false) || _wrap_popCallStack(allDayTable.find('tr')));
(_wrap_setLastFunctionCall("fullcalendar.js",2004,63940,63969,dayBind,false,false) || _wrap_popCallStack(        dayBind((_wrap_setLastFunctionCall("fullcalendar.js",2004,63948,63968,allDayRow.find,false,false) || _wrap_popCallStack(allDayRow.find('td'))))));
        axisFirstCells = (_wrap_setLastFunctionCall("fullcalendar.js",2005,63996,64044,axisFirstCells.add,false,false) || _wrap_popCallStack(axisFirstCells.add((_wrap_setLastFunctionCall("fullcalendar.js",2005,64015,64043,allDayTable.find,false,false) || _wrap_popCallStack(allDayTable.find('th:first'))))));
        gutterCells = (_wrap_setLastFunctionCall("fullcalendar.js",2006,64068,64124,gutterCells.add,false,false) || _wrap_popCallStack(gutterCells.add((_wrap_setLastFunctionCall("fullcalendar.js",2006,64084,64123,allDayTable.find,false,false) || _wrap_popCallStack(allDayTable.find('th.fc-agenda-gutter'))))));
(_wrap_setLastFunctionCall("fullcalendar.js",2007,64134,64263,slotLayer.append,false,false) || _wrap_popCallStack(        slotLayer.append('<div class=\'fc-agenda-divider ' + headerClass + '\'>' + '<div class=\'fc-agenda-divider-inner\'/>' + '</div>')));
      } else {
        daySegmentContainer = (_wrap_setLastFunctionCall("fullcalendar.js",2009,64310,64315,$,false,false) || _wrap_popCallStack($([])));
      }
      slotScroller = (_wrap_setLastFunctionCall("fullcalendar.js",2011,64346,64450,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",2011,64346,64430,$,false,false) || _wrap_popCallStack($('<div style=\'position:absolute;width:100%;overflow-x:hidden;overflow-y:auto\'/>'))).appendTo(slotLayer)));
      slotContent = (_wrap_setLastFunctionCall("fullcalendar.js",2012,64472,64561,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",2012,64472,64538,$,false,false) || _wrap_popCallStack($('<div style=\'position:relative;width:100%;overflow:hidden\'/>'))).appendTo(slotScroller)));
      slotSegmentContainer = (_wrap_setLastFunctionCall("fullcalendar.js",2013,64592,64676,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",2013,64592,64654,$,false,false) || _wrap_popCallStack($('<div style=\'position:absolute;z-index:8;top:0;left:0\'/>'))).appendTo(slotContent)));
      s = '<table class=\'fc-agenda-slots\' style=\'width:100%\' cellspacing=\'0\'>' + '<tbody>';
      d = (_wrap_setLastFunctionCall("fullcalendar.js",2015,64786,64796,zeroDate,false,false) || _wrap_popCallStack(zeroDate()));
      maxd = (_wrap_setLastFunctionCall("fullcalendar.js",2016,64811,64846,addMinutes,false,false) || _wrap_popCallStack(addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2016,64822,64834,cloneDate,false,false) || _wrap_popCallStack(cloneDate(d))), maxMinute)));
(_wrap_setLastFunctionCall("fullcalendar.js",2017,64854,64878,addMinutes,false,false) || _wrap_popCallStack(      addMinutes(d, minMinute)));
      slotCnt = 0;
      for (i = 0; d < maxd; i++) {
        minutes = (_wrap_setLastFunctionCall("fullcalendar.js",2020,64952,64966,d.getMinutes,false,false) || _wrap_popCallStack(d.getMinutes()));
        s += '<tr class=\'fc-slot' + i + ' ' + (!minutes ? '' : 'fc-minor') + '\'>' + '<th class=\'fc-agenda-axis ' + headerClass + '\'>' + (!slotNormal || !minutes ? (_wrap_setLastFunctionCall("fullcalendar.js",2021,65135,65167,formatDate,false,false) || _wrap_popCallStack(formatDate(d, (_wrap_setLastFunctionCall("fullcalendar.js",2021,65149,65166,opt,false,false) || _wrap_popCallStack(opt('axisFormat')))))) : '&nbsp;') + '</th>' + '<td class=\'' + contentClass + '\'>' + '<div style=\'position:relative\'>&nbsp;</div>' + '</td>' + '</tr>';
(_wrap_setLastFunctionCall("fullcalendar.js",2022,65309,65342,addMinutes,false,false) || _wrap_popCallStack(        addMinutes(d, (_wrap_setLastFunctionCall("fullcalendar.js",2022,65323,65341,opt,false,false) || _wrap_popCallStack(opt('slotMinutes'))))));
        slotCnt++;
      }
      s += '</tbody>' + '</table>';
      slotTable = (_wrap_setLastFunctionCall("fullcalendar.js",2026,65425,65451,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",2026,65425,65429,$,false,false) || _wrap_popCallStack($(s))).appendTo(slotContent)));
      slotTableFirstInner = (_wrap_setLastFunctionCall("fullcalendar.js",2027,65481,65508,slotTable.find,false,false) || _wrap_popCallStack(slotTable.find('div:first')));
(_wrap_setLastFunctionCall("fullcalendar.js",2028,65516,65546,slotBind,false,false) || _wrap_popCallStack(      slotBind((_wrap_setLastFunctionCall("fullcalendar.js",2028,65525,65545,slotTable.find,false,false) || _wrap_popCallStack(slotTable.find('td'))))));
      axisFirstCells = (_wrap_setLastFunctionCall("fullcalendar.js",2029,65571,65617,axisFirstCells.add,false,false) || _wrap_popCallStack(axisFirstCells.add((_wrap_setLastFunctionCall("fullcalendar.js",2029,65590,65616,slotTable.find,false,false) || _wrap_popCallStack(slotTable.find('th:first'))))));
    }
    function updateCells() {
_wrap_addFunctionToMap('fullcalendar.js', 2031, 65629,66206, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i;
      var headCell;
      var bodyCell;
      var date;
      var today = (_wrap_setLastFunctionCall("fullcalendar.js",2036,65741,65762,clearTime,false,false) || _wrap_popCallStack(clearTime((_wrap_setLastFunctionCall("fullcalendar.js",2036,65751,65761,Date,false,false) || _wrap_popCallStack(new Date())))));
      for (i = 0; i < colCnt; i++) {
        date = (_wrap_setLastFunctionCall("fullcalendar.js",2038,65816,65826,colDate,false,false) || _wrap_popCallStack(colDate(i)));
        headCell = (_wrap_setLastFunctionCall("fullcalendar.js",2039,65847,65865,dayHeadCells.eq,false,false) || _wrap_popCallStack(dayHeadCells.eq(i)));
(_wrap_setLastFunctionCall("fullcalendar.js",2040,65875,65917,headCell.html,false,false) || _wrap_popCallStack(        headCell.html((_wrap_setLastFunctionCall("fullcalendar.js",2040,65889,65916,formatDate,false,false) || _wrap_popCallStack(formatDate(date, colFormat))))));
        bodyCell = (_wrap_setLastFunctionCall("fullcalendar.js",2041,65938,65956,dayBodyCells.eq,false,false) || _wrap_popCallStack(dayBodyCells.eq(i)));
        if (+date == +today) {
(_wrap_setLastFunctionCall("fullcalendar.js",2043,65999,66050,bodyCell.addClass,false,false) || _wrap_popCallStack(          bodyCell.addClass(tm + '-state-highlight fc-today')));
        } else {
(_wrap_setLastFunctionCall("fullcalendar.js",2045,66079,66133,bodyCell.removeClass,false,false) || _wrap_popCallStack(          bodyCell.removeClass(tm + '-state-highlight fc-today')));
        }
(_wrap_setLastFunctionCall("fullcalendar.js",2047,66153,66191,setDayID,false,false) || _wrap_popCallStack(        setDayID((_wrap_setLastFunctionCall("fullcalendar.js",2047,66162,66184,headCell.add,false,false) || _wrap_popCallStack(headCell.add(bodyCell))), date)));
      }
    }
    function setHeight(height, dateChanged) {
_wrap_addFunctionToMap('fullcalendar.js', 2050, 66211,66861, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (height === undefined) {
        height = viewHeight;
      }
      viewHeight = height;
      slotTopCache = {};
      var headHeight = (_wrap_setLastFunctionCall("fullcalendar.js",2056,66399,66417,dayBody.position,false,false) || _wrap_popCallStack(dayBody.position())).top;
      var allDayHeight = (_wrap_setLastFunctionCall("fullcalendar.js",2057,66448,66471,slotScroller.position,false,false) || _wrap_popCallStack(slotScroller.position())).top;
      var bodyHeight = (_wrap_setLastFunctionCall("fullcalendar.js",2058,66500,66568,Math.min,false,false) || _wrap_popCallStack(Math.min(height - headHeight, (_wrap_setLastFunctionCall("fullcalendar.js",2058,66530,66548,slotTable.height,false,false) || _wrap_popCallStack(slotTable.height())) + allDayHeight + 1)));
(_wrap_setLastFunctionCall("fullcalendar.js",2059,66576,66647,dayBodyFirstCellStretcher.height,false,false) || _wrap_popCallStack(      dayBodyFirstCellStretcher.height(bodyHeight - (_wrap_setLastFunctionCall("fullcalendar.js",2059,66622,66646,vsides,false,false) || _wrap_popCallStack(vsides(dayBodyFirstCell))))));
(_wrap_setLastFunctionCall("fullcalendar.js",2060,66655,66687,slotLayer.css,false,false) || _wrap_popCallStack(      slotLayer.css('top', headHeight)));
(_wrap_setLastFunctionCall("fullcalendar.js",2061,66695,66745,slotScroller.height,false,false) || _wrap_popCallStack(      slotScroller.height(bodyHeight - allDayHeight - 1)));
      slotHeight = (_wrap_setLastFunctionCall("fullcalendar.js",2062,66766,66794,slotTableFirstInner.height,false,false) || _wrap_popCallStack(slotTableFirstInner.height())) + 1;
      if (dateChanged) {
(_wrap_setLastFunctionCall("fullcalendar.js",2064,66833,66846,resetScroll,false,false) || _wrap_popCallStack(        resetScroll()));
      }
    }
    function setWidth(width) {
_wrap_addFunctionToMap('fullcalendar.js', 2067, 66866,67575, (typeof arguments === 'object' ? arguments.callee.caller : null));

      viewWidth = width;
(_wrap_setLastFunctionCall("fullcalendar.js",2069,66924,66951,colContentPositions.clear,false,false) || _wrap_popCallStack(      colContentPositions.clear()));
      axisWidth = 0;
(_wrap_setLastFunctionCall("fullcalendar.js",2071,66980,67117,setOuterWidth,false,false) || _wrap_popCallStack(      setOuterWidth((_wrap_setLastFunctionCall("fullcalendar.js",2071,66994,67105,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",2071,66994,67018,axisFirstCells.width,false,false) || _wrap_popCallStack(axisFirstCells.width(''))).each(function(i, _cell) {
_wrap_addFunctionToMap('fullcalendar.js', 2071, 67024,67104, (typeof arguments === 'object' ? arguments.callee.caller : null));

  axisWidth = (_wrap_setLastFunctionCall("fullcalendar.js",2072,67059,67101,Math.max,false,false) || _wrap_popCallStack(Math.max(axisWidth, (_wrap_setLastFunctionCall("fullcalendar.js",2072,67079,67100,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",2072,67079,67087,$,false,false) || _wrap_popCallStack($(_cell))).outerWidth())))));
}))), axisWidth)));
      var slotTableWidth = slotScroller[0].clientWidth;
      gutterWidth = (_wrap_setLastFunctionCall("fullcalendar.js",2075,67195,67215,slotScroller.width,false,false) || _wrap_popCallStack(slotScroller.width())) - slotTableWidth;
      if (gutterWidth) {
(_wrap_setLastFunctionCall("fullcalendar.js",2077,67267,67306,setOuterWidth,false,false) || _wrap_popCallStack(        setOuterWidth(gutterCells, gutterWidth)));
(_wrap_setLastFunctionCall("fullcalendar.js",2078,67316,67364,null,false,false) || _wrap_popCallStack(        (_wrap_setLastFunctionCall("fullcalendar.js",2078,67316,67341,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",2078,67316,67334,gutterCells.show,false,false) || _wrap_popCallStack(gutterCells.show())).prev())).removeClass('fc-last')));
      } else {
(_wrap_setLastFunctionCall("fullcalendar.js",2080,67389,67434,null,false,false) || _wrap_popCallStack(        (_wrap_setLastFunctionCall("fullcalendar.js",2080,67389,67414,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",2080,67389,67407,gutterCells.hide,false,false) || _wrap_popCallStack(gutterCells.hide())).prev())).addClass('fc-last')));
      }
      colWidth = (_wrap_setLastFunctionCall("fullcalendar.js",2082,67461,67510,Math.floor,false,false) || _wrap_popCallStack(Math.floor((slotTableWidth - axisWidth) / colCnt)));
(_wrap_setLastFunctionCall("fullcalendar.js",2083,67518,67568,setOuterWidth,false,false) || _wrap_popCallStack(      setOuterWidth((_wrap_setLastFunctionCall("fullcalendar.js",2083,67532,67557,dayHeadCells.slice,false,false) || _wrap_popCallStack(dayHeadCells.slice(0, -1))), colWidth)));
    }
    function resetScroll() {
_wrap_addFunctionToMap('fullcalendar.js', 2085, 67580,67886, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var d0 = (_wrap_setLastFunctionCall("fullcalendar.js",2086,67620,67630,zeroDate,false,false) || _wrap_popCallStack(zeroDate()));
      var scrollDate = (_wrap_setLastFunctionCall("fullcalendar.js",2087,67655,67668,cloneDate,false,false) || _wrap_popCallStack(cloneDate(d0)));
(_wrap_setLastFunctionCall("fullcalendar.js",2088,67676,67713,scrollDate.setHours,false,false) || _wrap_popCallStack(      scrollDate.setHours((_wrap_setLastFunctionCall("fullcalendar.js",2088,67696,67712,opt,false,false) || _wrap_popCallStack(opt('firstHour'))))));
      var top = (_wrap_setLastFunctionCall("fullcalendar.js",2089,67731,67759,timePosition,false,false) || _wrap_popCallStack(timePosition(d0, scrollDate))) + 1;
      function scroll() {
_wrap_addFunctionToMap('fullcalendar.js', 2090, 67771,67835, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2091,67799,67826,slotScroller.scrollTop,false,false) || _wrap_popCallStack(        slotScroller.scrollTop(top)));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",2093,67842,67850,scroll,false,false) || _wrap_popCallStack(      scroll()));
(_wrap_setLastFunctionCall("fullcalendar.js",2094,67858,67879,setTimeout,false,false) || _wrap_popCallStack(      setTimeout(scroll, 0)));
    }
    function beforeHide() {
_wrap_addFunctionToMap('fullcalendar.js', 2096, 67891,67969, (typeof arguments === 'object' ? arguments.callee.caller : null));

      savedScrollTop = (_wrap_setLastFunctionCall("fullcalendar.js",2097,67938,67962,slotScroller.scrollTop,false,false) || _wrap_popCallStack(slotScroller.scrollTop()));
    }
    function afterShow() {
_wrap_addFunctionToMap('fullcalendar.js', 2099, 67974,68048, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2100,68003,68041,slotScroller.scrollTop,false,false) || _wrap_popCallStack(      slotScroller.scrollTop(savedScrollTop)));
    }
    function dayBind(cells) {
_wrap_addFunctionToMap('fullcalendar.js', 2102, 68053,68147, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2103,68085,68140,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("fullcalendar.js",2103,68085,68107,cells.click,false,false) || _wrap_popCallStack(cells.click(slotClick))).mousedown(daySelectionMousedown)));
    }
    function slotBind(cells) {
_wrap_addFunctionToMap('fullcalendar.js', 2105, 68152,68248, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2106,68185,68241,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("fullcalendar.js",2106,68185,68207,cells.click,false,false) || _wrap_popCallStack(cells.click(slotClick))).mousedown(slotSelectionMousedown)));
    }
    function slotClick(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 2108, 68253,68916, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (!(_wrap_setLastFunctionCall("fullcalendar.js",2109,68289,68306,opt,false,false) || _wrap_popCallStack(opt('selectable')))) {
        var col = (_wrap_setLastFunctionCall("fullcalendar.js",2110,68328,68420,Math.min,false,false) || _wrap_popCallStack(Math.min(colCnt - 1, (_wrap_setLastFunctionCall("fullcalendar.js",2110,68349,68419,Math.floor,false,false) || _wrap_popCallStack(Math.floor((ev.pageX - (_wrap_setLastFunctionCall("fullcalendar.js",2110,68372,68389,dayTable.offset,false,false) || _wrap_popCallStack(dayTable.offset())).left - axisWidth) / colWidth))))));
        var date = (_wrap_setLastFunctionCall("fullcalendar.js",2111,68441,68453,colDate,false,false) || _wrap_popCallStack(colDate(col)));
        var rowMatch = (_wrap_setLastFunctionCall("fullcalendar.js",2112,68478,68525,this.parentNode.className.match,false,false) || _wrap_popCallStack(this.parentNode.className.match(/fc-slot(\d+)/)));
        if (rowMatch) {
          var mins = (_wrap_setLastFunctionCall("fullcalendar.js",2114,68572,68593,parseInt,false,false) || _wrap_popCallStack(parseInt(rowMatch[1]))) * (_wrap_setLastFunctionCall("fullcalendar.js",2114,68596,68614,opt,false,false) || _wrap_popCallStack(opt('slotMinutes')));
          var hours = (_wrap_setLastFunctionCall("fullcalendar.js",2115,68638,68659,Math.floor,false,false) || _wrap_popCallStack(Math.floor(mins / 60)));
(_wrap_setLastFunctionCall("fullcalendar.js",2116,68671,68691,date.setHours,false,false) || _wrap_popCallStack(          date.setHours(hours)));
(_wrap_setLastFunctionCall("fullcalendar.js",2117,68703,68741,date.setMinutes,false,false) || _wrap_popCallStack(          date.setMinutes(mins % 60 + minMinute)));
(_wrap_setLastFunctionCall("fullcalendar.js",2118,68753,68808,trigger,false,false) || _wrap_popCallStack(          trigger('dayClick', dayBodyCells[col], date, false, ev)));
        } else {
(_wrap_setLastFunctionCall("fullcalendar.js",2120,68837,68891,trigger,false,false) || _wrap_popCallStack(          trigger('dayClick', dayBodyCells[col], date, true, ev)));
        }
      }
    }
    function renderDayOverlay(startDate, endDate, refreshCoordinateGrid) {
_wrap_addFunctionToMap('fullcalendar.js', 2124, 68921,69588, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (refreshCoordinateGrid) {
(_wrap_setLastFunctionCall("fullcalendar.js",2126,69035,69057,coordinateGrid.build,false,false) || _wrap_popCallStack(        coordinateGrid.build()));
      }
      var visStart = (_wrap_setLastFunctionCall("fullcalendar.js",2128,69088,69109,cloneDate,false,false) || _wrap_popCallStack(cloneDate(t.visStart)));
      var startCol, endCol;
      if (rtl) {
        startCol = (_wrap_setLastFunctionCall("fullcalendar.js",2131,69175,69201,dayDiff,false,false) || _wrap_popCallStack(dayDiff(endDate, visStart))) * dis + dit + 1;
        endCol = (_wrap_setLastFunctionCall("fullcalendar.js",2132,69236,69264,dayDiff,false,false) || _wrap_popCallStack(dayDiff(startDate, visStart))) * dis + dit + 1;
      } else {
        startCol = (_wrap_setLastFunctionCall("fullcalendar.js",2134,69316,69344,dayDiff,false,false) || _wrap_popCallStack(dayDiff(startDate, visStart)));
        endCol = (_wrap_setLastFunctionCall("fullcalendar.js",2135,69363,69389,dayDiff,false,false) || _wrap_popCallStack(dayDiff(endDate, visStart)));
      }
      startCol = (_wrap_setLastFunctionCall("fullcalendar.js",2137,69416,69437,Math.max,false,false) || _wrap_popCallStack(Math.max(0, startCol)));
      endCol = (_wrap_setLastFunctionCall("fullcalendar.js",2138,69454,69478,Math.min,false,false) || _wrap_popCallStack(Math.min(colCnt, endCol)));
      if (startCol < endCol) {
(_wrap_setLastFunctionCall("fullcalendar.js",2140,69519,69573,dayBind,false,false) || _wrap_popCallStack(        dayBind((_wrap_setLastFunctionCall("fullcalendar.js",2140,69527,69572,renderCellOverlay,false,false) || _wrap_popCallStack(renderCellOverlay(0, startCol, 0, endCol - 1))))));
      }
    }
    function renderCellOverlay(row0, col0, row1, col1) {
_wrap_addFunctionToMap('fullcalendar.js', 2143, 69593,69769, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var rect = (_wrap_setLastFunctionCall("fullcalendar.js",2144,69663,69717,coordinateGrid.rect,false,false) || _wrap_popCallStack(coordinateGrid.rect(row0, col0, row1, col1, slotLayer)));
      return (_wrap_setLastFunctionCall("fullcalendar.js",2145,69732,69762,renderOverlay,false,false) || _wrap_popCallStack(renderOverlay(rect, slotLayer)));
    }
    function renderSlotOverlay(overlayStart, overlayEnd) {
_wrap_addFunctionToMap('fullcalendar.js', 2147, 69774,70565, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var dayStart = (_wrap_setLastFunctionCall("fullcalendar.js",2148,69850,69871,cloneDate,false,false) || _wrap_popCallStack(cloneDate(t.visStart)));
      var dayEnd = (_wrap_setLastFunctionCall("fullcalendar.js",2149,69892,69923,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",2149,69900,69919,cloneDate,false,false) || _wrap_popCallStack(cloneDate(dayStart))), 1)));
      for (var i = 0; i < colCnt; i++) {
        var stretchStart = (_wrap_setLastFunctionCall("fullcalendar.js",2151,69993,70035,Date,false,false) || _wrap_popCallStack(new Date((_wrap_setLastFunctionCall("fullcalendar.js",2151,70002,70034,Math.max,false,false) || _wrap_popCallStack(Math.max(dayStart, overlayStart))))));
        var stretchEnd = (_wrap_setLastFunctionCall("fullcalendar.js",2152,70062,70100,Date,false,false) || _wrap_popCallStack(new Date((_wrap_setLastFunctionCall("fullcalendar.js",2152,70071,70099,Math.min,false,false) || _wrap_popCallStack(Math.min(dayEnd, overlayEnd))))));
        if (stretchStart < stretchEnd) {
          var col = i * dis + dit;
          var rect = (_wrap_setLastFunctionCall("fullcalendar.js",2155,70199,70247,coordinateGrid.rect,false,false) || _wrap_popCallStack(coordinateGrid.rect(0, col, 0, col, slotContent)));
          var top = (_wrap_setLastFunctionCall("fullcalendar.js",2156,70269,70305,timePosition,false,false) || _wrap_popCallStack(timePosition(dayStart, stretchStart)));
          var bottom = (_wrap_setLastFunctionCall("fullcalendar.js",2157,70330,70364,timePosition,false,false) || _wrap_popCallStack(timePosition(dayStart, stretchEnd)));
          rect.top = top;
          rect.height = bottom - top;
(_wrap_setLastFunctionCall("fullcalendar.js",2160,70440,70482,slotBind,false,false) || _wrap_popCallStack(          slotBind((_wrap_setLastFunctionCall("fullcalendar.js",2160,70449,70481,renderOverlay,false,false) || _wrap_popCallStack(renderOverlay(rect, slotContent))))));
        }
(_wrap_setLastFunctionCall("fullcalendar.js",2162,70502,70522,addDays,false,false) || _wrap_popCallStack(        addDays(dayStart, 1)));
(_wrap_setLastFunctionCall("fullcalendar.js",2163,70532,70550,addDays,false,false) || _wrap_popCallStack(        addDays(dayEnd, 1)));
      }
    }
    coordinateGrid = (_wrap_setLastFunctionCall("fullcalendar.js",2166,70587,71343,CoordinateGrid,false,false) || _wrap_popCallStack(new CoordinateGrid(function(rows, cols) {
_wrap_addFunctionToMap('fullcalendar.js', 2166, 70606,71342, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var e, n, p;
(_wrap_setLastFunctionCall("fullcalendar.js",2168,70646,70775,dayHeadCells.each,false,false) || _wrap_popCallStack(  dayHeadCells.each(function(i, _e) {
_wrap_addFunctionToMap('fullcalendar.js', 2168, 70664,70774, (typeof arguments === 'object' ? arguments.callee.caller : null));

  e = (_wrap_setLastFunctionCall("fullcalendar.js",2169,70688,70693,$,false,false) || _wrap_popCallStack($(_e)));
  n = (_wrap_setLastFunctionCall("fullcalendar.js",2170,70701,70711,e.offset,false,false) || _wrap_popCallStack(e.offset())).left;
  if (i) {
    p[1] = n;
  }
  p = [n];
  cols[i] = p;
})));
  p[1] = n + (_wrap_setLastFunctionCall("fullcalendar.js",2177,70790,70804,e.outerWidth,false,false) || _wrap_popCallStack(e.outerWidth()));
  if ((_wrap_setLastFunctionCall("fullcalendar.js",2178,70812,70829,opt,false,false) || _wrap_popCallStack(opt('allDaySlot')))) {
    e = allDayRow;
    n = (_wrap_setLastFunctionCall("fullcalendar.js",2180,70860,70870,e.offset,false,false) || _wrap_popCallStack(e.offset())).top;
    rows[0] = [n, n + (_wrap_setLastFunctionCall("fullcalendar.js",2181,70898,70913,e.outerHeight,false,false) || _wrap_popCallStack(e.outerHeight()))];
  }
  var slotTableTop = (_wrap_setLastFunctionCall("fullcalendar.js",2183,70941,70961,slotContent.offset,false,false) || _wrap_popCallStack(slotContent.offset())).top;
  var slotScrollerTop = (_wrap_setLastFunctionCall("fullcalendar.js",2184,70991,71012,slotScroller.offset,false,false) || _wrap_popCallStack(slotScroller.offset())).top;
  var slotScrollerBottom = slotScrollerTop + (_wrap_setLastFunctionCall("fullcalendar.js",2185,71063,71089,slotScroller.outerHeight,false,false) || _wrap_popCallStack(slotScroller.outerHeight()));
  function constrain(n) {
_wrap_addFunctionToMap('fullcalendar.js', 2186, 71093,71191, (typeof arguments === 'object' ? arguments.callee.caller : null));

    return (_wrap_setLastFunctionCall("fullcalendar.js",2187,71128,71186,Math.max,false,false) || _wrap_popCallStack(Math.max(slotScrollerTop, (_wrap_setLastFunctionCall("fullcalendar.js",2187,71154,71185,Math.min,false,false) || _wrap_popCallStack(Math.min(slotScrollerBottom, n))))));
  }
  for (var i = 0; i < slotCnt; i++) {
(_wrap_setLastFunctionCall("fullcalendar.js",2190,71234,71335,rows.push,false,false) || _wrap_popCallStack(    rows.push([(_wrap_setLastFunctionCall("fullcalendar.js",2190,71245,71285,constrain,false,false) || _wrap_popCallStack(constrain(slotTableTop + slotHeight * i))), (_wrap_setLastFunctionCall("fullcalendar.js",2190,71287,71333,constrain,false,false) || _wrap_popCallStack(constrain(slotTableTop + slotHeight * (i + 1))))])));
  }
})));
    hoverListener = (_wrap_setLastFunctionCall("fullcalendar.js",2193,71365,71398,HoverListener,false,false) || _wrap_popCallStack(new HoverListener(coordinateGrid)));
    colContentPositions = (_wrap_setLastFunctionCall("fullcalendar.js",2194,71426,71508,HorizontalPositionCache,false,false) || _wrap_popCallStack(new HorizontalPositionCache(function(col) {
_wrap_addFunctionToMap('fullcalendar.js', 2194, 71454,71507, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("fullcalendar.js",2195,71479,71504,dayBodyCellInners.eq,false,false) || _wrap_popCallStack(dayBodyCellInners.eq(col)));
})));
    function colContentLeft(col) {
_wrap_addFunctionToMap('fullcalendar.js', 2197, 71514,71594, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",2198,71558,71587,colContentPositions.left,false,false) || _wrap_popCallStack(colContentPositions.left(col)));
    }
    function colContentRight(col) {
_wrap_addFunctionToMap('fullcalendar.js', 2200, 71599,71681, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",2201,71644,71674,colContentPositions.right,false,false) || _wrap_popCallStack(colContentPositions.right(col)));
    }
    function dateCell(date) {
_wrap_addFunctionToMap('fullcalendar.js', 2203, 71686,71814, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return {row: (_wrap_setLastFunctionCall("fullcalendar.js",2204,71731,71772,Math.floor,false,false) || _wrap_popCallStack(Math.floor((_wrap_setLastFunctionCall("fullcalendar.js",2204,71742,71767,dayDiff,false,false) || _wrap_popCallStack(dayDiff(date, t.visStart))) / 7))), col: (_wrap_setLastFunctionCall("fullcalendar.js",2204,71779,71806,dayOfWeekCol,false,false) || _wrap_popCallStack(dayOfWeekCol((_wrap_setLastFunctionCall("fullcalendar.js",2204,71792,71805,date.getDay,false,false) || _wrap_popCallStack(date.getDay())))))};
    }
    function cellDate(cell) {
_wrap_addFunctionToMap('fullcalendar.js', 2206, 71819,72094, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var d = (_wrap_setLastFunctionCall("fullcalendar.js",2207,71859,71876,colDate,false,false) || _wrap_popCallStack(colDate(cell.col)));
      var slotIndex = cell.row;
      if ((_wrap_setLastFunctionCall("fullcalendar.js",2209,71920,71937,opt,false,false) || _wrap_popCallStack(opt('allDaySlot')))) {
        slotIndex--;
      }
      if (slotIndex >= 0) {
(_wrap_setLastFunctionCall("fullcalendar.js",2213,72006,72063,addMinutes,false,false) || _wrap_popCallStack(        addMinutes(d, minMinute + slotIndex * (_wrap_setLastFunctionCall("fullcalendar.js",2213,72044,72062,opt,false,false) || _wrap_popCallStack(opt('slotMinutes'))))));
      }
      return d;
    }
    function colDate(col) {
_wrap_addFunctionToMap('fullcalendar.js', 2217, 72099,72190, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",2218,72136,72183,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",2218,72144,72165,cloneDate,false,false) || _wrap_popCallStack(cloneDate(t.visStart))), col * dis + dit)));
    }
    function cellIsAllDay(cell) {
_wrap_addFunctionToMap('fullcalendar.js', 2220, 72195,72275, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",2221,72238,72255,opt,false,false) || _wrap_popCallStack(opt('allDaySlot'))) && !cell.row;
    }
    function dayOfWeekCol(dayOfWeek) {
_wrap_addFunctionToMap('fullcalendar.js', 2223, 72280,72402, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (dayOfWeek - (_wrap_setLastFunctionCall("fullcalendar.js",2224,72341,72364,Math.max,false,false) || _wrap_popCallStack(Math.max(firstDay, nwe))) + colCnt) % colCnt * dis + dit;
    }
    function timePosition(day, time) {
_wrap_addFunctionToMap('fullcalendar.js', 2226, 72407,73096, (typeof arguments === 'object' ? arguments.callee.caller : null));

      day = (_wrap_setLastFunctionCall("fullcalendar.js",2227,72454,72474,cloneDate,false,false) || _wrap_popCallStack(cloneDate(day, true)));
      if (time < (_wrap_setLastFunctionCall("fullcalendar.js",2228,72493,72530,addMinutes,false,false) || _wrap_popCallStack(addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2228,72504,72518,cloneDate,false,false) || _wrap_popCallStack(cloneDate(day))), minMinute)))) {
        return 0;
      }
      if (time >= (_wrap_setLastFunctionCall("fullcalendar.js",2231,72578,72615,addMinutes,false,false) || _wrap_popCallStack(addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2231,72589,72603,cloneDate,false,false) || _wrap_popCallStack(cloneDate(day))), maxMinute)))) {
        return (_wrap_setLastFunctionCall("fullcalendar.js",2232,72634,72652,slotTable.height,false,false) || _wrap_popCallStack(slotTable.height()));
      }
      var slotMinutes = (_wrap_setLastFunctionCall("fullcalendar.js",2234,72686,72704,opt,false,false) || _wrap_popCallStack(opt('slotMinutes'))), minutes = (_wrap_setLastFunctionCall("fullcalendar.js",2234,72716,72731,time.getHours,false,false) || _wrap_popCallStack(time.getHours())) * 60 + (_wrap_setLastFunctionCall("fullcalendar.js",2234,72739,72756,time.getMinutes,false,false) || _wrap_popCallStack(time.getMinutes())) - minMinute, slotI = (_wrap_setLastFunctionCall("fullcalendar.js",2234,72778,72811,Math.floor,false,false) || _wrap_popCallStack(Math.floor(minutes / slotMinutes))), slotTop = slotTopCache[slotI];
      if (slotTop === undefined) {
        slotTop = slotTopCache[slotI] = (_wrap_setLastFunctionCall("fullcalendar.js",2236,72919,72964,slotTable.find,false,false) || _wrap_popCallStack(slotTable.find('tr:eq(' + slotI + ') td div')))[0].offsetTop;
      }
      return (_wrap_setLastFunctionCall("fullcalendar.js",2238,73000,73089,Math.max,false,false) || _wrap_popCallStack(Math.max(0, (_wrap_setLastFunctionCall("fullcalendar.js",2238,73012,73088,Math.round,false,false) || _wrap_popCallStack(Math.round(slotTop - 1 + slotHeight * (minutes % slotMinutes / slotMinutes)))))));
    }
    function allDayBounds() {
_wrap_addFunctionToMap('fullcalendar.js', 2240, 73101,73196, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return {left: axisWidth, right: viewWidth - gutterWidth};
    }
    function getAllDayRow(index) {
_wrap_addFunctionToMap('fullcalendar.js', 2243, 73201,73261, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return allDayRow;
    }
    function defaultEventEnd(event) {
_wrap_addFunctionToMap('fullcalendar.js', 2246, 73266,73463, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var start = (_wrap_setLastFunctionCall("fullcalendar.js",2247,73318,73340,cloneDate,false,false) || _wrap_popCallStack(cloneDate(event.start)));
      if (event.allDay) {
        return start;
      }
      return (_wrap_setLastFunctionCall("fullcalendar.js",2251,73411,73456,addMinutes,false,false) || _wrap_popCallStack(addMinutes(start, (_wrap_setLastFunctionCall("fullcalendar.js",2251,73429,73455,opt,false,false) || _wrap_popCallStack(opt('defaultEventMinutes'))))));
    }
    function defaultSelectionEnd(startDate, allDay) {
_wrap_addFunctionToMap('fullcalendar.js', 2253, 73468,73655, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (allDay) {
        return (_wrap_setLastFunctionCall("fullcalendar.js",2255,73553,73573,cloneDate,false,false) || _wrap_popCallStack(cloneDate(startDate)));
      }
      return (_wrap_setLastFunctionCall("fullcalendar.js",2257,73596,73648,addMinutes,false,false) || _wrap_popCallStack(addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2257,73607,73627,cloneDate,false,false) || _wrap_popCallStack(cloneDate(startDate))), (_wrap_setLastFunctionCall("fullcalendar.js",2257,73629,73647,opt,false,false) || _wrap_popCallStack(opt('slotMinutes'))))));
    }
    function renderSelection(startDate, endDate, allDay) {
_wrap_addFunctionToMap('fullcalendar.js', 2259, 73660,73932, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (allDay) {
        if ((_wrap_setLastFunctionCall("fullcalendar.js",2261,73747,73764,opt,false,false) || _wrap_popCallStack(opt('allDaySlot')))) {
(_wrap_setLastFunctionCall("fullcalendar.js",2262,73778,73843,renderDayOverlay,false,false) || _wrap_popCallStack(          renderDayOverlay(startDate, (_wrap_setLastFunctionCall("fullcalendar.js",2262,73806,73836,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",2262,73814,73832,cloneDate,false,false) || _wrap_popCallStack(cloneDate(endDate))), 1))), true)));
        }
      } else {
(_wrap_setLastFunctionCall("fullcalendar.js",2265,73878,73917,renderSlotSelection,false,false) || _wrap_popCallStack(        renderSlotSelection(startDate, endDate)));
      }
    }
    function renderSlotSelection(startDate, endDate) {
_wrap_addFunctionToMap('fullcalendar.js', 2268, 73937,75531, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var helperOption = (_wrap_setLastFunctionCall("fullcalendar.js",2269,74013,74032,opt,false,false) || _wrap_popCallStack(opt('selectHelper')));
(_wrap_setLastFunctionCall("fullcalendar.js",2270,74040,74062,coordinateGrid.build,false,false) || _wrap_popCallStack(      coordinateGrid.build()));
      if (helperOption) {
        var col = (_wrap_setLastFunctionCall("fullcalendar.js",2272,74108,74138,dayDiff,false,false) || _wrap_popCallStack(dayDiff(startDate, t.visStart))) * dis + dit;
        if (col >= 0 && col < colCnt) {
          var rect = (_wrap_setLastFunctionCall("fullcalendar.js",2274,74213,74261,coordinateGrid.rect,false,false) || _wrap_popCallStack(coordinateGrid.rect(0, col, 0, col, slotContent)));
          var top = (_wrap_setLastFunctionCall("fullcalendar.js",2275,74283,74317,timePosition,false,false) || _wrap_popCallStack(timePosition(startDate, startDate)));
          var bottom = (_wrap_setLastFunctionCall("fullcalendar.js",2276,74342,74374,timePosition,false,false) || _wrap_popCallStack(timePosition(startDate, endDate)));
          if (bottom > top) {
            rect.top = top;
            rect.height = bottom - top;
            rect.left += 2;
            rect.width -= 5;
            if ((_wrap_setLastFunctionCall("fullcalendar.js",2282,74547,74573,$.isFunction,false,false) || _wrap_popCallStack($.isFunction(helperOption)))) {
              var helperRes = (_wrap_setLastFunctionCall("fullcalendar.js",2283,74607,74639,helperOption,false,false) || _wrap_popCallStack(helperOption(startDate, endDate)));
              if (helperRes) {
                rect.position = 'absolute';
                rect.zIndex = 8;
                selectionHelper = (_wrap_setLastFunctionCall("fullcalendar.js",2287,74783,74827,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",2287,74783,74805,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",2287,74783,74795,$,false,false) || _wrap_popCallStack($(helperRes))).css(rect))).appendTo(slotContent)));
              }
            } else {
              rect.isStart = true;
              rect.isEnd = true;
              selectionHelper = (_wrap_setLastFunctionCall("fullcalendar.js",2292,74966,75081,$,false,false) || _wrap_popCallStack($((_wrap_setLastFunctionCall("fullcalendar.js",2292,74968,75080,slotSegHtml,false,false) || _wrap_popCallStack(slotSegHtml({title: '', start: startDate, end: endDate, className: ['fc-select-helper'], editable: false}, rect))))));
(_wrap_setLastFunctionCall("fullcalendar.js",2293,75097,75147,selectionHelper.css,false,false) || _wrap_popCallStack(              selectionHelper.css('opacity', (_wrap_setLastFunctionCall("fullcalendar.js",2293,75128,75146,opt,false,false) || _wrap_popCallStack(opt('dragOpacity'))))));
            }
            if (selectionHelper) {
(_wrap_setLastFunctionCall("fullcalendar.js",2296,75212,75237,slotBind,false,false) || _wrap_popCallStack(              slotBind(selectionHelper)));
(_wrap_setLastFunctionCall("fullcalendar.js",2297,75253,75288,slotContent.append,false,false) || _wrap_popCallStack(              slotContent.append(selectionHelper)));
(_wrap_setLastFunctionCall("fullcalendar.js",2298,75304,75352,setOuterWidth,false,false) || _wrap_popCallStack(              setOuterWidth(selectionHelper, rect.width, true)));
(_wrap_setLastFunctionCall("fullcalendar.js",2299,75368,75418,setOuterHeight,false,false) || _wrap_popCallStack(              setOuterHeight(selectionHelper, rect.height, true)));
            }
          }
        }
      } else {
(_wrap_setLastFunctionCall("fullcalendar.js",2304,75479,75516,renderSlotOverlay,false,false) || _wrap_popCallStack(        renderSlotOverlay(startDate, endDate)));
      }
    }
    function clearSelection() {
_wrap_addFunctionToMap('fullcalendar.js', 2307, 75536,75695, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2308,75570,75585,clearOverlays,false,false) || _wrap_popCallStack(      clearOverlays()));
      if (selectionHelper) {
(_wrap_setLastFunctionCall("fullcalendar.js",2310,75624,75648,selectionHelper.remove,false,false) || _wrap_popCallStack(        selectionHelper.remove()));
        selectionHelper = null;
      }
    }
    function slotSelectionMousedown(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 2314, 75700,76486, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (ev.which == 1 && (_wrap_setLastFunctionCall("fullcalendar.js",2315,75765,75782,opt,false,false) || _wrap_popCallStack(opt('selectable')))) {
(_wrap_setLastFunctionCall("fullcalendar.js",2316,75794,75806,unselect,false,false) || _wrap_popCallStack(        unselect(ev)));
        var dates;
(_wrap_setLastFunctionCall("fullcalendar.js",2318,75835,76239,hoverListener.start,false,false) || _wrap_popCallStack(        hoverListener.start(function(cell, origCell) {
_wrap_addFunctionToMap('fullcalendar.js', 2318, 75855,76234, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2319,75884,75900,clearSelection,false,false) || _wrap_popCallStack(  clearSelection()));
  if (cell && cell.col == origCell.col && !(_wrap_setLastFunctionCall("fullcalendar.js",2320,75945,75963,cellIsAllDay,false,false) || _wrap_popCallStack(cellIsAllDay(cell)))) {
    var d1 = (_wrap_setLastFunctionCall("fullcalendar.js",2321,75980,75998,cellDate,false,false) || _wrap_popCallStack(cellDate(origCell)));
    var d2 = (_wrap_setLastFunctionCall("fullcalendar.js",2322,76013,76027,cellDate,false,false) || _wrap_popCallStack(cellDate(cell)));
    dates = (_wrap_setLastFunctionCall("fullcalendar.js",2323,76041,76153,null,false,false) || _wrap_popCallStack([d1, (_wrap_setLastFunctionCall("fullcalendar.js",2323,76046,76091,addMinutes,false,false) || _wrap_popCallStack(addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2323,76057,76070,cloneDate,false,false) || _wrap_popCallStack(cloneDate(d1))), (_wrap_setLastFunctionCall("fullcalendar.js",2323,76072,76090,opt,false,false) || _wrap_popCallStack(opt('slotMinutes')))))), d2, (_wrap_setLastFunctionCall("fullcalendar.js",2323,76097,76142,addMinutes,false,false) || _wrap_popCallStack(addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2323,76108,76121,cloneDate,false,false) || _wrap_popCallStack(cloneDate(d2))), (_wrap_setLastFunctionCall("fullcalendar.js",2323,76123,76141,opt,false,false) || _wrap_popCallStack(opt('slotMinutes'))))))].sort(cmp)));
(_wrap_setLastFunctionCall("fullcalendar.js",2324,76159,76198,renderSlotSelection,false,false) || _wrap_popCallStack(    renderSlotSelection(dates[0], dates[3])));
  } else {
    dates = null;
  }
}, ev)));
(_wrap_setLastFunctionCall("fullcalendar.js",2329,76249,76471,null,false,false) || _wrap_popCallStack(        (_wrap_setLastFunctionCall("fullcalendar.js",2329,76249,76260,$,false,false) || _wrap_popCallStack($(document))).one('mouseup', function(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 2329, 76276,76470, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2330,76293,76313,hoverListener.stop,false,false) || _wrap_popCallStack(  hoverListener.stop()));
  if (dates) {
    if (+dates[0] == +dates[1]) {
(_wrap_setLastFunctionCall("fullcalendar.js",2333,76370,76405,reportDayClick,false,false) || _wrap_popCallStack(      reportDayClick(dates[0], false, ev)));
    }
(_wrap_setLastFunctionCall("fullcalendar.js",2335,76417,76463,reportSelection,false,false) || _wrap_popCallStack(    reportSelection(dates[0], dates[3], false, ev)));
  }
})));
      }
    }
    function reportDayClick(date, allDay, ev) {
_wrap_addFunctionToMap('fullcalendar.js', 2340, 76491,76628, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2341,76541,76621,trigger,false,false) || _wrap_popCallStack(      trigger('dayClick', dayBodyCells[(_wrap_setLastFunctionCall("fullcalendar.js",2341,76574,76601,dayOfWeekCol,false,false) || _wrap_popCallStack(dayOfWeekCol((_wrap_setLastFunctionCall("fullcalendar.js",2341,76587,76600,date.getDay,false,false) || _wrap_popCallStack(date.getDay())))))], date, allDay, ev)));
    }
    function dragStart(_dragElement, ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2343, 76633,77017, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2344,76682,77010,hoverListener.start,false,false) || _wrap_popCallStack(      hoverListener.start(function(cell) {
_wrap_addFunctionToMap('fullcalendar.js', 2344, 76702,77005, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2345,76721,76736,clearOverlays,false,false) || _wrap_popCallStack(  clearOverlays()));
  if (cell) {
    if ((_wrap_setLastFunctionCall("fullcalendar.js",2347,76760,76778,cellIsAllDay,false,false) || _wrap_popCallStack(cellIsAllDay(cell)))) {
(_wrap_setLastFunctionCall("fullcalendar.js",2348,76788,76845,renderCellOverlay,false,false) || _wrap_popCallStack(      renderCellOverlay(cell.row, cell.col, cell.row, cell.col)));
    } else {
      var d1 = (_wrap_setLastFunctionCall("fullcalendar.js",2350,76875,76889,cellDate,false,false) || _wrap_popCallStack(cellDate(cell)));
      var d2 = (_wrap_setLastFunctionCall("fullcalendar.js",2351,76906,76959,addMinutes,false,false) || _wrap_popCallStack(addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2351,76917,76930,cloneDate,false,false) || _wrap_popCallStack(cloneDate(d1))), (_wrap_setLastFunctionCall("fullcalendar.js",2351,76932,76958,opt,false,false) || _wrap_popCallStack(opt('defaultEventMinutes'))))));
(_wrap_setLastFunctionCall("fullcalendar.js",2352,76967,76992,renderSlotOverlay,false,false) || _wrap_popCallStack(      renderSlotOverlay(d1, d2)));
    }
  }
}, ev)));
    }
    function dragStop(_dragElement, ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2357, 77022,77240, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var cell = (_wrap_setLastFunctionCall("fullcalendar.js",2358,77081,77101,hoverListener.stop,false,false) || _wrap_popCallStack(hoverListener.stop()));
(_wrap_setLastFunctionCall("fullcalendar.js",2359,77109,77124,clearOverlays,false,false) || _wrap_popCallStack(      clearOverlays()));
      if (cell) {
(_wrap_setLastFunctionCall("fullcalendar.js",2361,77152,77225,trigger,false,false) || _wrap_popCallStack(        trigger('drop', _dragElement, (_wrap_setLastFunctionCall("fullcalendar.js",2361,77182,77196,cellDate,false,false) || _wrap_popCallStack(cellDate(cell))), (_wrap_setLastFunctionCall("fullcalendar.js",2361,77198,77216,cellIsAllDay,false,false) || _wrap_popCallStack(cellIsAllDay(cell))), ev, ui)));
      }
    }
  }
  function AgendaEventRenderer() {
_wrap_addFunctionToMap('fullcalendar.js', 2365, 77247,92903, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.renderEvents = renderEvents;
    t.compileDaySegs = compileDaySegs;
    t.clearEvents = clearEvents;
    t.slotSegHtml = slotSegHtml;
    t.bindDaySeg = bindDaySeg;
(_wrap_setLastFunctionCall("fullcalendar.js",2372,77473,77497,DayEventRenderer.call,false,true) || _wrap_popCallStack(    DayEventRenderer.call(t)));
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
_wrap_addFunctionToMap('fullcalendar.js', 2406, 78864,79384, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2407,78919,78939,reportEvents,false,false) || _wrap_popCallStack(      reportEvents(events)));
      var i, len = events.length, dayEvents = [], slotEvents = [];
      for (i = 0; i < len; i++) {
        if (events[i].allDay) {
(_wrap_setLastFunctionCall("fullcalendar.js",2411,79084,79109,dayEvents.push,false,false) || _wrap_popCallStack(          dayEvents.push(events[i])));
        } else {
(_wrap_setLastFunctionCall("fullcalendar.js",2413,79138,79164,slotEvents.push,false,false) || _wrap_popCallStack(          slotEvents.push(events[i])));
        }
      }
      if ((_wrap_setLastFunctionCall("fullcalendar.js",2416,79194,79211,opt,false,false) || _wrap_popCallStack(opt('allDaySlot')))) {
(_wrap_setLastFunctionCall("fullcalendar.js",2417,79223,79280,renderDaySegs,false,false) || _wrap_popCallStack(        renderDaySegs((_wrap_setLastFunctionCall("fullcalendar.js",2417,79237,79262,compileDaySegs,false,false) || _wrap_popCallStack(compileDaySegs(dayEvents))), modifiedEventId)));
(_wrap_setLastFunctionCall("fullcalendar.js",2418,79290,79301,setHeight,false,false) || _wrap_popCallStack(        setHeight()));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",2420,79317,79377,renderSlotSegs,false,false) || _wrap_popCallStack(      renderSlotSegs((_wrap_setLastFunctionCall("fullcalendar.js",2420,79332,79359,compileSlotSegs,false,false) || _wrap_popCallStack(compileSlotSegs(slotEvents))), modifiedEventId)));
    }
    function clearEvents() {
_wrap_addFunctionToMap('fullcalendar.js', 2422, 79389,79526, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2423,79420,79438,reportEventClear,false,false) || _wrap_popCallStack(      reportEventClear()));
(_wrap_setLastFunctionCall("fullcalendar.js",2424,79446,79478,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("fullcalendar.js",2424,79446,79470,getDaySegmentContainer,false,false) || _wrap_popCallStack(getDaySegmentContainer())).empty()));
(_wrap_setLastFunctionCall("fullcalendar.js",2425,79486,79519,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("fullcalendar.js",2425,79486,79511,getSlotSegmentContainer,false,false) || _wrap_popCallStack(getSlotSegmentContainer())).empty()));
    }
    function compileDaySegs(events) {
_wrap_addFunctionToMap('fullcalendar.js', 2427, 79531,79971, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var levels = (_wrap_setLastFunctionCall("fullcalendar.js",2428,79584,79661,stackSegs,false,false) || _wrap_popCallStack(stackSegs((_wrap_setLastFunctionCall("fullcalendar.js",2428,79594,79660,sliceSegs,false,false) || _wrap_popCallStack(sliceSegs(events, (_wrap_setLastFunctionCall("fullcalendar.js",2428,79612,79637,$.map,false,false) || _wrap_popCallStack($.map(events, exclEndDay))), t.visStart, t.visEnd)))))), i, levelCnt = levels.length, level, j, seg, segs = [];
      for (i = 0; i < levelCnt; i++) {
        level = levels[i];
        for (j = 0; j < level.length; j++) {
          seg = level[j];
          seg.row = 0;
          seg.level = i;
(_wrap_setLastFunctionCall("fullcalendar.js",2435,79913,79927,segs.push,false,false) || _wrap_popCallStack(          segs.push(seg)));
        }
      }
      return segs;
    }
    function compileSlotSegs(events) {
_wrap_addFunctionToMap('fullcalendar.js', 2440, 79976,80715, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var colCnt = (_wrap_setLastFunctionCall("fullcalendar.js",2441,80030,80041,getColCnt,false,false) || _wrap_popCallStack(getColCnt())), minMinute = (_wrap_setLastFunctionCall("fullcalendar.js",2441,80055,80069,getMinMinute,false,false) || _wrap_popCallStack(getMinMinute())), maxMinute = (_wrap_setLastFunctionCall("fullcalendar.js",2441,80083,80097,getMaxMinute,false,false) || _wrap_popCallStack(getMaxMinute())), d = (_wrap_setLastFunctionCall("fullcalendar.js",2441,80103,80147,addMinutes,false,false) || _wrap_popCallStack(addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2441,80114,80135,cloneDate,false,false) || _wrap_popCallStack(cloneDate(t.visStart))), minMinute))), visEventEnds = (_wrap_setLastFunctionCall("fullcalendar.js",2441,80164,80191,$.map,false,false) || _wrap_popCallStack($.map(events, slotEventEnd))), i, col, j, level, k, seg, segs = [];
      for (i = 0; i < colCnt; i++) {
        col = (_wrap_setLastFunctionCall("fullcalendar.js",2443,80281,80375,stackSegs,false,false) || _wrap_popCallStack(stackSegs((_wrap_setLastFunctionCall("fullcalendar.js",2443,80291,80374,sliceSegs,false,false) || _wrap_popCallStack(sliceSegs(events, visEventEnds, d, (_wrap_setLastFunctionCall("fullcalendar.js",2443,80326,80373,addMinutes,false,false) || _wrap_popCallStack(addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2443,80337,80349,cloneDate,false,false) || _wrap_popCallStack(cloneDate(d))), maxMinute - minMinute)))))))));
(_wrap_setLastFunctionCall("fullcalendar.js",2444,80385,80406,countForwardSegs,false,false) || _wrap_popCallStack(        countForwardSegs(col)));
        for (j = 0; j < col.length; j++) {
          level = col[j];
          for (k = 0; k < level.length; k++) {
            seg = level[k];
            seg.col = i;
            seg.level = j;
(_wrap_setLastFunctionCall("fullcalendar.js",2451,80616,80630,segs.push,false,false) || _wrap_popCallStack(            segs.push(seg)));
          }
        }
(_wrap_setLastFunctionCall("fullcalendar.js",2454,80662,80681,addDays,false,false) || _wrap_popCallStack(        addDays(d, 1, true)));
      }
      return segs;
    }
    function slotEventEnd(event) {
_wrap_addFunctionToMap('fullcalendar.js', 2458, 80720,80918, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (event.end) {
        return (_wrap_setLastFunctionCall("fullcalendar.js",2460,80789,80809,cloneDate,false,false) || _wrap_popCallStack(cloneDate(event.end)));
      } else {
        return (_wrap_setLastFunctionCall("fullcalendar.js",2462,80841,80903,addMinutes,false,false) || _wrap_popCallStack(addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2462,80852,80874,cloneDate,false,false) || _wrap_popCallStack(cloneDate(event.start))), (_wrap_setLastFunctionCall("fullcalendar.js",2462,80876,80902,opt,false,false) || _wrap_popCallStack(opt('defaultEventMinutes'))))));
      }
    }
    function renderSlotSegs(segs, modifiedEventId) {
_wrap_addFunctionToMap('fullcalendar.js', 2465, 80923,84716, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i, segCnt = segs.length, seg, event, classes, top, bottom, colI, levelI, forward, leftmost, availWidth, outerWidth, left, html = '', eventElements, eventElement, triggerRes, vsideCache = {}, hsideCache = {}, key, val, contentElement, height, slotSegmentContainer = (_wrap_setLastFunctionCall("fullcalendar.js",2466,81247,81272,getSlotSegmentContainer,false,false) || _wrap_popCallStack(getSlotSegmentContainer())), rtl, dis, dit, colCnt = (_wrap_setLastFunctionCall("fullcalendar.js",2466,81298,81309,getColCnt,false,false) || _wrap_popCallStack(getColCnt()));
      if (rtl = (_wrap_setLastFunctionCall("fullcalendar.js",2467,81327,81339,opt,false,false) || _wrap_popCallStack(opt('isRTL')))) {
        dis = -1;
        dit = colCnt - 1;
      } else {
        dis = 1;
        dit = 0;
      }
      for (i = 0; i < segCnt; i++) {
        seg = segs[i];
        event = seg.event;
        top = (_wrap_setLastFunctionCall("fullcalendar.js",2477,81545,81579,timePosition,false,false) || _wrap_popCallStack(timePosition(seg.start, seg.start)));
        bottom = (_wrap_setLastFunctionCall("fullcalendar.js",2478,81598,81630,timePosition,false,false) || _wrap_popCallStack(timePosition(seg.start, seg.end)));
        colI = seg.col;
        levelI = seg.level;
        forward = seg.forward || 0;
        leftmost = (_wrap_setLastFunctionCall("fullcalendar.js",2482,81739,81771,colContentLeft,false,false) || _wrap_popCallStack(colContentLeft(colI * dis + dit)));
        availWidth = (_wrap_setLastFunctionCall("fullcalendar.js",2483,81794,81827,colContentRight,false,false) || _wrap_popCallStack(colContentRight(colI * dis + dit))) - leftmost;
        availWidth = (_wrap_setLastFunctionCall("fullcalendar.js",2484,81861,81904,Math.min,false,false) || _wrap_popCallStack(Math.min(availWidth - 6, availWidth * 0.95)));
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
        html += (_wrap_setLastFunctionCall("fullcalendar.js",2499,82433,82456,slotSegHtml,false,false) || _wrap_popCallStack(slotSegHtml(event, seg)));
      }
      slotSegmentContainer[0].innerHTML = html;
      eventElements = (_wrap_setLastFunctionCall("fullcalendar.js",2502,82536,82567,slotSegmentContainer.children,false,false) || _wrap_popCallStack(slotSegmentContainer.children()));
      for (i = 0; i < segCnt; i++) {
        seg = segs[i];
        event = seg.event;
        eventElement = (_wrap_setLastFunctionCall("fullcalendar.js",2506,82679,82698,$,false,false) || _wrap_popCallStack($(eventElements[i])));
        triggerRes = (_wrap_setLastFunctionCall("fullcalendar.js",2507,82721,82771,trigger,false,false) || _wrap_popCallStack(trigger('eventRender', event, event, eventElement)));
        if (triggerRes === false) {
(_wrap_setLastFunctionCall("fullcalendar.js",2509,82819,82840,eventElement.remove,false,false) || _wrap_popCallStack(          eventElement.remove()));
        } else {
          if (triggerRes && triggerRes !== true) {
(_wrap_setLastFunctionCall("fullcalendar.js",2512,82922,82943,eventElement.remove,false,false) || _wrap_popCallStack(            eventElement.remove()));
            eventElement = (_wrap_setLastFunctionCall("fullcalendar.js",2513,82972,83074,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",2513,82972,83043,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",2513,82972,82985,$,false,false) || _wrap_popCallStack($(triggerRes))).css({position: 'absolute', top: seg.top, left: seg.left}))).appendTo(slotSegmentContainer)));
          }
          seg.element = eventElement;
          if (event._id === modifiedEventId) {
(_wrap_setLastFunctionCall("fullcalendar.js",2517,83185,83222,bindSlotSeg,false,false) || _wrap_popCallStack(            bindSlotSeg(event, eventElement, seg)));
          } else {
            eventElement[0]._fci = i;
          }
(_wrap_setLastFunctionCall("fullcalendar.js",2521,83303,83342,reportEventElement,false,false) || _wrap_popCallStack(          reportEventElement(event, eventElement)));
        }
      }
(_wrap_setLastFunctionCall("fullcalendar.js",2524,83368,83420,lazySegBind,false,false) || _wrap_popCallStack(      lazySegBind(slotSegmentContainer, segs, bindSlotSeg)));
      for (i = 0; i < segCnt; i++) {
        seg = segs[i];
        if (eventElement = seg.element) {
          val = vsideCache[key = seg.key = (_wrap_setLastFunctionCall("fullcalendar.js",2528,83567,83590,cssKey,false,false) || _wrap_popCallStack(cssKey(eventElement[0])))];
          seg.vsides = val === undefined ? vsideCache[key] = (_wrap_setLastFunctionCall("fullcalendar.js",2529,83654,83680,vsides,false,false) || _wrap_popCallStack(vsides(eventElement, true))) : val;
          val = hsideCache[key];
          seg.hsides = val === undefined ? hsideCache[key] = (_wrap_setLastFunctionCall("fullcalendar.js",2531,83782,83808,hsides,false,false) || _wrap_popCallStack(hsides(eventElement, true))) : val;
          contentElement = (_wrap_setLastFunctionCall("fullcalendar.js",2532,83843,83884,eventElement.find,false,false) || _wrap_popCallStack(eventElement.find('div.fc-event-content')));
          if (contentElement.length) {
            seg.contentTop = contentElement[0].offsetTop;
          }
        }
      }
      for (i = 0; i < segCnt; i++) {
        seg = segs[i];
        if (eventElement = seg.element) {
          eventElement[0].style.width = (_wrap_setLastFunctionCall("fullcalendar.js",2541,84155,84195,Math.max,false,false) || _wrap_popCallStack(Math.max(0, seg.outerWidth - seg.hsides))) + 'px';
          height = (_wrap_setLastFunctionCall("fullcalendar.js",2542,84223,84264,Math.max,false,false) || _wrap_popCallStack(Math.max(0, seg.outerHeight - seg.vsides)));
          eventElement[0].style.height = height + 'px';
          event = seg.event;
          if (seg.contentTop !== undefined && height - seg.contentTop < 10) {
(_wrap_setLastFunctionCall("fullcalendar.js",2546,84441,84550,null,false,false) || _wrap_popCallStack(            (_wrap_setLastFunctionCall("fullcalendar.js",2546,84441,84479,eventElement.find,false,false) || _wrap_popCallStack(eventElement.find('div.fc-event-time'))).text((_wrap_setLastFunctionCall("fullcalendar.js",2546,84485,84527,formatDate,false,false) || _wrap_popCallStack(formatDate(event.start, (_wrap_setLastFunctionCall("fullcalendar.js",2546,84509,84526,opt,false,false) || _wrap_popCallStack(opt('timeFormat')))))) + ' - ' + event.title)));
(_wrap_setLastFunctionCall("fullcalendar.js",2547,84564,84612,null,false,false) || _wrap_popCallStack(            (_wrap_setLastFunctionCall("fullcalendar.js",2547,84564,84603,eventElement.find,false,false) || _wrap_popCallStack(eventElement.find('div.fc-event-title'))).remove()));
          }
(_wrap_setLastFunctionCall("fullcalendar.js",2549,84636,84691,trigger,false,false) || _wrap_popCallStack(          trigger('eventAfterRender', event, event, eventElement)));
        }
      }
    }
    function slotSegHtml(event, seg) {
_wrap_addFunctionToMap('fullcalendar.js', 2553, 84721,86291, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var html = '<';
      var url = event.url;
      var skinCss = (_wrap_setLastFunctionCall("fullcalendar.js",2556,84825,84847,getSkinCss,false,false) || _wrap_popCallStack(getSkinCss(event, opt)));
      var skinCssAttr = skinCss ? ' style=\'' + skinCss + '\'' : '';
      var classes = ['fc-event', 'fc-event-skin', 'fc-event-vert'];
      if ((_wrap_setLastFunctionCall("fullcalendar.js",2559,84996,85019,isEventDraggable,false,false) || _wrap_popCallStack(isEventDraggable(event)))) {
(_wrap_setLastFunctionCall("fullcalendar.js",2560,85031,85065,classes.push,false,false) || _wrap_popCallStack(        classes.push('fc-event-draggable')));
      }
      if (seg.isStart) {
(_wrap_setLastFunctionCall("fullcalendar.js",2563,85108,85137,classes.push,false,false) || _wrap_popCallStack(        classes.push('fc-corner-top')));
      }
      if (seg.isEnd) {
(_wrap_setLastFunctionCall("fullcalendar.js",2566,85178,85210,classes.push,false,false) || _wrap_popCallStack(        classes.push('fc-corner-bottom')));
      }
      classes = (_wrap_setLastFunctionCall("fullcalendar.js",2568,85236,85267,classes.concat,false,false) || _wrap_popCallStack(classes.concat(event.className)));
      if (event.source) {
        classes = (_wrap_setLastFunctionCall("fullcalendar.js",2570,85313,85357,classes.concat,false,false) || _wrap_popCallStack(classes.concat(event.source.className || [])));
      }
      if (url) {
        html += 'a href=\'' + (_wrap_setLastFunctionCall("fullcalendar.js",2573,85414,85435,htmlEscape,false,false) || _wrap_popCallStack(htmlEscape(event.url))) + '\'';
      } else {
        html += 'div';
      }
      html += ' class=\'' + (_wrap_setLastFunctionCall("fullcalendar.js",2577,85518,85535,classes.join,false,false) || _wrap_popCallStack(classes.join(' '))) + '\'' + ' style=\'position:absolute;z-index:8;top:' + seg.top + 'px;left:' + seg.left + 'px;' + skinCss + '\'' + '>' + '<div class=\'fc-event-inner fc-event-skin\'' + skinCssAttr + '>' + '<div class=\'fc-event-head fc-event-skin\'' + skinCssAttr + '>' + '<div class=\'fc-event-time\'>' + (_wrap_setLastFunctionCall("fullcalendar.js",2577,85825,85891,htmlEscape,false,false) || _wrap_popCallStack(htmlEscape((_wrap_setLastFunctionCall("fullcalendar.js",2577,85836,85890,formatDates,false,false) || _wrap_popCallStack(formatDates(event.start, event.end, (_wrap_setLastFunctionCall("fullcalendar.js",2577,85872,85889,opt,false,false) || _wrap_popCallStack(opt('timeFormat'))))))))) + '</div>' + '</div>' + '<div class=\'fc-event-content\'>' + '<div class=\'fc-event-title\'>' + (_wrap_setLastFunctionCall("fullcalendar.js",2577,85988,86011,htmlEscape,false,false) || _wrap_popCallStack(htmlEscape(event.title))) + '</div>' + '</div>' + '<div class=\'fc-event-bg\'></div>' + '</div>';
      if (seg.isEnd && (_wrap_setLastFunctionCall("fullcalendar.js",2578,86107,86130,isEventResizable,false,false) || _wrap_popCallStack(isEventResizable(event)))) {
        html += '<div class=\'ui-resizable-handle ui-resizable-s\'>=</div>';
      }
      html += '</' + (url ? 'a' : 'div') + '>';
      return html;
    }
    function bindDaySeg(event, eventElement, seg) {
_wrap_addFunctionToMap('fullcalendar.js', 2584, 86296,86615, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if ((_wrap_setLastFunctionCall("fullcalendar.js",2585,86354,86377,isEventDraggable,false,false) || _wrap_popCallStack(isEventDraggable(event)))) {
(_wrap_setLastFunctionCall("fullcalendar.js",2586,86389,86440,draggableDayEvent,false,false) || _wrap_popCallStack(        draggableDayEvent(event, eventElement, seg.isStart)));
      }
      if (seg.isEnd && (_wrap_setLastFunctionCall("fullcalendar.js",2588,86473,86496,isEventResizable,false,false) || _wrap_popCallStack(isEventResizable(event)))) {
(_wrap_setLastFunctionCall("fullcalendar.js",2589,86508,86551,resizableDayEvent,false,false) || _wrap_popCallStack(        resizableDayEvent(event, eventElement, seg)));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",2591,86567,86608,eventElementHandlers,false,false) || _wrap_popCallStack(      eventElementHandlers(event, eventElement)));
    }
    function bindSlotSeg(event, eventElement, seg) {
_wrap_addFunctionToMap('fullcalendar.js', 2593, 86620,87014, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var timeElement = (_wrap_setLastFunctionCall("fullcalendar.js",2594,86693,86731,eventElement.find,false,false) || _wrap_popCallStack(eventElement.find('div.fc-event-time')));
      if ((_wrap_setLastFunctionCall("fullcalendar.js",2595,86743,86766,isEventDraggable,false,false) || _wrap_popCallStack(isEventDraggable(event)))) {
(_wrap_setLastFunctionCall("fullcalendar.js",2596,86778,86830,draggableSlotEvent,false,false) || _wrap_popCallStack(        draggableSlotEvent(event, eventElement, timeElement)));
      }
      if (seg.isEnd && (_wrap_setLastFunctionCall("fullcalendar.js",2598,86863,86886,isEventResizable,false,false) || _wrap_popCallStack(isEventResizable(event)))) {
(_wrap_setLastFunctionCall("fullcalendar.js",2599,86898,86950,resizableSlotEvent,false,false) || _wrap_popCallStack(        resizableSlotEvent(event, eventElement, timeElement)));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",2601,86966,87007,eventElementHandlers,false,false) || _wrap_popCallStack(      eventElementHandlers(event, eventElement)));
    }
    function draggableDayEvent(event, eventElement, isStart) {
_wrap_addFunctionToMap('fullcalendar.js', 2603, 87019,89292, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var origWidth;
      var revert;
      var allDay = true;
      var dayDelta;
      var dis = (_wrap_setLastFunctionCall("fullcalendar.js",2608,87178,87190,opt,false,false) || _wrap_popCallStack(opt('isRTL'))) ? -1 : 1;
      var hoverListener = (_wrap_setLastFunctionCall("fullcalendar.js",2609,87227,87245,getHoverListener,false,false) || _wrap_popCallStack(getHoverListener()));
      var colWidth = (_wrap_setLastFunctionCall("fullcalendar.js",2610,87268,87281,getColWidth,false,false) || _wrap_popCallStack(getColWidth()));
      var slotHeight = (_wrap_setLastFunctionCall("fullcalendar.js",2611,87306,87321,getSlotHeight,false,false) || _wrap_popCallStack(getSlotHeight()));
      var minMinute = (_wrap_setLastFunctionCall("fullcalendar.js",2612,87345,87359,getMinMinute,false,false) || _wrap_popCallStack(getMinMinute()));
(_wrap_setLastFunctionCall("fullcalendar.js",2613,87367,89101,eventElement.draggable,false,false) || _wrap_popCallStack(      eventElement.draggable({zIndex: 9, opacity: (_wrap_setLastFunctionCall("fullcalendar.js",2613,87411,87438,opt,false,false) || _wrap_popCallStack(opt('dragOpacity', 'month'))), revertDuration: (_wrap_setLastFunctionCall("fullcalendar.js",2613,87456,87481,opt,false,false) || _wrap_popCallStack(opt('dragRevertDuration'))), start: function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2613, 87490,88532, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2614,87511,87565,trigger,false,false) || _wrap_popCallStack(  trigger('eventDragStart', eventElement, event, ev, ui)));
(_wrap_setLastFunctionCall("fullcalendar.js",2615,87569,87600,hideEvents,false,false) || _wrap_popCallStack(  hideEvents(event, eventElement)));
  origWidth = (_wrap_setLastFunctionCall("fullcalendar.js",2616,87616,87636,eventElement.width,false,false) || _wrap_popCallStack(eventElement.width()));
(_wrap_setLastFunctionCall("fullcalendar.js",2617,87640,88529,hoverListener.start,false,false) || _wrap_popCallStack(  hoverListener.start(function(cell, origCell, rowDelta, colDelta) {
_wrap_addFunctionToMap('fullcalendar.js', 2617, 87660,88516, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2618,87709,87724,clearOverlays,false,false) || _wrap_popCallStack(  clearOverlays()));
  if (cell) {
    revert = false;
    dayDelta = colDelta * dis;
    if (!cell.row) {
(_wrap_setLastFunctionCall("fullcalendar.js",2623,87818,87915,renderDayOverlay,false,false) || _wrap_popCallStack(      renderDayOverlay((_wrap_setLastFunctionCall("fullcalendar.js",2623,87835,87876,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",2623,87843,87865,cloneDate,false,false) || _wrap_popCallStack(cloneDate(event.start))), dayDelta))), (_wrap_setLastFunctionCall("fullcalendar.js",2623,87878,87914,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",2623,87886,87903,exclEndDay,false,false) || _wrap_popCallStack(exclEndDay(event))), dayDelta))))));
(_wrap_setLastFunctionCall("fullcalendar.js",2624,87923,87937,resetElement,false,false) || _wrap_popCallStack(      resetElement()));
    } else {
      if (isStart) {
        if (allDay) {
(_wrap_setLastFunctionCall("fullcalendar.js",2628,88005,88038,eventElement.width,false,false) || _wrap_popCallStack(          eventElement.width(colWidth - 10)));
(_wrap_setLastFunctionCall("fullcalendar.js",2629,88050,88206,setOuterHeight,false,false) || _wrap_popCallStack(          setOuterHeight(eventElement, slotHeight * (_wrap_setLastFunctionCall("fullcalendar.js",2629,88092,88205,Math.round,false,false) || _wrap_popCallStack(Math.round((event.end ? (event.end - event.start) / MINUTE_MS : (_wrap_setLastFunctionCall("fullcalendar.js",2629,88156,88182,opt,false,false) || _wrap_popCallStack(opt('defaultEventMinutes')))) / (_wrap_setLastFunctionCall("fullcalendar.js",2629,88186,88204,opt,false,false) || _wrap_popCallStack(opt('slotMinutes')))))))));
(_wrap_setLastFunctionCall("fullcalendar.js",2630,88218,88273,eventElement.draggable,false,false) || _wrap_popCallStack(          eventElement.draggable('option', 'grid', [colWidth, 1])));
          allDay = false;
        }
      } else {
        revert = true;
      }
    }
    revert = revert || allDay && !dayDelta;
  } else {
(_wrap_setLastFunctionCall("fullcalendar.js",2639,88422,88436,resetElement,false,false) || _wrap_popCallStack(    resetElement()));
    revert = true;
  }
(_wrap_setLastFunctionCall("fullcalendar.js",2642,88463,88513,eventElement.draggable,false,false) || _wrap_popCallStack(  eventElement.draggable('option', 'revert', revert)));
}, ev, 'drag')));
}, stop: function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2644, 88540,89099, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2645,88561,88581,hoverListener.stop,false,false) || _wrap_popCallStack(  hoverListener.stop()));
(_wrap_setLastFunctionCall("fullcalendar.js",2646,88585,88600,clearOverlays,false,false) || _wrap_popCallStack(  clearOverlays()));
(_wrap_setLastFunctionCall("fullcalendar.js",2647,88604,88657,trigger,false,false) || _wrap_popCallStack(  trigger('eventDragStop', eventElement, event, ev, ui)));
  if (revert) {
(_wrap_setLastFunctionCall("fullcalendar.js",2649,88679,88693,resetElement,false,false) || _wrap_popCallStack(    resetElement()));
(_wrap_setLastFunctionCall("fullcalendar.js",2650,88699,88729,eventElement.css,false,false) || _wrap_popCallStack(    eventElement.css('filter', '')));
(_wrap_setLastFunctionCall("fullcalendar.js",2651,88735,88766,showEvents,false,false) || _wrap_popCallStack(    showEvents(event, eventElement)));
  } else {
    var minuteDelta = 0;
    if (!allDay) {
      minuteDelta = (_wrap_setLastFunctionCall("fullcalendar.js",2655,88843,88927,Math.round,false,false) || _wrap_popCallStack(Math.round(((_wrap_setLastFunctionCall("fullcalendar.js",2655,88855,88876,eventElement.offset,false,false) || _wrap_popCallStack(eventElement.offset())).top - (_wrap_setLastFunctionCall("fullcalendar.js",2655,88883,88908,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",2655,88883,88899,getBodyContent,false,false) || _wrap_popCallStack(getBodyContent())).offset())).top) / slotHeight))) * (_wrap_setLastFunctionCall("fullcalendar.js",2655,88930,88948,opt,false,false) || _wrap_popCallStack(opt('slotMinutes'))) + minMinute - ((_wrap_setLastFunctionCall("fullcalendar.js",2655,88964,88986,event.start.getHours,false,false) || _wrap_popCallStack(event.start.getHours())) * 60 + (_wrap_setLastFunctionCall("fullcalendar.js",2655,88994,89018,event.start.getMinutes,false,false) || _wrap_popCallStack(event.start.getMinutes())));
    }
(_wrap_setLastFunctionCall("fullcalendar.js",2657,89031,89092,eventDrop,false,false) || _wrap_popCallStack(    eventDrop(this, event, dayDelta, minuteDelta, allDay, ev, ui)));
  }
}})));
      function resetElement() {
_wrap_addFunctionToMap('fullcalendar.js', 2660, 89109,89286, (typeof arguments === 'object' ? arguments.callee.caller : null));

        if (!allDay) {
(_wrap_setLastFunctionCall("fullcalendar.js",2662,89168,89242,null,false,false) || _wrap_popCallStack(          (_wrap_setLastFunctionCall("fullcalendar.js",2662,89168,89208,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",2662,89168,89197,eventElement.width,false,false) || _wrap_popCallStack(eventElement.width(origWidth))).height(''))).draggable('option', 'grid', null)));
          allDay = true;
        }
      }
    }
    function draggableSlotEvent(event, eventElement, timeElement) {
_wrap_addFunctionToMap('fullcalendar.js', 2667, 89297,91847, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var origPosition;
      var allDay = false;
      var dayDelta;
      var minuteDelta;
      var prevMinuteDelta;
      var dis = (_wrap_setLastFunctionCall("fullcalendar.js",2673,89497,89509,opt,false,false) || _wrap_popCallStack(opt('isRTL'))) ? -1 : 1;
      var hoverListener = (_wrap_setLastFunctionCall("fullcalendar.js",2674,89546,89564,getHoverListener,false,false) || _wrap_popCallStack(getHoverListener()));
      var colCnt = (_wrap_setLastFunctionCall("fullcalendar.js",2675,89585,89596,getColCnt,false,false) || _wrap_popCallStack(getColCnt()));
      var colWidth = (_wrap_setLastFunctionCall("fullcalendar.js",2676,89619,89632,getColWidth,false,false) || _wrap_popCallStack(getColWidth()));
      var slotHeight = (_wrap_setLastFunctionCall("fullcalendar.js",2677,89657,89672,getSlotHeight,false,false) || _wrap_popCallStack(getSlotHeight()));
(_wrap_setLastFunctionCall("fullcalendar.js",2678,89680,91302,eventElement.draggable,false,false) || _wrap_popCallStack(      eventElement.draggable({zIndex: 9, scroll: false, grid: [colWidth, slotHeight], axis: colCnt == 1 ? 'y' : false, opacity: (_wrap_setLastFunctionCall("fullcalendar.js",2678,89802,89820,opt,false,false) || _wrap_popCallStack(opt('dragOpacity'))), revertDuration: (_wrap_setLastFunctionCall("fullcalendar.js",2678,89838,89863,opt,false,false) || _wrap_popCallStack(opt('dragRevertDuration'))), start: function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2678, 89872,90594, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2679,89893,89947,trigger,false,false) || _wrap_popCallStack(  trigger('eventDragStart', eventElement, event, ev, ui)));
(_wrap_setLastFunctionCall("fullcalendar.js",2680,89951,89982,hideEvents,false,false) || _wrap_popCallStack(  hideEvents(event, eventElement)));
  origPosition = (_wrap_setLastFunctionCall("fullcalendar.js",2681,90001,90024,eventElement.position,false,false) || _wrap_popCallStack(eventElement.position()));
  minuteDelta = prevMinuteDelta = 0;
(_wrap_setLastFunctionCall("fullcalendar.js",2683,90065,90591,hoverListener.start,false,false) || _wrap_popCallStack(  hoverListener.start(function(cell, origCell, rowDelta, colDelta) {
_wrap_addFunctionToMap('fullcalendar.js', 2683, 90085,90578, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2684,90134,90183,eventElement.draggable,false,false) || _wrap_popCallStack(  eventElement.draggable('option', 'revert', !cell)));
(_wrap_setLastFunctionCall("fullcalendar.js",2685,90187,90202,clearOverlays,false,false) || _wrap_popCallStack(  clearOverlays()));
  if (cell) {
    dayDelta = colDelta * dis;
    if ((_wrap_setLastFunctionCall("fullcalendar.js",2688,90257,90274,opt,false,false) || _wrap_popCallStack(opt('allDaySlot'))) && !cell.row) {
      if (!allDay) {
        allDay = true;
(_wrap_setLastFunctionCall("fullcalendar.js",2691,90343,90361,timeElement.hide,false,false) || _wrap_popCallStack(        timeElement.hide()));
(_wrap_setLastFunctionCall("fullcalendar.js",2692,90371,90417,eventElement.draggable,false,false) || _wrap_popCallStack(        eventElement.draggable('option', 'grid', null)));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",2694,90433,90530,renderDayOverlay,false,false) || _wrap_popCallStack(      renderDayOverlay((_wrap_setLastFunctionCall("fullcalendar.js",2694,90450,90491,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",2694,90458,90480,cloneDate,false,false) || _wrap_popCallStack(cloneDate(event.start))), dayDelta))), (_wrap_setLastFunctionCall("fullcalendar.js",2694,90493,90529,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",2694,90501,90518,exclEndDay,false,false) || _wrap_popCallStack(exclEndDay(event))), dayDelta))))));
    } else {
(_wrap_setLastFunctionCall("fullcalendar.js",2696,90551,90565,resetElement,false,false) || _wrap_popCallStack(      resetElement()));
    }
  }
}, ev, 'drag')));
}, drag: function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2700, 90602,90861, (typeof arguments === 'object' ? arguments.callee.caller : null));

  minuteDelta = (_wrap_setLastFunctionCall("fullcalendar.js",2701,90637,90698,Math.round,false,false) || _wrap_popCallStack(Math.round((ui.position.top - origPosition.top) / slotHeight))) * (_wrap_setLastFunctionCall("fullcalendar.js",2701,90701,90719,opt,false,false) || _wrap_popCallStack(opt('slotMinutes')));
  if (minuteDelta != prevMinuteDelta) {
    if (!allDay) {
(_wrap_setLastFunctionCall("fullcalendar.js",2704,90786,90813,updateTimeText,false,false) || _wrap_popCallStack(      updateTimeText(minuteDelta)));
    }
    prevMinuteDelta = minuteDelta;
  }
}, stop: function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2708, 90869,91300, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var cell = (_wrap_setLastFunctionCall("fullcalendar.js",2709,90901,90921,hoverListener.stop,false,false) || _wrap_popCallStack(hoverListener.stop()));
(_wrap_setLastFunctionCall("fullcalendar.js",2710,90925,90940,clearOverlays,false,false) || _wrap_popCallStack(  clearOverlays()));
(_wrap_setLastFunctionCall("fullcalendar.js",2711,90944,90997,trigger,false,false) || _wrap_popCallStack(  trigger('eventDragStop', eventElement, event, ev, ui)));
  if (cell && (dayDelta || minuteDelta || allDay)) {
(_wrap_setLastFunctionCall("fullcalendar.js",2713,91056,91130,eventDrop,false,false) || _wrap_popCallStack(    eventDrop(this, event, dayDelta, allDay ? 0 : minuteDelta, allDay, ev, ui)));
  } else {
(_wrap_setLastFunctionCall("fullcalendar.js",2715,91147,91161,resetElement,false,false) || _wrap_popCallStack(    resetElement()));
(_wrap_setLastFunctionCall("fullcalendar.js",2716,91167,91197,eventElement.css,false,false) || _wrap_popCallStack(    eventElement.css('filter', '')));
(_wrap_setLastFunctionCall("fullcalendar.js",2717,91203,91233,eventElement.css,false,false) || _wrap_popCallStack(    eventElement.css(origPosition)));
(_wrap_setLastFunctionCall("fullcalendar.js",2718,91239,91256,updateTimeText,false,false) || _wrap_popCallStack(    updateTimeText(0)));
(_wrap_setLastFunctionCall("fullcalendar.js",2719,91262,91293,showEvents,false,false) || _wrap_popCallStack(    showEvents(event, eventElement)));
  }
}})));
      function updateTimeText(minuteDelta) {
_wrap_addFunctionToMap('fullcalendar.js', 2722, 91310,91625, (typeof arguments === 'object' ? arguments.callee.caller : null));

        var newStart = (_wrap_setLastFunctionCall("fullcalendar.js",2723,91372,91419,addMinutes,false,false) || _wrap_popCallStack(addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2723,91383,91405,cloneDate,false,false) || _wrap_popCallStack(cloneDate(event.start))), minuteDelta)));
        var newEnd;
        if (event.end) {
          newEnd = (_wrap_setLastFunctionCall("fullcalendar.js",2726,91485,91530,addMinutes,false,false) || _wrap_popCallStack(addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2726,91496,91516,cloneDate,false,false) || _wrap_popCallStack(cloneDate(event.end))), minuteDelta)));
        }
(_wrap_setLastFunctionCall("fullcalendar.js",2728,91550,91616,timeElement.text,false,false) || _wrap_popCallStack(        timeElement.text((_wrap_setLastFunctionCall("fullcalendar.js",2728,91567,91615,formatDates,false,false) || _wrap_popCallStack(formatDates(newStart, newEnd, (_wrap_setLastFunctionCall("fullcalendar.js",2728,91597,91614,opt,false,false) || _wrap_popCallStack(opt('timeFormat')))))))));
      }
      function resetElement() {
_wrap_addFunctionToMap('fullcalendar.js', 2730, 91632,91841, (typeof arguments === 'object' ? arguments.callee.caller : null));

        if (allDay) {
(_wrap_setLastFunctionCall("fullcalendar.js",2732,91690,91720,timeElement.css,false,false) || _wrap_popCallStack(          timeElement.css('display', '')));
(_wrap_setLastFunctionCall("fullcalendar.js",2733,91732,91796,eventElement.draggable,false,false) || _wrap_popCallStack(          eventElement.draggable('option', 'grid', [colWidth, slotHeight])));
          allDay = false;
        }
      }
    }
    function resizableSlotEvent(event, eventElement, timeElement) {
_wrap_addFunctionToMap('fullcalendar.js', 2738, 91852,92899, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var slotDelta, prevSlotDelta;
      var slotHeight = (_wrap_setLastFunctionCall("fullcalendar.js",2740,91975,91990,getSlotHeight,false,false) || _wrap_popCallStack(getSlotHeight()));
(_wrap_setLastFunctionCall("fullcalendar.js",2741,91998,92892,eventElement.resizable,false,false) || _wrap_popCallStack(      eventElement.resizable({handles: {s: 'div.ui-resizable-s'}, grid: slotHeight, start: function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2741, 92083,92257, (typeof arguments === 'object' ? arguments.callee.caller : null));

  slotDelta = prevSlotDelta = 0;
(_wrap_setLastFunctionCall("fullcalendar.js",2743,92137,92168,hideEvents,false,false) || _wrap_popCallStack(  hideEvents(event, eventElement)));
(_wrap_setLastFunctionCall("fullcalendar.js",2744,92172,92202,eventElement.css,false,false) || _wrap_popCallStack(  eventElement.css('z-index', 9)));
(_wrap_setLastFunctionCall("fullcalendar.js",2745,92206,92254,trigger,false,false) || _wrap_popCallStack(  trigger('eventResizeStart', this, event, ev, ui)));
}, resize: function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2746, 92267,92631, (typeof arguments === 'object' ? arguments.callee.caller : null));

  slotDelta = (_wrap_setLastFunctionCall("fullcalendar.js",2747,92300,92395,Math.round,false,false) || _wrap_popCallStack(Math.round(((_wrap_setLastFunctionCall("fullcalendar.js",2747,92312,92355,Math.max,false,false) || _wrap_popCallStack(Math.max(slotHeight, (_wrap_setLastFunctionCall("fullcalendar.js",2747,92333,92354,eventElement.height,false,false) || _wrap_popCallStack(eventElement.height()))))) - ui.originalSize.height) / slotHeight)));
  if (slotDelta != prevSlotDelta) {
(_wrap_setLastFunctionCall("fullcalendar.js",2749,92437,92593,timeElement.text,false,false) || _wrap_popCallStack(    timeElement.text((_wrap_setLastFunctionCall("fullcalendar.js",2749,92454,92592,formatDates,false,false) || _wrap_popCallStack(formatDates(event.start, !slotDelta && !event.end ? null : (_wrap_setLastFunctionCall("fullcalendar.js",2749,92513,92572,addMinutes,false,false) || _wrap_popCallStack(addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2749,92524,92539,eventEnd,false,false) || _wrap_popCallStack(eventEnd(event))), (_wrap_setLastFunctionCall("fullcalendar.js",2749,92541,92559,opt,false,false) || _wrap_popCallStack(opt('slotMinutes'))) * slotDelta))), (_wrap_setLastFunctionCall("fullcalendar.js",2749,92574,92591,opt,false,false) || _wrap_popCallStack(opt('timeFormat')))))))));
    prevSlotDelta = slotDelta;
  }
}, stop: function(ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2752, 92639,92890, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2753,92660,92707,trigger,false,false) || _wrap_popCallStack(  trigger('eventResizeStop', this, event, ev, ui)));
  if (slotDelta) {
(_wrap_setLastFunctionCall("fullcalendar.js",2755,92732,92799,eventResize,false,false) || _wrap_popCallStack(    eventResize(this, event, 0, (_wrap_setLastFunctionCall("fullcalendar.js",2755,92760,92778,opt,false,false) || _wrap_popCallStack(opt('slotMinutes'))) * slotDelta, ev, ui)));
  } else {
(_wrap_setLastFunctionCall("fullcalendar.js",2757,92816,92846,eventElement.css,false,false) || _wrap_popCallStack(    eventElement.css('z-index', 8)));
(_wrap_setLastFunctionCall("fullcalendar.js",2758,92852,92883,showEvents,false,false) || _wrap_popCallStack(    showEvents(event, eventElement)));
  }
}})));
    }
  }
  function countForwardSegs(levels) {
_wrap_addFunctionToMap('fullcalendar.js', 2763, 92906,93405, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var i, j, k, level, segForward, segBack;
    for (i = levels.length - 1; i > 0; i--) {
      level = levels[i];
      for (j = 0; j < level.length; j++) {
        segForward = level[j];
        for (k = 0; k < levels[i - 1].length; k++) {
          segBack = levels[i - 1][k];
          if ((_wrap_setLastFunctionCall("fullcalendar.js",2771,93237,93269,segsCollide,false,false) || _wrap_popCallStack(segsCollide(segForward, segBack)))) {
            segBack.forward = (_wrap_setLastFunctionCall("fullcalendar.js",2772,93303,93364,Math.max,false,false) || _wrap_popCallStack(Math.max(segBack.forward || 0, (segForward.forward || 0) + 1)));
          }
        }
      }
    }
  }
  function View(element, calendar, viewName) {
_wrap_addFunctionToMap('fullcalendar.js', 2778, 93408,98336, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
_wrap_addFunctionToMap('fullcalendar.js', 2803, 94277,94471, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var v = options[name];
      if (typeof v == 'object') {
        return (_wrap_setLastFunctionCall("fullcalendar.js",2806,94394,94440,smartProperty,false,false) || _wrap_popCallStack(smartProperty(v, viewNameOverride || viewName)));
      }
      return v;
    }
    function trigger(name, thisObj) {
_wrap_addFunctionToMap('fullcalendar.js', 2810, 94476,94638, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",2811,94523,94631,calendar.trigger.apply,false,true) || _wrap_popCallStack(calendar.trigger.apply(calendar, (_wrap_setLastFunctionCall("fullcalendar.js",2811,94556,94630,[name, thisObj || t].concat,false,false) || _wrap_popCallStack([name, thisObj || t].concat((_wrap_setLastFunctionCall("fullcalendar.js",2811,94584,94624,Array.prototype.slice.call,false,true) || _wrap_popCallStack(Array.prototype.slice.call(arguments, 2))), [t]))))));
    }
    function isEventDraggable(event) {
_wrap_addFunctionToMap('fullcalendar.js', 2813, 94643,94747, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",2814,94691,94713,isEventEditable,false,false) || _wrap_popCallStack(isEventEditable(event))) && !(_wrap_setLastFunctionCall("fullcalendar.js",2814,94718,94740,opt,false,false) || _wrap_popCallStack(opt('disableDragging')));
    }
    function isEventResizable(event) {
_wrap_addFunctionToMap('fullcalendar.js', 2816, 94752,94856, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",2817,94800,94822,isEventEditable,false,false) || _wrap_popCallStack(isEventEditable(event))) && !(_wrap_setLastFunctionCall("fullcalendar.js",2817,94827,94849,opt,false,false) || _wrap_popCallStack(opt('disableResizing')));
    }
    function isEventEditable(event) {
_wrap_addFunctionToMap('fullcalendar.js', 2819, 94861,94991, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return (_wrap_setLastFunctionCall("fullcalendar.js",2820,94908,94984,firstDefined,false,false) || _wrap_popCallStack(firstDefined(event.editable, (event.source || {}).editable, (_wrap_setLastFunctionCall("fullcalendar.js",2820,94968,94983,opt,false,false) || _wrap_popCallStack(opt('editable'))))));
    }
    function reportEvents(events) {
_wrap_addFunctionToMap('fullcalendar.js', 2822, 94996,95318, (typeof arguments === 'object' ? arguments.callee.caller : null));

      eventsByID = {};
      var i, len = events.length, event;
      for (i = 0; i < len; i++) {
        event = events[i];
        if (eventsByID[event._id]) {
(_wrap_setLastFunctionCall("fullcalendar.js",2828,95200,95233,eventsByID[event._id].push,false,false) || _wrap_popCallStack(          eventsByID[event._id].push(event)));
        } else {
          eventsByID[event._id] = [event];
        }
      }
    }
    function eventEnd(event) {
_wrap_addFunctionToMap('fullcalendar.js', 2834, 95323,95427, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return event.end ? (_wrap_setLastFunctionCall("fullcalendar.js",2835,95375,95395,cloneDate,false,false) || _wrap_popCallStack(cloneDate(event.end))) : (_wrap_setLastFunctionCall("fullcalendar.js",2835,95398,95420,defaultEventEnd,false,false) || _wrap_popCallStack(defaultEventEnd(event)));
    }
    function reportEventElement(event, element) {
_wrap_addFunctionToMap('fullcalendar.js', 2837, 95432,95685, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2838,95484,95511,eventElements.push,false,false) || _wrap_popCallStack(      eventElements.push(element)));
      if (eventElementsByID[event._id]) {
(_wrap_setLastFunctionCall("fullcalendar.js",2840,95563,95605,eventElementsByID[event._id].push,false,false) || _wrap_popCallStack(        eventElementsByID[event._id].push(element)));
      } else {
        eventElementsByID[event._id] = [element];
      }
    }
    function reportEventClear() {
_wrap_addFunctionToMap('fullcalendar.js', 2845, 95690,95781, (typeof arguments === 'object' ? arguments.callee.caller : null));

      eventElements = [];
      eventElementsByID = {};
    }
    function eventElementHandlers(event, eventElement) {
_wrap_addFunctionToMap('fullcalendar.js', 2849, 95786,96184, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2854,95845,96177,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("fullcalendar.js",2850,95845,96044,eventElement.click,false,false) || _wrap_popCallStack(eventElement.click(function(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 2850, 95864,96043, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!(_wrap_setLastFunctionCall("fullcalendar.js",2851,95886,95932,eventElement.hasClass,false,false) || _wrap_popCallStack(eventElement.hasClass('ui-draggable-dragging'))) && !(_wrap_setLastFunctionCall("fullcalendar.js",2851,95937,95983,eventElement.hasClass,false,false) || _wrap_popCallStack(eventElement.hasClass('ui-resizable-resizing')))) {
    return (_wrap_setLastFunctionCall("fullcalendar.js",2852,95998,96036,trigger,false,false) || _wrap_popCallStack(trigger('eventClick', this, event, ev)));
  }
}))).hover(function(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 2854, 96051,96113, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2855,96068,96110,trigger,false,false) || _wrap_popCallStack(  trigger('eventMouseover', this, event, ev)));
}, function(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 2856, 96115,96176, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2857,96132,96173,trigger,false,false) || _wrap_popCallStack(  trigger('eventMouseout', this, event, ev)));
})));
    }
    function showEvents(event, exceptElement) {
_wrap_addFunctionToMap('fullcalendar.js', 2860, 96189,96292, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2861,96239,96285,eachEventElement,false,false) || _wrap_popCallStack(      eachEventElement(event, exceptElement, 'show')));
    }
    function hideEvents(event, exceptElement) {
_wrap_addFunctionToMap('fullcalendar.js', 2863, 96297,96400, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2864,96347,96393,eachEventElement,false,false) || _wrap_popCallStack(      eachEventElement(event, exceptElement, 'hide')));
    }
    function eachEventElement(event, exceptElement, funcName) {
_wrap_addFunctionToMap('fullcalendar.js', 2866, 96405,96702, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var elements = eventElementsByID[event._id], i, len = elements.length;
      for (i = 0; i < len; i++) {
        if (!exceptElement || elements[i][0] != exceptElement[0]) {
(_wrap_setLastFunctionCall("fullcalendar.js",2870,96654,96677,null,false,false) || _wrap_popCallStack(          elements[i][funcName]()));
        }
      }
    }
    function eventDrop(e, event, dayDelta, minuteDelta, allDay, ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2874, 96707,97147, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var oldAllDay = event.allDay;
      var eventId = event._id;
(_wrap_setLastFunctionCall("fullcalendar.js",2877,96850,96912,moveEvents,false,false) || _wrap_popCallStack(      moveEvents(eventsByID[eventId], dayDelta, minuteDelta, allDay)));
(_wrap_setLastFunctionCall("fullcalendar.js",2878,96920,97106,trigger,false,false) || _wrap_popCallStack(      trigger('eventDrop', e, event, dayDelta, minuteDelta, allDay, function() {
_wrap_addFunctionToMap('fullcalendar.js', 2878, 96982,97097, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2879,96997,97064,moveEvents,false,false) || _wrap_popCallStack(  moveEvents(eventsByID[eventId], -dayDelta, -minuteDelta, oldAllDay)));
(_wrap_setLastFunctionCall("fullcalendar.js",2880,97068,97094,reportEventChange,false,false) || _wrap_popCallStack(  reportEventChange(eventId)));
}, ev, ui)));
(_wrap_setLastFunctionCall("fullcalendar.js",2882,97114,97140,reportEventChange,false,false) || _wrap_popCallStack(      reportEventChange(eventId)));
    }
    function eventResize(e, event, dayDelta, minuteDelta, ev, ui) {
_wrap_addFunctionToMap('fullcalendar.js', 2884, 97152,97533, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var eventId = event._id;
(_wrap_setLastFunctionCall("fullcalendar.js",2886,97253,97311,elongateEvents,false,false) || _wrap_popCallStack(      elongateEvents(eventsByID[eventId], dayDelta, minuteDelta)));
(_wrap_setLastFunctionCall("fullcalendar.js",2887,97319,97492,trigger,false,false) || _wrap_popCallStack(      trigger('eventResize', e, event, dayDelta, minuteDelta, function() {
_wrap_addFunctionToMap('fullcalendar.js', 2887, 97375,97483, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",2888,97390,97450,elongateEvents,false,false) || _wrap_popCallStack(  elongateEvents(eventsByID[eventId], -dayDelta, -minuteDelta)));
(_wrap_setLastFunctionCall("fullcalendar.js",2889,97454,97480,reportEventChange,false,false) || _wrap_popCallStack(  reportEventChange(eventId)));
}, ev, ui)));
(_wrap_setLastFunctionCall("fullcalendar.js",2891,97500,97526,reportEventChange,false,false) || _wrap_popCallStack(      reportEventChange(eventId)));
    }
    function moveEvents(events, dayDelta, minuteDelta, allDay) {
_wrap_addFunctionToMap('fullcalendar.js', 2893, 97538,98019, (typeof arguments === 'object' ? arguments.callee.caller : null));

      minuteDelta = minuteDelta || 0;
      for (var e, len = events.length, i = 0; i < len; i++) {
        e = events[i];
        if (allDay !== undefined) {
          e.allDay = allDay;
        }
(_wrap_setLastFunctionCall("fullcalendar.js",2900,97805,97862,addMinutes,false,false) || _wrap_popCallStack(        addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2900,97816,97848,addDays,false,false) || _wrap_popCallStack(addDays(e.start, dayDelta, true))), minuteDelta)));
        if (e.end) {
          e.end = (_wrap_setLastFunctionCall("fullcalendar.js",2902,97903,97958,addMinutes,false,false) || _wrap_popCallStack(addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2902,97914,97944,addDays,false,false) || _wrap_popCallStack(addDays(e.end, dayDelta, true))), minuteDelta)));
        }
(_wrap_setLastFunctionCall("fullcalendar.js",2904,97978,98004,normalizeEvent,false,false) || _wrap_popCallStack(        normalizeEvent(e, options)));
      }
    }
    function elongateEvents(events, dayDelta, minuteDelta) {
_wrap_addFunctionToMap('fullcalendar.js', 2907, 98024,98332, (typeof arguments === 'object' ? arguments.callee.caller : null));

      minuteDelta = minuteDelta || 0;
      for (var e, len = events.length, i = 0; i < len; i++) {
        e = events[i];
        e.end = (_wrap_setLastFunctionCall("fullcalendar.js",2911,98220,98281,addMinutes,false,false) || _wrap_popCallStack(addMinutes((_wrap_setLastFunctionCall("fullcalendar.js",2911,98231,98267,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",2911,98239,98250,eventEnd,false,false) || _wrap_popCallStack(eventEnd(e))), dayDelta, true))), minuteDelta)));
(_wrap_setLastFunctionCall("fullcalendar.js",2912,98291,98317,normalizeEvent,false,false) || _wrap_popCallStack(        normalizeEvent(e, options)));
      }
    }
  }
  function DayEventRenderer() {
_wrap_addFunctionToMap('fullcalendar.js', 2916, 98339,110548, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
_wrap_addFunctionToMap('fullcalendar.js', 2945, 99453,100732, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var segmentContainer = (_wrap_setLastFunctionCall("fullcalendar.js",2946,99530,99554,getDaySegmentContainer,false,false) || _wrap_popCallStack(getDaySegmentContainer()));
      var rowDivs;
      var rowCnt = (_wrap_setLastFunctionCall("fullcalendar.js",2948,99594,99605,getRowCnt,false,false) || _wrap_popCallStack(getRowCnt()));
      var colCnt = (_wrap_setLastFunctionCall("fullcalendar.js",2949,99626,99637,getColCnt,false,false) || _wrap_popCallStack(getColCnt()));
      var i = 0;
      var rowI;
      var levelI;
      var colHeights;
      var j;
      var segCnt = segs.length;
      var seg;
      var top;
      var k;
      segmentContainer[0].innerHTML = (_wrap_setLastFunctionCall("fullcalendar.js",2959,99838,99854,daySegHTML,false,false) || _wrap_popCallStack(daySegHTML(segs)));
(_wrap_setLastFunctionCall("fullcalendar.js",2960,99862,99917,daySegElementResolve,false,false) || _wrap_popCallStack(      daySegElementResolve(segs, (_wrap_setLastFunctionCall("fullcalendar.js",2960,99889,99916,segmentContainer.children,false,false) || _wrap_popCallStack(segmentContainer.children())))));
(_wrap_setLastFunctionCall("fullcalendar.js",2961,99925,99950,daySegElementReport,false,false) || _wrap_popCallStack(      daySegElementReport(segs)));
(_wrap_setLastFunctionCall("fullcalendar.js",2962,99958,100013,daySegHandlers,false,false) || _wrap_popCallStack(      daySegHandlers(segs, segmentContainer, modifiedEventId)));
(_wrap_setLastFunctionCall("fullcalendar.js",2963,100021,100043,daySegCalcHSides,false,false) || _wrap_popCallStack(      daySegCalcHSides(segs)));
(_wrap_setLastFunctionCall("fullcalendar.js",2964,100051,100072,daySegSetWidths,false,false) || _wrap_popCallStack(      daySegSetWidths(segs)));
(_wrap_setLastFunctionCall("fullcalendar.js",2965,100080,100103,daySegCalcHeights,false,false) || _wrap_popCallStack(      daySegCalcHeights(segs)));
      rowDivs = (_wrap_setLastFunctionCall("fullcalendar.js",2966,100121,100133,getRowDivs,false,false) || _wrap_popCallStack(getRowDivs()));
      for (rowI = 0; rowI < rowCnt; rowI++) {
        levelI = 0;
        colHeights = [];
        for (j = 0; j < colCnt; j++) {
          colHeights[j] = 0;
        }
        while (i < segCnt && (seg = segs[i]).row == rowI) {
          top = (_wrap_setLastFunctionCall("fullcalendar.js",2974,100380,100432,arrayMax,false,false) || _wrap_popCallStack(arrayMax((_wrap_setLastFunctionCall("fullcalendar.js",2974,100389,100431,colHeights.slice,false,false) || _wrap_popCallStack(colHeights.slice(seg.startCol, seg.endCol))))));
          seg.top = top;
          top += seg.outerHeight;
          for (k = seg.startCol; k < seg.endCol; k++) {
            colHeights[k] = top;
          }
          i++;
        }
(_wrap_setLastFunctionCall("fullcalendar.js",2982,100627,100669,rowDivs[rowI].height,false,false) || _wrap_popCallStack(        rowDivs[rowI].height((_wrap_setLastFunctionCall("fullcalendar.js",2982,100648,100668,arrayMax,false,false) || _wrap_popCallStack(arrayMax(colHeights))))));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",2984,100685,100725,daySegSetTops,false,false) || _wrap_popCallStack(      daySegSetTops(segs, (_wrap_setLastFunctionCall("fullcalendar.js",2984,100705,100724,getRowTops,false,false) || _wrap_popCallStack(getRowTops(rowDivs))))));
    }
    function renderTempDaySegs(segs, adjustRow, adjustTop) {
_wrap_addFunctionToMap('fullcalendar.js', 2986, 100737,101596, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var tempContainer = (_wrap_setLastFunctionCall("fullcalendar.js",2987,100820,100831,$,false,false) || _wrap_popCallStack($('<div/>')));
      var elements;
      var segmentContainer = (_wrap_setLastFunctionCall("fullcalendar.js",2989,100882,100906,getDaySegmentContainer,false,false) || _wrap_popCallStack(getDaySegmentContainer()));
      var i;
      var segCnt = segs.length;
      var element;
      tempContainer[0].innerHTML = (_wrap_setLastFunctionCall("fullcalendar.js",2993,101007,101023,daySegHTML,false,false) || _wrap_popCallStack(daySegHTML(segs)));
      elements = (_wrap_setLastFunctionCall("fullcalendar.js",2994,101042,101066,tempContainer.children,false,false) || _wrap_popCallStack(tempContainer.children()));
(_wrap_setLastFunctionCall("fullcalendar.js",2995,101074,101107,segmentContainer.append,false,false) || _wrap_popCallStack(      segmentContainer.append(elements)));
(_wrap_setLastFunctionCall("fullcalendar.js",2996,101115,101151,daySegElementResolve,false,false) || _wrap_popCallStack(      daySegElementResolve(segs, elements)));
(_wrap_setLastFunctionCall("fullcalendar.js",2997,101159,101181,daySegCalcHSides,false,false) || _wrap_popCallStack(      daySegCalcHSides(segs)));
(_wrap_setLastFunctionCall("fullcalendar.js",2998,101189,101210,daySegSetWidths,false,false) || _wrap_popCallStack(      daySegSetWidths(segs)));
(_wrap_setLastFunctionCall("fullcalendar.js",2999,101218,101241,daySegCalcHeights,false,false) || _wrap_popCallStack(      daySegCalcHeights(segs)));
(_wrap_setLastFunctionCall("fullcalendar.js",3000,101249,101294,daySegSetTops,false,false) || _wrap_popCallStack(      daySegSetTops(segs, (_wrap_setLastFunctionCall("fullcalendar.js",3000,101269,101293,getRowTops,false,false) || _wrap_popCallStack(getRowTops((_wrap_setLastFunctionCall("fullcalendar.js",3000,101280,101292,getRowDivs,false,false) || _wrap_popCallStack(getRowDivs()))))))));
      elements = [];
      for (i = 0; i < segCnt; i++) {
        element = segs[i].element;
        if (element) {
          if (segs[i].row === adjustRow) {
(_wrap_setLastFunctionCall("fullcalendar.js",3006,101467,101496,element.css,false,false) || _wrap_popCallStack(            element.css('top', adjustTop)));
          }
(_wrap_setLastFunctionCall("fullcalendar.js",3008,101520,101545,elements.push,false,false) || _wrap_popCallStack(          elements.push(element[0])));
        }
      }
      return (_wrap_setLastFunctionCall("fullcalendar.js",3011,101578,101589,$,false,false) || _wrap_popCallStack($(elements)));
    }
    function daySegHTML(segs) {
_wrap_addFunctionToMap('fullcalendar.js', 3013, 101601,104395, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var rtl = (_wrap_setLastFunctionCall("fullcalendar.js",3014,101645,101657,opt,false,false) || _wrap_popCallStack(opt('isRTL')));
      var i;
      var segCnt = segs.length;
      var seg;
      var event;
      var url;
      var classes;
      var bounds = (_wrap_setLastFunctionCall("fullcalendar.js",3021,101789,101803,allDayBounds,false,false) || _wrap_popCallStack(allDayBounds()));
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
        if ((_wrap_setLastFunctionCall("fullcalendar.js",3034,102149,102172,isEventDraggable,false,false) || _wrap_popCallStack(isEventDraggable(event)))) {
(_wrap_setLastFunctionCall("fullcalendar.js",3035,102186,102220,classes.push,false,false) || _wrap_popCallStack(          classes.push('fc-event-draggable')));
        }
        if (rtl) {
          if (seg.isStart) {
(_wrap_setLastFunctionCall("fullcalendar.js",3039,102292,102323,classes.push,false,false) || _wrap_popCallStack(            classes.push('fc-corner-right')));
          }
          if (seg.isEnd) {
(_wrap_setLastFunctionCall("fullcalendar.js",3042,102376,102406,classes.push,false,false) || _wrap_popCallStack(            classes.push('fc-corner-left')));
          }
          leftCol = (_wrap_setLastFunctionCall("fullcalendar.js",3044,102440,102474,dayOfWeekCol,false,false) || _wrap_popCallStack(dayOfWeekCol((_wrap_setLastFunctionCall("fullcalendar.js",3044,102453,102469,seg.end.getDay,false,false) || _wrap_popCallStack(seg.end.getDay())) - 1)));
          rightCol = (_wrap_setLastFunctionCall("fullcalendar.js",3045,102497,102529,dayOfWeekCol,false,false) || _wrap_popCallStack(dayOfWeekCol((_wrap_setLastFunctionCall("fullcalendar.js",3045,102510,102528,seg.start.getDay,false,false) || _wrap_popCallStack(seg.start.getDay())))));
          left = seg.isEnd ? (_wrap_setLastFunctionCall("fullcalendar.js",3046,102560,102583,colContentLeft,false,false) || _wrap_popCallStack(colContentLeft(leftCol))) : minLeft;
          right = seg.isStart ? (_wrap_setLastFunctionCall("fullcalendar.js",3047,102627,102652,colContentRight,false,false) || _wrap_popCallStack(colContentRight(rightCol))) : maxLeft;
        } else {
          if (seg.isStart) {
(_wrap_setLastFunctionCall("fullcalendar.js",3050,102722,102752,classes.push,false,false) || _wrap_popCallStack(            classes.push('fc-corner-left')));
          }
          if (seg.isEnd) {
(_wrap_setLastFunctionCall("fullcalendar.js",3053,102805,102836,classes.push,false,false) || _wrap_popCallStack(            classes.push('fc-corner-right')));
          }
          leftCol = (_wrap_setLastFunctionCall("fullcalendar.js",3055,102870,102902,dayOfWeekCol,false,false) || _wrap_popCallStack(dayOfWeekCol((_wrap_setLastFunctionCall("fullcalendar.js",3055,102883,102901,seg.start.getDay,false,false) || _wrap_popCallStack(seg.start.getDay())))));
          rightCol = (_wrap_setLastFunctionCall("fullcalendar.js",3056,102925,102959,dayOfWeekCol,false,false) || _wrap_popCallStack(dayOfWeekCol((_wrap_setLastFunctionCall("fullcalendar.js",3056,102938,102954,seg.end.getDay,false,false) || _wrap_popCallStack(seg.end.getDay())) - 1)));
          left = seg.isStart ? (_wrap_setLastFunctionCall("fullcalendar.js",3057,102992,103015,colContentLeft,false,false) || _wrap_popCallStack(colContentLeft(leftCol))) : minLeft;
          right = seg.isEnd ? (_wrap_setLastFunctionCall("fullcalendar.js",3058,103057,103082,colContentRight,false,false) || _wrap_popCallStack(colContentRight(rightCol))) : maxLeft;
        }
        classes = (_wrap_setLastFunctionCall("fullcalendar.js",3060,103122,103153,classes.concat,false,false) || _wrap_popCallStack(classes.concat(event.className)));
        if (event.source) {
          classes = (_wrap_setLastFunctionCall("fullcalendar.js",3062,103203,103247,classes.concat,false,false) || _wrap_popCallStack(classes.concat(event.source.className || [])));
        }
        url = event.url;
        skinCss = (_wrap_setLastFunctionCall("fullcalendar.js",3065,103302,103324,getSkinCss,false,false) || _wrap_popCallStack(getSkinCss(event, opt)));
        if (url) {
          html += '<a href=\'' + (_wrap_setLastFunctionCall("fullcalendar.js",3067,103378,103393,htmlEscape,false,false) || _wrap_popCallStack(htmlEscape(url))) + '\'';
        } else {
          html += '<div';
        }
        html += ' class=\'' + (_wrap_setLastFunctionCall("fullcalendar.js",3071,103485,103502,classes.join,false,false) || _wrap_popCallStack(classes.join(' '))) + '\'' + ' style=\'position:absolute;z-index:8;left:' + left + 'px;' + skinCss + '\'' + '>' + '<div' + ' class=\'fc-event-inner fc-event-skin\'' + (skinCss ? ' style=\'' + skinCss + '\'' : '') + '>';
        if (!event.allDay && seg.isStart) {
          html += '<span class=\'fc-event-time\'>' + (_wrap_setLastFunctionCall("fullcalendar.js",3073,103800,103866,htmlEscape,false,false) || _wrap_popCallStack(htmlEscape((_wrap_setLastFunctionCall("fullcalendar.js",3073,103811,103865,formatDates,false,false) || _wrap_popCallStack(formatDates(event.start, event.end, (_wrap_setLastFunctionCall("fullcalendar.js",3073,103847,103864,opt,false,false) || _wrap_popCallStack(opt('timeFormat'))))))))) + '</span>';
        }
        html += '<span class=\'fc-event-title\'>' + (_wrap_setLastFunctionCall("fullcalendar.js",3075,103942,103965,htmlEscape,false,false) || _wrap_popCallStack(htmlEscape(event.title))) + '</span>' + '</div>';
        if (seg.isEnd && (_wrap_setLastFunctionCall("fullcalendar.js",3076,104015,104038,isEventResizable,false,false) || _wrap_popCallStack(isEventResizable(event)))) {
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
_wrap_addFunctionToMap('fullcalendar.js', 3087, 104400,105118, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i;
      var segCnt = segs.length;
      var seg;
      var event;
      var element;
      var triggerRes;
      for (i = 0; i < segCnt; i++) {
        seg = segs[i];
        event = seg.event;
        element = (_wrap_setLastFunctionCall("fullcalendar.js",3097,104671,104685,$,false,false) || _wrap_popCallStack($(elements[i])));
        triggerRes = (_wrap_setLastFunctionCall("fullcalendar.js",3098,104708,104753,trigger,false,false) || _wrap_popCallStack(trigger('eventRender', event, event, element)));
        if (triggerRes === false) {
(_wrap_setLastFunctionCall("fullcalendar.js",3100,104801,104817,element.remove,false,false) || _wrap_popCallStack(          element.remove()));
        } else {
          if (triggerRes && triggerRes !== true) {
            triggerRes = (_wrap_setLastFunctionCall("fullcalendar.js",3103,104912,104969,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",3103,104912,104925,$,false,false) || _wrap_popCallStack($(triggerRes))).css({position: 'absolute', left: seg.left})));
(_wrap_setLastFunctionCall("fullcalendar.js",3104,104983,105014,element.replaceWith,false,false) || _wrap_popCallStack(            element.replaceWith(triggerRes)));
            element = triggerRes;
          }
          seg.element = element;
        }
      }
    }
    function daySegElementReport(segs) {
_wrap_addFunctionToMap('fullcalendar.js', 3111, 105123,105426, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i;
      var segCnt = segs.length;
      var seg;
      var element;
      for (i = 0; i < segCnt; i++) {
        seg = segs[i];
        element = seg.element;
        if (element) {
(_wrap_setLastFunctionCall("fullcalendar.js",3120,105363,105401,reportEventElement,false,false) || _wrap_popCallStack(          reportEventElement(seg.event, element)));
        }
      }
    }
    function daySegHandlers(segs, segmentContainer, modifiedEventId) {
_wrap_addFunctionToMap('fullcalendar.js', 3124, 105431,105971, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
(_wrap_setLastFunctionCall("fullcalendar.js",3136,105796,105827,bindDaySeg,false,false) || _wrap_popCallStack(            bindDaySeg(event, element, seg)));
          } else {
            element[0]._fci = i;
          }
        }
      }
(_wrap_setLastFunctionCall("fullcalendar.js",3142,105917,105964,lazySegBind,false,false) || _wrap_popCallStack(      lazySegBind(segmentContainer, segs, bindDaySeg)));
    }
    function daySegCalcHSides(segs) {
_wrap_addFunctionToMap('fullcalendar.js', 3144, 105976,106486, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
          key = seg.key = (_wrap_setLastFunctionCall("fullcalendar.js",3155,106276,106294,cssKey,false,false) || _wrap_popCallStack(cssKey(element[0])));
          val = hsideCache[key];
          if (val === undefined) {
            val = hsideCache[key] = (_wrap_setLastFunctionCall("fullcalendar.js",3158,106400,106421,hsides,false,false) || _wrap_popCallStack(hsides(element, true)));
          }
          seg.hsides = val;
        }
      }
    }
    function daySegSetWidths(segs) {
_wrap_addFunctionToMap('fullcalendar.js', 3164, 106491,106824, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i;
      var segCnt = segs.length;
      var seg;
      var element;
      for (i = 0; i < segCnt; i++) {
        seg = segs[i];
        element = seg.element;
        if (element) {
          element[0].style.width = (_wrap_setLastFunctionCall("fullcalendar.js",3173,106752,106792,Math.max,false,false) || _wrap_popCallStack(Math.max(0, seg.outerWidth - seg.hsides))) + 'px';
        }
      }
    }
    function daySegCalcHeights(segs) {
_wrap_addFunctionToMap('fullcalendar.js', 3177, 106829,107352, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
            val = vmarginCache[key] = (_wrap_setLastFunctionCall("fullcalendar.js",3191,107239,107256,vmargins,false,false) || _wrap_popCallStack(vmargins(element)));
          }
          seg.outerHeight = element[0].offsetHeight + val;
        }
      }
    }
    function getRowDivs() {
_wrap_addFunctionToMap('fullcalendar.js', 3197, 107357,107599, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i;
      var rowCnt = (_wrap_setLastFunctionCall("fullcalendar.js",3199,107413,107424,getRowCnt,false,false) || _wrap_popCallStack(getRowCnt()));
      var rowDivs = [];
      for (i = 0; i < rowCnt; i++) {
        rowDivs[i] = (_wrap_setLastFunctionCall("fullcalendar.js",3202,107508,107562,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",3202,107508,107520,allDayRow,false,false) || _wrap_popCallStack(allDayRow(i))).find('td:first div.fc-day-content > div')));
      }
      return rowDivs;
    }
    function getRowTops(rowDivs) {
_wrap_addFunctionToMap('fullcalendar.js', 3206, 107604,107816, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var i;
      var rowCnt = rowDivs.length;
      var tops = [];
      for (i = 0; i < rowCnt; i++) {
        tops[i] = rowDivs[i][0].offsetTop;
      }
      return tops;
    }
    function daySegSetTops(segs, rowTops) {
_wrap_addFunctionToMap('fullcalendar.js', 3215, 107821,108260, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
(_wrap_setLastFunctionCall("fullcalendar.js",3227,108185,108235,trigger,false,false) || _wrap_popCallStack(          trigger('eventAfterRender', event, event, element)));
        }
      }
    }
    function resizableDayEvent(event, element, seg) {
_wrap_addFunctionToMap('fullcalendar.js', 3231, 108265,110544, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var rtl = (_wrap_setLastFunctionCall("fullcalendar.js",3232,108331,108343,opt,false,false) || _wrap_popCallStack(opt('isRTL')));
      var direction = rtl ? 'w' : 'e';
      var handle = (_wrap_setLastFunctionCall("fullcalendar.js",3234,108403,108448,element.find,false,false) || _wrap_popCallStack(element.find('div.ui-resizable-' + direction)));
      var isResizing = false;
(_wrap_setLastFunctionCall("fullcalendar.js",3236,108486,108515,disableTextSelection,false,false) || _wrap_popCallStack(      disableTextSelection(element)));
(_wrap_setLastFunctionCall("fullcalendar.js",3239,108523,108689,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("fullcalendar.js",3237,108523,108581,element.mousedown,false,false) || _wrap_popCallStack(element.mousedown(function(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3237, 108541,108580, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3238,108558,108577,ev.preventDefault,false,false) || _wrap_popCallStack(  ev.preventDefault()));
}))).click(function(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3239, 108588,108688, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (isResizing) {
(_wrap_setLastFunctionCall("fullcalendar.js",3241,108627,108646,ev.preventDefault,false,false) || _wrap_popCallStack(    ev.preventDefault()));
(_wrap_setLastFunctionCall("fullcalendar.js",3242,108652,108681,ev.stopImmediatePropagation,false,false) || _wrap_popCallStack(    ev.stopImmediatePropagation()));
  }
})));
(_wrap_setLastFunctionCall("fullcalendar.js",3245,108697,110537,handle.mousedown,false,false) || _wrap_popCallStack(      handle.mousedown(function(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3245, 108714,110536, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (ev.which != 1) {
    return;
  }
  isResizing = true;
  var hoverListener = (_wrap_setLastFunctionCall("fullcalendar.js",3250,108811,108831,t.getHoverListener,false,false) || _wrap_popCallStack(t.getHoverListener()));
  var rowCnt = (_wrap_setLastFunctionCall("fullcalendar.js",3251,108848,108859,getRowCnt,false,false) || _wrap_popCallStack(getRowCnt()));
  var colCnt = (_wrap_setLastFunctionCall("fullcalendar.js",3252,108876,108887,getColCnt,false,false) || _wrap_popCallStack(getColCnt()));
  var dis = rtl ? -1 : 1;
  var dit = rtl ? colCnt - 1 : 0;
  var elementTop = (_wrap_setLastFunctionCall("fullcalendar.js",3255,108968,108986,element.css,false,false) || _wrap_popCallStack(element.css('top')));
  var dayDelta;
  var helpers;
  var eventCopy = (_wrap_setLastFunctionCall("fullcalendar.js",3258,109037,109056,$.extend,false,false) || _wrap_popCallStack($.extend({}, event)));
  var minCell = (_wrap_setLastFunctionCall("fullcalendar.js",3259,109074,109095,dateCell,false,false) || _wrap_popCallStack(dateCell(event.start)));
(_wrap_setLastFunctionCall("fullcalendar.js",3260,109099,109115,clearSelection,false,false) || _wrap_popCallStack(  clearSelection()));
(_wrap_setLastFunctionCall("fullcalendar.js",3261,109119,109189,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("fullcalendar.js",3261,109119,109165,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",3261,109119,109128,$,false,false) || _wrap_popCallStack($('body'))).css('cursor', direction + '-resize'))).one('mouseup', mouseup)));
(_wrap_setLastFunctionCall("fullcalendar.js",3262,109193,109237,trigger,false,false) || _wrap_popCallStack(  trigger('eventResizeStart', this, event, ev)));
(_wrap_setLastFunctionCall("fullcalendar.js",3263,109241,110243,hoverListener.start,false,false) || _wrap_popCallStack(  hoverListener.start(function(cell, origCell) {
_wrap_addFunctionToMap('fullcalendar.js', 3263, 109261,110238, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (cell) {
    var r = (_wrap_setLastFunctionCall("fullcalendar.js",3265,109314,109345,Math.max,false,false) || _wrap_popCallStack(Math.max(minCell.row, cell.row)));
    var c = cell.col;
    if (rowCnt == 1) {
      r = 0;
    }
    if (r == minCell.row) {
      if (rtl) {
        c = (_wrap_setLastFunctionCall("fullcalendar.js",3272,109468,109492,Math.min,false,false) || _wrap_popCallStack(Math.min(minCell.col, c)));
      } else {
        c = (_wrap_setLastFunctionCall("fullcalendar.js",3274,109521,109545,Math.max,false,false) || _wrap_popCallStack(Math.max(minCell.col, c)));
      }
    }
    dayDelta = r * 7 + c * dis + dit - (origCell.row * 7 + origCell.col * dis + dit);
    var newEnd = (_wrap_setLastFunctionCall("fullcalendar.js",3278,109664,109704,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",3278,109672,109687,eventEnd,false,false) || _wrap_popCallStack(eventEnd(event))), dayDelta, true)));
    if (dayDelta) {
      eventCopy.end = newEnd;
      var oldHelpers = helpers;
      helpers = (_wrap_setLastFunctionCall("fullcalendar.js",3282,109804,109871,renderTempDaySegs,false,false) || _wrap_popCallStack(renderTempDaySegs((_wrap_setLastFunctionCall("fullcalendar.js",3282,109822,109849,compileDaySegs,false,false) || _wrap_popCallStack(compileDaySegs([eventCopy]))), seg.row, elementTop)));
(_wrap_setLastFunctionCall("fullcalendar.js",3283,109879,109933,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("fullcalendar.js",3283,109879,109896,helpers.find,false,false) || _wrap_popCallStack(helpers.find('*'))).css('cursor', direction + '-resize')));
      if (oldHelpers) {
(_wrap_setLastFunctionCall("fullcalendar.js",3285,109967,109986,oldHelpers.remove,false,false) || _wrap_popCallStack(        oldHelpers.remove()));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",3287,110002,110019,hideEvents,false,false) || _wrap_popCallStack(      hideEvents(event)));
    } else {
      if (helpers) {
(_wrap_setLastFunctionCall("fullcalendar.js",3290,110063,110080,showEvents,false,false) || _wrap_popCallStack(        showEvents(event)));
(_wrap_setLastFunctionCall("fullcalendar.js",3291,110090,110106,helpers.remove,false,false) || _wrap_popCallStack(        helpers.remove()));
        helpers = null;
      }
    }
(_wrap_setLastFunctionCall("fullcalendar.js",3295,110150,110165,clearOverlays,false,false) || _wrap_popCallStack(    clearOverlays()));
(_wrap_setLastFunctionCall("fullcalendar.js",3296,110171,110231,renderDayOverlay,false,false) || _wrap_popCallStack(    renderDayOverlay(event.start, (_wrap_setLastFunctionCall("fullcalendar.js",3296,110201,110230,addDays,false,false) || _wrap_popCallStack(addDays((_wrap_setLastFunctionCall("fullcalendar.js",3296,110209,110226,cloneDate,false,false) || _wrap_popCallStack(cloneDate(newEnd))), 1))))));
  }
}, ev)));
  function mouseup(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3299, 110247,110534, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3300,110274,110317,trigger,false,false) || _wrap_popCallStack(    trigger('eventResizeStop', this, event, ev)));
(_wrap_setLastFunctionCall("fullcalendar.js",3301,110323,110350,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("fullcalendar.js",3301,110323,110332,$,false,false) || _wrap_popCallStack($('body'))).css('cursor', '')));
(_wrap_setLastFunctionCall("fullcalendar.js",3302,110356,110376,hoverListener.stop,false,false) || _wrap_popCallStack(    hoverListener.stop()));
(_wrap_setLastFunctionCall("fullcalendar.js",3303,110382,110397,clearOverlays,false,false) || _wrap_popCallStack(    clearOverlays()));
    if (dayDelta) {
(_wrap_setLastFunctionCall("fullcalendar.js",3305,110425,110466,eventResize,false,false) || _wrap_popCallStack(      eventResize(this, event, dayDelta, 0, ev)));
    }
(_wrap_setLastFunctionCall("fullcalendar.js",3307,110478,110529,setTimeout,false,false) || _wrap_popCallStack(    setTimeout(function() {
_wrap_addFunctionToMap('fullcalendar.js', 3307, 110489,110525, (typeof arguments === 'object' ? arguments.callee.caller : null));

  isResizing = false;
}, 0)));
  }
})));
    }
  }
  function SelectionManager() {
_wrap_addFunctionToMap('fullcalendar.js', 3314, 110551,112621, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
    if ((_wrap_setLastFunctionCall("fullcalendar.js",3326,110968,110985,opt,false,false) || _wrap_popCallStack(opt('selectable'))) && (_wrap_setLastFunctionCall("fullcalendar.js",3326,110989,111008,opt,false,false) || _wrap_popCallStack(opt('unselectAuto')))) {
(_wrap_setLastFunctionCall("fullcalendar.js",3327,111018,111198,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("fullcalendar.js",3327,111018,111029,$,false,false) || _wrap_popCallStack($(document))).mousedown(function(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3327, 111040,111197, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var ignore = (_wrap_setLastFunctionCall("fullcalendar.js",3328,111070,111091,opt,false,false) || _wrap_popCallStack(opt('unselectCancel')));
  if (ignore) {
    if ((_wrap_setLastFunctionCall("fullcalendar.js",3330,111117,111145,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",3330,111117,111129,$,false,false) || _wrap_popCallStack($(ev.target))).parents(ignore))).length) {
      return;
    }
  }
(_wrap_setLastFunctionCall("fullcalendar.js",3334,111182,111194,unselect,false,false) || _wrap_popCallStack(  unselect(ev)));
})));
    }
    function select(startDate, endDate, allDay) {
_wrap_addFunctionToMap('fullcalendar.js', 3337, 111210,111469, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3338,111262,111272,unselect,false,false) || _wrap_popCallStack(      unselect()));
      if (!endDate) {
        endDate = (_wrap_setLastFunctionCall("fullcalendar.js",3340,111314,111352,defaultSelectionEnd,false,false) || _wrap_popCallStack(defaultSelectionEnd(startDate, allDay)));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",3342,111368,111411,renderSelection,false,false) || _wrap_popCallStack(      renderSelection(startDate, endDate, allDay)));
(_wrap_setLastFunctionCall("fullcalendar.js",3343,111419,111462,reportSelection,false,false) || _wrap_popCallStack(      reportSelection(startDate, endDate, allDay)));
    }
    function unselect(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3345, 111474,111624, (typeof arguments === 'object' ? arguments.callee.caller : null));

      if (selected) {
        selected = false;
(_wrap_setLastFunctionCall("fullcalendar.js",3348,111554,111570,clearSelection,false,false) || _wrap_popCallStack(        clearSelection()));
(_wrap_setLastFunctionCall("fullcalendar.js",3349,111580,111609,trigger,false,false) || _wrap_popCallStack(        trigger('unselect', null, ev)));
      }
    }
    function reportSelection(startDate, endDate, allDay, ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3352, 111629,111779, (typeof arguments === 'object' ? arguments.callee.caller : null));

      selected = true;
(_wrap_setLastFunctionCall("fullcalendar.js",3354,111717,111772,trigger,false,false) || _wrap_popCallStack(      trigger('select', null, startDate, endDate, allDay, ev)));
    }
    function daySelectionMousedown(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3356, 111784,112617, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var cellDate = t.cellDate;
      var cellIsAllDay = t.cellIsAllDay;
      var hoverListener = (_wrap_setLastFunctionCall("fullcalendar.js",3359,111921,111941,t.getHoverListener,false,false) || _wrap_popCallStack(t.getHoverListener()));
      var reportDayClick = t.reportDayClick;
      if (ev.which == 1 && (_wrap_setLastFunctionCall("fullcalendar.js",3361,112015,112032,opt,false,false) || _wrap_popCallStack(opt('selectable')))) {
(_wrap_setLastFunctionCall("fullcalendar.js",3362,112044,112056,unselect,false,false) || _wrap_popCallStack(        unselect(ev)));
        var _mousedownElement = this;
        var dates;
(_wrap_setLastFunctionCall("fullcalendar.js",3365,112123,112372,hoverListener.start,false,false) || _wrap_popCallStack(        hoverListener.start(function(cell, origCell) {
_wrap_addFunctionToMap('fullcalendar.js', 3365, 112143,112367, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3366,112172,112188,clearSelection,false,false) || _wrap_popCallStack(  clearSelection()));
  if (cell && (_wrap_setLastFunctionCall("fullcalendar.js",3367,112204,112222,cellIsAllDay,false,false) || _wrap_popCallStack(cellIsAllDay(cell)))) {
    dates = (_wrap_setLastFunctionCall("fullcalendar.js",3368,112238,112284,null,false,false) || _wrap_popCallStack([(_wrap_setLastFunctionCall("fullcalendar.js",3368,112239,112257,cellDate,false,false) || _wrap_popCallStack(cellDate(origCell))), (_wrap_setLastFunctionCall("fullcalendar.js",3368,112259,112273,cellDate,false,false) || _wrap_popCallStack(cellDate(cell)))].sort(cmp)));
(_wrap_setLastFunctionCall("fullcalendar.js",3369,112290,112331,renderSelection,false,false) || _wrap_popCallStack(    renderSelection(dates[0], dates[1], true)));
  } else {
    dates = null;
  }
}, ev)));
(_wrap_setLastFunctionCall("fullcalendar.js",3374,112382,112602,null,false,false) || _wrap_popCallStack(        (_wrap_setLastFunctionCall("fullcalendar.js",3374,112382,112393,$,false,false) || _wrap_popCallStack($(document))).one('mouseup', function(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3374, 112409,112601, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3375,112426,112446,hoverListener.stop,false,false) || _wrap_popCallStack(  hoverListener.stop()));
  if (dates) {
    if (+dates[0] == +dates[1]) {
(_wrap_setLastFunctionCall("fullcalendar.js",3378,112503,112537,reportDayClick,false,false) || _wrap_popCallStack(      reportDayClick(dates[0], true, ev)));
    }
(_wrap_setLastFunctionCall("fullcalendar.js",3380,112549,112594,reportSelection,false,false) || _wrap_popCallStack(    reportSelection(dates[0], dates[1], true, ev)));
  }
})));
      }
    }
  }
  function OverlayManager() {
_wrap_addFunctionToMap('fullcalendar.js', 3386, 112624,113289, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    t.renderOverlay = renderOverlay;
    t.clearOverlays = clearOverlays;
    var usedOverlays = [];
    var unusedOverlays = [];
    function renderOverlay(rect, parent) {
_wrap_addFunctionToMap('fullcalendar.js', 3392, 112804,113138, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var e = (_wrap_setLastFunctionCall("fullcalendar.js",3393,112857,112879,unusedOverlays.shift,false,false) || _wrap_popCallStack(unusedOverlays.shift()));
      if (!e) {
        e = (_wrap_setLastFunctionCall("fullcalendar.js",3395,112909,112984,$,false,false) || _wrap_popCallStack($('<div class=\'fc-cell-overlay\' style=\'position:absolute;z-index:3\'/>')));
      }
      if (e[0].parentNode != parent[0]) {
(_wrap_setLastFunctionCall("fullcalendar.js",3398,113044,113062,e.appendTo,false,false) || _wrap_popCallStack(        e.appendTo(parent)));
      }
(_wrap_setLastFunctionCall("fullcalendar.js",3400,113078,113115,usedOverlays.push,false,false) || _wrap_popCallStack(      usedOverlays.push((_wrap_setLastFunctionCall("fullcalendar.js",3400,113096,113114,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",3400,113096,113107,e.css,false,false) || _wrap_popCallStack(e.css(rect))).show())))));
      return e;
    }
    function clearOverlays() {
_wrap_addFunctionToMap('fullcalendar.js', 3403, 113143,113285, (typeof arguments === 'object' ? arguments.callee.caller : null));

      var e;
      while (e = (_wrap_setLastFunctionCall("fullcalendar.js",3405,113200,113220,usedOverlays.shift,false,false) || _wrap_popCallStack(usedOverlays.shift()))) {
(_wrap_setLastFunctionCall("fullcalendar.js",3406,113232,113270,unusedOverlays.push,false,false) || _wrap_popCallStack(        unusedOverlays.push((_wrap_setLastFunctionCall("fullcalendar.js",3406,113252,113269,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",3406,113252,113260,e.hide,false,false) || _wrap_popCallStack(e.hide())).unbind())))));
      }
    }
  }
  function CoordinateGrid(buildFunc) {
_wrap_addFunctionToMap('fullcalendar.js', 3410, 113292,114115, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    var rows;
    var cols;
    t.build = function() {
_wrap_addFunctionToMap('fullcalendar.js', 3414, 113389,113454, (typeof arguments === 'object' ? arguments.callee.caller : null));

  rows = [];
  cols = [];
(_wrap_setLastFunctionCall("fullcalendar.js",3417,113430,113451,buildFunc,false,false) || _wrap_popCallStack(  buildFunc(rows, cols)));
};
    t.cell = function(x, y) {
_wrap_addFunctionToMap('fullcalendar.js', 3419, 113469,113849, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
_wrap_addFunctionToMap('fullcalendar.js', 3437, 113864,114110, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var origin = (_wrap_setLastFunctionCall("fullcalendar.js",3438,113929,113951,originElement.offset,false,false) || _wrap_popCallStack(originElement.offset()));
  return {top: rows[row0][0] - origin.top, left: cols[col0][0] - origin.left, width: cols[col1][1] - cols[col0][0], height: rows[row1][1] - rows[row0][0]};
};
  }
  function HoverListener(coordinateGrid) {
_wrap_addFunctionToMap('fullcalendar.js', 3442, 114118,115046, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this;
    var bindType;
    var change;
    var firstCell;
    var cell;
    t.start = function(_change, ev, _bindType) {
_wrap_addFunctionToMap('fullcalendar.js', 3448, 114258,114456, (typeof arguments === 'object' ? arguments.callee.caller : null));

  change = _change;
  firstCell = cell = null;
(_wrap_setLastFunctionCall("fullcalendar.js",3451,114342,114364,coordinateGrid.build,false,false) || _wrap_popCallStack(  coordinateGrid.build()));
(_wrap_setLastFunctionCall("fullcalendar.js",3452,114368,114377,mouse,false,false) || _wrap_popCallStack(  mouse(ev)));
  bindType = _bindType || 'mousemove';
(_wrap_setLastFunctionCall("fullcalendar.js",3454,114420,114453,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("fullcalendar.js",3454,114420,114431,$,false,false) || _wrap_popCallStack($(document))).bind(bindType, mouse)));
};
    function mouse(ev) {
_wrap_addFunctionToMap('fullcalendar.js', 3456, 114462,114959, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3457,114489,114504,_fixUIEvent,false,false) || _wrap_popCallStack(      _fixUIEvent(ev)));
      var newCell = (_wrap_setLastFunctionCall("fullcalendar.js",3458,114526,114565,coordinateGrid.cell,false,false) || _wrap_popCallStack(coordinateGrid.cell(ev.pageX, ev.pageY)));
      if (!newCell != !cell || newCell && (newCell.row != cell.row || newCell.col != cell.col)) {
        if (newCell) {
          if (!firstCell) {
            firstCell = newCell;
          }
(_wrap_setLastFunctionCall("fullcalendar.js",3464,114771,114855,change,false,false) || _wrap_popCallStack(          change(newCell, firstCell, newCell.row - firstCell.row, newCell.col - firstCell.col)));
        } else {
(_wrap_setLastFunctionCall("fullcalendar.js",3466,114884,114910,change,false,false) || _wrap_popCallStack(          change(newCell, firstCell)));
        }
        cell = newCell;
      }
    }
    t.stop = function() {
_wrap_addFunctionToMap('fullcalendar.js', 3471, 114973,115041, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("fullcalendar.js",3472,114988,115023,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("fullcalendar.js",3472,114988,114999,$,false,false) || _wrap_popCallStack($(document))).unbind(bindType, mouse)));
  return cell;
};
  }
  function _fixUIEvent(event) {
_wrap_addFunctionToMap('fullcalendar.js', 3476, 115049,115219, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (event.pageX === undefined) {
      event.pageX = event.originalEvent.pageX;
      event.pageY = event.originalEvent.pageY;
    }
  }
  function HorizontalPositionCache(getElement) {
_wrap_addFunctionToMap('fullcalendar.js', 3482, 115222,115713, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var t = this, elements = {}, lefts = {}, rights = {};
    function e(i) {
_wrap_addFunctionToMap('fullcalendar.js', 3484, 115331,115409, (typeof arguments === 'object' ? arguments.callee.caller : null));

      return elements[i] = elements[i] || (_wrap_setLastFunctionCall("fullcalendar.js",3485,115389,115402,getElement,false,false) || _wrap_popCallStack(getElement(i)));
    }
    t.left = function(i) {
_wrap_addFunctionToMap('fullcalendar.js', 3487, 115423,115516, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return lefts[i] = lefts[i] === undefined ? (_wrap_setLastFunctionCall("fullcalendar.js",3488,115482,115497,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",3488,115482,115486,e,false,false) || _wrap_popCallStack(e(i))).position())).left : lefts[i];
};
    t.right = function(i) {
_wrap_addFunctionToMap('fullcalendar.js', 3490, 115532,115632, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return rights[i] = rights[i] === undefined ? (_wrap_setLastFunctionCall("fullcalendar.js",3491,115593,115602,t.left,false,false) || _wrap_popCallStack(t.left(i))) + (_wrap_setLastFunctionCall("fullcalendar.js",3491,115605,115617,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("fullcalendar.js",3491,115605,115609,e,false,false) || _wrap_popCallStack(e(i))).width())) : rights[i];
};
    t.clear = function() {
_wrap_addFunctionToMap('fullcalendar.js', 3493, 115648,115708, (typeof arguments === 'object' ? arguments.callee.caller : null));

  elements = {};
  lefts = {};
  rights = {};
};
  }
}(jQuery))));
