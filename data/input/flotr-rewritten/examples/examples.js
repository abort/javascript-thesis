window.parent._wrap_staticMeasuredFunctions['examples.js'] = 3;
window.parent._wrap_staticMeasuredCalls['examples.js'] =8;
function getV(nl) {
window.parent._wrap_addFunctionToMap('examples.js', 1, 0,133, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var v = null;
(window.parent._wrap_setLastFunctionCall("examples.js",3,38,118,null,false,false) || window.parent._wrap_popCallStack(  (window.parent._wrap_setLastFunctionCall("examples.js",3,38,44,$A,false,false) || window.parent._wrap_popCallStack($A(nl))).each(function(e) {
window.parent._wrap_addFunctionToMap('examples.js', 3, 50,117, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (e.checked) {
    v = e.value;
    return;
  }
})));
  return v;
}
(window.parent._wrap_setLastFunctionCall("examples.js",11,134,524,document.observe,true,false) || window.parent._wrap_popCallStack(document.observe('dom:loaded', function() {
window.parent._wrap_addFunctionToMap('examples.js', 11, 165,523, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var view = (window.parent._wrap_setLastFunctionCall("examples.js",12,191,205,$,false,false) || window.parent._wrap_popCallStack($('code-view')));
  if (view) {
    var code = (window.parent._wrap_setLastFunctionCall("examples.js",14,236,289,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("examples.js",14,236,253,$$,false,false) || window.parent._wrap_popCallStack($$('body script')))[0].innerHTML.gsub('\n\t\t\t', '\n')));
    if (view.outerHTML) 
      view.outerHTML = '<pre id="code-view"><code class="javascript">' + code + '</code></pre>';
    else 
      view.innerHTML = code;
  }
  (window.parent._wrap_setLastFunctionCall("examples.js",20,458,475,$$,false,false) || window.parent._wrap_popCallStack($$('#wrapper h1')))[0].innerHTML = (window.parent._wrap_setLastFunctionCall("examples.js",20,491,507,$$,false,false) || window.parent._wrap_popCallStack($$('head title')))[0].innerHTML;
})));
