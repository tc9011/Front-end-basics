/**
 * shallow copy
 */

// shallow copy in the object
var person1 = {
  name: 'tc'
};
var person2 = person1;

console.log(person2.name);          // tc
person2.name = 'tc9011';
console.log(person1.name);          // tc9011

// shallow copy in the array
var array1 = [0, 1, 2, 3, { name: 'a' }];
var array2 = array1.slice();
console.log(array2);                // [ 0, 1, 2, 3, { name: 'a' } ]

array2.push(4);
array2[4].name = 'b';
console.log(array1);                // [ 0, 1, 2, 3, { name: 'b' } ]
console.log(array2);                // [ 0, 1, 2, 3, { name: 'b' }, 4 ]


// common shallow copy
function shallowCopy(source) {
  if (!source || typeof source !== 'object') {
    throw new Error('error arguments');
  }
  var targetObj = source.constructor === Array ? [] : {};
  for (var keys in source) {
    if (source.hasOwnProperty(keys)) {
      targetObj[keys] = source[keys];
    }
  }
  return targetObj;
}

var a = {
  name: 'a',
};

var b = shallowCopy(a);
console.log(b);                       // { name: 'a' }


/**
 * deep copy
 */
