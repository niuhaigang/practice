// 模型（model）层、视图（view）层、控制器（controller）层

// 页面加载后创建MVC对象
$(function () {
    // 初始化MVC对象
    var MVC = MVC || {};
    // 初始化MVC数据模型层
    MVC.model = (function () {
        // 内部数据对象
        var M = {};
        // 服务器端获取的数据，通常通过Ajax获取并存储，后面的案例为简化实现，直接作为同步数据写在页面中，减少服务器端异步请求操作
        M.data = {};
        // 配置数据，页面加载时即提供
        M.conf = {};
        // 返回数据模型层对象操作方法
        return {
            // 获取服务器端数据
            getData: function (m) {
                // 根据数据字段获取数据
                return M.data[m];
            },
            // 获取配置数据
            getConf: function (c) {
                // 根据配置数据字段获取配置数据
                return M.conf[c];
            },
            // 设置服务器端数据（通常将服务器端异步获取到的数据，更新该数据）
            setData: function (m, v) {
                // 设置数据字段m对应的数据V
                M.data[m] = v;
                return this;
            },
            setConf: function (c, v) {
                // 设置配置数据字段c对应的配置数据v
                M.conf[c] = v;
                return this;
            },
        };
    })();
    // 初始化MVC视图层
    MVC.view = (function () {
        // 模型数据层对象操作方法引用
        var M = MVC.model;
        // 内容视图创建方法对象
        var V = {};
        // 获取视图接口方法
        return function (v) {
            // 根据视图名称返回视图（由于获取的是一个方法，这里需要将该方法执行一遍以获取相应视图）
            V(v)();
        };
    })();
    // 初始化MVC控制器层
    MVC.ctrl = (function () {
        // 模型数据层对象操作方法引用
        var M = MVC.model;
        // 视图数据层对象操作方法引用
        var V = MVC.view;
        // 控制器创建方法对象
        var C = {};
    })();
});
