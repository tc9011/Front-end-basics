function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    alert(this.name)
  }
}

var person = new Person('tc9011', 28, 'Software Engineer');
console.log(person.constructor === Person);
console.log(Person.prototype.constructor === Person);
console.log(person.__proto__.constructor === Person);
console.log(person.__proto__ === Person.prototype);