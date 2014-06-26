_wrap_staticMeasuredFunctions['main.js'] = 7;
_wrap_staticMeasuredCalls['main.js'] =53;
function scene() {
_wrap_addFunctionToMap('main.js', 1, 0,134, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.solid_number = 0;
  this.solid = (_wrap_setLastFunctionCall("main.js",3,63,74) || new Array());
  this.observer = [0, 0, 0];
  this.distance = -650;
}
var world = (_wrap_setLastFunctionCall("main.js",8,148,159) || new scene());
var colore = 'rgb(255,255,255)';
var alpha = 0.6;
var teta_x_global = 0;
var teta_y_global = 0;
var motion = 1;
var id_timer = 0;
function init() {
_wrap_addFunctionToMap('main.js', 18, 294,844, (typeof arguments === 'object' ? arguments.callee.caller : null));

  world.solid[world.solid_number++] = (_wrap_setLastFunctionCall("main.js",19,352,392) || new dinosaur([255, 255, 255], [0, 0, 0]));
(_wrap_setLastFunctionCall("main.js",20,398,457) ||   scale_solid([3, 3, 3], world.solid[world.solid_number - 1]));
(_wrap_setLastFunctionCall("main.js",21,463,661) ||   translate_solid([-world.solid[world.solid_number - 1].center[0], -world.solid[world.solid_number - 1].center[1], -world.solid[world.solid_number - 1].center[2]], world.solid[world.solid_number - 1]));
(_wrap_setLastFunctionCall("main.js",22,667,734) ||   translate_solid([0, 0, -1100], world.solid[world.solid_number - 1]));
  document.onkeydown = onKeyDown;
  document.onmousemove = onMouseMove;
(_wrap_setLastFunctionCall("main.js",28,819,840) ||   setInterval(draw, 10));
}
function changeModel() {
_wrap_addFunctionToMap('main.js', 32, 846,2583, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("main.js",33,875,898) ||   clearInterval(id_timer));
  var canvas = (_wrap_setLastFunctionCall("main.js",34,917,951) || document.getElementById("display"));
  if (canvas.getContext) {
    var ctx = (_wrap_setLastFunctionCall("main.js",37,1001,1024) || canvas.getContext("2d"));
(_wrap_setLastFunctionCall("main.js",39,1035,1065) ||     ctx.clearRect(0, 0, 1000, 550));
  }
  if ((_wrap_setLastFunctionCall("main.js",43,1083,1117) || document.getElementById("modello")).value == 'dino') {
    world.solid[0] = (_wrap_setLastFunctionCall("main.js",44,1162,1202) || new dinosaur([255, 255, 255], [0, 0, 0]));
(_wrap_setLastFunctionCall("main.js",45,1212,1271) ||     scale_solid([3, 3, 3], world.solid[world.solid_number - 1]));
(_wrap_setLastFunctionCall("main.js",46,1281,1479) ||     translate_solid([-world.solid[world.solid_number - 1].center[0], -world.solid[world.solid_number - 1].center[1], -world.solid[world.solid_number - 1].center[2]], world.solid[world.solid_number - 1]));
(_wrap_setLastFunctionCall("main.js",47,1489,1556) ||     translate_solid([0, 0, -1100], world.solid[world.solid_number - 1]));
  }
  if ((_wrap_setLastFunctionCall("main.js",49,1572,1606) || document.getElementById("modello")).value == 'heli') {
    world.solid[0] = (_wrap_setLastFunctionCall("main.js",50,1651,1693) || new helicopter([255, 255, 255], [0, 0, 0]));
(_wrap_setLastFunctionCall("main.js",51,1703,1765) ||     scale_solid([12, 12, 12], world.solid[world.solid_number - 1]));
(_wrap_setLastFunctionCall("main.js",52,1775,1973) ||     translate_solid([-world.solid[world.solid_number - 1].center[0], -world.solid[world.solid_number - 1].center[1], -world.solid[world.solid_number - 1].center[2]], world.solid[world.solid_number - 1]));
(_wrap_setLastFunctionCall("main.js",53,1983,2050) ||     translate_solid([0, 0, -1100], world.solid[world.solid_number - 1]));
  }
  if ((_wrap_setLastFunctionCall("main.js",55,2066,2100) || document.getElementById("modello")).value == 'ship') {
    world.solid[0] = (_wrap_setLastFunctionCall("main.js",56,2145,2181) || new ship([255, 255, 255], [0, 0, 0]));
(_wrap_setLastFunctionCall("main.js",57,2191,2250) ||     scale_solid([3, 3, 3], world.solid[world.solid_number - 1]));
(_wrap_setLastFunctionCall("main.js",58,2260,2458) ||     translate_solid([-world.solid[world.solid_number - 1].center[0], -world.solid[world.solid_number - 1].center[1], -world.solid[world.solid_number - 1].center[2]], world.solid[world.solid_number - 1]));
(_wrap_setLastFunctionCall("main.js",59,2468,2535) ||     translate_solid([0, 0, -1100], world.solid[world.solid_number - 1]));
  }
  id_timer = (_wrap_setLastFunctionCall("main.js",62,2559,2580) || setInterval(draw, 10));
}
function onKeyDown(evt) {
_wrap_addFunctionToMap('main.js', 65, 2585,3463, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (evt.keyCode == 77) 
    motion = (motion + 1) % 2;
  if (evt.keyCode == 82) 
    colore = 'rgb(255,0,0)';
  if (evt.keyCode == 71) 
    colore = 'rgb(0,255,0)';
  if (evt.keyCode == 89) 
    colore = 'rgb(255,255,0)';
  if (evt.keyCode == 66) 
    colore = 'rgb(0,0,255)';
  if (evt.keyCode == 87) 
    colore = 'rgb(255,255,255)';
  if (evt.keyCode == 49) 
    alpha = 0.1;
  if (evt.keyCode == 50) 
    alpha = 0.15;
  if (evt.keyCode == 51) 
    alpha = 0.2;
  if (evt.keyCode == 52) 
    alpha = 0.25;
  if (evt.keyCode == 53) 
    alpha = 0.3;
  if (evt.keyCode == 54) 
    alpha = 0.4;
  if (evt.keyCode == 55) 
    alpha = 0.5;
  if (evt.keyCode == 56) 
    alpha = 0.6;
  if (evt.keyCode == 57) 
    alpha = 0.7;
  if (evt.keyCode == 48) 
    alpha = 0.8;
}
function onMouseMove(evt) {
_wrap_addFunctionToMap('main.js', 101, 3465,3796, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var x = evt.pageX - (_wrap_setLastFunctionCall("main.js",102,3517,3551) || document.getElementById("display")).offsetLeft;
  var y = evt.pageY - (_wrap_setLastFunctionCall("main.js",103,3588,3622) || document.getElementById("display")).offsetTop;
  if ((x > 0) && (x < 1000) && (y > 0) && (y < 550)) {
    teta_y_global = 0.10 * (x - 500) / 500;
    teta_x_global = 0.10 * (y - 275) / 275;
  }
}
function draw() {
_wrap_addFunctionToMap('main.js', 112, 3798,7117, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var canvas = (_wrap_setLastFunctionCall("main.js",113,3833,3867) || document.getElementById("display"));
  if (canvas.getContext) {
    var ctx = (_wrap_setLastFunctionCall("main.js",115,3916,3939) || canvas.getContext("2d"));
    if (motion == 0) {
(_wrap_setLastFunctionCall("main.js",118,3981,4011) ||       ctx.clearRect(0, 0, 1000, 550));
    } else {
      ctx.globalAlpha = 0.2;
      ctx.fillStyle = 'rgb(255,255,255)';
(_wrap_setLastFunctionCall("main.js",122,4125,4154) ||       ctx.fillRect(0, 0, 1000, 550));
    }
    ctx.fillStyle = colore;
    ctx.strokeStyle = 'rgb(0,0,0)';
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = alpha;
    var parametrig1 = (_wrap_setLastFunctionCall("main.js",132,4330,4393) || get_rotation_parameter([0, 0, -1100], [0, 1, 0], teta_y_global));
    var parametrig2 = (_wrap_setLastFunctionCall("main.js",133,4421,4480) || get_rotation_parameter([0, 0, 0], [0, 1, 0], teta_y_global));
    var parametrig1a = (_wrap_setLastFunctionCall("main.js",134,4509,4572) || get_rotation_parameter([0, 0, -1100], [1, 0, 0], teta_x_global));
    var parametrig2a = (_wrap_setLastFunctionCall("main.js",135,4601,4660) || get_rotation_parameter([0, 0, 0], [1, 0, 0], teta_x_global));
    for (var i = 0; i < world.solid_number; i++) {
(_wrap_setLastFunctionCall("main.js",140,4732,4791) ||       rotate_solid_fast(parametrig1, parametrig2, world.solid[i]));
(_wrap_setLastFunctionCall("main.js",141,4805,4866) ||       rotate_solid_fast(parametrig1a, parametrig2a, world.solid[i]));
    }
    var contatore = 0;
    visible_polygons = (_wrap_setLastFunctionCall("main.js",149,4937,4948) || new Array());
    var delta_x;
    var delta_y;
    var delta_z;
    for (var j = 0; j < world.solid_number; j++) {
      for (var i = 0; i < world.solid[j].points_number; i++) {
        world.solid[j].distances[i] = (_wrap_setLastFunctionCall("main.js",156,5184,5224) || Math.pow(world.solid[j].points[i][0], 2)) + (_wrap_setLastFunctionCall("main.js",156,5227,5267) || Math.pow(world.solid[j].points[i][1], 2)) + (_wrap_setLastFunctionCall("main.js",156,5270,5310) || Math.pow(world.solid[j].points[i][2], 2));
      }
    }
    for (var j = 0; j < world.solid_number; j++) {
      for (var i = 0; i < world.solid[j].faces_number; i++) {
        var max = world.solid[j].distances[world.solid[j].faces[i][0]];
        for (var w = 1; w < world.solid[j].faces[i].length; w++) {
          if (world.solid[j].distances[world.solid[j].faces[i][w]] > max) 
            max = world.solid[j].distances[world.solid[j].faces[i][w]];
        }
        visible_polygons[contatore++] = {solid: j, vertex: world.solid[j].faces[i], fillcolor: world.solid[j].fillcolor, linecolor: world.solid[j].linecolor, distance: max};
      }
    }
(_wrap_setLastFunctionCall("main.js",176,6110,6145) ||     visible_polygons.sort(sortfunction));
    var projected_points = (_wrap_setLastFunctionCall("main.js",178,6179,6190) || new Array());
    for (var j = 0; j < world.solid_number; j++) {
      projected_points[j] = (_wrap_setLastFunctionCall("main.js",181,6282,6293) || new Array());
      for (var i = 0; i < world.solid[j].points.length; i++) {
        projected_points[j][i] = (_wrap_setLastFunctionCall("main.js",183,6405,6454) || project(world.distance, world.solid[j].points[i]));
      }
    }
    for (var i = 0; i < contatore; i++) {
(_wrap_setLastFunctionCall("main.js",188,6539,6554) ||       ctx.beginPath());
      var indice_solido = visible_polygons[i].solid;
      var indici_vertici = visible_polygons[i].vertex;
(_wrap_setLastFunctionCall("main.js",192,6689,6809) ||       ctx.moveTo(projected_points[indice_solido][indici_vertici[0]][0], projected_points[indice_solido][indici_vertici[0]][1]));
      for (var z = 1; z < visible_polygons[i].vertex.length; z++) 
(_wrap_setLastFunctionCall("main.js",194,6899,7019) ||         ctx.lineTo(projected_points[indice_solido][indici_vertici[z]][0], projected_points[indice_solido][indici_vertici[z]][1]));
(_wrap_setLastFunctionCall("main.js",195,7033,7048) ||       ctx.closePath());
(_wrap_setLastFunctionCall("main.js",196,7062,7072) ||       ctx.fill());
(_wrap_setLastFunctionCall("main.js",197,7086,7098) ||       ctx.stroke());
    }
  }
}
function sortfunction(a, b) {
_wrap_addFunctionToMap('main.js', 203, 7120,7189, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (b.distance - a.distance);
}
