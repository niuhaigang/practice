// 中介者对象
var Mediator = (function () {
    // 消息对象
    var _msg = {};
    return {
        /***
         * 订阅消息方法
         * 参数 type      消息名称
         * 参数 action    消息回调函数
         */
        register: function (type, action) {
            // 如果该消息存在
            if (_msg[type]) {
                // 存入回调函数
                _msg[type].push(action);
            } else {
                // 不存在 则建立该消息容器
                _msg[type] = [];
                // 存入新消息回调函数
                _msg[type].push(action);
            }
        },
        /***
         * 发布消息方法
         * 参数 type  消息名称
         */
        send: function (type) {
            // 如果该消息已经被订阅
            if (_msg[type]) {
                // 遍历已存储的消息回调函数
                for (var i = 0, len = _msg[type].length; i < len; i++) {
                    // 执行该回调函数
                    _msg[type][i] && _msg[type][i]();
                }
            }
        },
    };
})();

// 单元测试
// 订阅demo消息 执行回调函数--输出first
Mediator.register('demo', function () {
    console.log('first');
});
// 订阅demo消息执行回调函数--输出second
Mediator.register('demo', function () {
    console.log('second');
});
// 发布demo消息
Mediator.send('demo');
