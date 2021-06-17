import constContext from '../../assets/const.js';

/**
 * new 关键字会进行如下的操作：
 *    1、创建一个空的简单JavaScript对象（即{}）,这个对象会被执行[[Prototype]]（也就是__proto__）链接。
 *    2、生成的新对象会绑定到函数调用的this, 也就是说this的指向就是这个生成的对象。
 *    3、也就是这个对象会被执行[[Prototype]]（也就是__proto__）链接。
 *       并且通过new Student()创建的每个对象将最终被[[Prototype]]链接到这个构造函数Student.protytype对象上。
 *    4、如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，
 *       那么new表达式中的函数调用会自动返回这个新的对象。
 * 
 * */ 

/**
 * 总体来说:
 *    1、创建了一个全新的对象。
 *    2、这个对象会被执行[[Prototype]]（也就是__proto__）链接，设置该对象的constructor指向构造函数。
 *    3、生成的新对象会绑定到函数调用的this，这样在构造函数中的属性都会绑定到该对象中。
 *    4、通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
 *    5、如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，
 *       那么new表达式中的函数调用会自动返回这个新的对象。
 * 
 * */ 



/**
 * 模拟实现 new 操作符
 * @param  {Function} ctor [构造函数]
 * @return {Object|Function|Regex|Date|Error}      [返回结果]
 */
const newOperator = function (ctor){
  if(typeof ctor !== 'function'){
    throw 'newOperator function the first param must be a function';
  }

  // ES6 new.target 是指向构造函数
  newOperator.target = ctor;

  // 1.创建一个全新的对象，
  // 2.并且执行[[Prototype]]链接
  // 4.通过`new`创建的每个对象将最终被`[[Prototype]]`链接到这个函数的`prototype`对象上。
  var newObj = Object.create(ctor.prototype);

  // ES5 arguments转成数组 当然也可以用ES6 [...arguments], Aarry.from(arguments);
  // 除去ctor构造函数的其余参数
  var argsArr = [].slice.call(arguments, 1);

  // 3.生成的新对象会绑定到函数调用的`this`，获取到ctor函数返回结果
  // newObj就是向构造函数中注入this，将属性绑定到this上去
  // 因为是引用的值，所以可以直接在this身上修改属性
  var ctorReturnResult = ctor.apply(newObj, argsArr);

  // 4、 中这些类型中合并起来只有Object和Function两种类型 typeof null 也是'object'所以要不等于null，排除null
  var isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null;
  var isFunction = typeof ctorReturnResult === 'function';
  if(isObject || isFunction){
      return ctorReturnResult;
  }
  // 5.如果函数没有返回对象类型`Object`(包含`Functoin`, `Array`, `Date`, `RegExg`, `Error`)，
  //   那么`new`表达式中的函数调用会自动返回这个新的对象。
  return newObj;
}



// 例子3 多加一个参数
function Student(name, age){
  this.name = name;
  this.age = age;
  // this.doSth();
  // return Error();
}
Student.prototype.doSth = function() {
  console.log(this.name);
};
var student1 = newOperator(Student, '若', 18);
var student2 = newOperator(Student, '川', 18);
// var student1 = new Student('若');
// var student2 = new Student('川');
console.log(student1, student1.doSth()); // {name: '若'} '若'
console.log(student2, student2.doSth()); // {name: '川'} '川'

student1.__proto__ === Student.prototype; // true
student2.__proto__ === Student.prototype; // true
// __proto__ 是浏览器实现的查看原型方案。
// 用ES5 则是：
Object.getPrototypeOf(student1) === Student.prototype; // true
Object.getPrototypeOf(student2) === Student.prototype; // true

const result = {
  [constContext.variablePrefix + 'New']: newOperator
}

export default result;