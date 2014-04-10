var dynamicalCallGraph = [];
function dynamicCallGraphWrap(file, callFunc, line, startOffset, endOffset) {
	dynamicalCallGraph.push("call: " + file + "@" + line + "," + startOffset + "," + endOffset);
	console.log("call: " + file + "@" + line + "," + startOffset + "," + endOffset);
	// function has returned something :)
}

function dynamicCallGraphAppend(file, line, startOffset, endOffset) {
	dynamicalCallGraph.push("called: " + (file + "@" + line + "," + startOffset + "," + endOffset));
	console.log("called: " + file + "@" + line + "," + startOffset + "," + endOffset);
}
	dynamicCallGraphWrap("jquerysubset.js", (function() {
dynamicCallGraphAppend("jquerysubset.js", 1, 1, 467);

	function jQuery(n) {
dynamicCallGraphAppend("jquerysubset.js", 2, 15, 224);

		var res = dynamicCallGraphWrap("jquerysubset.js", Object.create(jQuery.fn), 3, 48, 72);
		var elts = dynamicCallGraphWrap("jquerysubset.js", document.getElementsByTagName(n), 4, 87, 119);
		for(var i=0;i<elts.length;++i)
			res[i] = elts[i];
		res.length = elts.length; 
		return res;
	}
 
	jQuery.fn = {
		extend: function ext(obj) {
dynamicCallGraphAppend("jquerysubset.js", 12, 248, 324);

			for(var p in obj)
	    		jQuery.fn[p] = obj[p];
	  	}
	};

	dynamicCallGraphWrap("jquerysubset.js", jQuery.fn.extend({
			each: function(cb) {
dynamicCallGraphAppend("jquerysubset.js", 19, 359, 434);

				for(var i=0;i<this.length;++i)
					dynamicCallGraphWrap("jquerysubset.js", cb(this[i], i), 21, 414, 428);
			}
	}), 18, 331, 438);

	window.jQuery = jQuery;
})(), 1, 0, 470);
dynamicCallGraphWrap("jquerysubset.js", (function($) {
dynamicCallGraphAppend("jquerysubset.js", 27, 473, 736);

	$.fn.highlightAlt = function(c) {
dynamicCallGraphAppend("jquerysubset.js", 28, 508, 650);

	dynamicCallGraphWrap("jquerysubset.js", this.each(function(elt) {
dynamicCallGraphAppend("jquerysubset.js", 29, 533, 645);

		for(var i=1;i<elt.children.length;i+=2)
    		elt.children[i].style.backgroundColor = c;
  		}), 29, 523, 646);
	};

	window.highlightAltRows = function() {
dynamicCallGraphAppend("jquerysubset.js", 35, 680, 733);

		dynamicCallGraphWrap("jquerysubset.js", dynamicCallGraphWrap("jquerysubset.js", $('tbody'), 36, 695, 705).highlightAlt('#A9D0F5'), 36, 695, 729);
	};
})(jQuery), 27, 472, 745);
function replaceAll(find, replace, str) { return str.replace(new RegExp(find, 'g'), replace); }