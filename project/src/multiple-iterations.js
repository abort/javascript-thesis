function f() {
	return function(){ return function() { return function() { return function() { } } } };
}
f()()()()();