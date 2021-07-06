/**
 * 获取函数实现源码
 *  方法返回一个表示当前函数源代码的字符串。
 * */ 

 function demo (){
   let a =1;
   let b = a+3;
   console.log(a, b);
 }
let test =  demo.toString()
console.log(eval(test), test);
// function demo (){ let a =1; let b = a+3; console.log(a, b);}