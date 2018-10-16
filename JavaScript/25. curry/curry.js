// ES5
function curry(fn) {
  var args = [].slice.call(arguments, 1);
  return function() {
    var newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArgs);
  };
}

// ES6
const curry = ( fn, arr = []) => (...args) => ( a => a.length === fn.length? fn(...a) : curry(fn, a))([...arr, ...args]);



// example
function add(a, b) {
  return a + b;
}

var addCurry = curry(add, 1);
console.log(addCurry(2));         // 3

var addCurry2 = curry(add);
console.log(addCurry2(1, 2));     // 3