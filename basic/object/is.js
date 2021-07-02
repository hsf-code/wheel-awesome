/**
 * 判断两个值是否为同一个值。
 *  
 *  Object.is(value1, value2);
 * 
 *  desc:
 *    1、都是 undefined
 *    2、都是 null
 *    3、都是 true 或 false
 *    4、都是相同长度的字符串且相同字符按相同顺序排列
 *    5、都是相同对象（意味着每个对象有同一个引用）
 *    6、都是数字且
 *        都是 +0
 *        都是 -0
 *        都是 NaN
 *        或都是非零而且非 NaN 且为同一个值
 *    7、与== 运算不同。  == 运算符在判断相等前对两边的变量(如果它们不是同一类型) 进行强制转换 (这种行为的结果会将 "" == false 判断为 true), 而 Object.is不会强制转换两边的值。
 *    8、与=== 运算也不相同。 === 运算符 (也包括 == 运算符) 将数字 -0 和 +0 视为相等 ，而将Number.NaN 与NaN视为不相等.
 * 
 * */ 

Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);         // true
Object.is(foo, bar);         // false

Object.is(null, null);       // true

// 特例
Object.is(0, -0);            // false
Object.is(0, +0);            // true
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true
