/**
 * shallow copy
 */

// object
var person1 = {
  name: 'tc'
};
var person2 = person1;

console.log(person2.name);          // tc
person2.name = 'tc9011';
console.log(person1.name);          // tc9011

// array
var array1 = [0, 1, 2, 3, { name: 'a' }];
var array2 = array1.slice();
console.log(array2);                // [ 0, 1, 2, 3, { name: 'a' } ]

array2.push(4);
array2[4].name = 'b';
console.log(array1);                // [ 0, 1, 2, 3, { name: 'b' } ]
console.log(array2);                // [ 0, 1, 2, 3, { name: 'b' }, 4 ]





/**
 * deep copy
 */
