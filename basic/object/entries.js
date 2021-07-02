/**
 * 返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致
 *    （区别在于 for-in 循环还会枚举原型链中的属性）。
 *  
 * 
 *    注意:
 *      1、这个方法只是收集对象中可以枚举的属性的key-value，收集的组装成一个二维数组,之后可以使用for循环，使用
 *      2、这个方法不会拿去该对象原型上面的可枚举属性
 * */ 

const object1 = {
  a: 'somestring',
  b: 42
};
object1.__proto__ = {
  c: '11111'
}

console.log('entries', object1, Object.entries(object1));
for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}