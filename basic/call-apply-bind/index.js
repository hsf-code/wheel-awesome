import constContext from '../../assets/const.js';

// call
Function.prototype[constContext.variablePrefix + 'Call'] = function(context) {
  if (typeof this !== 'function') {
      // 类型错误
      throw new TypeError('Error')
  }
  // context 函数内部的上下文
  context = context || window;
  // 绑定this
  context.fn = this; // this 即 f.hsfCall 的 f
  // 传参数 因为call的参数是散列的，去除第一个绑定this的参数
  const args = [...arguments].slice(1);
  // 执行
  const result = context.fn(...args);
  // 执行完成之后就删除上下文的fn
  delete context.fn;
  // 返回this执行的结果
  return result;
};

// apply
Function.prototype[constContext.variablePrefix + 'Apply'] = function(context) {
  if (typeof this !== 'function') {
      throw new TypeError('Error')
  }
  context = context || window;
  context.fn = this;
  let result;
  // 处理参数和 call 有区别 因为apply的参数是array的形式
  if (arguments[1]) {
      result = context.fn(...arguments[1])
  } else {
      result = context.fn()
  }
  delete context.fn;
  return result
};

/**
 * call 和 apply的源码的区别就是在函数执行的时候传参的不同
 * 
 * 书写执行的顺序:
 *    1、将this赋值给context.fn
 *    2、解析参数传参的方式是数组还是散列的形式
 *    3、执行context.fn(参数);
 *    4、删除context.fn
 *    5、返回函数执行的结果
 * */ 

// bind 
// bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，
// 而其余参数将作为新函数的参数，供调用时使用。
Function.prototype[constContext.variablePrefix + 'Bind'] = function(context) {
  if (typeof this !== 'function') {
      throw new TypeError('Error');
  }
  const _this = this; // this 即 f.bind 的 f
  // 截取参数从1到最后
  const args = [...arguments].slice(1);
  return function F() {
      if (this instanceof F) {
          return new _this(...args, ...arguments);
      }
      // args.concat(...arguments) 其实是拼接数组用的 apply是以数组的参数形式调用
      return _this.apply(context, args.concat(...arguments));
  }
};
/**
 * 执行顺序:
 *    1、将bind的调用者存储起来;
 *    2、切割参数成数组的形式
 *    3、返回的函数内部的调用者还是之前存储的this，所以这个时候就是this被绑定了
 *    4、返回函数执行的时候其实是bind之前的函数调用apply，参数是拼接之后的参数
 * 
 * */ 