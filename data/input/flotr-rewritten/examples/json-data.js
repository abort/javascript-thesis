window.parent._wrap_staticMeasuredFunctions['json-data.js'] = 2;
window.parent._wrap_staticMeasuredCalls['json-data.js'] =8;
var f = null;
(window.parent._wrap_setLastFunctionCall("json-data.js",2,14,348,null,true,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("json-data.js",2,14,27,$,true,false) || window.parent._wrap_popCallStack($('json-btn'))).observe('click', function() {
window.parent._wrap_addFunctionToMap('json-data.js', 2, 45,347, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("json-data.js",3,60,344,Ajax.Request,false,false) || window.parent._wrap_popCallStack(  new Ajax.Request('json.txt', {method: 'get', onSuccess: function(transport) {
window.parent._wrap_addFunctionToMap('json-data.js', 3, 116,342, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var json = (window.parent._wrap_setLastFunctionCall("json-data.js",4,151,184,transport.responseText.evalJSON,false,false) || window.parent._wrap_popCallStack(transport.responseText.evalJSON()));
  if (json.series && json.options) {
(window.parent._wrap_setLastFunctionCall("json-data.js",6,227,272,null,false,false) || window.parent._wrap_popCallStack(    (window.parent._wrap_setLastFunctionCall("json-data.js",6,227,241,$,false,false) || window.parent._wrap_popCallStack($('container'))).setStyle({'display': 'block'})));
    f = (window.parent._wrap_setLastFunctionCall("json-data.js",7,282,335,Flotr.draw,false,false) || window.parent._wrap_popCallStack(Flotr.draw((window.parent._wrap_setLastFunctionCall("json-data.js",7,293,307,$,false,false) || window.parent._wrap_popCallStack($('container'))), json.series, json.options)));
  }
}})));
})));
