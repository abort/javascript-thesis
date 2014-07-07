_wrap_staticMeasuredFunctions['htmlbox.full.js'] = 27;
_wrap_staticMeasuredCalls['htmlbox.full.js'] =265;
((_wrap_setLastFunctionCall("htmlbox.full.js",1,1,23299,null,true,false) || _wrap_popCallStack(function($) {
_wrap_addFunctionToMap('htmlbox.full.js', 1, 1,23291, (typeof arguments === 'object' ? arguments.callee.caller : null));

  $.fn.htmlbox = function(options) {
_wrap_addFunctionToMap('htmlbox.full.js', 2, 32,23288, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var colors = typeof document.htmlbox_colors === 'function' ? (_wrap_setLastFunctionCall("htmlbox.full.js",3,115,140,document.htmlbox_colors,false,false) || _wrap_popCallStack(document.htmlbox_colors())) : ['silver', 'silver', 'white', 'white', 'yellow', 'yellow', 'orange', 'orange', 'red', 'red', 'green', 'green', 'blue', 'blue', 'brown', 'brown', 'black', 'black'];
  var styles = typeof document.htmlbox_styles === 'function' ? (_wrap_setLastFunctionCall("htmlbox.full.js",4,370,395,document.htmlbox_styles,false,false) || _wrap_popCallStack(document.htmlbox_styles())) : [['No Styles', '', '']];
  var syntax = typeof document.htmlbox_syntax === 'function' ? (_wrap_setLastFunctionCall("htmlbox.full.js",5,486,511,document.htmlbox_syntax,false,false) || _wrap_popCallStack(document.htmlbox_syntax())) : [['No Syntax', '', '']];
  var urm = typeof htmlbox_undo_redo_manager === 'function' ? (_wrap_setLastFunctionCall("htmlbox.full.js",6,601,632,htmlbox_undo_redo_manager,false,false) || _wrap_popCallStack(new htmlbox_undo_redo_manager())) : false;
  var d = {toolbars: [['bold', 'italic', 'underline']], idir: './images/', icons: 'default', about: true, skin: 'default', output: 'xhtml', toolbar_height: 24, tool_height: 16, tool_width: 16, tool_image_height: 16, tool_image_width: 16, css: 'body{margin:3px;font-family:verdana;font-size:11px;}p{margin:0px;}', success: function(data) {
_wrap_addFunctionToMap('htmlbox.full.js', 7, 964,997, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("htmlbox.full.js",8,983,994,alert,false,false) || _wrap_popCallStack(  alert(data)));
}, error: function(a, b, c) {
_wrap_addFunctionToMap('htmlbox.full.js', 9, 1006,1042, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return this;
}};
  d = (_wrap_setLastFunctionCall("htmlbox.full.js",12,1051,1071,$.extend,false,false) || _wrap_popCallStack($.extend(d, options)));
  if ((_wrap_setLastFunctionCall("htmlbox.full.js",13,1079,1114,d.idir.substring,false,false) || _wrap_popCallStack(d.idir.substring(d.idir.length - 1))) !== '/') {
    d.idir += '/';
  }
  var get_selection = function() {
_wrap_addFunctionToMap('htmlbox.full.js', 16, 1171,1969, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var range;
  if ($.browser.msie) {
    range = (_wrap_setLastFunctionCall("htmlbox.full.js",19,1233,1288,d.iframe.contentWindow.document.selection.createRange,false,false) || _wrap_popCallStack(d.iframe.contentWindow.document.selection.createRange()));
    if (range.htmlText && range.text) {
      return range.htmlText;
    }
  } else {
    if (d.iframe.contentWindow.getSelection) {
      var selection = (_wrap_setLastFunctionCall("htmlbox.full.js",25,1445,1482,d.iframe.contentWindow.getSelection,false,false) || _wrap_popCallStack(d.iframe.contentWindow.getSelection()));
      if (selection.rangeCount > 0 && window.XMLSerializer) {
        range = (_wrap_setLastFunctionCall("htmlbox.full.js",27,1562,1585,selection.getRangeAt,false,false) || _wrap_popCallStack(selection.getRangeAt(0)));
        var html = (_wrap_setLastFunctionCall("htmlbox.full.js",28,1606,1666,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",28,1606,1625,XMLSerializer,false,false) || _wrap_popCallStack(new XMLSerializer())).serializeToString((_wrap_setLastFunctionCall("htmlbox.full.js",28,1644,1665,range.cloneContents,false,false) || _wrap_popCallStack(range.cloneContents())))));
        return html;
      }
      if (selection.rangeCount > 0) {
        range = (_wrap_setLastFunctionCall("htmlbox.full.js",32,1751,1774,selection.getRangeAt,false,false) || _wrap_popCallStack(selection.getRangeAt(0)));
        var clonedSelection = (_wrap_setLastFunctionCall("htmlbox.full.js",33,1806,1827,range.cloneContents,false,false) || _wrap_popCallStack(range.cloneContents()));
        var div = (_wrap_setLastFunctionCall("htmlbox.full.js",34,1847,1876,document.createElement,false,false) || _wrap_popCallStack(document.createElement('div')));
(_wrap_setLastFunctionCall("htmlbox.full.js",35,1886,1918,div.appendChild,false,false) || _wrap_popCallStack(        div.appendChild(clonedSelection)));
        return div.innerHTML;
      }
    }
  }
};
  var in_array = function(o, a) {
_wrap_addFunctionToMap('htmlbox.full.js', 41, 1988,2091, (typeof arguments === 'object' ? arguments.callee.caller : null));

  for (var i in a) {
    if (i === o) {
      return true;
    }
  }
  return false;
};
  var insert_text = function(text, start, end) {
_wrap_addFunctionToMap('htmlbox.full.js', 49, 2113,3234, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if ($.browser.msie) {
(_wrap_setLastFunctionCall("htmlbox.full.js",51,2170,2200,d.iframe.contentWindow.focus,false,false) || _wrap_popCallStack(    d.iframe.contentWindow.focus()));
    if (typeof d.idoc.selection !== 'undefined' && d.idoc.selection.type !== 'Text' && d.idoc.selection.type !== 'None') {
      start = false;
(_wrap_setLastFunctionCall("htmlbox.full.js",54,2352,2376,d.idoc.selection.clear,false,false) || _wrap_popCallStack(      d.idoc.selection.clear()));
    }
    var sel = (_wrap_setLastFunctionCall("htmlbox.full.js",56,2398,2428,d.idoc.selection.createRange,false,false) || _wrap_popCallStack(d.idoc.selection.createRange()));
(_wrap_setLastFunctionCall("htmlbox.full.js",57,2434,2453,sel.pasteHTML,false,false) || _wrap_popCallStack(    sel.pasteHTML(text)));
    if ((_wrap_setLastFunctionCall("htmlbox.full.js",58,2463,2481,text.indexOf,false,false) || _wrap_popCallStack(text.indexOf('\n'))) === -1) {
      if (start === false) {
      } else {
        if (typeof start !== 'undefined') {
(_wrap_setLastFunctionCall("htmlbox.full.js",62,2590,2638,sel.moveStart,false,false) || _wrap_popCallStack(          sel.moveStart('character', -text.length + start)));
(_wrap_setLastFunctionCall("htmlbox.full.js",63,2650,2680,sel.moveEnd,false,false) || _wrap_popCallStack(          sel.moveEnd('character', -end)));
        } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",65,2709,2749,sel.moveStart,false,false) || _wrap_popCallStack(          sel.moveStart('character', -text.length)));
        }
      }
(_wrap_setLastFunctionCall("htmlbox.full.js",68,2775,2787,sel.select,false,false) || _wrap_popCallStack(      sel.select()));
    }
  } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",71,2810,2855,d.idoc.execCommand,false,false) || _wrap_popCallStack(    d.idoc.execCommand('insertHTML', false, text)));
  }
  if ((_wrap_setLastFunctionCall("htmlbox.full.js",73,2867,2895,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",73,2867,2880,$,false,false) || _wrap_popCallStack($('#' + d.id))).is(':visible'))) === false) {
    var html = (_wrap_setLastFunctionCall("htmlbox.full.js",74,2924,2953,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",74,2924,2938,$,false,false) || _wrap_popCallStack($('#1' + d.id))).is(':visible'))) ? (_wrap_setLastFunctionCall("htmlbox.full.js",74,2956,2975,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",74,2956,2969,$,false,false) || _wrap_popCallStack($('#' + d.id))).val())) : html = d.iframe.contentWindow.document.body.innerHTML;
    html = typeof getXHTML === 'function' ? (_wrap_setLastFunctionCall("htmlbox.full.js",75,3077,3091,getXHTML,false,false) || _wrap_popCallStack(getXHTML(html))) : html;
(_wrap_setLastFunctionCall("htmlbox.full.js",76,3104,3127,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("htmlbox.full.js",76,3104,3117,$,false,false) || _wrap_popCallStack($('#' + d.id))).val(html)));
    if (urm) {
(_wrap_setLastFunctionCall("htmlbox.full.js",78,3150,3163,urm.add,false,false) || _wrap_popCallStack(      urm.add(html)));
    }
    if (undefined !== d.change) {
(_wrap_setLastFunctionCall("htmlbox.full.js",81,3211,3221,d.change,false,false) || _wrap_popCallStack(      d.change()));
    }
  }
};
  var keyup = function(e) {
_wrap_addFunctionToMap('htmlbox.full.js', 85, 3250,3567, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var html = (_wrap_setLastFunctionCall("htmlbox.full.js",86,3277,3306,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",86,3277,3291,$,false,false) || _wrap_popCallStack($('#1' + d.id))).is(':visible'))) ? (_wrap_setLastFunctionCall("htmlbox.full.js",86,3309,3328,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",86,3309,3322,$,false,false) || _wrap_popCallStack($('#' + d.id))).val())) : html = d.iframe.contentWindow.document.body.innerHTML;
  if (urm) {
(_wrap_setLastFunctionCall("htmlbox.full.js",88,3403,3416,urm.add,false,false) || _wrap_popCallStack(    urm.add(html)));
  }
  html = typeof getXHTML === 'function' ? (_wrap_setLastFunctionCall("htmlbox.full.js",90,3464,3478,getXHTML,false,false) || _wrap_popCallStack(getXHTML(html))) : html;
(_wrap_setLastFunctionCall("htmlbox.full.js",91,3489,3512,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",91,3489,3502,$,false,false) || _wrap_popCallStack($('#' + d.id))).val(html)));
  if (undefined !== d.change) {
(_wrap_setLastFunctionCall("htmlbox.full.js",93,3550,3560,d.change,false,false) || _wrap_popCallStack(    d.change()));
  }
};
  var style = function() {
_wrap_addFunctionToMap('htmlbox.full.js', 96, 3583,4246, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if ((_wrap_setLastFunctionCall("htmlbox.full.js",97,3602,3630,d.css.indexOf,false,false) || _wrap_popCallStack(d.css.indexOf('background:'))) === -1) {
    d.css += 'body{background:white;}';
  }
  if ((_wrap_setLastFunctionCall("htmlbox.full.js",100,3691,3725,d.css.indexOf,false,false) || _wrap_popCallStack(d.css.indexOf('background-image:'))) === -1) {
    d.css = d.css + 'body{background-image:url(' + d.idir + 'logo.gif);background-position:top right;background-repeat:no-repeat;}';
  }
  if (d.idoc.createStyleSheet) {
    (_wrap_setLastFunctionCall("htmlbox.full.js",104,3910,3935,d.idoc.createStyleSheet,false,false) || _wrap_popCallStack(d.idoc.createStyleSheet())).cssText = d.css;
  } else {
    var css = (_wrap_setLastFunctionCall("htmlbox.full.js",106,3978,4006,d.idoc.createElement,false,false) || _wrap_popCallStack(d.idoc.createElement('link')));
    css.rel = 'stylesheet';
    css.href = 'data:text/css,' + (_wrap_setLastFunctionCall("htmlbox.full.js",108,4070,4083,escape,false,false) || _wrap_popCallStack(escape(d.css)));
    if ($.browser.opera) {
(_wrap_setLastFunctionCall("htmlbox.full.js",110,4118,4157,d.idoc.documentElement.appendChild,false,false) || _wrap_popCallStack(      d.idoc.documentElement.appendChild(css)));
    } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",112,4178,4233,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("htmlbox.full.js",112,4178,4213,d.idoc.getElementsByTagName,false,false) || _wrap_popCallStack(d.idoc.getElementsByTagName('head')))[0].appendChild(css)));
    }
  }
};
  var toolbar = function() {
_wrap_addFunctionToMap('htmlbox.full.js', 116, 4264,10914, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var h = '';
  if (d.about && !(_wrap_setLastFunctionCall("htmlbox.full.js",118,4309,4341,in_array,false,false) || _wrap_popCallStack(in_array(d.toolbars[0], 'about')))) {
    d.toolbars[0][d.toolbars[0].length] = 'separator';
    d.toolbars[0][d.toolbars[0].length] = 'about';
  }
  for (var k = 0; k < d.toolbars.length; k++) {
    var toolbar = d.toolbars[k];
    h += '<tr><td class=\'' + d.id + '_tb\' valign=\'middle\'><table cellspacing=\'1\' cellpadding=\'0\'>';
    for (var i = 0; i < toolbar.length; i++) {
      var img = d.icons === 'default' ? d.idir + 'default/' + toolbar[i] + '.gif' : d.idir + d.icons + '/' + toolbar[i] + '.png';
      if (undefined === toolbar[i]) {
        continue;
      } else if (typeof toolbar[i] !== 'string') {
        img = d.idir + d.icons + '/' + toolbar[i].icon;
        var cmd = 'var cmd = unescape("' + (_wrap_setLastFunctionCall("htmlbox.full.js",131,5027,5064,escape,false,false) || _wrap_popCallStack(escape((_wrap_setLastFunctionCall("htmlbox.full.js",131,5034,5063,toolbar[i].command.toString,false,false) || _wrap_popCallStack(toolbar[i].command.toString()))))) + '");eval("var fn="+cmd);fn()\'';
        h += '<td class=\'' + d.id + '_html_button\' valign=\'middle\' align=\'center\' onclick=\'' + cmd + '\' title=\'' + toolbar[i].tooltip + '\'><image src=\'' + img + '\'></td>';
      } else if (toolbar[i] === 'separator') {
        h += '<td valign=\'middle\' align=\'center\'><image src=\'' + d.idir + 'separator.gif\' style=\'margin-right:1px;margin-left:3px;height:13px;\'></td>';
      } else if (toolbar[i] === 'fontsize') {
        h += '<td valign=\'middle\' align=\'center\'><select id=\'' + d.id + '_fontsize\' onchange=\'global_hb["' + d.id + '"].cmd("fontsize",this.options[this.selectedIndex].value)\' style=\'font-size:12px;\'><option value=\'\' selected>- SIZE -</option><option value=\'1\'>1</option><option value=\'2\'>2</option><option value=\'3\'>3</option><option value=\'4\'>4</option><option value=\'5\'>5</option><option value=\'6\'>6</option><option value=\'7\'>7</option></select></td>';
      } else if (toolbar[i] === 'fontfamily') {
        h += '<td valign=\'middle\' align=\'center\'><select id=\'' + d.id + '_fontfamily\' onchange=\'global_hb["' + d.id + '"].cmd("fontname",this.options[this.selectedIndex].value)\' style=\'font-size:12px;\'><option value=\'\' selected>- FONT -</option><option value=\'arial\' style=\'font-family:arial;\'>Arial</option><option value=\'courier\' style=\'font-family:courier;\'>Courier</option><option value=\'cursive\' style=\'font-family:cursive;\'>Cursive</option><option value=\'georgia\' style=\'font-family:georgia;\'>Georgia</option><option value=\'monospace\' style=\'font-family:monospace;\'>Monospace</option><option value=\'tahoma\' style=\'font-family:tahoma;\'>Tahoma</option><option value=\'verdana\' style=\'font-family:verdana;\'>Verdana</option></select></td>';
      } else if (toolbar[i] === 'formats') {
        h += '<td valign=\'middle\' align=\'center\'><select id=\'' + d.id + '_formats\' onchange=\'global_hb["' + d.id + '"].cmd("format",this.options[this.selectedIndex].value)\' style=\'font-size:12px;\'><option value=\'\' selected>- FORMATS -</option><option value=\'h1\'>Heading 1</option><option value=\'h2\'>Heading 2</option><option value=\'h3\'>Heading 3</option><option value=\'h4\'>Heading 4</option><option value=\'h5\'>Heading 5</option><option value=\'h6\'>Heading 6</option><option value=\'p\'>Paragraph</option><option value=\'pindent\'>First Indent</option><option value=\'pre\'>Preformatted</option></select></td>';
      } else if (toolbar[i] === 'fontcolor') {
        h += '<td valign=\'middle\' align=\'center\'><select id=\'' + d.id + '_fontcolor\' onchange=\'global_hb["' + d.id + '"].cmd("fontcolor",this.options[this.selectedIndex].value)\' style=\'font-size:12px;\'><option value=\'\' selected>-COLOR-</option>';
        for (var m = 0; m < colors.length; m++) {
          if (m % 2) {
            continue;
          }
          h += '<option value=\'' + colors[m] + '\' style=\'background:' + colors[m] + ';color:' + colors[m] + ';\'>' + colors[m] + '</option>';
        }
        h += '</select></td>';
      } else if (toolbar[i] === 'highlight') {
        h += '<td valign=\'middle\' align=\'center\'><select id=\'' + d.id + '_highlight\' onchange=\'global_hb["' + d.id + '"].cmd("backcolor",this.options[this.selectedIndex].value)\' style=\'font-size:12px;\'><option value=\'\' selected>-HIGHLIGHT-</option>';
        for (var n = 0; n < colors.length; n++) {
          if (n % 2) {
            continue;
          }
          h += '<option value=\'' + colors[n] + '\' style=\'background:' + colors[n] + ';color:' + colors[n] + ';\'>' + colors[n] + '</option>';
        }
        h += '</select></td>';
      } else if (toolbar[i] === 'styles') {
        h += '<td valign=\'middle\' align=\'center\'><select id=\'' + d.id + '_styles\' onchange=\'global_hb["' + d.id + '"].cmd("styles",this.options[this.selectedIndex].value);this.options[0].selected="true";\' style=\'font-size:12px;\' style=\'background:white;\'><option value=\'\' selected>-STYLES-</option>';
        for (var o = 0; o < styles.length; o++) {
          if (o % 2) {
            continue;
          }
          h += '<option value=\'' + o + '\' style=\'background:white;color:red;\'>' + styles[o][0] + '</option>';
        }
        h += '</select></td>';
      } else if (toolbar[i] === 'syntax') {
        h += '<td valign=\'middle\' align=\'center\'><select id=\'' + d.id + '_syntax\' onchange=\'global_hb["' + d.id + '"].cmd("syntax",this.options[this.selectedIndex].value);this.options[0].selected="true";\' style=\'font-size:12px;\'><option value=\'\' selected>-SYNTAX-</option>';
        for (var p = 0; p < syntax.length; p++) {
          if (p % 2) {
            continue;
          }
          h += '<option value=\'' + p + '\' style=\'background:white;color:red;\'>' + syntax[p][0] + '</option>';
        }
        h += '</select></td>';
      }
      var cmds = {'about': 'About', 'bold': 'Bold', 'center': 'Center', 'code': 'View Code', 'copy': 'Copy', 'cut': 'Cut', 'hr': 'Insert Line', 'link': 'Insert Link', 'image': 'Insert Image', 'indent': 'Indent', 'italic': 'Italic', 'justify': 'Justify', 'left': 'Left', 'ol': 'Numbered List', 'outdent': 'Outdent', 'paragraph': 'Insert Paragraph', 'paste': 'Paste', 'quote': 'Quote', 'redo': 'Redo', 'removeformat': 'Remove Format', 'right': 'Right', 'strike': 'Strikethrough', 'striptags': 'Strip Tags', 'sub': 'Subscript', 'sup': 'Superscript', 'ul': 'Bulleted List', 'underline': 'Underline', 'undo': 'Undo', 'unlink': 'Remove Link'};
      if ((_wrap_setLastFunctionCall("htmlbox.full.js",179,10600,10626,in_array,false,false) || _wrap_popCallStack(in_array(toolbar[i], cmds)))) {
        h += '<td class=\'' + d.id + '_html_button\' valign=\'middle\' align=\'center\' onclick=\'global_hb["' + d.id + '"].cmd("' + toolbar[i] + '")\' title=\'' + cmds[toolbar[i]] + '\'><image src=\'' + img + '\'></td>';
      }
    }
    h += '</table></td></tr>';
  }
  return h;
};
  this.wrap_tags = function(start, end) {
_wrap_addFunctionToMap('htmlbox.full.js', 187, 10935,11138, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var sel = (_wrap_setLastFunctionCall("htmlbox.full.js",188,10970,10985,get_selection,false,false) || _wrap_popCallStack(get_selection()));
  if (undefined === sel) {
    sel = '';
  }
  if (undefined === end) {
    end = '';
  }
(_wrap_setLastFunctionCall("htmlbox.full.js",195,11079,11135,insert_text,false,false) || _wrap_popCallStack(  insert_text(start + sel + end, start.length, end.length)));
};
  this._init = function(is_init) {
_wrap_addFunctionToMap('htmlbox.full.js', 197, 11155,15285, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (undefined === window.global_hb) {
    global_hb = [];
  }
  if (!(_wrap_setLastFunctionCall("htmlbox.full.js",201,11246,11264,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",201,11246,11253,$,false,false) || _wrap_popCallStack($(this))).attr('id')))) {
(_wrap_setLastFunctionCall("htmlbox.full.js",202,11272,11318,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("htmlbox.full.js",202,11272,11279,$,false,false) || _wrap_popCallStack($(this))).attr('id', 'jqhb_' + global_hb.length)));
    d.id = 'jqhb_' + global_hb.length;
    global_hb[d.id] = global_hb;
  } else {
    d.id = (_wrap_setLastFunctionCall("htmlbox.full.js",206,11414,11432,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",206,11414,11421,$,false,false) || _wrap_popCallStack($(this))).attr('id')));
  }
  if (undefined === global_hb[d.id]) {
    global_hb[d.id] = this;
  }
  d.ta_wrap_id = d.id + '_wrap';
  var w = (_wrap_setLastFunctionCall("htmlbox.full.js",212,11552,11572,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",212,11552,11559,$,false,false) || _wrap_popCallStack($(this))).css('width')));
  var h = (_wrap_setLastFunctionCall("htmlbox.full.js",213,11584,11605,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",213,11584,11591,$,false,false) || _wrap_popCallStack($(this))).css('height')));
(_wrap_setLastFunctionCall("htmlbox.full.js",214,11609,11822,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",214,11609,11616,$,false,false) || _wrap_popCallStack($(this))).wrap('<table id=\'' + d.id + '_wrap\' width=\'' + w + '\' style=\'height:' + h + ';border:2px solid #E9EAEF;\' cellspacing=\'0\' cellpadding=\'0\'><tr><td id=\'' + d.id + '_container\'></td></tr></table>')));
(_wrap_setLastFunctionCall("htmlbox.full.js",215,11826,11888,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",215,11826,11869,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",215,11826,11860,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",215,11826,11851,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",215,11826,11842,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",215,11826,11833,$,false,false) || _wrap_popCallStack($(this))).parent())).parent())).parent())).parent())).prepend((_wrap_setLastFunctionCall("htmlbox.full.js",215,11878,11887,toolbar,false,false) || _wrap_popCallStack(toolbar())))));
(_wrap_setLastFunctionCall("htmlbox.full.js",216,11892,11938,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",216,11892,11913,$,false,false) || _wrap_popCallStack($('.' + d.id + '_tb'))).height(d.toolbar_height)));
(_wrap_setLastFunctionCall("htmlbox.full.js",217,11942,12526,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",217,11942,11972,$,false,false) || _wrap_popCallStack($('.' + d.id + '_html_button'))).each(function() {
_wrap_addFunctionToMap('htmlbox.full.js', 217, 11978,12525, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("htmlbox.full.js",218,11993,12042,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",218,11993,12020,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",218,11993,12000,$,false,false) || _wrap_popCallStack($(this))).width(d.tool_width))).height(d.tool_height)));
(_wrap_setLastFunctionCall("htmlbox.full.js",219,12046,12153,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",219,12046,12067,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",219,12046,12053,$,false,false) || _wrap_popCallStack($(this))).find('image'))).each(function() {
_wrap_addFunctionToMap('htmlbox.full.js', 219, 12073,12152, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("htmlbox.full.js",220,12088,12149,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",220,12088,12121,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",220,12088,12095,$,false,false) || _wrap_popCallStack($(this))).width(d.tool_image_width))).height(d.tool_image_height)));
})));
(_wrap_setLastFunctionCall("htmlbox.full.js",222,12157,12291,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",222,12157,12269,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",222,12157,12236,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",222,12157,12203,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",222,12157,12164,$,false,false) || _wrap_popCallStack($(this))).css('border', '1px solid transparent'))).css('background', 'transparent'))).css('margin', '1px 1px 1px 1px'))).css('padding', '1px')));
(_wrap_setLastFunctionCall("htmlbox.full.js",223,12295,12403,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",223,12295,12302,$,false,false) || _wrap_popCallStack($(this))).mouseover(function() {
_wrap_addFunctionToMap('htmlbox.full.js', 223, 12313,12402, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("htmlbox.full.js",224,12328,12399,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",224,12328,12370,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",224,12328,12335,$,false,false) || _wrap_popCallStack($(this))).css('border', '1px solid #BFCAFF'))).css('background', '#EFF2FF')));
})));
(_wrap_setLastFunctionCall("htmlbox.full.js",226,12407,12522,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",226,12407,12414,$,false,false) || _wrap_popCallStack($(this))).mouseout(function() {
_wrap_addFunctionToMap('htmlbox.full.js', 226, 12424,12521, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("htmlbox.full.js",227,12439,12518,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",227,12439,12485,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",227,12439,12446,$,false,false) || _wrap_popCallStack($(this))).css('border', '1px solid transparent'))).css('background', 'transparent')));
})));
})));
(_wrap_setLastFunctionCall("htmlbox.full.js",230,12530,12810,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",230,12530,12566,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",230,12530,12551,$,false,false) || _wrap_popCallStack($('.' + d.id + '_tb'))).find('select'))).each(function() {
_wrap_addFunctionToMap('htmlbox.full.js', 230, 12572,12809, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("htmlbox.full.js",231,12587,12695,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",231,12587,12662,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",231,12587,12629,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",231,12587,12594,$,false,false) || _wrap_popCallStack($(this))).css('border', '1px solid #E9EAEF'))).css('background', 'transparent'))).css('margin', '2px 2px 3px 2px')));
  if ($.browser.mozilla) {
(_wrap_setLastFunctionCall("htmlbox.full.js",233,12728,12802,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("htmlbox.full.js",233,12728,12783,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",233,12728,12755,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",233,12728,12735,$,false,false) || _wrap_popCallStack($(this))).css('padding', '0'))).css('position', 'relative'))).css('top', '-2px')));
  }
})));
  var hb_border = '1px solid #7F7647';
  var hb_background = '#DFDDD1';
  var tb_border = '1px solid #7F7647';
  if (d.skin === 'blue') {
    hb_border = '1px solid #7E9DB9';
    hb_background = '#D7E3F2';
    tb_border = '1px solid #7E9DB9';
  }
  if (d.skin === 'red') {
    hb_border = '1px solid #B91E00';
    hb_background = '#FFD7CF';
    tb_border = '1px solid #B91E00';
  }
  if (d.skin === 'green') {
    hb_border = '1px solid #8DB900';
    hb_background = '#D5EF86';
    tb_border = '1px solid #8DB900';
  }
  if (d.skin === 'silver') {
    hb_border = '1px solid #DDDDDD';
    hb_background = '#F4F4F3';
    tb_border = '1px solid #DDDDDD';
  }
(_wrap_setLastFunctionCall("htmlbox.full.js",259,13471,13519,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",259,13471,13494,$,false,false) || _wrap_popCallStack($('#' + d.id + '_wrap'))).css('border', hb_border)));
(_wrap_setLastFunctionCall("htmlbox.full.js",260,13523,13579,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",260,13523,13546,$,false,false) || _wrap_popCallStack($('#' + d.id + '_wrap'))).css('background', hb_background)));
(_wrap_setLastFunctionCall("htmlbox.full.js",261,13583,13638,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",261,13583,13611,$,false,false) || _wrap_popCallStack($('#' + d.id + '_container'))).css('background', 'white')));
(_wrap_setLastFunctionCall("htmlbox.full.js",262,13642,13695,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",262,13642,13663,$,false,false) || _wrap_popCallStack($('.' + d.id + '_tb'))).css('border-bottom', tb_border)));
  try {
    var iframe = (_wrap_setLastFunctionCall("htmlbox.full.js",264,13722,13754,document.createElement,false,false) || _wrap_popCallStack(document.createElement('IFRAME')));
(_wrap_setLastFunctionCall("htmlbox.full.js",265,13760,13848,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("htmlbox.full.js",265,13760,13829,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",265,13760,13802,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",265,13760,13785,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",265,13760,13769,$,false,false) || _wrap_popCallStack($(iframe))).css('width', w))).css('height', h))).attr('id', d.id + '_html'))).css('border', '0')));
(_wrap_setLastFunctionCall("htmlbox.full.js",266,13854,13886,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("htmlbox.full.js",266,13854,13870,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",266,13854,13861,$,false,false) || _wrap_popCallStack($(this))).parent())).prepend(iframe)));
    d.iframe = iframe;
    d.idoc = iframe.contentWindow.document;
    d.idoc.designMode = 'on';
    var text = (_wrap_setLastFunctionCall("htmlbox.full.js",270,14000,14013,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",270,14000,14007,$,false,false) || _wrap_popCallStack($(this))).val())) === '' ? '' : (_wrap_setLastFunctionCall("htmlbox.full.js",270,14028,14041,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",270,14028,14035,$,false,false) || _wrap_popCallStack($(this))).val()));
    if ($.browser.mozilla || $.browser.safari) {
(_wrap_setLastFunctionCall("htmlbox.full.js",272,14098,14133,d.idoc.open,false,false) || _wrap_popCallStack(      d.idoc.open('text/html', 'replace')));
(_wrap_setLastFunctionCall("htmlbox.full.js",273,14141,14159,d.idoc.write,false,false) || _wrap_popCallStack(      d.idoc.write(text)));
(_wrap_setLastFunctionCall("htmlbox.full.js",274,14167,14181,d.idoc.close,false,false) || _wrap_popCallStack(      d.idoc.close()));
    } else {
      if (text !== '') {
(_wrap_setLastFunctionCall("htmlbox.full.js",277,14229,14247,d.idoc.write,false,false) || _wrap_popCallStack(        d.idoc.write(text)));
      } else {
        if ($.browser.msie) {
(_wrap_setLastFunctionCall("htmlbox.full.js",280,14304,14326,d.idoc.write,false,false) || _wrap_popCallStack(          d.idoc.write('&nbsp;')));
        }
      }
    }
    if ($.browser.msie === false) {
      iframe.contentWindow.document.body.contentEditable = true;
    }
    if ((_wrap_setLastFunctionCall("htmlbox.full.js",287,14467,14495,d.css.indexOf,false,false) || _wrap_popCallStack(d.css.indexOf('background:'))) === -1) {
      d.css += 'body{background:white;}';
    }
    if ((_wrap_setLastFunctionCall("htmlbox.full.js",290,14562,14596,d.css.indexOf,false,false) || _wrap_popCallStack(d.css.indexOf('background-image:'))) === -1) {
      d.css = d.css + 'body{background-image:url(' + d.idir + 'logo.gif);background-position:top right;background-repeat:no-repeat;}';
    }
    if (d.idoc.createStyleSheet) {
(_wrap_setLastFunctionCall("htmlbox.full.js",294,14789,14883,setTimeout,false,false) || _wrap_popCallStack(      setTimeout('global_hb[\'' + d.id + '\'].set_text(global_hb[\'' + d.id + '\'].get_html())', 10)));
    } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",296,14904,14911,style,false,false) || _wrap_popCallStack(      style()));
    }
    if (iframe.contentWindow.document.attachEvent) {
(_wrap_setLastFunctionCall("htmlbox.full.js",299,14978,15037,iframe.contentWindow.document.attachEvent,false,false) || _wrap_popCallStack(      iframe.contentWindow.document.attachEvent('onkeyup', keyup)));
    } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",301,15058,15127,iframe.contentWindow.document.addEventListener,false,false) || _wrap_popCallStack(      iframe.contentWindow.document.addEventListener('keyup', keyup, false)));
    }
(_wrap_setLastFunctionCall("htmlbox.full.js",303,15139,15153,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("htmlbox.full.js",303,15139,15146,$,false,false) || _wrap_popCallStack($(this))).hide()));
  }  catch (e) {
(_wrap_setLastFunctionCall("htmlbox.full.js",305,15174,15247,alert,false,false) || _wrap_popCallStack(  alert('This rich text component is not supported by your browser.\n' + e)));
(_wrap_setLastFunctionCall("htmlbox.full.js",306,15251,15265,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",306,15251,15258,$,false,false) || _wrap_popCallStack($(this))).show()));
}
  return this;
};
  this.cmd = function(cmd, arg1) {
_wrap_addFunctionToMap('htmlbox.full.js', 310, 15300,21070, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("htmlbox.full.js",311,15324,15354,d.iframe.contentWindow.focus,false,false) || _wrap_popCallStack(  d.iframe.contentWindow.focus()));
  if (cmd === 'paragraph') {
    cmd = 'format';
    arg1 = 'p';
  }
  var cmds = {'center': 'justifycenter', 'hr': 'inserthorizontalrule', 'justify': 'justifyfull', 'left': 'justifyleft', 'ol': 'insertorderedlist', 'right': 'justifyright', 'strike': 'strikethrough', 'sub': 'subscript', 'sup': 'superscript', 'ul': 'insertunorderedlist'};
  if ((_wrap_setLastFunctionCall("htmlbox.full.js",317,15702,15721,in_array,false,false) || _wrap_popCallStack(in_array(cmd, cmds)))) {
    cmd = cmds[cmd];
  }
  if (cmd === 'code') {
    var text = (_wrap_setLastFunctionCall("htmlbox.full.js",321,15789,15804,this.get_html,false,false) || _wrap_popCallStack(this.get_html()));
    if ((_wrap_setLastFunctionCall("htmlbox.full.js",322,15814,15842,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",322,15814,15827,$,false,false) || _wrap_popCallStack($('#' + d.id))).is(':visible')))) {
(_wrap_setLastFunctionCall("htmlbox.full.js",323,15852,15872,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("htmlbox.full.js",323,15852,15865,$,false,false) || _wrap_popCallStack($('#' + d.id))).hide()));
(_wrap_setLastFunctionCall("htmlbox.full.js",324,15880,15910,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("htmlbox.full.js",324,15880,15903,$,false,false) || _wrap_popCallStack($('#' + d.id + '_html'))).show()));
(_wrap_setLastFunctionCall("htmlbox.full.js",325,15918,15937,this.set_text,false,false) || _wrap_popCallStack(      this.set_text(text)));
    } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",327,15958,15978,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("htmlbox.full.js",327,15958,15971,$,false,false) || _wrap_popCallStack($('#' + d.id))).show()));
(_wrap_setLastFunctionCall("htmlbox.full.js",328,15986,16016,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("htmlbox.full.js",328,15986,16009,$,false,false) || _wrap_popCallStack($('#' + d.id + '_html'))).hide()));
(_wrap_setLastFunctionCall("htmlbox.full.js",329,16024,16043,this.set_text,false,false) || _wrap_popCallStack(      this.set_text(text)));
(_wrap_setLastFunctionCall("htmlbox.full.js",330,16051,16072,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("htmlbox.full.js",330,16051,16064,$,false,false) || _wrap_popCallStack($('#' + d.id))).focus()));
    }
  } else if (cmd === 'link') {
(_wrap_setLastFunctionCall("htmlbox.full.js",333,16115,16193,d.idoc.execCommand,false,false) || _wrap_popCallStack(    d.idoc.execCommand('createlink', false, (_wrap_setLastFunctionCall("htmlbox.full.js",333,16155,16192,prompt,false,false) || _wrap_popCallStack(prompt('Paste Web Address URL Here:'))))));
  } else if (cmd === 'image') {
(_wrap_setLastFunctionCall("htmlbox.full.js",335,16231,16304,d.idoc.execCommand,false,false) || _wrap_popCallStack(    d.idoc.execCommand('insertimage', false, (_wrap_setLastFunctionCall("htmlbox.full.js",335,16272,16303,prompt,false,false) || _wrap_popCallStack(prompt('Paste Image URL Here:'))))));
  } else if (cmd === 'fontsize') {
(_wrap_setLastFunctionCall("htmlbox.full.js",337,16345,16381,d.idoc.execCommand,false,false) || _wrap_popCallStack(    d.idoc.execCommand(cmd, false, arg1)));
  } else if (cmd === 'backcolor') {
    if ($.browser.msie) {
(_wrap_setLastFunctionCall("htmlbox.full.js",340,16451,16495,d.idoc.execCommand,false,false) || _wrap_popCallStack(      d.idoc.execCommand('backcolor', false, arg1)));
    } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",342,16516,16562,d.idoc.execCommand,false,false) || _wrap_popCallStack(      d.idoc.execCommand('hilitecolor', false, arg1)));
    }
  } else if (cmd === 'fontcolor') {
(_wrap_setLastFunctionCall("htmlbox.full.js",345,16610,16654,d.idoc.execCommand,false,false) || _wrap_popCallStack(    d.idoc.execCommand('forecolor', false, arg1)));
  } else if (cmd === 'fontname') {
(_wrap_setLastFunctionCall("htmlbox.full.js",347,16695,16731,d.idoc.execCommand,false,false) || _wrap_popCallStack(    d.idoc.execCommand(cmd, false, arg1)));
  } else if (cmd === 'cut') {
    if ($.browser.msie === false) {
(_wrap_setLastFunctionCall("htmlbox.full.js",350,16805,16866,alert,false,false) || _wrap_popCallStack(      alert('Available in IExplore only.\nUse CTRL+X to cut text!')));
    } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",352,16887,16912,d.idoc.execCommand,false,false) || _wrap_popCallStack(      d.idoc.execCommand('Cut')));
    }
  } else if (cmd === 'copy') {
    if ($.browser.msie === false) {
(_wrap_setLastFunctionCall("htmlbox.full.js",356,16993,17055,alert,false,false) || _wrap_popCallStack(      alert('Available in IExplore only.\nUse CTRL+C to copy text!')));
    } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",358,17076,17102,d.idoc.execCommand,false,false) || _wrap_popCallStack(      d.idoc.execCommand('Copy')));
    }
  } else if (cmd === 'paste') {
    if ($.browser.msie === false) {
(_wrap_setLastFunctionCall("htmlbox.full.js",362,17184,17247,alert,false,false) || _wrap_popCallStack(      alert('Available in IExplore only.\nUse CTRL+V to paste text!')));
    } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",364,17268,17295,d.idoc.execCommand,false,false) || _wrap_popCallStack(      d.idoc.execCommand('Paste')));
    }
  } else if (cmd === 'format') {
    if (arg1 === 'pindent') {
(_wrap_setLastFunctionCall("htmlbox.full.js",368,17372,17427,this.wrap_tags,false,false) || _wrap_popCallStack(      this.wrap_tags('<p style="text-indent:20px;">', '</p>')));
    } else if (arg1 !== '') {
(_wrap_setLastFunctionCall("htmlbox.full.js",370,17465,17523,d.idoc.execCommand,false,false) || _wrap_popCallStack(      d.idoc.execCommand('formatBlock', false, '<' + arg1 + '>')));
    }
  } else if (cmd === 'striptags') {
    var sel = (_wrap_setLastFunctionCall("htmlbox.full.js",373,17581,17596,get_selection,false,false) || _wrap_popCallStack(get_selection()));
    sel = (_wrap_setLastFunctionCall("htmlbox.full.js",374,17608,17640,sel.replace,false,false) || _wrap_popCallStack(sel.replace(/(<([^>]+)>)/gi, '')));
(_wrap_setLastFunctionCall("htmlbox.full.js",375,17646,17662,insert_text,false,false) || _wrap_popCallStack(    insert_text(sel)));
  } else if (cmd === 'quote') {
(_wrap_setLastFunctionCall("htmlbox.full.js",377,17700,17955,this.wrap_tags,false,false) || _wrap_popCallStack(    this.wrap_tags('<br /><div style="position:relative;top:10px;left:11px;font-size:11px;font-family:verdana;">Quote</div><div class="quote" contenteditable="true" style="border:1px inset silver;margin:10px;padding:5px;background:#EFF7FF;">', '</div><br />')));
  } else if (cmd === 'styles') {
(_wrap_setLastFunctionCall("htmlbox.full.js",379,17994,18042,this.wrap_tags,false,false) || _wrap_popCallStack(    this.wrap_tags(styles[arg1][1], styles[arg1][2])));
  } else if (cmd === 'syntax') {
(_wrap_setLastFunctionCall("htmlbox.full.js",381,18081,18129,this.wrap_tags,false,false) || _wrap_popCallStack(    this.wrap_tags(syntax[arg1][1], syntax[arg1][2])));
  } else if (cmd === 'bold') {
(_wrap_setLastFunctionCall("htmlbox.full.js",383,18166,18195,this.wrap_tags,false,false) || _wrap_popCallStack(    this.wrap_tags('<b>', '</b>')));
  } else if (cmd === 'undo' && urm) {
    if ((_wrap_setLastFunctionCall("htmlbox.full.js",385,18243,18257,urm.can_undo,false,false) || _wrap_popCallStack(urm.can_undo()))) {
      var undo = (_wrap_setLastFunctionCall("htmlbox.full.js",386,18278,18288,urm.undo,false,false) || _wrap_popCallStack(urm.undo()));
(_wrap_setLastFunctionCall("htmlbox.full.js",387,18296,18315,this.set_text,false,false) || _wrap_popCallStack(      this.set_text(undo)));
      return true;
    }
  } else if (cmd === 'redo' && urm) {
    if ((_wrap_setLastFunctionCall("htmlbox.full.js",391,18388,18402,urm.can_redo,false,false) || _wrap_popCallStack(urm.can_redo()))) {
      var redo = (_wrap_setLastFunctionCall("htmlbox.full.js",392,18423,18433,urm.redo,false,false) || _wrap_popCallStack(urm.redo()));
(_wrap_setLastFunctionCall("htmlbox.full.js",393,18441,18460,this.set_text,false,false) || _wrap_popCallStack(      this.set_text(redo)));
      return true;
    }
  } else if (cmd === 'about') {
    var about = '<p>HtmlBox is a modern, cross-browser, interactive, open-source text area built on top of the excellent jQuery library.</p>';
    about += '<p style=\'margin:2px;\'><b>Official Website:</b> <a href=\'http://remiya.com\' target=\'_blank\'>http://remiya.com</a></p>';
    about += '<p style=\'margin:2px;\'><b>License:</b> MIT license</p>';
    about += '<p style=\'margin:2px;\'><b>Version:</b> 4.0</p>';
    about += '<p style=\'margin:2px;\'><b>Credits:</b></p>';
    about += '<p style=\'margin:2px;padding-left:20px;\'><a href=\'http://jquery.com/\' target=\'_blank\'>JQuery (JavaScript Framework)</a></p>';
    about += '<p style=\'margin:2px;padding-left:20px;\'><a href=\'http://www.famfamfam.com/lab/icons/silk/\' target=\'_blank\'>Silk (Icon Set)</a></p>';
    var html = '<table cellspacing="3" cellpadding="0" width="100%" height="100%"  style="background:#D7E3F2;border:2px solid #7E9DB9;font-family:verdana;font-size:12px;">';
    html += '<tr><td align="center" valign="middle" height="30" style="font-size:16px;"><b>About HtmlBox</b></td></tr>';
    html += '<tr><td style="border:1px solid #7E9DB9;background:white;font-size:11px;" valign="top"><div style="overflow:auto;height:140px;" >' + about + '</div></td></tr>';
    html += '<tr><td height="20"><table width="100%" style="font-family:verdana;font-size:10px;"><tr><td align="left">Copyright&copy;2009 Remiya Solutions<br>All right reserved!</td><td align="right"><button style="width:60px;height:24px;font-family:verdana;font-size:11px;" onclick="$(\'#' + d.id + '_about\').fadeOut(500);">Close</button></td></tr></table></td></tr>';
    html += '</table>';
    var w = 300;
    var h = 200;
    var top = ((_wrap_setLastFunctionCall("htmlbox.full.js",411,20214,20232,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",411,20214,20223,$,false,false) || _wrap_popCallStack($(window))).height())) - 200) / 2 + (_wrap_setLastFunctionCall("htmlbox.full.js",411,20246,20269,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",411,20246,20257,$,false,false) || _wrap_popCallStack($(document))).scrollTop()));
    var left = ((_wrap_setLastFunctionCall("htmlbox.full.js",412,20287,20304,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",412,20287,20296,$,false,false) || _wrap_popCallStack($(window))).width())) - 300) / 2;
    if ((_wrap_setLastFunctionCall("htmlbox.full.js",413,20325,20349,$,false,false) || _wrap_popCallStack($('#' + d.id + '_about'))).length === 0) {
(_wrap_setLastFunctionCall("htmlbox.full.js",414,20372,20566,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("htmlbox.full.js",414,20372,20381,$,false,false) || _wrap_popCallStack($('body'))).append('<div id=\'' + d.id + '_about\' style=\'display:none;position:absolute;background:red;width:' + w + 'px;height:' + h + 'px;top:' + top + 'px;left:' + left + 'px;\'>about</div>')));
(_wrap_setLastFunctionCall("htmlbox.full.js",415,20574,20609,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("htmlbox.full.js",415,20574,20598,$,false,false) || _wrap_popCallStack($('#' + d.id + '_about'))).html(html)));
    } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",417,20630,20670,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("htmlbox.full.js",417,20630,20654,$,false,false) || _wrap_popCallStack($('#' + d.id + '_about'))).css('top', top)));
(_wrap_setLastFunctionCall("htmlbox.full.js",418,20678,20720,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("htmlbox.full.js",418,20678,20702,$,false,false) || _wrap_popCallStack($('#' + d.id + '_about'))).css('left', left)));
    }
(_wrap_setLastFunctionCall("htmlbox.full.js",420,20732,20764,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("htmlbox.full.js",420,20732,20756,$,false,false) || _wrap_popCallStack($('#' + d.id + '_about'))).focus()));
(_wrap_setLastFunctionCall("htmlbox.full.js",421,20770,20807,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("htmlbox.full.js",421,20770,20794,$,false,false) || _wrap_popCallStack($('#' + d.id + '_about'))).fadeIn(1000)));
  } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",423,20824,20860,d.idoc.execCommand,false,false) || _wrap_popCallStack(    d.idoc.execCommand(cmd, false, null)));
  }
  if ((_wrap_setLastFunctionCall("htmlbox.full.js",425,20872,20900,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",425,20872,20885,$,false,false) || _wrap_popCallStack($('#' + d.id))).is(':visible'))) === false) {
(_wrap_setLastFunctionCall("htmlbox.full.js",426,20918,20952,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("htmlbox.full.js",426,20918,20931,$,false,false) || _wrap_popCallStack($('#' + d.id))).val((_wrap_setLastFunctionCall("htmlbox.full.js",426,20936,20951,this.get_html,false,false) || _wrap_popCallStack(this.get_html())))));
    if (urm) {
(_wrap_setLastFunctionCall("htmlbox.full.js",428,20975,20999,urm.add,false,false) || _wrap_popCallStack(      urm.add((_wrap_setLastFunctionCall("htmlbox.full.js",428,20983,20998,this.get_html,false,false) || _wrap_popCallStack(this.get_html())))));
    }
    if (undefined !== d.change) {
(_wrap_setLastFunctionCall("htmlbox.full.js",431,21047,21057,d.change,false,false) || _wrap_popCallStack(      d.change()));
    }
  }
};
  this.get_text = function() {
_wrap_addFunctionToMap('htmlbox.full.js', 435, 21090,21468, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if ((_wrap_setLastFunctionCall("htmlbox.full.js",436,21109,21137,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",436,21109,21122,$,false,false) || _wrap_popCallStack($('#' + d.id))).is(':visible')))) {
    return (_wrap_setLastFunctionCall("htmlbox.full.js",437,21152,21171,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",437,21152,21165,$,false,false) || _wrap_popCallStack($('#' + d.id))).val()));
  }
  var text;
  if ($.browser.msie) {
    text = d.iframe.contentWindow.document.body.innerText;
  } else {
    var html = (_wrap_setLastFunctionCall("htmlbox.full.js",443,21298,21362,d.iframe.contentWindow.document.body.ownerDocument.createRange,false,false) || _wrap_popCallStack(d.iframe.contentWindow.document.body.ownerDocument.createRange()));
(_wrap_setLastFunctionCall("htmlbox.full.js",444,21368,21429,html.selectNodeContents,false,false) || _wrap_popCallStack(    html.selectNodeContents(d.iframe.contentWindow.document.body)));
    text = html;
  }
  return text;
};
  this.set_text = function(txt) {
_wrap_addFunctionToMap('htmlbox.full.js', 449, 21488,22117, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var text = undefined === txt ? '' : txt;
  if (text === '' && $.browser.safari) {
    text = '&nbsp;';
  }
  if ((_wrap_setLastFunctionCall("htmlbox.full.js",454,21619,21647,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",454,21619,21632,$,false,false) || _wrap_popCallStack($('#' + d.id))).is(':visible')))) {
(_wrap_setLastFunctionCall("htmlbox.full.js",455,21655,21678,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("htmlbox.full.js",455,21655,21668,$,false,false) || _wrap_popCallStack($('#' + d.id))).val(text)));
  } else {
    if ($.browser.mozilla || $.browser.safari) {
(_wrap_setLastFunctionCall("htmlbox.full.js",458,21746,21781,d.idoc.open,false,false) || _wrap_popCallStack(      d.idoc.open('text/html', 'replace')));
(_wrap_setLastFunctionCall("htmlbox.full.js",459,21789,21807,d.idoc.write,false,false) || _wrap_popCallStack(      d.idoc.write(text)));
(_wrap_setLastFunctionCall("htmlbox.full.js",460,21815,21829,d.idoc.close,false,false) || _wrap_popCallStack(      d.idoc.close()));
    } else {
      d.idoc.body.innerHTML = '';
      if (text !== '') {
(_wrap_setLastFunctionCall("htmlbox.full.js",464,21911,21929,d.idoc.write,false,false) || _wrap_popCallStack(        d.idoc.write(text)));
      }
    }
(_wrap_setLastFunctionCall("htmlbox.full.js",467,21949,21956,style,false,false) || _wrap_popCallStack(    style()));
    d.idoc.body.contentEditable = true;
  }
  if (urm) {
(_wrap_setLastFunctionCall("htmlbox.full.js",471,22019,22043,urm.add,false,false) || _wrap_popCallStack(    urm.add((_wrap_setLastFunctionCall("htmlbox.full.js",471,22027,22042,this.get_html,false,false) || _wrap_popCallStack(this.get_html())))));
  }
  if (undefined !== d.change) {
(_wrap_setLastFunctionCall("htmlbox.full.js",474,22085,22095,d.change,false,false) || _wrap_popCallStack(    d.change()));
  }
  return this;
};
  this.get_html = function() {
_wrap_addFunctionToMap('htmlbox.full.js', 478, 22137,22406, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var html;
  if ((_wrap_setLastFunctionCall("htmlbox.full.js",480,22168,22196,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",480,22168,22181,$,false,false) || _wrap_popCallStack($('#' + d.id))).is(':visible')))) {
    html = (_wrap_setLastFunctionCall("htmlbox.full.js",481,22211,22230,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("htmlbox.full.js",481,22211,22224,$,false,false) || _wrap_popCallStack($('#' + d.id))).val()));
  } else {
    html = d.iframe.contentWindow.document.body.innerHTML;
  }
  if (typeof getXHTML === 'function') {
    return (_wrap_setLastFunctionCall("htmlbox.full.js",486,22357,22371,getXHTML,false,false) || _wrap_popCallStack(getXHTML(html)));
  } else {
    return html;
  }
};
  this.change = function(fn) {
_wrap_addFunctionToMap('htmlbox.full.js', 491, 22424,22472, (typeof arguments === 'object' ? arguments.callee.caller : null));

  d.change = fn;
  return this;
};
  this.remove = function() {
_wrap_addFunctionToMap('htmlbox.full.js', 495, 22490,22661, (typeof arguments === 'object' ? arguments.callee.caller : null));

  global_hb[d.id] = undefined;
(_wrap_setLastFunctionCall("htmlbox.full.js",497,22536,22568,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("htmlbox.full.js",497,22536,22559,$,false,false) || _wrap_popCallStack($('#' + d.id + '_wrap'))).remove()));
  if ((_wrap_setLastFunctionCall("htmlbox.full.js",498,22576,22600,$,false,false) || _wrap_popCallStack($('#' + d.id + '_about'))).length === 0) {
(_wrap_setLastFunctionCall("htmlbox.full.js",499,22621,22654,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("htmlbox.full.js",499,22621,22645,$,false,false) || _wrap_popCallStack($('#' + d.id + '_about'))).remove()));
  }
};
  this.post = function(url, data) {
_wrap_addFunctionToMap('htmlbox.full.js', 502, 22677,22890, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (undefined === data) {
    data = (_wrap_setLastFunctionCall("htmlbox.full.js",504,22738,22753,this.get_html,false,false) || _wrap_popCallStack(this.get_html()));
  }
  data = d.id + '=' + data;
(_wrap_setLastFunctionCall("htmlbox.full.js",507,22789,22887,$.ajax,false,false) || _wrap_popCallStack(  $.ajax({type: 'POST', data: data, url: url, dataType: 'html', error: d.error, success: d.success})));
};
  this.get = function(url, data) {
_wrap_addFunctionToMap('htmlbox.full.js', 509, 22905,23117, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (undefined === data) {
    data = (_wrap_setLastFunctionCall("htmlbox.full.js",511,22966,22981,this.get_html,false,false) || _wrap_popCallStack(this.get_html()));
  }
  data = d.id + '=' + data;
(_wrap_setLastFunctionCall("htmlbox.full.js",514,23017,23114,$.ajax,false,false) || _wrap_popCallStack(  $.ajax({type: 'GET', data: data, url: url, dataType: 'html', error: d.error, success: d.success})));
};
  this.success = function(fn) {
_wrap_addFunctionToMap('htmlbox.full.js', 516, 23136,23185, (typeof arguments === 'object' ? arguments.callee.caller : null));

  d.success = fn;
  return this;
};
  this.error = function(fn) {
_wrap_addFunctionToMap('htmlbox.full.js', 520, 23202,23249, (typeof arguments === 'object' ? arguments.callee.caller : null));

  d.error = fn;
  return this;
};
(_wrap_setLastFunctionCall("htmlbox.full.js",524,23253,23270,this._init,false,false) || _wrap_popCallStack(  this._init(false)));
  return this;
};
}(jQuery))));
