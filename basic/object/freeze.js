/**
 *  意思是冻结一个对象，返回一个新的对象，被冻结的对象有下面的特点；
 *        1、对于对象而言:
 *          (1)、冻结的对象不可以增加新的属性，删除已有的属性，该对象的原型也不可以修改;
 * 
 *        2、对于对象的属性本身而言: （一些配置不可以操作）
 *          (1)、不能修改属性原先的可配置性、可枚举性、可写性、以及不可以修改已有属性的值;
 * 
 *      Object.freeze(obj)
 *       
 * 
 *      需要注意：
 *          1、这个方法返回传递的对象，而不是创建一个被冻结的副本。（简单理解就是在原有的对象上进行冻结）
 *          2、如果一个属性的值是个对象，则这个对象中的属性是可以修改的，除非它也是个冻结对象。
 *          3、数组作为一种对象，被冻结，其元素不能被修改。没有数组元素可以被添加或移除。
 *          4、被冻结对象自身的所有属性都不可能以任何方式被修改。任何修改尝试都会失败，无论是静默地还是通过抛出TypeError异常 
 *             也就是说在严格模式下，如果给一个冻结的对象添加属性或者修改属性，会抛出异常  
 * */ 


var obj = {
  prop: function() {},
  foo: 'bar'
};

// 新的属性会被添加, 已存在的属性可能
// 会被修改或移除
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

// console.log('test', obj);
// 作为参数传递的对象与返回的对象都被冻结
// 所以不必保存返回的对象（因为两个对象全等）
var o = Object.freeze(obj);

o === obj; // true  因为是在传入的对象中进行冻结
Object.isFrozen(obj); // === true  判断对象是否被冻结

// 现在任何改变都会失效
obj.foo = 'quux'; // 静默地不做任何事
// 静默地不添加此属性
obj.quaxxor = 'the friendly duck';

// 在严格模式，如此行为将抛出 TypeErrors
function fail(){
  'use strict';
  obj.foo = 'sparky'; // throws a TypeError
  delete obj.quaxxor; // 返回true，因为quaxxor属性从来未被添加
  obj.sparky = 'arf'; // throws a TypeError
}

fail();

// 试图通过 Object.defineProperty 更改属性
// 下面两个语句都会抛出 TypeError.
Object.defineProperty(obj, 'ohai', { value: 17 });
Object.defineProperty(obj, 'foo', { value: 'eit' });

// 也不能更改原型
// 下面两个语句都会抛出 TypeError.
Object.setPrototypeOf(obj, { x: 20 })
obj.__proto__ = { x: 20 }