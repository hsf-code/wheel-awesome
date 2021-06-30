/**
 * 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
 *    语法格式: Object.create(proto，propertiesObject)
 *        1、proto解释新创建对象的原型对象, 该原型对象会放在新对象的__proto__中去, 该原型对象会作为新对象的原型
 *        2、propertiesObject 这个是给新对象添加属性的对象
 * */ 

const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

console.log('desc', me.prototype);


const o = Object.create(Object.prototype, {
  // foo会成为所创建对象的数据属性
  foo: {
    writable:true,
    configurable:true,
    value: "hello"
  },
  // bar会成为所创建对象的访问器属性
  bar: {
    configurable: false,
    get: function() { return 10 },
    set: function(value) {
      console.log("Setting `o.bar` to", value);
    }
  },
  // foo会成为所创建对象的数据属性
  txt: {
    writable:true,
    configurable:true,
    value: "hello"
  },
  // bar会成为所创建对象的访问器属性
  abb: {
    configurable: false,
    get: function() { return 10 },
    set: function(value) {
      console.log("Setting `o.bar` to", value);
    }
  }
});

console.log('ooooo', o);