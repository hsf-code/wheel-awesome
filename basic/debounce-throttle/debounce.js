// 防抖
function debounce(fun, wait, immediate){
  /**
   * 全局的延时器只有一个
   * 
   * */ 
  // fun 回调函数
  // wait 执行回调的时间
  // immediate  是否立即触发
  let timeout, result
  let debound = function(){
    // 绑定this
    let that = this
    // 获取参数
    let arg = arguments

    // 就是你在wait时间内再次调用该函数，如果timeout存在，就清除掉，
      // 再一次设置延时的时间，所以延迟的时间随着调用的次数，不断的清除再设置
    if(timeout) clearTimeout(timeout) 
    
    // 延时器执行的回调函数
    let later = function(){
        // 清空延时器 
        timeout  = null;
        // 不是立即执行回调函数
        if(!immediate) result = fun.apply(that, arg)
    }

    // 立即执行 timeout延时器没有
    if(!timeout  && immediate){
      result = fun.apply(that, arg)
    }
    timeout = setTimeout(later, wait)

    // 返回执行的回调函数的结果
    return result
  } 
  // 取消延时器
  debound.cancle = function(){
    clearTimeout(timeout)
    timeout = null;
  }
return debound
}