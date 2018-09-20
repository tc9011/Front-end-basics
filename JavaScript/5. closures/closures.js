function foo() {
  var a = 0;
  function bar() {
    console.log(a);
  }
  return bar;
}

var baz = foo();
baz();						                    // 0




function foo() {
  var a = 0;
  function bar() {
    console.log(a);
  }
  baz(bar);
}

function baz(fn) {
  fn();
}

foo();                                          // 0




var a = 0;
setTimeout(function () {
  console.log(a);
}, 1000);

function setTimeout(fn, delay) {
    fn();                                     // 0
}




var a = 0;
(function IIFE() {
  console.log(a);                             // 0
})();




for (var i = 1; i < 5; i++) {
  setTimeout(function() {
    console.log(i)                        // 5 5 5 5
  }, 1000);
}

for (var i = 1; i < 5; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j)                      // 1 2 3 4
    }, 1000);
  })(i);
}



function coolModule() {
  var something = "cool";
  var another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join(' ! '));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
}

var foo = coolModule();

foo.doSomething();                              // cool
foo.doAnother();                                // 1 ! 2 ! 3