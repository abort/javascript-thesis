function f() {
	var x = 0;
	var p = {
		a: function(x) {
			var x = 10;
		},

		b: function namedFunction() {
			x = 10;
			namedFunction = inexistentFunction;
		},
		c: function() {
			var privateProperty = {
				x: function(privateScope) {
					privateScope = 2;
				}
			};

			privateScope = 1; // Should be prop

			x = 1;
			privateProperty = "reassignment";
		}
	};

	x = 3;
}