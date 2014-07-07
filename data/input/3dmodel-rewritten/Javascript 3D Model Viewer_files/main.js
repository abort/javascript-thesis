_wrap_staticMeasuredFunctions['main.js'] = 7;
_wrap_staticMeasuredCalls['main.js'] =53;
function scene() {
_wrap_addFunctionToMap('main.js', 1, 0,126, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.solid_number = 0;
  this.solid = (_wrap_setLastFunctionCall("main.js",3,59,70,Array,false,false) || _wrap_popCallStack(new Array()));
  this.observer = [0, 0, 0];
  this.distance = -650;
}
var world = (_wrap_setLastFunctionCall("main.js",7,139,150,scene,true,false) || _wrap_popCallStack(new scene()));
var colore = 'rgb(255,255,255)';
var alpha = 0.6;
var teta_x_global = 0;
var teta_y_global = 0;
var motion = 1;
var id_timer = 0;
function init() {
_wrap_addFunctionToMap('main.js', 14, 282,814, (typeof arguments === 'object' ? arguments.callee.caller : null));

  world.solid[world.solid_number++] = (_wrap_setLastFunctionCall("main.js",15,338,378,dinosaur,false,false) || _wrap_popCallStack(new dinosaur([255, 255, 255], [0, 0, 0])));
(_wrap_setLastFunctionCall("main.js",16,382,441,scale_solid,false,false) || _wrap_popCallStack(  scale_solid([3, 3, 3], world.solid[world.solid_number - 1])));
(_wrap_setLastFunctionCall("main.js",17,445,643,translate_solid,false,false) || _wrap_popCallStack(  translate_solid([-world.solid[world.solid_number - 1].center[0], -world.solid[world.solid_number - 1].center[1], -world.solid[world.solid_number - 1].center[2]], world.solid[world.solid_number - 1])));
(_wrap_setLastFunctionCall("main.js",18,647,714,translate_solid,false,false) || _wrap_popCallStack(  translate_solid([0, 0, -1100], world.solid[world.solid_number - 1])));
  document.onkeydown = onKeyDown;
  document.onmousemove = onMouseMove;
(_wrap_setLastFunctionCall("main.js",21,790,811,setInterval,false,false) || _wrap_popCallStack(  setInterval(draw, 10)));
}
function changeModel() {
_wrap_addFunctionToMap('main.js', 23, 815,2469, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("main.js",24,842,865,clearInterval,false,false) || _wrap_popCallStack(  clearInterval(id_timer)));
  var canvas = (_wrap_setLastFunctionCall("main.js",25,882,916,document.getElementById,false,false) || _wrap_popCallStack(document.getElementById("display")));
  if (canvas.getContext) {
    var ctx = (_wrap_setLastFunctionCall("main.js",27,959,982,canvas.getContext,false,false) || _wrap_popCallStack(canvas.getContext("2d")));
(_wrap_setLastFunctionCall("main.js",28,988,1018,ctx.clearRect,false,false) || _wrap_popCallStack(    ctx.clearRect(0, 0, 1000, 550)));
  }
  if ((_wrap_setLastFunctionCall("main.js",30,1030,1064,document.getElementById,false,false) || _wrap_popCallStack(document.getElementById("modello"))).value == 'dino') {
    world.solid[0] = (_wrap_setLastFunctionCall("main.js",31,1105,1145,dinosaur,false,false) || _wrap_popCallStack(new dinosaur([255, 255, 255], [0, 0, 0])));
(_wrap_setLastFunctionCall("main.js",32,1151,1210,scale_solid,false,false) || _wrap_popCallStack(    scale_solid([3, 3, 3], world.solid[world.solid_number - 1])));
(_wrap_setLastFunctionCall("main.js",33,1216,1414,translate_solid,false,false) || _wrap_popCallStack(    translate_solid([-world.solid[world.solid_number - 1].center[0], -world.solid[world.solid_number - 1].center[1], -world.solid[world.solid_number - 1].center[2]], world.solid[world.solid_number - 1])));
(_wrap_setLastFunctionCall("main.js",34,1420,1487,translate_solid,false,false) || _wrap_popCallStack(    translate_solid([0, 0, -1100], world.solid[world.solid_number - 1])));
  }
  if ((_wrap_setLastFunctionCall("main.js",36,1499,1533,document.getElementById,false,false) || _wrap_popCallStack(document.getElementById("modello"))).value == 'heli') {
    world.solid[0] = (_wrap_setLastFunctionCall("main.js",37,1574,1616,helicopter,false,false) || _wrap_popCallStack(new helicopter([255, 255, 255], [0, 0, 0])));
(_wrap_setLastFunctionCall("main.js",38,1622,1684,scale_solid,false,false) || _wrap_popCallStack(    scale_solid([12, 12, 12], world.solid[world.solid_number - 1])));
(_wrap_setLastFunctionCall("main.js",39,1690,1888,translate_solid,false,false) || _wrap_popCallStack(    translate_solid([-world.solid[world.solid_number - 1].center[0], -world.solid[world.solid_number - 1].center[1], -world.solid[world.solid_number - 1].center[2]], world.solid[world.solid_number - 1])));
(_wrap_setLastFunctionCall("main.js",40,1894,1961,translate_solid,false,false) || _wrap_popCallStack(    translate_solid([0, 0, -1100], world.solid[world.solid_number - 1])));
  }
  if ((_wrap_setLastFunctionCall("main.js",42,1973,2007,document.getElementById,false,false) || _wrap_popCallStack(document.getElementById("modello"))).value == 'ship') {
    world.solid[0] = (_wrap_setLastFunctionCall("main.js",43,2048,2084,ship,false,false) || _wrap_popCallStack(new ship([255, 255, 255], [0, 0, 0])));
(_wrap_setLastFunctionCall("main.js",44,2090,2149,scale_solid,false,false) || _wrap_popCallStack(    scale_solid([3, 3, 3], world.solid[world.solid_number - 1])));
(_wrap_setLastFunctionCall("main.js",45,2155,2353,translate_solid,false,false) || _wrap_popCallStack(    translate_solid([-world.solid[world.solid_number - 1].center[0], -world.solid[world.solid_number - 1].center[1], -world.solid[world.solid_number - 1].center[2]], world.solid[world.solid_number - 1])));
(_wrap_setLastFunctionCall("main.js",46,2359,2426,translate_solid,false,false) || _wrap_popCallStack(    translate_solid([0, 0, -1100], world.solid[world.solid_number - 1])));
  }
  id_timer = (_wrap_setLastFunctionCall("main.js",48,2445,2466,setInterval,false,false) || _wrap_popCallStack(setInterval(draw, 10)));
}
function onKeyDown(evt) {
_wrap_addFunctionToMap('main.js', 50, 2470,3267, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
_wrap_addFunctionToMap('main.js', 84, 3268,3581, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var x = evt.pageX - (_wrap_setLastFunctionCall("main.js",85,3318,3352,document.getElementById,false,false) || _wrap_popCallStack(document.getElementById("display"))).offsetLeft;
  var y = evt.pageY - (_wrap_setLastFunctionCall("main.js",86,3387,3421,document.getElementById,false,false) || _wrap_popCallStack(document.getElementById("display"))).offsetTop;
  if ((x > 0) && (x < 1000) && (y > 0) && (y < 550)) {
    teta_y_global = 0.10 * (x - 500) / 500;
    teta_x_global = 0.10 * (y - 275) / 275;
  }
}
function draw() {
_wrap_addFunctionToMap('main.js', 92, 3582,6463, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var canvas = (_wrap_setLastFunctionCall("main.js",93,3615,3649,document.getElementById,false,false) || _wrap_popCallStack(document.getElementById("display")));
  if (canvas.getContext) {
    var ctx = (_wrap_setLastFunctionCall("main.js",95,3692,3715,canvas.getContext,false,false) || _wrap_popCallStack(canvas.getContext("2d")));
    if (motion == 0) {
(_wrap_setLastFunctionCall("main.js",97,3746,3776,ctx.clearRect,false,false) || _wrap_popCallStack(      ctx.clearRect(0, 0, 1000, 550)));
    } else {
      ctx.globalAlpha = 0.2;
      ctx.fillStyle = 'rgb(255,255,255)';
(_wrap_setLastFunctionCall("main.js",101,3868,3897,ctx.fillRect,false,false) || _wrap_popCallStack(      ctx.fillRect(0, 0, 1000, 550)));
    }
    ctx.fillStyle = colore;
    ctx.strokeStyle = 'rgb(0,0,0)';
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = alpha;
    var parametrig1 = (_wrap_setLastFunctionCall("main.js",107,4045,4108,get_rotation_parameter,false,false) || _wrap_popCallStack(get_rotation_parameter([0, 0, -1100], [0, 1, 0], teta_y_global)));
    var parametrig2 = (_wrap_setLastFunctionCall("main.js",108,4132,4191,get_rotation_parameter,false,false) || _wrap_popCallStack(get_rotation_parameter([0, 0, 0], [0, 1, 0], teta_y_global)));
    var parametrig1a = (_wrap_setLastFunctionCall("main.js",109,4216,4279,get_rotation_parameter,false,false) || _wrap_popCallStack(get_rotation_parameter([0, 0, -1100], [1, 0, 0], teta_x_global)));
    var parametrig2a = (_wrap_setLastFunctionCall("main.js",110,4304,4363,get_rotation_parameter,false,false) || _wrap_popCallStack(get_rotation_parameter([0, 0, 0], [1, 0, 0], teta_x_global)));
    for (var i = 0; i < world.solid_number; i++) {
(_wrap_setLastFunctionCall("main.js",112,4422,4481,rotate_solid_fast,false,false) || _wrap_popCallStack(      rotate_solid_fast(parametrig1, parametrig2, world.solid[i])));
(_wrap_setLastFunctionCall("main.js",113,4489,4550,rotate_solid_fast,false,false) || _wrap_popCallStack(      rotate_solid_fast(parametrig1a, parametrig2a, world.solid[i])));
    }
    var contatore = 0;
    visible_polygons = (_wrap_setLastFunctionCall("main.js",116,4604,4615,Array,false,false) || _wrap_popCallStack(new Array()));
    var delta_x;
    var delta_y;
    var delta_z;
    for (var j = 0; j < world.solid_number; j++) {
      for (var i = 0; i < world.solid[j].points_number; i++) {
        world.solid[j].distances[i] = (_wrap_setLastFunctionCall("main.js",122,4820,4860,Math.pow,false,false) || _wrap_popCallStack(Math.pow(world.solid[j].points[i][0], 2))) + (_wrap_setLastFunctionCall("main.js",122,4863,4903,Math.pow,false,false) || _wrap_popCallStack(Math.pow(world.solid[j].points[i][1], 2))) + (_wrap_setLastFunctionCall("main.js",122,4906,4946,Math.pow,false,false) || _wrap_popCallStack(Math.pow(world.solid[j].points[i][2], 2)));
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
(_wrap_setLastFunctionCall("main.js",135,5563,5598,visible_polygons.sort,false,false) || _wrap_popCallStack(    visible_polygons.sort(sortfunction)));
    var projected_points = (_wrap_setLastFunctionCall("main.js",136,5627,5638,Array,false,false) || _wrap_popCallStack(new Array()));
    for (var j = 0; j < world.solid_number; j++) {
      projected_points[j] = (_wrap_setLastFunctionCall("main.js",138,5719,5730,Array,false,false) || _wrap_popCallStack(new Array()));
      for (var i = 0; i < world.solid[j].points.length; i++) {
        projected_points[j][i] = (_wrap_setLastFunctionCall("main.js",140,5828,5877,project,false,false) || _wrap_popCallStack(project(world.distance, world.solid[j].points[i])));
      }
    }
    for (var i = 0; i < contatore; i++) {
(_wrap_setLastFunctionCall("main.js",144,5941,5956,ctx.beginPath,false,false) || _wrap_popCallStack(      ctx.beginPath()));
      var indice_solido = visible_polygons[i].solid;
      var indici_vertici = visible_polygons[i].vertex;
(_wrap_setLastFunctionCall("main.js",147,6072,6192,ctx.moveTo,false,false) || _wrap_popCallStack(      ctx.moveTo(projected_points[indice_solido][indici_vertici[0]][0], projected_points[indice_solido][indici_vertici[0]][1])));
      for (var z = 1; z < visible_polygons[i].vertex.length; z++) 
(_wrap_setLastFunctionCall("main.js",149,6269,6389,ctx.lineTo,false,false) || _wrap_popCallStack(        ctx.lineTo(projected_points[indice_solido][indici_vertici[z]][0], projected_points[indice_solido][indici_vertici[z]][1])));
(_wrap_setLastFunctionCall("main.js",150,6397,6412,ctx.closePath,false,false) || _wrap_popCallStack(      ctx.closePath()));
(_wrap_setLastFunctionCall("main.js",151,6420,6430,ctx.fill,false,false) || _wrap_popCallStack(      ctx.fill()));
(_wrap_setLastFunctionCall("main.js",152,6438,6450,ctx.stroke,false,false) || _wrap_popCallStack(      ctx.stroke()));
    }
  }
}
function sortfunction(a, b) {
_wrap_addFunctionToMap('main.js', 156, 6464,6531, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (b.distance - a.distance);
}
