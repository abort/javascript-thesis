function bl() {
    var y = 0;
}

function doSomething(doSomethingScope) {
    {
        var doSomethingScope = false;
        var x = 3;
        function nested() {
            var x = "sub";
            
            var z = function() {
                var x = 1;
                
                var t = function y() {
                    var x = 3;
                }
                
                x = 2;
            };
        }
        var x  =  5;
   } 
    
    x = 10;
}
