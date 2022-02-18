// jQuery适配器
window.A = A = jQuery;

// 适配接口

function ajaxAdapter(data) {
    // 处理数据并返回新数据
    return [data['key1'], data['key2'], data['key3']];
}
// 如果日后后端数据有任何变化我们只需相应地更改ajaxAdapter转换格式即可
$.ajax({
    url: 'someAdress.php',
    success: function (data, status) {
        if (data) {
            // 使用适配后的数据-返回对象
            doSomething(ajaxAdapter(data));
        }
    },
});
