// console.log(typeof []) // object
// console.log(typeof function() {}) // function
// console.log(typeof null) // object

// 可以看到，instanceof只能正确判断引用数据类型，而不能判断基本数据类型。instanceof 运算符可以用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。
// console.log(null instanceof Object) // false 原型链终点null
// console.log(2 instanceof Number);                    // false
// console.log(true instanceof Boolean);                // false
// console.log('str' instanceof String);                // false

// console.log([] instanceof Array);                    // true
// console.log(function(){} instanceof Function);       // true
// console.log({} instanceof Object);                   // true

// Object.prototype.toString.call()
// var a = Object.prototype.toString;

// console.log(a.call(2));
// console.log((2).toString());
// console.log(a.call(true));
// console.log(a.call('str'));
// console.log(a.call([]));
// console.log(a.call(function () {}));
// console.log(a.call({}));
// console.log(a.call(undefined));
// console.log(a.call(null));

// intanceof 实现
// function myIntanceof(left, right) {
//     // 获取对象原型
//     let proto = Object.getPrototypeOf(left);
//     // 获取构造函数的prototype对象
//     let prototype = right.prototype;
//     // 判断构造函数的prototype对象是否在对象原型链上
//     while (true) {
//         if (!proto) return false;
//         if (proto === prototype) return true;
//         // 如果没有找到，就继续从其原型上找，Object.getPrototypeOf方法用来获取指定对象的原型
//         proto = Object.getPrototypeOf(proto);
//     }
// }
// function instance_of(L, R) {
//     const baseType = ['string', 'number', 'boolean', 'undefined', 'symbol'];
//     if (baseType.includes(typeof L)) {
//         return false;
//     }
//     let RP = R.prototype;
//     L = L.__proto__;
//     while (true) {
//         if (L === null) {
//             return false;
//         }
//         if (L === RP) {
//             return true;
//         }
//         L = L.__proto__;
//     }
// }

// function User(name) {
//     this.name = name;
// }
// User.prototype.getName = function () {
//     console.log(this.name);
// };
// let u = new User('小明');
// console.log(u);
// console.log(u.__proto__);
// console.log(User.prototype);
// console.log(Object.getPrototypeOf(u));
// console.log(u.__proto__ === User.prototype); // true
// console.log(u.__proto__ === Object.getPrototypeOf(u)); // true
// console.log(User.prototype === Object.getPrototypeOf(u)); // true

// console.log(myIntanceof(u, User));
// console.log(myIntanceof(u, Object))
// console.log(myIntanceof(User, User))

// let n1 = 0.1,
//     n2 = 0.2;
// console.log(n1 + n2);
// console.log((n1 + n2).toFixed(2));

// console.log(void 0) // undefined

// console.log(typeof NaN) // number
// console.log(NaN == NaN) // false

// console.log(null == undefined) // true

// 扩展运算符 浅拷贝
// Object.assign() 浅拷贝

// 判断空对象
// if (JSON.stringify(Obj) == '{}') {
//     console.log('空对象')
// }
// if (Object.keys(Obj).length < 0) {
//     onsole.log('空对象')
// }

// const obj = {
//     a: '',
//     b: '',
// };
// obj.a = 1;
// obj.c = 2;
// console.log(obj);

// 箭头函数是ES6中的提出来的，它没有prototype，也没有自己的this指向，更不可以使用arguments参数，所以不能New一个箭头函数。
// call()、apply()、bind()等方法不能改变箭头函数中this的指向
// 箭头函数不能用作Generator函数，不能使用yeild关键字

// new操作符的执行过程：
// （1）首先创建了一个新的空对象
// （2）设置原型，将对象的原型设置为函数的 prototype 对象。
// （3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
// （4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象

// 1: 获取构造函数
// 2：创建一个新对象；
// 3：将函数的作用域赋给新对象（这里实际上就是生产了一个新的上下文）
// 4：执行函数中的代码（为新对象添加属性、方法）
// 5：返回值，无返回值或者返回一个非对象值时，则将创建的新对象返回，否则会将返回值作为新对象返回。（也就是说一定会返回一个对象回来，这一步可以从下面的代码得结论）
// function objectFactory() {
//     let newObject = null;
//     let constructor = Array.prototype.shift.call(arguments);
//     let result = null;
//     // 判断参数是否是一个函数
//     if (typeof constructor !== 'function') {
//         console.error('type error');
//         return;
//     }
//     // 新建一个空对象，对象的原型为构造函数的 prototype 对象
//     newObject = Object.create(constructor.prototype);
//     // 将 this 指向新建对象，并执行函数
//     result = constructor.apply(newObject, arguments);
//     // 判断返回对象
//     let flag =
//         result && (typeof result === 'object' || typeof result === 'function');
//     // 判断返回结果
//     return flag ? result : newObject;
// }
// 使用方法
// objectFactory(构造函数, 初始化参数);
// function MyNew() {
//     // 1、取出构造函数
//     let Constructor = Array.prototype.shift.call(arguments);
//     console.log(Constructor);
//     // 2、执行会创建一个新对象
//     let obj = {};
//     // 3、该对象的原型等于构造函数prototype
//     obj.__proto__ = Constructor.prototype;
//     // 4、执行函数中的代码
//     var result = Constructor.apply(obj, arguments);
//     console.log(result);
//     console.log(obj);
//     // 5、返回的值必须为对象
//     return typeof result === 'object' ? result : obj;
// }
// function Man(name, age) {
//     this.name = name;
//     this.age = age;
// }
// var tom = new Man('tom', 20);
// var mike = MyNew(Man, 'mike', 30);
// console.log(tom instanceof Man, mike instanceof Man); // true true

// js中数据结构数组Array、映射Map、集合Set、对象、JSON

// call方法的实现
// call方法的实现主要有以下三步，比如 fn.call(obj, a, b) ：
// 1： 把调用函数fn的上下文指向obj
// 2： 形参a,b等是以逗号分隔传进去
// 3: 执行函数fn，并返回结果
// Function.prototype.myCall = function (context) {
//     console.log(context);
//     context = context ? Object(context) : window;
//     console.log(context);
//     console.log(this);
//     context.fn = this; // 重置上下文
//     let args = [...arguments].slice(1); // 截取参数a,b
//     console.log(args);
//     let r = context.fn(...args); // 执行函数
//     console.log(r);
//     delete context.fn; // 删除属性，避免污染
//     return r; // 返回结果
// };
// var a = 1,
//     b = 2;
// var obj = { a: 10, b: 20 };
// function test(key1, key2) {
//     console.log(this[key1] + this[key2]);
//     return this[key1] * this[key2];
// }
// test('a', 'b'); // 3
// test.myCall(obj, 'a', 'b'); // 30
// Function.prototype.myApply = function (context) {
//     context = context ? Object(context) : window;
//     context.fn = this;
//     let args = [...arguments][1];
//     if (!args) {
//         return context.fn();
//     }
//     let r = context.fn(...args);
//     delete context.fn;
//     return r;
// };
// var a = 1,
//     b = 2;
// var obj = { a: 10, b: 20 };
// function test(key1, key2) {
//     console.log(this[key1] + this[key2]);
// }
// test('a', 'b'); // 3
// test.myCall(obj, ['a', 'b']); // 30  注意这里是传入数组 ['a', 'b']

// Function.prototype.Mybind = function (context) {
//     let _me = this;
//     return function () {
//         return _me.apply(context);
//     };
// };
// var a = 1,
//     b = 2;
// var obj = { a: 10, b: 20 };
// function test(key1, key2) {
//     console.log(this[key1] + this[key2]);
// }
// var fn = test.bind(obj);
// fn('a', 'b'); // 30

// function testPromise(ready) {
//     return new Promise(function (resolve, reject) {
//         if (ready) {
//             resolve('1');
//         } else {
//             reject('2');
//         }
//     });
// }
// testPromise(true).then(
//     function (msg) {
//         console.log(msg);
//     },
//     function (error) {
//         console.log(error);
//     }
// );

// Promise有五个常用的方法：then()、catch()、all()、race()、finally。

// async function async1() {
//     return 11111;
// }
// let a = async1();
// console.log(a);
// a.then(function (v) {
//     console.log(v);
// });

// async function fn() {
//     try {
//         let a = await Promise.reject('error');
//     } catch (error) {
//         console.log(error);
//     }
// }
