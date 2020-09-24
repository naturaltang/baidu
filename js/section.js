window.addEventListener('load', function() {
    // 第二部分
    $("section .news li .right").mouseenter(function() {
        $(this).siblings("div").find(".trang").show();
        $(this).siblings("div").find(".circle .dis").css("backgroundColor", "#64b7f7");
    })
    $("section .news li .right").mouseleave(function() {
        $(this).siblings("div").find(".trang").hide();
        $(this).siblings("div").find(".circle .dis").css("backgroundColor", "#ccc");
    })

    // 第三部分
    $(".workImg .row .col-xs-4").mouseenter(function() {
        $(this).find("div .m1").show();
        $(this).children("p").find("span span").css({
            "width": "70px",
            "margin-left": "-25px",
            "background-color": "black"
        });
    })
    $(".workImg .row .col-xs-4").mouseleave(function() {
        $(this).find("div .m1").hide();
        $(this).children("p").find("span span").css({
            "width": "25px",
            "margin-left": "0",
            "background-color": "white"
        })
    })
    $(".bg1").mouseenter(function() {
        $(".Work").css("background-image", "url(images/bg1.jpg)")
    })
    $(".bg2").mouseenter(function() {
        $(".Work").css("background-image", "url(images/bg2.jpg)")
    })
    $(".bg3").mouseenter(function() {
        $(".Work").css("background-image", "url(images/bg3.jpg)")
    })



    // 第五部分
    // 轮播图
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 第六部分
    $(".col-xs-3").mouseenter(function() {
        $(this).children(".out").show();
        $(this).find(".in p").hide();
    })
    $(".col-xs-3").mouseleave(function() {
        $(this).children(".out").hide();
        $(this).find(".in p").show();
    })
})