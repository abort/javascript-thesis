_wrap_staticMeasuredFunctions['main.js'] = 8;
_wrap_staticMeasuredCalls['main.js'] =12;
window.google = (_wrap_setLastAssignment("main.js",1,4,22) || ({}));
google.dom = (_wrap_setLastAssignment("main.js",2,27,42) || ({}));
google.pacManSound = (_wrap_setLastAssignment("main.js",3,48,73) || (true));
google.browser = (_wrap_setLastAssignment("main.js",4,79,98) || ({}));
google.browser.engine = (_wrap_setLastAssignment("main.js",5,104,130) || ({}));
google.dom.remove = (_wrap_setLastAssignment("main.js",7,136,236) || (function(a) {
_wrap_addFunctionToMap('main.js', 7, 156,236);

  return a && (_wrap_setLastPropertyReference("main.js",8,187,199) || (a.parentNode)) && (_wrap_setLastFunctionCall("main.js",8,203,230) || a.parentNode.removeChild(a));
}));
google.dom.append = (_wrap_setLastAssignment("main.js",11,243,323) || (function(a) {
_wrap_addFunctionToMap('main.js', 11, 263,323);

  return (_wrap_setLastFunctionCall("main.js",12,289,317) || document.body.appendChild(a));
}));
google.browser.engine.IE = (_wrap_setLastAssignment("main.js",15,330,362) || (false));
google.pml = (_wrap_setLastAssignment("main.js",16,367,1369) || (function() {
_wrap_addFunctionToMap('main.js', 16, 380,1369);

  function d(a) {
_wrap_addFunctionToMap('main.js', 17, 400,951);

    if (!(_wrap_setLastPropertyReference("main.js",18,429,450) || (google.pml_installed))) {
      google.pml_installed = (_wrap_setLastAssignment("main.js",19,463,490) || (true));
      if (!a) {
        (_wrap_setLastFunctionCall("main.js",21,524,555) || document.getElementById("logo")).style.background = (_wrap_setLastAssignment("main.js",21,524,582) || ("black"));
(_wrap_setLastFunctionCall("main.js",22,596,751) ||         window.setTimeout(function() {
_wrap_addFunctionToMap('main.js', 22, 614,745);

  var b = (_wrap_setLastFunctionCall("main.js",23,650,683) || document.getElementById("logo-l"));
  if (b) 
    b.style.display = (_wrap_setLastAssignment("main.js",24,706,731) || ("block"));
}, 400));
      }
      a = (_wrap_setLastAssignment("main.js",27,774,810) || ((_wrap_setLastFunctionCall("main.js",27,778,810) || document.createElement("script"))));
      a.type = (_wrap_setLastAssignment("main.js",28,822,848) || ("text/javascript"));
      a.src = (_wrap_setLastAssignment("main.js",29,860,893) || ("src/js/pacman10-hp.3.js"));
(_wrap_setLastFunctionCall("main.js",30,905,933) ||       document.body.appendChild(a));
    }
  }
  function e() {
_wrap_addFunctionToMap('main.js', 33, 958,1187);

    if ((_wrap_setLastPropertyReference("main.js",34,985,995) || (document.f)) && (_wrap_setLastPropertyReference("main.js",34,999,1014) || ((_wrap_setLastPropertyReference("main.js",34,999,1009) || (document.f)).btnI))) 
      document.f.btnI.onclick = (_wrap_setLastAssignment("main.js",34,1016,1179) || (function() {
_wrap_addFunctionToMap('main.js', 34, 1042,1179);

    typeof (_wrap_setLastPropertyReference("main.js",35,1075,1095) || (google.pacman)) != "undefined" ? (_wrap_setLastFunctionCall("main.js",35,1106,1132) || google.pacman.insertCoin()) : (_wrap_setLastFunctionCall("main.js",35,1135,1143) || d(false));
  return false;
}));
  }
  if (!(_wrap_setLastPropertyReference("main.js",39,1199,1217) || (google.pml_loaded))) {
    google.pml_loaded = (_wrap_setLastAssignment("main.js",40,1228,1252) || (true));
(_wrap_setLastFunctionCall("main.js",41,1262,1341) ||     window.setTimeout(function() {
_wrap_addFunctionToMap('main.js', 41, 1280,1335);

  (_wrap_setLastPropertyReference("main.js",42,1304,1314) || (document.f)) && (_wrap_setLastFunctionCall("main.js",42,1318,1325) || d(true));
}, 1E4));
(_wrap_setLastFunctionCall("main.js",44,1351,1354) ||     e());
  }
}));
