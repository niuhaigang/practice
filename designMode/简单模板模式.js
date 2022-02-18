// 命名空间 单体对象
var A = A || {};
// 主体展示区容器
A.root = document.getElementById('container');
// 创建视图方法集合
A.strategy = {
    listPart: function () {
        // 模块模板
        var tpl = A.view(['h2', 'p', 'ul']),
        // 列表项模板
        liTpl = A.formateString(A.view('li'), {li: A.view(['string', 'span'])})
    },
};
// 创建视图入口
A.init = function (data) {
    // 根据传输的视图类型创建视图
    this.strategy[data.type](data);
};
// 模板渲染方法
A.formateString = function (str, data) {
    return str.replace(/\{#(\w+)#\}/g, function (match, key) {
        return typeof data[key] === undefined ? '' : data[key];
    });
};

// 模板生成器name:标识
A.view = function (name) {
    // 模板库
    var v = {
        // 代码模块
        code: '<pre><code>{#code#}</code></pre>',
        // 图片模板
        img: '<img src="{#src#}" alt="{#alt#}" title="{#title#}"/>',
        // 带有id和类的模块魔板
        part: '<div id="{#id#}" class="{#class#}">{#part#}</div>',
        // 组合模式
        theme: ['<div>', '<h1>{#title#}</h1>', '{#content#}', '</div>'].join(
            ''
        ),
    };
    // 如果参数是一个数组，则返回多行模板
    if (Object.prototype.toString.call(name) === '[object Array]') {
        // 模板缓存器
        var tpl = '';
        // 遍历标识
        for (var i = 0, len = name.length; i < len; i++) {
            // 模板缓存器追加模板
            tpl += arguments.callee(name[i]);
        }
        // 返回最终模板
        return tpl;
    } else {
        // 如果模板库中有该模板则返回该模板，否则返回简易模板
        return v[name]
            ? v[name]
            : '<' + name + '>{#' + name + '#} </' + name + '>';
    }
};
