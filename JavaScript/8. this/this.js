var x = 1;
function bar() {
  console.log(this === window);             // true   // it's `global` when running in node
  console.log(this.x);
}
bar();                                      // 1      // It's actually `window.bar()` or `global.bar()`




function sayHi() {
  console.log(`${this.name} say hi`);
  console.log(this === o);
}
var o = {
  name: 'tc9011',
  sayHi: sayHi,
};
o.sayHi();
// tc901 say hi
// true



var name = 'tc';
function Person(name) {
  this.name = name;
}
var a = new Person('tc9011');
console.log(a.name);                                 // tc9011
console.log(this.name);                              // tc




function sayName(age, isHuman) {
  this.age = age;
  this.isHuman = isHuman;

  console.log(this.name);
  console.log(this.age);
  console.log(this.isHuman)
}
var o = {
  name: 'tc9011',
  sayName: sayName,
};
var o2 = {
  name: 'tc',
};
o.sayName.call(o2, 15, true);                                 // tc 15 true
o.sayName.apply(o2, [16, false]);                             // tc 16 false
