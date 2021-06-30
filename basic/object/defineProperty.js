/**
 * 直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
 * 
 *    Object.defineProperty(obj, prop, descriptor)
 * 
 *    1、obj 需要操作的对象
 *    2、prop给对象添加的属性
 *    3、descriptor 对这个属性的描述，比如：可不可以写入、只读、枚举
 *    
 *    结果返回新的对象
 * 
 *    descriptor 操作描述符
 *      1、configurable 如果为true 该属性才可以被删除，该属性描述符才可以改变，默认为false
 *      2、enumerable 是标明了该属性是否可以枚举， 默认为false
 *      3、value 该属性的值 默认为undefined
 *      4、writable 当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符改变。不然就是初始化定义的value值
 *      5、get 属性的 getter 函数，如果没有 getter，则为 undefined。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的this并不一定是定义该属性的对象）。
 *         该函数的返回值会被用作属性的值。默认为 undefined。
 *      6、set 属性的 setter 函数，如果没有 setter，则为 undefined。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），
 *         会传入赋值时的 this 对象。默认为 undefined。
 * */ 



const object1 = {};

Object.defineProperty(object1, 'property1', {
  configurable:false,
  value: 42,
  // 是否可以写入
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode
delete object1.property1;
console.log(object1);
// expected output: 42


// 测试get和set

function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]