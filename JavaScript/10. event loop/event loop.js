$.on('button', 'click', function onClick() {
  setTimeout(function () {
    console.log('You clicked the button!');
  }, 2000);
});

console.log('Hi!');

setTimeout(function timeout() {
  console.log('Click the button!');
}, 5000);

console.log('Welcome to loupe.');
// Hi!
// Welcome to loupe.
// Click the button!

// when you click the button, it will print:
// You clicked the button!


setTimeout(function () {
  console.log(1);
});

new Promise(function (resolve, reject) {
  console.log(2)
  resolve(3)
}).then(function (val) {
  console.log(val);
});

// 2
// 3
// 1