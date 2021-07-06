/**
 * Function 是所有函数的构造者，
 *      每个 JavaScript 函数实际上都是一个 Function 对象。
 *      运行 (function(){}).constructor === Function // true 便可以得到这个结论。
 * 
 * 
 *  new Function ([arg1[, arg2[, ...argN]],] functionBody)
 *        1、arg1, arg2, ... argN被函数使用的参数的名称必须是合法命名的。
 *           参数名称是一个有效的JavaScript标识符的字符串，或者一个用逗号分隔的有效字符串的列表;
 *           例如“×”，“theValue”，或“a,b”。
 * 
 *        2、一个含有包括函数定义的 JavaScript 语句的字符串。
 * 
 *   desc:
 *      1、使用 Function 构造器生成的 Function 对象是在函数创建时解析的。
 *         这比你使用函数声明或者函数表达式并在你的代码中调用更为低效，因为使用后者创建的函数是跟其他代码一起解析的。
 * 
 *      2、所有被传递到构造函数中的参数，都将被视为将被创建的函数的参数，并且是相同的标示符名称和传递顺序。
 * 
 *      3、以调用函数的方式调用 Function 的构造函数（而不是使用 new 关键字) 跟以构造函数来调用是一样的。
 * 
 * 
 * */ 

/**
 * Function 的属性和方法
 *    全局的 Function 对象没有自己的属性和方法，
 *    但是，因为它本身也是一个函数，所以它也会通过原型链从自己的原型链 Function.prototype 上继承一些属性和方法。
 * 
 *    注意：
 *        Function本身是没有属性和方法，但是你看到的Function是有属性和方法的，那是因为Function.prototype会有属性和方法
 *          用的时候就会自己查找
 * */ 

// 属性
// 1、Function.arguments 
// 以数组形式获取传入函数的所有参数。此属性已被arguments替代，也就是说可以在函数的内部使用arguments获取, arguments会被当做变量注入进去
/**
 * arguments
 * 
 *    1、代表传入函数的实参，它是一个类数组对象
 *    2、函数不在执行期间，那么该函数的 arguments 属性的值是 null
 *    3、函数在不断的调用执行的时候，arguments的值是最后一次调用传入的实参
 * 
 * */ 

// 2、Function.caller // 获取调用函数的具体对象。 在生产环境中尽量不要使用

// 3、Function.length // 获取函数的接收参数个数。

// 4、Function.name  获取函数的名称。

// 5、Function.displayName 获取函数的display name。

// 6、Function.prototype.constructor 声明函数的原型构造方法，

function demo (){}
console.log(demo.name);
console.log(demo.prototype.constructor);