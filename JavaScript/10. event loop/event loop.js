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






console.log(1);
// macro task
setTimeout(function () {
  console.log(2);
  // micro task
  Promise.resolve(100).then(function () {
    console.log('promise')
  })
});
// macro task
let promise = new Promise(function (resolve, reject) {
  console.log(7);
  resolve(100)
}).then(function (data) {
  // micro task
  console.log(data)
});
// macro task
setTimeout(function () {
  console.log(3)
});
console.log(5);

// in browser：1 7 5 100 2 promise 3
// in node：  1 7 5 100 2 3 promise