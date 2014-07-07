_wrap_staticMeasuredFunctions['main.js'] = 8;
_wrap_staticMeasuredCalls['main.js'] =12;
window.google = {};
google.dom = {};
google.pacManSound = true;
google.browser = {};
google.browser.engine = {};
google.dom.remove = function(a) {
_wrap_addFunctionToMap('main.js', 6, 133,207, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return a && a.parentNode && (_wrap_setLastFunctionCall("main.js",7,177,204,a.parentNode.removeChild,false,false) || _wrap_popCallStack(a.parentNode.removeChild(a)));
};
google.dom.append = function(a) {
_wrap_addFunctionToMap('main.js', 9, 229,283, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("main.js",10,252,280,document.body.appendChild,false,false) || _wrap_popCallStack(document.body.appendChild(a)));
};
google.browser.engine.IE = false;
google.pml = function() {
_wrap_addFunctionToMap('main.js', 13, 332,1169, (typeof arguments === 'object' ? arguments.callee.caller : null));

  function d(a) {
_wrap_addFunctionToMap('main.js', 14, 347,821, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (!google.pml_installed) {
      google.pml_installed = true;
      if (!a) {
        (_wrap_setLastFunctionCall("main.js",18,455,486,document.getElementById,false,false) || _wrap_popCallStack(document.getElementById("logo"))).style.background = "black";
(_wrap_setLastFunctionCall("main.js",19,523,647,window.setTimeout,false,false) || _wrap_popCallStack(        window.setTimeout(function() {
_wrap_addFunctionToMap('main.js', 19, 541,641, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var b = (_wrap_setLastFunctionCall("main.js",20,564,597,document.getElementById,false,false) || _wrap_popCallStack(document.getElementById("logo-l")));
  if (b) 
    b.style.display = "block";
}, 400)));
      }
      a = (_wrap_setLastFunctionCall("main.js",25,667,699,document.createElement,false,false) || _wrap_popCallStack(document.createElement("script")));
      a.type = "text/javascript";
      a.src = "src/js/pacman10-hp.3.js";
(_wrap_setLastFunctionCall("main.js",28,782,810,document.body.appendChild,false,false) || _wrap_popCallStack(      document.body.appendChild(a)));
    }
  }
  function e() {
_wrap_addFunctionToMap('main.js', 31, 824,1027, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (document.f && document.f.btnI) 
      document.f.btnI.onclick = function() {
_wrap_addFunctionToMap('main.js', 33, 911,1022, (typeof arguments === 'object' ? arguments.callee.caller : null));

    typeof google.pacman != "undefined" ? (_wrap_setLastFunctionCall("main.js",34,966,992,google.pacman.insertCoin,false,false) || _wrap_popCallStack(google.pacman.insertCoin())) : (_wrap_setLastFunctionCall("main.js",34,995,1003,d,false,false) || _wrap_popCallStack(d(false)));
  return false;
};
  }
  if (!google.pml_loaded) {
    google.pml_loaded = true;
(_wrap_setLastFunctionCall("main.js",40,1090,1153,window.setTimeout,false,false) || _wrap_popCallStack(    window.setTimeout(function() {
_wrap_addFunctionToMap('main.js', 40, 1108,1147, (typeof arguments === 'object' ? arguments.callee.caller : null));

  document.f && (_wrap_setLastFunctionCall("main.js",41,1137,1144,d,false,false) || _wrap_popCallStack(d(true)));
}, 1E4)));
(_wrap_setLastFunctionCall("main.js",43,1159,1162,e,false,false) || _wrap_popCallStack(    e()));
  }
};
