/**
 * 返回一个由一个给定对象的自身可枚举属性(包括Symbol产生的key)组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。
 * 
 * */ 

 // simple array
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
var b = Symbol("b");
var anObj = { 100: 'a', 2: 'b', 7: 'c', b: 3 };
console.log(Object.keys(anObj)); //

// getFoo is a property which isn't enumerable
var myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']