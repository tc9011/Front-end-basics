const object1 = {
  a: 1,
  b: 2,
  c: 3,
};

const object2 = Object.assign({c: 4, d: 5}, object1);
console.log(object2.c, object2.d);                      // 3 5



const object3 = {
  a: {
    b: 1,
  },
  b: 1,
};

const object4 = Object.assign({c: 4, d: 5}, object3);
console.log(object4.a);                                 // { b: 1 }

object4.a.b = 2;
console.log(object3.a.b);                              // 2