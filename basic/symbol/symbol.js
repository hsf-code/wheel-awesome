/**
 * symbol 是一种基本数据类型 （primitive data type）。
 *  Symbol()函数会返回symbol类型的值，该类型具有静态属性和静态方法。
 *  它的静态属性会暴露几个内建的成员对象；
 *  它的静态方法会暴露全局的symbol注册，且类似于内建对象类，
 *  重点: 
 *      1、它不是完整的够着函数，因为它不可以用new Symbol() 的形式创建
 *      2、每个从Symbol()返回的symbol值都是唯一的。一个symbol值能作为对象属性的标识符；这是该数据类型仅有的目的。
 * */ 
// let a = Symbol('a');
// let b = Symbol('a');
// console.log(a == b, typeof a);

// var sym = new Symbol(); // TypeError


/**
 * 1、Symbol.iterator
 *    为每一个对象定义了默认的迭代器。该迭代器可以被 for...of 循环使用。
 * */ 
var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
let a = [...myIterable] // [1, 2, 3]
console.log('d', a);