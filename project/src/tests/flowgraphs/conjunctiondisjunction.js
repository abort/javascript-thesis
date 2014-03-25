function f() {
	var x = 1, y = 2;
	var z = x == y || y > x;
	var a = 1 == 1 && z;  
	var b = a || z;
}