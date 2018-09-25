var a = [1, 1, 2, 2];
var b = [...new Set(a)];
console.log(b);                                     // [ 1, 2 ]


s.add(1).add(2).add(2);                             // 注意2被加入了两次
s.size;                                             // 2
s.has(1);                                           // true
s.has(2);                                           // true
s.has(3);                                           // false
s.delete(2);
s.has(2);                                           // false