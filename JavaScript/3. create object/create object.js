// using object literal
var o = {
  name: 'tc9011',
};
console.log(o.name);                              // tc9011


// using `new Object()` syntax
var o1 = new Object({name: 'tc9011'});
console.log(o1.name);                             // tc9011


// Object Constructor
function Human(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
}

var tc = new Human('t', 'c');
console.log(tc.fullName());                      // t c


// using `Object.create()` syntax
const person = {
  isHuman: true,
};

const me = Object.create(person);
console.log(me.isHman);                         // true

me.name = 'tc9011';                             // "name" is a property set on "me", but not on "person"
me.isHman = true;                               // inherited properties can be overwritten


// create object by prototype
function Human() {}

Human.prototype.firstName = 't';
Human.prototype.lastName = 'c';
Human.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName;
};

var p1 = new Human();
console.log(p1.firstName);                    // t
console.log(p1.lastName);                     // c
p1.fullName();                                // t c
