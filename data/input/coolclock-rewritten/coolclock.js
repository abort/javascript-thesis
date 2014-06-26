window.parent._wrap_staticMeasuredFunctions['coolclock.js'] = 16;
window.parent._wrap_staticMeasuredCalls['coolclock.js'] =78;
window.CoolClock = function(options) {
window.parent._wrap_addFunctionToMap('coolclock.js', 1, 19,72, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("coolclock.js",2,51,69) || this.init(options));
};
CoolClock.config = {tickDelay: 1000, longTickDelay: 15000, defaultRadius: 85, renderRadius: 100, defaultSkin: 'chunkySwiss', showSecs: true, showAmPm: true, skins: {swissRail: {outerBorder: {lineWidth: 2, radius: 95, color: 'black', alpha: 1}, smallIndicator: {lineWidth: 2, startAt: 88, endAt: 92, color: 'black', alpha: 1}, largeIndicator: {lineWidth: 4, startAt: 79, endAt: 92, color: 'black', alpha: 1}, hourHand: {lineWidth: 8, startAt: -15, endAt: 50, color: 'black', alpha: 1}, minuteHand: {lineWidth: 7, startAt: -15, endAt: 75, color: 'black', alpha: 1}, secondHand: {lineWidth: 1, startAt: -20, endAt: 85, color: 'red', alpha: 1}, secondDecoration: {lineWidth: 1, startAt: 70, radius: 4, fillColor: 'red', color: 'red', alpha: 1}}, chunkySwiss: {outerBorder: {lineWidth: 4, radius: 97, color: 'black', alpha: 1}, smallIndicator: {lineWidth: 4, startAt: 89, endAt: 93, color: 'black', alpha: 1}, largeIndicator: {lineWidth: 8, startAt: 80, endAt: 93, color: 'black', alpha: 1}, hourHand: {lineWidth: 12, startAt: -15, endAt: 60, color: 'black', alpha: 1}, minuteHand: {lineWidth: 10, startAt: -15, endAt: 85, color: 'black', alpha: 1}, secondHand: {lineWidth: 4, startAt: -20, endAt: 85, color: 'red', alpha: 1}, secondDecoration: {lineWidth: 2, startAt: 70, radius: 8, fillColor: 'red', color: 'red', alpha: 1}}, chunkySwissOnBlack: {outerBorder: {lineWidth: 4, radius: 97, color: 'white', alpha: 1}, smallIndicator: {lineWidth: 4, startAt: 89, endAt: 93, color: 'white', alpha: 1}, largeIndicator: {lineWidth: 8, startAt: 80, endAt: 93, color: 'white', alpha: 1}, hourHand: {lineWidth: 12, startAt: -15, endAt: 60, color: 'white', alpha: 1}, minuteHand: {lineWidth: 10, startAt: -15, endAt: 85, color: 'white', alpha: 1}, secondHand: {lineWidth: 4, startAt: -20, endAt: 85, color: 'red', alpha: 1}, secondDecoration: {lineWidth: 2, startAt: 70, radius: 8, fillColor: 'red', color: 'red', alpha: 1}}}, isIE: !!document.all, clockTracker: {}, noIdCount: 0};
CoolClock.prototype = {init: function(options) {
window.parent._wrap_addFunctionToMap('coolclock.js', 172, 4407,5942, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.canvasId = options.canvasId;
  this.skinId = options.skinId || CoolClock.config.defaultSkin;
  this.displayRadius = options.displayRadius || CoolClock.config.defaultRadius;
  this.showSecondHand = typeof options.showSecondHand == 'boolean' ? options.showSecondHand : true;
  this.gmtOffset = options.gmtOffset != null && options.gmtOffset != '' ? (window.parent._wrap_setLastFunctionCall("coolclock.js",177,4812,4841) || parseFloat(options.gmtOffset)) : null;
  this.showDigital = typeof options.showDigital == 'boolean' ? options.showDigital : false;
  this.logClock = typeof options.logClock == 'boolean' ? options.logClock : false;
  this.logClockRev = typeof options.logClock == 'boolean' ? options.logClockRev : false;
  this.tickDelay = CoolClock.config[this.showSecondHand ? 'tickDelay' : 'longTickDelay'];
  this.canvas = (window.parent._wrap_setLastFunctionCall("coolclock.js",182,5250,5288) || document.getElementById(this.canvasId));
(window.parent._wrap_setLastFunctionCall("coolclock.js",183,5298,5355) ||   this.canvas.setAttribute('width', this.displayRadius * 2));
(window.parent._wrap_setLastFunctionCall("coolclock.js",184,5365,5423) ||   this.canvas.setAttribute('height', this.displayRadius * 2));
  this.canvas.style.width = this.displayRadius * 2 + 'px';
  this.canvas.style.height = this.displayRadius * 2 + 'px';
  this.renderRadius = CoolClock.config.renderRadius;
  this.scale = this.displayRadius / this.renderRadius;
  this.ctx = (window.parent._wrap_setLastFunctionCall("coolclock.js",189,5695,5723) || this.canvas.getContext('2d'));
(window.parent._wrap_setLastFunctionCall("coolclock.js",190,5733,5771) ||   this.ctx.scale(this.scale, this.scale));
  CoolClock.config.clockTracker[this.canvasId] = this;
  this.active = true;
  this.tickTimeout = null;
(window.parent._wrap_setLastFunctionCall("coolclock.js",194,5903,5914) ||   this.tick());
  return this;
}, fullCircleAt: function(x, y, skin) {
window.parent._wrap_addFunctionToMap('coolclock.js', 197, 5962,6714, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("coolclock.js",198,5994,6009) ||   this.ctx.save());
  this.ctx.globalAlpha = skin.alpha;
  this.ctx.lineWidth = skin.lineWidth;
  if (!CoolClock.config.isIE) {
(window.parent._wrap_setLastFunctionCall("coolclock.js",202,6149,6169) ||     this.ctx.beginPath());
  }
  if (CoolClock.config.isIE) {
    this.ctx.lineWidth = this.ctx.lineWidth * this.scale;
  }
(window.parent._wrap_setLastFunctionCall("coolclock.js",207,6302,6356) ||   this.ctx.arc(x, y, skin.radius, 0, 2 * Math.PI, false));
  if (CoolClock.config.isIE) {
(window.parent._wrap_setLastFunctionCall("coolclock.js",209,6407,6456) ||     this.ctx.arc(x, y, skin.radius, -0.1, 0.1, false));
  }
  if (skin.fillColor) {
    this.ctx.fillStyle = skin.fillColor;
(window.parent._wrap_setLastFunctionCall("coolclock.js",213,6559,6574) ||     this.ctx.fill());
  } else {
    this.ctx.strokeStyle = skin.color;
(window.parent._wrap_setLastFunctionCall("coolclock.js",216,6652,6669) ||     this.ctx.stroke());
  }
(window.parent._wrap_setLastFunctionCall("coolclock.js",218,6689,6707) ||   this.ctx.restore());
}, drawTextAt: function(theText, x, y) {
window.parent._wrap_addFunctionToMap('coolclock.js', 220, 6732,7048, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("coolclock.js",221,6767,6782) ||   this.ctx.save());
  this.ctx.font = '15px sans-serif';
  var tSize = (window.parent._wrap_setLastFunctionCall("coolclock.js",223,6847,6876) || this.ctx.measureText(theText));
  if (!tSize.height) 
    tSize.height = 15;
(window.parent._wrap_setLastFunctionCall("coolclock.js",226,6944,7013) ||   this.ctx.fillText(theText, x - tSize.width / 2, y - tSize.height / 2));
(window.parent._wrap_setLastFunctionCall("coolclock.js",227,7023,7041) ||   this.ctx.restore());
}, lpad2: function(num) {
window.parent._wrap_addFunctionToMap('coolclock.js', 229, 7061,7127, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (num < 10 ? '0' : '') + num;
}, tickAngle: function(second) {
window.parent._wrap_addFunctionToMap('coolclock.js', 232, 7144,7538, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var tweak = 3;
  if (this.logClock) {
    return second == 0 ? 0 : (window.parent._wrap_setLastFunctionCall("coolclock.js",235,7253,7277) || Math.log(second * tweak)) / (window.parent._wrap_setLastFunctionCall("coolclock.js",235,7280,7300) || Math.log(60 * tweak));
  } else if (this.logClockRev) {
    second = (60 - second) % 60;
    return 1 - (second == 0 ? 0 : (window.parent._wrap_setLastFunctionCall("coolclock.js",238,7424,7448) || Math.log(second * tweak)) / (window.parent._wrap_setLastFunctionCall("coolclock.js",238,7451,7471) || Math.log(60 * tweak)));
  } else {
    return second / 60;
  }
}, timeText: function(hour, min, sec) {
window.parent._wrap_addFunctionToMap('coolclock.js', 243, 7554,7822, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var c = CoolClock.config;
  return '' + (c.showAmPm ? hour % 12 == 0 ? 12 : hour % 12 : hour) + ':' + (window.parent._wrap_setLastFunctionCall("coolclock.js",245,7698,7713) || this.lpad2(min)) + (c.showSecs ? ':' + (window.parent._wrap_setLastFunctionCall("coolclock.js",245,7736,7751) || this.lpad2(sec)) : '') + (c.showAmPm ? hour < 12 ? ' am' : ' pm' : '');
  ;
}, radialLineAtAngle: function(angleFraction, skin) {
window.parent._wrap_addFunctionToMap('coolclock.js', 248, 7847,8561, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("coolclock.js",249,7888,7903) ||   this.ctx.save());
(window.parent._wrap_setLastFunctionCall("coolclock.js",250,7913,7969) ||   this.ctx.translate(this.renderRadius, this.renderRadius));
(window.parent._wrap_setLastFunctionCall("coolclock.js",251,7979,8031) ||   this.ctx.rotate(Math.PI * (2 * angleFraction - 0.5)));
  this.ctx.globalAlpha = skin.alpha;
  this.ctx.strokeStyle = skin.color;
  this.ctx.lineWidth = skin.lineWidth;
  if (CoolClock.config.isIE) 
    this.ctx.lineWidth = this.ctx.lineWidth * this.scale;
  if (skin.radius) {
(window.parent._wrap_setLastFunctionCall("coolclock.js",258,8304,8344) ||     this.fullCircleAt(skin.startAt, 0, skin));
  } else {
(window.parent._wrap_setLastFunctionCall("coolclock.js",260,8375,8395) ||     this.ctx.beginPath());
(window.parent._wrap_setLastFunctionCall("coolclock.js",261,8409,8441) ||     this.ctx.moveTo(skin.startAt, 0));
(window.parent._wrap_setLastFunctionCall("coolclock.js",262,8455,8485) ||     this.ctx.lineTo(skin.endAt, 0));
(window.parent._wrap_setLastFunctionCall("coolclock.js",263,8499,8516) ||     this.ctx.stroke());
  }
(window.parent._wrap_setLastFunctionCall("coolclock.js",265,8536,8554) ||   this.ctx.restore());
}, render: function(hour, min, sec) {
window.parent._wrap_addFunctionToMap('coolclock.js', 267, 8575,10232, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var skin = CoolClock.config.skins[this.skinId];
  if (!skin) 
    skin = CoolClock.config.skins[CoolClock.config.defaultSkin];
(window.parent._wrap_setLastFunctionCall("coolclock.js",271,8759,8829) ||   this.ctx.clearRect(0, 0, this.renderRadius * 2, this.renderRadius * 2));
  if (skin.outerBorder) 
    (window.parent._wrap_setLastFunctionCall("coolclock.js",273,8873,8946) ||   this.fullCircleAt(this.renderRadius, this.renderRadius, skin.outerBorder));
  for (var i = 0; i < 60; i++) {
    i % 5 && skin.smallIndicator && (window.parent._wrap_setLastFunctionCall("coolclock.js",275,9031,9093) || this.radialLineAtAngle((window.parent._wrap_setLastFunctionCall("coolclock.js",275,9054,9071) || this.tickAngle(i)), skin.smallIndicator));
    !(i % 5) && skin.largeIndicator && (window.parent._wrap_setLastFunctionCall("coolclock.js",276,9142,9204) || this.radialLineAtAngle((window.parent._wrap_setLastFunctionCall("coolclock.js",276,9165,9182) || this.tickAngle(i)), skin.largeIndicator));
  }
  if (this.showDigital) {
(window.parent._wrap_setLastFunctionCall("coolclock.js",279,9260,9368) ||     this.drawTextAt((window.parent._wrap_setLastFunctionCall("coolclock.js",279,9276,9305) || this.timeText(hour, min, sec)), this.renderRadius, this.renderRadius + this.renderRadius / 2));
  }
  var hourA = hour % 12 * 5 + min / 12, minA = min + sec / 60, secA = sec;
  if (skin.hourHand) 
    (window.parent._wrap_setLastFunctionCall("coolclock.js",283,9500,9560) ||   this.radialLineAtAngle((window.parent._wrap_setLastFunctionCall("coolclock.js",283,9523,9544) || this.tickAngle(hourA)), skin.hourHand));
  if (skin.minuteHand) 
    (window.parent._wrap_setLastFunctionCall("coolclock.js",285,9603,9664) ||   this.radialLineAtAngle((window.parent._wrap_setLastFunctionCall("coolclock.js",285,9626,9646) || this.tickAngle(minA)), skin.minuteHand));
  if (this.showSecondHand && skin.secondHand) 
    (window.parent._wrap_setLastFunctionCall("coolclock.js",287,9730,9791) ||   this.radialLineAtAngle((window.parent._wrap_setLastFunctionCall("coolclock.js",287,9753,9773) || this.tickAngle(secA)), skin.secondHand));
  if (!CoolClock.config.isIE) {
    if (skin.hourDecoration) 
      (window.parent._wrap_setLastFunctionCall("coolclock.js",290,9884,9950) ||     this.radialLineAtAngle((window.parent._wrap_setLastFunctionCall("coolclock.js",290,9907,9928) || this.tickAngle(hourA)), skin.hourDecoration));
    if (skin.minDecoration) 
      (window.parent._wrap_setLastFunctionCall("coolclock.js",292,10004,10068) ||     this.radialLineAtAngle((window.parent._wrap_setLastFunctionCall("coolclock.js",292,10027,10047) || this.tickAngle(minA)), skin.minDecoration));
    if (this.showSecondHand && skin.secondDecoration) 
      (window.parent._wrap_setLastFunctionCall("coolclock.js",294,10148,10215) ||     this.radialLineAtAngle((window.parent._wrap_setLastFunctionCall("coolclock.js",294,10171,10191) || this.tickAngle(secA)), skin.secondDecoration));
  }
}, refreshDisplay: function() {
window.parent._wrap_addFunctionToMap('coolclock.js', 297, 10254,10636, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var now = (window.parent._wrap_setLastFunctionCall("coolclock.js",298,10286,10296) || new Date());
  if (this.gmtOffset != null) {
    var offsetNow = (window.parent._wrap_setLastFunctionCall("coolclock.js",300,10364,10421) || new Date((window.parent._wrap_setLastFunctionCall("coolclock.js",300,10373,10386) || now.valueOf()) + this.gmtOffset * 1000 * 60 * 60));
(window.parent._wrap_setLastFunctionCall("coolclock.js",301,10435,10525) ||     this.render((window.parent._wrap_setLastFunctionCall("coolclock.js",301,10447,10470) || offsetNow.getUTCHours()), (window.parent._wrap_setLastFunctionCall("coolclock.js",301,10472,10497) || offsetNow.getUTCMinutes()), (window.parent._wrap_setLastFunctionCall("coolclock.js",301,10499,10524) || offsetNow.getUTCSeconds())));
  } else {
(window.parent._wrap_setLastFunctionCall("coolclock.js",303,10556,10619) ||     this.render((window.parent._wrap_setLastFunctionCall("coolclock.js",303,10568,10582) || now.getHours()), (window.parent._wrap_setLastFunctionCall("coolclock.js",303,10584,10600) || now.getMinutes()), (window.parent._wrap_setLastFunctionCall("coolclock.js",303,10602,10618) || now.getSeconds())));
  }
}, nextTick: function() {
window.parent._wrap_addFunctionToMap('coolclock.js', 306, 10652,10793, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.tickTimeout = (window.parent._wrap_setLastFunctionCall("coolclock.js",307,10693,10786) || setTimeout('CoolClock.config.clockTracker[\'' + this.canvasId + '\'].tick()', this.tickDelay));
}, stillHere: function() {
window.parent._wrap_addFunctionToMap('coolclock.js', 309, 10810,10892, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("coolclock.js",310,10839,10877) || document.getElementById(this.canvasId)) != null;
}, stop: function() {
window.parent._wrap_addFunctionToMap('coolclock.js', 312, 10904,10992, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.active = false;
(window.parent._wrap_setLastFunctionCall("coolclock.js",314,10955,10985) ||   clearTimeout(this.tickTimeout));
}, start: function() {
window.parent._wrap_addFunctionToMap('coolclock.js', 316, 11005,11119, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!this.active) {
    this.active = true;
(window.parent._wrap_setLastFunctionCall("coolclock.js",319,11091,11102) ||     this.tick());
  }
}, tick: function() {
window.parent._wrap_addFunctionToMap('coolclock.js', 322, 11131,11271, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if ((window.parent._wrap_setLastFunctionCall("coolclock.js",323,11157,11173) || this.stillHere()) && this.active) {
(window.parent._wrap_setLastFunctionCall("coolclock.js",324,11204,11225) ||     this.refreshDisplay());
(window.parent._wrap_setLastFunctionCall("coolclock.js",325,11239,11254) ||     this.nextTick());
  }
}};
CoolClock.findAndCreateClocks = function() {
window.parent._wrap_addFunctionToMap('coolclock.js', 329, 11307,12114, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var canvases = (window.parent._wrap_setLastFunctionCall("coolclock.js",330,11340,11379) || document.getElementsByTagName('canvas'));
  for (var i = 0; i < canvases.length; i++) {
    var fields = (window.parent._wrap_setLastFunctionCall("coolclock.js",332,11450,11496) || (window.parent._wrap_setLastFunctionCall("coolclock.js",332,11450,11482) || canvases[i].className.split(' '))[0].split(':'));
    if (fields[0] == 'CoolClock') {
      if (!canvases[i].id) {
        canvases[i].id = '_coolclock_auto_id_' + CoolClock.config.noIdCount++;
      }
(window.parent._wrap_setLastFunctionCall("coolclock.js",337,11686,12095) ||       new CoolClock({canvasId: canvases[i].id, skinId: fields[1], displayRadius: fields[2], showSecondHand: fields[3] != 'noSeconds', gmtOffset: fields[4], showDigital: fields[5] == 'showDigital', logClock: fields[6] == 'logClock', logClockRev: fields[6] == 'logClockRev'}));
    }
  }
};
if (window.jQuery) 
  (window.parent._wrap_setLastFunctionCall("coolclock.js",351,12139,12192) || (window.parent._wrap_setLastFunctionCall("coolclock.js",351,12139,12155) || jQuery(document)).ready(CoolClock.findAndCreateClocks));
