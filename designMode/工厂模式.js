//  简单工厂模式
// function createPop(type, text) {
//     // 创建一个对象，并对对象扩展属性和方法
//     var o = new Object();
//     o.content = text;
//     o.show = function () {
//         // 显示方法
//     };
//     if (type === "alert") {
//         console.log("警示框差异部分");
//     }
//     if (type === "prompt") {
//         console.log("提示框差异部分");
//     }
//     if (type === "confirm") {
//         console.log("确认框差异部分");
//     }
//     // 将对象返回
//     return o;
// }
// var userNameAlert = createPop("alert", "用户名只能是26个字母和数字");

// 安全模式创建工厂类
// var Factory = function (type, content) {
//     if (this instanceof Factory) {
//         var s = new this[type](content);
//         return s;
//     } else {
//         return new Factory(type, content);
//     }
// };
// Factory.prototype = {
//     Java: function (content) {},
//     JavaScript: function (content) {},
// };

// 抽象工厂方法
// var VehicleFactory = function (subType, superType) {
//     // 判断抽象工厂中是否有该抽象类
//     if (typeof VehicleFactory[superType] === "function") {
//         // 缓存类
//         function F() {}
//         // 继承父类属性和方法
//         F.prototype = new VehicleFactory[superType]();
//         // 将子类constructor指向子类
//         subType.constructor = subType;
//         // 子类原型继承“父类”
//         subType.prototype = new F();
//     } else {
//         throw new Error("未创建该抽象类");
//     }
// };
// // 小汽车抽象类
// VehicleFactory.Car = function () {
//     this.type = "car";
// };
// VehicleFactory.Car.prototype = {
//     getPrice: function () {
//         return new Error("抽象方法不能调用");
//     },
//     getSpeed: function () {
//         return new Error("抽象方法不能调用");
//     },
// };
// // 公交车抽象类
// VehicleFactory.Bus = function () {
//     this.type = "bus";
// };
// VehicleFactory.Bus.prototype = {
//     getPrice: function () {
//         return new Error("抽象方法不能调用");
//     },
//     getPassengerNum: function () {
//         return new Error("抽象方法不能调用");
//     },
// };
// // 货车抽象类
// VehicleFactory.Bus = function () {
//     this.type = "truck";
// };
// VehicleFactory.Bus.prototype = {
//     getPrice: function () {
//         return new Error("抽象方法不能调用");
//     },
//     getTrainload: function () {
//         return new Error("抽象方法不能调用");
//     },
// };

// // 宝马汽车子类
// var BMW = function (price, speed) {
//     this.price = price;
//     this.speed = speed;
// };
// // 抽象工厂实现对Car抽象类的继承
// VehicleFactory(BMW, "Car");
// BMW.prototype.getPrice = function () {
//     return this.price;
// };
// BMW.prototype.getSpeed = function () {
//     return this.speed;
// };
