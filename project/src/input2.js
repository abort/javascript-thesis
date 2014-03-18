function doSomething(doSomethingScope) {
  var x = 30;
  var objThatKnowsX = {
    f: function leFunc(funScope) {
      x = 20;
      z = 0;
      leFunc = 1000; // this creates a weird 3rd ghost vertex
      funScope = 5;
    },
    y: function () {  }
  };
  
  leFunc = 20;
}
doSomething = 10;
doSomethingScope = 10;