function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    alert(this.name)
  }
}

var person = new Person('tc9011', 28, 'Software Engineer');
console.log(person.constructor === Person);                     // true
console.log(Person.prototype.constructor === Person);           // true
console.log(person.__proto__.constructor === Person);           // true
console.log(person.__proto__ === Person.prototype);             // true





// prototype chain
function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
};

function SubType() {
  this.subproperty = false;
}

// inherit SuperType
SubType.prototype = new SuperType();    // override SubType's prototype
SubType.prototype.getSubValue = function () {
  return this.subproperty;
};
var instance = new SubType();
console.log(instance.getSuperValue());	//true