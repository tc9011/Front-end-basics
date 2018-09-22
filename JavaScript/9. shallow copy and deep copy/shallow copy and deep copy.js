/**
 * shallow copy
 */

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

// a deep copy by recursion
function deepCopy(source) {
  if (!source || typeof source !== 'object') {
    throw new Error('error arguments');
  }
  var targetObj = source.constructor === Array ? [] : {};
  for (var keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepCopy(source[keys]);
      } else {
        targetObj[keys] = source[keys];
      }
    }
  }
  return targetObj;
}

var o1 = {
  arr: [1, 2, 3],
  obj: {
    key: 'value'
  },
  fun: function(){
    return 1;
  }
};
var o2 = deepCopy(o1);
console.log(o2 === o1);                     // false
console.log(o2.obj === o1.obj);             // false
console.log(o2.fun === o1.fun);             // true


// a deep copy by `JSON.stringify()` and `JSON.parse()`
function deepCopy(source){
  return JSON.parse(JSON.stringify(source));
}
var o1 = {
  arr: [1, 2, 3],
  obj: {
    key: 'value'
  },
  func: function(){
    return 1;
  }
};
var o2 = deepCopy(o1);
console.log(o2);                          // { arr: [ 1, 2, 3 ], obj: { key: 'value' } }
