var leglobal = true;

function stop(ownScope) {
    ownScope = 1; 
    var blub = 2; 
    var x = i * 2;
    var y = function(blub) {
        ownScope = 2;
        
        leglobal = false;
        
        var t = function(lol) {
            lol = 3;
            blub = 5;
            ownScope = 10;
            iAmGlobalPropz = 5;
            
            t = 3;
        };
        
        blub = 1000;
    };
    
    blub = 7;
}

ownScope = 3;

var example = 1;

