window.onload = function () {
    // 如果不在A页面中返回，不执行
    if (top == self) return;
    // 获取并解析searcher中的数据
    var arr = location.search.substr(1).split('&'),
        // 预定义函数名称以及参数集
        fn,
        args;
    for (var i = 0, len = arr.length, item; i < len; i++) {
        // 解析seacher中的每组数据
        item = arr[i].split('=');
        // 判断是否为回调函数
        if (item[0] == 'callback') {
            // 设置回调函数
            fn = item[1];
            // 判断是否是参数集
        } else if (item[0] == 'arg') {
            // 设置参数集
            args = item[1];
        }
    }
    try {
        // 执行A页面中预设的回调函数
        eval('top.' + fn + '("' + args + '")');
    } catch (e) {}
};
