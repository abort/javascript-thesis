_wrap_staticMeasuredFunctions['jquery.markitup.js'] = 45;
_wrap_staticMeasuredCalls['jquery.markitup.js'] =215;
(_wrap_setLastFunctionCall("jquery.markitup.js",27,1579,18298) || (function($) {
_wrap_addFunctionToMap('jquery.markitup.js', 27, 1579,18289, (typeof arguments === 'object' ? arguments.callee.caller : null));

  $.fn.markItUp = function(settings, extraSettings) {
_wrap_addFunctionToMap('jquery.markitup.js', 28, 1610,17754, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var options, ctrlKey, shiftKey, altKey;
  ctrlKey = shiftKey = altKey = false;
  options = {id: '', nameSpace: '', root: '', previewInWindow: '', previewAutoRefresh: true, previewPosition: 'after', previewTemplatePath: '~/templates/preview.html', previewParser: false, previewParserPath: '', previewParserVar: 'data', resizeHandle: true, beforeInsert: '', afterInsert: '', onEnter: {}, onShiftEnter: {}, onCtrlEnter: {}, onTab: {}, markupSet: [{}]};
(_wrap_setLastFunctionCall("jquery.markitup.js",51,2302,2344) ||   $.extend(options, settings, extraSettings));
  if (!options.root) {
(_wrap_setLastFunctionCall("jquery.markitup.js",55,2401,2591) ||     (_wrap_setLastFunctionCall("jquery.markitup.js",55,2401,2412) || $('script')).each(function(a, tag) {
_wrap_addFunctionToMap('jquery.markitup.js', 55, 2418,2590, (typeof arguments === 'object' ? arguments.callee.caller : null));

  miuScript = (_wrap_setLastFunctionCall("jquery.markitup.js",56,2453,2514) || (_wrap_setLastFunctionCall("jquery.markitup.js",56,2453,2466) || (_wrap_setLastFunctionCall("jquery.markitup.js",56,2453,2459) || $(tag)).get(0)).src.match(/(.*)jquery\.markitup(\.pack)?\.js$/));
  if (miuScript !== null) {
    options.root = miuScript[1];
  }
}));
  }
  return (_wrap_setLastFunctionCall("jquery.markitup.js",63,2607,17750) || this.each(function() {
_wrap_addFunctionToMap('jquery.markitup.js', 63, 2617,17749, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var $$, textarea, levels, scrollPosition, caretPosition, caretOffset, clicked, hash, header, footer, previewWindow, template, iFrame, abort;
  $$ = (_wrap_setLastFunctionCall("jquery.markitup.js",66,2786,2793) || $(this));
  textarea = this;
  levels = [];
  abort = false;
  scrollPosition = caretPosition = 0;
  caretOffset = -1;
  options.previewParserPath = (_wrap_setLastFunctionCall("jquery.markitup.js",73,2941,2976) || localize(options.previewParserPath));
  options.previewTemplatePath = (_wrap_setLastFunctionCall("jquery.markitup.js",74,3011,3048) || localize(options.previewTemplatePath));
  function localize(data, inText) {
_wrap_addFunctionToMap('jquery.markitup.js', 77, 3090,3259, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (inText) {
      return (_wrap_setLastFunctionCall("jquery.markitup.js",79,3155,3199) || data.replace(/("|')~\//g, "$1" + options.root));
    }
    return (_wrap_setLastFunctionCall("jquery.markitup.js",81,3219,3253) || data.replace(/^~\//, options.root));
  }
  function init() {
_wrap_addFunctionToMap('jquery.markitup.js', 85, 3292,5186, (typeof arguments === 'object' ? arguments.callee.caller : null));

    id = '';
    nameSpace = '';
    if (options.id) {
      id = 'id="' + options.id + '"';
    } else if ((_wrap_setLastFunctionCall("jquery.markitup.js",89,3409,3422) || $$.attr("id"))) {
      id = 'id="markItUp' + ((_wrap_setLastFunctionCall("jquery.markitup.js",90,3452,3492) || (_wrap_setLastFunctionCall("jquery.markitup.js",90,3452,3478) || (_wrap_setLastFunctionCall("jquery.markitup.js",90,3452,3465) || $$.attr("id")).substr(0, 1)).toUpperCase())) + ((_wrap_setLastFunctionCall("jquery.markitup.js",90,3495,3518) || (_wrap_setLastFunctionCall("jquery.markitup.js",90,3495,3508) || $$.attr("id")).substr(1))) + '"';
    }
    if (options.nameSpace) {
      nameSpace = 'class="' + options.nameSpace + '"';
    }
(_wrap_setLastFunctionCall("jquery.markitup.js",96,3621,3657) ||     $$.wrap('<div ' + nameSpace + '></div>'));
(_wrap_setLastFunctionCall("jquery.markitup.js",97,3663,3709) ||     $$.wrap('<div ' + id + ' class="markItUp"></div>'));
(_wrap_setLastFunctionCall("jquery.markitup.js",98,3715,3763) ||     $$.wrap('<div class="markItUpContainer"></div>'));
(_wrap_setLastFunctionCall("jquery.markitup.js",99,3769,3798) ||     $$.addClass("markItUpEditor"));
    header = (_wrap_setLastFunctionCall("jquery.markitup.js",102,3856,3912) || (_wrap_setLastFunctionCall("jquery.markitup.js",102,3856,3895) || $('<div class="markItUpHeader"></div>')).insertBefore($$));
(_wrap_setLastFunctionCall("jquery.markitup.js",103,3918,3966) ||     (_wrap_setLastFunctionCall("jquery.markitup.js",103,3918,3949) || $((_wrap_setLastFunctionCall("jquery.markitup.js",103,3920,3948) || dropMenus(options.markupSet)))).appendTo(header));
    footer = (_wrap_setLastFunctionCall("jquery.markitup.js",106,4023,4078) || (_wrap_setLastFunctionCall("jquery.markitup.js",106,4023,4062) || $('<div class="markItUpFooter"></div>')).insertAfter($$));
    if (options.resizeHandle === true && $.browser.safari !== true) {
      resizeHandle = (_wrap_setLastFunctionCall("jquery.markitup.js",112,4215,4730) || (_wrap_setLastFunctionCall("jquery.markitup.js",111,4215,4283) || (_wrap_setLastFunctionCall("jquery.markitup.js",110,4215,4260) || $('<div class="markItUpResizeHandle"></div>')).insertAfter($$)).bind("mousedown", function(e) {
_wrap_addFunctionToMap('jquery.markitup.js', 112, 4309,4729, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var h = (_wrap_setLastFunctionCall("jquery.markitup.js",113,4338,4349) || $$.height()), y = e.clientY, mouseMove, mouseUp;
  mouseMove = function(e) {
_wrap_addFunctionToMap('jquery.markitup.js', 114, 4405,4509, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",115,4427,4477) ||   $$.css("height", (_wrap_setLastFunctionCall("jquery.markitup.js",115,4444,4471) || Math.max(20, e.clientY + h - y)) + "px"));
  return false;
};
  mouseUp = function(e) {
_wrap_addFunctionToMap('jquery.markitup.js', 118, 4528,4649, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",119,4550,4617) ||   (_wrap_setLastFunctionCall("jquery.markitup.js",119,4550,4590) || (_wrap_setLastFunctionCall("jquery.markitup.js",119,4550,4559) || $("html")).unbind("mousemove", mouseMove)).unbind("mouseup", mouseUp));
  return false;
};
(_wrap_setLastFunctionCall("jquery.markitup.js",122,4658,4721) ||   (_wrap_setLastFunctionCall("jquery.markitup.js",122,4658,4696) || (_wrap_setLastFunctionCall("jquery.markitup.js",122,4658,4667) || $("html")).bind("mousemove", mouseMove)).bind("mouseup", mouseUp));
}));
(_wrap_setLastFunctionCall("jquery.markitup.js",124,4737,4764) ||       footer.append(resizeHandle));
    }
(_wrap_setLastFunctionCall("jquery.markitup.js",128,4802,4842) ||     (_wrap_setLastFunctionCall("jquery.markitup.js",128,4802,4824) || $$.keydown(keyPressed)).keyup(keyPressed));
(_wrap_setLastFunctionCall("jquery.markitup.js",131,4898,5082) ||     $$.bind("insertion", function(e, settings) {
_wrap_addFunctionToMap('jquery.markitup.js', 131, 4919,5081, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (settings.target !== false) {
(_wrap_setLastFunctionCall("jquery.markitup.js",133,4987,4992) ||     get());
  }
  if (textarea === $.markItUp.focused) {
(_wrap_setLastFunctionCall("jquery.markitup.js",136,5051,5067) ||     markup(settings));
  }
}));
(_wrap_setLastFunctionCall("jquery.markitup.js",141,5120,5180) ||     $$.focus(function() {
_wrap_addFunctionToMap('jquery.markitup.js', 141, 5129,5179, (typeof arguments === 'object' ? arguments.callee.caller : null));

  $.markItUp.focused = this;
}));
  }
  function dropMenus(markupSet) {
_wrap_addFunctionToMap('jquery.markitup.js', 147, 5252,6881, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var ul = (_wrap_setLastFunctionCall("jquery.markitup.js",148,5297,5311) || $('<ul></ul>')), i = 0;
(_wrap_setLastFunctionCall("jquery.markitup.js",149,5324,5370) ||     (_wrap_setLastFunctionCall("jquery.markitup.js",149,5324,5346) || $('li:hover > ul', ul)).css('display', 'block'));
(_wrap_setLastFunctionCall("jquery.markitup.js",150,5376,6841) ||     $.each(markupSet, function() {
_wrap_addFunctionToMap('jquery.markitup.js', 150, 5394,6840, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var button = this, t = '', title, li, j;
  title = (button.key) ? (button.name || '') + ' [Ctrl+' + button.key + ']' : (button.name || '');
  key = (button.key) ? 'accesskey="' + button.key + '"' : '';
  if (button.separator) {
    li = (_wrap_setLastFunctionCall("jquery.markitup.js",155,5648,5727) || (_wrap_setLastFunctionCall("jquery.markitup.js",155,5648,5714) || $('<li class="markItUpSeparator">' + (button.separator || '') + '</li>')).appendTo(ul));
  } else {
    i++;
    for (j = levels.length - 1; j >= 0; j--) {
      t += levels[j] + "-";
    }
    li = (_wrap_setLastFunctionCall("jquery.markitup.js",183,5848,6688) || (_wrap_setLastFunctionCall("jquery.markitup.js",174,5848,6675) || (_wrap_setLastFunctionCall("jquery.markitup.js",168,5848,6412) || (_wrap_setLastFunctionCall("jquery.markitup.js",166,5848,6245) || (_wrap_setLastFunctionCall("jquery.markitup.js",164,5848,6168) || (_wrap_setLastFunctionCall("jquery.markitup.js",162,5848,6119) || (_wrap_setLastFunctionCall("jquery.markitup.js",161,5848,5998) || $('<li class="markItUpButton markItUpButton' + t + (i) + ' ' + (button.className || '') + '"><a href="" ' + key + ' title="' + title + '">' + (button.name || '') + '</a></li>')).bind("contextmenu", function() {
_wrap_addFunctionToMap('jquery.markitup.js', 162, 6026,6118, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return false;
})).click(function() {
_wrap_addFunctionToMap('jquery.markitup.js', 164, 6126,6167, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return false;
})).bind("focusin", function() {
_wrap_addFunctionToMap('jquery.markitup.js', 166, 6185,6244, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",167,6225,6235) ||   $$.focus());
})).mouseup(function() {
_wrap_addFunctionToMap('jquery.markitup.js', 168, 6254,6411, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (button.call) {
(_wrap_setLastFunctionCall("jquery.markitup.js",170,6301,6320) ||     (_wrap_setLastFunctionCall("jquery.markitup.js",170,6301,6318) || eval(button.call))());
  }
(_wrap_setLastFunctionCall("jquery.markitup.js",172,6338,6381) ||   setTimeout(function() {
_wrap_addFunctionToMap('jquery.markitup.js', 172, 6349,6378, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",172,6362,6376) ||   markup(button));
}, 1));
  return false;
})).hover(function() {
_wrap_addFunctionToMap('jquery.markitup.js', 174, 6419,6612, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",175,6440,6462) ||   (_wrap_setLastFunctionCall("jquery.markitup.js",175,6440,6455) || $('> ul', this)).show());
(_wrap_setLastFunctionCall("jquery.markitup.js",176,6472,6602) ||   (_wrap_setLastFunctionCall("jquery.markitup.js",176,6472,6483) || $(document)).one('click', function() {
_wrap_addFunctionToMap('jquery.markitup.js', 176, 6497,6592, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",177,6555,6580) ||   (_wrap_setLastFunctionCall("jquery.markitup.js",177,6555,6573) || $('ul ul', header)).hide());
}));
}, function() {
_wrap_addFunctionToMap('jquery.markitup.js', 180, 6614,6667, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",181,6635,6657) ||   (_wrap_setLastFunctionCall("jquery.markitup.js",181,6635,6650) || $('> ul', this)).hide());
})).appendTo(ul));
    if (button.dropMenu) {
(_wrap_setLastFunctionCall("jquery.markitup.js",185,6726,6740) ||       levels.push(i));
(_wrap_setLastFunctionCall("jquery.markitup.js",186,6749,6818) ||       (_wrap_setLastFunctionCall("jquery.markitup.js",186,6749,6783) || (_wrap_setLastFunctionCall("jquery.markitup.js",186,6749,6754) || $(li)).addClass('markItUpDropMenu')).append((_wrap_setLastFunctionCall("jquery.markitup.js",186,6791,6817) || dropMenus(button.dropMenu))));
    }
  }
}));
(_wrap_setLastFunctionCall("jquery.markitup.js",190,6848,6860) ||     levels.pop());
    return ul;
  }
  function magicMarkups(string) {
_wrap_addFunctionToMap('jquery.markitup.js', 195, 6910,7678, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (string) {
      string = (_wrap_setLastFunctionCall("jquery.markitup.js",197,6974,6991) || string.toString());
      string = (_wrap_setLastFunctionCall("jquery.markitup.js",198,7007,7272) || string.replace(/\(\!\(([\s\S]*?)\)\!\)/g, function(x, a) {
_wrap_addFunctionToMap('jquery.markitup.js', 199, 7055,7265, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var b = (_wrap_setLastFunctionCall("jquery.markitup.js",200,7087,7101) || a.split('|!|'));
  if (altKey === true) {
    return (b[1] !== undefined) ? b[1] : b[0];
  } else {
    return (b[1] === undefined) ? "" : b[0];
  }
}));
      string = (_wrap_setLastFunctionCall("jquery.markitup.js",209,7331,7631) || string.replace(/\[\!\[([\s\S]*?)\]\!\]/g, function(x, a) {
_wrap_addFunctionToMap('jquery.markitup.js', 210, 7379,7624, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var b = (_wrap_setLastFunctionCall("jquery.markitup.js",211,7411,7425) || a.split(':!:'));
  if (abort === true) {
    return false;
  }
  value = (_wrap_setLastFunctionCall("jquery.markitup.js",215,7502,7534) || prompt(b[0], (b[1]) ? b[1] : ''));
  if (value === null) {
    abort = true;
  }
  return value;
}));
      return string;
    }
    return "";
  }
  function prepare(action) {
_wrap_addFunctionToMap('jquery.markitup.js', 228, 7704,7834, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if ((_wrap_setLastFunctionCall("jquery.markitup.js",229,7739,7759) || $.isFunction(action))) {
      action = (_wrap_setLastFunctionCall("jquery.markitup.js",230,7777,7789) || action(hash));
    }
    return (_wrap_setLastFunctionCall("jquery.markitup.js",232,7808,7828) || magicMarkups(action));
  }
  function build(string) {
_wrap_addFunctionToMap('jquery.markitup.js', 236, 7867,9123, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var openWith = (_wrap_setLastFunctionCall("jquery.markitup.js",237,7914,7939) || prepare(clicked.openWith));
    var placeHolder = (_wrap_setLastFunctionCall("jquery.markitup.js",238,7965,7993) || prepare(clicked.placeHolder));
    var replaceWith = (_wrap_setLastFunctionCall("jquery.markitup.js",239,8019,8047) || prepare(clicked.replaceWith));
    var closeWith = (_wrap_setLastFunctionCall("jquery.markitup.js",240,8072,8098) || prepare(clicked.closeWith));
    var openBlockWith = (_wrap_setLastFunctionCall("jquery.markitup.js",241,8126,8156) || prepare(clicked.openBlockWith));
    var closeBlockWith = (_wrap_setLastFunctionCall("jquery.markitup.js",242,8185,8216) || prepare(clicked.closeBlockWith));
    var multiline = clicked.multiline;
    if (replaceWith !== "") {
      block = openWith + replaceWith + closeWith;
    } else if (selection === '' && placeHolder !== '') {
      block = openWith + placeHolder + closeWith;
    } else {
      string = string || selection;
      var lines = (_wrap_setLastFunctionCall("jquery.markitup.js",252,8516,8540) || selection.split(/\r?\n/)), blocks = [];
      for (var l = 0; l < lines.length; l++) {
        line = lines[l];
        var trailingSpaces;
        if (trailingSpaces = (_wrap_setLastFunctionCall("jquery.markitup.js",257,8681,8698) || line.match(/ *$/))) {
(_wrap_setLastFunctionCall("jquery.markitup.js",258,8709,8786) ||           blocks.push(openWith + (_wrap_setLastFunctionCall("jquery.markitup.js",258,8732,8756) || line.replace(/ *$/g, '')) + closeWith + trailingSpaces));
        } else {
(_wrap_setLastFunctionCall("jquery.markitup.js",260,8810,8850) ||           blocks.push(openWith + line + closeWith));
        }
      }
      block = (_wrap_setLastFunctionCall("jquery.markitup.js",264,8886,8903) || blocks.join("\n"));
    }
    block = openBlockWith + block + closeBlockWith;
    return {block: block, openWith: openWith, replaceWith: replaceWith, placeHolder: placeHolder, closeWith: closeWith};
  }
  function markup(button) {
_wrap_addFunctionToMap('jquery.markitup.js', 278, 9158,12007, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var len, j, n, i;
    hash = clicked = button;
(_wrap_setLastFunctionCall("jquery.markitup.js",281,9239,9244) ||     get());
(_wrap_setLastFunctionCall("jquery.markitup.js",282,9250,9507) ||     $.extend(hash, {line: "", root: options.root, textarea: textarea, selection: (selection || ''), caretPosition: caretPosition, ctrlKey: ctrlKey, shiftKey: shiftKey, altKey: altKey}));
(_wrap_setLastFunctionCall("jquery.markitup.js",293,9547,9576) ||     prepare(options.beforeInsert));
(_wrap_setLastFunctionCall("jquery.markitup.js",294,9582,9611) ||     prepare(clicked.beforeInsert));
    if ((ctrlKey === true && shiftKey === true) || button.multiline === true) {
(_wrap_setLastFunctionCall("jquery.markitup.js",296,9698,9732) ||       prepare(clicked.beforeMultiInsert));
    }
(_wrap_setLastFunctionCall("jquery.markitup.js",298,9747,9773) ||     $.extend(hash, {line: 1}));
    if ((ctrlKey === true && shiftKey === true)) {
      lines = (_wrap_setLastFunctionCall("jquery.markitup.js",301,9840,9864) || selection.split(/\r?\n/));
      for (j = 0 , n = lines.length , i = 0; i < n; i++) {
        if ((_wrap_setLastFunctionCall("jquery.markitup.js",303,9932,9948) || $.trim(lines[i])) !== '') {
(_wrap_setLastFunctionCall("jquery.markitup.js",304,9966,10015) ||           $.extend(hash, {line: ++j, selection: lines[i]}));
          lines[i] = (_wrap_setLastFunctionCall("jquery.markitup.js",305,10035,10050) || build(lines[i])).block;
        } else {
          lines[i] = "";
        }
      }
      string = {block: (_wrap_setLastFunctionCall("jquery.markitup.js",310,10132,10148) || lines.join('\n'))};
      start = caretPosition;
      len = string.block.length + (($.browser.opera) ? n - 1 : 0);
    } else if (ctrlKey === true) {
      string = (_wrap_setLastFunctionCall("jquery.markitup.js",314,10292,10308) || build(selection));
      start = caretPosition + string.openWith.length;
      len = string.block.length - string.openWith.length - string.closeWith.length;
      len = len - ((_wrap_setLastFunctionCall("jquery.markitup.js",317,10464,10488) || string.block.match(/ $/)) ? 1 : 0);
      len -= (_wrap_setLastFunctionCall("jquery.markitup.js",318,10511,10533) || fixIeBug(string.block));
    } else if (shiftKey === true) {
      string = (_wrap_setLastFunctionCall("jquery.markitup.js",320,10585,10601) || build(selection));
      start = caretPosition;
      len = string.block.length;
      len -= (_wrap_setLastFunctionCall("jquery.markitup.js",323,10675,10697) || fixIeBug(string.block));
    } else {
      string = (_wrap_setLastFunctionCall("jquery.markitup.js",325,10726,10742) || build(selection));
      start = caretPosition + string.block.length;
      len = 0;
      start -= (_wrap_setLastFunctionCall("jquery.markitup.js",328,10823,10845) || fixIeBug(string.block));
    }
    if ((selection === '' && string.replaceWith === '')) {
      caretOffset += (_wrap_setLastFunctionCall("jquery.markitup.js",331,10932,10957) || fixOperaBug(string.block));
      start = caretPosition + string.openWith.length;
      len = string.block.length - string.openWith.length - string.closeWith.length;
      caretOffset = (_wrap_setLastFunctionCall("jquery.markitup.js",336,11121,11172) || (_wrap_setLastFunctionCall("jquery.markitup.js",336,11121,11129) || $$.val()).substring(caretPosition, (_wrap_setLastFunctionCall("jquery.markitup.js",336,11156,11164) || $$.val()).length)).length;
      caretOffset -= (_wrap_setLastFunctionCall("jquery.markitup.js",337,11201,11250) || fixOperaBug((_wrap_setLastFunctionCall("jquery.markitup.js",337,11213,11249) || (_wrap_setLastFunctionCall("jquery.markitup.js",337,11213,11221) || $$.val()).substring(0, caretPosition))));
    }
(_wrap_setLastFunctionCall("jquery.markitup.js",339,11262,11341) ||     $.extend(hash, {caretPosition: caretPosition, scrollPosition: scrollPosition}));
    if (string.block !== selection && abort === false) {
(_wrap_setLastFunctionCall("jquery.markitup.js",342,11406,11426) ||       insert(string.block));
(_wrap_setLastFunctionCall("jquery.markitup.js",343,11433,11448) ||       set(start, len));
    } else {
      caretOffset = -1;
    }
(_wrap_setLastFunctionCall("jquery.markitup.js",347,11496,11501) ||     get());
(_wrap_setLastFunctionCall("jquery.markitup.js",349,11508,11556) ||     $.extend(hash, {line: '', selection: selection}));
    if ((ctrlKey === true && shiftKey === true) || button.multiline === true) {
(_wrap_setLastFunctionCall("jquery.markitup.js",353,11677,11710) ||       prepare(clicked.afterMultiInsert));
    }
(_wrap_setLastFunctionCall("jquery.markitup.js",355,11722,11750) ||     prepare(clicked.afterInsert));
(_wrap_setLastFunctionCall("jquery.markitup.js",356,11756,11784) ||     prepare(options.afterInsert));
    if (previewWindow && options.previewAutoRefresh) {
(_wrap_setLastFunctionCall("jquery.markitup.js",360,11880,11896) ||       refreshPreview());
    }
    shiftKey = altKey = ctrlKey = abort = false;
  }
  function fixOperaBug(string) {
_wrap_addFunctionToMap('jquery.markitup.js', 368, 12046,12191, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if ($.browser.opera) {
      return string.length - (_wrap_setLastFunctionCall("jquery.markitup.js",370,12132,12158) || string.replace(/\n*/g, '')).length;
    }
    return 0;
  }
  function fixIeBug(string) {
_wrap_addFunctionToMap('jquery.markitup.js', 375, 12226,12367, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if ($.browser.msie) {
      return string.length - (_wrap_setLastFunctionCall("jquery.markitup.js",377,12308,12334) || string.replace(/\r*/g, '')).length;
    }
    return 0;
  }
  function insert(block) {
_wrap_addFunctionToMap('jquery.markitup.js', 383, 12393,12722, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (document.selection) {
      var newSelection = (_wrap_setLastFunctionCall("jquery.markitup.js",385,12473,12505) || document.selection.createRange());
      newSelection.text = block;
    } else {
      textarea.value = (_wrap_setLastFunctionCall("jquery.markitup.js",388,12575,12617) || textarea.value.substring(0, caretPosition)) + block + (_wrap_setLastFunctionCall("jquery.markitup.js",388,12629,12710) || textarea.value.substring(caretPosition + selection.length, textarea.value.length));
    }
  }
  function set(start, len) {
_wrap_addFunctionToMap('jquery.markitup.js', 393, 12749,13295, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (textarea.createTextRange) {
      if ($.browser.opera && $.browser.version >= 9.5 && len == 0) {
        return false;
      }
      range = (_wrap_setLastFunctionCall("jquery.markitup.js",399,12966,12992) || textarea.createTextRange());
(_wrap_setLastFunctionCall("jquery.markitup.js",400,12999,13019) ||       range.collapse(true));
(_wrap_setLastFunctionCall("jquery.markitup.js",401,13026,13061) ||       range.moveStart('character', start));
(_wrap_setLastFunctionCall("jquery.markitup.js",402,13069,13100) ||       range.moveEnd('character', len));
(_wrap_setLastFunctionCall("jquery.markitup.js",403,13108,13122) ||       range.select());
    } else if (textarea.setSelectionRange) {
(_wrap_setLastFunctionCall("jquery.markitup.js",405,13174,13220) ||       textarea.setSelectionRange(start, start + len));
    }
    textarea.scrollTop = scrollPosition;
(_wrap_setLastFunctionCall("jquery.markitup.js",408,13273,13289) ||     textarea.focus());
  }
  function get() {
_wrap_addFunctionToMap('jquery.markitup.js', 412, 13324,14061, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",413,13345,13361) ||     textarea.focus());
    scrollPosition = textarea.scrollTop;
    if (document.selection) {
      selection = (_wrap_setLastFunctionCall("jquery.markitup.js",417,13452,13484) || document.selection.createRange()).text;
      if ($.browser.msie) {
        var range = (_wrap_setLastFunctionCall("jquery.markitup.js",419,13542,13574) || document.selection.createRange()), rangeCopy = (_wrap_setLastFunctionCall("jquery.markitup.js",419,13588,13605) || range.duplicate());
(_wrap_setLastFunctionCall("jquery.markitup.js",420,13613,13650) ||         rangeCopy.moveToElementText(textarea));
        caretPosition = -1;
        while ((_wrap_setLastFunctionCall("jquery.markitup.js",422,13690,13714) || rangeCopy.inRange(range))) {
(_wrap_setLastFunctionCall("jquery.markitup.js",423,13725,13757) ||           rangeCopy.moveStart('character'));
          caretPosition++;
        }
      } else {
        caretPosition = textarea.selectionStart;
      }
    } else {
      caretPosition = textarea.selectionStart;
      selection = (_wrap_setLastFunctionCall("jquery.markitup.js",432,13964,14026) || textarea.value.substring(caretPosition, textarea.selectionEnd));
    }
    return selection;
  }
  function preview() {
_wrap_addFunctionToMap('jquery.markitup.js', 438, 14092,14984, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (!previewWindow || previewWindow.closed) {
      if (options.previewInWindow) {
        previewWindow = (_wrap_setLastFunctionCall("jquery.markitup.js",441,14221,14272) || window.open('', 'preview', options.previewInWindow));
(_wrap_setLastFunctionCall("jquery.markitup.js",442,14280,14348) ||         (_wrap_setLastFunctionCall("jquery.markitup.js",442,14280,14289) || $(window)).unload(function() {
_wrap_addFunctionToMap('jquery.markitup.js', 442, 14297,14347, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",443,14317,14338) ||   previewWindow.close());
}));
      } else {
        iFrame = (_wrap_setLastFunctionCall("jquery.markitup.js",446,14379,14430) || $('<iframe class="markItUpPreviewFrame"></iframe>'));
        if (options.previewPosition == 'after') {
(_wrap_setLastFunctionCall("jquery.markitup.js",448,14487,14513) ||           iFrame.insertAfter(footer));
        } else {
(_wrap_setLastFunctionCall("jquery.markitup.js",450,14537,14564) ||           iFrame.insertBefore(header));
        }
        previewWindow = iFrame[iFrame.length - 1].contentWindow || frame[iFrame.length - 1];
      }
    } else if (altKey === true) {
      if (iFrame) {
(_wrap_setLastFunctionCall("jquery.markitup.js",456,14732,14747) ||         iFrame.remove());
      } else {
(_wrap_setLastFunctionCall("jquery.markitup.js",458,14769,14790) ||         previewWindow.close());
      }
      previewWindow = iFrame = false;
    }
    if (!options.previewAutoRefresh) {
(_wrap_setLastFunctionCall("jquery.markitup.js",463,14886,14902) ||       refreshPreview());
    }
    if (options.previewInWindow) {
(_wrap_setLastFunctionCall("jquery.markitup.js",466,14951,14972) ||       previewWindow.focus());
    }
  }
  function refreshPreview() {
_wrap_addFunctionToMap('jquery.markitup.js', 471, 15018,15072, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",472,15051,15066) ||     renderPreview());
  }
  function renderPreview() {
_wrap_addFunctionToMap('jquery.markitup.js', 475, 15077,15937, (typeof arguments === 'object' ? arguments.callee.caller : null));

    var phtml;
    if (options.previewParser && typeof options.previewParser === 'function') {
      var data = (_wrap_setLastFunctionCall("jquery.markitup.js",478,15217,15250) || options.previewParser((_wrap_setLastFunctionCall("jquery.markitup.js",478,15240,15248) || $$.val())));
(_wrap_setLastFunctionCall("jquery.markitup.js",479,15257,15292) ||       writeInPreview((_wrap_setLastFunctionCall("jquery.markitup.js",479,15273,15290) || localize(data, 1))));
    } else if (options.previewParserPath !== '') {
(_wrap_setLastFunctionCall("jquery.markitup.js",481,15351,15626) ||       $.ajax({type: 'POST', dataType: 'text', global: false, url: options.previewParserPath, data: options.previewParserVar + '=' + (_wrap_setLastFunctionCall("jquery.markitup.js",486,15504,15532) || encodeURIComponent((_wrap_setLastFunctionCall("jquery.markitup.js",486,15523,15531) || $$.val()))), success: function(data) {
_wrap_addFunctionToMap('jquery.markitup.js', 487, 15549,15618, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",488,15573,15608) ||   writeInPreview((_wrap_setLastFunctionCall("jquery.markitup.js",488,15589,15606) || localize(data, 1))));
}}));
    } else {
      if (!template) {
(_wrap_setLastFunctionCall("jquery.markitup.js",493,15669,15900) ||         $.ajax({url: options.previewTemplatePath, dataType: 'text', global: false, success: function(data) {
_wrap_addFunctionToMap('jquery.markitup.js', 497, 15782,15891, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",498,15807,15881) ||   writeInPreview((_wrap_setLastFunctionCall("jquery.markitup.js",498,15823,15879) || (_wrap_setLastFunctionCall("jquery.markitup.js",498,15823,15840) || localize(data, 1)).replace(/<!-- content -->/g, (_wrap_setLastFunctionCall("jquery.markitup.js",498,15870,15878) || $$.val())))));
}}));
      }
    }
    return false;
  }
  function writeInPreview(data) {
_wrap_addFunctionToMap('jquery.markitup.js', 506, 15945,16309, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (previewWindow.document) {
      try {
        sp = previewWindow.document.documentElement.scrollTop;
      }      catch (e) {
  sp = 0;
}
(_wrap_setLastFunctionCall("jquery.markitup.js",513,16130,16159) ||       previewWindow.document.open());
(_wrap_setLastFunctionCall("jquery.markitup.js",514,16166,16200) ||       previewWindow.document.write(data));
(_wrap_setLastFunctionCall("jquery.markitup.js",515,16207,16237) ||       previewWindow.document.close());
      previewWindow.document.documentElement.scrollTop = sp;
    }
  }
  function keyPressed(e) {
_wrap_addFunctionToMap('jquery.markitup.js', 521, 16340,17733, (typeof arguments === 'object' ? arguments.callee.caller : null));

    shiftKey = e.shiftKey;
    altKey = e.altKey;
    ctrlKey = (!(e.altKey && e.ctrlKey)) ? (e.ctrlKey || e.metaKey) : false;
    if (e.type === 'keydown') {
      if (ctrlKey === true) {
        li = (_wrap_setLastFunctionCall("jquery.markitup.js",528,16566,16641) || (_wrap_setLastFunctionCall("jquery.markitup.js",528,16566,16628) || $('a[accesskey="' + (_wrap_setLastFunctionCall("jquery.markitup.js",528,16584,16614) || String.fromCharCode(e.keyCode)) + '"]', header)).parent('li'));
        if (li.length !== 0) {
          ctrlKey = false;
(_wrap_setLastFunctionCall("jquery.markitup.js",531,16703,16776) ||           setTimeout(function() {
_wrap_addFunctionToMap('jquery.markitup.js', 531, 16714,16773, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",532,16735,16763) ||   li.triggerHandler('mouseup'));
}, 1));
          return false;
        }
      }
      if (e.keyCode === 13 || e.keyCode === 10) {
        if (ctrlKey === true) {
          ctrlKey = false;
(_wrap_setLastFunctionCall("jquery.markitup.js",540,16954,16981) ||           markup(options.onCtrlEnter));
          return options.onCtrlEnter.keepDefault;
        } else if (shiftKey === true) {
          shiftKey = false;
(_wrap_setLastFunctionCall("jquery.markitup.js",544,17117,17145) ||           markup(options.onShiftEnter));
          return options.onShiftEnter.keepDefault;
        } else {
(_wrap_setLastFunctionCall("jquery.markitup.js",547,17231,17254) ||           markup(options.onEnter));
          return options.onEnter.keepDefault;
        }
      }
      if (e.keyCode === 9) {
        if (shiftKey == true || ctrlKey == true || altKey == true) {
          return false;
        }
        if (caretOffset !== -1) {
(_wrap_setLastFunctionCall("jquery.markitup.js",556,17489,17494) ||           get());
          caretOffset = (_wrap_setLastFunctionCall("jquery.markitup.js",557,17517,17525) || $$.val()).length - caretOffset;
(_wrap_setLastFunctionCall("jquery.markitup.js",558,17555,17574) ||           set(caretOffset, 0));
          caretOffset = -1;
          return false;
        } else {
(_wrap_setLastFunctionCall("jquery.markitup.js",562,17644,17665) ||           markup(options.onTab));
          return options.onTab.keepDefault;
        }
      }
    }
  }
(_wrap_setLastFunctionCall("jquery.markitup.js",569,17738,17744) ||   init());
}));
};
  $.fn.markItUpRemove = function() {
_wrap_addFunctionToMap('jquery.markitup.js', 573, 17780,17973, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("jquery.markitup.js",574,17802,17969) || this.each(function() {
_wrap_addFunctionToMap('jquery.markitup.js', 574, 17812,17965, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var $$ = (_wrap_setLastFunctionCall("jquery.markitup.js",575,17838,17884) || (_wrap_setLastFunctionCall("jquery.markitup.js",575,17838,17854) || (_wrap_setLastFunctionCall("jquery.markitup.js",575,17838,17845) || $(this)).unbind()).removeClass('markItUpEditor'));
(_wrap_setLastFunctionCall("jquery.markitup.js",576,17890,17959) ||   (_wrap_setLastFunctionCall("jquery.markitup.js",576,17890,17943) || (_wrap_setLastFunctionCall("jquery.markitup.js",576,17890,17929) || (_wrap_setLastFunctionCall("jquery.markitup.js",576,17890,17906) || $$.parent('div')).parent('div.markItUp')).parent('div')).replaceWith($$));
}));
};
  $.markItUp = function(settings) {
_wrap_addFunctionToMap('jquery.markitup.js', 581, 17990,18286, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var options = {target: false};
(_wrap_setLastFunctionCall("jquery.markitup.js",583,18047,18074) ||   $.extend(options, settings));
  if (options.target) {
    return (_wrap_setLastFunctionCall("jquery.markitup.js",585,18110,18217) || (_wrap_setLastFunctionCall("jquery.markitup.js",585,18110,18127) || $(options.target)).each(function() {
_wrap_addFunctionToMap('jquery.markitup.js', 585, 18133,18216, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("jquery.markitup.js",586,18150,18165) ||   (_wrap_setLastFunctionCall("jquery.markitup.js",586,18150,18157) || $(this)).focus());
(_wrap_setLastFunctionCall("jquery.markitup.js",587,18171,18210) ||   (_wrap_setLastFunctionCall("jquery.markitup.js",587,18171,18178) || $(this)).trigger('insertion', [options]));
}));
  } else {
(_wrap_setLastFunctionCall("jquery.markitup.js",590,18233,18278) ||     (_wrap_setLastFunctionCall("jquery.markitup.js",590,18233,18246) || $('textarea')).trigger('insertion', [options]));
  }
};
})(jQuery));
