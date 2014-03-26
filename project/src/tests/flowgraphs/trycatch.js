function f() {
	try {
		var x = 0;
	}
	catch (ex) {
		x = 5;
		var y = ex;
	}

	x = 7;
	ex = 2; // should be a prop as apparently according to firefox ex is unreachable after catch
}