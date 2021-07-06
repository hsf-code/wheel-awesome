/**
 * Boolean 是布尔值的对象包装器
 *  1、第一个参数传递的值将转换为布尔值。
 *    1、如果省略或值0，-0，null，false，NaN，undefined，或空字符串（""），该对象具有的初始值false。
 *    2、所有其他值，包括任何对象，空数组（[]）或字符串"false"，都会创建一个初始值为true的对象。
 * 
 * */ 

// 1、参数不传 默认为false
let a = Boolean();
console.log(a, typeof a);
if(a){
  console.log('true');
} else {
  console.log('false');
}

// 2、传参 0，-0，null，false，NaN，undefined，或空字符串（""） 传参之后得到的结果为false
// let b = Boolean(0);
// let c = Boolean(-0);
// let d = Boolean(null);
// let b1 = Boolean(false);
// let b2 = Boolean(NaN);
// let b3 = Boolean(undefined);
// let b4 = Boolean("");
// console.log(b,c,d,b1,b2,b3,b4);



// 3、传参的结果为true  参数为对象，空数组、字符串"false"

let b1 = Boolean({});
let b2 = Boolean([]);
let b3 = Boolean("false");
let b4 = Boolean(null);
let b5 = Boolean(undefined);
console.log(b1, b2, b3, b4, b5);