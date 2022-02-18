// 模型（Model）- 视图（View）- 视图模型（ViewModel） :为视图层（View）量身定做一套视图模型（ViewModel）,并在视图模型（ViewModel）中创建属性和方法，
// 为视图层（View）绑定数据（Model）并实现交互
// 可以将视图独立出来，也可以通过创建视图反过来控制管理器实现组件需求
~(function () {
    // 在闭包中获取全局变量
    var window = this || (0, eval)('this');
    // 获取页面字体大小，作为创建页面UI尺寸参照物
    var FONTSIZE = function () {
        // 获取页面body元素字体大小并转化成整数
        return parseInt(
            document.body.currentStyle
                ? document.body.currentStyle['fontSize']
                : getComputedStyle(document.body, false)['fontSize']
        );
    };
    // 视图模型对象
    var VM = (function () {
        // 组件创建策略对象
        var Method = {
            // 进度条组件创建方法
            progressbar: function () {},
            // 滑动条组件创建方法
            slider: function () {},
        };
    })();
    // 将视图模型对象绑定在Window上，供外部获取
    window.VM = VM;
})();
