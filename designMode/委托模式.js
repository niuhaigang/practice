ul.onclick = function (e) {
    var e = e || window.event,
        tar = e.event || e.srcElement;
    if (tar.nodeName.toLowerCase() === 'li') {
        tar.style.backgroundColor = 'grey';
    }
};
