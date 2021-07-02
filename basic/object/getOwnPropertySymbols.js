/**
 *  返回一个给定对象自身的所有 Symbol 属性的数组
 *  正好与getOwnPropertyNames拿取的属性，是相反的; 
 * 
 * Object.getOwnPropertySymbols(obj)
 * 
 * 
 * */ 

var obj = {};
var a = Symbol("a");
var b = Symbol.for("b");

obj[a] = "localSymbol";
obj[b] = "globalSymbol";

var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols)         // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0])      // Symbol(a)