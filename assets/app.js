'use strict';

$(document).ready(function () {
    //data-slider
    $('[data-slider]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        fade: false,
        autoplay: true,
        appendArrows: '.slider-arrows',
        prevArrow: '<i class="fas fa-chevron-left">',
        nextArrow: '<i class="fas fa-chevron-right">',
    });

    
    /*Fixed Header*/
    let header = $('#header'),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };
    
    
    /*Smooth Scroll*/
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");


        $("html, body").animate({
            scrollTop: blockOffset
        }, 700);
    });
    
    
    /*Nav-toggle*/
    $("#nav-toggle").on("click", function (event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
    
    
    
    //data-slider--news
    $('[data-slider--news]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        fade: false,
        autoplay: true,
        appendArrows: '.slider-arrows--news',
        prevArrow: '<i class="fas fa-chevron-left news">',
        nextArrow: '<i class="fas fa-chevron-right news">',
    });
});


