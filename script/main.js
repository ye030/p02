$(document).ready(function () {

    //원스크롤 레이아웃:헤더
    let n = $('.gnb > ul > li').index();
    console.log(n); //0 

    let gnb = $('.gnb > ul > li');

    gnb.click(function () {

        n = $(this).index();
        console.log(n);

        $('html, body').animate({ scrollTop: $('main section').eq(n).offset().top }, 500);

        return false;



    });
    //메인홈화면:애니메이션
    const txtImg = $('.home_ani img:first-child');

    txtImg.css('opacity', '0').animate({ 'left': '140px', 'opacity': '1' }, 1300);

    function moveSlide() {
        $('.slide > ul').animate({ 'margin-left': '0px' }, 500, function () {
            $('.slide > ul').css('margin-left', '0px');
        });
    }


    $('.slide > ul > li:last-child').insertBefore('.slide > ul > li:first-child');

    $('.slide > ul').css('margin-left', '-1922px');

    function moveSlide() {
        $('.slide > ul').animate({ 'margin-left': '-1922px' }, 500, function () {
            $('.slide > ul > li:first-child').insertAfter('.slide > ul > li:last-child');
            $('.slide > ul').css('margin-left', '0px');
        });
    }

    let Timer = setInterval(moveSlide, 4000);

    //qna
    let qna = $(".qna > ul > li > a");

    qna.click(function (e) {
        if (e.target.className !== "open") {
            $(this).next().slideDown().parent().siblings().find("p").slideUp();
            $(this)
                .find("i")
                .addClass("act2")
                .parent()
                .parent()
                .siblings()
                .find("i")
                .removeClass("act2");
            $(e.target).parent().siblings().find("a").removeClass("open");
            $(this).addClass("open");
        } else {
            $(this).removeClass("open");
            $(this).next().slideUp();
        }

        return false;
    });
});
