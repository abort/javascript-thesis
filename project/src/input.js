var leglobal = true;

function stop(ownScope) {
    ownScope = 1; 
    var blub = 2; 
    var y = function(blub) {
        ownScope = 10;
    };
    
    var obj = {
      f: function execute() {
         console.log("Execution!");   
        
      },
      x: function () { execute(); }
    };
    
    blub = 7;
}

function newFunction(ownScope) {
    ownScope = 2;
    
}

ownScope = false;
leglobal = 10;