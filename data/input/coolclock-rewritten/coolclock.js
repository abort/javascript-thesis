window.parent._wrap_staticMeasuredFunctions['coolclock.js'] = 16;
window.parent._wrap_staticMeasuredCalls['coolclock.js'] =78;
window.CoolClock = function(options) {
window.parent._wrap_addFunctionToMap('coolclock.js', 1, 19,69, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("coolclock.js",2,48,66,this.init,false,false) || window.parent._wrap_popCallStack(this.init(options)));
};
CoolClock.config = {tickDelay: 1000, longTickDelay: 15000, defaultRadius: 85, renderRadius: 100, defaultSkin: 'chunkySwiss', showSecs: true, showAmPm: true, skins: {swissRail: {outerBorder: {lineWidth: 2, radius: 95, color: 'black', alpha: 1}, smallIndicator: {lineWidth: 2, startAt: 88, endAt: 92, color: 'black', alpha: 1}, largeIndicator: {lineWidth: 4, startAt: 79, endAt: 92, color: 'black', alpha: 1}, hourHand: {lineWidth: 8, startAt: -15, endAt: 50, color: 'black', alpha: 1}, minuteHand: {lineWidth: 7, startAt: -15, endAt: 75, color: 'black', alpha: 1}, secondHand: {lineWidth: 1, startAt: -20, endAt: 85, color: 'red', alpha: 1}, secondDecoration: {lineWidth: 1, startAt: 70, radius: 4, fillColor: 'red', color: 'red', alpha: 1}}, chunkySwiss: {outerBorder: {lineWidth: 4, radius: 97, color: 'black', alpha: 1}, smallIndicator: {lineWidth: 4, startAt: 89, endAt: 93, color: 'black', alpha: 1}, largeIndicator: {lineWidth: 8, startAt: 80, endAt: 93, color: 'black', alpha: 1}, hourHand: {lineWidth: 12, startAt: -15, endAt: 60, color: 'black', alpha: 1}, minuteHand: {lineWidth: 10, startAt: -15, endAt: 85, color: 'black', alpha: 1}, secondHand: {lineWidth: 4, startAt: -20, endAt: 85, color: 'red', alpha: 1}, secondDecoration: {lineWidth: 2, startAt: 70, radius: 8, fillColor: 'red', color: 'red', alpha: 1}}, chunkySwissOnBlack: {outerBorder: {lineWidth: 4, radius: 97, color: 'white', alpha: 1}, smallIndicator: {lineWidth: 4, startAt: 89, endAt: 93, color: 'white', alpha: 1}, largeIndicator: {lineWidth: 8, startAt: 80, endAt: 93, color: 'white', alpha: 1}, hourHand: {lineWidth: 12, startAt: -15, endAt: 60, color: 'white', alpha: 1}, minuteHand: {lineWidth: 10, startAt: -15, endAt: 85, color: 'white', alpha: 1}, secondHand: {lineWidth: 4, startAt: -20, endAt: 85, color: 'red', alpha: 1}, secondDecoration: {lineWidth: 2, startAt: 70, radius: 8, fillColor: 'red', color: 'red', alpha: 1}}}, isIE: !!document.all, clockTracker: {}, noIdCount: 0};
CoolClock.prototype = {init: function(options) {
window.parent._wrap_addFunctionToMap('coolclock.js', 5, 2067,3459, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.canvasId = options.canvasId;
  this.skinId = options.skinId || CoolClock.config.defaultSkin;
  this.displayRadius = options.displayRadius || CoolClock.config.defaultRadius;
  this.showSecondHand = typeof options.showSecondHand == 'boolean' ? options.showSecondHand : true;
  this.gmtOffset = options.gmtOffset != null && options.gmtOffset != '' ? (window.parent._wrap_setLastFunctionCall("coolclock.js",10,2441,2470,parseFloat,false,false) || window.parent._wrap_popCallStack(parseFloat(options.gmtOffset))) : null;
  this.showDigital = typeof options.showDigital == 'boolean' ? options.showDigital : false;
  this.logClock = typeof options.logClock == 'boolean' ? options.logClock : false;
  this.logClockRev = typeof options.logClock == 'boolean' ? options.logClockRev : false;
  this.tickDelay = CoolClock.config[this.showSecondHand ? 'tickDelay' : 'longTickDelay'];
  this.canvas = (window.parent._wrap_setLastFunctionCall("coolclock.js",15,2849,2887,document.getElementById,false,false) || window.parent._wrap_popCallStack(document.getElementById(this.canvasId)));
(window.parent._wrap_setLastFunctionCall("coolclock.js",16,2891,2948,this.canvas.setAttribute,false,false) || window.parent._wrap_popCallStack(  this.canvas.setAttribute('width', this.displayRadius * 2)));
(window.parent._wrap_setLastFunctionCall("coolclock.js",17,2952,3010,this.canvas.setAttribute,false,false) || window.parent._wrap_popCallStack(  this.canvas.setAttribute('height', this.displayRadius * 2)));
  this.canvas.style.width = this.displayRadius * 2 + 'px';
  this.canvas.style.height = this.displayRadius * 2 + 'px';
  this.renderRadius = CoolClock.config.renderRadius;
  this.scale = this.displayRadius / this.renderRadius;
  this.ctx = (window.parent._wrap_setLastFunctionCall("coolclock.js",22,3252,3280,this.canvas.getContext,false,false) || window.parent._wrap_popCallStack(this.canvas.getContext('2d')));
(window.parent._wrap_setLastFunctionCall("coolclock.js",23,3284,3322,this.ctx.scale,false,false) || window.parent._wrap_popCallStack(  this.ctx.scale(this.scale, this.scale)));
  CoolClock.config.clockTracker[this.canvasId] = this;
  this.active = true;
  this.tickTimeout = null;
(window.parent._wrap_setLastFunctionCall("coolclock.js",27,3430,3441,this.tick,false,false) || window.parent._wrap_popCallStack(  this.tick()));
  return this;
}, fullCircleAt: function(x, y, skin) {
window.parent._wrap_addFunctionToMap('coolclock.js', 29, 3475,4082, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("coolclock.js",30,3500,3515,this.ctx.save,false,false) || window.parent._wrap_popCallStack(  this.ctx.save()));
  this.ctx.globalAlpha = skin.alpha;
  this.ctx.lineWidth = skin.lineWidth;
  if (!CoolClock.config.isIE) {
(window.parent._wrap_setLastFunctionCall("coolclock.js",34,3629,3649,this.ctx.beginPath,false,false) || window.parent._wrap_popCallStack(    this.ctx.beginPath()));
  }
  if (CoolClock.config.isIE) {
    this.ctx.lineWidth = this.ctx.lineWidth * this.scale;
  }
(window.parent._wrap_setLastFunctionCall("coolclock.js",39,3750,3804,this.ctx.arc,false,false) || window.parent._wrap_popCallStack(  this.ctx.arc(x, y, skin.radius, 0, 2 * Math.PI, false)));
  if (CoolClock.config.isIE) {
(window.parent._wrap_setLastFunctionCall("coolclock.js",41,3841,3890,this.ctx.arc,false,false) || window.parent._wrap_popCallStack(    this.ctx.arc(x, y, skin.radius, -0.1, 0.1, false)));
  }
  if (skin.fillColor) {
    this.ctx.fillStyle = skin.fillColor;
(window.parent._wrap_setLastFunctionCall("coolclock.js",45,3965,3980,this.ctx.fill,false,false) || window.parent._wrap_popCallStack(    this.ctx.fill()));
  } else {
    this.ctx.strokeStyle = skin.color;
(window.parent._wrap_setLastFunctionCall("coolclock.js",48,4036,4053,this.ctx.stroke,false,false) || window.parent._wrap_popCallStack(    this.ctx.stroke()));
  }
(window.parent._wrap_setLastFunctionCall("coolclock.js",50,4061,4079,this.ctx.restore,false,false) || window.parent._wrap_popCallStack(  this.ctx.restore()));
}, drawTextAt: function(theText, x, y) {
window.parent._wrap_addFunctionToMap('coolclock.js', 51, 4096,4364, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("coolclock.js",52,4124,4139,this.ctx.save,false,false) || window.parent._wrap_popCallStack(  this.ctx.save()));
  this.ctx.font = '15px sans-serif';
  var tSize = (window.parent._wrap_setLastFunctionCall("coolclock.js",54,4192,4221,this.ctx.measureText,false,false) || window.parent._wrap_popCallStack(this.ctx.measureText(theText)));
  if (!tSize.height) 
    tSize.height = 15;
(window.parent._wrap_setLastFunctionCall("coolclock.js",57,4270,4339,this.ctx.fillText,false,false) || window.parent._wrap_popCallStack(  this.ctx.fillText(theText, x - tSize.width / 2, y - tSize.height / 2)));
(window.parent._wrap_setLastFunctionCall("coolclock.js",58,4343,4361,this.ctx.restore,false,false) || window.parent._wrap_popCallStack(  this.ctx.restore()));
}, lpad2: function(num) {
window.parent._wrap_addFunctionToMap('coolclock.js', 59, 4373,4428, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (num < 10 ? '0' : '') + num;
}, tickAngle: function(second) {
window.parent._wrap_addFunctionToMap('coolclock.js', 61, 4441,4768, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var tweak = 3;
  if (this.logClock) {
    return second == 0 ? 0 : (window.parent._wrap_setLastFunctionCall("coolclock.js",64,4529,4553,Math.log,false,false) || window.parent._wrap_popCallStack(Math.log(second * tweak))) / (window.parent._wrap_setLastFunctionCall("coolclock.js",64,4556,4576,Math.log,false,false) || window.parent._wrap_popCallStack(Math.log(60 * tweak)));
  } else if (this.logClockRev) {
    second = (60 - second) % 60;
    return 1 - (second == 0 ? 0 : (window.parent._wrap_setLastFunctionCall("coolclock.js",67,4678,4702,Math.log,false,false) || window.parent._wrap_popCallStack(Math.log(second * tweak))) / (window.parent._wrap_setLastFunctionCall("coolclock.js",67,4705,4725,Math.log,false,false) || window.parent._wrap_popCallStack(Math.log(60 * tweak))));
  } else {
    return second / 60;
  }
}, timeText: function(hour, min, sec) {
window.parent._wrap_addFunctionToMap('coolclock.js', 71, 4780,5025, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var c = CoolClock.config;
  return '' + (c.showAmPm ? hour % 12 == 0 ? 12 : hour % 12 : hour) + ':' + (window.parent._wrap_setLastFunctionCall("coolclock.js",73,4911,4926,this.lpad2,false,false) || window.parent._wrap_popCallStack(this.lpad2(min))) + (c.showSecs ? ':' + (window.parent._wrap_setLastFunctionCall("coolclock.js",73,4949,4964,this.lpad2,false,false) || window.parent._wrap_popCallStack(this.lpad2(sec))) : '') + (c.showAmPm ? hour < 12 ? ' am' : ' pm' : '');
  ;
}, radialLineAtAngle: function(angleFraction, skin) {
window.parent._wrap_addFunctionToMap('coolclock.js', 75, 5046,5642, (typeof arguments === 'object' ? arguments.callee.caller : null));

(window.parent._wrap_setLastFunctionCall("coolclock.js",76,5080,5095,this.ctx.save,false,false) || window.parent._wrap_popCallStack(  this.ctx.save()));
(window.parent._wrap_setLastFunctionCall("coolclock.js",77,5099,5155,this.ctx.translate,false,false) || window.parent._wrap_popCallStack(  this.ctx.translate(this.renderRadius, this.renderRadius)));
(window.parent._wrap_setLastFunctionCall("coolclock.js",78,5159,5211,this.ctx.rotate,false,false) || window.parent._wrap_popCallStack(  this.ctx.rotate(Math.PI * (2 * angleFraction - 0.5))));
  this.ctx.globalAlpha = skin.alpha;
  this.ctx.strokeStyle = skin.color;
  this.ctx.lineWidth = skin.lineWidth;
  if (CoolClock.config.isIE) 
    this.ctx.lineWidth = this.ctx.lineWidth * this.scale;
  if (skin.radius) {
(window.parent._wrap_setLastFunctionCall("coolclock.js",85,5439,5479,this.fullCircleAt,false,false) || window.parent._wrap_popCallStack(    this.fullCircleAt(skin.startAt, 0, skin)));
  } else {
(window.parent._wrap_setLastFunctionCall("coolclock.js",87,5496,5516,this.ctx.beginPath,false,false) || window.parent._wrap_popCallStack(    this.ctx.beginPath()));
(window.parent._wrap_setLastFunctionCall("coolclock.js",88,5522,5554,this.ctx.moveTo,false,false) || window.parent._wrap_popCallStack(    this.ctx.moveTo(skin.startAt, 0)));
(window.parent._wrap_setLastFunctionCall("coolclock.js",89,5560,5590,this.ctx.lineTo,false,false) || window.parent._wrap_popCallStack(    this.ctx.lineTo(skin.endAt, 0)));
(window.parent._wrap_setLastFunctionCall("coolclock.js",90,5596,5613,this.ctx.stroke,false,false) || window.parent._wrap_popCallStack(    this.ctx.stroke()));
  }
(window.parent._wrap_setLastFunctionCall("coolclock.js",92,5621,5639,this.ctx.restore,false,false) || window.parent._wrap_popCallStack(  this.ctx.restore()));
}, render: function(hour, min, sec) {
window.parent._wrap_addFunctionToMap('coolclock.js', 93, 5652,7110, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var skin = CoolClock.config.skins[this.skinId];
  if (!skin) 
    skin = CoolClock.config.skins[CoolClock.config.defaultSkin];
(window.parent._wrap_setLastFunctionCall("coolclock.js",97,5810,5880,this.ctx.clearRect,false,false) || window.parent._wrap_popCallStack(  this.ctx.clearRect(0, 0, this.renderRadius * 2, this.renderRadius * 2)));
  if (skin.outerBorder) 
    (window.parent._wrap_setLastFunctionCall("coolclock.js",99,5911,5984,this.fullCircleAt,false,false) || window.parent._wrap_popCallStack(  this.fullCircleAt(this.renderRadius, this.renderRadius, skin.outerBorder)));
  for (var i = 0; i < 60; i++) {
    i % 5 && skin.smallIndicator && (window.parent._wrap_setLastFunctionCall("coolclock.js",101,6055,6117,this.radialLineAtAngle,false,false) || window.parent._wrap_popCallStack(this.radialLineAtAngle((window.parent._wrap_setLastFunctionCall("coolclock.js",101,6078,6095,this.tickAngle,false,false) || window.parent._wrap_popCallStack(this.tickAngle(i))), skin.smallIndicator)));
    !(i % 5) && skin.largeIndicator && (window.parent._wrap_setLastFunctionCall("coolclock.js",102,6158,6220,this.radialLineAtAngle,false,false) || window.parent._wrap_popCallStack(this.radialLineAtAngle((window.parent._wrap_setLastFunctionCall("coolclock.js",102,6181,6198,this.tickAngle,false,false) || window.parent._wrap_popCallStack(this.tickAngle(i))), skin.largeIndicator)));
  }
  if (this.showDigital) {
(window.parent._wrap_setLastFunctionCall("coolclock.js",105,6256,6364,this.drawTextAt,false,false) || window.parent._wrap_popCallStack(    this.drawTextAt((window.parent._wrap_setLastFunctionCall("coolclock.js",105,6272,6301,this.timeText,false,false) || window.parent._wrap_popCallStack(this.timeText(hour, min, sec))), this.renderRadius, this.renderRadius + this.renderRadius / 2)));
  }
  var hourA = hour % 12 * 5 + min / 12, minA = min + sec / 60, secA = sec;
  if (skin.hourHand) 
    (window.parent._wrap_setLastFunctionCall("coolclock.js",109,6471,6531,this.radialLineAtAngle,false,false) || window.parent._wrap_popCallStack(  this.radialLineAtAngle((window.parent._wrap_setLastFunctionCall("coolclock.js",109,6494,6515,this.tickAngle,false,false) || window.parent._wrap_popCallStack(this.tickAngle(hourA))), skin.hourHand)));
  if (skin.minuteHand) 
    (window.parent._wrap_setLastFunctionCall("coolclock.js",111,6561,6622,this.radialLineAtAngle,false,false) || window.parent._wrap_popCallStack(  this.radialLineAtAngle((window.parent._wrap_setLastFunctionCall("coolclock.js",111,6584,6604,this.tickAngle,false,false) || window.parent._wrap_popCallStack(this.tickAngle(minA))), skin.minuteHand)));
  if (this.showSecondHand && skin.secondHand) 
    (window.parent._wrap_setLastFunctionCall("coolclock.js",113,6675,6736,this.radialLineAtAngle,false,false) || window.parent._wrap_popCallStack(  this.radialLineAtAngle((window.parent._wrap_setLastFunctionCall("coolclock.js",113,6698,6718,this.tickAngle,false,false) || window.parent._wrap_popCallStack(this.tickAngle(secA))), skin.secondHand)));
  if (!CoolClock.config.isIE) {
    if (skin.hourDecoration) 
      (window.parent._wrap_setLastFunctionCall("coolclock.js",116,6806,6872,this.radialLineAtAngle,false,false) || window.parent._wrap_popCallStack(    this.radialLineAtAngle((window.parent._wrap_setLastFunctionCall("coolclock.js",116,6829,6850,this.tickAngle,false,false) || window.parent._wrap_popCallStack(this.tickAngle(hourA))), skin.hourDecoration)));
    if (skin.minDecoration) 
      (window.parent._wrap_setLastFunctionCall("coolclock.js",118,6909,6973,this.radialLineAtAngle,false,false) || window.parent._wrap_popCallStack(    this.radialLineAtAngle((window.parent._wrap_setLastFunctionCall("coolclock.js",118,6932,6952,this.tickAngle,false,false) || window.parent._wrap_popCallStack(this.tickAngle(minA))), skin.minDecoration)));
    if (this.showSecondHand && skin.secondDecoration) 
      (window.parent._wrap_setLastFunctionCall("coolclock.js",120,7036,7103,this.radialLineAtAngle,false,false) || window.parent._wrap_popCallStack(    this.radialLineAtAngle((window.parent._wrap_setLastFunctionCall("coolclock.js",120,7059,7079,this.tickAngle,false,false) || window.parent._wrap_popCallStack(this.tickAngle(secA))), skin.secondDecoration)));
  }
}, refreshDisplay: function() {
window.parent._wrap_addFunctionToMap('coolclock.js', 122, 7128,7457, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var now = (window.parent._wrap_setLastFunctionCall("coolclock.js",123,7153,7163,Date,false,false) || window.parent._wrap_popCallStack(new Date()));
  if (this.gmtOffset != null) {
    var offsetNow = (window.parent._wrap_setLastFunctionCall("coolclock.js",125,7217,7274,Date,false,false) || window.parent._wrap_popCallStack(new Date((window.parent._wrap_setLastFunctionCall("coolclock.js",125,7226,7239,now.valueOf,false,false) || window.parent._wrap_popCallStack(now.valueOf())) + this.gmtOffset * 1000 * 60 * 60)));
(window.parent._wrap_setLastFunctionCall("coolclock.js",126,7280,7370,this.render,false,false) || window.parent._wrap_popCallStack(    this.render((window.parent._wrap_setLastFunctionCall("coolclock.js",126,7292,7315,offsetNow.getUTCHours,false,false) || window.parent._wrap_popCallStack(offsetNow.getUTCHours())), (window.parent._wrap_setLastFunctionCall("coolclock.js",126,7317,7342,offsetNow.getUTCMinutes,false,false) || window.parent._wrap_popCallStack(offsetNow.getUTCMinutes())), (window.parent._wrap_setLastFunctionCall("coolclock.js",126,7344,7369,offsetNow.getUTCSeconds,false,false) || window.parent._wrap_popCallStack(offsetNow.getUTCSeconds())))));
  } else {
(window.parent._wrap_setLastFunctionCall("coolclock.js",128,7387,7450,this.render,false,false) || window.parent._wrap_popCallStack(    this.render((window.parent._wrap_setLastFunctionCall("coolclock.js",128,7399,7413,now.getHours,false,false) || window.parent._wrap_popCallStack(now.getHours())), (window.parent._wrap_setLastFunctionCall("coolclock.js",128,7415,7431,now.getMinutes,false,false) || window.parent._wrap_popCallStack(now.getMinutes())), (window.parent._wrap_setLastFunctionCall("coolclock.js",128,7433,7449,now.getSeconds,false,false) || window.parent._wrap_popCallStack(now.getSeconds())))));
  }
}, nextTick: function() {
window.parent._wrap_addFunctionToMap('coolclock.js', 130, 7469,7599, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.tickTimeout = (window.parent._wrap_setLastFunctionCall("coolclock.js",131,7503,7596,setTimeout,false,false) || window.parent._wrap_popCallStack(setTimeout('CoolClock.config.clockTracker[\'' + this.canvasId + '\'].tick()', this.tickDelay)));
}, stillHere: function() {
window.parent._wrap_addFunctionToMap('coolclock.js', 132, 7612,7683, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("coolclock.js",133,7634,7672,document.getElementById,false,false) || window.parent._wrap_popCallStack(document.getElementById(this.canvasId))) != null;
}, stop: function() {
window.parent._wrap_addFunctionToMap('coolclock.js', 134, 7691,7762, (typeof arguments === 'object' ? arguments.callee.caller : null));

  this.active = false;
(window.parent._wrap_setLastFunctionCall("coolclock.js",136,7729,7759,clearTimeout,false,false) || window.parent._wrap_popCallStack(  clearTimeout(this.tickTimeout)));
}, start: function() {
window.parent._wrap_addFunctionToMap('coolclock.js', 137, 7771,7852, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!this.active) {
    this.active = true;
(window.parent._wrap_setLastFunctionCall("coolclock.js",140,7834,7845,this.tick,false,false) || window.parent._wrap_popCallStack(    this.tick()));
  }
}, tick: function() {
window.parent._wrap_addFunctionToMap('coolclock.js', 142, 7860,7967, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if ((window.parent._wrap_setLastFunctionCall("coolclock.js",143,7879,7895,this.stillHere,false,false) || window.parent._wrap_popCallStack(this.stillHere())) && this.active) {
(window.parent._wrap_setLastFunctionCall("coolclock.js",144,7918,7939,this.refreshDisplay,false,false) || window.parent._wrap_popCallStack(    this.refreshDisplay()));
(window.parent._wrap_setLastFunctionCall("coolclock.js",145,7945,7960,this.nextTick,false,false) || window.parent._wrap_popCallStack(    this.nextTick()));
  }
}};
CoolClock.findAndCreateClocks = function() {
window.parent._wrap_addFunctionToMap('coolclock.js', 148, 8002,8622, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var canvases = (window.parent._wrap_setLastFunctionCall("coolclock.js",149,8032,8071,document.getElementsByTagName,false,false) || window.parent._wrap_popCallStack(document.getElementsByTagName('canvas')));
  for (var i = 0; i < canvases.length; i++) {
    var fields = (window.parent._wrap_setLastFunctionCall("coolclock.js",151,8136,8182,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("coolclock.js",151,8136,8168,canvases[i].className.split,false,false) || window.parent._wrap_popCallStack(canvases[i].className.split(' ')))[0].split(':')));
    if (fields[0] == 'CoolClock') {
      if (!canvases[i].id) {
        canvases[i].id = '_coolclock_auto_id_' + CoolClock.config.noIdCount++;
      }
(window.parent._wrap_setLastFunctionCall("coolclock.js",156,8342,8609,CoolClock,false,false) || window.parent._wrap_popCallStack(      new CoolClock({canvasId: canvases[i].id, skinId: fields[1], displayRadius: fields[2], showSecondHand: fields[3] != 'noSeconds', gmtOffset: fields[4], showDigital: fields[5] == 'showDigital', logClock: fields[6] == 'logClock', logClockRev: fields[6] == 'logClockRev'})));
    }
  }
};
if (window.jQuery) 
  (window.parent._wrap_setLastFunctionCall("coolclock.js",161,8646,8699,null,true,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("coolclock.js",161,8646,8662,jQuery,true,false) || window.parent._wrap_popCallStack(jQuery(document))).ready(CoolClock.findAndCreateClocks)));
