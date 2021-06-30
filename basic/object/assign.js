/**
 * 根据MDN的解释，Object.assign()是一个对象copy的快捷函数
 *    1、只是拷贝对象中可以枚举的属性到目标对象中去
 *    2、可以copy一个或者多个属性 Object.assign(target, ...sources)
 *    3、返回合并之后的对象
 *    4、如果目标和源对象中有相同的属性，且源对象中的属性是可以枚举的，源对象中的属性会覆盖目标对象的属性
 * */ 

let target = {
  a: 1,
  c: 2,
}

let res1 = {
  b: 2,
};

let res2 = {
  b: 4,
  c: 3,
};

target = Object.assign(target, res1, res2);

console.log('target', target);