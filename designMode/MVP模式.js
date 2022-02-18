// 模型（Model）视图（View）管理器（Presenter: 负责管理数据、UI视图创建、交互逻辑、动画特效等待一切事物）
// MVP模块
~(function (window) {
    // MVP构造函数
    var MVP = function () {};
    // 数据层
    MVP.model = (function () {
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
            /**
             * 设置数据
             * @param {*} m 模块名称
             * @param {*} v 模块数据
             * @returns
             */
            setData: function (m, v) {
                M.data[m] = v;
                return v;
            },
            /**
             * 设置数据
             * @param {*} c 配置项目名称
             * @param {*} v 配置项值
             * @returns
             */
            setConf: function (c, v) {
                M.conf[c] = v;
                return v;
            },
        };
    })();
    // 视图层
    MVP.view = (function () {
        // 子元素或者兄弟元素替换模板
        var REPLACEKEY = '_REPLACEKEY_';
        // 获取完整元素模板
        function getHTML(str, replacePos) {}
        /**
         * 数组迭代器
         * @param {*} arr  数组
         * @param {*} fn   回调函数
         */
        function eachArray(arr, fn) {
            // 遍历数组
            for (var i = 0, len = arr.length; i < len; i++) {
                // 将索引值、索引对应值、数组长度传入回调函数中并执行
                fn(i, arr[i], len);
            }
        }
        /**
         * 替换兄弟元素模板或者子元素模板
         * @param {*} str  原始字符串
         * @param {*} rep  兄弟元素模板或者子元素模板
         * @returns
         */
        function formateItem(str, rep) {
            // 用对应元素字符串替换兄弟元素模板或者子元素模板
            return str.replace(new RegExp(REPLACEKEY, 'g'), rep);
        }
        // 模板解析器
        return function (str) {
            // 模板层级数组
            var part = str
                    // 去除收尾空白符
                    .replace(/^\s+|\s+$/g, '')
                    // 去除>两端空白符
                    .replace(/^\s+(>)\s+/g, '$1')
                    // 以>分组
                    .split('>'),
                // 模块视图根模块
                html = REPLACEKEY,
                // 同层元素
                item,
                // 同级元素模块
                nodeTpl;
            // 遍历每组元素
            eachArray(part, function (partIndex, partValue, partLen) {
                // 为同级元素分组
                item = partValue.split('+');
                // 设置同级元素初始模板
                nodeTpl = REPLACEKEY;
                // 遍历同级每一个元素
                eachArray(item, function (itemIndex, itemValue, itemLen) {
                    // 用渲染元素得到的模板去渲染同级元素模板，此处简化逻辑处理
                    // 如果itemIndex(同级元素索引)对应元素不是最后一个 则作为兄弟元素处理
                    // 否则，如果partIndex(层级索引)对应的层级不是最后一层 则作为父层级处理
                    // (该层级有子层级，即该元素是父元素)
                    // 否则，该元素无兄弟元素，无子元素
                    nodeTpl = formateItem(
                        nodeTpl,
                        getHTML(
                            itemValue,
                            itemIndex === itemLen - 1
                                ? partIndex === partLen - 1
                                    ? ''
                                    : 'in'
                                : 'add'
                        )
                    );
                });
                // 用渲染子层级得到的模板去渲染父层级模板
                html = formateItem(html, nodeTpl);
            });
            // 将参数字符串转换成期望怒模板
            return html;
        };
    })();
    // 管理层
    MVP.presenter = function () {
        var V = MVP.view;
        var M = MVP.model;
        var C = {};
        return {
            // 执行方法
            init: function () {
                // 遍历内部管理器
                for (var i in C) {
                    // 执行所有管理器内部逻辑
                    C[i] && C[i](M, V, i);
                }
            },
            /**
             * 为管理器添加模块
             * @param {*} modName  模块名称
             * @param {*} pst      模块管理器
             * @returns
             */
            add: function (modName, pst) {
                C[modName] = pst;
                return this;
            },
        };
    };
    // MVP入口
    MVP.init = function () {
        this.presenter.init();
    };
    // 暴露MVP对象，这样即可在外部访问MVP
    window.MVP = MVP;
})(window);

window.onload = function () {
    // 执行管理器
    MVP.init();
};
