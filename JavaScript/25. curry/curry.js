// ES5
function curry(fn) {
  var args = [].slice.call(arguments, 1);
  return function() {
    var newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArgs);
  };
}

// ES6
const curry = ( fn, arr = []) => (...args) => ( a => a.length === fn.length? fn(...a) : curry(fn, a))([...arr, ...args])