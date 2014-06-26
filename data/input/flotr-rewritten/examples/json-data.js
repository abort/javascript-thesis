window.parent._wrap_staticMeasuredFunctions['json-data.js'] = 2;
window.parent._wrap_staticMeasuredCalls['json-data.js'] =8;
var f = null;
(window.parent._wrap_setLastFunctionCall("json-data.js",2,19,813) || (window.parent._wrap_setLastFunctionCall("json-data.js",2,19,32) || $('json-btn')).observe('click', function() {
window.parent._wrap_addFunctionToMap('json-data.js', 2, 50,812, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("json-data.js",7,200,806) ||   new Ajax.Request('json.txt', {method: 'get', onSuccess: function(transport) {
window.parent._wrap_addFunctionToMap('json-data.js', 9, 266,799, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var json = (window.parent._wrap_setLastFunctionCall("json-data.js",13,372,405) || transport.responseText.evalJSON());
  if (json.series && json.options) {
(window.parent._wrap_setLastFunctionCall("json-data.js",19,541,585) ||     (window.parent._wrap_setLastFunctionCall("json-data.js",19,541,555) || $('container')).setStyle({'display': 'block'}));
    f = (window.parent._wrap_setLastFunctionCall("json-data.js",25,723,776) || Flotr.draw((window.parent._wrap_setLastFunctionCall("json-data.js",25,734,748) || $('container')), json.series, json.options));
  }
}}));
}));
