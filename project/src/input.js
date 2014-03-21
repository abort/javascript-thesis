function doSomething(doSomethingScope) {
    {
        var x = 3;
        function nested() {
            var x = "sub";
            
            var z = function() {
                var x = 1;
            };
        }
        var x  =  5;
   } 
    
    x = 10;
}
