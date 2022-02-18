// selector选择符，context上下文
var A = function (selector, context) {
    return new A.fn.init(selector, context);
};
A.fn = A.prototype = {
    constructor: A,
    init: function (selector, context) {
        // 获取元素长度
        (this.length = 0),
            // 默认获取元素的上下文为document
            (context = context || document);
        // 如果是id选择符，按位非将-1转化为0，转化为布尔值false
        if (~selector.indexOf('#')) {
            // 截取id并选择
            this[0] = document.getElementById(selector.slice(1));
            this.length = 1;
            // 如果是元素名称
        } else {
            // 在上下文中选择元素
            var doms = context.getElementsByTagName(selector),
                i = 0, // 从第一个开始筛选
                len = doms.length; // 获取元素长度
            for (; i < len; i++) {
                // 压入this中
                this[i] = doms[i];
            }
            // 校正长度
            this.length = len;
        }
        // 保存上下文
        this.context = context;
        // 保存选择符
        this.selector = selector;
        // 返回对象
        return this;
    },
    // 增强数组
    push: [].push,
    sort: [].sort,
    splice: [].splice,
};
// 对象扩展
A.extend = A.fn.extend = function () {
    // 扩展对象从第二个参数算起
    var i = 1,
        // 获取参数长度
        len = arguments.length,
        // 第一个参数为源对象
        target = arguments[0],
        // 扩展对象中属性
        j;
    // 如果只传一个参数
    if (i == len) {
        // 源对象为当前对象
        target = this;
        // i 从0计数
        i--;
    }
    // 遍历参数中扩展对象
    for (; i < len; i++) {
        // 遍历扩展对象中属性
        for (j in arguments[i]) {
            // 扩展源对象
            target[j] = arguments[i][j];
        }
    }
    // 返回源对象
    return this;
};
A.extend(A, { author: 'name' });
console.log(A.author)
