var lastCall = [];
var callMap = new Map();

function addFunctionToMap(file, line, startPosition, endPosition) {
	if (!firstCallDone) return;

	var thisFunction = {
		file: file,
		line: line,
		start: startPosition,
		end: endPosition
	};
	var currentArray = callMap.get(thisFunction);
	if (currentArray == null) {
		currentArray = [];
	}
	currentArray.push(lastCall);
	callMap.set(thisFunction, currentArray);
}

function setLastFunctionCall(file, line, startPosition, endPosition, result) {
	lastCall = {
		file: file,
		line: line,
		start: startPosition,
		endd: endPosition
	};
	
	firstCallDone = true;

	return result;
}

setLastFunctionCall("jquerysubset.js", 1, 0, 470, (function() {
addFunctionToMap("jquerysubset.js", 1, 1, 467);

	function jQuery(n) {
addFunctionToMap("jquerysubset.js", 2, 15, 224);

		var res = setLastFunctionCall("jquerysubset.js", 3, 48, 72, Object.create(jQuery.fn));
		var elts = setLastFunctionCall("jquerysubset.js", 4, 87, 119, document.getElementsByTagName(n));
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

	setLastFunctionCall("jquerysubset.js", 18, 331, 438, jQuery.fn.extend({
			each: function(cb) {
addFunctionToMap("jquerysubset.js", 19, 359, 434);

				for(var i=0;i<this.length;++i)
					setLastFunctionCall("jquerysubset.js", 21, 414, 428, cb(this[i], i));
			}
	}));

	window.jQuery = jQuery;
})());
setLastFunctionCall("jquerysubset.js", 27, 472, 745, (function($) {
addFunctionToMap("jquerysubset.js", 27, 473, 736);

	$.fn.highlightAlt = function(c) {
addFunctionToMap("jquerysubset.js", 28, 508, 650);

	setLastFunctionCall("jquerysubset.js", 29, 523, 646, this.each(function(elt) {
addFunctionToMap("jquerysubset.js", 29, 533, 645);

		for(var i=1;i<elt.children.length;i+=2)
    		elt.children[i].style.backgroundColor = c;
  		}));
	};

	window.highlightAltRows = function() {
addFunctionToMap("jquerysubset.js", 35, 680, 733);

		setLastFunctionCall("jquerysubset.js", 36, 695, 729, setLastFunctionCall("jquerysubset.js", 36, 695, 705, $('tbody')).highlightAlt('#A9D0F5'));
	};
})(jQuery));