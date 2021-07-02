/**
 *  设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null。
 * 
 * 
 *  Object.setPrototypeOf(obj, prototype)
 *  
 *  desc:
 *      1、如果对象的[[Prototype]]被修改成不可扩展(通过 Object.isExtensible()查看)，就会抛出 TypeError异常。
 *         如果prototype参数不是一个对象或者null(例如，数字，字符串，boolean，或者 undefined)，则什么都不做。
 *         否则，该方法将obj的[[Prototype]]修改为新的值。
 *      
 *      2、其实就是说你要修改对象的原型，这个对象的原型的值是对象或者null（其次允许扩展）才可以被修改
 *      
 *      3、用prototype直接替换掉obj的原型
 * 
 * */ 

// var obj1 = {
//   proto: 1111
// }
// var obj2 = Object.create(111);

// var dict = Object.setPrototypeOf(obj2, null);

var obj1 = {
  proto: 1111
}
var obj2 = Object.create(obj1);

var dict = Object.setPrototypeOf(obj2, {dd: 222});