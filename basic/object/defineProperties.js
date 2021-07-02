/**
 *      在对象定义新的属性和修改现有的属性，并返回该对象
 *      
 *      grammar：
 *        Object.defineProperties(obj, props)
 *    
 *      注意:
 *          1、和defineProperty的定义属性的配置是有区别
 *          2、defineProperties可以一次性的定义多个属性的配置
 * */ 

var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
  // etc. etc.
});