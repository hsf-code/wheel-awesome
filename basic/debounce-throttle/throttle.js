// 节流
function throttle(func, wait, options) {
  /**
   * func 回调函数
   * wait 延迟时间
   * options 配置项
   * */ 
  let timeout, context, args, result;
  let previous = 0;
  if (!options) options = {};
  
  // 回调函数
  let later = function() {
    previous = options.leading === false? 0: Date.now(); 
    timeout = null;
    result = func.apply(context, args);
  };
 
  let throttled = function() {
    // 获取当前的时间戳
    let now = Date.now();
    if (!previous && options.leading === false) previous = now;
    let remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      // 函数执行 remaining的结果表明了执行函数
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      // console.log('remaining', remaining);
    } else if (!timeout && options.trailing !== false) {
      // 如果在延迟的时间内，就会重新设置延时器，不过延时器的延时时间变了一个结果remaining，不是wait
      timeout = setTimeout(later, remaining);
      // console.log('dierci', result);
    }
    return result;
  }
  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };
  return throttled;
}

let test = throttle(()=>{
  console.log('eeeee')
}, 3000);
test();
test();
test();
test();
test();
