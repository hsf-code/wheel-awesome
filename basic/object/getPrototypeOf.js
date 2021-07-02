/**
 * 返回指定对象的原型（内部[[Prototype]]属性的值）。
 *  
 * Object.getPrototypeOf(object)
 * 
 * 注意:
 *    1、Object.getPrototypeOf(Object)  不是  Object.prototype
 * 
 * 
 * */ 

//  1
// var proto = {
//   proto: '原型测试'
// };
// var obj = Object.create(proto);  // 将proto作为obj的原型
// Object.getPrototypeOf(obj) === proto; // true

// var reg = /a/;
// Object.getPrototypeOf(reg) === RegExp.prototype; // true

// 2

// JavaScript中的 Object 是构造函数（创建对象的包装器）。
// 一般用法是：
var obj = new Object();

// 所以：
Object.getPrototypeOf( Object );               // ƒ () { [native code] }
Object.getPrototypeOf( Function );             // ƒ () { [native code] }

Object.getPrototypeOf( Object ) === Function.prototype;        // true

// Object.getPrototypeOf( Object )是把Object这一构造函数看作对象，
// 返回的当然是函数对象的原型，也就是 Function.prototype。

// 正确的方法是，Object.prototype是构造出来的对象的原型。
var obj = new Object();
Object.prototype === Object.getPrototypeOf( obj );              // true

Object.prototype === Object.getPrototypeOf( {} );               // true
