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



// bind polyfill
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== 'function') {
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
        // this 指向调用bind的对象
        fToBind = this,
        fNOP = function () {},
        fBound = function () {
          // this instanceof fNOP === true时,说明返回的fBound被当做new的构造函数调用
          // fToBind 指向调用bind的函数, 这里的 this 是bind函数被调用后，返回的新函数中的this
          return fToBind.apply(this instanceof fNOP ? this : oThis,
            // 获取调用时(fBound)的传参.bind 返回的函数入参往往是这么传递的
            aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    // 维护原型关系
    if (this.prototype) {
      fNOP.prototype = this.prototype;
    }

    // 下行的代码使fBound.prototype是fNOP的实例,因此
    // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
    fBound.prototype = new fNOP();

    return fBound;
  }
}


function foo() {
  this.b = 100;
  return this.a;
}

var func = foo.bind({a: 1});
func();     // 1
new func(); // foo { b: 100 }