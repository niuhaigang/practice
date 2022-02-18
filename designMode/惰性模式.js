// 第一种加载时损失性能，但是第一次调用时不损失性能
var createXHR = (function () {
    if (typeof XMLHttpRequest != 'undefined') {
        return function () {
            return new XMLHttpRequest();
        };
    } else if (typeof ActiveXObject != 'undefined') {
        return function () {};
    } else {
        return function () {
            throw new Error('No XHR object acailable');
        };
    }
})();

// 第二种 加载时不损失性能，但是第一次调用时损失性能
function createXHR() {
    if (typeof XMLHttpRequest != 'undefined') {
        createXHR = function () {
            return new XMLHttpRequest();
        };
    } else if (typeof ActiveXObject != 'undefined') {
        createXHR = function () {};
    } else {
        createXHR = function () {
            throw new Error('No XHR object acailable.');
        };
    }
    return createXHR();
}
