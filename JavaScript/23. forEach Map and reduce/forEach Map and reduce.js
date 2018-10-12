var array = [1, 2 , 3 , 4];

array.forEach((value, index) => {
  console.log(`NO.${index + 1} value is ${value}`);
});
// NO.1 value is 1
// NO.2 value is 2
// NO.3 value is 3
// NO.4 value is 4

var array2 = array.map(value => value * 2);
console.log(array2);                                        // [ 2, 4, 6, 8 ]
array2.push(5);
console.log(array);                                         // [ 1, 2, 3, 4 ]
console.log(array2);                                        // [ 2, 4, 6, 8, 5 ]

var array3 = array.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(array3);                                        // 10
