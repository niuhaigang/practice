// 模板 <a href="#" class="data-lang {%if(is_selected){%}selected{%}%}" value="{%=value%}"></a>
// 数据 {is_selected:true, value:'zh',text:'zh-text'}
// 输出结果：<a href="#" class="data-lang selected" value="zh">zh-text</a>

// 模板引擎模块
F.module('lib/template', function () {
    // 模板引擎 处理数据与编译模板入口
    var _TplEngine = function () {},
        // 获取模板
        _getTpl = function () {},
        // 处理模板
        _dealTpl = function () {},
        //编译执行
        _compileTpl = function () {};
    return _TplEngine;
});
