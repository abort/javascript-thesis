window.parent._wrap_staticMeasuredFunctions['examples.js'] = 3;
window.parent._wrap_staticMeasuredCalls['examples.js'] =8;
function getV(nl) {
window.parent._wrap_addFunctionToMap('examples.js', 1, 0,148);

  var v = null;
(window.parent._wrap_setLastFunctionCall("examples.js",3,38,132) ||   (window.parent._wrap_setLastFunctionCall("examples.js",3,38,44) || $A(nl)).each(function(e) {
window.parent._wrap_addFunctionToMap('examples.js', 3, 50,131);

  if (e.checked) {
    v = e.value;
    return;
  }
}));
  return v;
}
(window.parent._wrap_setLastFunctionCall("examples.js",12,152,538) || document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('examples.js', 12, 183,537);

  var view = (window.parent._wrap_setLastFunctionCall("examples.js",13,208,222) || $('code-view'));
  if (view) {
    var code = (window.parent._wrap_setLastFunctionCall("examples.js",15,252,305) || (window.parent._wrap_setLastFunctionCall("examples.js",15,252,269) || $$('body script'))[0].innerHTML.gsub('\n\t\t\t', '\n'));
    if (view.outerHTML) 
      view.outerHTML = '<pre id="code-view"><code class="javascript">' + code + '</code></pre>';
    else 
      view.innerHTML = code;
  }
  (window.parent._wrap_setLastFunctionCall("examples.js",22,471,488) || $$('#wrapper h1'))[0].innerHTML = (window.parent._wrap_setLastFunctionCall("examples.js",22,504,520) || $$('head title'))[0].innerHTML;
}));
