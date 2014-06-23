_wrap_staticMeasuredFunctions['game.js'] = 43;
_wrap_staticMeasuredCalls['game.js'] =259;
var gameOptions = {Implements: [Options, Chain], options: {width: 8, height: 8, tilewidth: 32, tileheight: 32, fieldid: 'field', pointsid: 'p', timeid: 't', timebar: 'timebar', levelid: 'l', hintid: 'h', tileid: 'tiles', reqtileid: 'ntiles', startid: 'start', infoid: 'info', colors: false, haslines: false, lines: false, needtile: false, nextempty: false, tile1: false, tile2: false, tile1bak: false, idle: false, tilecount: 0, points: 0, delay: 200, fps: 30, hint: false, time: 0, hintcount: 0, starthints: 3, periodical: false, gameover: 'GAME OVER', nohintsleft: 'No hints left', nomoves: 'No Moves left!', level: 0, levels: {0: {tiles: 4, time: 120, reqtile: 60, text: 'Good Job'}, 1: {tiles: 4, time: 110, reqtile: 70, text: 'Well Done'}, 2: {tiles: 5, time: 100, reqtile: 80, text: 'Wohooo'}, 3: {tiles: 5, time: 90, reqtile: 90, text: 'Now Level 4'}, 4: {tiles: 6, time: 80, reqtile: 100, text: 'You are good'}, 5: {tiles: 6, time: 60, reqtile: 110, text: 'Level 6 Done'}, 6: {tiles: 7, time: 50, reqtile: 120, text: 'Mooooooo'}, 7: {tiles: 7, time: 40, reqtile: 130, text: 'Nice Done'}, 8: {tiles: 8, time: 30, reqtile: 140, text: 'Ready ... GO'}, 9: {tiles: 8, time: 20, reqtile: 150, text: 'You are insane!'}}}, initialize: function(options) {
_wrap_addFunctionToMap('game.js', 103, 2460,2598);

(_wrap_setLastFunctionCall("game.js",104,2489,2513) ||   this.setOptions(options));
(_wrap_setLastFunctionCall("game.js",105,2523,2591) ||   (_wrap_setLastFunctionCall("game.js",105,2523,2546) || $(this.options.startid)).addEvent('click', (_wrap_setLastFunctionCall("game.js",105,2565,2590) || this.startgame.bind(this))));
}, startgame: function() {
_wrap_addFunctionToMap('game.js', 107, 2615,2906);

  this.options.hintcount = this.options.starthints;
  this.options.points = 0;
  this.options.level = 0;
(_wrap_setLastFunctionCall("game.js",111,2760,2776) ||   this.clearGame());
(_wrap_setLastFunctionCall("game.js",112,2786,2823) ||   (_wrap_setLastFunctionCall("game.js",112,2786,2808) || $(this.options.hintid)).removeEvents());
(_wrap_setLastFunctionCall("game.js",113,2833,2899) ||   (_wrap_setLastFunctionCall("game.js",113,2833,2855) || $(this.options.hintid)).addEvent('click', (_wrap_setLastFunctionCall("game.js",113,2874,2898) || this.giveHint.bind(this))));
}, clearGame: function() {
_wrap_addFunctionToMap('game.js', 115, 2923,3424);

  this.options.tilecount = 0;
  this.chainreaction = 0;
  this.options.time = this.options.levels[this.options.level].time;
(_wrap_setLastFunctionCall("game.js",119,3087,3104) ||   this.setupfield());
(_wrap_setLastFunctionCall("game.js",120,3114,3130) ||   this.firstfill());
(_wrap_setLastFunctionCall("game.js",121,3140,3166) ||   this.updatePointsDisplay());
(_wrap_setLastFunctionCall("game.js",122,3176,3201) ||   this.updateLevelDisplay());
(_wrap_setLastFunctionCall("game.js",123,3211,3235) ||   this.updateTimeDisplay());
(_wrap_setLastFunctionCall("game.js",124,3245,3262) ||   this.checkmoves());
(_wrap_setLastFunctionCall("game.js",125,3272,3289) ||   this.updatehint());
(_wrap_setLastFunctionCall("game.js",126,3299,3317) ||   $clear(this.timer));
  this.timer = (_wrap_setLastFunctionCall("game.js",127,3340,3370) || this.doTimer.delay(1000, this));
  (_wrap_setLastFunctionCall("game.js",128,3380,3402) || $(this.options.infoid)).innerHTML = "";
}, setupfield: function() {
_wrap_addFunctionToMap('game.js', 130, 3442,7313);

  this.field = (_wrap_setLastFunctionCall("game.js",131,3477,3487) || new Hash());
  this.tiles = (_wrap_setLastFunctionCall("game.js",132,3510,3520) || new Hash());
  this.freetiles = (_wrap_setLastFunctionCall("game.js",133,3547,3557) || new Hash());
  this.fx = {};
  this.fxplode = {};
  this.fxplodetile = {};
  this.fxp = {};
  this.fxon = 0;
(_wrap_setLastFunctionCall("game.js",139,3693,3724) ||   (_wrap_setLastFunctionCall("game.js",139,3693,3716) || $(this.options.fieldid)).empty());
  var inner;
  var tilecount = 0;
  var tileid = false;
  var posid = false;
  for (var y = 0; y <= this.options.width - 1; y++) {
    for (var x = 0; x <= this.options.height - 1; x++) {
      tileid = 't' + tilecount;
      posid = x + 'x' + y;
(_wrap_setLastFunctionCall("game.js",148,4047,4076) ||       this.field.set(posid, tileid));
(_wrap_setLastFunctionCall("game.js",149,4094,4636) ||       this.tiles.set(tileid, (_wrap_setLastFunctionCall("game.js",149,4117,4635) || new Element('DIV', {'id': tileid, 'class': 'outer', 'styles': {'position': 'absolute', 'width': this.options.tilewidth + 'px', 'height': this.options.tileheight + 'px', 'top': (y * this.options.tileheight) + 'px', 'left': (x * this.options.tilewidth) + 'px', 'z-index': 0}}))));
      inner = (_wrap_setLastFunctionCall("game.js",161,4662,4875) || new Element('DIV', {'class': 'inner', 'styles': {'width': '100%', 'height': '100%'}}));
(_wrap_setLastFunctionCall("game.js",168,4893,4925) ||       inner.inject(this.tiles[tileid]));
(_wrap_setLastFunctionCall("game.js",169,4943,4990) ||       this.tiles[tileid].inject(this.options.fieldid));
      this.fx[tileid] = (_wrap_setLastFunctionCall("game.js",170,5026,5383) || new Fx.Morph((_wrap_setLastFunctionCall("game.js",170,5039,5057) || $('t' + tilecount)), {duration: this.options.delay, wait: false, transition: Fx.Transitions.Circ.easeOut, fps: this.options.fps, onComplete: (_wrap_setLastFunctionCall("game.js",175,5280,5308) || this.onFxComplete.bind(this)), onStart: (_wrap_setLastFunctionCall("game.js",176,5339,5364) || this.onFxStart.bind(this))}));
      this.tiles[tileid].drag = (_wrap_setLastFunctionCall("game.js",178,5427,7253) || new Drag.Move((_wrap_setLastFunctionCall("game.js",178,5441,5462) || $(this.tiles[tileid])), {snap: 0, onBeforeStart: (_wrap_setLastFunctionCall("game.js",196,5530,6576) || function(el) {
_wrap_addFunctionToMap('game.js', 180, 5530,6565);

  var xx = (_wrap_setLastFunctionCall("game.js",181,5579,5606) || (_wrap_setLastFunctionCall("game.js",181,5579,5598) || el.getStyle("left")).toInt());
  var yy = (_wrap_setLastFunctionCall("game.js",182,5641,5667) || (_wrap_setLastFunctionCall("game.js",182,5641,5659) || el.getStyle("top")).toInt());
  this.restore = {x: xx, y: yy};
  var x1 = (xx - this.options.tilewidth < 0) ? 0 : xx - this.options.tilewidth;
  var y1 = (yy - this.options.tilewidth < 0) ? 0 : yy - this.options.tilewidth;
  var x2 = (xx + 32 > (this.options.height - 1) * this.options.tilewidth) ? (this.options.height - 1) * this.options.tilewidth : xx + 32;
  var y2 = (yy + 32 > (this.options.height - 1) * this.options.tilewidth) ? (this.options.height - 1) * this.options.tilewidth : yy + 32;
  el.drag.options.limit = {x: [x1, x2], y: [y1, y2]};
(_wrap_setLastFunctionCall("game.js",195,6512,6542) ||   (_wrap_setLastFunctionCall("game.js",195,6512,6517) || $(el)).setStyle("z-index", 500));
}.bind(this)), onComplete: (_wrap_setLastFunctionCall("game.js",206,6610,7234) || function(el) {
_wrap_addFunctionToMap('game.js', 197, 6610,7223);

  var xx = (_wrap_setLastFunctionCall("game.js",198,6659,6686) || (_wrap_setLastFunctionCall("game.js",198,6659,6678) || el.getStyle("left")).toInt());
  var yy = (_wrap_setLastFunctionCall("game.js",199,6721,6747) || (_wrap_setLastFunctionCall("game.js",199,6721,6739) || el.getStyle("top")).toInt());
  this.options.tile1 = (_wrap_setLastFunctionCall("game.js",200,6794,6850) || this.getTileId((_wrap_setLastFunctionCall("game.js",200,6809,6828) || Math.round(xx / 32)), (_wrap_setLastFunctionCall("game.js",200,6830,6849) || Math.round(yy / 32))));
  this.options.tile2 = (_wrap_setLastFunctionCall("game.js",201,6897,6977) || this.getTileId((_wrap_setLastFunctionCall("game.js",201,6912,6943) || Math.round(this.restore.x / 32)), (_wrap_setLastFunctionCall("game.js",201,6945,6976) || Math.round(this.restore.y / 32))));
(_wrap_setLastFunctionCall("game.js",202,7003,7041) ||   (_wrap_setLastFunctionCall("game.js",202,7003,7008) || $(el)).setStyle("left", this.restore.x));
(_wrap_setLastFunctionCall("game.js",203,7067,7104) ||   (_wrap_setLastFunctionCall("game.js",203,7067,7072) || $(el)).setStyle("top", this.restore.y));
(_wrap_setLastFunctionCall("game.js",204,7130,7158) ||   (_wrap_setLastFunctionCall("game.js",204,7130,7135) || $(el)).setStyle("z-index", 0));
(_wrap_setLastFunctionCall("game.js",205,7184,7200) ||   this.swapTiles());
}.bind(this))}));
      tilecount++;
    }
  }
}, onFxStart: function() {
_wrap_addFunctionToMap('game.js', 212, 7330,7370);

  this.fxon++;
}, onFxComplete: function() {
_wrap_addFunctionToMap('game.js', 215, 7390,7430);

  this.fxon--;
}, firstfill: function() {
_wrap_addFunctionToMap('game.js', 218, 7447,8397);

  var color;
  var color1;
  var tile = false;
  for (var x = this.options.width - 1; x >= 0; x--) {
    for (var y = this.options.height - 1; y >= 0; y--) {
      tile = (_wrap_setLastFunctionCall("game.js",224,7674,7694) || this.getRandomTile());
      while ((tile === (_wrap_setLastFunctionCall("game.js",225,7729,7751) || this.getTile(x + 1, y)) && tile === (_wrap_setLastFunctionCall("game.js",225,7764,7786) || this.getTile(x + 2, y))) || (tile === (_wrap_setLastFunctionCall("game.js",225,7801,7823) || this.getTile(x, y + 1)) && tile === (_wrap_setLastFunctionCall("game.js",225,7836,7858) || this.getTile(x, y + 2)))) {
        tile = (_wrap_setLastFunctionCall("game.js",226,7890,7956) || this.getRandomTile((_wrap_setLastFunctionCall("game.js",226,7909,7931) || this.getTile(x + 1, y)), (_wrap_setLastFunctionCall("game.js",226,7933,7955) || this.getTile(x, y + 1))));
      }
(_wrap_setLastFunctionCall("game.js",228,7992,8016) ||       this.setTile(x, y, tile));
      var tileid = (_wrap_setLastFunctionCall("game.js",229,8047,8067) || this.getTileId(x, y));
(_wrap_setLastFunctionCall("game.js",230,8085,8251) ||       (_wrap_setLastFunctionCall("game.js",230,8085,8094) || $(tileid)).setStyles({'top': (-this.options.tileheight) + 'px', 'left': (x * this.options.tilewidth) + 'px'}));
(_wrap_setLastFunctionCall("game.js",234,8269,8366) ||       this.fx[tileid].start({'top': y * this.options.tileheight}));
    }
  }
}, pushFreetile: function(tileid) {
_wrap_addFunctionToMap('game.js', 240, 8417,8529);

  if (!(_wrap_setLastFunctionCall("game.js",241,8450,8476) || this.freetiles.has(tileid))) 
    (_wrap_setLastFunctionCall("game.js",242,8490,8522) ||   this.freetiles.set(tileid, true));
}, popFreetile: function() {
_wrap_addFunctionToMap('game.js', 244, 8548,8737);

  var keys = (_wrap_setLastFunctionCall("game.js",245,8581,8605) || this.freetiles.getKeys());
  if (keys[0]) {
(_wrap_setLastFunctionCall("game.js",247,8642,8671) ||     this.freetiles.erase(keys[0]));
    return keys[0];
  }
  return false;
}, getTile: function(x, y) {
_wrap_addFunctionToMap('game.js', 252, 8752,8946);

  if (!(_wrap_setLastFunctionCall("game.js",253,8783,8802) || this.checkPos(x, y))) 
    return false;
  if (!(_wrap_setLastFunctionCall("game.js",255,8843,8863) || this.getTileId(x, y))) 
    return false;
  return (_wrap_setLastFunctionCall("game.js",257,8906,8929) || $((_wrap_setLastFunctionCall("game.js",257,8908,8928) || this.getTileId(x, y)))).className;
}, getRandomTile: function(t1, t2) {
_wrap_addFunctionToMap('game.js', 259, 8967,9167);

  var tile;
  while ((tile == t1 || tile == t2) || !tile) 
    tile = 's' + (_wrap_setLastFunctionCall("game.js",262,9082,9139) || $random(1, this.options.levels[this.options.level].tiles));
  return tile;
}, getTileId: function(x, y) {
_wrap_addFunctionToMap('game.js', 265, 9184,9379);

  if (!(_wrap_setLastFunctionCall("game.js",266,9215,9234) || this.checkPos(x, y))) 
    return false;
  if (!(_wrap_setLastFunctionCall("game.js",268,9275,9302) || this.field.get(x + 'x' + y))) 
    return false;
  return (_wrap_setLastFunctionCall("game.js",270,9345,9372) || this.field.get(x + 'x' + y));
}, setTile: function(x, y, tile) {
_wrap_addFunctionToMap('game.js', 272, 9394,9688);

  if (!(_wrap_setLastFunctionCall("game.js",273,9431,9450) || this.checkPos(x, y))) 
    return false;
  var tileid = (_wrap_setLastFunctionCall("game.js",275,9499,9519) || this.getTileId(x, y));
  if (!tileid) 
    return false;
(_wrap_setLastFunctionCall("game.js",278,9576,9612) ||   (_wrap_setLastFunctionCall("game.js",278,9576,9585) || $(tileid)).setProperty("class", tile));
(_wrap_setLastFunctionCall("game.js",279,9622,9660) ||   (_wrap_setLastFunctionCall("game.js",279,9622,9631) || $(tileid)).setStyle("display", "block"));
  return true;
}, getTilePos: function(tileid) {
_wrap_addFunctionToMap('game.js', 282, 9706,9903);

  var key = (_wrap_setLastFunctionCall("game.js",283,9744,9768) || this.field.keyOf(tileid));
  var xy = (_wrap_setLastFunctionCall("game.js",284,9787,9801) || key.split("x"));
  return {'x': (_wrap_setLastFunctionCall("game.js",286,9837,9852) || parseInt(xy[0])), 'y': (_wrap_setLastFunctionCall("game.js",287,9871,9886) || parseInt(xy[1]))};
}, clearTile: function(x, y) {
_wrap_addFunctionToMap('game.js', 290, 9920,11434);

  if (!(_wrap_setLastFunctionCall("game.js",291,9951,9970) || this.checkPos(x, y))) 
    return false;
  var tileid = (_wrap_setLastFunctionCall("game.js",293,10019,10039) || this.getTileId(x, y));
  if (!tileid) 
    return false;
  this.fxplodetile[tileid] = (_wrap_setLastFunctionCall("game.js",296,10123,10553) || new Element('DIV', {'id': "ex" + tileid, 'class': (_wrap_setLastFunctionCall("game.js",298,10198,10228) || (_wrap_setLastFunctionCall("game.js",298,10198,10207) || $(tileid)).getProperty("class")), 'styles': {'position': 'absolute', 'width': this.options.tilewidth + 'px', 'height': this.options.tileheight + 'px', 'top': (y * this.options.tileheight) + 'px', 'left': (x * this.options.tilewidth) + 'px'}}));
(_wrap_setLastFunctionCall("game.js",307,10563,10625) ||   this.fxplodetile[tileid].injectInside((_wrap_setLastFunctionCall("game.js",307,10601,10624) || $(this.options.fieldid))));
  var xx = (this.options.tilewidth * x) - (_wrap_setLastFunctionCall("game.js",308,10675,10713) || $random(0, this.options.tilewidth * 2)) + (_wrap_setLastFunctionCall("game.js",308,10716,10754) || $random(0, this.options.tilewidth * 2));
  var yy = (9 * this.options.tileheight);
  this.fxplode[tileid] = (_wrap_setLastFunctionCall("game.js",310,10835,11094) || new Fx.Morph((_wrap_setLastFunctionCall("game.js",310,10848,10864) || $('ex' + tileid)), {duration: this.options.delay * 4, wait: false, transition: Fx.Transitions.Circ.easeIn, fps: this.options.fps, onComplete: (_wrap_setLastFunctionCall("game.js",315,11050,11083) || this.onFxplodeComplete.bind(this))}));
(_wrap_setLastFunctionCall("game.js",317,11104,11249) ||   this.fxplode[tileid].start.delay(10, this.fxplode[tileid], {'top': yy, 'left': xx, 'opacity': 0.4}));
(_wrap_setLastFunctionCall("game.js",322,11259,11301) ||   (_wrap_setLastFunctionCall("game.js",322,11259,11268) || $(tileid)).removeClass((_wrap_setLastFunctionCall("game.js",322,11281,11290) || $(tileid)).className));
(_wrap_setLastFunctionCall("game.js",323,11311,11348) ||   (_wrap_setLastFunctionCall("game.js",323,11311,11320) || $(tileid)).setStyle("display", "none"));
(_wrap_setLastFunctionCall("game.js",324,11358,11383) ||   this.pushFreetile(tileid));
(_wrap_setLastFunctionCall("game.js",325,11393,11427) ||   this.field.set(x + 'x' + y, false));
}, onFxplodeComplete: function(e) {
_wrap_addFunctionToMap('game.js', 327, 11459,11505);

(_wrap_setLastFunctionCall("game.js",328,11482,11498) ||   (_wrap_setLastFunctionCall("game.js",328,11482,11489) || $(e.id)).remove());
}, checkPos: function(x, y) {
_wrap_addFunctionToMap('game.js', 330, 11521,11716);

  if (x < 0 || x > this.options.height - 1) 
    return false;
  if (y < 0 || y > this.options.width - 1) 
    return false;
  return true;
}, resetTilePos: function(x, y) {
_wrap_addFunctionToMap('game.js', 337, 11736,12333);

  var id = (_wrap_setLastFunctionCall("game.js",338,11771,11789) || this.popFreetile());
  if (!id) 
    return false;
  if (y == 0) {
(_wrap_setLastFunctionCall("game.js",342,11868,12018) ||     (_wrap_setLastFunctionCall("game.js",342,11868,11873) || $(id)).setStyles({'top': (-this.options.tileheight) + 'px', 'left': (x * this.options.tilewidth) + 'px'}));
(_wrap_setLastFunctionCall("game.js",346,12032,12091) ||     this.fx[id].start({'top': 0}));
  } else {
(_wrap_setLastFunctionCall("game.js",350,12122,12275) ||     (_wrap_setLastFunctionCall("game.js",350,12122,12127) || $(id)).setStyles({'top': (y * this.options.tileheight) + 'px', 'left': (x * this.options.tilewidth) + 'px'}));
  }
(_wrap_setLastFunctionCall("game.js",355,12295,12326) ||   this.field.set(x + 'x' + y, id));
}, addLine: function() {
_wrap_addFunctionToMap('game.js', 357, 12348,12754);

  this.options.addLinerunning = true;
  var line = false;
  for (var x = 0; x <= this.options.width - 1; x++) {
    if (!(_wrap_setLastFunctionCall("game.js",361,12509,12527) || this.getTile(x, 0))) {
      line = true;
(_wrap_setLastFunctionCall("game.js",363,12576,12599) ||       this.resetTilePos(x, 0));
(_wrap_setLastFunctionCall("game.js",364,12617,12657) ||       this.setTile(x, 0, (_wrap_setLastFunctionCall("game.js",364,12636,12656) || this.getRandomTile())));
    }
  }
  this.options.addLinerunning = false;
  return line;
}, gravity: function() {
_wrap_addFunctionToMap('game.js', 370, 12769,13880);

  this.options.gravityrunning = true;
  var col = {};
  var id = false;
  for (var y = this.options.height - 2; y >= 0; y--) {
    for (var x = this.options.width - 1; x >= 0; x--) {
      if (!(_wrap_setLastFunctionCall("game.js",376,13019,13041) || this.getTile(x, y + 1)) && (_wrap_setLastFunctionCall("game.js",376,13045,13063) || this.getTile(x, y))) {
        var depth = 0;
        for (var yy = y; yy <= this.options.height - 1; yy++) {
          if (!(_wrap_setLastFunctionCall("game.js",379,13207,13226) || this.getTile(x, yy))) 
            depth++;
        }
        id = (_wrap_setLastFunctionCall("game.js",382,13312,13332) || this.getTileId(x, y));
        if (id != "false") {
(_wrap_setLastFunctionCall("game.js",384,13399,13546) ||           this.fx[id].start({'top': (_wrap_setLastFunctionCall("game.js",385,13454,13483) || (_wrap_setLastFunctionCall("game.js",385,13454,13475) || (_wrap_setLastFunctionCall("game.js",385,13454,13459) || $(id)).getStyle('top')).toInt()) + (this.options.tileheight * depth)}));
(_wrap_setLastFunctionCall("game.js",387,13572,13613) ||           this.field.set(x + 'x' + (y + depth), id));
(_wrap_setLastFunctionCall("game.js",388,13639,13673) ||           this.field.set(x + 'x' + y, false));
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
_wrap_addFunctionToMap('game.js', 399, 13897,14396);

  if (!this.options.tile1 || !this.options.tile2) 
    return false;
  var t1 = (_wrap_setLastFunctionCall("game.js",402,14010,14051) || this.getTilePos((_wrap_setLastFunctionCall("game.js",402,14026,14047) || $(this.options.tile1)).id));
  var t2 = (_wrap_setLastFunctionCall("game.js",403,14070,14111) || this.getTilePos((_wrap_setLastFunctionCall("game.js",403,14086,14107) || $(this.options.tile2)).id));
  if (!(_wrap_setLastFunctionCall("game.js",404,14126,14148) || this.checkSwap(t1, t2))) 
    return false;
  var tc1 = (_wrap_setLastFunctionCall("game.js",406,14194,14218) || this.getTile(t1.x, t1.y));
  var tc2 = (_wrap_setLastFunctionCall("game.js",407,14238,14262) || this.getTile(t2.x, t2.y));
(_wrap_setLastFunctionCall("game.js",408,14272,14301) ||   this.setTile(t1.x, t1.y, tc2));
(_wrap_setLastFunctionCall("game.js",409,14311,14340) ||   this.setTile(t2.x, t2.y, tc1));
(_wrap_setLastFunctionCall("game.js",410,14350,14389) ||   this.chain((_wrap_setLastFunctionCall("game.js",410,14361,14388) || this.tumble.delay(10, this))));
}, tumble: function() {
_wrap_addFunctionToMap('game.js', 412, 14410,15529);

  if (this.highlight) 
    (_wrap_setLastFunctionCall("game.js",414,14464,14514) ||   this.highlight.setStyle("border", "0px solid red"));
  if (this.options.checklinesrunning || this.options.addLinerunning || this.options.gravityrunning) {
(_wrap_setLastFunctionCall("game.js",416,14636,14664) ||     conslole.log("abort tumble"));
    return;
  }
  if (this.fxon != 0) {
(_wrap_setLastFunctionCall("game.js",420,14738,14778) ||     this.chain((_wrap_setLastFunctionCall("game.js",420,14749,14777) || this.tumble.delay(100, this))));
    return;
  }
  if (!(_wrap_setLastFunctionCall("game.js",423,14823,14837) || this.gravity())) {
  }
  if (this.levelpause) 
    return;
  if ((_wrap_setLastFunctionCall("game.js",426,14903,14917) || this.addLine())) {
(_wrap_setLastFunctionCall("game.js",427,14933,14972) ||     this.chain((_wrap_setLastFunctionCall("game.js",427,14944,14971) || this.tumble.delay(10, this))));
    return;
  } else if ((_wrap_setLastFunctionCall("game.js",429,15013,15031) || this.check_lines())) {
(_wrap_setLastFunctionCall("game.js",430,15047,15107) ||     this.chain((_wrap_setLastFunctionCall("game.js",430,15058,15106) || this.deleteLines.delay(this.options.delay, this))));
    return;
  }
  if (this.chainreaction > 2) {
    this.options.points = this.options.points + (this.chainreaction * this.chainreaction * 50);
  }
  if (!(_wrap_setLastFunctionCall("game.js",436,15304,15321) || this.checkmoves())) {
(_wrap_setLastFunctionCall("game.js",437,15337,15351) ||     this.noMoves());
  }
  if (this.options.tilecount >= this.options.levels[this.options.level].reqtile) {
(_wrap_setLastFunctionCall("game.js",440,15464,15480) ||     this.nextLevel());
  }
  this.chainreaction = 0;
}, noMoves: function() {
_wrap_addFunctionToMap('game.js', 444, 15544,15870);

  (_wrap_setLastFunctionCall("game.js",445,15566,15588) || $(this.options.infoid)).innerHTML = this.options.nomoves;
(_wrap_setLastFunctionCall("game.js",446,15631,15676) ||   this.chain((_wrap_setLastFunctionCall("game.js",446,15642,15675) || this.doNewMoves.delay(3000, this))));
  for (var x = 0; x <= this.options.height - 1; x++) {
    for (var y = 0; y <= this.options.width - 1; y++) {
(_wrap_setLastFunctionCall("game.js",449,15819,15839) ||       this.clearTile(x, y));
    }
  }
}, doNewMoves: function() {
_wrap_addFunctionToMap('game.js', 453, 15888,16007);

(_wrap_setLastFunctionCall("game.js",454,15910,15927) ||   this.setupfield());
(_wrap_setLastFunctionCall("game.js",455,15937,15953) ||   this.firstfill());
  (_wrap_setLastFunctionCall("game.js",456,15963,15985) || $(this.options.infoid)).innerHTML = "";
}, giveHint: function(e) {
_wrap_addFunctionToMap('game.js', 458, 16023,16370);

  if (this.options.hint && this.options.hintcount > 0) {
    var id = (_wrap_setLastFunctionCall("game.js",460,16122,16184) || this.getTileId(this.options.hint[0].x, this.options.hint[0].y));
    this.highlight = (_wrap_setLastFunctionCall("game.js",461,16215,16220) || $(id));
(_wrap_setLastFunctionCall("game.js",462,16234,16284) ||     this.highlight.setStyle("border", "1px solid red"));
    this.options.hintcount--;
(_wrap_setLastFunctionCall("game.js",464,16336,16353) ||     this.updatehint());
  }
}, updatehint: function() {
_wrap_addFunctionToMap('game.js', 467, 16388,16746);

  var x = "";
  if (this.options.hintcount > 0) {
    for (var h = 0; h <= this.options.hintcount - 1; h++) {
      x = x + ' <img width="14" height="14" src="images/coin.gif"> ';
    }
  } else {
    x = this.options.nohintsleft;
  }
  (_wrap_setLastFunctionCall("game.js",476,16703,16725) || $(this.options.hintid)).innerHTML = x;
}, checkSwap: function(t1, t2) {
_wrap_addFunctionToMap('game.js', 478, 16763,17062);

  var xok = (_wrap_setLastFunctionCall("game.js",479,16801,16837) || Math.abs(((t1.x + t2.x) / 2) - t1.x));
  var yok = (_wrap_setLastFunctionCall("game.js",480,16857,16893) || Math.abs(((t1.y + t2.y) / 2) - t1.y));
  if (xok + yok != 0.5) 
    return false;
  if ((_wrap_setLastFunctionCall("game.js",483,16962,16983) || this.hasMoves(t1, t2)) || (_wrap_setLastFunctionCall("game.js",483,16987,17008) || this.hasMoves(t2, t1))) 
    return true;
  return false;
}, hasMoves: function(t1, t2) {
_wrap_addFunctionToMap('game.js', 487, 17078,20120);

  this.options.hint = false;
  if (t1.x < 0 || t1.x > this.options.width - 1) 
    return false;
  if (t1.y < 0 || t1.y > this.options.height - 1) 
    return false;
  if (t2.x < 0 || t2.x > this.options.width - 1) 
    return false;
  if (t2.y < 0 || t2.y > this.options.height - 1) 
    return false;
  if ((_wrap_setLastFunctionCall("game.js",497,17471,17495) || this.getTile(t1.x, t1.y)) == (_wrap_setLastFunctionCall("game.js",497,17499,17527) || this.getTile(t2.x - 1, t2.y)) && (_wrap_setLastFunctionCall("game.js",497,17531,17555) || this.getTile(t1.x, t1.y)) == (_wrap_setLastFunctionCall("game.js",497,17559,17587) || this.getTile(t2.x - 2, t2.y)) && t1.x != (t2.x - 1)) {
    this.options.hint = [{'x': t1.x, 'y': t1.y}, {'x': t2.x - 1, 'y': t2.y}, {'x': t2.x - 2, 'y': t2.y}];
    return true;
  }
  if ((_wrap_setLastFunctionCall("game.js",510,17912,17936) || this.getTile(t1.x, t1.y)) == (_wrap_setLastFunctionCall("game.js",510,17940,17968) || this.getTile(t2.x + 1, t2.y)) && (_wrap_setLastFunctionCall("game.js",510,17972,17996) || this.getTile(t1.x, t1.y)) == (_wrap_setLastFunctionCall("game.js",510,18000,18028) || this.getTile(t2.x + 2, t2.y)) && t1.x != (t2.x + 1)) {
    this.options.hint = [{'x': t1.x, 'y': t1.y}, {'x': t2.x + 1, 'y': t2.y}, {'x': t2.x + 2, 'y': t2.y}];
    return true;
  }
  if ((_wrap_setLastFunctionCall("game.js",523,18353,18377) || this.getTile(t1.x, t1.y)) == (_wrap_setLastFunctionCall("game.js",523,18381,18409) || this.getTile(t2.x + 1, t2.y)) && (_wrap_setLastFunctionCall("game.js",523,18413,18437) || this.getTile(t1.x, t1.y)) == (_wrap_setLastFunctionCall("game.js",523,18441,18469) || this.getTile(t2.x - 1, t2.y)) && t1.y != t2.y) {
    this.options.hint = [{'x': t1.x, 'y': t1.y}, {'x': t2.x + 1, 'y': t2.y}, {'x': t2.x - 1, 'y': t2.y}];
    return true;
  }
  if ((_wrap_setLastFunctionCall("game.js",536,18788,18812) || this.getTile(t1.x, t1.y)) == (_wrap_setLastFunctionCall("game.js",536,18816,18844) || this.getTile(t2.x, t2.y - 1)) && (_wrap_setLastFunctionCall("game.js",536,18848,18872) || this.getTile(t1.x, t1.y)) == (_wrap_setLastFunctionCall("game.js",536,18876,18904) || this.getTile(t2.x, t2.y - 2)) && t1.y != (t2.y - 1)) {
    this.options.hint = [{'x': t1.x, 'y': t1.y}, {'x': t2.x, 'y': t2.y - 1}, {'x': t2.x, 'y': t2.y - 2}];
    return true;
  }
  if ((_wrap_setLastFunctionCall("game.js",549,19229,19253) || this.getTile(t1.x, t1.y)) == (_wrap_setLastFunctionCall("game.js",549,19257,19285) || this.getTile(t2.x, t2.y + 1)) && (_wrap_setLastFunctionCall("game.js",549,19289,19313) || this.getTile(t1.x, t1.y)) == (_wrap_setLastFunctionCall("game.js",549,19317,19345) || this.getTile(t2.x, t2.y + 2)) && t1.y != (t2.y + 1)) {
    this.options.hint = [{'x': t1.x, 'y': t1.y}, {'x': t2.x, 'y': t2.y + 1}, {'x': t2.x, 'y': t2.y + 2}];
    return true;
  }
  if ((_wrap_setLastFunctionCall("game.js",562,19670,19694) || this.getTile(t1.x, t1.y)) == (_wrap_setLastFunctionCall("game.js",562,19698,19726) || this.getTile(t2.x, t2.y + 1)) && (_wrap_setLastFunctionCall("game.js",562,19730,19754) || this.getTile(t1.x, t1.y)) == (_wrap_setLastFunctionCall("game.js",562,19758,19786) || this.getTile(t2.x, t2.y - 1)) && t1.x != t2.x) {
    this.options.hint = [{'x': t1.x, 'y': t1.y}, {'x': t2.x, 'y': t2.y + 1}, {'x': t2.x, 'y': t2.y - 1}];
    return true;
  }
  return false;
}, checkmoves: function() {
_wrap_addFunctionToMap('game.js', 577, 20138,21224);

  for (var x = 0; x <= this.options.height - 1; x++) {
    for (var y = 0; y <= this.options.width - 1; y++) {
      if ((_wrap_setLastFunctionCall("game.js",580,20297,20466) || this.hasMoves({'x': x - 1, 'y': y}, {'x': x, 'y': y}))) 
        return true;
      if ((_wrap_setLastFunctionCall("game.js",588,20521,20690) || this.hasMoves({'x': x + 1, 'y': y}, {'x': x, 'y': y}))) 
        return true;
      if ((_wrap_setLastFunctionCall("game.js",596,20745,20914) || this.hasMoves({'x': x, 'y': y - 1}, {'x': x, 'y': y}))) 
        return true;
      if ((_wrap_setLastFunctionCall("game.js",604,20969,21138) || this.hasMoves({'x': x, 'y': y + 1}, {'x': x, 'y': y}))) 
        return true;
    }
  }
  return false;
}, check_lines: function() {
_wrap_addFunctionToMap('game.js', 616, 21243,23202);

  this.options.checklinesrunning = true;
  var left_count = [];
  var top_count = 0;
  var lines = (_wrap_setLastFunctionCall("game.js",620,21380,21390) || new Hash());
  var count = 0;
  var count2 = 0;
  for (var x = 0; x <= this.options.width - 1; x++) {
    for (var y = 0; y <= this.options.height - 1; y++) {
      if (y == 0 || (_wrap_setLastFunctionCall("game.js",625,21594,21612) || this.getTile(x, y)) == 0) 
        top_count = 0;
      if ((_wrap_setLastFunctionCall("game.js",627,21674,21692) || this.getTile(x, y)) == (_wrap_setLastFunctionCall("game.js",627,21696,21718) || this.getTile(x, y - 1))) 
        top_count++;
      if ((_wrap_setLastFunctionCall("game.js",629,21773,21791) || this.getTile(x, y)) != (_wrap_setLastFunctionCall("game.js",629,21795,21817) || this.getTile(x, y + 1))) {
        if (top_count >= 2) {
          lines[count++] = {'type': 'col', 'size': top_count + 1, 'x': x, 'y': y - top_count};
        }
        top_count = 0;
      }
      if (x == 0 || (_wrap_setLastFunctionCall("game.js",640,22215,22233) || this.getTile(x, y)) == 0) {
        left_count[y] = 0;
      }
      if ((_wrap_setLastFunctionCall("game.js",643,22319,22337) || this.getTile(x, y)) == (_wrap_setLastFunctionCall("game.js",643,22341,22363) || this.getTile(x - 1, y))) {
        left_count[y]++;
      }
      if ((_wrap_setLastFunctionCall("game.js",646,22442,22460) || this.getTile(x, y)) != (_wrap_setLastFunctionCall("game.js",646,22464,22486) || this.getTile(x + 1, y))) {
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
_wrap_addFunctionToMap('game.js', 669, 23221,24966);

  if (!this.options.lines) 
    return;
  var bonus = 0;
(_wrap_setLastFunctionCall("game.js",673,23319,24749) ||   this.options.lines.each((_wrap_setLastFunctionCall("game.js",703,23343,24748) || function(value, key) {
_wrap_addFunctionToMap('game.js', 673, 23343,24737);

  if (value.type == "row") {
    this.chainreaction++;
    for (var i = value.x; i < (value.x + value.size); i++) {
(_wrap_setLastFunctionCall("game.js",677,23537,23563) ||       this.clearTile(i, value.y));
      this.options.points = this.options.points + 10;
(_wrap_setLastFunctionCall("game.js",679,23653,23685) ||       this.pointEffect(i, value.y, 10));
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
(_wrap_setLastFunctionCall("game.js",691,24214,24240) ||       this.clearTile(value.x, i));
      this.options.points = this.options.points + 10;
(_wrap_setLastFunctionCall("game.js",693,24330,24362) ||       this.pointEffect(value.x, i, 10));
      this.options.tilecount++;
    }
    this.options.time = this.options.time + 1;
    if (value.size > 3) {
      this.options.points = this.options.points + (value.size * 10);
      this.options.time = this.options.time + 3;
    }
    bonus++;
  }
}.bind(this))));
  if (bonus > 1) {
    this.options.points = this.options.points + (bonus * 50);
  }
(_wrap_setLastFunctionCall("game.js",707,24864,24890) ||   this.updatePointsDisplay());
(_wrap_setLastFunctionCall("game.js",708,24900,24959) ||   this.chain((_wrap_setLastFunctionCall("game.js",708,24911,24958) || this.tumble.delay(this.options.delay * 2, this))));
}, doTimer: function() {
_wrap_addFunctionToMap('game.js', 710, 24981,25181);

  this.options.time--;
(_wrap_setLastFunctionCall("game.js",712,25032,25056) ||   this.updateTimeDisplay());
  if (this.options.time <= 0) 
    (_wrap_setLastFunctionCall("game.js",714,25106,25121) ||   this.gameOver());
  this.timer = (_wrap_setLastFunctionCall("game.js",715,25144,25174) || this.doTimer.delay(1000, this));
}, gameOver: function() {
_wrap_addFunctionToMap('game.js', 717, 25197,25525);

(_wrap_setLastFunctionCall("game.js",718,25219,25237) ||   $clear(this.chain));
(_wrap_setLastFunctionCall("game.js",719,25247,25265) ||   $clear(this.timer));
  (_wrap_setLastFunctionCall("game.js",720,25275,25297) || $(this.options.infoid)).innerHTML = this.options.gameover;
  for (var x = 0; x <= this.options.height - 1; x++) {
    for (var y = 0; y <= this.options.width - 1; y++) {
(_wrap_setLastFunctionCall("game.js",723,25474,25494) ||       this.clearTile(x, y));
    }
  }
}, nextLevel: function() {
_wrap_addFunctionToMap('game.js', 727, 25542,25953);

  this.levelpause = true;
(_wrap_setLastFunctionCall("game.js",729,25596,25614) ||   $clear(this.timer));
  (_wrap_setLastFunctionCall("game.js",730,25624,25646) || $(this.options.infoid)).innerHTML = this.options.levels[this.options.level].text;
(_wrap_setLastFunctionCall("game.js",731,25713,25759) ||   this.chain((_wrap_setLastFunctionCall("game.js",731,25724,25758) || this.doNextLevel.delay(3000, this))));
  for (var x = 0; x <= this.options.height - 1; x++) {
    for (var y = 0; y <= this.options.width - 1; y++) {
(_wrap_setLastFunctionCall("game.js",734,25902,25922) ||       this.clearTile(x, y));
    }
  }
}, doNextLevel: function() {
_wrap_addFunctionToMap('game.js', 738, 25972,26152);

  this.options.level++;
  if (this.options.level > 9) 
    this.options.level = 9;
(_wrap_setLastFunctionCall("game.js",742,26096,26112) ||   this.clearGame());
  this.levelpause = false;
}, updatePointsDisplay: function() {
_wrap_addFunctionToMap('game.js', 745, 26179,26426);

  (_wrap_setLastFunctionCall("game.js",746,26201,26225) || $(this.options.pointsid)).innerHTML = this.options.points;
  (_wrap_setLastFunctionCall("game.js",747,26267,26289) || $(this.options.tileid)).innerHTML = this.options.tilecount;
  (_wrap_setLastFunctionCall("game.js",748,26334,26359) || $(this.options.reqtileid)).innerHTML = this.options.levels[this.options.level].reqtile;
}, updateLevelDisplay: function() {
_wrap_addFunctionToMap('game.js', 750, 26452,26539);

  (_wrap_setLastFunctionCall("game.js",751,26474,26497) || $(this.options.levelid)).innerHTML = this.options.level + 1;
}, updateTimeDisplay: function() {
_wrap_addFunctionToMap('game.js', 753, 26564,26781);

  (_wrap_setLastFunctionCall("game.js",754,26586,26608) || $(this.options.timeid)).innerHTML = this.options.time;
  var barpos = -260 + this.options.time;
(_wrap_setLastFunctionCall("game.js",756,26695,26774) ||   (_wrap_setLastFunctionCall("game.js",756,26695,26718) || $(this.options.timebar)).setStyle("background-position", "" + barpos + "px 0px"));
}, pointEffect: function(x, y, points) {
_wrap_addFunctionToMap('game.js', 758, 26800,27818);

  this.fxp[x + "_" + y] = (_wrap_setLastFunctionCall("game.js",759,26858,27219) || new Element('DIV', {'id': "p" + x + "_" + y, 'class': 'points', 'styles': {'position': 'absolute', 'width': 32, 'height': 20, 'top': (y * this.options.tileheight) + 8 + 'px', 'left': (x * this.options.tilewidth) + 'px'}}));
(_wrap_setLastFunctionCall("game.js",770,27229,27288) ||   this.fxp[x + "_" + y].injectInside((_wrap_setLastFunctionCall("game.js",770,27264,27287) || $(this.options.fieldid))));
  this.fxp[x + "_" + y].innerHTML = points;
  this.fxp[x + "_" + y] = (_wrap_setLastFunctionCall("game.js",772,27372,27639) || new Fx.Morph((_wrap_setLastFunctionCall("game.js",772,27385,27405) || $("p" + x + "_" + y)), {duration: this.options.delay * 10, wait: false, transition: Fx.Transitions.Sine.easeInOut, fps: this.options.fps, onComplete: (_wrap_setLastFunctionCall("game.js",777,27595,27628) || this.onFxplodeComplete.bind(this))}));
(_wrap_setLastFunctionCall("game.js",779,27649,27811) ||   this.fxp[x + "_" + y].start({'top': ((y * this.options.tileheight) + 8 - (this.options.tileheight * 2)) + 'px', 'opacity': 0.4}));
}};
var jewel = (_wrap_setLastFunctionCall("game.js",785,27834,27856) || new Class(gameOptions));
(_wrap_setLastFunctionCall("game.js",786,27858,27930) || window.addEvent('domready', function() {
_wrap_addFunctionToMap('game.js', 786, 27886,27929);

  var game = (_wrap_setLastFunctionCall("game.js",787,27915,27926) || new jewel());
}));
