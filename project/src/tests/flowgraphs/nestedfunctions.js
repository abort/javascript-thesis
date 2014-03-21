function nestingOne() {
	function nestingTwo() {
		function nestingThree() {
			function nestingFour() {
				var x = 1;
			}
			
			var x = 10;
		}
		
		var pointerExistent = nestingThree;
	}
	
	var pointerInexistent = nestingFour;
}