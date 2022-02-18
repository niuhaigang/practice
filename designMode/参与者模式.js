// 兼容各个浏览器
if (Function.prototype.bind === undefined) {
    // 实质是函数绑定和函数柯里化
    Function.prototype.bind = function (context) {
        // 缓存数组slice方法
        var Slice = Array.prototype.slice,
            // 从第二个参数截取参数
            args = Slice.call(arguments, 1),
            // 保存当前函数引用
            that = this;
        // 返回新函数
        return function () {
            // 将参数数组化
            var addArgs = Slice.call(arguments),
                // 拼接参数，注意：传入的参数放在了后面
                allArgs = args.concat(addArgs);
            // 对当前函数装饰并返回
            return that.apply(context, allArgs);
        };
    };
}

// 反柯里化
Function.prototype.uncurry = function () {
    // 保存当前对象
    var that = this;
    return function () {
        return Function.prototype.call.apply(that, arguments);
    };
};
