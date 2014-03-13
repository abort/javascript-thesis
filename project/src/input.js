var leglobal = true;

function stop(ownScope) {
    console.log('haha');
    ownScope = 1; 
    var blub = 2;
}

ownScope = 2;