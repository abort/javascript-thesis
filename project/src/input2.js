var x = false;
for (var i = 0; i < 10; i++) {
  i = x * 2;
}

function doSomething(doSomethingScope) {
  var x = doSomethingScope * 2;
  var objThatKnowsX = {
    f: function leFunc() {
      x = 20;
      leFunc = 1000;
    },
    y: function () {
      f = 10;
      doSomethingScope = 200;
      iAmGlobalz = true;
    }
  }
  
  for (var inTest in doSomethingScope) {
    inTest = 10;
  }
  inTest = 1000;
}
inTest = 1;

doSomethingScope = 10;

i = 20;