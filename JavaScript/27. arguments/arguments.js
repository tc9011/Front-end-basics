function f() {
  var args1 = Array.prototype.slice.call(arguments);
  var args2 = [].slice.call(arguments);

  // ES2015
  const args3 = Array.from(arguments);
  const args4 = [...arguments];

  console.log(args1);
  console.log(args2);
  console.log(args3);
  console.log(args4);
}

f('1', '2');
// [ '1', '2' ]
// [ '1', '2' ]
// [ '1', '2' ]
// [ '1', '2' ]