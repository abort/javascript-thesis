function doSomething(doSomethingScope) {
    {
        var x = 3;
        function nested(x) {
            x = "sub";
        }
        var x  =  5;
        var y = function(x) {
            x = 20;
            doSomething(10);
            doSomethingScope = 10;
            hello = 5;
        }
        
        y = x;
    } 
    
    x = 10;
}

x = 0;