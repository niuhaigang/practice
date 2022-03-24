/****一、异步&事件循环******/

// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     console.log(2);
// });
// promise.then(() => {
//     console.log(3); // 因为这里内部没有发生变化，一直处于pending状态，所以不输出3。
// });
// console.log(4);
// 1 2 4

// const promise1 = new Promise((resolve, reject) => {
//     console.log('promise1');
//     resolve('resolve1');
// });
// const promise2 = promise1.then((res) => {
//     console.log(res);
// });
// console.log('1', promise1);
// console.log('2', promise2);
// promise1
// 1 Promise{<resolved>: resolve1}
// 2 Promise{<pending>}
// resolve1

// Promise.resolve().then(() => {
//     console.log('promise1');
//     const timer2 = setTimeout(() => {
//         console.log('timer2');
//     }, 0);
// });
// const timer1 = setTimeout(() => {
//     console.log('timer1');
//     Promise.resolve().then(() => {
//         console.log('promise2');
//     });
// }, 0);
// console.log('start');
// start
// promise1
// timer1
// promise2
// timer2

// Promise.resolve(1)
//   .then(2)
//   .then(Promise.resolve(3))
//   .then(console.log)
//   1
// Promise {<fulfilled>: undefined}
// 看到这个题目，好多的then，实际上只需要记住一个原则：.then 或.catch 的参数期望是函数，传入非函数则会发生值透传。
// 第一个then和第二个then中传入的都不是函数，一个是数字，一个是对象，因此发生了透传，将resolve(1) 的值直接传到最后一个then里，直接打印出1

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success');
//     }, 1000);
// });
// const promise2 = promise1.then(() => {
//     throw new Error('error!!!');
// });
// console.log('promise1', promise1);
// console.log('promise2', promise2);
// setTimeout(() => {
//     console.log('promise1', promise1);
//     console.log('promise2', promise2);
// }, 2000);
// Promise {<pending>}
// promise2 Promise {<pending>}
// promise1 Promise {<fulfilled>: 'success'}
// promise2 Promise {<rejected>: Error: error!!!

// Promise.resolve()
//     .then(() => {
//         return new Error('error!!!');
//     })
//     .then((res) => {
//         console.log('then: ', res);
//     })
//     .catch((err) => {
//         console.log('catch: ', err);
//     });
// "then: " "Error: error!!!"
// 返回任意一个非 promise 的值都会被包裹成 promise 对象，因此这里的return new Error('error!!!')也被包裹成了return Promise.resolve(new Error('error!!!'))，因此它会被then捕获而不是catch。

// const promise = Promise.resolve().then(() => {
//     return promise;
//   })
//   promise.catch(console.err)
// Uncaught (in promise) TypeError: Chaining cycle detected for promise #<Promise>
// 这里其实是一个坑，.then 或 .catch 返回的值不能是 promise 本身，否则会造成死循环。

// Promise.reject('err!!!')
//     .then(
//         (res) => {
//             console.log('success', res);
//         },
//         (err) => {
//             console.log('error', err);
//         }
//     )
//     .catch((err) => {
//         console.log('catch', err);
//     });
// error err!!!
// 我们知道，.then函数中的两个参数：
// ● 第一个参数是用来处理Promise成功的函数
// ● 第二个则是处理失败的函数
// 也就是说Promise.resolve('1')的值会进入成功的函数，Promise.reject('2')的值会进入失败的函数。
// 在这道题中，错误直接被then的第二个参数捕获了，所以就不会被catch捕获了，输出结果为：error err!!!'

// Promise.resolve('1')
//     .then((res) => {
//         console.log(res);
//     })
//     .finally(() => {
//         console.log('finally');
//     });
// Promise.resolve('2')
//     .finally(() => {
//         console.log('finally2');
//         return '我是finally2返回的值';
//     })
//     .then((res) => {
//         console.log('finally2后面的then函数', res);
//     });
//     1
//     finally2
//     finally
//     finally2后面的then函数 2

// function runAsync(x) {
//     const p = new Promise((r) => setTimeout(() => r(x, console.log(x)), 1000));

//     return p;
// }
// function runReject(x) {
//     const p = new Promise((res, rej) =>
//         setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x)
//     );
//     return p;
// }
// Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// 可以看到。catch捕获到了第一个错误，在这道题目中最先的错误就是runReject(2)的结果。
// 如果一组异步操作中有一个异常都不会进入.then()的第一个回调函数参数中。会被.then()的第二个回调函数捕获。
// then的第二个参数和catch捕获错误信息的时候会就近原则，如果是promise内部报错，
// reject抛出错误后，then的第二个参数和catch方法都存在的情况下，只有then的第二个参数能捕获到，如果then的第二个参数不存在，则catch方法会捕获到。

// function runAsync(x) {
//     const p = new Promise((r) => setTimeout(() => r(x, console.log(x)), 1000));
//     return p;
// }
// Promise.race([runAsync(1), runAsync(2), runAsync(3)])
//     .then((res) => console.log('result: ', res))
//     .catch((err) => console.log(err));
//     1
// 'result: ' 1
// 2
// 3
// then只会捕获第一个成功的方法，其他的函数虽然还会继续执行，但是不是被then捕获了。

// function runAsync(x) {
//     const p = new Promise((r) => setTimeout(() => r(x, console.log(x)), 1000));
//     return p;
// }
// function runReject(x) {
//     const p = new Promise((res, rej) =>
//         setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x)
//     );
//     return p;
// }
// Promise.race([runReject(0), runAsync(1), runAsync(2), runAsync(3)])
//     .then((res) => console.log('result: ', res))
//     .catch((err) => console.log(err));
// 0
// Error: 0
// 1
// 2
// 3
// 可以看到在catch捕获到第一个错误之后，后面的代码还不执行，不过不会再被捕获了。
// 注意：all和race传入的数组中如果有会抛出异常的异步任务，那么只有最先抛出的错误会被捕获，并且是被then的第二个参数或者后面的catch捕获；
// 但并不会影响数组中其它的异步任务的执行。

// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }
// async function async2() {
//     console.log('async2');
// }
// async1();
// console.log('start');
// async1 start
// async2
// start
// async1 end
// 代码的执行过程如下：
// 1. 首先执行函数中的同步代码async1 start，之后遇到了await，它会阻塞async1后面代码的执行，因此会先去执行async2中的同步代码async2，然后跳出async1；
// 2. 跳出async1函数后，执行同步代码start；
// 3. 在一轮宏任务全部执行完之后，再来执行await后面的内容async1 end。

// 这里可以理解为await后面的语句相当于放到了new Promise中，下一行及之后的语句相当于放在Promise.then中。

// async function async1() {
//     console.log('async1 start');
//     await new Promise((resolve) => {
//         console.log('promise1');
//     });
//     console.log('async1 success');
//     return 'async1 end';
// }
// console.log('srcipt start');
// async1().then((res) => console.log(res));
// console.log('srcipt end');
//   script start
// async1 start
// promise1
// script end
// 这里需要注意的是在async1中await后面的Promise是没有返回值的，也就是它的状态始终是pending状态，所以在await之后的内容是不会执行的，包括async1后面的 .then。

// async function async1() {
//     await async2();
//     console.log('async1');
//     return 'async1 success';
// }
// async function async2() {
//     return new Promise((resolve, reject) => {
//         console.log('async2');
//         reject('error');
//     });
// }
// async1().then((res) => console.log(res));
// async2
// Uncaught (in promise) error
// 如果async函数中抛出了错误，就会终止错误结果，不会继续向下执行。
// 如果想要让错误不足之处后面的代码执行，可以使用catch来捕获
// async function async1() {
//     await Promise.reject('error!!!').catch((e) => console.log(e));
//     console.log('async1');
//     return Promise.resolve('async1 success');
// }
// async1().then((res) => console.log(res));
// console.log('script start');
// script start
// error!!!
// async1
// async1 success

// Promise.resolve()
//     .then(() => {
//         console.log('1');
//         throw 'Error';
//     })
//     .then(() => {
//         console.log('2');
//     })
//     .catch(() => {
//         console.log('3');
//         throw 'Error';
//     })
//     .then(() => {
//         console.log('4');
//     })
//     .catch(() => {
//         console.log('5');
//     })
//     .then(() => {
//         console.log('6');
//     });
// 1
// 3
// 5
// 6
// 无论是thne还是catch中，只要throw 抛出了错误，就会被catch捕获，如果没有throw出错误，就被继续执行后面的then。

/*******二、this************/

// function foo() {
//     console.log(this.a);
// }
// function doFoo() {
//     foo();
// }
// var obj = {
//     a: 1,
//     doFoo: doFoo,
// };
// var a = 2;
// obj.doFoo(); // 2
// 在Javascript中，this指向函数执行时的当前对象。在执行foo的时候，执行环境就是doFoo函数，执行环境为全局。所以，foo中的this是指向window的，所以会打印出2

// var a = 10;
// var obj = {
//     a: 20,
//     say: () => {
//         console.log(this.a);
//     },
// };
// obj.say();
// var anotherObj = { a: 30 };
// obj.say.apply(anotherObj); // 10 10
// 箭头函数时不绑定this的，它的this来自原其父级所处的上下文，所以首先会打印全局中的 a 的值10。
// 后面虽然让say方法指向了另外一个对象，但是仍不能改变箭头函数的特性，它的this仍然是指向全局的，所以依旧会输出10。
// var a = 10;
// var obj = {
//     a: 20,
//     say() {
//         console.log(this.a);
//     },
// };
// obj.say();
// var anotherObj = { a: 30 };
// obj.say.apply(anotherObj); // 20 30
// say方法中的this就会指向他所在的对象，输出其中的a的值。

// function a() {
//     console.log(this);
// }
// a.call(null); // 打印结果：window对象
// 根据ECMAScript262规范规定：如果第一个参数传入的对象调用者是null或者undefined，
// call方法将把全局对象（浏览器上是window对象）作为this的值。所以，不管传入null 还是 undefined，
// 其this都是全局对象window。所以，在浏览器上答案是输出 window 对象
// 要注意的是，在严格模式中，null 就是 null，undefined 就是 undefined：
// 'use strict';
// function a() {
//     console.log(this);
// }
// a.call(null); // null
// a.call(undefined); // undefined
// var name = 1
// var obj = {
//     name: 'cuggz',
//     fun: function () {
//         console.log(this.name);
//     },
// };
// obj.fun(); // cuggz
// console.log(new obj.fun())
// new obj.fun(); // undefined

// function Foo() {
//     getName = function () {
//         console.log(1);
//     };
//     return this;
// }
// Foo.getName = function () {
//     console.log(2);
// };
// Foo.prototype.getName = function () {
//     console.log(3);
// };
// var getName = function () {
//     console.log(4);
// };
// function getName() {
//     console.log(5);
// }
// Foo.getName(); // 2
// getName(); // 4
// console.log(Foo())
// Foo().getName(); // 1
// getName();// 1
// new Foo.getName(); // 2
// console.log(new Foo())
// new Foo().getName(); // 3
// new new Foo().getName(); // 3

// window.number = 2;
// var obj = {
//     number: 3,
//     db1: (function () { // 立即执行函数声明时执行一次，之后为return函数
//         console.log(this);
//         console.log(11111111);
//         this.number *= 4;
//         return function () {
//             console.log(this);
//             console.log(222222222222);
//             this.number *= 5;
//         };
//     })(),
// };
// var db1 = obj.db1;
// db1();
// obj.db1();
// console.log(obj.number); // 15
// console.log(window.number); // 40

// var length = 10;
// function fn() {
//     console.log(this.length);
// }
// var obj = {
//     length: 5,
//     method: function (fn) {
//         fn();
//         arguments[0]();
//     },
// };
// obj.method(fn, 1);
// 输出结果： 10 2
// 解析：
// 1. 第一次执行fn()，this指向window对象，输出10。
// 2. 第二次执行arguments[0]()，相当于arguments调用方法，this指向arguments，而这里传了两个参数，故输出arguments长度为2。

// var a = 1;
// function printA() {
//     console.log(this.a);
// }
// var obj = {
//     a: 2,
//     foo: printA, // 相当于赋值
//     bar: function () {
//         printA(); // 最终执行的是printA
//     },
// };
// obj.foo(); // 2
// obj.bar(); // 1
// var foo = obj.foo;
// foo(); // 1

// var x = 3;
// var y = 4;
// var obj = {
//     x: 1,
//     y: 6,
//     getX: function () {
//         var x = 5;
//         return (function () {
//             return this.x;
//         })();
//     },
//     getY: function () {
//         var y = 7;
//         return this.y;
//     },
// };
// console.log(obj.getX()); // 3
// console.log(obj.getY()); // 6
// 解析：
// 1. 我们知道，匿名函数的this是指向全局对象的，所以this指向window，会打印出3；
// 2. getY是由obj调用的，所以其this指向的是obj对象，会打印出6。

// function a(xx) {
//     this.x = xx;
//     return this;
// }
// var x = a(5);
// var y = a(6);
// console.log(x.x); // undefined
// console.log(y.x); // 6
// 解析：
// 1. 最关键的就是var x = a(5)，函数a是在全局作用域调用，所以函数内部的this指向window对象。所以 this.x = 5 就相当于：window.x = 5。之后 return this，也就是说 var x = a(5) 中的x变量的值是window，这里的x将函数内部的x的值覆盖了。然后执行console.log(x.x)， 也就是console.log(window.x)，而window对象中没有x属性，所以会输出undefined。
// 2. 当指向y.x时，会给全局变量中的x赋值为6，所以会打印出6。