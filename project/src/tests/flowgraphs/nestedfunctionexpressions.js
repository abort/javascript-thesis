function wrapper() {
	var f = function(anonymousScope) {
		anonymousScope = (1 == 1 || 2 == 2); // var declared at line 2
	};

	anonymousScope = 0; // should be a prop

	var nonAnonymousFunction = function ownFunction(p) {
		p = 4; // var reference line 8

		var q = ownFunction; // var reference line 8
	};

	p = 2; // should be prop
	ownFunction = "something"; // should be a prop
}