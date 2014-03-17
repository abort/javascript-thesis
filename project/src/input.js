var leglobal = true;

function stop(ownScope) {
    ownScope = 1; 
    var blub = 2; 
    var y = function(blub) {
        ownScope = 10;
    };
    
    blub = 7;
}

bla = (1 == 1 ? 10 : 15);

