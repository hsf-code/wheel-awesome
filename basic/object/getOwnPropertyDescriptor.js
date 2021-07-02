/**
 *  desc: 返回指定对象上一个自有属性对应的属性描述符。
 *          （自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）
 * 
 *  Object.getOwnPropertyDescriptor(obj, prop)
 * 
 *   注意:
 *      1、结果：如果指定的属性存在于对象上，则返回其属性描述符对象（property descriptor），否则返回 undefined
 *      2、
 * */ 


const object1 = {
  property1: 42
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

console.log(descriptor1);
// { value: 42, writable: true, enumerable: true, configurable: true }
console.log(descriptor1.configurable);
// expected output: true

console.log(descriptor1.value);
// expected output: 42