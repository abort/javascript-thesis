_wrap_staticMeasuredFunctions['main.js'] = 8;
_wrap_staticMeasuredCalls['main.js'] =12;
window.google = {};
google.dom = {};
google.pacManSound = true;
google.browser = {};
google.browser.engine = {};
google.dom.remove = function(a) {
_wrap_addFunctionToMap('main.js', 7, 156,236, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return a && a.parentNode && (_wrap_setLastFunctionCall("main.js",8,203,230) || a.parentNode.removeChild(a));
};
google.dom.append = function(a) {
_wrap_addFunctionToMap('main.js', 11, 263,323, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (_wrap_setLastFunctionCall("main.js",12,289,317) || document.body.appendChild(a));
};
google.browser.engine.IE = false;
google.pml = function() {
_wrap_addFunctionToMap('main.js', 16, 380,1369, (typeof arguments === 'object' ? arguments.callee.caller : null));

  function d(a) {
_wrap_addFunctionToMap('main.js', 17, 400,951, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (!google.pml_installed) {
      google.pml_installed = true;
      if (!a) {
        (_wrap_setLastFunctionCall("main.js",21,524,555) || document.getElementById("logo")).style.background = "black";
(_wrap_setLastFunctionCall("main.js",22,596,751) ||         window.setTimeout(function() {
_wrap_addFunctionToMap('main.js', 22, 614,745, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var b = (_wrap_setLastFunctionCall("main.js",23,650,683) || document.getElementById("logo-l"));
  if (b) 
    b.style.display = "block";
}, 400));
      }
      a = (_wrap_setLastFunctionCall("main.js",27,778,810) || document.createElement("script"));
      a.type = "text/javascript";
      a.src = "src/js/pacman10-hp.3.js";
(_wrap_setLastFunctionCall("main.js",30,905,933) ||       document.body.appendChild(a));
    }
  }
  function e() {
_wrap_addFunctionToMap('main.js', 33, 958,1187, (typeof arguments === 'object' ? arguments.callee.caller : null));

    if (document.f && document.f.btnI) 
      document.f.btnI.onclick = function() {
_wrap_addFunctionToMap('main.js', 34, 1042,1179, (typeof arguments === 'object' ? arguments.callee.caller : null));

    typeof google.pacman != "undefined" ? (_wrap_setLastFunctionCall("main.js",35,1106,1132) || google.pacman.insertCoin()) : (_wrap_setLastFunctionCall("main.js",35,1135,1143) || d(false));
  return false;
};
  }
  if (!google.pml_loaded) {
    google.pml_loaded = true;
(_wrap_setLastFunctionCall("main.js",41,1262,1341) ||     window.setTimeout(function() {
_wrap_addFunctionToMap('main.js', 41, 1280,1335, (typeof arguments === 'object' ? arguments.callee.caller : null));

  document.f && (_wrap_setLastFunctionCall("main.js",42,1318,1325) || d(true));
}, 1E4));
(_wrap_setLastFunctionCall("main.js",44,1351,1354) ||     e());
  }
};
