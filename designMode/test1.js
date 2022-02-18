// var CheckObject = function () {
//     return {
//         checkName: function () {
//             console.log("验证名字");
//         },
//         checkEmail: function () {
//             console.log("验证邮箱");
//         },
//         checkPassword: function () {
//             console.log("验证密码");
//         },
//     };
// };
// var a = CheckObject();
// a.checkName();
// a.checkEmail();
// a.checkPassword();

// var CheckObject = function () {
//     this.checkName = function () {
//         console.log("验证名字");
//     };
//     this.checkEmail = function () {
//         console.log("验证邮箱");
//     };
//     this.checkPassword = function () {
//         console.log("验证密码");
//     };
// };
// var a = new CheckObject();
// a.checkName();
// a.checkEmail();
// a.checkPassword();

// var CheckObject = function () {};
// CheckObject.prototype = {
//     checkName: function () {
//         console.log("验证名字");
//     },
//     checkEmail: function () {
//         console.log("验证邮箱");
//     },
//     checkPassword: function () {
//         console.log("验证密码");
//     },
// };
// var a = new CheckObject();
// console.log(a)
// a.checkName();
// a.checkEmail();
// a.checkPassword();

// var CheckObject = function () {};
// CheckObject.prototype = {
//     checkName: function () {
//         console.log("验证名字");
//         return this;
//     },
//     checkEmail: function () {
//         console.log("验证邮箱");
//         return this;
//     },
//     checkPassword: function () {
//         console.log("验证密码");
//         return this;
//     },
// };
// var a = new CheckObject();
// console.log(a);
// a.checkName().checkEmail().checkPassword();

// Function.prototype.addMethod = function (name, fn) {
//     this.prototype[name] = fn;
//     return this;
// };
// var methods = function () {};
// methods
//     .addMethod("checkName", function () {
//         console.log("验证名字");
//         return this;
//     })
//     .addMethod("checkPassword", function () {
//         console.log("验证密码");
//         return this;
//     });
// var m = new methods();
// console.log(m)
// m.checkName().checkPassword();

// var Book = function (id, name, price) {
//     // 私有属性
//     var num = 1;
//     // 私有方法
//     function checkId() {}
//     // 特权方法
//     this.getName = function () {};
//     this.getPrice = function () {};
//     this.setName = function () {};
//     this.setPrice = function () {};
//     // 对象共有方法
//     this.id = id;
//     // 构造器
//     this.setName(name);
//     this.setPrice(price);
// };
// // 类静态共有属性（对象不能访问）
// Book.isChinese = true;
// // 类静态公有方法（对象不能访问）
// Book.resetTime = function () {
//     console.log("new Time");
// };
// Book.prototype = {
//     isJSBook: false,
//     display: function () {},
// };
// var b = new Book(11, 'Javascript', 50);
// console.log(Book)
// console.log(Book.isChinese)
// Book.resetTime();
// console.log(b)
// console.log(b.num)
// console.log(b.isJSBook)
// console.log(b.id)
// console.log(b.isChinese)

// 利用闭包实现
// var Book = (function () {
//     // 静态私有变量
//     var bookNum = 0;
//     // 静态私有方法
//     function checkBook(name) {}
//     // 返回构造函数
//     function _book(newId, newName, newPrice) {
//         // 私有变量
//         var name, price;
//         // 私有方法
//         function checkID(id) {}
//         // 特权方法
//         this.getName = function () {};
//         this.getPrice = function () {};
//         this.setName = function () {};
//         this.setPrice = function () {};
//         // 公有属性
//         this.id = newId;
//         // 公有方法
//         this.copy = function () {};
//         bookNum++;
//         if (bookNum > 100) throw new Error("100本书");
//         // 构造器
//         this.setName(name);
//         this.setPrice(price);
//     }
//     _book.prototype = {
//         // 静态公有属性
//         isJSBook: false,
//         // 静态公有方法
//         display: function () {},
//     };
//     return _book;
// })();
