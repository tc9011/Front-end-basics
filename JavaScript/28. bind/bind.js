var module = {
  x: 43,
  getX: function f() {
    return this.x;
  }
};

var unboundGetX = module.getX;
console.log(unboundGetX());       // The function gets invoked at the global scope
// undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// 43