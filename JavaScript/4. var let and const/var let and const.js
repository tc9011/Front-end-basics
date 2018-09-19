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


// no hoisting
console.log(a);                         // undefined
var a = 10;

console.log(b);                         // ReferenceError: b is not defined
let b = 10;


// temporal dead zone
var a = 0;

if (true) {
    a = 10;                             // ReferenceError: a is not defined
    let a;
}


// no redeclaring
if (true) {
    let a;
    let a;                              // SyntaxError: Identifier 'a' has already been declared
}

// The `const` declaration creates a read-only reference to a value
const number = 1;
number = 3;                             // TypeError: Assignment to constant variable.

const bar;                              // SyntaxError: Missing initializer in const declaration
bar = 1;


// It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned.
const person = {};
person.name = 'tc9011';

console.log(person.name);               // tc9011
