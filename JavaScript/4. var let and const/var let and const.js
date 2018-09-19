// Variables declared by `let` have their scope in the block for which they are defined
// `var` keyword defines a variable globally, or locally to an entire function regardless of block scope.
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    }
}
a[6]();                                 // 10


var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    }
}
a[6]();                                 // 6


// another example
for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}                                       // 10, 10, 10, 10, 10, 10, 10, 10, 10, 10


for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}                                       // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9




// temporal dead zone
console.log(a);
var a = 10;
