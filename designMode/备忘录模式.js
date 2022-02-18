// Page备忘录类
var Page = function () {
    // 信息缓存对象
    var cache = {};
    /***
     * 主函数
     * 参数 page  页码
     * 参数 fn    成功回调函数
     */
    return function (page, fn) {
        // 判断该页数据是否在缓存中
        if (cache[page]) {
            // 恢复到该页状态，显示该页内容
            showPage(page, cache[page]);
            // 执行成功回调函数
            fn && fn();
        } else {
            // 若缓存Cache中无该页数据
            $.post(
                './data/getNewsData.php',
                {
                    // 请求携带数据page页码
                    page: page,
                },
                function (res) {
                    // 成功返回
                    if (res.errNo == 0) {
                        // 显示该页数据
                        showPage(page, res.data);
                        // 将该页面数据种入缓存中
                        cache[page] = res.data;
                        // 执行成功回调函数
                        fn && fn();
                    } else {
                        // 处理异常
                    }
                }
            );
        }
    };
};
