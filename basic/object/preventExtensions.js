/**
 * 让一个对象变的不可扩展，也就是永远不能再添加新的属性。
 * 
 * Object.preventExtensions(obj)
 * 
 * desc:
 *    1、如果一个对象可以添加新的属性，则这个对象是可扩展的。
 *       Object.preventExtensions()将对象标记为不再可扩展，
 *       这样它将永远不会具有它被标记为不可扩展时持有的属性之外的属性。
 *       注意，一般来说，不可扩展对象的属性可能仍然可被删除。
 *       尝试将新属性添加到不可扩展对象将静默失败或抛出TypeError
 *      （最常见的情况是strict mode (en-US)中，但不排除其他情况）。
 * 
 *    2、Object.preventExtensions()仅阻止添加自身的属性。但其对象类型的原型依然可以添加新的属性。
 * 
 *    3、该方法使得目标对象的 [[prototype]]  不可变；任何重新赋值 [[prototype]] 操作都会抛出 TypeError 。
 *       这种行为只针对内部的 [[prototype]] 属性， 目标对象的其它属性将保持可变。
 * 
 *    4、一旦将对象变为不可扩展的对象，就再也不能使其可扩展。
 * 
 * */ 


// Object.preventExtensions将原对象变的不可扩展,并且返回原对象.
var obj = {};
var obj2 = Object.preventExtensions(obj);
obj === obj2;  // true

// 字面量方式定义的对象默认是可扩展的.
var empty = {};
Object.isExtensible(empty) //=== true

// ...但可以改变.
Object.preventExtensions(empty);
Object.isExtensible(empty) //=== false

// 使用Object.defineProperty方法为一个不可扩展的对象添加新属性会抛出异常.
var nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, "new", { value: 8675309 }); // 抛出TypeError异常

// 在严格模式中,为一个不可扩展对象的新属性赋值会抛出TypeError异常.
function fail()
{
  "use strict";
  nonExtensible.newProperty = "FAIL"; // throws a TypeError
}
fail();
