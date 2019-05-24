/*
* TABLE OF CONTENTS
*
* List JS file
* MOBILE MENU
*/

/* > List JS file */
// '/vendor/jquery-3.1.1.js',

/* > MOBILE MENU */
function openRight() {
    $("#menu-right").addClass('go-visible');
    $("#mask").removeClass().addClass('show');
    $('body,html').css('overflow', 'hidden');
};

function closeRight() {
    $("#menu-right").removeClass('go-visible');
    $("#mask").removeClass();
    $('body,html').css('overflow', 'initial');
};

$(".header__hamburger button").click(function() {
    openRight();
});
$("#mask").click(function() {
    closeRight();
});
$(".nav-mobile > .title > a").click(function() {
    closeRight();
});

$('.nav__parent .btn-expand').click(function()
{
    _this = $(this);
    _this.parent().siblings().removeClass('is-active')
    _this.parent().addClass('is-active')
});

$(".header__search button").click(function() {
    $('.search-header').toggleClass('is-active');
});


/* > bx slider */
$('.header__stock .wrap').bxSlider({
    pager : false,
    slideWidth: 130,
    minSlides: 2,
    maxSlides: 3,
    slideMargin: 20,
    nextSelector: ".header__stock .btn-next",
    prevSelector: ".header__stock .btn-prev"
});

$('.event-timeline .wrap').bxSlider({
    controls: false,
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 30
});

$('.album-box .wrap').bxSlider({
    controls: false,
    minSlides: 2,
    maxSlides: 2,
    moveSlides: 2,
    slideWidth: 160,
    slideMargin: 10
});

$('.fullSize-box-02 .wrap').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    nextSelector: ".fullSize-box-02 .btn-next",
    prevSelector: ".fullSize-box-02 .btn-prev"
});

$('.slider-nav .wrap').bxSlider({
    auto : true,
    autoDelay : 1000,
    pause : 5000,
    minSlides: 1,
    maxSlides: 2,
    nextSelector: ".slider-nav .btn-next",
    prevSelector: ".slider-nav .btn-prev"
});

$('.portrait-box .wrap').bxSlider({
    auto : true,
    pause : 10000,
    oneToOneTouch : false,
    controls: false,
    minSlides: 1,
    maxSlides: 1
});
