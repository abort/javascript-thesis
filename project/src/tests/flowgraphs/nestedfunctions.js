function nestingOne() {
	function nestingTwo() {
		function nestingThree() {
			function nestingFour() {
				var x = nestingOne; // reachable
				var y = nestingTwo; // reachable
				var z = nestingThree; // reachable
			}
			
			var x = 10;
		}
		
		var pointerReachable = nestingThree;
	}
	var pointerInexistent = nestingThree;
	var pointerReachableTwo = nestingTwo;
	var pointerInexistentTwo = nestingFour;
}