var a = [1, 1, 2, 2];
var b = [...new Set(a)];
console.log(b);                                     // [ 1, 2 ]