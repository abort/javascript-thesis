function f() {
	var x = 10, varName = "x", boolOne = true, boolTwo = false;

	eval(varName) =
		(1 == 1 ?
		(boolOne || boolTwo)
		: (boolOne && boolTwo));
}