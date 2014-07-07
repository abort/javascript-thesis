_wrap_staticMeasuredFunctions['jquery.markitup.js'] = 45;
_wrap_staticMeasuredCalls['jquery.markitup.js'] =215;
(_wrap_setLastFunctionCall("jquery.markitup.js",1,0,14899,null,true,false) || _wrap_popCallStack((function($) {
_wrap_addFunctionToMap('jquery.markitup.js', 1, 1,14890, (typeof arguments === 'object' ? arguments.callee.caller : null));

  $.fn.markItUp = function(settings, extraSettings) {
_wrap_addFunctionToMap('jquery.markitup.js', 2, 33,14373, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var options, ctrlKey, shiftKey, altKey;
  ctrlKey = shiftKey = altKey = false;
  options = {id: '', nameSpace: '', root: '', previewInWindow: '', previewAutoRefresh: true, previewPosition: 'after', previewTemplatePath: '~/templates/preview.html', previewParser: false, previewParserPath: '', previewParserVar: 'data', resizeHandle: true, beforeInsert: '', afterInsert: '', onEnter: {}, onShiftEnter: {}, onCtrlEnter: {}, onTab: {}, markupSet: [{}]};
(_wrap_setLastFunctionCall("jquery.markitup.js",6,523,565,$.extend,false,false) || _wrap_popCallStack(  $.extend(options, settings, extraSettings)));
  if (!options.root) {
(_wrap_setLastFunctionCall("jquery.markitup.js",8,594,774,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("jquery.markitup.js",8,594,605,$,false,false) || _wrap_popCallStack($('script'))).each(function(a, tag) {
_wrap_addFunctionToMap('jquery.markitup.js', 8, 611,773, (typeof arguments === 'object' ? arguments.callee.caller : null));

  miuScript = (_wrap_setLastFunctionCall("jquery.markitup.js",9,644,705,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",9,644,657,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",9,644,650,$,false,false) || _wrap_popCallStack($(tag))).get(0))).src.match(/(.*)jquery\.markitup(\.pack)?\.js$/)));
  if (miuScript !== null) {
    options.root = miuScript[1];
  }
})));
  }
  return (_wrap_setLastFunctionCall("jquery.markitup.js",15,789,14370,this.each,false,false) || _wrap_popCallStack(this.each(function() {
_wrap_addFunctionToMap('jquery.markitup.js', 15, 799,14369, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var $$, textarea, levels, scrollPosition, caretPosition, caretOffset, clicked, hash, header, footer, previewWindow, template, iFrame, abort;
  $$ = (_wrap_setLastFunctionCall("jquery.markitup.js",17,962,969,$,false,false) || _wrap_popCallStack($(this)));
  textarea = this;
  levels = [];
  abort = false;
  scrollPosition = caretPosition = 0;
  caretOffset = -1;
  options.previewParserPath = (_wrap_setLastFunctionCall("jquery.markitup.js",23,1110,1145,localize,false,false) || _wrap_popCallStack(localize(options.previewParserPath)));
  options.previewTemplatePath = (_wrap_setLastFunctionCall("jquery.markitup.js",24,1179,1216,localize,false,false) || _wrap_popCallStack(localize(options.previewTemplatePath)));
  function localize(data, inText) {
_wrap_addFunctionToMap('jquery.markitup.js', 25, 1220,1389, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (inText) {
      return (_wrap_setLastFunctionCall("jquery.markitup.js",27,1285,1331,data.replace,false,false) || _wrap_popCallStack(data.replace(/("|')~\//g, "$1" + options.root)));
    }
    return (_wrap_setLastFunctionCall("jquery.markitup.js",29,1350,1384,data.replace,false,false) || _wrap_popCallStack(data.replace(/^~\//, options.root)));
  }
  function init() {
_wrap_addFunctionToMap('jquery.markitup.js', 31, 1392,2979, (typeof arguments === 'object' ? arguments.callee.caller : null));

    id = '';
    nameSpace = '';
    if (options.id) {
      id = 'id="' + options.id + '"';
    } else if ((_wrap_setLastFunctionCall("jquery.markitup.js",36,1518,1531,$$.attr,false,false) || _wrap_popCallStack($$.attr("id")))) {
      id = 'id="markItUp' + ((_wrap_setLastFunctionCall("jquery.markitup.js",37,1564,1604,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",37,1564,1590,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",37,1564,1577,$$.attr,false,false) || _wrap_popCallStack($$.attr("id"))).substr(0, 1))).toUpperCase()))) + ((_wrap_setLastFunctionCall("jquery.markitup.js",37,1609,1632,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",37,1609,1622,$$.attr,false,false) || _wrap_popCallStack($$.attr("id"))).substr(1)))) + '"';
    }
    if (options.nameSpace) {
      nameSpace = 'class="' + options.nameSpace + '"';
    }
(_wrap_setLastFunctionCall("jquery.markitup.js",42,1741,1781,$$.wrap,false,false) || _wrap_popCallStack(    $$.wrap('<div ' + nameSpace + '></div>')));
(_wrap_setLastFunctionCall("jquery.markitup.js",43,1787,1837,$$.wrap,false,false) || _wrap_popCallStack(    $$.wrap('<div ' + id + ' class="markItUp"></div>')));
(_wrap_setLastFunctionCall("jquery.markitup.js",44,1843,1891,$$.wrap,false,false) || _wrap_popCallStack(    $$.wrap('<div class="markItUpContainer"></div>')));
(_wrap_setLastFunctionCall("jquery.markitup.js",45,1897,1926,$$.addClass,false,false) || _wrap_popCallStack(    $$.addClass("markItUpEditor")));
    header = (_wrap_setLastFunctionCall("jquery.markitup.js",46,1941,1997,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",46,1941,1980,$,false,false) || _wrap_popCallStack($('<div class="markItUpHeader"></div>'))).insertBefore($$)));
(_wrap_setLastFunctionCall("jquery.markitup.js",47,2003,2051,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("jquery.markitup.js",47,2003,2034,$,false,false) || _wrap_popCallStack($((_wrap_setLastFunctionCall("jquery.markitup.js",47,2005,2033,dropMenus,false,false) || _wrap_popCallStack(dropMenus(options.markupSet)))))).appendTo(header)));
    footer = (_wrap_setLastFunctionCall("jquery.markitup.js",48,2066,2121,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",48,2066,2105,$,false,false) || _wrap_popCallStack($('<div class="markItUpFooter"></div>'))).insertAfter($$)));
    if (options.resizeHandle === true && $.browser.safari !== true) {
      resizeHandle = (_wrap_setLastFunctionCall("jquery.markitup.js",50,2214,2658,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",50,2214,2275,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",50,2214,2259,$,false,false) || _wrap_popCallStack($('<div class="markItUpResizeHandle"></div>'))).insertAfter($$))).bind("mousedown", function(e) {
_wrap_addFunctionToMap('jquery.markitup.js', 50, 2294,2657, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var h = (_wrap_setLastFunctionCall("jquery.markitup.js",51,2318,2329,$$.height,false,false) || _wrap_popCallStack($$.height())), y = e.clientY, mouseMove, mouseUp;
  mouseMove = function(e) {
_wrap_addFunctionToMap('jquery.markitup.js', 52, 2380,2471, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",53,2396,2452,$$.css,false,false) || _wrap_popCallStack(  $$.css("height", (_wrap_setLastFunctionCall("jquery.markitup.js",53,2413,2444,Math.max,false,false) || _wrap_popCallStack(Math.max(20, e.clientY + h - y))) + "px")));
  return false;
};
  mouseUp = function(e) {
_wrap_addFunctionToMap('jquery.markitup.js', 56, 2485,2587, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",57,2501,2568,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("jquery.markitup.js",57,2501,2541,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",57,2501,2510,$,false,false) || _wrap_popCallStack($("html"))).unbind("mousemove", mouseMove))).unbind("mouseup", mouseUp)));
  return false;
};
(_wrap_setLastFunctionCall("jquery.markitup.js",60,2591,2654,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("jquery.markitup.js",60,2591,2629,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",60,2591,2600,$,false,false) || _wrap_popCallStack($("html"))).bind("mousemove", mouseMove))).bind("mouseup", mouseUp)));
})));
(_wrap_setLastFunctionCall("jquery.markitup.js",62,2666,2693,footer.append,false,false) || _wrap_popCallStack(      footer.append(resizeHandle)));
    }
(_wrap_setLastFunctionCall("jquery.markitup.js",64,2705,2745,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("jquery.markitup.js",64,2705,2727,$$.keydown,false,false) || _wrap_popCallStack($$.keydown(keyPressed))).keyup(keyPressed)));
(_wrap_setLastFunctionCall("jquery.markitup.js",65,2751,2915,$$.bind,false,false) || _wrap_popCallStack(    $$.bind("insertion", function(e, settings) {
_wrap_addFunctionToMap('jquery.markitup.js', 65, 2772,2914, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (settings.target !== false) {
(_wrap_setLastFunctionCall("jquery.markitup.js",67,2835,2840,get,false,false) || _wrap_popCallStack(    get()));
  }
  if (textarea === $.markItUp.focused) {
(_wrap_setLastFunctionCall("jquery.markitup.js",70,2891,2907,markup,false,false) || _wrap_popCallStack(    markup(settings)));
  }
})));
(_wrap_setLastFunctionCall("jquery.markitup.js",73,2921,2974,$$.focus,false,false) || _wrap_popCallStack(    $$.focus(function() {
_wrap_addFunctionToMap('jquery.markitup.js', 73, 2930,2973, (typeof arguments === 'object' ? arguments.callee.caller : null));

  $.markItUp.focused = this;
})));
  }
  function dropMenus(markupSet) {
_wrap_addFunctionToMap('jquery.markitup.js', 77, 2982,4380, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var ul = (_wrap_setLastFunctionCall("jquery.markitup.js",78,3027,3041,$,false,false) || _wrap_popCallStack($('<ul></ul>'))), i = 0;
(_wrap_setLastFunctionCall("jquery.markitup.js",79,3054,3100,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("jquery.markitup.js",79,3054,3076,$,false,false) || _wrap_popCallStack($('li:hover > ul', ul))).css('display', 'block')));
(_wrap_setLastFunctionCall("jquery.markitup.js",80,3106,4342,$.each,false,false) || _wrap_popCallStack(    $.each(markupSet, function() {
_wrap_addFunctionToMap('jquery.markitup.js', 80, 3124,4341, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var button = this, t = '', title, li, j;
  title = (button.key) ? (button.name || '') + ' [Ctrl+' + button.key + ']' : (button.name || '');
  key = (button.key) ? 'accesskey="' + button.key + '"' : '';
  if (button.separator) {
    li = (_wrap_setLastFunctionCall("jquery.markitup.js",85,3376,3461,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",85,3376,3448,$,false,false) || _wrap_popCallStack($('<li class="markItUpSeparator">' + (button.separator || '') + '</li>'))).appendTo(ul)));
  } else {
    i++;
    for (j = levels.length - 1; j >= 0; j--) {
      t += levels[j] + "-";
    }
    li = (_wrap_setLastFunctionCall("jquery.markitup.js",112,3573,4202,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",105,3573,4189,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",97,3573,4026,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",95,3573,3885,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",93,3573,3839,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",91,3573,3801,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",91,3573,3749,$,false,false) || _wrap_popCallStack($('<li class="markItUpButton markItUpButton' + t + (i) + ' ' + (button.className || '') + '"><a href="" ' + key + ' title="' + title + '">' + (button.name || '') + '</a></li>'))).bind("contextmenu", function() {
_wrap_addFunctionToMap('jquery.markitup.js', 91, 3770,3800, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return false;
}))).click(function() {
_wrap_addFunctionToMap('jquery.markitup.js', 93, 3808,3838, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return false;
}))).bind("focusin", function() {
_wrap_addFunctionToMap('jquery.markitup.js', 95, 3856,3884, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",96,3871,3881,$$.focus,false,false) || _wrap_popCallStack(  $$.focus()));
}))).mouseup(function() {
_wrap_addFunctionToMap('jquery.markitup.js', 97, 3894,4025, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (button.call) {
(_wrap_setLastFunctionCall("jquery.markitup.js",99,3932,3951,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("jquery.markitup.js",99,3932,3949,eval,false,true) || _wrap_popCallStack(eval(button.call)))()));
  }
(_wrap_setLastFunctionCall("jquery.markitup.js",101,3959,4006,setTimeout,false,false) || _wrap_popCallStack(  setTimeout(function() {
_wrap_addFunctionToMap('jquery.markitup.js', 101, 3970,4002, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",102,3985,3999,markup,false,false) || _wrap_popCallStack(  markup(button)));
}, 1)));
  return false;
}))).hover(function() {
_wrap_addFunctionToMap('jquery.markitup.js', 105, 4033,4146, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",106,4048,4070,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("jquery.markitup.js",106,4048,4063,$,false,false) || _wrap_popCallStack($('> ul', this))).show()));
(_wrap_setLastFunctionCall("jquery.markitup.js",107,4074,4143,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("jquery.markitup.js",107,4074,4085,$,false,false) || _wrap_popCallStack($(document))).one('click', function() {
_wrap_addFunctionToMap('jquery.markitup.js', 107, 4099,4142, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",108,4114,4139,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("jquery.markitup.js",108,4114,4132,$,false,false) || _wrap_popCallStack($('ul ul', header))).hide()));
})));
}, function() {
_wrap_addFunctionToMap('jquery.markitup.js', 110, 4148,4188, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",111,4163,4185,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("jquery.markitup.js",111,4163,4178,$,false,false) || _wrap_popCallStack($('> ul', this))).hide()));
}))).appendTo(ul)));
    if (button.dropMenu) {
(_wrap_setLastFunctionCall("jquery.markitup.js",114,4237,4251,levels.push,false,false) || _wrap_popCallStack(      levels.push(i)));
(_wrap_setLastFunctionCall("jquery.markitup.js",115,4259,4328,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("jquery.markitup.js",115,4259,4293,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",115,4259,4264,$,false,false) || _wrap_popCallStack($(li))).addClass('markItUpDropMenu'))).append((_wrap_setLastFunctionCall("jquery.markitup.js",115,4301,4327,dropMenus,false,false) || _wrap_popCallStack(dropMenus(button.dropMenu))))));
    }
  }
})));
(_wrap_setLastFunctionCall("jquery.markitup.js",119,4348,4360,levels.pop,false,false) || _wrap_popCallStack(    levels.pop()));
    return ul;
  }
  function magicMarkups(string) {
_wrap_addFunctionToMap('jquery.markitup.js', 122, 4383,5004, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (string) {
      string = (_wrap_setLastFunctionCall("jquery.markitup.js",124,4448,4465,string.toString,false,false) || _wrap_popCallStack(string.toString()));
      string = (_wrap_setLastFunctionCall("jquery.markitup.js",125,4482,4701,string.replace,false,false) || _wrap_popCallStack(string.replace(/\(\!\(([\s\S]*?)\)\!\)/g, function(x, a) {
_wrap_addFunctionToMap('jquery.markitup.js', 125, 4524,4700, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var b = (_wrap_setLastFunctionCall("jquery.markitup.js",126,4551,4565,a.split,false,false) || _wrap_popCallStack(a.split('|!|')));
  if (altKey === true) {
    return (b[1] !== undefined) ? b[1] : b[0];
  } else {
    return (b[1] === undefined) ? "" : b[0];
  }
})));
      string = (_wrap_setLastFunctionCall("jquery.markitup.js",133,4718,4957,string.replace,false,false) || _wrap_popCallStack(string.replace(/\[\!\[([\s\S]*?)\]\!\]/g, function(x, a) {
_wrap_addFunctionToMap('jquery.markitup.js', 133, 4760,4956, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var b = (_wrap_setLastFunctionCall("jquery.markitup.js",134,4787,4801,a.split,false,false) || _wrap_popCallStack(a.split(':!:')));
  if (abort === true) {
    return false;
  }
  value = (_wrap_setLastFunctionCall("jquery.markitup.js",138,4859,4891,prompt,false,false) || _wrap_popCallStack(prompt(b[0], (b[1]) ? b[1] : '')));
  if (value === null) {
    abort = true;
  }
  return value;
})));
      return string;
    }
    return "";
  }
  function prepare(action) {
_wrap_addFunctionToMap('jquery.markitup.js', 148, 5007,5137, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if ((_wrap_setLastFunctionCall("jquery.markitup.js",149,5042,5062,$.isFunction,false,false) || _wrap_popCallStack($.isFunction(action)))) {
      action = (_wrap_setLastFunctionCall("jquery.markitup.js",150,5081,5093,action,false,false) || _wrap_popCallStack(action(hash)));
    }
    return (_wrap_setLastFunctionCall("jquery.markitup.js",152,5112,5132,magicMarkups,false,false) || _wrap_popCallStack(magicMarkups(action)));
  }
  function build(string) {
_wrap_addFunctionToMap('jquery.markitup.js', 154, 5140,6350, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var openWith = (_wrap_setLastFunctionCall("jquery.markitup.js",155,5184,5209,prepare,false,false) || _wrap_popCallStack(prepare(clicked.openWith)));
    var placeHolder = (_wrap_setLastFunctionCall("jquery.markitup.js",156,5233,5261,prepare,false,false) || _wrap_popCallStack(prepare(clicked.placeHolder)));
    var replaceWith = (_wrap_setLastFunctionCall("jquery.markitup.js",157,5285,5313,prepare,false,false) || _wrap_popCallStack(prepare(clicked.replaceWith)));
    var closeWith = (_wrap_setLastFunctionCall("jquery.markitup.js",158,5335,5361,prepare,false,false) || _wrap_popCallStack(prepare(clicked.closeWith)));
    var openBlockWith = (_wrap_setLastFunctionCall("jquery.markitup.js",159,5387,5417,prepare,false,false) || _wrap_popCallStack(prepare(clicked.openBlockWith)));
    var closeBlockWith = (_wrap_setLastFunctionCall("jquery.markitup.js",160,5444,5475,prepare,false,false) || _wrap_popCallStack(prepare(clicked.closeBlockWith)));
    var multiline = clicked.multiline;
    if (replaceWith !== "") {
      block = openWith + replaceWith + closeWith;
    } else if (selection === '' && placeHolder !== '') {
      block = openWith + placeHolder + closeWith;
    } else {
      string = string || selection;
      var lines = (_wrap_setLastFunctionCall("jquery.markitup.js",168,5770,5794,selection.split,false,false) || _wrap_popCallStack(selection.split(/\r?\n/))), blocks = [];
      for (var l = 0; l < lines.length; l++) {
        line = lines[l];
        var trailingSpaces;
        if (trailingSpaces = (_wrap_setLastFunctionCall("jquery.markitup.js",172,5938,5955,line.match,false,false) || _wrap_popCallStack(line.match(/ *$/)))) {
(_wrap_setLastFunctionCall("jquery.markitup.js",173,5969,6046,blocks.push,false,false) || _wrap_popCallStack(          blocks.push(openWith + (_wrap_setLastFunctionCall("jquery.markitup.js",173,5992,6016,line.replace,false,false) || _wrap_popCallStack(line.replace(/ *$/g, ''))) + closeWith + trailingSpaces)));
        } else {
(_wrap_setLastFunctionCall("jquery.markitup.js",175,6075,6115,blocks.push,false,false) || _wrap_popCallStack(          blocks.push(openWith + line + closeWith)));
        }
      }
      block = (_wrap_setLastFunctionCall("jquery.markitup.js",178,6149,6166,blocks.join,false,false) || _wrap_popCallStack(blocks.join("\n")));
    }
    block = openBlockWith + block + closeBlockWith;
    return {block: block, openWith: openWith, replaceWith: replaceWith, placeHolder: placeHolder, closeWith: closeWith};
  }
  function markup(button) {
_wrap_addFunctionToMap('jquery.markitup.js', 183, 6353,9003, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var len, j, n, i;
    hash = clicked = button;
(_wrap_setLastFunctionCall("jquery.markitup.js",186,6434,6439,get,false,false) || _wrap_popCallStack(    get()));
(_wrap_setLastFunctionCall("jquery.markitup.js",187,6445,6625,$.extend,false,false) || _wrap_popCallStack(    $.extend(hash, {line: "", root: options.root, textarea: textarea, selection: (selection || ''), caretPosition: caretPosition, ctrlKey: ctrlKey, shiftKey: shiftKey, altKey: altKey})));
(_wrap_setLastFunctionCall("jquery.markitup.js",188,6631,6660,prepare,false,false) || _wrap_popCallStack(    prepare(options.beforeInsert)));
(_wrap_setLastFunctionCall("jquery.markitup.js",189,6666,6695,prepare,false,false) || _wrap_popCallStack(    prepare(clicked.beforeInsert)));
    if ((ctrlKey === true && shiftKey === true) || button.multiline === true) {
(_wrap_setLastFunctionCall("jquery.markitup.js",191,6783,6817,prepare,false,false) || _wrap_popCallStack(      prepare(clicked.beforeMultiInsert)));
    }
(_wrap_setLastFunctionCall("jquery.markitup.js",193,6829,6854,$.extend,false,false) || _wrap_popCallStack(    $.extend(hash, {line: 1})));
    if ((ctrlKey === true && shiftKey === true)) {
      lines = (_wrap_setLastFunctionCall("jquery.markitup.js",195,6921,6945,selection.split,false,false) || _wrap_popCallStack(selection.split(/\r?\n/)));
      for (j = 0 , n = lines.length , i = 0; i < n; i++) {
        if ((_wrap_setLastFunctionCall("jquery.markitup.js",197,7018,7034,$.trim,false,false) || _wrap_popCallStack($.trim(lines[i]))) !== '') {
(_wrap_setLastFunctionCall("jquery.markitup.js",198,7055,7103,$.extend,false,false) || _wrap_popCallStack(          $.extend(hash, {line: ++j, selection: lines[i]})));
          lines[i] = (_wrap_setLastFunctionCall("jquery.markitup.js",199,7126,7141,build,false,false) || _wrap_popCallStack(build(lines[i]))).block;
        } else {
          lines[i] = "";
        }
      }
      string = {block: (_wrap_setLastFunctionCall("jquery.markitup.js",204,7232,7248,lines.join,false,false) || _wrap_popCallStack(lines.join('\n')))};
      start = caretPosition;
      len = string.block.length + (($.browser.opera) ? n - 1 : 0);
    } else if (ctrlKey === true) {
      string = (_wrap_setLastFunctionCall("jquery.markitup.js",208,7397,7413,build,false,false) || _wrap_popCallStack(build(selection)));
      start = caretPosition + string.openWith.length;
      len = string.block.length - string.openWith.length - string.closeWith.length;
      len = len - ((_wrap_setLastFunctionCall("jquery.markitup.js",211,7572,7596,string.block.match,false,false) || _wrap_popCallStack(string.block.match(/ $/))) ? 1 : 0);
      len -= (_wrap_setLastFunctionCall("jquery.markitup.js",212,7620,7642,fixIeBug,false,false) || _wrap_popCallStack(fixIeBug(string.block)));
    } else if (shiftKey === true) {
      string = (_wrap_setLastFunctionCall("jquery.markitup.js",214,7695,7711,build,false,false) || _wrap_popCallStack(build(selection)));
      start = caretPosition;
      len = string.block.length;
      len -= (_wrap_setLastFunctionCall("jquery.markitup.js",217,7788,7810,fixIeBug,false,false) || _wrap_popCallStack(fixIeBug(string.block)));
    } else {
      string = (_wrap_setLastFunctionCall("jquery.markitup.js",219,7840,7856,build,false,false) || _wrap_popCallStack(build(selection)));
      start = caretPosition + string.block.length;
      len = 0;
      start -= (_wrap_setLastFunctionCall("jquery.markitup.js",222,7939,7961,fixIeBug,false,false) || _wrap_popCallStack(fixIeBug(string.block)));
    }
    if ((selection === '' && string.replaceWith === '')) {
      caretOffset += (_wrap_setLastFunctionCall("jquery.markitup.js",225,8049,8074,fixOperaBug,false,false) || _wrap_popCallStack(fixOperaBug(string.block)));
      start = caretPosition + string.openWith.length;
      len = string.block.length - string.openWith.length - string.closeWith.length;
      caretOffset = (_wrap_setLastFunctionCall("jquery.markitup.js",228,8234,8284,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",228,8234,8242,$$.val,false,false) || _wrap_popCallStack($$.val())).substring(caretPosition, (_wrap_setLastFunctionCall("jquery.markitup.js",228,8268,8276,$$.val,false,false) || _wrap_popCallStack($$.val())).length))).length;
      caretOffset -= (_wrap_setLastFunctionCall("jquery.markitup.js",229,8314,8363,fixOperaBug,false,false) || _wrap_popCallStack(fixOperaBug((_wrap_setLastFunctionCall("jquery.markitup.js",229,8326,8362,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",229,8326,8334,$$.val,false,false) || _wrap_popCallStack($$.val())).substring(0, caretPosition))))));
    }
(_wrap_setLastFunctionCall("jquery.markitup.js",231,8375,8453,$.extend,false,false) || _wrap_popCallStack(    $.extend(hash, {caretPosition: caretPosition, scrollPosition: scrollPosition})));
    if (string.block !== selection && abort === false) {
(_wrap_setLastFunctionCall("jquery.markitup.js",233,8518,8538,insert,false,false) || _wrap_popCallStack(      insert(string.block)));
(_wrap_setLastFunctionCall("jquery.markitup.js",234,8546,8561,set,false,false) || _wrap_popCallStack(      set(start, len)));
    } else {
      caretOffset = -1;
    }
(_wrap_setLastFunctionCall("jquery.markitup.js",238,8610,8615,get,false,false) || _wrap_popCallStack(    get()));
(_wrap_setLastFunctionCall("jquery.markitup.js",239,8621,8669,$.extend,false,false) || _wrap_popCallStack(    $.extend(hash, {line: '', selection: selection})));
    if ((ctrlKey === true && shiftKey === true) || button.multiline === true) {
(_wrap_setLastFunctionCall("jquery.markitup.js",241,8757,8790,prepare,false,false) || _wrap_popCallStack(      prepare(clicked.afterMultiInsert)));
    }
(_wrap_setLastFunctionCall("jquery.markitup.js",243,8802,8830,prepare,false,false) || _wrap_popCallStack(    prepare(clicked.afterInsert)));
(_wrap_setLastFunctionCall("jquery.markitup.js",244,8836,8864,prepare,false,false) || _wrap_popCallStack(    prepare(options.afterInsert)));
    if (previewWindow && options.previewAutoRefresh) {
(_wrap_setLastFunctionCall("jquery.markitup.js",246,8927,8943,refreshPreview,false,false) || _wrap_popCallStack(      refreshPreview()));
    }
    shiftKey = altKey = ctrlKey = abort = false;
  }
  function fixOperaBug(string) {
_wrap_addFunctionToMap('jquery.markitup.js', 250, 9006,9151, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if ($.browser.opera) {
      return string.length - (_wrap_setLastFunctionCall("jquery.markitup.js",252,9093,9119,string.replace,false,false) || _wrap_popCallStack(string.replace(/\n*/g, ''))).length;
    }
    return 0;
  }
  function fixIeBug(string) {
_wrap_addFunctionToMap('jquery.markitup.js', 256, 9154,9295, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if ($.browser.msie) {
      return string.length - (_wrap_setLastFunctionCall("jquery.markitup.js",258,9237,9263,string.replace,false,false) || _wrap_popCallStack(string.replace(/\r*/g, ''))).length;
    }
    return 0;
  }
  function insert(block) {
_wrap_addFunctionToMap('jquery.markitup.js', 262, 9298,9626, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (document.selection) {
      var newSelection = (_wrap_setLastFunctionCall("jquery.markitup.js",264,9378,9410,document.selection.createRange,false,false) || _wrap_popCallStack(document.selection.createRange()));
      newSelection.text = block;
    } else {
      textarea.value = (_wrap_setLastFunctionCall("jquery.markitup.js",267,9481,9523,textarea.value.substring,false,false) || _wrap_popCallStack(textarea.value.substring(0, caretPosition))) + block + (_wrap_setLastFunctionCall("jquery.markitup.js",267,9534,9615,textarea.value.substring,false,false) || _wrap_popCallStack(textarea.value.substring(caretPosition + selection.length, textarea.value.length)));
    }
  }
  function set(start, len) {
_wrap_addFunctionToMap('jquery.markitup.js', 270, 9629,10136, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (textarea.createTextRange) {
      if ($.browser.opera && $.browser.version >= 9.5 && len == 0) {
        return false;
      }
      range = (_wrap_setLastFunctionCall("jquery.markitup.js",275,9805,9831,textarea.createTextRange,false,false) || _wrap_popCallStack(textarea.createTextRange()));
(_wrap_setLastFunctionCall("jquery.markitup.js",276,9839,9859,range.collapse,false,false) || _wrap_popCallStack(      range.collapse(true)));
(_wrap_setLastFunctionCall("jquery.markitup.js",277,9867,9902,range.moveStart,false,false) || _wrap_popCallStack(      range.moveStart('character', start)));
(_wrap_setLastFunctionCall("jquery.markitup.js",278,9910,9941,range.moveEnd,false,false) || _wrap_popCallStack(      range.moveEnd('character', len)));
(_wrap_setLastFunctionCall("jquery.markitup.js",279,9949,9963,range.select,false,false) || _wrap_popCallStack(      range.select()));
    } else if (textarea.setSelectionRange) {
(_wrap_setLastFunctionCall("jquery.markitup.js",281,10016,10062,textarea.setSelectionRange,false,false) || _wrap_popCallStack(      textarea.setSelectionRange(start, start + len)));
    }
    textarea.scrollTop = scrollPosition;
(_wrap_setLastFunctionCall("jquery.markitup.js",284,10115,10131,textarea.focus,false,false) || _wrap_popCallStack(    textarea.focus()));
  }
  function get() {
_wrap_addFunctionToMap('jquery.markitup.js', 286, 10139,10863, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",287,10160,10176,textarea.focus,false,false) || _wrap_popCallStack(    textarea.focus()));
    scrollPosition = textarea.scrollTop;
    if (document.selection) {
      selection = (_wrap_setLastFunctionCall("jquery.markitup.js",290,10267,10299,document.selection.createRange,false,false) || _wrap_popCallStack(document.selection.createRange())).text;
      if ($.browser.msie) {
        var range = (_wrap_setLastFunctionCall("jquery.markitup.js",292,10354,10386,document.selection.createRange,false,false) || _wrap_popCallStack(document.selection.createRange())), rangeCopy = (_wrap_setLastFunctionCall("jquery.markitup.js",292,10400,10417,range.duplicate,false,false) || _wrap_popCallStack(range.duplicate()));
(_wrap_setLastFunctionCall("jquery.markitup.js",293,10427,10464,rangeCopy.moveToElementText,false,false) || _wrap_popCallStack(        rangeCopy.moveToElementText(textarea)));
        caretPosition = -1;
        while ((_wrap_setLastFunctionCall("jquery.markitup.js",295,10509,10533,rangeCopy.inRange,false,false) || _wrap_popCallStack(rangeCopy.inRange(range)))) {
(_wrap_setLastFunctionCall("jquery.markitup.js",296,10547,10579,rangeCopy.moveStart,false,false) || _wrap_popCallStack(          rangeCopy.moveStart('character')));
          caretPosition++;
        }
      } else {
        caretPosition = textarea.selectionStart;
      }
    } else {
      caretPosition = textarea.selectionStart;
      selection = (_wrap_setLastFunctionCall("jquery.markitup.js",304,10768,10830,textarea.value.substring,false,false) || _wrap_popCallStack(textarea.value.substring(caretPosition, textarea.selectionEnd)));
    }
    return selection;
  }
  function preview() {
_wrap_addFunctionToMap('jquery.markitup.js', 308, 10866,11777, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (!previewWindow || previewWindow.closed) {
      if (options.previewInWindow) {
        previewWindow = (_wrap_setLastFunctionCall("jquery.markitup.js",311,10998,11049,window.open,false,false) || _wrap_popCallStack(window.open('', 'preview', options.previewInWindow)));
(_wrap_setLastFunctionCall("jquery.markitup.js",312,11059,11116,null,false,false) || _wrap_popCallStack(        (_wrap_setLastFunctionCall("jquery.markitup.js",312,11059,11068,$,false,false) || _wrap_popCallStack($(window))).unload(function() {
_wrap_addFunctionToMap('jquery.markitup.js', 312, 11076,11115, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",313,11091,11112,previewWindow.close,false,false) || _wrap_popCallStack(  previewWindow.close()));
})));
      } else {
        iFrame = (_wrap_setLastFunctionCall("jquery.markitup.js",316,11150,11201,$,false,false) || _wrap_popCallStack($('<iframe class="markItUpPreviewFrame"></iframe>')));
        if (options.previewPosition == 'after') {
(_wrap_setLastFunctionCall("jquery.markitup.js",318,11263,11289,iFrame.insertAfter,false,false) || _wrap_popCallStack(          iFrame.insertAfter(footer)));
        } else {
(_wrap_setLastFunctionCall("jquery.markitup.js",320,11318,11345,iFrame.insertBefore,false,false) || _wrap_popCallStack(          iFrame.insertBefore(header)));
        }
        previewWindow = iFrame[iFrame.length - 1].contentWindow || frame[iFrame.length - 1];
      }
    } else if (altKey === true) {
      if (iFrame) {
(_wrap_setLastFunctionCall("jquery.markitup.js",326,11520,11535,iFrame.remove,false,false) || _wrap_popCallStack(        iFrame.remove()));
      } else {
(_wrap_setLastFunctionCall("jquery.markitup.js",328,11560,11581,previewWindow.close,false,false) || _wrap_popCallStack(        previewWindow.close()));
      }
      previewWindow = iFrame = false;
    }
    if (!options.previewAutoRefresh) {
(_wrap_setLastFunctionCall("jquery.markitup.js",333,11680,11696,refreshPreview,false,false) || _wrap_popCallStack(      refreshPreview()));
    }
    if (options.previewInWindow) {
(_wrap_setLastFunctionCall("jquery.markitup.js",336,11745,11766,previewWindow.focus,false,false) || _wrap_popCallStack(      previewWindow.focus()));
    }
  }
  function refreshPreview() {
_wrap_addFunctionToMap('jquery.markitup.js', 339, 11780,11832, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",340,11812,11827,renderPreview,false,false) || _wrap_popCallStack(    renderPreview()));
  }
  function renderPreview() {
_wrap_addFunctionToMap('jquery.markitup.js', 342, 11835,12590, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var phtml;
    if (options.previewParser && typeof options.previewParser === 'function') {
      var data = (_wrap_setLastFunctionCall("jquery.markitup.js",345,11974,12005,options.previewParser,false,false) || _wrap_popCallStack(options.previewParser((_wrap_setLastFunctionCall("jquery.markitup.js",345,11996,12004,$$.val,false,false) || _wrap_popCallStack($$.val())))));
(_wrap_setLastFunctionCall("jquery.markitup.js",346,12013,12046,writeInPreview,false,false) || _wrap_popCallStack(      writeInPreview((_wrap_setLastFunctionCall("jquery.markitup.js",346,12028,12045,localize,false,false) || _wrap_popCallStack(localize(data, 1))))));
    } else if (options.previewParserPath !== '') {
(_wrap_setLastFunctionCall("jquery.markitup.js",348,12105,12327,$.ajax,false,false) || _wrap_popCallStack(      $.ajax({type: 'POST', dataType: 'text', global: false, url: options.previewParserPath, data: options.previewParserVar + '=' + (_wrap_setLastFunctionCall("jquery.markitup.js",348,12231,12259,encodeURIComponent,false,false) || _wrap_popCallStack(encodeURIComponent((_wrap_setLastFunctionCall("jquery.markitup.js",348,12250,12258,$$.val,false,false) || _wrap_popCallStack($$.val()))))), success: function(data) {
_wrap_addFunctionToMap('jquery.markitup.js', 348, 12270,12325, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",349,12289,12322,writeInPreview,false,false) || _wrap_popCallStack(  writeInPreview((_wrap_setLastFunctionCall("jquery.markitup.js",349,12304,12321,localize,false,false) || _wrap_popCallStack(localize(data, 1))))));
}})));
    } else {
      if (!template) {
(_wrap_setLastFunctionCall("jquery.markitup.js",353,12373,12553,$.ajax,false,false) || _wrap_popCallStack(        $.ajax({url: options.previewTemplatePath, dataType: 'text', global: false, success: function(data) {
_wrap_addFunctionToMap('jquery.markitup.js', 353, 12457,12551, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",354,12476,12548,writeInPreview,false,false) || _wrap_popCallStack(  writeInPreview((_wrap_setLastFunctionCall("jquery.markitup.js",354,12491,12547,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",354,12491,12508,localize,false,false) || _wrap_popCallStack(localize(data, 1))).replace(/<!-- content -->/g, (_wrap_setLastFunctionCall("jquery.markitup.js",354,12538,12546,$$.val,false,false) || _wrap_popCallStack($$.val()))))))));
}})));
      }
    }
    return false;
  }
  function writeInPreview(data) {
_wrap_addFunctionToMap('jquery.markitup.js', 360, 12593,12958, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (previewWindow.document) {
      try {
        sp = previewWindow.document.documentElement.scrollTop;
      }      catch (e) {
  sp = 0;
}
(_wrap_setLastFunctionCall("jquery.markitup.js",367,12777,12806,previewWindow.document.open,false,false) || _wrap_popCallStack(      previewWindow.document.open()));
(_wrap_setLastFunctionCall("jquery.markitup.js",368,12814,12848,previewWindow.document.write,false,false) || _wrap_popCallStack(      previewWindow.document.write(data)));
(_wrap_setLastFunctionCall("jquery.markitup.js",369,12856,12886,previewWindow.document.close,false,false) || _wrap_popCallStack(      previewWindow.document.close()));
      previewWindow.document.documentElement.scrollTop = sp;
    }
  }
  function keyPressed(e) {
_wrap_addFunctionToMap('jquery.markitup.js', 373, 12961,14357, (typeof arguments === 'object' ? arguments.callee.caller : null));

    shiftKey = e.shiftKey;
    altKey = e.altKey;
    ctrlKey = (!(e.altKey && e.ctrlKey)) ? (e.ctrlKey || e.metaKey) : false;
    if (e.type === 'keydown') {
      if (ctrlKey === true) {
        li = (_wrap_setLastFunctionCall("jquery.markitup.js",379,13188,13267,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",379,13188,13254,$,false,false) || _wrap_popCallStack($('a[accesskey="' + (_wrap_setLastFunctionCall("jquery.markitup.js",379,13208,13238,String.fromCharCode,false,false) || _wrap_popCallStack(String.fromCharCode(e.keyCode))) + '"]', header))).parent('li')));
        if (li.length !== 0) {
          ctrlKey = false;
(_wrap_setLastFunctionCall("jquery.markitup.js",382,13337,13398,setTimeout,false,false) || _wrap_popCallStack(          setTimeout(function() {
_wrap_addFunctionToMap('jquery.markitup.js', 382, 13348,13394, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",383,13363,13391,li.triggerHandler,false,false) || _wrap_popCallStack(  li.triggerHandler('mouseup')));
}, 1)));
          return false;
        }
      }
      if (e.keyCode === 13 || e.keyCode === 10) {
        if (ctrlKey === true) {
          ctrlKey = false;
(_wrap_setLastFunctionCall("jquery.markitup.js",391,13561,13588,markup,false,false) || _wrap_popCallStack(          markup(options.onCtrlEnter)));
          return options.onCtrlEnter.keepDefault;
        } else if (shiftKey === true) {
          shiftKey = false;
(_wrap_setLastFunctionCall("jquery.markitup.js",395,13718,13746,markup,false,false) || _wrap_popCallStack(          markup(options.onShiftEnter)));
          return options.onShiftEnter.keepDefault;
        } else {
(_wrap_setLastFunctionCall("jquery.markitup.js",398,13826,13849,markup,false,false) || _wrap_popCallStack(          markup(options.onEnter)));
          return options.onEnter.keepDefault;
        }
      }
      if (e.keyCode === 9) {
        if (shiftKey == true || ctrlKey == true || altKey == true) {
          return false;
        }
        if (caretOffset !== -1) {
(_wrap_setLastFunctionCall("jquery.markitup.js",407,14091,14096,get,false,false) || _wrap_popCallStack(          get()));
          caretOffset = (_wrap_setLastFunctionCall("jquery.markitup.js",408,14122,14130,$$.val,false,false) || _wrap_popCallStack($$.val())).length - caretOffset;
(_wrap_setLastFunctionCall("jquery.markitup.js",409,14163,14182,set,false,false) || _wrap_popCallStack(          set(caretOffset, 0)));
          caretOffset = -1;
          return false;
        } else {
(_wrap_setLastFunctionCall("jquery.markitup.js",413,14263,14284,markup,false,false) || _wrap_popCallStack(          markup(options.onTab)));
          return options.onTab.keepDefault;
        }
      }
    }
  }
(_wrap_setLastFunctionCall("jquery.markitup.js",419,14360,14366,init,false,false) || _wrap_popCallStack(  init()));
})));
};
  $.fn.markItUpRemove = function() {
_wrap_addFunctionToMap('jquery.markitup.js', 422, 14399,14581, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("jquery.markitup.js",423,14421,14578,this.each,false,false) || _wrap_popCallStack(this.each(function() {
_wrap_addFunctionToMap('jquery.markitup.js', 423, 14431,14577, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var $$ = (_wrap_setLastFunctionCall("jquery.markitup.js",424,14455,14501,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",424,14455,14471,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",424,14455,14462,$,false,false) || _wrap_popCallStack($(this))).unbind())).removeClass('markItUpEditor')));
(_wrap_setLastFunctionCall("jquery.markitup.js",425,14505,14574,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("jquery.markitup.js",425,14505,14558,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",425,14505,14544,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",425,14505,14521,$$.parent,false,false) || _wrap_popCallStack($$.parent('div'))).parent('div.markItUp'))).parent('div'))).replaceWith($$)));
})));
};
  $.markItUp = function(settings) {
_wrap_addFunctionToMap('jquery.markitup.js', 428, 14598,14887, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var options = {target: false};
(_wrap_setLastFunctionCall("jquery.markitup.js",430,14654,14681,$.extend,false,false) || _wrap_popCallStack(  $.extend(options, settings)));
  if (options.target) {
    return (_wrap_setLastFunctionCall("jquery.markitup.js",432,14718,14818,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("jquery.markitup.js",432,14718,14735,$,false,false) || _wrap_popCallStack($(options.target))).each(function() {
_wrap_addFunctionToMap('jquery.markitup.js', 432, 14741,14817, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",433,14756,14771,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("jquery.markitup.js",433,14756,14763,$,false,false) || _wrap_popCallStack($(this))).focus()));
(_wrap_setLastFunctionCall("jquery.markitup.js",434,14775,14814,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("jquery.markitup.js",434,14775,14782,$,false,false) || _wrap_popCallStack($(this))).trigger('insertion', [options])));
})));
  } else {
(_wrap_setLastFunctionCall("jquery.markitup.js",437,14835,14880,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("jquery.markitup.js",437,14835,14848,$,false,false) || _wrap_popCallStack($('textarea'))).trigger('insertion', [options])));
  }
};
})(jQuery)));
