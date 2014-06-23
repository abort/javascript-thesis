_wrap_staticMeasuredFunctions['game.js'] = 43;
_wrap_staticMeasuredCalls['game.js'] =259;
var gameOptions = {Implements: [Options, Chain], options: {width: 8, height: 8, tilewidth: 32, tileheight: 32, fieldid: 'field', pointsid: 'p', timeid: 't', timebar: 'timebar', levelid: 'l', hintid: 'h', tileid: 'tiles', reqtileid: 'ntiles', startid: 'start', infoid: 'info', colors: false, haslines: false, lines: false, needtile: false, nextempty: false, tile1: false, tile2: false, tile1bak: false, idle: false, tilecount: 0, points: 0, delay: 200, fps: 30, hint: false, time: 0, hintcount: 0, starthints: 3, periodical: false, gameover: 'GAME OVER', nohintsleft: 'No hints left', nomoves: 'No Moves left!', level: 0, levels: {0: {tiles: 4, time: 120, reqtile: 60, text: 'Good Job'}, 1: {tiles: 4, time: 110, reqtile: 70, text: 'Well Done'}, 2: {tiles: 5, time: 100, reqtile: 80, text: 'Wohooo'}, 3: {tiles: 5, time: 90, reqtile: 90, text: 'Now Level 4'}, 4: {tiles: 6, time: 80, reqtile: 100, text: 'You are good'}, 5: {tiles: 6, time: 60, reqtile: 110, text: 'Level 6 Done'}, 6: {tiles: 7, time: 50, reqtile: 120, text: 'Mooooooo'}, 7: {tiles: 7, time: 40, reqtile: 130, text: 'Nice Done'}, 8: {tiles: 8, time: 30, reqtile: 140, text: 'Ready ... GO'}, 9: {tiles: 8, time: 20, reqtile: 150, text: 'You are insane!'}}}, initialize: function(options) {
_wrap_addFunctionToMap('game.js', 103, 2460,2598);

(_wrap_setLastFunctionCall("game.js",104,2489,2513) ||   this.setOptions(options));
(_wrap_setLastFunctionCall("game.js",105,2523,2591) ||   (_wrap_setLastFunctionCall("game.js",105,2523,2546) || $((_wrap_setLastPropertyReference("game.js",105,2525,2545) || ((_wrap_setLastPropertyReference("game.js",105,2525,2537) || (this.options)).startid)))).addEvent('click', (_wrap_setLastFunctionCall("game.js",105,2565,2590) || this.startgame.bind(this))));
}, startgame: function() {
_wrap_addFunctionToMap('game.js', 107, 2615,2906);

  this.options.hintcount = (_wrap_setLastAssignment("game.js",108,2637,2685) || ((_wrap_setLastPropertyReference("game.js",108,2662,2685) || ((_wrap_setLastPropertyReference("game.js",108,2662,2674) || (this.options)).starthints))));
  this.options.points = (_wrap_setLastAssignment("game.js",109,2695,2718) || (0));
  this.options.level = (_wrap_setLastAssignment("game.js",110,2728,2750) || (0));
(_wrap_setLastFunctionCall("game.js",111,2760,2776) ||   this.clearGame());
(_wrap_setLastFunctionCall("game.js",112,2786,2823) ||   (_wrap_setLastFunctionCall("game.js",112,2786,2808) || $((_wrap_setLastPropertyReference("game.js",112,2788,2807) || ((_wrap_setLastPropertyReference("game.js",112,2788,2800) || (this.options)).hintid)))).removeEvents());
(_wrap_setLastFunctionCall("game.js",113,2833,2899) ||   (_wrap_setLastFunctionCall("game.js",113,2833,2855) || $((_wrap_setLastPropertyReference("game.js",113,2835,2854) || ((_wrap_setLastPropertyReference("game.js",113,2835,2847) || (this.options)).hintid)))).addEvent('click', (_wrap_setLastFunctionCall("game.js",113,2874,2898) || this.giveHint.bind(this))));
}, clearGame: function() {
_wrap_addFunctionToMap('game.js', 115, 2923,3424);

  this.options.tilecount = (_wrap_setLastAssignment("game.js",116,2945,2971) || (0));
  this.chainreaction = (_wrap_setLastAssignment("game.js",117,2981,3003) || (0));
  this.options.time = (_wrap_setLastAssignment("game.js",118,3013,3077) || ((_wrap_setLastPropertyReference("game.js",118,3033,3077) || ((_wrap_setLastPropertyReference("game.js",118,3033,3052) || ((_wrap_setLastPropertyReference("game.js",118,3033,3045) || (this.options)).levels))[(_wrap_setLastPropertyReference("game.js",118,3053,3071) || ((_wrap_setLastPropertyReference("game.js",118,3053,3065) || (this.options)).level))].time))));
(_wrap_setLastFunctionCall("game.js",119,3087,3104) ||   this.setupfield());
(_wrap_setLastFunctionCall("game.js",120,3114,3130) ||   this.firstfill());
(_wrap_setLastFunctionCall("game.js",121,3140,3166) ||   this.updatePointsDisplay());
(_wrap_setLastFunctionCall("game.js",122,3176,3201) ||   this.updateLevelDisplay());
(_wrap_setLastFunctionCall("game.js",123,3211,3235) ||   this.updateTimeDisplay());
(_wrap_setLastFunctionCall("game.js",124,3245,3262) ||   this.checkmoves());
(_wrap_setLastFunctionCall("game.js",125,3272,3289) ||   this.updatehint());
(_wrap_setLastFunctionCall("game.js",126,3299,3317) ||   $clear((_wrap_setLastPropertyReference("game.js",126,3306,3316) || (this.timer))));
  this.timer = (_wrap_setLastAssignment("game.js",127,3327,3370) || ((_wrap_setLastFunctionCall("game.js",127,3340,3370) || this.doTimer.delay(1000, this))));
  (_wrap_setLastFunctionCall("game.js",128,3380,3402) || $((_wrap_setLastPropertyReference("game.js",128,3382,3401) || ((_wrap_setLastPropertyReference("game.js",128,3382,3394) || (this.options)).infoid)))).innerHTML = (_wrap_setLastAssignment("game.js",128,3380,3417) || (""));
}, setupfield: function() {
_wrap_addFunctionToMap('game.js', 130, 3442,7313);

  this.field = (_wrap_setLastAssignment("game.js",131,3464,3487) || ((_wrap_setLastFunctionCall("game.js",131,3477,3487) || new Hash())));
  this.tiles = (_wrap_setLastAssignment("game.js",132,3497,3520) || ((_wrap_setLastFunctionCall("game.js",132,3510,3520) || new Hash())));
  this.freetiles = (_wrap_setLastAssignment("game.js",133,3530,3557) || ((_wrap_setLastFunctionCall("game.js",133,3547,3557) || new Hash())));
  this.fx = (_wrap_setLastAssignment("game.js",134,3567,3579) || ({}));
  this.fxplode = (_wrap_setLastAssignment("game.js",135,3589,3606) || ({}));
  this.fxplodetile = (_wrap_setLastAssignment("game.js",136,3616,3637) || ({}));
  this.fxp = (_wrap_setLastAssignment("game.js",137,3647,3660) || ({}));
  this.fxon = (_wrap_setLastAssignment("game.js",138,3670,3683) || (0));
(_wrap_setLastFunctionCall("game.js",139,3693,3724) ||   (_wrap_setLastFunctionCall("game.js",139,3693,3716) || $((_wrap_setLastPropertyReference("game.js",139,3695,3715) || ((_wrap_setLastPropertyReference("game.js",139,3695,3707) || (this.options)).fieldid)))).empty());
  var inner;
  var tilecount = 0;
  var tileid = false;
  var posid = false;
  for (var y = 0; y <= (_wrap_setLastPropertyReference("game.js",144,3856,3874) || ((_wrap_setLastPropertyReference("game.js",144,3856,3868) || (this.options)).width)) - 1; y++) {
    for (var x = 0; x <= (_wrap_setLastPropertyReference("game.js",145,3920,3939) || ((_wrap_setLastPropertyReference("game.js",145,3920,3932) || (this.options)).height)) - 1; x++) {
      tileid = (_wrap_setLastAssignment("game.js",146,3968,3992) || ('t' + tilecount));
      posid = (_wrap_setLastAssignment("game.js",147,4010,4029) || (x + 'x' + y));
(_wrap_setLastFunctionCall("game.js",148,4047,4076) ||       this.field.set(posid, tileid));
(_wrap_setLastFunctionCall("game.js",149,4094,4636) ||       this.tiles.set(tileid, (_wrap_setLastFunctionCall("game.js",149,4117,4635) || new Element('DIV', {'id': tileid, 'class': 'outer', 'styles': {'position': 'absolute', 'width': (_wrap_setLastPropertyReference("game.js",154,4323,4345) || ((_wrap_setLastPropertyReference("game.js",154,4323,4335) || (this.options)).tilewidth)) + 'px', 'height': (_wrap_setLastPropertyReference("game.js",155,4388,4411) || ((_wrap_setLastPropertyReference("game.js",155,4388,4400) || (this.options)).tileheight)) + 'px', 'top': (y * (_wrap_setLastPropertyReference("game.js",156,4456,4479) || ((_wrap_setLastPropertyReference("game.js",156,4456,4468) || (this.options)).tileheight))) + 'px', 'left': (x * (_wrap_setLastPropertyReference("game.js",157,4526,4548) || ((_wrap_setLastPropertyReference("game.js",157,4526,4538) || (this.options)).tilewidth))) + 'px', 'z-index': 0}}))));
      inner = (_wrap_setLastAssignment("game.js",161,4654,4875) || ((_wrap_setLastFunctionCall("game.js",161,4662,4875) || new Element('DIV', {'class': 'inner', 'styles': {'width': '100%', 'height': '100%'}}))));
(_wrap_setLastFunctionCall("game.js",168,4893,4925) ||       inner.inject((_wrap_setLastPropertyReference("game.js",168,4906,4916) || (this.tiles))[tileid]));
(_wrap_setLastFunctionCall("game.js",169,4943,4990) ||       (_wrap_setLastPropertyReference("game.js",169,4943,4953) || (this.tiles))[tileid].inject((_wrap_setLastPropertyReference("game.js",169,4969,4989) || ((_wrap_setLastPropertyReference("game.js",169,4969,4981) || (this.options)).fieldid))));
      (_wrap_setLastPropertyReference("game.js",170,5008,5015) || (this.fx))[tileid] = (_wrap_setLastAssignment("game.js",170,5008,5383) || ((_wrap_setLastFunctionCall("game.js",170,5026,5383) || new (_wrap_setLastPropertyReference("game.js",170,5030,5038) || (Fx.Morph))((_wrap_setLastFunctionCall("game.js",170,5039,5057) || $('t' + tilecount)), {duration: (_wrap_setLastPropertyReference("game.js",171,5091,5109) || ((_wrap_setLastPropertyReference("game.js",171,5091,5103) || (this.options)).delay)), wait: false, transition: (_wrap_setLastPropertyReference("game.js",173,5176,5203) || ((_wrap_setLastPropertyReference("game.js",173,5176,5195) || ((_wrap_setLastPropertyReference("game.js",173,5176,5190) || (Fx.Transitions)).Circ)).easeOut)), fps: (_wrap_setLastPropertyReference("game.js",174,5230,5246) || ((_wrap_setLastPropertyReference("game.js",174,5230,5242) || (this.options)).fps)), onComplete: (_wrap_setLastFunctionCall("game.js",175,5280,5308) || this.onFxComplete.bind(this)), onStart: (_wrap_setLastFunctionCall("game.js",176,5339,5364) || this.onFxStart.bind(this))}))));
      (_wrap_setLastPropertyReference("game.js",178,5401,5411) || (this.tiles))[tileid].drag = (_wrap_setLastAssignment("game.js",178,5401,7253) || ((_wrap_setLastFunctionCall("game.js",178,5427,7253) || new (_wrap_setLastPropertyReference("game.js",178,5431,5440) || (Drag.Move))((_wrap_setLastFunctionCall("game.js",178,5441,5462) || $((_wrap_setLastPropertyReference("game.js",178,5443,5453) || (this.tiles))[tileid])), {snap: 0, onBeforeStart: (_wrap_setLastFunctionCall("game.js",196,5530,6576) || function(el) {
_wrap_addFunctionToMap('game.js', 180, 5530,6565);

  var xx = (_wrap_setLastFunctionCall("game.js",181,5579,5606) || (_wrap_setLastFunctionCall("game.js",181,5579,5598) || el.getStyle("left")).toInt());
  var yy = (_wrap_setLastFunctionCall("game.js",182,5641,5667) || (_wrap_setLastFunctionCall("game.js",182,5641,5659) || el.getStyle("top")).toInt());
  this.restore = (_wrap_setLastAssignment("game.js",183,5693,5804) || ({x: xx, y: yy}));
  var x1 = (xx - (_wrap_setLastPropertyReference("game.js",187,5845,5867) || ((_wrap_setLastPropertyReference("game.js",187,5845,5857) || (this.options)).tilewidth)) < 0) ? 0 : xx - (_wrap_setLastPropertyReference("game.js",187,5884,5906) || ((_wrap_setLastPropertyReference("game.js",187,5884,5896) || (this.options)).tilewidth));
  var y1 = (yy - (_wrap_setLastPropertyReference("game.js",188,5947,5969) || ((_wrap_setLastPropertyReference("game.js",188,5947,5959) || (this.options)).tilewidth)) < 0) ? 0 : yy - (_wrap_setLastPropertyReference("game.js",188,5986,6008) || ((_wrap_setLastPropertyReference("game.js",188,5986,5998) || (this.options)).tilewidth));
  var x2 = (xx + 32 > ((_wrap_setLastPropertyReference("game.js",189,6055,6074) || ((_wrap_setLastPropertyReference("game.js",189,6055,6067) || (this.options)).height)) - 1) * (_wrap_setLastPropertyReference("game.js",189,6082,6104) || ((_wrap_setLastPropertyReference("game.js",189,6082,6094) || (this.options)).tilewidth))) ? ((_wrap_setLastPropertyReference("game.js",189,6109,6128) || ((_wrap_setLastPropertyReference("game.js",189,6109,6121) || (this.options)).height)) - 1) * (_wrap_setLastPropertyReference("game.js",189,6136,6158) || ((_wrap_setLastPropertyReference("game.js",189,6136,6148) || (this.options)).tilewidth)) : xx + 32;
  var y2 = (yy + 32 > ((_wrap_setLastPropertyReference("game.js",190,6215,6234) || ((_wrap_setLastPropertyReference("game.js",190,6215,6227) || (this.options)).height)) - 1) * (_wrap_setLastPropertyReference("game.js",190,6242,6264) || ((_wrap_setLastPropertyReference("game.js",190,6242,6254) || (this.options)).tilewidth))) ? ((_wrap_setLastPropertyReference("game.js",190,6269,6288) || ((_wrap_setLastPropertyReference("game.js",190,6269,6281) || (this.options)).height)) - 1) * (_wrap_setLastPropertyReference("game.js",190,6296,6318) || ((_wrap_setLastPropertyReference("game.js",190,6296,6308) || (this.options)).tilewidth)) : yy + 32;
  el.drag.options.limit = (_wrap_setLastAssignment("game.js",191,6354,6486) || ({x: [x1, x2], y: [y1, y2]}));
(_wrap_setLastFunctionCall("game.js",195,6512,6542) ||   (_wrap_setLastFunctionCall("game.js",195,6512,6517) || $(el)).setStyle("z-index", 500));
}.bind(this)), onComplete: (_wrap_setLastFunctionCall("game.js",206,6610,7234) || function(el) {
_wrap_addFunctionToMap('game.js', 197, 6610,7223);

  var xx = (_wrap_setLastFunctionCall("game.js",198,6659,6686) || (_wrap_setLastFunctionCall("game.js",198,6659,6678) || el.getStyle("left")).toInt());
  var yy = (_wrap_setLastFunctionCall("game.js",199,6721,6747) || (_wrap_setLastFunctionCall("game.js",199,6721,6739) || el.getStyle("top")).toInt());
  this.options.tile1 = (_wrap_setLastAssignment("game.js",200,6773,6850) || ((_wrap_setLastFunctionCall("game.js",200,6794,6850) || this.getTileId((_wrap_setLastFunctionCall("game.js",200,6809,6828) || Math.round(xx / 32)), (_wrap_setLastFunctionCall("game.js",200,6830,6849) || Math.round(yy / 32))))));
  this.options.tile2 = (_wrap_setLastAssignment("game.js",201,6876,6977) || ((_wrap_setLastFunctionCall("game.js",201,6897,6977) || this.getTileId((_wrap_setLastFunctionCall("game.js",201,6912,6943) || Math.round((_wrap_setLastPropertyReference("game.js",201,6923,6937) || ((_wrap_setLastPropertyReference("game.js",201,6923,6935) || (this.restore)).x)) / 32)), (_wrap_setLastFunctionCall("game.js",201,6945,6976) || Math.round((_wrap_setLastPropertyReference("game.js",201,6956,6970) || ((_wrap_setLastPropertyReference("game.js",201,6956,6968) || (this.restore)).y)) / 32))))));
(_wrap_setLastFunctionCall("game.js",202,7003,7041) ||   (_wrap_setLastFunctionCall("game.js",202,7003,7008) || $(el)).setStyle("left", (_wrap_setLastPropertyReference("game.js",202,7026,7040) || ((_wrap_setLastPropertyReference("game.js",202,7026,7038) || (this.restore)).x))));
(_wrap_setLastFunctionCall("game.js",203,7067,7104) ||   (_wrap_setLastFunctionCall("game.js",203,7067,7072) || $(el)).setStyle("top", (_wrap_setLastPropertyReference("game.js",203,7089,7103) || ((_wrap_setLastPropertyReference("game.js",203,7089,7101) || (this.restore)).y))));
(_wrap_setLastFunctionCall("game.js",204,7130,7158) ||   (_wrap_setLastFunctionCall("game.js",204,7130,7135) || $(el)).setStyle("z-index", 0));
(_wrap_setLastFunctionCall("game.js",205,7184,7200) ||   this.swapTiles());
}.bind(this))}))));
      tilecount++;
    }
  }
}, onFxStart: function() {
_wrap_addFunctionToMap('game.js', 212, 7330,7370);

  (_wrap_setLastPropertyReference("game.js",213,7352,7363) || (this.fxon++));
}, onFxComplete: function() {
_wrap_addFunctionToMap('game.js', 215, 7390,7430);

  (_wrap_setLastPropertyReference("game.js",216,7412,7423) || (this.fxon--));
}, firstfill: function() {
_wrap_addFunctionToMap('game.js', 218, 7447,8397);

  var color;
  var color1;
  var tile = false;
  for (var x = (_wrap_setLastPropertyReference("game.js",222,7547,7565) || ((_wrap_setLastPropertyReference("game.js",222,7547,7559) || (this.options)).width)) - 1; x >= 0; x--) {
    for (var y = (_wrap_setLastPropertyReference("game.js",223,7611,7630) || ((_wrap_setLastPropertyReference("game.js",223,7611,7623) || (this.options)).height)) - 1; y >= 0; y--) {
      tile = (_wrap_setLastAssignment("game.js",224,7667,7694) || ((_wrap_setLastFunctionCall("game.js",224,7674,7694) || this.getRandomTile())));
      while ((tile === (_wrap_setLastFunctionCall("game.js",225,7729,7751) || this.getTile(x + 1, y)) && tile === (_wrap_setLastFunctionCall("game.js",225,7764,7786) || this.getTile(x + 2, y))) || (tile === (_wrap_setLastFunctionCall("game.js",225,7801,7823) || this.getTile(x, y + 1)) && tile === (_wrap_setLastFunctionCall("game.js",225,7836,7858) || this.getTile(x, y + 2)))) {
        tile = (_wrap_setLastAssignment("game.js",226,7883,7956) || ((_wrap_setLastFunctionCall("game.js",226,7890,7956) || this.getRandomTile((_wrap_setLastFunctionCall("game.js",226,7909,7931) || this.getTile(x + 1, y)), (_wrap_setLastFunctionCall("game.js",226,7933,7955) || this.getTile(x, y + 1))))));
      }
(_wrap_setLastFunctionCall("game.js",228,7992,8016) ||       this.setTile(x, y, tile));
      var tileid = (_wrap_setLastFunctionCall("game.js",229,8047,8067) || this.getTileId(x, y));
(_wrap_setLastFunctionCall("game.js",230,8085,8251) ||       (_wrap_setLastFunctionCall("game.js",230,8085,8094) || $(tileid)).setStyles({'top': (-(_wrap_setLastPropertyReference("game.js",231,8136,8160) || (this.options.tileheight))) + 'px', 'left': (x * (_wrap_setLastPropertyReference("game.js",232,8202,8224) || ((_wrap_setLastPropertyReference("game.js",232,8202,8214) || (this.options)).tilewidth))) + 'px'}));
(_wrap_setLastFunctionCall("game.js",234,8269,8366) ||       (_wrap_setLastPropertyReference("game.js",234,8269,8276) || (this.fx))[tileid].start({'top': y * (_wrap_setLastPropertyReference("game.js",235,8324,8347) || ((_wrap_setLastPropertyReference("game.js",235,8324,8336) || (this.options)).tileheight))}));
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
  return (_wrap_setLastPropertyReference("game.js",257,8906,8939) || ((_wrap_setLastFunctionCall("game.js",257,8906,8929) || $((_wrap_setLastFunctionCall("game.js",257,8908,8928) || this.getTileId(x, y)))).className));
}, getRandomTile: function(t1, t2) {
_wrap_addFunctionToMap('game.js', 259, 8967,9167);

  var tile;
  while ((tile == t1 || tile == t2) || !tile) 
    tile = (_wrap_setLastAssignment("game.js",262,9069,9139) || ('s' + (_wrap_setLastFunctionCall("game.js",262,9082,9139) || $random(1, (_wrap_setLastPropertyReference("game.js",262,9093,9138) || ((_wrap_setLastPropertyReference("game.js",262,9093,9112) || ((_wrap_setLastPropertyReference("game.js",262,9093,9105) || (this.options)).levels))[(_wrap_setLastPropertyReference("game.js",262,9113,9131) || ((_wrap_setLastPropertyReference("game.js",262,9113,9125) || (this.options)).level))].tiles))))));
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
  (_wrap_setLastPropertyReference("game.js",296,10096,10112) || (this.fxplodetile))[tileid] = (_wrap_setLastAssignment("game.js",296,10096,10553) || ((_wrap_setLastFunctionCall("game.js",296,10123,10553) || new Element('DIV', {'id': "ex" + tileid, 'class': (_wrap_setLastFunctionCall("game.js",298,10198,10228) || (_wrap_setLastFunctionCall("game.js",298,10198,10207) || $(tileid)).getProperty("class")), 'styles': {'position': 'absolute', 'width': (_wrap_setLastPropertyReference("game.js",301,10319,10341) || ((_wrap_setLastPropertyReference("game.js",301,10319,10331) || (this.options)).tilewidth)) + 'px', 'height': (_wrap_setLastPropertyReference("game.js",302,10376,10399) || ((_wrap_setLastPropertyReference("game.js",302,10376,10388) || (this.options)).tileheight)) + 'px', 'top': (y * (_wrap_setLastPropertyReference("game.js",303,10436,10459) || ((_wrap_setLastPropertyReference("game.js",303,10436,10448) || (this.options)).tileheight))) + 'px', 'left': (x * (_wrap_setLastPropertyReference("game.js",304,10498,10520) || ((_wrap_setLastPropertyReference("game.js",304,10498,10510) || (this.options)).tilewidth))) + 'px'}}))));
(_wrap_setLastFunctionCall("game.js",307,10563,10625) ||   (_wrap_setLastPropertyReference("game.js",307,10563,10579) || (this.fxplodetile))[tileid].injectInside((_wrap_setLastFunctionCall("game.js",307,10601,10624) || $((_wrap_setLastPropertyReference("game.js",307,10603,10623) || ((_wrap_setLastPropertyReference("game.js",307,10603,10615) || (this.options)).fieldid))))));
  var xx = ((_wrap_setLastPropertyReference("game.js",308,10645,10667) || ((_wrap_setLastPropertyReference("game.js",308,10645,10657) || (this.options)).tilewidth)) * x) - (_wrap_setLastFunctionCall("game.js",308,10675,10713) || $random(0, (_wrap_setLastPropertyReference("game.js",308,10686,10708) || ((_wrap_setLastPropertyReference("game.js",308,10686,10698) || (this.options)).tilewidth)) * 2)) + (_wrap_setLastFunctionCall("game.js",308,10716,10754) || $random(0, (_wrap_setLastPropertyReference("game.js",308,10727,10749) || ((_wrap_setLastPropertyReference("game.js",308,10727,10739) || (this.options)).tilewidth)) * 2));
  var yy = (9 * (_wrap_setLastPropertyReference("game.js",309,10778,10801) || ((_wrap_setLastPropertyReference("game.js",309,10778,10790) || (this.options)).tileheight)));
  (_wrap_setLastPropertyReference("game.js",310,10812,10824) || (this.fxplode))[tileid] = (_wrap_setLastAssignment("game.js",310,10812,11094) || ((_wrap_setLastFunctionCall("game.js",310,10835,11094) || new (_wrap_setLastPropertyReference("game.js",310,10839,10847) || (Fx.Morph))((_wrap_setLastFunctionCall("game.js",310,10848,10864) || $('ex' + tileid)), {duration: (_wrap_setLastPropertyReference("game.js",311,10890,10908) || ((_wrap_setLastPropertyReference("game.js",311,10890,10902) || (this.options)).delay)) * 4, wait: false, transition: (_wrap_setLastPropertyReference("game.js",313,10963,10989) || ((_wrap_setLastPropertyReference("game.js",313,10963,10982) || ((_wrap_setLastPropertyReference("game.js",313,10963,10977) || (Fx.Transitions)).Circ)).easeIn)), fps: (_wrap_setLastPropertyReference("game.js",314,11008,11024) || ((_wrap_setLastPropertyReference("game.js",314,11008,11020) || (this.options)).fps)), onComplete: (_wrap_setLastFunctionCall("game.js",315,11050,11083) || this.onFxplodeComplete.bind(this))}))));
(_wrap_setLastFunctionCall("game.js",317,11104,11249) ||   (_wrap_setLastPropertyReference("game.js",317,11104,11116) || (this.fxplode))[tileid].start.delay(10, (_wrap_setLastPropertyReference("game.js",317,11141,11153) || (this.fxplode))[tileid], {'top': yy, 'left': xx, 'opacity': 0.4}));
(_wrap_setLastFunctionCall("game.js",322,11259,11301) ||   (_wrap_setLastFunctionCall("game.js",322,11259,11268) || $(tileid)).removeClass((_wrap_setLastPropertyReference("game.js",322,11281,11300) || ((_wrap_setLastFunctionCall("game.js",322,11281,11290) || $(tileid)).className))));
(_wrap_setLastFunctionCall("game.js",323,11311,11348) ||   (_wrap_setLastFunctionCall("game.js",323,11311,11320) || $(tileid)).setStyle("display", "none"));
(_wrap_setLastFunctionCall("game.js",324,11358,11383) ||   this.pushFreetile(tileid));
(_wrap_setLastFunctionCall("game.js",325,11393,11427) ||   this.field.set(x + 'x' + y, false));
}, onFxplodeComplete: function(e) {
_wrap_addFunctionToMap('game.js', 327, 11459,11505);

(_wrap_setLastFunctionCall("game.js",328,11482,11498) ||   (_wrap_setLastFunctionCall("game.js",328,11482,11489) || $((_wrap_setLastPropertyReference("game.js",328,11484,11488) || (e.id)))).remove());
}, checkPos: function(x, y) {
_wrap_addFunctionToMap('game.js', 330, 11521,11716);

  if (x < 0 || x > (_wrap_setLastPropertyReference("game.js",331,11564,11583) || ((_wrap_setLastPropertyReference("game.js",331,11564,11576) || (this.options)).height)) - 1) 
    return false;
  if (y < 0 || y > (_wrap_setLastPropertyReference("game.js",333,11640,11658) || ((_wrap_setLastPropertyReference("game.js",333,11640,11652) || (this.options)).width)) - 1) 
    return false;
  return true;
}, resetTilePos: function(x, y) {
_wrap_addFunctionToMap('game.js', 337, 11736,12333);

  var id = (_wrap_setLastFunctionCall("game.js",338,11771,11789) || this.popFreetile());
  if (!id) 
    return false;
  if (y == 0) {
(_wrap_setLastFunctionCall("game.js",342,11868,12018) ||     (_wrap_setLastFunctionCall("game.js",342,11868,11873) || $(id)).setStyles({'top': (-(_wrap_setLastPropertyReference("game.js",343,11911,11935) || (this.options.tileheight))) + 'px', 'left': (x * (_wrap_setLastPropertyReference("game.js",344,11973,11995) || ((_wrap_setLastPropertyReference("game.js",344,11973,11985) || (this.options)).tilewidth))) + 'px'}));
(_wrap_setLastFunctionCall("game.js",346,12032,12091) ||     (_wrap_setLastPropertyReference("game.js",346,12032,12039) || (this.fx))[id].start({'top': 0}));
  } else {
(_wrap_setLastFunctionCall("game.js",350,12122,12275) ||     (_wrap_setLastFunctionCall("game.js",350,12122,12127) || $(id)).setStyles({'top': (y * (_wrap_setLastPropertyReference("game.js",351,12168,12191) || ((_wrap_setLastPropertyReference("game.js",351,12168,12180) || (this.options)).tileheight))) + 'px', 'left': (x * (_wrap_setLastPropertyReference("game.js",352,12230,12252) || ((_wrap_setLastPropertyReference("game.js",352,12230,12242) || (this.options)).tilewidth))) + 'px'}));
  }
(_wrap_setLastFunctionCall("game.js",355,12295,12326) ||   this.field.set(x + 'x' + y, id));
}, addLine: function() {
_wrap_addFunctionToMap('game.js', 357, 12348,12754);

  this.options.addLinerunning = (_wrap_setLastAssignment("game.js",358,12370,12404) || (true));
  var line = false;
  for (var x = 0; x <= (_wrap_setLastPropertyReference("game.js",360,12461,12479) || ((_wrap_setLastPropertyReference("game.js",360,12461,12473) || (this.options)).width)) - 1; x++) {
    if (!(_wrap_setLastFunctionCall("game.js",361,12509,12527) || this.getTile(x, 0))) {
      line = (_wrap_setLastAssignment("game.js",362,12547,12558) || (true));
(_wrap_setLastFunctionCall("game.js",363,12576,12599) ||       this.resetTilePos(x, 0));
(_wrap_setLastFunctionCall("game.js",364,12617,12657) ||       this.setTile(x, 0, (_wrap_setLastFunctionCall("game.js",364,12636,12656) || this.getRandomTile())));
    }
  }
  this.options.addLinerunning = (_wrap_setLastAssignment("game.js",367,12691,12726) || (false));
  return line;
}, gravity: function() {
_wrap_addFunctionToMap('game.js', 370, 12769,13880);

  this.options.gravityrunning = (_wrap_setLastAssignment("game.js",371,12791,12825) || (true));
  var col = {};
  var id = false;
  for (var y = (_wrap_setLastPropertyReference("game.js",374,12894,12913) || ((_wrap_setLastPropertyReference("game.js",374,12894,12906) || (this.options)).height)) - 2; y >= 0; y--) {
    for (var x = (_wrap_setLastPropertyReference("game.js",375,12959,12977) || ((_wrap_setLastPropertyReference("game.js",375,12959,12971) || (this.options)).width)) - 1; x >= 0; x--) {
      if (!(_wrap_setLastFunctionCall("game.js",376,13019,13041) || this.getTile(x, y + 1)) && (_wrap_setLastFunctionCall("game.js",376,13045,13063) || this.getTile(x, y))) {
        var depth = 0;
        for (var yy = y; yy <= (_wrap_setLastPropertyReference("game.js",378,13145,13164) || ((_wrap_setLastPropertyReference("game.js",378,13145,13157) || (this.options)).height)) - 1; yy++) {
          if (!(_wrap_setLastFunctionCall("game.js",379,13207,13226) || this.getTile(x, yy))) 
            depth++;
        }
        id = (_wrap_setLastAssignment("game.js",382,13307,13332) || ((_wrap_setLastFunctionCall("game.js",382,13312,13332) || this.getTileId(x, y))));
        if (id != "false") {
(_wrap_setLastFunctionCall("game.js",384,13399,13546) ||           (_wrap_setLastPropertyReference("game.js",384,13399,13406) || (this.fx))[id].start({'top': (_wrap_setLastFunctionCall("game.js",385,13454,13483) || (_wrap_setLastFunctionCall("game.js",385,13454,13475) || (_wrap_setLastFunctionCall("game.js",385,13454,13459) || $(id)).getStyle('top')).toInt()) + ((_wrap_setLastPropertyReference("game.js",385,13487,13510) || ((_wrap_setLastPropertyReference("game.js",385,13487,13499) || (this.options)).tileheight)) * depth)}));
(_wrap_setLastFunctionCall("game.js",387,13572,13613) ||           this.field.set(x + 'x' + (y + depth), id));
(_wrap_setLastFunctionCall("game.js",388,13639,13673) ||           this.field.set(x + 'x' + y, false));
        }
      }
    }
  }
  this.options.gravityrunning = (_wrap_setLastAssignment("game.js",393,13747,13782) || (false));
  if (id != "false") 
    return true;
  else 
    return false;
}, swapTiles: function() {
_wrap_addFunctionToMap('game.js', 399, 13897,14396);

  if (!(_wrap_setLastPropertyReference("game.js",400,13924,13943) || (this.options.tile1)) || !(_wrap_setLastPropertyReference("game.js",400,13947,13966) || (this.options.tile2))) 
    return false;
  var t1 = (_wrap_setLastFunctionCall("game.js",402,14010,14051) || this.getTilePos((_wrap_setLastPropertyReference("game.js",402,14026,14050) || ((_wrap_setLastFunctionCall("game.js",402,14026,14047) || $((_wrap_setLastPropertyReference("game.js",402,14028,14046) || ((_wrap_setLastPropertyReference("game.js",402,14028,14040) || (this.options)).tile1)))).id))));
  var t2 = (_wrap_setLastFunctionCall("game.js",403,14070,14111) || this.getTilePos((_wrap_setLastPropertyReference("game.js",403,14086,14110) || ((_wrap_setLastFunctionCall("game.js",403,14086,14107) || $((_wrap_setLastPropertyReference("game.js",403,14088,14106) || ((_wrap_setLastPropertyReference("game.js",403,14088,14100) || (this.options)).tile2)))).id))));
  if (!(_wrap_setLastFunctionCall("game.js",404,14126,14148) || this.checkSwap(t1, t2))) 
    return false;
  var tc1 = (_wrap_setLastFunctionCall("game.js",406,14194,14218) || this.getTile((_wrap_setLastPropertyReference("game.js",406,14207,14211) || (t1.x)), (_wrap_setLastPropertyReference("game.js",406,14213,14217) || (t1.y))));
  var tc2 = (_wrap_setLastFunctionCall("game.js",407,14238,14262) || this.getTile((_wrap_setLastPropertyReference("game.js",407,14251,14255) || (t2.x)), (_wrap_setLastPropertyReference("game.js",407,14257,14261) || (t2.y))));
(_wrap_setLastFunctionCall("game.js",408,14272,14301) ||   this.setTile((_wrap_setLastPropertyReference("game.js",408,14285,14289) || (t1.x)), (_wrap_setLastPropertyReference("game.js",408,14291,14295) || (t1.y)), tc2));
(_wrap_setLastFunctionCall("game.js",409,14311,14340) ||   this.setTile((_wrap_setLastPropertyReference("game.js",409,14324,14328) || (t2.x)), (_wrap_setLastPropertyReference("game.js",409,14330,14334) || (t2.y)), tc1));
(_wrap_setLastFunctionCall("game.js",410,14350,14389) ||   this.chain((_wrap_setLastFunctionCall("game.js",410,14361,14388) || this.tumble.delay(10, this))));
}, tumble: function() {
_wrap_addFunctionToMap('game.js', 412, 14410,15529);

  if ((_wrap_setLastPropertyReference("game.js",413,14436,14450) || (this.highlight))) 
    (_wrap_setLastFunctionCall("game.js",414,14464,14514) ||   this.highlight.setStyle("border", "0px solid red"));
  if ((_wrap_setLastPropertyReference("game.js",415,14528,14558) || ((_wrap_setLastPropertyReference("game.js",415,14528,14540) || (this.options)).checklinesrunning)) || (_wrap_setLastPropertyReference("game.js",415,14562,14589) || ((_wrap_setLastPropertyReference("game.js",415,14562,14574) || (this.options)).addLinerunning)) || (_wrap_setLastPropertyReference("game.js",415,14593,14620) || ((_wrap_setLastPropertyReference("game.js",415,14593,14605) || (this.options)).gravityrunning))) {
(_wrap_setLastFunctionCall("game.js",416,14636,14664) ||     conslole.log("abort tumble"));
    return;
  }
  if ((_wrap_setLastPropertyReference("game.js",419,14708,14717) || (this.fxon)) != 0) {
(_wrap_setLastFunctionCall("game.js",420,14738,14778) ||     this.chain((_wrap_setLastFunctionCall("game.js",420,14749,14777) || this.tumble.delay(100, this))));
    return;
  }
  if (!(_wrap_setLastFunctionCall("game.js",423,14823,14837) || this.gravity())) {
  }
  if ((_wrap_setLastPropertyReference("game.js",424,14854,14869) || (this.levelpause))) 
    return;
  if ((_wrap_setLastFunctionCall("game.js",426,14903,14917) || this.addLine())) {
(_wrap_setLastFunctionCall("game.js",427,14933,14972) ||     this.chain((_wrap_setLastFunctionCall("game.js",427,14944,14971) || this.tumble.delay(10, this))));
    return;
  } else if ((_wrap_setLastFunctionCall("game.js",429,15013,15031) || this.check_lines())) {
(_wrap_setLastFunctionCall("game.js",430,15047,15107) ||     this.chain((_wrap_setLastFunctionCall("game.js",430,15058,15106) || this.deleteLines.delay((_wrap_setLastPropertyReference("game.js",430,15081,15099) || ((_wrap_setLastPropertyReference("game.js",430,15081,15093) || (this.options)).delay)), this))));
    return;
  }
  if ((_wrap_setLastPropertyReference("game.js",433,15151,15169) || (this.chainreaction)) > 2) {
    this.options.points = (_wrap_setLastAssignment("game.js",434,15189,15279) || ((_wrap_setLastPropertyReference("game.js",434,15211,15230) || ((_wrap_setLastPropertyReference("game.js",434,15211,15223) || (this.options)).points)) + ((_wrap_setLastPropertyReference("game.js",434,15234,15252) || (this.chainreaction)) * (_wrap_setLastPropertyReference("game.js",434,15255,15273) || (this.chainreaction)) * 50)));
  }
  if (!(_wrap_setLastFunctionCall("game.js",436,15304,15321) || this.checkmoves())) {
(_wrap_setLastFunctionCall("game.js",437,15337,15351) ||     this.noMoves());
  }
  if ((_wrap_setLastPropertyReference("game.js",439,15375,15397) || ((_wrap_setLastPropertyReference("game.js",439,15375,15387) || (this.options)).tilecount)) >= (_wrap_setLastPropertyReference("game.js",439,15401,15448) || ((_wrap_setLastPropertyReference("game.js",439,15401,15420) || ((_wrap_setLastPropertyReference("game.js",439,15401,15413) || (this.options)).levels))[(_wrap_setLastPropertyReference("game.js",439,15421,15439) || ((_wrap_setLastPropertyReference("game.js",439,15421,15433) || (this.options)).level))].reqtile))) {
(_wrap_setLastFunctionCall("game.js",440,15464,15480) ||     this.nextLevel());
  }
  this.chainreaction = (_wrap_setLastAssignment("game.js",442,15500,15522) || (0));
}, noMoves: function() {
_wrap_addFunctionToMap('game.js', 444, 15544,15870);

  (_wrap_setLastFunctionCall("game.js",445,15566,15588) || $((_wrap_setLastPropertyReference("game.js",445,15568,15587) || ((_wrap_setLastPropertyReference("game.js",445,15568,15580) || (this.options)).infoid)))).innerHTML = (_wrap_setLastAssignment("game.js",445,15566,15621) || ((_wrap_setLastPropertyReference("game.js",445,15601,15621) || ((_wrap_setLastPropertyReference("game.js",445,15601,15613) || (this.options)).nomoves))));
(_wrap_setLastFunctionCall("game.js",446,15631,15676) ||   this.chain((_wrap_setLastFunctionCall("game.js",446,15642,15675) || this.doNewMoves.delay(3000, this))));
  for (var x = 0; x <= (_wrap_setLastPropertyReference("game.js",447,15707,15726) || ((_wrap_setLastPropertyReference("game.js",447,15707,15719) || (this.options)).height)) - 1; x++) {
    for (var y = 0; y <= (_wrap_setLastPropertyReference("game.js",448,15772,15790) || ((_wrap_setLastPropertyReference("game.js",448,15772,15784) || (this.options)).width)) - 1; y++) {
(_wrap_setLastFunctionCall("game.js",449,15819,15839) ||       this.clearTile(x, y));
    }
  }
}, doNewMoves: function() {
_wrap_addFunctionToMap('game.js', 453, 15888,16007);

(_wrap_setLastFunctionCall("game.js",454,15910,15927) ||   this.setupfield());
(_wrap_setLastFunctionCall("game.js",455,15937,15953) ||   this.firstfill());
  (_wrap_setLastFunctionCall("game.js",456,15963,15985) || $((_wrap_setLastPropertyReference("game.js",456,15965,15984) || ((_wrap_setLastPropertyReference("game.js",456,15965,15977) || (this.options)).infoid)))).innerHTML = (_wrap_setLastAssignment("game.js",456,15963,16000) || (""));
}, giveHint: function(e) {
_wrap_addFunctionToMap('game.js', 458, 16023,16370);

  if ((_wrap_setLastPropertyReference("game.js",459,16050,16067) || ((_wrap_setLastPropertyReference("game.js",459,16050,16062) || (this.options)).hint)) && (_wrap_setLastPropertyReference("game.js",459,16071,16093) || ((_wrap_setLastPropertyReference("game.js",459,16071,16083) || (this.options)).hintcount)) > 0) {
    var id = (_wrap_setLastFunctionCall("game.js",460,16122,16184) || this.getTileId((_wrap_setLastPropertyReference("game.js",460,16137,16159) || ((_wrap_setLastPropertyReference("game.js",460,16137,16154) || ((_wrap_setLastPropertyReference("game.js",460,16137,16149) || (this.options)).hint))[0].x)), (_wrap_setLastPropertyReference("game.js",460,16161,16183) || ((_wrap_setLastPropertyReference("game.js",460,16161,16178) || ((_wrap_setLastPropertyReference("game.js",460,16161,16173) || (this.options)).hint))[0].y))));
    this.highlight = (_wrap_setLastAssignment("game.js",461,16198,16220) || ((_wrap_setLastFunctionCall("game.js",461,16215,16220) || $(id))));
(_wrap_setLastFunctionCall("game.js",462,16234,16284) ||     this.highlight.setStyle("border", "1px solid red"));
    (_wrap_setLastPropertyReference("game.js",463,16298,16322) || (this.options.hintcount--));
(_wrap_setLastFunctionCall("game.js",464,16336,16353) ||     this.updatehint());
  }
}, updatehint: function() {
_wrap_addFunctionToMap('game.js', 467, 16388,16746);

  var x = "";
  if ((_wrap_setLastPropertyReference("game.js",469,16434,16456) || ((_wrap_setLastPropertyReference("game.js",469,16434,16446) || (this.options)).hintcount)) > 0) {
    for (var h = 0; h <= (_wrap_setLastPropertyReference("game.js",470,16497,16519) || ((_wrap_setLastPropertyReference("game.js",470,16497,16509) || (this.options)).hintcount)) - 1; h++) {
      x = (_wrap_setLastAssignment("game.js",471,16548,16610) || (x + ' <img width="14" height="14" src="images/coin.gif"> '));
    }
  } else {
    x = (_wrap_setLastAssignment("game.js",474,16655,16683) || ((_wrap_setLastPropertyReference("game.js",474,16659,16683) || ((_wrap_setLastPropertyReference("game.js",474,16659,16671) || (this.options)).nohintsleft))));
  }
  (_wrap_setLastFunctionCall("game.js",476,16703,16725) || $((_wrap_setLastPropertyReference("game.js",476,16705,16724) || ((_wrap_setLastPropertyReference("game.js",476,16705,16717) || (this.options)).hintid)))).innerHTML = (_wrap_setLastAssignment("game.js",476,16703,16739) || (x));
}, checkSwap: function(t1, t2) {
_wrap_addFunctionToMap('game.js', 478, 16763,17062);

  var xok = (_wrap_setLastFunctionCall("game.js",479,16801,16837) || Math.abs((((_wrap_setLastPropertyReference("game.js",479,16812,16816) || (t1.x)) + (_wrap_setLastPropertyReference("game.js",479,16819,16823) || (t2.x))) / 2) - (_wrap_setLastPropertyReference("game.js",479,16832,16836) || (t1.x))));
  var yok = (_wrap_setLastFunctionCall("game.js",480,16857,16893) || Math.abs((((_wrap_setLastPropertyReference("game.js",480,16868,16872) || (t1.y)) + (_wrap_setLastPropertyReference("game.js",480,16875,16879) || (t2.y))) / 2) - (_wrap_setLastPropertyReference("game.js",480,16888,16892) || (t1.y))));
  if (xok + yok != 0.5) 
    return false;
  if ((_wrap_setLastFunctionCall("game.js",483,16962,16983) || this.hasMoves(t1, t2)) || (_wrap_setLastFunctionCall("game.js",483,16987,17008) || this.hasMoves(t2, t1))) 
    return true;
  return false;
}, hasMoves: function(t1, t2) {
_wrap_addFunctionToMap('game.js', 487, 17078,20120);

  this.options.hint = (_wrap_setLastAssignment("game.js",488,17106,17131) || (false));
  if ((_wrap_setLastPropertyReference("game.js",489,17145,17149) || (t1.x)) < 0 || (_wrap_setLastPropertyReference("game.js",489,17157,17161) || (t1.x)) > (_wrap_setLastPropertyReference("game.js",489,17164,17182) || ((_wrap_setLastPropertyReference("game.js",489,17164,17176) || (this.options)).width)) - 1) 
    return false;
  if ((_wrap_setLastPropertyReference("game.js",491,17226,17230) || (t1.y)) < 0 || (_wrap_setLastPropertyReference("game.js",491,17238,17242) || (t1.y)) > (_wrap_setLastPropertyReference("game.js",491,17245,17264) || ((_wrap_setLastPropertyReference("game.js",491,17245,17257) || (this.options)).height)) - 1) 
    return false;
  if ((_wrap_setLastPropertyReference("game.js",493,17308,17312) || (t2.x)) < 0 || (_wrap_setLastPropertyReference("game.js",493,17320,17324) || (t2.x)) > (_wrap_setLastPropertyReference("game.js",493,17327,17345) || ((_wrap_setLastPropertyReference("game.js",493,17327,17339) || (this.options)).width)) - 1) 
    return false;
  if ((_wrap_setLastPropertyReference("game.js",495,17389,17393) || (t2.y)) < 0 || (_wrap_setLastPropertyReference("game.js",495,17401,17405) || (t2.y)) > (_wrap_setLastPropertyReference("game.js",495,17408,17427) || ((_wrap_setLastPropertyReference("game.js",495,17408,17420) || (this.options)).height)) - 1) 
    return false;
  if ((_wrap_setLastFunctionCall("game.js",497,17471,17495) || this.getTile((_wrap_setLastPropertyReference("game.js",497,17484,17488) || (t1.x)), (_wrap_setLastPropertyReference("game.js",497,17490,17494) || (t1.y)))) == (_wrap_setLastFunctionCall("game.js",497,17499,17527) || this.getTile((_wrap_setLastPropertyReference("game.js",497,17512,17516) || (t2.x)) - 1, (_wrap_setLastPropertyReference("game.js",497,17522,17526) || (t2.y)))) && (_wrap_setLastFunctionCall("game.js",497,17531,17555) || this.getTile((_wrap_setLastPropertyReference("game.js",497,17544,17548) || (t1.x)), (_wrap_setLastPropertyReference("game.js",497,17550,17554) || (t1.y)))) == (_wrap_setLastFunctionCall("game.js",497,17559,17587) || this.getTile((_wrap_setLastPropertyReference("game.js",497,17572,17576) || (t2.x)) - 2, (_wrap_setLastPropertyReference("game.js",497,17582,17586) || (t2.y)))) && (_wrap_setLastPropertyReference("game.js",497,17591,17595) || (t1.x)) != ((_wrap_setLastPropertyReference("game.js",497,17600,17604) || (t2.x)) - 1)) {
    this.options.hint = (_wrap_setLastAssignment("game.js",498,17625,17863) || ([{'x': (_wrap_setLastPropertyReference("game.js",499,17669,17673) || (t1.x)), 'y': (_wrap_setLastPropertyReference("game.js",500,17696,17700) || (t1.y))}, {'x': (_wrap_setLastPropertyReference("game.js",502,17739,17743) || (t2.x)) - 1, 'y': (_wrap_setLastPropertyReference("game.js",503,17770,17774) || (t2.y))}, {'x': (_wrap_setLastPropertyReference("game.js",505,17813,17817) || (t2.x)) - 2, 'y': (_wrap_setLastPropertyReference("game.js",506,17844,17848) || (t2.y))}]));
    return true;
  }
  if ((_wrap_setLastFunctionCall("game.js",510,17912,17936) || this.getTile((_wrap_setLastPropertyReference("game.js",510,17925,17929) || (t1.x)), (_wrap_setLastPropertyReference("game.js",510,17931,17935) || (t1.y)))) == (_wrap_setLastFunctionCall("game.js",510,17940,17968) || this.getTile((_wrap_setLastPropertyReference("game.js",510,17953,17957) || (t2.x)) + 1, (_wrap_setLastPropertyReference("game.js",510,17963,17967) || (t2.y)))) && (_wrap_setLastFunctionCall("game.js",510,17972,17996) || this.getTile((_wrap_setLastPropertyReference("game.js",510,17985,17989) || (t1.x)), (_wrap_setLastPropertyReference("game.js",510,17991,17995) || (t1.y)))) == (_wrap_setLastFunctionCall("game.js",510,18000,18028) || this.getTile((_wrap_setLastPropertyReference("game.js",510,18013,18017) || (t2.x)) + 2, (_wrap_setLastPropertyReference("game.js",510,18023,18027) || (t2.y)))) && (_wrap_setLastPropertyReference("game.js",510,18032,18036) || (t1.x)) != ((_wrap_setLastPropertyReference("game.js",510,18041,18045) || (t2.x)) + 1)) {
    this.options.hint = (_wrap_setLastAssignment("game.js",511,18066,18304) || ([{'x': (_wrap_setLastPropertyReference("game.js",512,18110,18114) || (t1.x)), 'y': (_wrap_setLastPropertyReference("game.js",513,18137,18141) || (t1.y))}, {'x': (_wrap_setLastPropertyReference("game.js",515,18180,18184) || (t2.x)) + 1, 'y': (_wrap_setLastPropertyReference("game.js",516,18211,18215) || (t2.y))}, {'x': (_wrap_setLastPropertyReference("game.js",518,18254,18258) || (t2.x)) + 2, 'y': (_wrap_setLastPropertyReference("game.js",519,18285,18289) || (t2.y))}]));
    return true;
  }
  if ((_wrap_setLastFunctionCall("game.js",523,18353,18377) || this.getTile((_wrap_setLastPropertyReference("game.js",523,18366,18370) || (t1.x)), (_wrap_setLastPropertyReference("game.js",523,18372,18376) || (t1.y)))) == (_wrap_setLastFunctionCall("game.js",523,18381,18409) || this.getTile((_wrap_setLastPropertyReference("game.js",523,18394,18398) || (t2.x)) + 1, (_wrap_setLastPropertyReference("game.js",523,18404,18408) || (t2.y)))) && (_wrap_setLastFunctionCall("game.js",523,18413,18437) || this.getTile((_wrap_setLastPropertyReference("game.js",523,18426,18430) || (t1.x)), (_wrap_setLastPropertyReference("game.js",523,18432,18436) || (t1.y)))) == (_wrap_setLastFunctionCall("game.js",523,18441,18469) || this.getTile((_wrap_setLastPropertyReference("game.js",523,18454,18458) || (t2.x)) - 1, (_wrap_setLastPropertyReference("game.js",523,18464,18468) || (t2.y)))) && (_wrap_setLastPropertyReference("game.js",523,18473,18477) || (t1.y)) != (_wrap_setLastPropertyReference("game.js",523,18481,18485) || (t2.y))) {
    this.options.hint = (_wrap_setLastAssignment("game.js",524,18501,18739) || ([{'x': (_wrap_setLastPropertyReference("game.js",525,18545,18549) || (t1.x)), 'y': (_wrap_setLastPropertyReference("game.js",526,18572,18576) || (t1.y))}, {'x': (_wrap_setLastPropertyReference("game.js",528,18615,18619) || (t2.x)) + 1, 'y': (_wrap_setLastPropertyReference("game.js",529,18646,18650) || (t2.y))}, {'x': (_wrap_setLastPropertyReference("game.js",531,18689,18693) || (t2.x)) - 1, 'y': (_wrap_setLastPropertyReference("game.js",532,18720,18724) || (t2.y))}]));
    return true;
  }
  if ((_wrap_setLastFunctionCall("game.js",536,18788,18812) || this.getTile((_wrap_setLastPropertyReference("game.js",536,18801,18805) || (t1.x)), (_wrap_setLastPropertyReference("game.js",536,18807,18811) || (t1.y)))) == (_wrap_setLastFunctionCall("game.js",536,18816,18844) || this.getTile((_wrap_setLastPropertyReference("game.js",536,18829,18833) || (t2.x)), (_wrap_setLastPropertyReference("game.js",536,18835,18839) || (t2.y)) - 1)) && (_wrap_setLastFunctionCall("game.js",536,18848,18872) || this.getTile((_wrap_setLastPropertyReference("game.js",536,18861,18865) || (t1.x)), (_wrap_setLastPropertyReference("game.js",536,18867,18871) || (t1.y)))) == (_wrap_setLastFunctionCall("game.js",536,18876,18904) || this.getTile((_wrap_setLastPropertyReference("game.js",536,18889,18893) || (t2.x)), (_wrap_setLastPropertyReference("game.js",536,18895,18899) || (t2.y)) - 2)) && (_wrap_setLastPropertyReference("game.js",536,18908,18912) || (t1.y)) != ((_wrap_setLastPropertyReference("game.js",536,18917,18921) || (t2.y)) - 1)) {
    this.options.hint = (_wrap_setLastAssignment("game.js",537,18942,19180) || ([{'x': (_wrap_setLastPropertyReference("game.js",538,18986,18990) || (t1.x)), 'y': (_wrap_setLastPropertyReference("game.js",539,19013,19017) || (t1.y))}, {'x': (_wrap_setLastPropertyReference("game.js",541,19056,19060) || (t2.x)), 'y': (_wrap_setLastPropertyReference("game.js",542,19083,19087) || (t2.y)) - 1}, {'x': (_wrap_setLastPropertyReference("game.js",544,19130,19134) || (t2.x)), 'y': (_wrap_setLastPropertyReference("game.js",545,19157,19161) || (t2.y)) - 2}]));
    return true;
  }
  if ((_wrap_setLastFunctionCall("game.js",549,19229,19253) || this.getTile((_wrap_setLastPropertyReference("game.js",549,19242,19246) || (t1.x)), (_wrap_setLastPropertyReference("game.js",549,19248,19252) || (t1.y)))) == (_wrap_setLastFunctionCall("game.js",549,19257,19285) || this.getTile((_wrap_setLastPropertyReference("game.js",549,19270,19274) || (t2.x)), (_wrap_setLastPropertyReference("game.js",549,19276,19280) || (t2.y)) + 1)) && (_wrap_setLastFunctionCall("game.js",549,19289,19313) || this.getTile((_wrap_setLastPropertyReference("game.js",549,19302,19306) || (t1.x)), (_wrap_setLastPropertyReference("game.js",549,19308,19312) || (t1.y)))) == (_wrap_setLastFunctionCall("game.js",549,19317,19345) || this.getTile((_wrap_setLastPropertyReference("game.js",549,19330,19334) || (t2.x)), (_wrap_setLastPropertyReference("game.js",549,19336,19340) || (t2.y)) + 2)) && (_wrap_setLastPropertyReference("game.js",549,19349,19353) || (t1.y)) != ((_wrap_setLastPropertyReference("game.js",549,19358,19362) || (t2.y)) + 1)) {
    this.options.hint = (_wrap_setLastAssignment("game.js",550,19383,19621) || ([{'x': (_wrap_setLastPropertyReference("game.js",551,19427,19431) || (t1.x)), 'y': (_wrap_setLastPropertyReference("game.js",552,19454,19458) || (t1.y))}, {'x': (_wrap_setLastPropertyReference("game.js",554,19497,19501) || (t2.x)), 'y': (_wrap_setLastPropertyReference("game.js",555,19524,19528) || (t2.y)) + 1}, {'x': (_wrap_setLastPropertyReference("game.js",557,19571,19575) || (t2.x)), 'y': (_wrap_setLastPropertyReference("game.js",558,19598,19602) || (t2.y)) + 2}]));
    return true;
  }
  if ((_wrap_setLastFunctionCall("game.js",562,19670,19694) || this.getTile((_wrap_setLastPropertyReference("game.js",562,19683,19687) || (t1.x)), (_wrap_setLastPropertyReference("game.js",562,19689,19693) || (t1.y)))) == (_wrap_setLastFunctionCall("game.js",562,19698,19726) || this.getTile((_wrap_setLastPropertyReference("game.js",562,19711,19715) || (t2.x)), (_wrap_setLastPropertyReference("game.js",562,19717,19721) || (t2.y)) + 1)) && (_wrap_setLastFunctionCall("game.js",562,19730,19754) || this.getTile((_wrap_setLastPropertyReference("game.js",562,19743,19747) || (t1.x)), (_wrap_setLastPropertyReference("game.js",562,19749,19753) || (t1.y)))) == (_wrap_setLastFunctionCall("game.js",562,19758,19786) || this.getTile((_wrap_setLastPropertyReference("game.js",562,19771,19775) || (t2.x)), (_wrap_setLastPropertyReference("game.js",562,19777,19781) || (t2.y)) - 1)) && (_wrap_setLastPropertyReference("game.js",562,19790,19794) || (t1.x)) != (_wrap_setLastPropertyReference("game.js",562,19798,19802) || (t2.x))) {
    this.options.hint = (_wrap_setLastAssignment("game.js",563,19818,20056) || ([{'x': (_wrap_setLastPropertyReference("game.js",564,19862,19866) || (t1.x)), 'y': (_wrap_setLastPropertyReference("game.js",565,19889,19893) || (t1.y))}, {'x': (_wrap_setLastPropertyReference("game.js",567,19932,19936) || (t2.x)), 'y': (_wrap_setLastPropertyReference("game.js",568,19959,19963) || (t2.y)) + 1}, {'x': (_wrap_setLastPropertyReference("game.js",570,20006,20010) || (t2.x)), 'y': (_wrap_setLastPropertyReference("game.js",571,20033,20037) || (t2.y)) - 1}]));
    return true;
  }
  return false;
}, checkmoves: function() {
_wrap_addFunctionToMap('game.js', 577, 20138,21224);

  for (var x = 0; x <= (_wrap_setLastPropertyReference("game.js",578,20181,20200) || ((_wrap_setLastPropertyReference("game.js",578,20181,20193) || (this.options)).height)) - 1; x++) {
    for (var y = 0; y <= (_wrap_setLastPropertyReference("game.js",579,20246,20264) || ((_wrap_setLastPropertyReference("game.js",579,20246,20258) || (this.options)).width)) - 1; y++) {
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

  this.options.checklinesrunning = (_wrap_setLastAssignment("game.js",617,21265,21302) || (true));
  var left_count = [];
  var top_count = 0;
  var lines = (_wrap_setLastFunctionCall("game.js",620,21380,21390) || new Hash());
  var count = 0;
  var count2 = 0;
  for (var x = 0; x <= (_wrap_setLastPropertyReference("game.js",623,21468,21486) || ((_wrap_setLastPropertyReference("game.js",623,21468,21480) || (this.options)).width)) - 1; x++) {
    for (var y = 0; y <= (_wrap_setLastPropertyReference("game.js",624,21532,21551) || ((_wrap_setLastPropertyReference("game.js",624,21532,21544) || (this.options)).height)) - 1; y++) {
      if (y == 0 || (_wrap_setLastFunctionCall("game.js",625,21594,21612) || this.getTile(x, y)) == 0) 
        top_count = (_wrap_setLastAssignment("game.js",626,21639,21652) || (0));
      if ((_wrap_setLastFunctionCall("game.js",627,21674,21692) || this.getTile(x, y)) == (_wrap_setLastFunctionCall("game.js",627,21696,21718) || this.getTile(x, y - 1))) 
        top_count++;
      if ((_wrap_setLastFunctionCall("game.js",629,21773,21791) || this.getTile(x, y)) != (_wrap_setLastFunctionCall("game.js",629,21795,21817) || this.getTile(x, y + 1))) {
        if (top_count >= 2) {
          lines[count++] = (_wrap_setLastAssignment("game.js",631,21887,22108) || ({'type': 'col', 'size': top_count + 1, 'x': x, 'y': y - top_count}));
        }
        top_count = (_wrap_setLastAssignment("game.js",638,22152,22165) || (0));
      }
      if (x == 0 || (_wrap_setLastFunctionCall("game.js",640,22215,22233) || this.getTile(x, y)) == 0) {
        left_count[y] = (_wrap_setLastAssignment("game.js",641,22262,22279) || (0));
      }
      if ((_wrap_setLastFunctionCall("game.js",643,22319,22337) || this.getTile(x, y)) == (_wrap_setLastFunctionCall("game.js",643,22341,22363) || this.getTile(x - 1, y))) {
        left_count[y]++;
      }
      if ((_wrap_setLastFunctionCall("game.js",646,22442,22460) || this.getTile(x, y)) != (_wrap_setLastFunctionCall("game.js",646,22464,22486) || this.getTile(x + 1, y))) {
        if (left_count[y] >= 2) {
          lines[count++] = (_wrap_setLastAssignment("game.js",648,22560,22789) || ({'type': 'row', 'size': left_count[y] + 1, 'x': x - left_count[y], 'y': y}));
        }
        left_count[y] = (_wrap_setLastAssignment("game.js",655,22833,22850) || (0));
      }
    }
  }
  if (count > 0) {
    this.options.haslines = (_wrap_setLastAssignment("game.js",660,22931,22959) || (true));
    this.options.lines = (_wrap_setLastAssignment("game.js",661,22973,22999) || (lines));
  } else {
    this.options.haslines = (_wrap_setLastAssignment("game.js",663,23030,23059) || (false));
    this.options.lines = (_wrap_setLastAssignment("game.js",664,23073,23099) || (false));
  }
  this.options.checklinesrunning = (_wrap_setLastAssignment("game.js",666,23119,23157) || (false));
  return (_wrap_setLastPropertyReference("game.js",667,23174,23195) || ((_wrap_setLastPropertyReference("game.js",667,23174,23186) || (this.options)).haslines));
}, deleteLines: function() {
_wrap_addFunctionToMap('game.js', 669, 23221,24966);

  if (!(_wrap_setLastPropertyReference("game.js",670,23248,23267) || (this.options.lines))) 
    return;
  var bonus = 0;
(_wrap_setLastFunctionCall("game.js",673,23319,24749) ||   this.options.lines.each((_wrap_setLastFunctionCall("game.js",703,23343,24748) || function(value, key) {
_wrap_addFunctionToMap('game.js', 673, 23343,24737);

  if ((_wrap_setLastPropertyReference("game.js",674,23383,23393) || (value.type)) == "row") {
    (_wrap_setLastPropertyReference("game.js",675,23422,23442) || (this.chainreaction++));
    for (var i = (_wrap_setLastPropertyReference("game.js",676,23473,23480) || (value.x)); i < ((_wrap_setLastPropertyReference("game.js",676,23487,23494) || (value.x)) + (_wrap_setLastPropertyReference("game.js",676,23497,23507) || (value.size))); i++) {
(_wrap_setLastFunctionCall("game.js",677,23537,23563) ||       this.clearTile(i, (_wrap_setLastPropertyReference("game.js",677,23555,23562) || (value.y))));
      this.options.points = (_wrap_setLastAssignment("game.js",678,23585,23631) || ((_wrap_setLastPropertyReference("game.js",678,23607,23626) || ((_wrap_setLastPropertyReference("game.js",678,23607,23619) || (this.options)).points)) + 10));
(_wrap_setLastFunctionCall("game.js",679,23653,23685) ||       this.pointEffect(i, (_wrap_setLastPropertyReference("game.js",679,23673,23680) || (value.y)), 10));
      (_wrap_setLastPropertyReference("game.js",680,23707,23731) || (this.options.tilecount++));
    }
    this.options.time = (_wrap_setLastAssignment("game.js",682,23767,23808) || ((_wrap_setLastPropertyReference("game.js",682,23787,23804) || ((_wrap_setLastPropertyReference("game.js",682,23787,23799) || (this.options)).time)) + 1));
    if ((_wrap_setLastPropertyReference("game.js",683,23830,23840) || (value.size)) > 3) {
      this.options.points = (_wrap_setLastAssignment("game.js",684,23868,23929) || ((_wrap_setLastPropertyReference("game.js",684,23890,23909) || ((_wrap_setLastPropertyReference("game.js",684,23890,23902) || (this.options)).points)) + ((_wrap_setLastPropertyReference("game.js",684,23913,23923) || (value.size)) * 10)));
      this.options.time = (_wrap_setLastAssignment("game.js",685,23951,23992) || ((_wrap_setLastPropertyReference("game.js",685,23971,23988) || ((_wrap_setLastPropertyReference("game.js",685,23971,23983) || (this.options)).time)) + 3));
    }
    bonus++;
  } else if ((_wrap_setLastPropertyReference("game.js",688,24060,24070) || (value.type)) == "col") {
    (_wrap_setLastPropertyReference("game.js",689,24099,24119) || (this.chainreaction++));
    for (var i = (_wrap_setLastPropertyReference("game.js",690,24150,24157) || (value.y)); i < ((_wrap_setLastPropertyReference("game.js",690,24164,24171) || (value.y)) + (_wrap_setLastPropertyReference("game.js",690,24174,24184) || (value.size))); i++) {
(_wrap_setLastFunctionCall("game.js",691,24214,24240) ||       this.clearTile((_wrap_setLastPropertyReference("game.js",691,24229,24236) || (value.x)), i));
      this.options.points = (_wrap_setLastAssignment("game.js",692,24262,24308) || ((_wrap_setLastPropertyReference("game.js",692,24284,24303) || ((_wrap_setLastPropertyReference("game.js",692,24284,24296) || (this.options)).points)) + 10));
(_wrap_setLastFunctionCall("game.js",693,24330,24362) ||       this.pointEffect((_wrap_setLastPropertyReference("game.js",693,24347,24354) || (value.x)), i, 10));
      (_wrap_setLastPropertyReference("game.js",694,24384,24408) || (this.options.tilecount++));
    }
    this.options.time = (_wrap_setLastAssignment("game.js",696,24444,24485) || ((_wrap_setLastPropertyReference("game.js",696,24464,24481) || ((_wrap_setLastPropertyReference("game.js",696,24464,24476) || (this.options)).time)) + 1));
    if ((_wrap_setLastPropertyReference("game.js",697,24507,24517) || (value.size)) > 3) {
      this.options.points = (_wrap_setLastAssignment("game.js",698,24545,24606) || ((_wrap_setLastPropertyReference("game.js",698,24567,24586) || ((_wrap_setLastPropertyReference("game.js",698,24567,24579) || (this.options)).points)) + ((_wrap_setLastPropertyReference("game.js",698,24590,24600) || (value.size)) * 10)));
      this.options.time = (_wrap_setLastAssignment("game.js",699,24628,24669) || ((_wrap_setLastPropertyReference("game.js",699,24648,24665) || ((_wrap_setLastPropertyReference("game.js",699,24648,24660) || (this.options)).time)) + 3));
    }
    bonus++;
  }
}.bind(this))));
  if (bonus > 1) {
    this.options.points = (_wrap_setLastAssignment("game.js",705,24788,24844) || ((_wrap_setLastPropertyReference("game.js",705,24810,24829) || ((_wrap_setLastPropertyReference("game.js",705,24810,24822) || (this.options)).points)) + (bonus * 50)));
  }
(_wrap_setLastFunctionCall("game.js",707,24864,24890) ||   this.updatePointsDisplay());
(_wrap_setLastFunctionCall("game.js",708,24900,24959) ||   this.chain((_wrap_setLastFunctionCall("game.js",708,24911,24958) || this.tumble.delay((_wrap_setLastPropertyReference("game.js",708,24929,24947) || ((_wrap_setLastPropertyReference("game.js",708,24929,24941) || (this.options)).delay)) * 2, this))));
}, doTimer: function() {
_wrap_addFunctionToMap('game.js', 710, 24981,25181);

  (_wrap_setLastPropertyReference("game.js",711,25003,25022) || (this.options.time--));
(_wrap_setLastFunctionCall("game.js",712,25032,25056) ||   this.updateTimeDisplay());
  if ((_wrap_setLastPropertyReference("game.js",713,25070,25087) || ((_wrap_setLastPropertyReference("game.js",713,25070,25082) || (this.options)).time)) <= 0) 
    (_wrap_setLastFunctionCall("game.js",714,25106,25121) ||   this.gameOver());
  this.timer = (_wrap_setLastAssignment("game.js",715,25131,25174) || ((_wrap_setLastFunctionCall("game.js",715,25144,25174) || this.doTimer.delay(1000, this))));
}, gameOver: function() {
_wrap_addFunctionToMap('game.js', 717, 25197,25525);

(_wrap_setLastFunctionCall("game.js",718,25219,25237) ||   $clear((_wrap_setLastPropertyReference("game.js",718,25226,25236) || (this.chain))));
(_wrap_setLastFunctionCall("game.js",719,25247,25265) ||   $clear((_wrap_setLastPropertyReference("game.js",719,25254,25264) || (this.timer))));
  (_wrap_setLastFunctionCall("game.js",720,25275,25297) || $((_wrap_setLastPropertyReference("game.js",720,25277,25296) || ((_wrap_setLastPropertyReference("game.js",720,25277,25289) || (this.options)).infoid)))).innerHTML = (_wrap_setLastAssignment("game.js",720,25275,25331) || ((_wrap_setLastPropertyReference("game.js",720,25310,25331) || ((_wrap_setLastPropertyReference("game.js",720,25310,25322) || (this.options)).gameover))));
  for (var x = 0; x <= (_wrap_setLastPropertyReference("game.js",721,25362,25381) || ((_wrap_setLastPropertyReference("game.js",721,25362,25374) || (this.options)).height)) - 1; x++) {
    for (var y = 0; y <= (_wrap_setLastPropertyReference("game.js",722,25427,25445) || ((_wrap_setLastPropertyReference("game.js",722,25427,25439) || (this.options)).width)) - 1; y++) {
(_wrap_setLastFunctionCall("game.js",723,25474,25494) ||       this.clearTile(x, y));
    }
  }
}, nextLevel: function() {
_wrap_addFunctionToMap('game.js', 727, 25542,25953);

  this.levelpause = (_wrap_setLastAssignment("game.js",728,25564,25586) || (true));
(_wrap_setLastFunctionCall("game.js",729,25596,25614) ||   $clear((_wrap_setLastPropertyReference("game.js",729,25603,25613) || (this.timer))));
  (_wrap_setLastFunctionCall("game.js",730,25624,25646) || $((_wrap_setLastPropertyReference("game.js",730,25626,25645) || ((_wrap_setLastPropertyReference("game.js",730,25626,25638) || (this.options)).infoid)))).innerHTML = (_wrap_setLastAssignment("game.js",730,25624,25703) || ((_wrap_setLastPropertyReference("game.js",730,25659,25703) || ((_wrap_setLastPropertyReference("game.js",730,25659,25678) || ((_wrap_setLastPropertyReference("game.js",730,25659,25671) || (this.options)).levels))[(_wrap_setLastPropertyReference("game.js",730,25679,25697) || ((_wrap_setLastPropertyReference("game.js",730,25679,25691) || (this.options)).level))].text))));
(_wrap_setLastFunctionCall("game.js",731,25713,25759) ||   this.chain((_wrap_setLastFunctionCall("game.js",731,25724,25758) || this.doNextLevel.delay(3000, this))));
  for (var x = 0; x <= (_wrap_setLastPropertyReference("game.js",732,25790,25809) || ((_wrap_setLastPropertyReference("game.js",732,25790,25802) || (this.options)).height)) - 1; x++) {
    for (var y = 0; y <= (_wrap_setLastPropertyReference("game.js",733,25855,25873) || ((_wrap_setLastPropertyReference("game.js",733,25855,25867) || (this.options)).width)) - 1; y++) {
(_wrap_setLastFunctionCall("game.js",734,25902,25922) ||       this.clearTile(x, y));
    }
  }
}, doNextLevel: function() {
_wrap_addFunctionToMap('game.js', 738, 25972,26152);

  (_wrap_setLastPropertyReference("game.js",739,25994,26014) || (this.options.level++));
  if ((_wrap_setLastPropertyReference("game.js",740,26028,26046) || ((_wrap_setLastPropertyReference("game.js",740,26028,26040) || (this.options)).level)) > 9) 
    this.options.level = (_wrap_setLastAssignment("game.js",741,26064,26086) || (9));
(_wrap_setLastFunctionCall("game.js",742,26096,26112) ||   this.clearGame());
  this.levelpause = (_wrap_setLastAssignment("game.js",743,26122,26145) || (false));
}, updatePointsDisplay: function() {
_wrap_addFunctionToMap('game.js', 745, 26179,26426);

  (_wrap_setLastFunctionCall("game.js",746,26201,26225) || $((_wrap_setLastPropertyReference("game.js",746,26203,26224) || ((_wrap_setLastPropertyReference("game.js",746,26203,26215) || (this.options)).pointsid)))).innerHTML = (_wrap_setLastAssignment("game.js",746,26201,26257) || ((_wrap_setLastPropertyReference("game.js",746,26238,26257) || ((_wrap_setLastPropertyReference("game.js",746,26238,26250) || (this.options)).points))));
  (_wrap_setLastFunctionCall("game.js",747,26267,26289) || $((_wrap_setLastPropertyReference("game.js",747,26269,26288) || ((_wrap_setLastPropertyReference("game.js",747,26269,26281) || (this.options)).tileid)))).innerHTML = (_wrap_setLastAssignment("game.js",747,26267,26324) || ((_wrap_setLastPropertyReference("game.js",747,26302,26324) || ((_wrap_setLastPropertyReference("game.js",747,26302,26314) || (this.options)).tilecount))));
  (_wrap_setLastFunctionCall("game.js",748,26334,26359) || $((_wrap_setLastPropertyReference("game.js",748,26336,26358) || ((_wrap_setLastPropertyReference("game.js",748,26336,26348) || (this.options)).reqtileid)))).innerHTML = (_wrap_setLastAssignment("game.js",748,26334,26419) || ((_wrap_setLastPropertyReference("game.js",748,26372,26419) || ((_wrap_setLastPropertyReference("game.js",748,26372,26391) || ((_wrap_setLastPropertyReference("game.js",748,26372,26384) || (this.options)).levels))[(_wrap_setLastPropertyReference("game.js",748,26392,26410) || ((_wrap_setLastPropertyReference("game.js",748,26392,26404) || (this.options)).level))].reqtile))));
}, updateLevelDisplay: function() {
_wrap_addFunctionToMap('game.js', 750, 26452,26539);

  (_wrap_setLastFunctionCall("game.js",751,26474,26497) || $((_wrap_setLastPropertyReference("game.js",751,26476,26496) || ((_wrap_setLastPropertyReference("game.js",751,26476,26488) || (this.options)).levelid)))).innerHTML = (_wrap_setLastAssignment("game.js",751,26474,26532) || ((_wrap_setLastPropertyReference("game.js",751,26510,26528) || ((_wrap_setLastPropertyReference("game.js",751,26510,26522) || (this.options)).level)) + 1));
}, updateTimeDisplay: function() {
_wrap_addFunctionToMap('game.js', 753, 26564,26781);

  (_wrap_setLastFunctionCall("game.js",754,26586,26608) || $((_wrap_setLastPropertyReference("game.js",754,26588,26607) || ((_wrap_setLastPropertyReference("game.js",754,26588,26600) || (this.options)).timeid)))).innerHTML = (_wrap_setLastAssignment("game.js",754,26586,26638) || ((_wrap_setLastPropertyReference("game.js",754,26621,26638) || ((_wrap_setLastPropertyReference("game.js",754,26621,26633) || (this.options)).time))));
  var barpos = -260 + (_wrap_setLastPropertyReference("game.js",755,26668,26685) || ((_wrap_setLastPropertyReference("game.js",755,26668,26680) || (this.options)).time));
(_wrap_setLastFunctionCall("game.js",756,26695,26774) ||   (_wrap_setLastFunctionCall("game.js",756,26695,26718) || $((_wrap_setLastPropertyReference("game.js",756,26697,26717) || ((_wrap_setLastPropertyReference("game.js",756,26697,26709) || (this.options)).timebar)))).setStyle("background-position", "" + barpos + "px 0px"));
}, pointEffect: function(x, y, points) {
_wrap_addFunctionToMap('game.js', 758, 26800,27818);

  (_wrap_setLastPropertyReference("game.js",759,26834,26842) || (this.fxp))[x + "_" + y] = (_wrap_setLastAssignment("game.js",759,26834,27219) || ((_wrap_setLastFunctionCall("game.js",759,26858,27219) || new Element('DIV', {'id': "p" + x + "_" + y, 'class': 'points', 'styles': {'position': 'absolute', 'width': 32, 'height': 20, 'top': (y * (_wrap_setLastPropertyReference("game.js",766,27098,27121) || ((_wrap_setLastPropertyReference("game.js",766,27098,27110) || (this.options)).tileheight))) + 8 + 'px', 'left': (x * (_wrap_setLastPropertyReference("game.js",767,27164,27186) || ((_wrap_setLastPropertyReference("game.js",767,27164,27176) || (this.options)).tilewidth))) + 'px'}}))));
(_wrap_setLastFunctionCall("game.js",770,27229,27288) ||   (_wrap_setLastPropertyReference("game.js",770,27229,27237) || (this.fxp))[x + "_" + y].injectInside((_wrap_setLastFunctionCall("game.js",770,27264,27287) || $((_wrap_setLastPropertyReference("game.js",770,27266,27286) || ((_wrap_setLastPropertyReference("game.js",770,27266,27278) || (this.options)).fieldid))))));
  (_wrap_setLastPropertyReference("game.js",771,27298,27306) || (this.fxp))[x + "_" + y].innerHTML = (_wrap_setLastAssignment("game.js",771,27298,27338) || (points));
  (_wrap_setLastPropertyReference("game.js",772,27348,27356) || (this.fxp))[x + "_" + y] = (_wrap_setLastAssignment("game.js",772,27348,27639) || ((_wrap_setLastFunctionCall("game.js",772,27372,27639) || new (_wrap_setLastPropertyReference("game.js",772,27376,27384) || (Fx.Morph))((_wrap_setLastFunctionCall("game.js",772,27385,27405) || $("p" + x + "_" + y)), {duration: (_wrap_setLastPropertyReference("game.js",773,27431,27449) || ((_wrap_setLastPropertyReference("game.js",773,27431,27443) || (this.options)).delay)) * 10, wait: false, transition: (_wrap_setLastPropertyReference("game.js",775,27505,27534) || ((_wrap_setLastPropertyReference("game.js",775,27505,27524) || ((_wrap_setLastPropertyReference("game.js",775,27505,27519) || (Fx.Transitions)).Sine)).easeInOut)), fps: (_wrap_setLastPropertyReference("game.js",776,27553,27569) || ((_wrap_setLastPropertyReference("game.js",776,27553,27565) || (this.options)).fps)), onComplete: (_wrap_setLastFunctionCall("game.js",777,27595,27628) || this.onFxplodeComplete.bind(this))}))));
(_wrap_setLastFunctionCall("game.js",779,27649,27811) ||   (_wrap_setLastPropertyReference("game.js",779,27649,27657) || (this.fxp))[x + "_" + y].start({'top': ((y * (_wrap_setLastPropertyReference("game.js",780,27704,27727) || ((_wrap_setLastPropertyReference("game.js",780,27704,27716) || (this.options)).tileheight))) + 8 - ((_wrap_setLastPropertyReference("game.js",780,27736,27759) || ((_wrap_setLastPropertyReference("game.js",780,27736,27748) || (this.options)).tileheight)) * 2)) + 'px', 'opacity': 0.4}));
}};
var jewel = (_wrap_setLastFunctionCall("game.js",785,27834,27856) || new Class(gameOptions));
(_wrap_setLastFunctionCall("game.js",786,27858,27930) || window.addEvent('domready', function() {
_wrap_addFunctionToMap('game.js', 786, 27886,27929);

  var game = (_wrap_setLastFunctionCall("game.js",787,27915,27926) || new jewel());
}));
