// prototype chain inheritance
function Father() {
  this.lastName = 't';
  this.isHuman = true;
  this.card = {
    bank: '',
    ID: ''
  };
}

var father = new Father();
console.log(father.isHuman);                    // t
console.log(father.lastName);                   // true


function Son() {
  this.firstName = 'c';
}

Son.prototype = new Father();

var son = new Son();
console.log(son.lastName);                       // t
console.log(son.isHuman);                        // true 
console.log(son.firstName);                      // c

son.card.bank = 'BOC';

var son2 = new Son();
console.log(son2.card.bank);                    // BOC




// constructor inheritance
function Father(name) {
  this.lastName = name;
  this.isHuman = true;
  this.card = {
    bank: 'ICBC',
  };
}

function Son() {
  this.firstName = 'c';
  Father.call(this, 't');
}

var son = new Son();
console.log(son.card.bank);                         // 'ICBC'
console.log(son.lastName);                          // t
son.card.bank = 'BOC';
console.log(son.card.bank);                         // 'BOC'

var son2 = new Son();
console.log(son2.card.bank);                        // 'ICBC'





// classic inheritance
function Father(name) {
  this.name = name;
  this.isHuman = true;
  this.card = {
    bank: 'ICBC',
  };
}

Father.prototype.getName = function () {
  console.log(this.name);
};

function Son(name) {
  Father.call(this, name);
}

Son.prototype = new Father();

var son = new Son('tc');
console.log(son.isHuman);                               // true
console.log(son.name);                                  // tc
son.getName();                                          // tc

console.log(son.card.bank);                             // ICBC
son.card.bank = 'BOC';
console.log(son.card.bank);                             // BOC

var son2 = new Son('zj');
console.log(son2.isHuman);                              // true
console.log(son2.name);                                 // zj
son2.getName();                                         // zj
console.log(son2.card.bank);                            // ICBC





// inherit with `Object.create()`
var person = {
  name: 'tc',
  friend: ['a', 'b', 'c']
};

var anotherPerson = Object.create(person);
anotherPerson.name = 'zz';
anotherPerson.friend.push('d');
console.log(anotherPerson.friend);                        // [ 'a', 'b', 'c', 'd' ]

var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = 'jj';
yetAnotherPerson.friend.push('e');
console.log(yetAnotherPerson.friend);                     // [ 'a', 'b', 'c', 'd', 'e' ]

console.log(person.friend);	                              // [ "a", "b", "c", "d", "e" ]





// parasitic inheritance
var person = {
  name: 'tc',
  friend: ['a', 'b', 'c']
};

function createAnother(original) {
  var clone = Object.create(original);
  clone.sayHi = function () {
    console.log('hi')
  };
  return clone;
}

var anotherPerson = createAnother(person);
anotherPerson.sayHi();			                          // hi







// combined parasitic inheritance
function inheritPrototype(Son, Father) {
  var prototype = Object.create(Father.prototype);	// create object
  prototype.constructor = Son;
  Son.prototype = prototype;
}

function Father(name) {
  this.name = name;
  this.colors = ['red','blue','green'];
}
Father.prototype.sayName = function () {
  console.log(this.name);
};

function Son(name, age) {
  Father.call(this,name);
  this.age = age;
}

inheritPrototype(Son, Father);

Son.prototype.sayAge = function () {
  console.log(this.age);
};

var son = new Son('a', 11);
console.log(son.name);                                // a
console.log(son.colors);                              // [ 'red', 'blue', 'green' ]
son.sayAge();                                         // 11
son.sayName();                                        // a