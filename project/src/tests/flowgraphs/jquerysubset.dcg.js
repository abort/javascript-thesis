var lastCall = null;
var callMap = {};


function addNativeFunctionToMap(file, line, startPosition, endPosition, nativeFunction) {
	var currentArray = callMap[nativeFunction];
	if (currentArray == null) {
		currentArray = new Array();
	}
	var call = callFunctionString({
		file: file,
		line: line,
		start: startPosition,
		end: endPosition
	});
	if (!doesArrayContain(currentArray, call))
		currentArray.push(call);

	callMap[nativeFunction] = currentArray;
}

function addFunctionToMap(file, line, startPosition, endPosition) {
	if (lastCall == null) return;
	var thisFunction = callFunctionString({
		file: file,
		line: line,
		start: startPosition,
		end: endPosition
	});
	var currentArray = callMap[thisFunction];
	if (currentArray == null) {
		currentArray = new Array();
	}
	if (!doesArrayContain(currentArray, lastCall)) 
		currentArray.push(lastCall);
	console.log("call: " + lastCall);
	callMap[thisFunction] = currentArray;
	lastCall = null; // reset
}

function callFunctionString(f) {
	return f.file + "@" + f.line + ":" + f.start + "-" + f.end;
}

function doesArrayContain(array, call) {
	for (var callee in array) {
		console.log("compare " + callee + " to " + call);
		if (callee == call) return true;
	}
	
	return false;
}

function printCallMap() {
	for (f in callMap) {
		for (c in callMap[f]) {
			console.log(callMap[f][c] + " -> " + f);
		}
	}
}

function setLastFunctionCall(file, line, startPosition, endPosition) {
	lastCall = callFunctionString({
		file: file,
		line: line,
		start: startPosition,
		end: endPosition
	});
}

function isNative(f) {
	if (f == null || f == undefined || f == "") return false;
    return !!f && (typeof f).toLowerCase() == 'function' 
    && (f === Function.prototype 
    || /^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code\]\s*}\s*$/i.test(String(f)));
}

((function() {
var callSite = null;
 if (callSite != null && isNative(callSite)) {
 addNativeFunctionToMap("jquerysubset.js", 1, 0, 470, "");
}
else {
var oldLastCall = lastCall;
setLastFunctionCall("jquerysubset.js", 1, 0, 470);
}
var result = (function() {
addFunctionToMap("jquerysubset.js", 1, 1, 467);

	function jQuery(n) {
addFunctionToMap("jquerysubset.js", 2, 15, 224);

		var res = ((function() {
var callSite = Object.create;
 if (callSite != null && isNative(callSite)) {
 addNativeFunctionToMap("jquerysubset.js", 3, 48, 72, "Object.create");
}
else {
var oldLastCall = lastCall;
setLastFunctionCall("jquerysubset.js", 3, 48, 72);
}
var result = Object.create(jQuery.fn);
lastCall = oldLastCall;
return result;
}).apply(this));
		var elts = ((function() {
var callSite = document.getElementsByTagName;
 if (callSite != null && isNative(callSite)) {
 addNativeFunctionToMap("jquerysubset.js", 4, 87, 119, "document.getElementsByTagName");
}
else {
var oldLastCall = lastCall;
setLastFunctionCall("jquerysubset.js", 4, 87, 119);
}
var result = document.getElementsByTagName(n);
lastCall = oldLastCall;
return result;
}).apply(this));
		for(var i=0;i<elts.length;++i)
			res[i] = elts[i];
		res.length = elts.length; 
		return res;
	}
 
	jQuery.fn = {
		extend: function ext(obj) {
addFunctionToMap("jquerysubset.js", 12, 248, 324);

			for(var p in obj)
	    		jQuery.fn[p] = obj[p];
	  	}
	};

	((function() {
var callSite = jQuery.fn.extend;
 if (callSite != null && isNative(callSite)) {
 addNativeFunctionToMap("jquerysubset.js", 18, 331, 438, "jQuery.fn.extend");
}
else {
var oldLastCall = lastCall;
setLastFunctionCall("jquerysubset.js", 18, 331, 438);
}
var result = jQuery.fn.extend({
			each: function(cb) {
addFunctionToMap("jquerysubset.js", 19, 359, 434);

				for(var i=0;i<this.length;++i)
					((function() {
var callSite = cb;
 if (callSite != null && isNative(callSite)) {
 addNativeFunctionToMap("jquerysubset.js", 21, 414, 428, "cb");
}
else {
var oldLastCall = lastCall;
setLastFunctionCall("jquerysubset.js", 21, 414, 428);
}
var result = cb(this[i], i);
lastCall = oldLastCall;
return result;
}).apply(this));
			}
	});
lastCall = oldLastCall;
return result;
}).apply(this));

	window.jQuery = jQuery;
})();
lastCall = oldLastCall;
return result;
}).apply(this));
((function() {
var callSite = null;
 if (callSite != null && isNative(callSite)) {
 addNativeFunctionToMap("jquerysubset.js", 27, 472, 745, "");
}
else {
var oldLastCall = lastCall;
setLastFunctionCall("jquerysubset.js", 27, 472, 745);
}
var result = (function($) {
addFunctionToMap("jquerysubset.js", 27, 473, 736);

	$.fn.highlightAlt = function(c) {
addFunctionToMap("jquerysubset.js", 28, 508, 650);

	((function() {
var callSite = null;
 if (callSite != null && isNative(callSite)) {
 addNativeFunctionToMap("jquerysubset.js", 29, 523, 646, "");
}
else {
var oldLastCall = lastCall;
setLastFunctionCall("jquerysubset.js", 29, 523, 646);
}
var result = this.each(function(elt) {
addFunctionToMap("jquerysubset.js", 29, 533, 645);

		for(var i=1;i<elt.children.length;i+=2)
    		elt.children[i].style.backgroundColor = c;
  		});
lastCall = oldLastCall;
return result;
}).apply(this));
	};

	window.highlightAltRows = function() {
addFunctionToMap("jquerysubset.js", 35, 680, 733);

		((function() {
var callSite = null;
 if (callSite != null && isNative(callSite)) {
 addNativeFunctionToMap("jquerysubset.js", 36, 695, 729, "");
}
else {
var oldLastCall = lastCall;
setLastFunctionCall("jquerysubset.js", 36, 695, 729);
}
var result = ((function() {
var callSite = $;
 if (callSite != null && isNative(callSite)) {
 addNativeFunctionToMap("jquerysubset.js", 36, 695, 705, "$");
}
else {
var oldLastCall = lastCall;
setLastFunctionCall("jquerysubset.js", 36, 695, 705);
}
var result = $('tbody');
lastCall = oldLastCall;
return result;
}).apply(this)).highlightAlt('#A9D0F5');
lastCall = oldLastCall;
return result;
}).apply(this));
	};
})(jQuery);
lastCall = oldLastCall;
return result;
}).apply(this));