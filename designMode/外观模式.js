// 解决不兼容绑定事件
function addEvent(dom, type, fn) {
    // 对于支持DOM2级事件处理程序addEventListener方法的浏览器
    if (dom.addEventListener) {
        dom.addEventListener(type, fn, false);
        // 对于不支持addEventListener方法但支持attachEvent方法的浏览器
    } else if (dom.attachEvent) {
        dom.attachEvent('on' + type, fn);
        // 对于不支持addEventListener方法也不支持attachEvent方法，但支持on+'事件名'的浏览器
    } else {
        dom['on' + type] = fn;
    }
}

// 解决不兼容默认行为事件
// 获取事件对象
var getEvent = function (event) {
    // 标准浏览器返回event,IE下window.event
    return event || window.event;
};
// 获取元素
var getTarget = function (event) {
    var event = getEvent(event);
    // 标准浏览器下event.target,ie下event.srcElement
    return event.target || event.srcElement;
};
// 阻止默认行为
var preventDefault = function (event) {
    var event = getEvent(event);
    // 标准浏览器
    if (event.preventDefault) {
        event.preventDefault();
        // IE浏览器
    } else {
        event.returnValue = false;
    }
};

// 简约版属性样式方法库
var A = {
    // 通过id获取元素
    g: function (id) {
        return document.getElementById(id);
    },
    // 设置元素css属性
    css: function (id, key, value) {
        document.getElementById(id).style[key] = value;
    },
    // 设置元素属性
    attr: function (id, key, value) {
        document.getElementById(id)[key] = value;
    },
    html: function (id, html) {
        document.getElementById(id).innerHTML = html;
    },
    // 为元素绑定事件
    on: function (id, type, fn) {
        document.getElementById(id)['on' + type] = fn;
    },
};
