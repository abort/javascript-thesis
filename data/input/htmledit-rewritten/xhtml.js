_wrap_staticMeasuredFunctions['xhtml.js'] = 6;
_wrap_staticMeasuredCalls['xhtml.js'] =30;
function getXHTML(data) {
_wrap_addFunctionToMap('xhtml.js', 1, 0,68);

  return (_wrap_setLastFunctionCall("xhtml.js",2,37,65) || (_wrap_setLastFunctionCall("xhtml.js",2,37,57) || new Html2Xhtml(data)).parse());
}
;
function Html2Xhtml(data) {
_wrap_addFunctionToMap('xhtml.js', 5, 71,128);

  this.data = data || '';
}
;
Html2Xhtml.prototype.setHTML = function(data) {
_wrap_addFunctionToMap('xhtml.js', 9, 162,216);

  this.data = data || this.data;
};
Html2Xhtml.prototype.parse = function() {
_wrap_addFunctionToMap('xhtml.js', 12, 247,8560);

  var state = 0;
  var xhtml = '';
  var p = 0;
  var unget = false;
  var tagname = '';
  var attrname = '';
  var attrval = '';
  var quot = '';
  var data = this.data;
  var len = data.length;
  var phpval = '';
  var tagtype = 0;
  var insidepre = false;
  var codetype = '';
  while (1) {
    if (p >= len && !unget) {
      return xhtml;
    }
    if (unget) {
      unget = false;
    } else {
      var c = (_wrap_setLastFunctionCall("xhtml.js",34,740,759) || data.substr(p++, 1));
    }
    switch (state) {
      case 0:
        if (c == '<') {
          state = 1;
          break;
        }
        xhtml += c;
        break;
      case 1:
        if ((_wrap_setLastFunctionCall("xhtml.js",45,979,997) || /[a-zA-Z]/.test(c))) {
          state = 2;
          tagtype = 1;
          tagname = (_wrap_setLastFunctionCall("xhtml.js",48,1083,1098) || c.toLowerCase());
          break;
        }
        if (c == '/') {
          state = 2;
          tagtype = -1;
          break;
        }
        if (c == '!') {
          if ((_wrap_setLastFunctionCall("xhtml.js",57,1307,1324) || data.substr(p, 2)) == '--') {
            xhtml += '<!--';
            p += 2;
            state = 9;
            break;
          }
          xhtml += '<!';
          state = 10;
          break;
        }
        if (c == '?' || c == '%') {
          codetype = c;
          state = 11;
          xhtml += '<' + c;
          break;
        }
        xhtml += '&lt;';
        unget = true;
        state = 0;
        break;
      case 2:
        if (Html2Xhtml.isSpaceChar[c]) {
          xhtml += (!insidepre && tagtype > 0 && Html2Xhtml.hasNLBefore[tagname] && xhtml.length && (_wrap_setLastFunctionCall("xhtml.js",79,2006,2039) || xhtml.substr(xhtml.length - 1, 1)) != '\n' ? '\n' : '') + (tagtype > 0 ? '<' : '</') + tagname;
          state = 3;
          break;
        }
        if (c == '/') {
          xhtml += (!insidepre && tagtype > 0 && Html2Xhtml.hasNLBefore[tagname] && xhtml.length && (_wrap_setLastFunctionCall("xhtml.js",84,2299,2332) || xhtml.substr(xhtml.length - 1, 1)) != '\n' ? '\n' : '') + (tagtype > 0 ? '<' : '</') + tagname;
          if ((_wrap_setLastFunctionCall("xhtml.js",85,2414,2431) || data.substr(p, 1)) != '>') {
            state = 3;
            break;
          }
          state = 4;
          break;
        }
        if (c == '>') {
          xhtml += (!insidepre && tagtype > 0 && Html2Xhtml.hasNLBefore[tagname] && xhtml.length && (_wrap_setLastFunctionCall("xhtml.js",93,2716,2749) || xhtml.substr(xhtml.length - 1, 1)) != '\n' ? '\n' : '') + (tagtype > 0 ? '<' : '</') + tagname;
          unget = true;
          state = 4;
          break;
        }
        tagname += (_wrap_setLastFunctionCall("xhtml.js",98,2928,2943) || c.toLowerCase());
        break;
      case 3:
        if (Html2Xhtml.isSpaceChar[c]) {
          break;
        }
        if (c == '/') {
          if ((_wrap_setLastFunctionCall("xhtml.js",105,3110,3127) || data.substr(p, 1)) != '>') {
            break;
          }
          state = 4;
          break;
        }
        if (c == '>') {
          unget = true;
          state = 4;
          break;
        }
        attrname = (_wrap_setLastFunctionCall("xhtml.js",116,3392,3407) || c.toLowerCase());
        attrval = '';
        state = 5;
        break;
      case 4:
        xhtml += (Html2Xhtml.isEmptyTag[tagname] ? ' />' : '>') + (!insidepre && tagtype < 0 && Html2Xhtml.hasNLAfter[tagname] && p < len && (_wrap_setLastFunctionCall("xhtml.js",121,3638,3655) || data.substr(p, 1)) != '\n' ? '\n' : '');
        if (tagtype > 0 && Html2Xhtml.dontAnalyzeContent[tagname]) {
          state = 13;
          attrname = attrval = quot = '';
          tagtype = 0;
          break;
        }
        if (tagname == 'pre') {
          insidepre = !insidepre;
        }
        state = 0;
        tagname = attrname = attrval = quot = '';
        tagtype = 0;
        break;
      case 5:
        if (Html2Xhtml.isSpaceChar[c]) {
          xhtml += ' ' + attrname;
          if (Html2Xhtml.isEmptyAttr[attrname]) {
            xhtml += '="' + attrname + '"';
          }
          state = 3;
          break;
        }
        if (c == '/') {
          xhtml += ' ' + attrname;
          if (Html2Xhtml.isEmptyAttr[attrname]) {
            xhtml += '="' + attrname + '"';
          }
          if ((_wrap_setLastFunctionCall("xhtml.js",149,4611,4628) || data.substr(p, 1)) != '>') {
            state = 3;
            break;
          }
          state = 4;
          break;
        }
        if (c == '>') {
          xhtml += ' ' + attrname;
          if (Html2Xhtml.isEmptyAttr[attrname]) {
            xhtml += '="' + attrname + '"';
          }
          unget = true;
          state = 4;
          break;
        }
        if (c == '=') {
          xhtml += ' ' + attrname + '=';
          state = 6;
          break;
        }
        if (c == '"' || c == '\'') {
          attrname += '?';
        } else {
          attrname += (_wrap_setLastFunctionCall("xhtml.js",173,5330,5345) || c.toLowerCase());
        }
        break;
      case 6:
        if (Html2Xhtml.isSpaceChar[c]) {
          xhtml += Html2Xhtml.isEmptyAttr[attrname] ? '"' + attrname + '"' : '""';
          state = 3;
          break;
        }
        if (c == '>') {
          xhtml += Html2Xhtml.isEmptyAttr[attrname] ? '"' + attrname + '"' : '""';
          unget = true;
          state = 4;
          break;
        }
        if (c == '/' && (_wrap_setLastFunctionCall("xhtml.js",188,5833,5850) || data.substr(p, 1)) == '>') {
          xhtml += Html2Xhtml.isEmptyAttr[attrname] ? '"' + attrname + '"' : '""';
          state = 4;
          break;
        }
        if (c == '"' || c == '\'') {
          quot = c;
          state = 8;
          break;
        }
        attrval = c;
        state = 7;
        break;
      case 7:
        if (Html2Xhtml.isSpaceChar[c]) {
          xhtml += '"' + (_wrap_setLastFunctionCall("xhtml.js",203,6304,6339) || Html2Xhtml.escapeQuot(attrval, '"')) + '"';
          state = 3;
          break;
        }
        if (c == '/' && (_wrap_setLastFunctionCall("xhtml.js",207,6439,6456) || data.substr(p, 1)) == '>') {
          xhtml += '"' + (_wrap_setLastFunctionCall("xhtml.js",208,6498,6533) || Html2Xhtml.escapeQuot(attrval, '"')) + '"';
          state = 4;
          break;
        }
        if (c == '>') {
          unget = true;
          xhtml += '"' + (_wrap_setLastFunctionCall("xhtml.js",214,6694,6729) || Html2Xhtml.escapeQuot(attrval, '"')) + '"';
          state = 4;
          break;
        }
        attrval += c;
        break;
      case 8:
        if (c == quot) {
          xhtml += '"' + (_wrap_setLastFunctionCall("xhtml.js",222,6922,6957) || Html2Xhtml.escapeQuot(attrval, '"')) + '"';
          state = 3;
          break;
        }
        attrval += c;
        break;
      case 9:
        if (c == '-' && (_wrap_setLastFunctionCall("xhtml.js",229,7118,7135) || data.substr(p, 2)) == '->') {
          p += 2;
          xhtml += '-->';
          state = 0;
          break;
        }
        xhtml += c;
        break;
      case 10:
        if (c == '>') {
          state = 0;
        }
        xhtml += c;
        break;
      case 11:
        if (c == '\'' || c == '"') {
          quot = c;
          state = 12;
          break;
        }
        if (c == codetype && (_wrap_setLastFunctionCall("xhtml.js",249,7621,7638) || data.substr(p, 1)) == '>') {
          state = 0;
          xhtml += c + '>';
          codetype = '';
          p++;
          break;
        }
        xhtml += c;
        break;
      case 12:
        if (c == quot) {
          state = 11;
          xhtml += quot + (_wrap_setLastFunctionCall("xhtml.js",261,7948,7983) || Html2Xhtml.escapeQuot(phpval, quot)) + quot;
          phpval = quot = '';
          break;
        }
        phpval += c;
        break;
      case 13:
        if (c == '<' && (_wrap_setLastFunctionCall("xhtml.js",268,8154,8202) || (_wrap_setLastFunctionCall("xhtml.js",268,8154,8188) || data.substr(p, tagname.length + 1)).toLowerCase()) == '/' + tagname) {
          unget = true;
          state = 0;
          tagname = '';
          break;
        }
        if (tagname == 'textarea') {
          xhtml += (_wrap_setLastFunctionCall("xhtml.js",275,8413,8441) || Html2Xhtml.escapeHTMLChar(c));
        } else {
          xhtml += c;
        }
        break;
    }
  }
  return xhtml;
};
Html2Xhtml.escapeQuot = function(str, quot) {
_wrap_addFunctionToMap('xhtml.js', 284, 8586,8763);

  if (!quot) {
    quot = '"';
  }
  if (quot == '"') {
    return (_wrap_setLastFunctionCall("xhtml.js",289,8690,8715) || str.replace(/"/gi, '\\"'));
  }
  return (_wrap_setLastFunctionCall("xhtml.js",291,8734,8760) || str.replace(/'/gi, '\\\''));
};
Html2Xhtml.escapeHTMLChar = function(c) {
_wrap_addFunctionToMap('xhtml.js', 293, 8793,8971);

  if (c == '&') {
    return '&amp;';
  }
  if (c == '<') {
    return '&lt;';
  }
  if (c == '>') {
    return '&gt;';
  }
  return c;
};
Html2Xhtml.isSpaceChar = {' ': 1, '\r': 1, '\n': 1, '\t': 1};
Html2Xhtml.isEmptyTag = {'area': 1, 'base': 1, 'basefont': 1, 'br': 1, 'hr': 1, 'img': 1, 'input': 1, 'link': 1, 'meta': 1, 'param': 1};
Html2Xhtml.isEmptyAttr = {'checked': 1, 'compact': 1, 'declare': 1, 'defer': 1, 'disabled': 1, 'ismap': 1, 'multiple': 1, 'noresize': 1, 'nosave': 1, 'noshade': 1, 'nowrap': 1, 'readonly': 1, 'selected': 1};
Html2Xhtml.hasNLBefore = {'div': 1, 'p': 1, 'table': 1, 'tbody': 1, 'tr': 1, 'td': 1, 'th': 1, 'title': 1, 'head': 1, 'body': 1, 'script': 1, 'comment': 1, 'li': 1, 'meta': 1, 'h1': 1, 'h2': 1, 'h3': 1, 'h4': 1, 'h5': 1, 'h6': 1, 'hr': 1, 'ul': 1, 'ol': 1, 'option': 1, 'link': 1};
Html2Xhtml.hasNLAfter = {'html': 1, 'head': 1, 'body': 1, 'p': 1, 'th': 1, 'style': 1};
Html2Xhtml.dontAnalyzeContent = {'textarea': 1, 'script': 1, 'style': 1};
