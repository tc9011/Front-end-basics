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
console.log(p1.firstName);                     // t
console.log(p1.lastName);                      // c
p1.fullName();                                 // t c



// Factory Pattern
function createPerson(name, age, job){
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function (){
    console.log(this.name);
  };
  return o;
}
var person1 = createPerson('tc',27,'SE');
var person2 = createPerson('zj',23,'Designer');

console.log(person1.name);                     // tc
console.log(person2.name);                     // zj



// combined pattern
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.friends = ['tc','zj'];
}
Person.prototype = {
  constructor: Person,
  sayName: function () {
    console.log(this.name);
  }
};
var person1 = new Person('tc',29,'se');
var person2 = new Person('zj',24,'art');
person1.friends.push('wcx');
console.log(person1.friends);		               //["tc", "zj", "wcx"]
console.log(person2.friends);		               //["tc", "zj"]
console.log(person1.friends === person2.friends);  //false
console.log(person1.sayName === person2.sayName);  //true