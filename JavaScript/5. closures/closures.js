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