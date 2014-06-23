_wrap_staticMeasuredFunctions['htmlbox.full.js'] = 27;
_wrap_staticMeasuredCalls['htmlbox.full.js'] =265;
((_wrap_setLastFunctionCall("htmlbox.full.js",1,1,31665) || function($) {
_wrap_addFunctionToMap('htmlbox.full.js', 1, 1,31657);

  $.fn.htmlbox = function(options) {
_wrap_addFunctionToMap('htmlbox.full.js', 2, 35,31654);

  var colors = typeof document.htmlbox_colors === 'function' ? (_wrap_setLastFunctionCall("htmlbox.full.js",3,125,150) || document.htmlbox_colors()) : ['silver', 'silver', 'white', 'white', 'yellow', 'yellow', 'orange', 'orange', 'red', 'red', 'green', 'green', 'blue', 'blue', 'brown', 'brown', 'black', 'black'];
  var styles = typeof document.htmlbox_styles === 'function' ? (_wrap_setLastFunctionCall("htmlbox.full.js",23,688,713) || document.htmlbox_styles()) : [['No Styles', '', '']];
  var syntax = typeof document.htmlbox_syntax === 'function' ? (_wrap_setLastFunctionCall("htmlbox.full.js",28,888,913) || document.htmlbox_syntax()) : [['No Syntax', '', '']];
  var urm = typeof htmlbox_undo_redo_manager === 'function' ? (_wrap_setLastFunctionCall("htmlbox.full.js",33,1087,1118) || new htmlbox_undo_redo_manager()) : false;
  var d = {toolbars: [['bold', 'italic', 'underline']], idir: './images/', icons: 'default', about: true, skin: 'default', output: 'xhtml', toolbar_height: 24, tool_height: 16, tool_width: 16, tool_image_height: 16, tool_image_width: 16, css: 'body{margin:3px;font-family:verdana;font-size:11px;}p{margin:0px;}', success: function(data) {
_wrap_addFunctionToMap('htmlbox.full.js', 51, 1759,1827);

(_wrap_setLastFunctionCall("htmlbox.full.js",52,1797,1808) ||   alert(data));
}, error: function(a, b, c) {
_wrap_addFunctionToMap('htmlbox.full.js', 54, 1852,1923);

  return this;
}};
  d = (_wrap_setLastFunctionCall("htmlbox.full.js",58,1951,1971) || $.extend(d, options));
  if ((_wrap_setLastFunctionCall("htmlbox.full.js",59,1985,2020) || d.idir.substring(d.idir.length - 1)) !== '/') {
    d.idir += '/';
  }
  var get_selection = function() {
_wrap_addFunctionToMap('htmlbox.full.js', 62, 2097,3216);

  var range;
  if ($.browser.msie) {
    range = (_wrap_setLastFunctionCall("htmlbox.full.js",65,2192,2247) || d.iframe.contentWindow.document.selection.createRange());
    if (range.htmlText && range.text) {
      return range.htmlText;
    }
  } else {
    if (d.iframe.contentWindow.getSelection) {
      var selection = (_wrap_setLastFunctionCall("htmlbox.full.js",71,2478,2515) || d.iframe.contentWindow.getSelection());
      if (selection.rangeCount > 0 && window.XMLSerializer) {
        range = (_wrap_setLastFunctionCall("htmlbox.full.js",73,2625,2648) || selection.getRangeAt(0));
        var html = (_wrap_setLastFunctionCall("htmlbox.full.js",74,2685,2745) || (_wrap_setLastFunctionCall("htmlbox.full.js",74,2685,2704) || new XMLSerializer()).serializeToString((_wrap_setLastFunctionCall("htmlbox.full.js",74,2723,2744) || range.cloneContents())));
        return html;
      }
      if (selection.rangeCount > 0) {
        range = (_wrap_setLastFunctionCall("htmlbox.full.js",78,2890,2913) || selection.getRangeAt(0));
        var clonedSelection = (_wrap_setLastFunctionCall("htmlbox.full.js",79,2961,2982) || range.cloneContents());
        var div = (_wrap_setLastFunctionCall("htmlbox.full.js",80,3018,3047) || document.createElement('div'));
(_wrap_setLastFunctionCall("htmlbox.full.js",81,3073,3105) ||         div.appendChild(clonedSelection));
        return div.innerHTML;
      }
    }
  }
};
  var in_array = function(o, a) {
_wrap_addFunctionToMap('htmlbox.full.js', 87, 3241,3421);

  for (var i in a) {
    if (i === o) {
      return true;
    }
  }
  return false;
};
  var insert_text = function(text, start, end) {
_wrap_addFunctionToMap('htmlbox.full.js', 95, 3449,5023);

  if ($.browser.msie) {
(_wrap_setLastFunctionCall("htmlbox.full.js",97,3529,3559) ||     d.iframe.contentWindow.focus());
    if (typeof d.idoc.selection !== 'undefined' && d.idoc.selection.type !== 'Text' && d.idoc.selection.type !== 'None') {
      start = false;
(_wrap_setLastFunctionCall("htmlbox.full.js",100,3751,3775) ||       d.idoc.selection.clear());
    }
    var sel = (_wrap_setLastFunctionCall("htmlbox.full.js",102,3821,3851) || d.idoc.selection.createRange());
(_wrap_setLastFunctionCall("htmlbox.full.js",103,3869,3888) ||     sel.pasteHTML(text));
    if ((_wrap_setLastFunctionCall("htmlbox.full.js",104,3910,3928) || text.indexOf('\n')) === -1) {
      if (start === false) {
      } else {
        if (typeof start !== 'undefined') {
(_wrap_setLastFunctionCall("htmlbox.full.js",108,4099,4147) ||           sel.moveStart('character', -text.length + start));
(_wrap_setLastFunctionCall("htmlbox.full.js",109,4177,4207) ||           sel.moveEnd('character', -end));
        } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",111,4270,4310) ||           sel.moveStart('character', -text.length));
        }
      }
(_wrap_setLastFunctionCall("htmlbox.full.js",114,4380,4392) ||       sel.select());
    }
  } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",117,4449,4494) ||     d.idoc.execCommand('insertHTML', false, text));
  }
  if ((_wrap_setLastFunctionCall("htmlbox.full.js",119,4526,4554) || (_wrap_setLastFunctionCall("htmlbox.full.js",119,4526,4539) || $('#' + d.id)).is(':visible')) === false) {
    var html = (_wrap_setLastFunctionCall("htmlbox.full.js",120,4595,4624) || (_wrap_setLastFunctionCall("htmlbox.full.js",120,4595,4609) || $('#1' + d.id)).is(':visible')) ? (_wrap_setLastFunctionCall("htmlbox.full.js",120,4627,4646) || (_wrap_setLastFunctionCall("htmlbox.full.js",120,4627,4640) || $('#' + d.id)).val()) : html = d.iframe.contentWindow.document.body.innerHTML;
    html = typeof getXHTML === 'function' ? (_wrap_setLastFunctionCall("htmlbox.full.js",121,4760,4774) || getXHTML(html)) : html;
(_wrap_setLastFunctionCall("htmlbox.full.js",122,4799,4822) ||     (_wrap_setLastFunctionCall("htmlbox.full.js",122,4799,4812) || $('#' + d.id)).val(html));
    if (urm) {
(_wrap_setLastFunctionCall("htmlbox.full.js",124,4871,4884) ||       urm.add(html));
    }
    if (undefined !== d.change) {
(_wrap_setLastFunctionCall("htmlbox.full.js",127,4970,4980) ||       d.change());
    }
  }
};
  var keyup = function(e) {
_wrap_addFunctionToMap('htmlbox.full.js', 131, 5045,5465);

  var html = (_wrap_setLastFunctionCall("htmlbox.full.js",132,5083,5112) || (_wrap_setLastFunctionCall("htmlbox.full.js",132,5083,5097) || $('#1' + d.id)).is(':visible')) ? (_wrap_setLastFunctionCall("htmlbox.full.js",132,5115,5134) || (_wrap_setLastFunctionCall("htmlbox.full.js",132,5115,5128) || $('#' + d.id)).val()) : html = d.iframe.contentWindow.document.body.innerHTML;
  if (urm) {
(_wrap_setLastFunctionCall("htmlbox.full.js",134,5231,5244) ||     urm.add(html));
  }
  html = typeof getXHTML === 'function' ? (_wrap_setLastFunctionCall("htmlbox.full.js",136,5312,5326) || getXHTML(html)) : html;
(_wrap_setLastFunctionCall("htmlbox.full.js",137,5347,5370) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",137,5347,5360) || $('#' + d.id)).val(html));
  if (undefined !== d.change) {
(_wrap_setLastFunctionCall("htmlbox.full.js",139,5430,5440) ||     d.change());
  }
};
  var style = function() {
_wrap_addFunctionToMap('htmlbox.full.js', 142, 5487,6365);

  if ((_wrap_setLastFunctionCall("htmlbox.full.js",143,5517,5545) || d.css.indexOf('background:')) === -1) {
    d.css += 'body{background:white;}';
  }
  if ((_wrap_setLastFunctionCall("htmlbox.full.js",146,5638,5672) || d.css.indexOf('background-image:')) === -1) {
    d.css = d.css + 'body{background-image:url(' + d.idir + 'logo.gif);background-position:top right;background-repeat:no-repeat;}';
  }
  if (d.idoc.createStyleSheet) {
    (_wrap_setLastFunctionCall("htmlbox.full.js",150,5901,5926) || d.idoc.createStyleSheet()).cssText = d.css;
  } else {
    var css = (_wrap_setLastFunctionCall("htmlbox.full.js",152,5991,6019) || d.idoc.createElement('link'));
    css.rel = 'stylesheet';
    css.href = 'data:text/css,' + (_wrap_setLastFunctionCall("htmlbox.full.js",154,6107,6120) || escape(d.css));
    if ($.browser.opera) {
(_wrap_setLastFunctionCall("htmlbox.full.js",156,6181,6220) ||       d.idoc.documentElement.appendChild(css));
    } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",158,6267,6322) ||       (_wrap_setLastFunctionCall("htmlbox.full.js",158,6267,6302) || d.idoc.getElementsByTagName('head'))[0].appendChild(css));
    }
  }
};
  var toolbar = function() {
_wrap_addFunctionToMap('htmlbox.full.js', 162, 6389,14936);

  var h = '';
  if (d.about && !(_wrap_setLastFunctionCall("htmlbox.full.js",164,6455,6487) || in_array(d.toolbars[0], 'about'))) {
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
        var cmd = 'var cmd = unescape("' + (_wrap_setLastFunctionCall("htmlbox.full.js",177,7343,7380) || escape((_wrap_setLastFunctionCall("htmlbox.full.js",177,7350,7379) || toolbar[i].command.toString()))) + '");eval("var fn="+cmd);fn()\'';
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
      if ((_wrap_setLastFunctionCall("htmlbox.full.js",255,14540,14566) || in_array(toolbar[i], cmds))) {
        h += '<td class=\'' + d.id + '_html_button\' valign=\'middle\' align=\'center\' onclick=\'global_hb["' + d.id + '"].cmd("' + toolbar[i] + '")\' title=\'' + cmds[toolbar[i]] + '\'><image src=\'' + img + '\'></td>';
      }
    }
    h += '</table></td></tr>';
  }
  return h;
};
  this.wrap_tags = function(start, end) {
_wrap_addFunctionToMap('htmlbox.full.js', 263, 14963,15259);

  var sel = (_wrap_setLastFunctionCall("htmlbox.full.js",264,15009,15024) || get_selection());
  if (undefined === sel) {
    sel = '';
  }
  if (undefined === end) {
    end = '';
  }
(_wrap_setLastFunctionCall("htmlbox.full.js",271,15192,15248) ||   insert_text(start + sel + end, start.length, end.length));
};
  this._init = function(is_init) {
_wrap_addFunctionToMap('htmlbox.full.js', 273, 15282,20789);

  if (undefined === window.global_hb) {
    global_hb = [];
  }
  if (!(_wrap_setLastFunctionCall("htmlbox.full.js",277,15416,15434) || (_wrap_setLastFunctionCall("htmlbox.full.js",277,15416,15423) || $(this)).attr('id'))) {
(_wrap_setLastFunctionCall("htmlbox.full.js",278,15454,15500) ||     (_wrap_setLastFunctionCall("htmlbox.full.js",278,15454,15461) || $(this)).attr('id', 'jqhb_' + global_hb.length));
    d.id = 'jqhb_' + global_hb.length;
    global_hb[d.id] = global_hb;
  } else {
    d.id = (_wrap_setLastFunctionCall("htmlbox.full.js",282,15642,15660) || (_wrap_setLastFunctionCall("htmlbox.full.js",282,15642,15649) || $(this)).attr('id'));
  }
  if (undefined === global_hb[d.id]) {
    global_hb[d.id] = this;
  }
  d.ta_wrap_id = d.id + '_wrap';
  var w = (_wrap_setLastFunctionCall("htmlbox.full.js",288,15842,15862) || (_wrap_setLastFunctionCall("htmlbox.full.js",288,15842,15849) || $(this)).css('width'));
  var h = (_wrap_setLastFunctionCall("htmlbox.full.js",289,15884,15905) || (_wrap_setLastFunctionCall("htmlbox.full.js",289,15884,15891) || $(this)).css('height'));
(_wrap_setLastFunctionCall("htmlbox.full.js",290,15919,16132) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",290,15919,15926) || $(this)).wrap('<table id=\'' + d.id + '_wrap\' width=\'' + w + '\' style=\'height:' + h + ';border:2px solid #E9EAEF;\' cellspacing=\'0\' cellpadding=\'0\'><tr><td id=\'' + d.id + '_container\'></td></tr></table>'));
(_wrap_setLastFunctionCall("htmlbox.full.js",291,16146,16208) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",291,16146,16189) || (_wrap_setLastFunctionCall("htmlbox.full.js",291,16146,16180) || (_wrap_setLastFunctionCall("htmlbox.full.js",291,16146,16171) || (_wrap_setLastFunctionCall("htmlbox.full.js",291,16146,16162) || (_wrap_setLastFunctionCall("htmlbox.full.js",291,16146,16153) || $(this)).parent()).parent()).parent()).parent()).prepend((_wrap_setLastFunctionCall("htmlbox.full.js",291,16198,16207) || toolbar())));
(_wrap_setLastFunctionCall("htmlbox.full.js",292,16222,16268) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",292,16222,16243) || $('.' + d.id + '_tb')).height(d.toolbar_height));
(_wrap_setLastFunctionCall("htmlbox.full.js",293,16282,17054) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",293,16282,16312) || $('.' + d.id + '_html_button')).each(function() {
_wrap_addFunctionToMap('htmlbox.full.js', 293, 16318,17053);

(_wrap_setLastFunctionCall("htmlbox.full.js",294,16348,16397) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",294,16348,16375) || (_wrap_setLastFunctionCall("htmlbox.full.js",294,16348,16355) || $(this)).width(d.tool_width)).height(d.tool_height));
(_wrap_setLastFunctionCall("htmlbox.full.js",295,16415,16557) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",295,16415,16436) || (_wrap_setLastFunctionCall("htmlbox.full.js",295,16415,16422) || $(this)).find('image')).each(function() {
_wrap_addFunctionToMap('htmlbox.full.js', 295, 16442,16556);

(_wrap_setLastFunctionCall("htmlbox.full.js",296,16476,16537) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",296,16476,16509) || (_wrap_setLastFunctionCall("htmlbox.full.js",296,16476,16483) || $(this)).width(d.tool_image_width)).height(d.tool_image_height));
}));
(_wrap_setLastFunctionCall("htmlbox.full.js",298,16575,16709) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",298,16575,16687) || (_wrap_setLastFunctionCall("htmlbox.full.js",298,16575,16654) || (_wrap_setLastFunctionCall("htmlbox.full.js",298,16575,16621) || (_wrap_setLastFunctionCall("htmlbox.full.js",298,16575,16582) || $(this)).css('border', '1px solid transparent')).css('background', 'transparent')).css('margin', '1px 1px 1px 1px')).css('padding', '1px'));
(_wrap_setLastFunctionCall("htmlbox.full.js",299,16727,16870) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",299,16727,16734) || $(this)).mouseover(function() {
_wrap_addFunctionToMap('htmlbox.full.js', 299, 16745,16869);

(_wrap_setLastFunctionCall("htmlbox.full.js",300,16779,16850) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",300,16779,16821) || (_wrap_setLastFunctionCall("htmlbox.full.js",300,16779,16786) || $(this)).css('border', '1px solid #BFCAFF')).css('background', '#EFF2FF'));
}));
(_wrap_setLastFunctionCall("htmlbox.full.js",302,16888,17038) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",302,16888,16895) || $(this)).mouseout(function() {
_wrap_addFunctionToMap('htmlbox.full.js', 302, 16905,17037);

(_wrap_setLastFunctionCall("htmlbox.full.js",303,16939,17018) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",303,16939,16985) || (_wrap_setLastFunctionCall("htmlbox.full.js",303,16939,16946) || $(this)).css('border', '1px solid transparent')).css('background', 'transparent'));
}));
}));
(_wrap_setLastFunctionCall("htmlbox.full.js",306,17068,17419) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",306,17068,17104) || (_wrap_setLastFunctionCall("htmlbox.full.js",306,17068,17089) || $('.' + d.id + '_tb')).find('select')).each(function() {
_wrap_addFunctionToMap('htmlbox.full.js', 306, 17110,17418);

(_wrap_setLastFunctionCall("htmlbox.full.js",307,17140,17248) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",307,17140,17215) || (_wrap_setLastFunctionCall("htmlbox.full.js",307,17140,17182) || (_wrap_setLastFunctionCall("htmlbox.full.js",307,17140,17147) || $(this)).css('border', '1px solid #E9EAEF')).css('background', 'transparent')).css('margin', '2px 2px 3px 2px'));
  if ($.browser.mozilla) {
(_wrap_setLastFunctionCall("htmlbox.full.js",309,17311,17385) ||     (_wrap_setLastFunctionCall("htmlbox.full.js",309,17311,17366) || (_wrap_setLastFunctionCall("htmlbox.full.js",309,17311,17338) || (_wrap_setLastFunctionCall("htmlbox.full.js",309,17311,17318) || $(this)).css('padding', '0')).css('position', 'relative')).css('top', '-2px'));
  }
}));
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
(_wrap_setLastFunctionCall("htmlbox.full.js",335,18344,18392) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",335,18344,18367) || $('#' + d.id + '_wrap')).css('border', hb_border));
(_wrap_setLastFunctionCall("htmlbox.full.js",336,18406,18462) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",336,18406,18429) || $('#' + d.id + '_wrap')).css('background', hb_background));
(_wrap_setLastFunctionCall("htmlbox.full.js",337,18476,18531) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",337,18476,18504) || $('#' + d.id + '_container')).css('background', 'white'));
(_wrap_setLastFunctionCall("htmlbox.full.js",338,18545,18598) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",338,18545,18566) || $('.' + d.id + '_tb')).css('border-bottom', tb_border));
  try {
    var iframe = (_wrap_setLastFunctionCall("htmlbox.full.js",340,18647,18679) || document.createElement('IFRAME'));
(_wrap_setLastFunctionCall("htmlbox.full.js",341,18697,18785) ||     (_wrap_setLastFunctionCall("htmlbox.full.js",341,18697,18766) || (_wrap_setLastFunctionCall("htmlbox.full.js",341,18697,18739) || (_wrap_setLastFunctionCall("htmlbox.full.js",341,18697,18722) || (_wrap_setLastFunctionCall("htmlbox.full.js",341,18697,18706) || $(iframe)).css('width', w)).css('height', h)).attr('id', d.id + '_html')).css('border', '0'));
(_wrap_setLastFunctionCall("htmlbox.full.js",342,18803,18835) ||     (_wrap_setLastFunctionCall("htmlbox.full.js",342,18803,18819) || (_wrap_setLastFunctionCall("htmlbox.full.js",342,18803,18810) || $(this)).parent()).prepend(iframe));
    d.iframe = iframe;
    d.idoc = iframe.contentWindow.document;
    d.idoc.designMode = 'on';
    var text = (_wrap_setLastFunctionCall("htmlbox.full.js",346,18997,19010) || (_wrap_setLastFunctionCall("htmlbox.full.js",346,18997,19004) || $(this)).val()) === '' ? '' : (_wrap_setLastFunctionCall("htmlbox.full.js",346,19025,19038) || (_wrap_setLastFunctionCall("htmlbox.full.js",346,19025,19032) || $(this)).val());
    if ($.browser.mozilla || $.browser.safari) {
(_wrap_setLastFunctionCall("htmlbox.full.js",348,19121,19156) ||       d.idoc.open('text/html', 'replace'));
(_wrap_setLastFunctionCall("htmlbox.full.js",349,19178,19196) ||       d.idoc.write(text));
(_wrap_setLastFunctionCall("htmlbox.full.js",350,19218,19232) ||       d.idoc.close());
    } else {
      if (text !== '') {
(_wrap_setLastFunctionCall("htmlbox.full.js",353,19322,19340) ||         d.idoc.write(text));
      } else {
        if ($.browser.msie) {
(_wrap_setLastFunctionCall("htmlbox.full.js",356,19445,19467) ||           d.idoc.write('&nbsp;'));
        }
      }
    }
    if ($.browser.msie === false) {
      iframe.contentWindow.document.body.contentEditable = true;
    }
    if ((_wrap_setLastFunctionCall("htmlbox.full.js",363,19700,19728) || d.css.indexOf('background:')) === -1) {
      d.css += 'body{background:white;}';
    }
    if ((_wrap_setLastFunctionCall("htmlbox.full.js",366,19833,19867) || d.css.indexOf('background-image:')) === -1) {
      d.css = d.css + 'body{background-image:url(' + d.idir + 'logo.gif);background-position:top right;background-repeat:no-repeat;}';
    }
    if (d.idoc.createStyleSheet) {
(_wrap_setLastFunctionCall("htmlbox.full.js",370,20112,20206) ||       setTimeout('global_hb[\'' + d.id + '\'].set_text(global_hb[\'' + d.id + '\'].get_html())', 10));
    } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",372,20253,20260) ||       style());
    }
    if (iframe.contentWindow.document.attachEvent) {
(_wrap_setLastFunctionCall("htmlbox.full.js",375,20365,20424) ||       iframe.contentWindow.document.attachEvent('onkeyup', keyup));
    } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",377,20471,20540) ||       iframe.contentWindow.document.addEventListener('keyup', keyup, false));
    }
(_wrap_setLastFunctionCall("htmlbox.full.js",379,20576,20590) ||     (_wrap_setLastFunctionCall("htmlbox.full.js",379,20576,20583) || $(this)).hide());
  }  catch (e) {
(_wrap_setLastFunctionCall("htmlbox.full.js",381,20634,20707) ||   alert('This rich text component is not supported by your browser.\n' + e));
(_wrap_setLastFunctionCall("htmlbox.full.js",382,20725,20739) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",382,20725,20732) || $(this)).show());
}
  return this;
};
  this.cmd = function(cmd, arg1) {
_wrap_addFunctionToMap('htmlbox.full.js', 386, 20810,28283);

(_wrap_setLastFunctionCall("htmlbox.full.js",387,20845,20875) ||   d.iframe.contentWindow.focus());
  if (cmd === 'paragraph') {
    cmd = 'format';
    arg1 = 'p';
  }
  var cmds = {'center': 'justifycenter', 'hr': 'inserthorizontalrule', 'justify': 'justifyfull', 'left': 'justifyleft', 'ol': 'insertorderedlist', 'right': 'justifyright', 'strike': 'strikethrough', 'sub': 'subscript', 'sup': 'superscript', 'ul': 'insertunorderedlist'};
  if ((_wrap_setLastFunctionCall("htmlbox.full.js",404,21505,21524) || in_array(cmd, cmds))) {
    cmd = cmds[cmd];
  }
  if (cmd === 'code') {
    var text = (_wrap_setLastFunctionCall("htmlbox.full.js",408,21636,21651) || this.get_html());
    if ((_wrap_setLastFunctionCall("htmlbox.full.js",409,21673,21701) || (_wrap_setLastFunctionCall("htmlbox.full.js",409,21673,21686) || $('#' + d.id)).is(':visible'))) {
(_wrap_setLastFunctionCall("htmlbox.full.js",410,21725,21745) ||       (_wrap_setLastFunctionCall("htmlbox.full.js",410,21725,21738) || $('#' + d.id)).hide());
(_wrap_setLastFunctionCall("htmlbox.full.js",411,21767,21797) ||       (_wrap_setLastFunctionCall("htmlbox.full.js",411,21767,21790) || $('#' + d.id + '_html')).show());
(_wrap_setLastFunctionCall("htmlbox.full.js",412,21819,21838) ||       this.set_text(text));
    } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",414,21885,21905) ||       (_wrap_setLastFunctionCall("htmlbox.full.js",414,21885,21898) || $('#' + d.id)).show());
(_wrap_setLastFunctionCall("htmlbox.full.js",415,21927,21957) ||       (_wrap_setLastFunctionCall("htmlbox.full.js",415,21927,21950) || $('#' + d.id + '_html')).hide());
(_wrap_setLastFunctionCall("htmlbox.full.js",416,21979,21998) ||       this.set_text(text));
(_wrap_setLastFunctionCall("htmlbox.full.js",417,22020,22041) ||       (_wrap_setLastFunctionCall("htmlbox.full.js",417,22020,22033) || $('#' + d.id)).focus());
    }
  } else if (cmd === 'link') {
(_wrap_setLastFunctionCall("htmlbox.full.js",420,22118,22196) ||     d.idoc.execCommand('createlink', false, (_wrap_setLastFunctionCall("htmlbox.full.js",420,22158,22195) || prompt('Paste Web Address URL Here:'))));
  } else if (cmd === 'image') {
(_wrap_setLastFunctionCall("htmlbox.full.js",422,22256,22329) ||     d.idoc.execCommand('insertimage', false, (_wrap_setLastFunctionCall("htmlbox.full.js",422,22297,22328) || prompt('Paste Image URL Here:'))));
  } else if (cmd === 'fontsize') {
(_wrap_setLastFunctionCall("htmlbox.full.js",424,22392,22428) ||     d.idoc.execCommand(cmd, false, arg1));
  } else if (cmd === 'backcolor') {
    if ($.browser.msie) {
(_wrap_setLastFunctionCall("htmlbox.full.js",427,22534,22578) ||       d.idoc.execCommand('backcolor', false, arg1));
    } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",429,22625,22671) ||       d.idoc.execCommand('hilitecolor', false, arg1));
    }
  } else if (cmd === 'fontcolor') {
(_wrap_setLastFunctionCall("htmlbox.full.js",432,22753,22797) ||     d.idoc.execCommand('forecolor', false, arg1));
  } else if (cmd === 'fontname') {
(_wrap_setLastFunctionCall("htmlbox.full.js",434,22860,22896) ||     d.idoc.execCommand(cmd, false, arg1));
  } else if (cmd === 'cut') {
    if ($.browser.msie === false) {
(_wrap_setLastFunctionCall("htmlbox.full.js",437,23006,23067) ||       alert('Available in IExplore only.\nUse CTRL+X to cut text!'));
    } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",439,23114,23139) ||       d.idoc.execCommand('Cut'));
    }
  } else if (cmd === 'copy') {
    if ($.browser.msie === false) {
(_wrap_setLastFunctionCall("htmlbox.full.js",443,23268,23330) ||       alert('Available in IExplore only.\nUse CTRL+C to copy text!'));
    } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",445,23377,23403) ||       d.idoc.execCommand('Copy'));
    }
  } else if (cmd === 'paste') {
    if ($.browser.msie === false) {
(_wrap_setLastFunctionCall("htmlbox.full.js",449,23533,23596) ||       alert('Available in IExplore only.\nUse CTRL+V to paste text!'));
    } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",451,23643,23670) ||       d.idoc.execCommand('Paste'));
    }
  } else if (cmd === 'format') {
    if (arg1 === 'pindent') {
(_wrap_setLastFunctionCall("htmlbox.full.js",455,23795,23850) ||       this.wrap_tags('<p style="text-indent:20px;">', '</p>'));
    } else if (arg1 !== '') {
(_wrap_setLastFunctionCall("htmlbox.full.js",457,23914,23972) ||       d.idoc.execCommand('formatBlock', false, '<' + arg1 + '>'));
    }
  } else if (cmd === 'striptags') {
    var sel = (_wrap_setLastFunctionCall("htmlbox.full.js",460,24064,24079) || get_selection());
    sel = (_wrap_setLastFunctionCall("htmlbox.full.js",461,24103,24135) || sel.replace(/(<([^>]+)>)/gi, ''));
(_wrap_setLastFunctionCall("htmlbox.full.js",462,24153,24169) ||     insert_text(sel));
  } else if (cmd === 'quote') {
(_wrap_setLastFunctionCall("htmlbox.full.js",464,24229,24484) ||     this.wrap_tags('<br /><div style="position:relative;top:10px;left:11px;font-size:11px;font-family:verdana;">Quote</div><div class="quote" contenteditable="true" style="border:1px inset silver;margin:10px;padding:5px;background:#EFF7FF;">', '</div><br />'));
  } else if (cmd === 'styles') {
(_wrap_setLastFunctionCall("htmlbox.full.js",466,24545,24593) ||     this.wrap_tags(styles[arg1][1], styles[arg1][2]));
  } else if (cmd === 'syntax') {
(_wrap_setLastFunctionCall("htmlbox.full.js",468,24654,24702) ||     this.wrap_tags(syntax[arg1][1], syntax[arg1][2]));
  } else if (cmd === 'bold') {
(_wrap_setLastFunctionCall("htmlbox.full.js",470,24761,24790) ||     this.wrap_tags('<b>', '</b>'));
  } else if (cmd === 'undo' && urm) {
    if ((_wrap_setLastFunctionCall("htmlbox.full.js",472,24860,24874) || urm.can_undo())) {
      var undo = (_wrap_setLastFunctionCall("htmlbox.full.js",473,24909,24919) || urm.undo());
(_wrap_setLastFunctionCall("htmlbox.full.js",474,24941,24960) ||       this.set_text(undo));
      return true;
    }
  } else if (cmd === 'redo' && urm) {
    if ((_wrap_setLastFunctionCall("htmlbox.full.js",478,25081,25095) || urm.can_redo())) {
      var redo = (_wrap_setLastFunctionCall("htmlbox.full.js",479,25130,25140) || urm.redo());
(_wrap_setLastFunctionCall("htmlbox.full.js",480,25162,25181) ||       this.set_text(redo));
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
    var top = ((_wrap_setLastFunctionCall("htmlbox.full.js",498,27151,27169) || (_wrap_setLastFunctionCall("htmlbox.full.js",498,27151,27160) || $(window)).height()) - 200) / 2 + (_wrap_setLastFunctionCall("htmlbox.full.js",498,27183,27206) || (_wrap_setLastFunctionCall("htmlbox.full.js",498,27183,27194) || $(document)).scrollTop());
    var left = ((_wrap_setLastFunctionCall("htmlbox.full.js",499,27236,27253) || (_wrap_setLastFunctionCall("htmlbox.full.js",499,27236,27245) || $(window)).width()) - 300) / 2;
    if ((_wrap_setLastFunctionCall("htmlbox.full.js",500,27286,27310) || $('#' + d.id + '_about')).length === 0) {
(_wrap_setLastFunctionCall("htmlbox.full.js",501,27347,27541) ||       (_wrap_setLastFunctionCall("htmlbox.full.js",501,27347,27356) || $('body')).append('<div id=\'' + d.id + '_about\' style=\'display:none;position:absolute;background:red;width:' + w + 'px;height:' + h + 'px;top:' + top + 'px;left:' + left + 'px;\'>about</div>'));
(_wrap_setLastFunctionCall("htmlbox.full.js",502,27563,27598) ||       (_wrap_setLastFunctionCall("htmlbox.full.js",502,27563,27587) || $('#' + d.id + '_about')).html(html));
    } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",504,27645,27685) ||       (_wrap_setLastFunctionCall("htmlbox.full.js",504,27645,27669) || $('#' + d.id + '_about')).css('top', top));
(_wrap_setLastFunctionCall("htmlbox.full.js",505,27707,27749) ||       (_wrap_setLastFunctionCall("htmlbox.full.js",505,27707,27731) || $('#' + d.id + '_about')).css('left', left));
    }
(_wrap_setLastFunctionCall("htmlbox.full.js",507,27785,27817) ||     (_wrap_setLastFunctionCall("htmlbox.full.js",507,27785,27809) || $('#' + d.id + '_about')).focus());
(_wrap_setLastFunctionCall("htmlbox.full.js",508,27835,27872) ||     (_wrap_setLastFunctionCall("htmlbox.full.js",508,27835,27859) || $('#' + d.id + '_about')).fadeIn(1000));
  } else {
(_wrap_setLastFunctionCall("htmlbox.full.js",510,27911,27947) ||     d.idoc.execCommand(cmd, false, null));
  }
  if ((_wrap_setLastFunctionCall("htmlbox.full.js",512,27979,28007) || (_wrap_setLastFunctionCall("htmlbox.full.js",512,27979,27992) || $('#' + d.id)).is(':visible')) === false) {
(_wrap_setLastFunctionCall("htmlbox.full.js",513,28037,28071) ||     (_wrap_setLastFunctionCall("htmlbox.full.js",513,28037,28050) || $('#' + d.id)).val((_wrap_setLastFunctionCall("htmlbox.full.js",513,28055,28070) || this.get_html())));
    if (urm) {
(_wrap_setLastFunctionCall("htmlbox.full.js",515,28120,28144) ||       urm.add((_wrap_setLastFunctionCall("htmlbox.full.js",515,28128,28143) || this.get_html())));
    }
    if (undefined !== d.change) {
(_wrap_setLastFunctionCall("htmlbox.full.js",518,28230,28240) ||       d.change());
    }
  }
};
  this.get_text = function() {
_wrap_addFunctionToMap('htmlbox.full.js', 522, 28309,28826);

  if ((_wrap_setLastFunctionCall("htmlbox.full.js",523,28339,28367) || (_wrap_setLastFunctionCall("htmlbox.full.js",523,28339,28352) || $('#' + d.id)).is(':visible'))) {
    return (_wrap_setLastFunctionCall("htmlbox.full.js",524,28394,28413) || (_wrap_setLastFunctionCall("htmlbox.full.js",524,28394,28407) || $('#' + d.id)).val());
  }
  var text;
  if ($.browser.msie) {
    text = d.iframe.contentWindow.document.body.innerText;
  } else {
    var html = (_wrap_setLastFunctionCall("htmlbox.full.js",530,28604,28668) || d.iframe.contentWindow.document.body.ownerDocument.createRange());
(_wrap_setLastFunctionCall("htmlbox.full.js",531,28686,28747) ||     html.selectNodeContents(d.iframe.contentWindow.document.body));
    text = html;
  }
  return text;
};
  this.set_text = function(txt) {
_wrap_addFunctionToMap('htmlbox.full.js', 536, 28852,29808);

  var text = undefined === txt ? '' : txt;
  if (text === '' && $.browser.safari) {
    text = '&nbsp;';
  }
  if ((_wrap_setLastFunctionCall("htmlbox.full.js",541,29036,29064) || (_wrap_setLastFunctionCall("htmlbox.full.js",541,29036,29049) || $('#' + d.id)).is(':visible'))) {
(_wrap_setLastFunctionCall("htmlbox.full.js",542,29084,29107) ||     (_wrap_setLastFunctionCall("htmlbox.full.js",542,29084,29097) || $('#' + d.id)).val(text));
  } else {
    if ($.browser.mozilla || $.browser.safari) {
(_wrap_setLastFunctionCall("htmlbox.full.js",545,29211,29246) ||       d.idoc.open('text/html', 'replace'));
(_wrap_setLastFunctionCall("htmlbox.full.js",546,29268,29286) ||       d.idoc.write(text));
(_wrap_setLastFunctionCall("htmlbox.full.js",547,29308,29322) ||       d.idoc.close());
    } else {
      d.idoc.body.innerHTML = '';
      if (text !== '') {
(_wrap_setLastFunctionCall("htmlbox.full.js",551,29460,29478) ||         d.idoc.write(text));
      }
    }
(_wrap_setLastFunctionCall("htmlbox.full.js",554,29536,29543) ||     style());
    d.idoc.body.contentEditable = true;
  }
  if (urm) {
(_wrap_setLastFunctionCall("htmlbox.full.js",558,29650,29674) ||     urm.add((_wrap_setLastFunctionCall("htmlbox.full.js",558,29658,29673) || this.get_html())));
  }
  if (undefined !== d.change) {
(_wrap_setLastFunctionCall("htmlbox.full.js",561,29748,29758) ||     d.change());
  }
  return this;
};
  this.get_html = function() {
_wrap_addFunctionToMap('htmlbox.full.js', 565, 29834,30230);

  var html;
  if ((_wrap_setLastFunctionCall("htmlbox.full.js",567,29886,29914) || (_wrap_setLastFunctionCall("htmlbox.full.js",567,29886,29899) || $('#' + d.id)).is(':visible'))) {
    html = (_wrap_setLastFunctionCall("htmlbox.full.js",568,29941,29960) || (_wrap_setLastFunctionCall("htmlbox.full.js",568,29941,29954) || $('#' + d.id)).val());
  } else {
    html = d.iframe.contentWindow.document.body.innerHTML;
  }
  if (typeof getXHTML === 'function') {
    return (_wrap_setLastFunctionCall("htmlbox.full.js",573,30141,30155) || getXHTML(html));
  } else {
    return html;
  }
};
  this.change = function(fn) {
_wrap_addFunctionToMap('htmlbox.full.js', 578, 30254,30331);

  d.change = fn;
  return this;
};
  this.remove = function() {
_wrap_addFunctionToMap('htmlbox.full.js', 582, 30355,30587);

  global_hb[d.id] = undefined;
(_wrap_setLastFunctionCall("htmlbox.full.js",584,30422,30454) ||   (_wrap_setLastFunctionCall("htmlbox.full.js",584,30422,30445) || $('#' + d.id + '_wrap')).remove());
  if ((_wrap_setLastFunctionCall("htmlbox.full.js",585,30472,30496) || $('#' + d.id + '_about')).length === 0) {
(_wrap_setLastFunctionCall("htmlbox.full.js",586,30529,30562) ||     (_wrap_setLastFunctionCall("htmlbox.full.js",586,30529,30553) || $('#' + d.id + '_about')).remove());
  }
};
  this.post = function(url, data) {
_wrap_addFunctionToMap('htmlbox.full.js', 589, 30609,30993);

  if (undefined === data) {
    data = (_wrap_setLastFunctionCall("htmlbox.full.js",591,30693,30708) || this.get_html());
  }
  data = d.id + '=' + data;
(_wrap_setLastFunctionCall("htmlbox.full.js",594,30774,30982) ||   $.ajax({type: 'POST', data: data, url: url, dataType: 'html', error: d.error, success: d.success}));
};
  this.get = function(url, data) {
_wrap_addFunctionToMap('htmlbox.full.js', 603, 31014,31397);

  if (undefined === data) {
    data = (_wrap_setLastFunctionCall("htmlbox.full.js",605,31098,31113) || this.get_html());
  }
  data = d.id + '=' + data;
(_wrap_setLastFunctionCall("htmlbox.full.js",608,31179,31386) ||   $.ajax({type: 'GET', data: data, url: url, dataType: 'html', error: d.error, success: d.success}));
};
  this.success = function(fn) {
_wrap_addFunctionToMap('htmlbox.full.js', 617, 31422,31500);

  d.success = fn;
  return this;
};
  this.error = function(fn) {
_wrap_addFunctionToMap('htmlbox.full.js', 621, 31523,31599);

  d.error = fn;
  return this;
};
(_wrap_setLastFunctionCall("htmlbox.full.js",625,31609,31626) ||   this._init(false));
  return this;
};
}(jQuery)));
