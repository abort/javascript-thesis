function go() {
    var x = 1;
    
    //var x = 3;
    for (var y = 0, z = 2; y < 0; y++) { 
        // todo: var z = 0, does not reach the correct scope
        1;
     }
     x = 3;
     y=2;
     z = 2;
}