window.addEventListener('load', function() {
    //导航部分
    var underline = document.querySelector('.underline');
    var daohang = document.querySelector('.daohang');
    var lis = daohang.querySelectorAll('li');
    var current = 0;
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('mouseenter', function() {
            animate(underline, this.offsetLeft);
        })
        lis[i].addEventListener('mouseleave', function() {
            animate(underline, current);
        })
        lis[i].addEventListener('click', function() {
            current = this.offsetLeft;
        });
    }
})