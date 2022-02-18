// 类式继承
// 声明父类
// function SuperClass() {
//     this.superValue = true;
//     this.books = ['Javascript', 'html', 'css']
// }
// 为父类添加共有方法
// SuperClass.prototype.getSuperValue = function () {
//     return this.superValue;
// };
// 声明子类
// function SubClass() {
//     this.subValue = false;
// }
// 继承父类
// SubClass.prototype = new SuperClass();
// 为子类添加公用方法
// SubClass.prototype.getSubValue = function () {
//     return this.subValue;
// };
// var instance = new SubClass();
// console.log(instance.getSuperValue());
// console.log(instance.getSubValue());

// console.log(instance instanceof SubClass);
// console.log(instance instanceof SuperClass);
// console.log(SubClass instanceof SuperClass);
// console.log(SubClass.prototype instanceof SuperClass);
// console.log(instance instanceof Object)

// var instance1 = new SubClass();
// var instance2 = new SubClass();
// console.log(instance2.books);
// instance1.books.push('设计模式');
// console.log(instance2.books)

// 构造函数继承
// 声明父类
// function SuperClass(id) {
//     // 引用类型共有属性
//     this.books = ["JavaScript", "html", "css"];
//     // 值类型共有属性
//     this.id = id;
// }
// // 父类声明原型方法
// SuperClass.prototype.showBooks = function () {
//     console.log(this.books);
// };
// // 声明子类
// function SubClass(id) {
//     // 继承父类
//     SuperClass.call(this, id);
// }
// // 创建第一个子类的实例
// var instance1 = new SubClass(10);
// var instance2 = new SubClass(11);
// instance1.books.push("设计模式");
// console.log(instance1.books);
// console.log(instance1.id);
// console.log(instance2.books);
// console.log(instance2.id);
// instance1.showBooks();

// 组合式继承
// 声明父类
// function SuperClass (name) {
//     // 值类型共有属性
//     this.name = name;
//     // 引用类型共有属性
//     this.books = ["JavaScript", "html", "css"];
// }
// // 父类原型共有方法
// SuperClass.prototype.getName = function() {
//     console.log(this.name);
// }
// // 声明子类
// function SubClass(name, time) {
//     // 构造函数式继承父类name属性
//     SuperClass.call(this, name);
//     // 子类中新增共有属性
//     this.time = time;
// }
// // 类式继承 子类原型继承父类
// SubClass.prototype = new SuperClass();
// // 子类原型方法
// SubClass.prototype.getTime =  function() {
//     console.log(this.time)
// }
// var instance1 = new SubClass('js book', 2014);
// instance1.books.push('设计模式');
// console.log(instance1.books);
// instance1.getName();
// instance1.getTime();

// var instance2 = new SubClass('css book', 2013);
// console.log(instance2.books);
// instance2.getName();
// instance2.getTime();

//  原型式继承
// function inheritObject(o) {
//     // 声明一个过渡函数对象
//     function F() {}
//     // 过渡对象的原型继承父对象
//     F.prototype = o;
//     // 返回过渡对象的一个实例，该实例的原型继承了父对象
//     return new F();
// }

// 寄生式继承
// 声明基对象
// var book = {
//     name: 'js book',
//     alikeBook: ['css book', 'html book']
// }
// function createBook(obj) {
//     // 通过原型继承方式创建新对象
//     var o = new inheritObject(obj);
//     // 扩展新对象
//     o.getName = function() {
//         console.log(name)
//     };
//     // 返回扩展后的新对象
//     return o;
// }

/**
 * 寄生式继承 继承原型
 * 传递参数 subClass 子类
 * 传递参数 superClass 父类
 */
// function inheritPrototype(subClass, superClass) {
//     // 复制一份父类的原型副本保存在变量中
//     var p = inheritObject(superClass.prototype)
//     // 修正因为重写子类原型导致子类constructor属性被修改
//     p.constructor = subClass;
//     // 设置子类的原型
//     subClass.prototype = p;
// }

// 多继承
// 单继承 属性复制
// var extend = function (target, source) {
//     //  遍历源对象中的属性
//     for (var property in source) {
//         // 讲源对象中的属性复制到目标对象
//         target[property] = source[property];
//     }
//     return target;
// };
// // 多继承 属性复制
// Object.prototype.mix = function () {
//     var i = 0, // 从第一个参数起为被继承的对象
//         len = arguments.length, // 获取参数长度
//         arg; // 缓存参数对象
//     for (; i < len; i++) {
//         // 缓存当前对象
//         arg = arguments[i];
//         //遍历被继承对象中的属性
//         for (var property in arg) {
//             // 将被继承对象中的属性复制到目标对象中
//             this[property] = arg[property];
//         }
//     }
// };

// 多态 同一个多种调用方法
// function Add() {
//     function zero() {
//         return 10;
//     }
//     function one(num) {
//         return 10 + num;
//     }
//     function two(num1, num2) {
//         return num1 + num2;
//     }
//     // 相加共有方法
//     this.add = function () {
//         var arg = arguments,
//             // 获取参数长度
//             len = arg.length;
//         switch (len) {
//             case 0:
//                 return zero();
//             case 1:
//                 return one(arg[0]);
//             case 2:
//                 return two(arg[0], arg[1]);
//         }
//     };
// }
