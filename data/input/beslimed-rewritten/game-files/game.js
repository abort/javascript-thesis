_wrap_staticMeasuredFunctions['game.js'] = 43;
_wrap_staticMeasuredCalls['game.js'] =259;
var gameOptions = {Implements: [Options, Chain], options: {width: 8, height: 8, tilewidth: 32, tileheight: 32, fieldid: 'field', pointsid: 'p', timeid: 't', timebar: 'timebar', levelid: 'l', hintid: 'h', tileid: 'tiles', reqtileid: 'ntiles', startid: 'start', infoid: 'info', colors: false, haslines: false, lines: false, needtile: false, nextempty: false, tile1: false, tile2: false, tile1bak: false, idle: false, tilecount: 0, points: 0, delay: 200, fps: 30, hint: false, time: 0, hintcount: 0, starthints: 3, periodical: false, gameover: 'GAME OVER', nohintsleft: 'No hints left', nomoves: 'No Moves left!', level: 0, levels: {0: {tiles: 4, time: 120, reqtile: 60, text: 'Good Job'}, 1: {tiles: 4, time: 110, reqtile: 70, text: 'Well Done'}, 2: {tiles: 5, time: 100, reqtile: 80, text: 'Wohooo'}, 3: {tiles: 5, time: 90, reqtile: 90, text: 'Now Level 4'}, 4: {tiles: 6, time: 80, reqtile: 100, text: 'You are good'}, 5: {tiles: 6, time: 60, reqtile: 110, text: 'Level 6 Done'}, 6: {tiles: 7, time: 50, reqtile: 120, text: 'Mooooooo'}, 7: {tiles: 7, time: 40, reqtile: 130, text: 'Nice Done'}, 8: {tiles: 8, time: 30, reqtile: 140, text: 'Ready ... GO'}, 9: {tiles: 8, time: 20, reqtile: 150, text: 'You are insane!'}}}, initialize: function(options) {
_wrap_addFunctionToMap('game.js', 1, 1235,1356, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("game.js",2,1257,1281,this.setOptions,false,false) || _wrap_popCallStack(  this.setOptions(options)));
(_wrap_setLastFunctionCall("game.js",3,1285,1353,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("game.js",3,1285,1308,$,false,false) || _wrap_popCallStack($(this.options.startid))).addEvent('click', (_wrap_setLastFunctionCall("game.js",3,1327,1352,this.startgame.bind,false,false) || _wrap_popCallStack(this.startgame.bind(this))))));
}, startgame: function() {
_wrap_addFunctionToMap('game.js', 4, 1369,1619, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.options.hintcount = this.options.starthints;
  this.options.points = 0;
  this.options.level = 0;
(_wrap_setLastFunctionCall("game.js",8,1489,1505,this.clearGame,false,false) || _wrap_popCallStack(  this.clearGame()));
(_wrap_setLastFunctionCall("game.js",9,1509,1546,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("game.js",9,1509,1531,$,false,false) || _wrap_popCallStack($(this.options.hintid))).removeEvents()));
(_wrap_setLastFunctionCall("game.js",10,1550,1616,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("game.js",10,1550,1572,$,false,false) || _wrap_popCallStack($(this.options.hintid))).addEvent('click', (_wrap_setLastFunctionCall("game.js",10,1591,1615,this.giveHint.bind,false,false) || _wrap_popCallStack(this.giveHint.bind(this))))));
}, clearGame: function() {
_wrap_addFunctionToMap('game.js', 11, 1632,2050, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.options.tilecount = 0;
  this.chainreaction = 0;
  this.options.time = this.options.levels[this.options.level].time;
(_wrap_setLastFunctionCall("game.js",15,1771,1788,this.setupfield,false,false) || _wrap_popCallStack(  this.setupfield()));
(_wrap_setLastFunctionCall("game.js",16,1792,1808,this.firstfill,false,false) || _wrap_popCallStack(  this.firstfill()));
(_wrap_setLastFunctionCall("game.js",17,1812,1838,this.updatePointsDisplay,false,false) || _wrap_popCallStack(  this.updatePointsDisplay()));
(_wrap_setLastFunctionCall("game.js",18,1842,1867,this.updateLevelDisplay,false,false) || _wrap_popCallStack(  this.updateLevelDisplay()));
(_wrap_setLastFunctionCall("game.js",19,1871,1895,this.updateTimeDisplay,false,false) || _wrap_popCallStack(  this.updateTimeDisplay()));
(_wrap_setLastFunctionCall("game.js",20,1899,1916,this.checkmoves,false,false) || _wrap_popCallStack(  this.checkmoves()));
(_wrap_setLastFunctionCall("game.js",21,1920,1937,this.updatehint,false,false) || _wrap_popCallStack(  this.updatehint()));
(_wrap_setLastFunctionCall("game.js",22,1941,1959,$clear,false,false) || _wrap_popCallStack(  $clear(this.timer)));
  this.timer = (_wrap_setLastFunctionCall("game.js",23,1976,2006,this.doTimer.delay,false,false) || _wrap_popCallStack(this.doTimer.delay(1000, this)));
  (_wrap_setLastFunctionCall("game.js",24,2010,2032,$,false,false) || _wrap_popCallStack($(this.options.infoid))).innerHTML = "";
}, setupfield: function() {
_wrap_addFunctionToMap('game.js', 25, 2064,4556, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.field = (_wrap_setLastFunctionCall("game.js",26,2092,2102,Hash,false,false) || _wrap_popCallStack(new Hash()));
  this.tiles = (_wrap_setLastFunctionCall("game.js",27,2119,2129,Hash,false,false) || _wrap_popCallStack(new Hash()));
  this.freetiles = (_wrap_setLastFunctionCall("game.js",28,2150,2160,Hash,false,false) || _wrap_popCallStack(new Hash()));
  this.fx = {};
  this.fxplode = {};
  this.fxplodetile = {};
  this.fxp = {};
  this.fxon = 0;
(_wrap_setLastFunctionCall("game.js",34,2260,2291,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("game.js",34,2260,2283,$,false,false) || _wrap_popCallStack($(this.options.fieldid))).empty()));
  var inner;
  var tilecount = 0;
  var tileid = false;
  var posid = false;
  for (var y = 0; y <= this.options.width - 1; y++) {
    for (var x = 0; x <= this.options.height - 1; x++) {
      tileid = 't' + tilecount;
      posid = x + 'x' + y;
(_wrap_setLastFunctionCall("game.js",43,2546,2575,this.field.set,false,false) || _wrap_popCallStack(      this.field.set(posid, tileid)));
(_wrap_setLastFunctionCall("game.js",44,2583,2881,this.tiles.set,false,false) || _wrap_popCallStack(      this.tiles.set(tileid, (_wrap_setLastFunctionCall("game.js",44,2606,2880,Element,false,false) || _wrap_popCallStack(new Element('DIV', {'id': tileid, 'class': 'outer', 'styles': {'position': 'absolute', 'width': this.options.tilewidth + 'px', 'height': this.options.tileheight + 'px', 'top': (y * this.options.tileheight) + 'px', 'left': (x * this.options.tilewidth) + 'px', 'z-index': 0}}))))));
      inner = (_wrap_setLastFunctionCall("game.js",45,2897,2982,Element,false,false) || _wrap_popCallStack(new Element('DIV', {'class': 'inner', 'styles': {'width': '100%', 'height': '100%'}})));
(_wrap_setLastFunctionCall("game.js",46,2990,3022,inner.inject,false,false) || _wrap_popCallStack(      inner.inject(this.tiles[tileid])));
(_wrap_setLastFunctionCall("game.js",47,3030,3077,this.tiles[tileid].inject,false,false) || _wrap_popCallStack(      this.tiles[tileid].inject(this.options.fieldid)));
      this.fx[tileid] = (_wrap_setLastFunctionCall("game.js",48,3103,3322,Fx.Morph,false,false) || _wrap_popCallStack(new Fx.Morph((_wrap_setLastFunctionCall("game.js",48,3116,3134,$,false,false) || _wrap_popCallStack($('t' + tilecount))), {duration: this.options.delay, wait: false, transition: Fx.Transitions.Circ.easeOut, fps: this.options.fps, onComplete: (_wrap_setLastFunctionCall("game.js",48,3256,3284,this.onFxComplete.bind,false,false) || _wrap_popCallStack(this.onFxComplete.bind(this))), onStart: (_wrap_setLastFunctionCall("game.js",48,3295,3320,this.onFxStart.bind,false,false) || _wrap_popCallStack(this.onFxStart.bind(this)))})));
      this.tiles[tileid].drag = (_wrap_setLastFunctionCall("game.js",49,3356,4524,Drag.Move,false,false) || _wrap_popCallStack(new Drag.Move((_wrap_setLastFunctionCall("game.js",49,3370,3391,$,false,false) || _wrap_popCallStack($(this.tiles[tileid]))), {snap: 0, onBeforeStart: (_wrap_setLastFunctionCall("game.js",59,3418,4081,null,false,false) || _wrap_popCallStack(function(el) {
_wrap_addFunctionToMap('game.js', 49, 3418,4070, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var xx = (_wrap_setLastFunctionCall("game.js",50,3444,3471,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("game.js",50,3444,3463,el.getStyle,false,false) || _wrap_popCallStack(el.getStyle("left"))).toInt()));
  var yy = (_wrap_setLastFunctionCall("game.js",51,3484,3510,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("game.js",51,3484,3502,el.getStyle,false,false) || _wrap_popCallStack(el.getStyle("top"))).toInt()));
  this.restore = {x: xx, y: yy};
  var x1 = (xx - this.options.tilewidth < 0) ? 0 : xx - this.options.tilewidth;
  var y1 = (yy - this.options.tilewidth < 0) ? 0 : yy - this.options.tilewidth;
  var x2 = (xx + 32 > (this.options.height - 1) * this.options.tilewidth) ? (this.options.height - 1) * this.options.tilewidth : xx + 32;
  var y2 = (yy + 32 > (this.options.height - 1) * this.options.tilewidth) ? (this.options.height - 1) * this.options.tilewidth : yy + 32;
  el.drag.options.limit = {x: [x1, x2], y: [y1, y2]};
(_wrap_setLastFunctionCall("game.js",58,4037,4067,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("game.js",58,4037,4042,$,false,false) || _wrap_popCallStack($(el))).setStyle("z-index", 500)));
}.bind(this))), onComplete: (_wrap_setLastFunctionCall("game.js",68,4095,4522,null,false,false) || _wrap_popCallStack(function(el) {
_wrap_addFunctionToMap('game.js', 59, 4095,4511, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var xx = (_wrap_setLastFunctionCall("game.js",60,4121,4148,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("game.js",60,4121,4140,el.getStyle,false,false) || _wrap_popCallStack(el.getStyle("left"))).toInt()));
  var yy = (_wrap_setLastFunctionCall("game.js",61,4161,4187,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("game.js",61,4161,4179,el.getStyle,false,false) || _wrap_popCallStack(el.getStyle("top"))).toInt()));
  this.options.tile1 = (_wrap_setLastFunctionCall("game.js",62,4212,4268,this.getTileId,false,false) || _wrap_popCallStack(this.getTileId((_wrap_setLastFunctionCall("game.js",62,4227,4246,Math.round,false,false) || _wrap_popCallStack(Math.round(xx / 32))), (_wrap_setLastFunctionCall("game.js",62,4248,4267,Math.round,false,false) || _wrap_popCallStack(Math.round(yy / 32))))));
  this.options.tile2 = (_wrap_setLastFunctionCall("game.js",63,4293,4373,this.getTileId,false,false) || _wrap_popCallStack(this.getTileId((_wrap_setLastFunctionCall("game.js",63,4308,4339,Math.round,false,false) || _wrap_popCallStack(Math.round(this.restore.x / 32))), (_wrap_setLastFunctionCall("game.js",63,4341,4372,Math.round,false,false) || _wrap_popCallStack(Math.round(this.restore.y / 32))))));
(_wrap_setLastFunctionCall("game.js",64,4377,4415,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("game.js",64,4377,4382,$,false,false) || _wrap_popCallStack($(el))).setStyle("left", this.restore.x)));
(_wrap_setLastFunctionCall("game.js",65,4419,4456,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("game.js",65,4419,4424,$,false,false) || _wrap_popCallStack($(el))).setStyle("top", this.restore.y)));
(_wrap_setLastFunctionCall("game.js",66,4460,4488,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("game.js",66,4460,4465,$,false,false) || _wrap_popCallStack($(el))).setStyle("z-index", 0)));
(_wrap_setLastFunctionCall("game.js",67,4492,4508,this.swapTiles,false,false) || _wrap_popCallStack(  this.swapTiles()));
}.bind(this)))})));
      tilecount++;
    }
  }
}, onFxStart: function() {
_wrap_addFunctionToMap('game.js', 72, 4569,4598, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.fxon++;
}, onFxComplete: function() {
_wrap_addFunctionToMap('game.js', 74, 4614,4643, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.fxon--;
}, firstfill: function() {
_wrap_addFunctionToMap('game.js', 76, 4656,5377, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var color;
  var color1;
  var tile = false;
  for (var x = this.options.width - 1; x >= 0; x--) {
    for (var y = this.options.height - 1; y >= 0; y--) {
      tile = (_wrap_setLastFunctionCall("game.js",82,4840,4860,this.getRandomTile,false,false) || _wrap_popCallStack(this.getRandomTile()));
      while ((tile === (_wrap_setLastFunctionCall("game.js",83,4885,4907,this.getTile,false,false) || _wrap_popCallStack(this.getTile(x + 1, y))) && tile === (_wrap_setLastFunctionCall("game.js",83,4920,4942,this.getTile,false,false) || _wrap_popCallStack(this.getTile(x + 2, y)))) || (tile === (_wrap_setLastFunctionCall("game.js",83,4957,4979,this.getTile,false,false) || _wrap_popCallStack(this.getTile(x, y + 1))) && tile === (_wrap_setLastFunctionCall("game.js",83,4992,5014,this.getTile,false,false) || _wrap_popCallStack(this.getTile(x, y + 2))))) {
        tile = (_wrap_setLastFunctionCall("game.js",84,5034,5100,this.getRandomTile,false,false) || _wrap_popCallStack(this.getRandomTile((_wrap_setLastFunctionCall("game.js",84,5053,5075,this.getTile,false,false) || _wrap_popCallStack(this.getTile(x + 1, y))), (_wrap_setLastFunctionCall("game.js",84,5077,5099,this.getTile,false,false) || _wrap_popCallStack(this.getTile(x, y + 1))))));
      }
(_wrap_setLastFunctionCall("game.js",86,5116,5140,this.setTile,false,false) || _wrap_popCallStack(      this.setTile(x, y, tile)));
      var tileid = (_wrap_setLastFunctionCall("game.js",87,5161,5181,this.getTileId,false,false) || _wrap_popCallStack(this.getTileId(x, y)));
(_wrap_setLastFunctionCall("game.js",88,5189,5297,null,false,false) || _wrap_popCallStack(      (_wrap_setLastFunctionCall("game.js",88,5189,5198,$,false,false) || _wrap_popCallStack($(tileid))).setStyles({'top': (-this.options.tileheight) + 'px', 'left': (x * this.options.tilewidth) + 'px'})));
(_wrap_setLastFunctionCall("game.js",89,5305,5364,this.fx[tileid].start,false,false) || _wrap_popCallStack(      this.fx[tileid].start({'top': y * this.options.tileheight})));
    }
  }
}, pushFreetile: function(tileid) {
_wrap_addFunctionToMap('game.js', 92, 5393,5487, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!(_wrap_setLastFunctionCall("game.js",93,5419,5445,this.freetiles.has,false,false) || _wrap_popCallStack(this.freetiles.has(tileid)))) 
    (_wrap_setLastFunctionCall("game.js",94,5452,5484,this.freetiles.set,false,false) || _wrap_popCallStack(  this.freetiles.set(tileid, true)));
}, popFreetile: function() {
_wrap_addFunctionToMap('game.js', 95, 5502,5647, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var keys = (_wrap_setLastFunctionCall("game.js",96,5528,5552,this.freetiles.getKeys,false,false) || _wrap_popCallStack(this.freetiles.getKeys()));
  if (keys[0]) {
(_wrap_setLastFunctionCall("game.js",98,5575,5604,this.freetiles.erase,false,false) || _wrap_popCallStack(    this.freetiles.erase(keys[0])));
    return keys[0];
  }
  return false;
}, getTile: function(x, y) {
_wrap_addFunctionToMap('game.js', 102, 5658,5815, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!(_wrap_setLastFunctionCall("game.js",103,5682,5701,this.checkPos,false,false) || _wrap_popCallStack(this.checkPos(x, y)))) 
    return false;
  if (!(_wrap_setLastFunctionCall("game.js",105,5729,5749,this.getTileId,false,false) || _wrap_popCallStack(this.getTileId(x, y)))) 
    return false;
  return (_wrap_setLastFunctionCall("game.js",107,5779,5802,$,false,false) || _wrap_popCallStack($((_wrap_setLastFunctionCall("game.js",107,5781,5801,this.getTileId,false,false) || _wrap_popCallStack(this.getTileId(x, y)))))).className;
}, getRandomTile: function(t1, t2) {
_wrap_addFunctionToMap('game.js', 108, 5832,6002, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var tile;
  while ((tile == t1 || tile == t2) || !tile) 
    tile = 's' + (_wrap_setLastFunctionCall("game.js",111,5927,5984,$random,false,false) || _wrap_popCallStack($random(1, this.options.levels[this.options.level].tiles)));
  return tile;
}, getTileId: function(x, y) {
_wrap_addFunctionToMap('game.js', 113, 6015,6173, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!(_wrap_setLastFunctionCall("game.js",114,6039,6058,this.checkPos,false,false) || _wrap_popCallStack(this.checkPos(x, y)))) 
    return false;
  if (!(_wrap_setLastFunctionCall("game.js",116,6086,6113,this.field.get,false,false) || _wrap_popCallStack(this.field.get(x + 'x' + y)))) 
    return false;
  return (_wrap_setLastFunctionCall("game.js",118,6143,6170,this.field.get,false,false) || _wrap_popCallStack(this.field.get(x + 'x' + y)));
}, setTile: function(x, y, tile) {
_wrap_addFunctionToMap('game.js', 119, 6184,6423, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!(_wrap_setLastFunctionCall("game.js",120,6214,6233,this.checkPos,false,false) || _wrap_popCallStack(this.checkPos(x, y)))) 
    return false;
  var tileid = (_wrap_setLastFunctionCall("game.js",122,6269,6289,this.getTileId,false,false) || _wrap_popCallStack(this.getTileId(x, y)));
  if (!tileid) 
    return false;
(_wrap_setLastFunctionCall("game.js",125,6327,6363,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("game.js",125,6327,6336,$,false,false) || _wrap_popCallStack($(tileid))).setProperty("class", tile)));
(_wrap_setLastFunctionCall("game.js",126,6367,6405,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("game.js",126,6367,6376,$,false,false) || _wrap_popCallStack($(tileid))).setStyle("display", "block")));
  return true;
}, getTilePos: function(tileid) {
_wrap_addFunctionToMap('game.js', 128, 6437,6577, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var key = (_wrap_setLastFunctionCall("game.js",129,6468,6492,this.field.keyOf,false,false) || _wrap_popCallStack(this.field.keyOf(tileid)));
  var xy = (_wrap_setLastFunctionCall("game.js",130,6505,6519,key.split,false,false) || _wrap_popCallStack(key.split("x")));
  return {'x': (_wrap_setLastFunctionCall("game.js",131,6536,6551,parseInt,false,false) || _wrap_popCallStack(parseInt(xy[0]))), 'y': (_wrap_setLastFunctionCall("game.js",131,6558,6573,parseInt,false,false) || _wrap_popCallStack(parseInt(xy[1])))};
}, clearTile: function(x, y) {
_wrap_addFunctionToMap('game.js', 132, 6590,7751, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!(_wrap_setLastFunctionCall("game.js",133,6614,6633,this.checkPos,false,false) || _wrap_popCallStack(this.checkPos(x, y)))) 
    return false;
  var tileid = (_wrap_setLastFunctionCall("game.js",135,6669,6689,this.getTileId,false,false) || _wrap_popCallStack(this.getTileId(x, y)));
  if (!tileid) 
    return false;
  this.fxplodetile[tileid] = (_wrap_setLastFunctionCall("game.js",138,6754,7044,Element,false,false) || _wrap_popCallStack(new Element('DIV', {'id': "ex" + tileid, 'class': (_wrap_setLastFunctionCall("game.js",138,6804,6834,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("game.js",138,6804,6813,$,false,false) || _wrap_popCallStack($(tileid))).getProperty("class"))), 'styles': {'position': 'absolute', 'width': this.options.tilewidth + 'px', 'height': this.options.tileheight + 'px', 'top': (y * this.options.tileheight) + 'px', 'left': (x * this.options.tilewidth) + 'px'}})));
(_wrap_setLastFunctionCall("game.js",139,7048,7110,this.fxplodetile[tileid].injectInside,false,false) || _wrap_popCallStack(  this.fxplodetile[tileid].injectInside((_wrap_setLastFunctionCall("game.js",139,7086,7109,$,false,false) || _wrap_popCallStack($(this.options.fieldid))))));
  var xx = (this.options.tilewidth * x) - (_wrap_setLastFunctionCall("game.js",140,7154,7192,$random,false,false) || _wrap_popCallStack($random(0, this.options.tilewidth * 2))) + (_wrap_setLastFunctionCall("game.js",140,7195,7233,$random,false,false) || _wrap_popCallStack($random(0, this.options.tilewidth * 2)));
  var yy = (9 * this.options.tileheight);
  this.fxplode[tileid] = (_wrap_setLastFunctionCall("game.js",142,7302,7491,Fx.Morph,false,false) || _wrap_popCallStack(new Fx.Morph((_wrap_setLastFunctionCall("game.js",142,7315,7331,$,false,false) || _wrap_popCallStack($('ex' + tileid))), {duration: this.options.delay * 4, wait: false, transition: Fx.Transitions.Circ.easeIn, fps: this.options.fps, onComplete: (_wrap_setLastFunctionCall("game.js",142,7456,7489,this.onFxplodeComplete.bind,false,false) || _wrap_popCallStack(this.onFxplodeComplete.bind(this)))})));
(_wrap_setLastFunctionCall("game.js",143,7495,7594,this.fxplode[tileid].start.delay,false,false) || _wrap_popCallStack(  this.fxplode[tileid].start.delay(10, this.fxplode[tileid], {'top': yy, 'left': xx, 'opacity': 0.4})));
(_wrap_setLastFunctionCall("game.js",144,7598,7640,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("game.js",144,7598,7607,$,false,false) || _wrap_popCallStack($(tileid))).removeClass((_wrap_setLastFunctionCall("game.js",144,7620,7629,$,false,false) || _wrap_popCallStack($(tileid))).className)));
(_wrap_setLastFunctionCall("game.js",145,7644,7681,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("game.js",145,7644,7653,$,false,false) || _wrap_popCallStack($(tileid))).setStyle("display", "none")));
(_wrap_setLastFunctionCall("game.js",146,7685,7710,this.pushFreetile,false,false) || _wrap_popCallStack(  this.pushFreetile(tileid)));
(_wrap_setLastFunctionCall("game.js",147,7714,7748,this.field.set,false,false) || _wrap_popCallStack(  this.field.set(x + 'x' + y, false)));
}, onFxplodeComplete: function(e) {
_wrap_addFunctionToMap('game.js', 148, 7772,7807, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("game.js",149,7788,7804,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("game.js",149,7788,7795,$,false,false) || _wrap_popCallStack($(e.id))).remove()));
}, checkPos: function(x, y) {
_wrap_addFunctionToMap('game.js', 150, 7819,7977, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (x < 0 || x > this.options.height - 1) 
    return false;
  if (y < 0 || y > this.options.width - 1) 
    return false;
  return true;
}, resetTilePos: function(x, y) {
_wrap_addFunctionToMap('game.js', 156, 7993,8396, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var id = (_wrap_setLastFunctionCall("game.js",157,8021,8039,this.popFreetile,false,false) || _wrap_popCallStack(this.popFreetile()));
  if (!id) 
    return false;
  if (y == 0) {
(_wrap_setLastFunctionCall("game.js",161,8091,8195,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("game.js",161,8091,8096,$,false,false) || _wrap_popCallStack($(id))).setStyles({'top': (-this.options.tileheight) + 'px', 'left': (x * this.options.tilewidth) + 'px'})));
(_wrap_setLastFunctionCall("game.js",162,8201,8230,this.fx[id].start,false,false) || _wrap_popCallStack(    this.fx[id].start({'top': 0})));
  } else {
(_wrap_setLastFunctionCall("game.js",164,8247,8354,null,false,false) || _wrap_popCallStack(    (_wrap_setLastFunctionCall("game.js",164,8247,8252,$,false,false) || _wrap_popCallStack($(id))).setStyles({'top': (y * this.options.tileheight) + 'px', 'left': (x * this.options.tilewidth) + 'px'})));
  }
(_wrap_setLastFunctionCall("game.js",166,8362,8393,this.field.set,false,false) || _wrap_popCallStack(  this.field.set(x + 'x' + y, id)));
}, addLine: function() {
_wrap_addFunctionToMap('game.js', 167, 8407,8726, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.options.addLinerunning = true;
  var line = false;
  for (var x = 0; x <= this.options.width - 1; x++) {
    if (!(_wrap_setLastFunctionCall("game.js",171,8541,8559,this.getTile,false,false) || _wrap_popCallStack(this.getTile(x, 0)))) {
      line = true;
(_wrap_setLastFunctionCall("game.js",173,8588,8611,this.resetTilePos,false,false) || _wrap_popCallStack(      this.resetTilePos(x, 0)));
(_wrap_setLastFunctionCall("game.js",174,8619,8659,this.setTile,false,false) || _wrap_popCallStack(      this.setTile(x, 0, (_wrap_setLastFunctionCall("game.js",174,8638,8658,this.getRandomTile,false,false) || _wrap_popCallStack(this.getRandomTile())))));
    }
  }
  this.options.addLinerunning = false;
  return line;
}, gravity: function() {
_wrap_addFunctionToMap('game.js', 179, 8737,9548, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.options.gravityrunning = true;
  var col = {};
  var id = false;
  for (var y = this.options.height - 2; y >= 0; y--) {
    for (var x = this.options.width - 1; x >= 0; x--) {
      if (!(_wrap_setLastFunctionCall("game.js",185,8944,8966,this.getTile,false,false) || _wrap_popCallStack(this.getTile(x, y + 1))) && (_wrap_setLastFunctionCall("game.js",185,8970,8988,this.getTile,false,false) || _wrap_popCallStack(this.getTile(x, y)))) {
        var depth = 0;
        for (var yy = y; yy <= this.options.height - 1; yy++) {
          if (!(_wrap_setLastFunctionCall("game.js",188,9094,9113,this.getTile,false,false) || _wrap_popCallStack(this.getTile(x, yy)))) 
            depth++;
        }
        id = (_wrap_setLastFunctionCall("game.js",191,9160,9180,this.getTileId,false,false) || _wrap_popCallStack(this.getTileId(x, y)));
        if (id != "false") {
(_wrap_setLastFunctionCall("game.js",193,9221,9314,this.fx[id].start,false,false) || _wrap_popCallStack(          this.fx[id].start({'top': (_wrap_setLastFunctionCall("game.js",193,9247,9276,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("game.js",193,9247,9268,null,false,false) || _wrap_popCallStack((_wrap_setLastFunctionCall("game.js",193,9247,9252,$,false,false) || _wrap_popCallStack($(id))).getStyle('top'))).toInt())) + (this.options.tileheight * depth)})));
(_wrap_setLastFunctionCall("game.js",194,9326,9367,this.field.set,false,false) || _wrap_popCallStack(          this.field.set(x + 'x' + (y + depth), id)));
(_wrap_setLastFunctionCall("game.js",195,9379,9413,this.field.set,false,false) || _wrap_popCallStack(          this.field.set(x + 'x' + y, false)));
        }
      }
    }
  }
  this.options.gravityrunning = false;
  if (id != "false") 
    return true;
  else 
    return false;
}, swapTiles: function() {
_wrap_addFunctionToMap('game.js', 205, 9561,9987, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!this.options.tile1 || !this.options.tile2) 
    return false;
  var t1 = (_wrap_setLastFunctionCall("game.js",208,9654,9695,this.getTilePos,false,false) || _wrap_popCallStack(this.getTilePos((_wrap_setLastFunctionCall("game.js",208,9670,9691,$,false,false) || _wrap_popCallStack($(this.options.tile1))).id)));
  var t2 = (_wrap_setLastFunctionCall("game.js",209,9708,9749,this.getTilePos,false,false) || _wrap_popCallStack(this.getTilePos((_wrap_setLastFunctionCall("game.js",209,9724,9745,$,false,false) || _wrap_popCallStack($(this.options.tile2))).id)));
  if (!(_wrap_setLastFunctionCall("game.js",210,9758,9780,this.checkSwap,false,false) || _wrap_popCallStack(this.checkSwap(t1, t2)))) 
    return false;
  var tc1 = (_wrap_setLastFunctionCall("game.js",212,9813,9837,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t1.x, t1.y)));
  var tc2 = (_wrap_setLastFunctionCall("game.js",213,9851,9875,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t2.x, t2.y)));
(_wrap_setLastFunctionCall("game.js",214,9879,9908,this.setTile,false,false) || _wrap_popCallStack(  this.setTile(t1.x, t1.y, tc2)));
(_wrap_setLastFunctionCall("game.js",215,9912,9941,this.setTile,false,false) || _wrap_popCallStack(  this.setTile(t2.x, t2.y, tc1)));
(_wrap_setLastFunctionCall("game.js",216,9945,9984,this.chain,false,false) || _wrap_popCallStack(  this.chain((_wrap_setLastFunctionCall("game.js",216,9956,9983,this.tumble.delay,false,false) || _wrap_popCallStack(this.tumble.delay(10, this))))));
}, tumble: function() {
_wrap_addFunctionToMap('game.js', 217, 9997,10910, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (this.highlight) 
    (_wrap_setLastFunctionCall("game.js",219,10037,10087,this.highlight.setStyle,false,false) || _wrap_popCallStack(  this.highlight.setStyle("border", "0px solid red")));
  if (this.options.checklinesrunning || this.options.addLinerunning || this.options.gravityrunning) {
(_wrap_setLastFunctionCall("game.js",221,10195,10223,conslole.log,false,false) || _wrap_popCallStack(    conslole.log("abort tumble")));
    return;
  }
  if (this.fxon != 0) {
(_wrap_setLastFunctionCall("game.js",225,10269,10309,this.chain,false,false) || _wrap_popCallStack(    this.chain((_wrap_setLastFunctionCall("game.js",225,10280,10308,this.tumble.delay,false,false) || _wrap_popCallStack(this.tumble.delay(100, this))))));
    return;
  }
  if (!(_wrap_setLastFunctionCall("game.js",228,10334,10348,this.gravity,false,false) || _wrap_popCallStack(this.gravity()))) {
  }
  if (this.levelpause) 
    return;
  if ((_wrap_setLastFunctionCall("game.js",232,10398,10412,this.addLine,false,false) || _wrap_popCallStack(this.addLine()))) {
(_wrap_setLastFunctionCall("game.js",233,10420,10459,this.chain,false,false) || _wrap_popCallStack(    this.chain((_wrap_setLastFunctionCall("game.js",233,10431,10458,this.tumble.delay,false,false) || _wrap_popCallStack(this.tumble.delay(10, this))))));
    return;
  } else if ((_wrap_setLastFunctionCall("game.js",235,10486,10504,this.check_lines,false,false) || _wrap_popCallStack(this.check_lines()))) {
(_wrap_setLastFunctionCall("game.js",236,10512,10572,this.chain,false,false) || _wrap_popCallStack(    this.chain((_wrap_setLastFunctionCall("game.js",236,10523,10571,this.deleteLines.delay,false,false) || _wrap_popCallStack(this.deleteLines.delay(this.options.delay, this))))));
    return;
  }
  if (this.chainreaction > 2) {
    this.options.points = this.options.points + (this.chainreaction * this.chainreaction * 50);
  }
  if (!(_wrap_setLastFunctionCall("game.js",242,10729,10746,this.checkmoves,false,false) || _wrap_popCallStack(this.checkmoves()))) {
(_wrap_setLastFunctionCall("game.js",243,10754,10768,this.noMoves,false,false) || _wrap_popCallStack(    this.noMoves()));
  }
  if (this.options.tilecount >= this.options.levels[this.options.level].reqtile) {
(_wrap_setLastFunctionCall("game.js",246,10861,10877,this.nextLevel,false,false) || _wrap_popCallStack(    this.nextLevel()));
  }
  this.chainreaction = 0;
}, noMoves: function() {
_wrap_addFunctionToMap('game.js', 249, 10921,11192, (typeof arguments === 'object' ? arguments.callee.caller : null));

  (_wrap_setLastFunctionCall("game.js",250,10936,10958,$,false,false) || _wrap_popCallStack($(this.options.infoid))).innerHTML = this.options.nomoves;
(_wrap_setLastFunctionCall("game.js",251,10995,11040,this.chain,false,false) || _wrap_popCallStack(  this.chain((_wrap_setLastFunctionCall("game.js",251,11006,11039,this.doNewMoves.delay,false,false) || _wrap_popCallStack(this.doNewMoves.delay(3000, this))))));
  for (var x = 0; x <= this.options.height - 1; x++) {
    for (var y = 0; y <= this.options.width - 1; y++) {
(_wrap_setLastFunctionCall("game.js",254,11159,11179,this.clearTile,false,false) || _wrap_popCallStack(      this.clearTile(x, y)));
    }
  }
}, doNewMoves: function() {
_wrap_addFunctionToMap('game.js', 257, 11206,11302, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("game.js",258,11221,11238,this.setupfield,false,false) || _wrap_popCallStack(  this.setupfield()));
(_wrap_setLastFunctionCall("game.js",259,11242,11258,this.firstfill,false,false) || _wrap_popCallStack(  this.firstfill()));
  (_wrap_setLastFunctionCall("game.js",260,11262,11284,$,false,false) || _wrap_popCallStack($(this.options.infoid))).innerHTML = "";
}, giveHint: function(e) {
_wrap_addFunctionToMap('game.js', 261, 11314,11604, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (this.options.hint && this.options.hintcount > 0) {
    var id = (_wrap_setLastFunctionCall("game.js",263,11398,11460,this.getTileId,false,false) || _wrap_popCallStack(this.getTileId(this.options.hint[0].x, this.options.hint[0].y)));
    this.highlight = (_wrap_setLastFunctionCall("game.js",264,11483,11488,$,false,false) || _wrap_popCallStack($(id)));
(_wrap_setLastFunctionCall("game.js",265,11494,11544,this.highlight.setStyle,false,false) || _wrap_popCallStack(    this.highlight.setStyle("border", "1px solid red")));
    this.options.hintcount--;
(_wrap_setLastFunctionCall("game.js",267,11580,11597,this.updatehint,false,false) || _wrap_popCallStack(    this.updatehint()));
  }
}, updatehint: function() {
_wrap_addFunctionToMap('game.js', 269, 11618,11907, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var x = "";
  if (this.options.hintcount > 0) {
    for (var h = 0; h <= this.options.hintcount - 1; h++) {
      x = x + ' <img width="14" height="14" src="images/coin.gif"> ';
    }
  } else {
    x = this.options.nohintsleft;
  }
  (_wrap_setLastFunctionCall("game.js",278,11868,11890,$,false,false) || _wrap_popCallStack($(this.options.hintid))).innerHTML = x;
}, checkSwap: function(t1, t2) {
_wrap_addFunctionToMap('game.js', 279, 11920,12171, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var xok = (_wrap_setLastFunctionCall("game.js",280,11951,11987,Math.abs,false,false) || _wrap_popCallStack(Math.abs(((t1.x + t2.x) / 2) - t1.x)));
  var yok = (_wrap_setLastFunctionCall("game.js",281,12001,12037,Math.abs,false,false) || _wrap_popCallStack(Math.abs(((t1.y + t2.y) / 2) - t1.y)));
  if (xok + yok != 0.5) 
    return false;
  if ((_wrap_setLastFunctionCall("game.js",284,12088,12109,this.hasMoves,false,false) || _wrap_popCallStack(this.hasMoves(t1, t2))) || (_wrap_setLastFunctionCall("game.js",284,12113,12134,this.hasMoves,false,false) || _wrap_popCallStack(this.hasMoves(t2, t1)))) 
    return true;
  return false;
}, hasMoves: function(t1, t2) {
_wrap_addFunctionToMap('game.js', 287, 12183,14160, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.options.hint = false;
  if (t1.x < 0 || t1.x > this.options.width - 1) 
    return false;
  if (t1.y < 0 || t1.y > this.options.height - 1) 
    return false;
  if (t2.x < 0 || t2.x > this.options.width - 1) 
    return false;
  if (t2.y < 0 || t2.y > this.options.height - 1) 
    return false;
  if ((_wrap_setLastFunctionCall("game.js",297,12511,12535,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t1.x, t1.y))) == (_wrap_setLastFunctionCall("game.js",297,12539,12567,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t2.x - 1, t2.y))) && (_wrap_setLastFunctionCall("game.js",297,12571,12595,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t1.x, t1.y))) == (_wrap_setLastFunctionCall("game.js",297,12599,12627,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t2.x - 2, t2.y))) && t1.x != (t2.x - 1)) {
    this.options.hint = [{'x': t1.x, 'y': t1.y}, {'x': t2.x - 1, 'y': t2.y}, {'x': t2.x - 2, 'y': t2.y}];
    return true;
  }
  if ((_wrap_setLastFunctionCall("game.js",301,12786,12810,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t1.x, t1.y))) == (_wrap_setLastFunctionCall("game.js",301,12814,12842,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t2.x + 1, t2.y))) && (_wrap_setLastFunctionCall("game.js",301,12846,12870,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t1.x, t1.y))) == (_wrap_setLastFunctionCall("game.js",301,12874,12902,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t2.x + 2, t2.y))) && t1.x != (t2.x + 1)) {
    this.options.hint = [{'x': t1.x, 'y': t1.y}, {'x': t2.x + 1, 'y': t2.y}, {'x': t2.x + 2, 'y': t2.y}];
    return true;
  }
  if ((_wrap_setLastFunctionCall("game.js",305,13061,13085,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t1.x, t1.y))) == (_wrap_setLastFunctionCall("game.js",305,13089,13117,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t2.x + 1, t2.y))) && (_wrap_setLastFunctionCall("game.js",305,13121,13145,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t1.x, t1.y))) == (_wrap_setLastFunctionCall("game.js",305,13149,13177,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t2.x - 1, t2.y))) && t1.y != t2.y) {
    this.options.hint = [{'x': t1.x, 'y': t1.y}, {'x': t2.x + 1, 'y': t2.y}, {'x': t2.x - 1, 'y': t2.y}];
    return true;
  }
  if ((_wrap_setLastFunctionCall("game.js",309,13330,13354,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t1.x, t1.y))) == (_wrap_setLastFunctionCall("game.js",309,13358,13386,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t2.x, t2.y - 1))) && (_wrap_setLastFunctionCall("game.js",309,13390,13414,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t1.x, t1.y))) == (_wrap_setLastFunctionCall("game.js",309,13418,13446,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t2.x, t2.y - 2))) && t1.y != (t2.y - 1)) {
    this.options.hint = [{'x': t1.x, 'y': t1.y}, {'x': t2.x, 'y': t2.y - 1}, {'x': t2.x, 'y': t2.y - 2}];
    return true;
  }
  if ((_wrap_setLastFunctionCall("game.js",313,13605,13629,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t1.x, t1.y))) == (_wrap_setLastFunctionCall("game.js",313,13633,13661,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t2.x, t2.y + 1))) && (_wrap_setLastFunctionCall("game.js",313,13665,13689,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t1.x, t1.y))) == (_wrap_setLastFunctionCall("game.js",313,13693,13721,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t2.x, t2.y + 2))) && t1.y != (t2.y + 1)) {
    this.options.hint = [{'x': t1.x, 'y': t1.y}, {'x': t2.x, 'y': t2.y + 1}, {'x': t2.x, 'y': t2.y + 2}];
    return true;
  }
  if ((_wrap_setLastFunctionCall("game.js",317,13880,13904,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t1.x, t1.y))) == (_wrap_setLastFunctionCall("game.js",317,13908,13936,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t2.x, t2.y + 1))) && (_wrap_setLastFunctionCall("game.js",317,13940,13964,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t1.x, t1.y))) == (_wrap_setLastFunctionCall("game.js",317,13968,13996,this.getTile,false,false) || _wrap_popCallStack(this.getTile(t2.x, t2.y - 1))) && t1.x != t2.x) {
    this.options.hint = [{'x': t1.x, 'y': t1.y}, {'x': t2.x, 'y': t2.y + 1}, {'x': t2.x, 'y': t2.y - 1}];
    return true;
  }
  return false;
}, checkmoves: function() {
_wrap_addFunctionToMap('game.js', 322, 14174,14673, (typeof arguments === 'object' ? arguments.callee.caller : null));

  for (var x = 0; x <= this.options.height - 1; x++) {
    for (var y = 0; y <= this.options.width - 1; y++) {
      if ((_wrap_setLastFunctionCall("game.js",325,14308,14361,this.hasMoves,false,false) || _wrap_popCallStack(this.hasMoves({'x': x - 1, 'y': y}, {'x': x, 'y': y})))) 
        return true;
      if ((_wrap_setLastFunctionCall("game.js",327,14395,14448,this.hasMoves,false,false) || _wrap_popCallStack(this.hasMoves({'x': x + 1, 'y': y}, {'x': x, 'y': y})))) 
        return true;
      if ((_wrap_setLastFunctionCall("game.js",329,14482,14535,this.hasMoves,false,false) || _wrap_popCallStack(this.hasMoves({'x': x, 'y': y - 1}, {'x': x, 'y': y})))) 
        return true;
      if ((_wrap_setLastFunctionCall("game.js",331,14569,14622,this.hasMoves,false,false) || _wrap_popCallStack(this.hasMoves({'x': x, 'y': y + 1}, {'x': x, 'y': y})))) 
        return true;
    }
  }
  return false;
}, check_lines: function() {
_wrap_addFunctionToMap('game.js', 336, 14688,15994, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.options.checklinesrunning = true;
  var left_count = [];
  var top_count = 0;
  var lines = (_wrap_setLastFunctionCall("game.js",340,14800,14810,Hash,false,false) || _wrap_popCallStack(new Hash()));
  var count = 0;
  var count2 = 0;
  for (var x = 0; x <= this.options.width - 1; x++) {
    for (var y = 0; y <= this.options.height - 1; y++) {
      if (y == 0 || (_wrap_setLastFunctionCall("game.js",345,14978,14996,this.getTile,false,false) || _wrap_popCallStack(this.getTile(x, y))) == 0) 
        top_count = 0;
      if ((_wrap_setLastFunctionCall("game.js",347,15037,15055,this.getTile,false,false) || _wrap_popCallStack(this.getTile(x, y))) == (_wrap_setLastFunctionCall("game.js",347,15059,15081,this.getTile,false,false) || _wrap_popCallStack(this.getTile(x, y - 1)))) 
        top_count++;
      if ((_wrap_setLastFunctionCall("game.js",349,15115,15133,this.getTile,false,false) || _wrap_popCallStack(this.getTile(x, y))) != (_wrap_setLastFunctionCall("game.js",349,15137,15159,this.getTile,false,false) || _wrap_popCallStack(this.getTile(x, y + 1)))) {
        if (top_count >= 2) {
          lines[count++] = {'type': 'col', 'size': top_count + 1, 'x': x, 'y': y - top_count};
        }
        top_count = 0;
      }
      if (x == 0 || (_wrap_setLastFunctionCall("game.js",355,15349,15367,this.getTile,false,false) || _wrap_popCallStack(this.getTile(x, y))) == 0) {
        left_count[y] = 0;
      }
      if ((_wrap_setLastFunctionCall("game.js",358,15421,15439,this.getTile,false,false) || _wrap_popCallStack(this.getTile(x, y))) == (_wrap_setLastFunctionCall("game.js",358,15443,15465,this.getTile,false,false) || _wrap_popCallStack(this.getTile(x - 1, y)))) {
        left_count[y]++;
      }
      if ((_wrap_setLastFunctionCall("game.js",361,15512,15530,this.getTile,false,false) || _wrap_popCallStack(this.getTile(x, y))) != (_wrap_setLastFunctionCall("game.js",361,15534,15556,this.getTile,false,false) || _wrap_popCallStack(this.getTile(x + 1, y)))) {
        if (left_count[y] >= 2) {
          lines[count++] = {'type': 'row', 'size': left_count[y] + 1, 'x': x - left_count[y], 'y': y};
        }
        left_count[y] = 0;
      }
    }
  }
  if (count > 0) {
    this.options.haslines = true;
    this.options.lines = lines;
  } else {
    this.options.haslines = false;
    this.options.lines = false;
  }
  this.options.checklinesrunning = false;
  return this.options.haslines;
}, deleteLines: function() {
_wrap_addFunctionToMap('game.js', 378, 16009,17317, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!this.options.lines) 
    return;
  var bonus = 0;
(_wrap_setLastFunctionCall("game.js",382,16081,17136,this.options.lines.each,false,false) || _wrap_popCallStack(  this.options.lines.each((_wrap_setLastFunctionCall("game.js",412,16105,17135,null,false,false) || _wrap_popCallStack(function(value, key) {
_wrap_addFunctionToMap('game.js', 382, 16105,17124, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (value.type == "row") {
    this.chainreaction++;
    for (var i = value.x; i < (value.x + value.size); i++) {
(_wrap_setLastFunctionCall("game.js",386,16250,16276,this.clearTile,false,false) || _wrap_popCallStack(      this.clearTile(i, value.y)));
      this.options.points = this.options.points + 10;
(_wrap_setLastFunctionCall("game.js",388,16338,16370,this.pointEffect,false,false) || _wrap_popCallStack(      this.pointEffect(i, value.y, 10)));
      this.options.tilecount++;
    }
    this.options.time = this.options.time + 1;
    if (value.size > 3) {
      this.options.points = this.options.points + (value.size * 10);
      this.options.time = this.options.time + 3;
    }
    bonus++;
  } else if (value.type == "col") {
    this.chainreaction++;
    for (var i = value.y; i < (value.y + value.size); i++) {
(_wrap_setLastFunctionCall("game.js",400,16749,16775,this.clearTile,false,false) || _wrap_popCallStack(      this.clearTile(value.x, i)));
      this.options.points = this.options.points + 10;
(_wrap_setLastFunctionCall("game.js",402,16837,16869,this.pointEffect,false,false) || _wrap_popCallStack(      this.pointEffect(value.x, i, 10)));
      this.options.tilecount++;
    }
    this.options.time = this.options.time + 1;
    if (value.size > 3) {
      this.options.points = this.options.points + (value.size * 10);
      this.options.time = this.options.time + 3;
    }
    bonus++;
  }
}.bind(this))))));
  if (bonus > 1) {
    this.options.points = this.options.points + (bonus * 50);
  }
(_wrap_setLastFunctionCall("game.js",416,17225,17251,this.updatePointsDisplay,false,false) || _wrap_popCallStack(  this.updatePointsDisplay()));
(_wrap_setLastFunctionCall("game.js",417,17255,17314,this.chain,false,false) || _wrap_popCallStack(  this.chain((_wrap_setLastFunctionCall("game.js",417,17266,17313,this.tumble.delay,false,false) || _wrap_popCallStack(this.tumble.delay(this.options.delay * 2, this))))));
}, doTimer: function() {
_wrap_addFunctionToMap('game.js', 418, 17328,17492, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.options.time--;
(_wrap_setLastFunctionCall("game.js",420,17366,17390,this.updateTimeDisplay,false,false) || _wrap_popCallStack(  this.updateTimeDisplay()));
  if (this.options.time <= 0) 
    (_wrap_setLastFunctionCall("game.js",422,17427,17442,this.gameOver,false,false) || _wrap_popCallStack(  this.gameOver()));
  this.timer = (_wrap_setLastFunctionCall("game.js",423,17459,17489,this.doTimer.delay,false,false) || _wrap_popCallStack(this.doTimer.delay(1000, this)));
}, gameOver: function() {
_wrap_addFunctionToMap('game.js', 424, 17504,17771, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("game.js",425,17519,17537,$clear,false,false) || _wrap_popCallStack(  $clear(this.chain)));
(_wrap_setLastFunctionCall("game.js",426,17541,17559,$clear,false,false) || _wrap_popCallStack(  $clear(this.timer)));
  (_wrap_setLastFunctionCall("game.js",427,17563,17585,$,false,false) || _wrap_popCallStack($(this.options.infoid))).innerHTML = this.options.gameover;
  for (var x = 0; x <= this.options.height - 1; x++) {
    for (var y = 0; y <= this.options.width - 1; y++) {
(_wrap_setLastFunctionCall("game.js",430,17738,17758,this.clearTile,false,false) || _wrap_popCallStack(      this.clearTile(x, y)));
    }
  }
}, nextLevel: function() {
_wrap_addFunctionToMap('game.js', 433, 17784,18128, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.levelpause = true;
(_wrap_setLastFunctionCall("game.js",435,17825,17843,$clear,false,false) || _wrap_popCallStack(  $clear(this.timer)));
  (_wrap_setLastFunctionCall("game.js",436,17847,17869,$,false,false) || _wrap_popCallStack($(this.options.infoid))).innerHTML = this.options.levels[this.options.level].text;
(_wrap_setLastFunctionCall("game.js",437,17930,17976,this.chain,false,false) || _wrap_popCallStack(  this.chain((_wrap_setLastFunctionCall("game.js",437,17941,17975,this.doNextLevel.delay,false,false) || _wrap_popCallStack(this.doNextLevel.delay(3000, this))))));
  for (var x = 0; x <= this.options.height - 1; x++) {
    for (var y = 0; y <= this.options.width - 1; y++) {
(_wrap_setLastFunctionCall("game.js",440,18095,18115,this.clearTile,false,false) || _wrap_popCallStack(      this.clearTile(x, y)));
    }
  }
}, doNextLevel: function() {
_wrap_addFunctionToMap('game.js', 443, 18143,18287, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.options.level++;
  if (this.options.level > 9) 
    this.options.level = 9;
(_wrap_setLastFunctionCall("game.js",447,18241,18257,this.clearGame,false,false) || _wrap_popCallStack(  this.clearGame()));
  this.levelpause = false;
}, updatePointsDisplay: function() {
_wrap_addFunctionToMap('game.js', 449, 18310,18534, (typeof arguments === 'object' ? arguments.callee.caller : null));

  (_wrap_setLastFunctionCall("game.js",450,18325,18349,$,false,false) || _wrap_popCallStack($(this.options.pointsid))).innerHTML = this.options.points;
  (_wrap_setLastFunctionCall("game.js",451,18385,18407,$,false,false) || _wrap_popCallStack($(this.options.tileid))).innerHTML = this.options.tilecount;
  (_wrap_setLastFunctionCall("game.js",452,18446,18471,$,false,false) || _wrap_popCallStack($(this.options.reqtileid))).innerHTML = this.options.levels[this.options.level].reqtile;
}, updateLevelDisplay: function() {
_wrap_addFunctionToMap('game.js', 453, 18556,18632, (typeof arguments === 'object' ? arguments.callee.caller : null));

  (_wrap_setLastFunctionCall("game.js",454,18571,18594,$,false,false) || _wrap_popCallStack($(this.options.levelid))).innerHTML = this.options.level + 1;
}, updateTimeDisplay: function() {
_wrap_addFunctionToMap('game.js', 455, 18653,18847, (typeof arguments === 'object' ? arguments.callee.caller : null));

  (_wrap_setLastFunctionCall("game.js",456,18668,18690,$,false,false) || _wrap_popCallStack($(this.options.timeid))).innerHTML = this.options.time;
  var barpos = -260 + this.options.time;
(_wrap_setLastFunctionCall("game.js",458,18765,18844,null,false,false) || _wrap_popCallStack(  (_wrap_setLastFunctionCall("game.js",458,18765,18788,$,false,false) || _wrap_popCallStack($(this.options.timebar))).setStyle("background-position", "" + barpos + "px 0px")));
}, pointEffect: function(x, y, points) {
_wrap_addFunctionToMap('game.js', 459, 18862,19601, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.fxp[x + "_" + y] = (_wrap_setLastFunctionCall("game.js",460,18913,19134,Element,false,false) || _wrap_popCallStack(new Element('DIV', {'id': "p" + x + "_" + y, 'class': 'points', 'styles': {'position': 'absolute', 'width': 32, 'height': 20, 'top': (y * this.options.tileheight) + 8 + 'px', 'left': (x * this.options.tilewidth) + 'px'}})));
(_wrap_setLastFunctionCall("game.js",461,19138,19197,null,false,false) || _wrap_popCallStack(  this.fxp[x + "_" + y].injectInside((_wrap_setLastFunctionCall("game.js",461,19173,19196,$,false,false) || _wrap_popCallStack($(this.options.fieldid))))));
  this.fxp[x + "_" + y].innerHTML = points;
  this.fxp[x + "_" + y] = (_wrap_setLastFunctionCall("game.js",463,19269,19466,Fx.Morph,false,false) || _wrap_popCallStack(new Fx.Morph((_wrap_setLastFunctionCall("game.js",463,19282,19302,$,false,false) || _wrap_popCallStack($("p" + x + "_" + y))), {duration: this.options.delay * 10, wait: false, transition: Fx.Transitions.Sine.easeInOut, fps: this.options.fps, onComplete: (_wrap_setLastFunctionCall("game.js",463,19431,19464,this.onFxplodeComplete.bind,false,false) || _wrap_popCallStack(this.onFxplodeComplete.bind(this)))})));
(_wrap_setLastFunctionCall("game.js",464,19470,19598,null,false,false) || _wrap_popCallStack(  this.fxp[x + "_" + y].start({'top': ((y * this.options.tileheight) + 8 - (this.options.tileheight * 2)) + 'px', 'opacity': 0.4})));
}};
var jewel = (_wrap_setLastFunctionCall("game.js",466,19616,19638,Class,true,false) || _wrap_popCallStack(new Class(gameOptions)));
(_wrap_setLastFunctionCall("game.js",467,19640,19709,window.addEvent,true,false) || _wrap_popCallStack(window.addEvent('domready', function() {
_wrap_addFunctionToMap('game.js', 467, 19668,19708, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var game = (_wrap_setLastFunctionCall("game.js",468,19694,19705,jewel,false,false) || _wrap_popCallStack(new jewel()));
})));
