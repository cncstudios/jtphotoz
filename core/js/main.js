//Loading//
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('body-container').style.opacity="0";
  } else if (state == 'complete') {
      setTimeout(function(){
          document.getElementById('interactive');
          document.getElementById('load').style.cssText="opacity:0;z-index:-2;";
          document.getElementById('body-container').style.opacity="1";
      },2000);
  }
}

$(document).ready(function (){
    var viewportHeight = $(window).outerHeight();
    var viewportWidth = $(window).outerWidth();
    var ratioFix = (viewportHeight/viewportWidth)
    var heightCorrection = (ratioFix*100 + "vw");
    var heightCorrection2 = (ratioFix*70 + "vw");
    console.log(viewportHeight);
    console.log(viewportWidth);
    console.log(ratioFix);
    console.log(heightCorrection);
    $('.mobile-fix').children('div').css({ height: heightCorrection });
    $('.slick-container').css({ height: heightCorrection });
    $('.slick-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3250,
        speed: 1250,
        accessibility: false,
        arrows: false,
        draggable: false,
        infinite: true,
        pauseOnHover: false,
        swipe: false,
        swipeToSlide: false,
        touchMove: false,
        waitForAnimate: false,
    });
    //Smooth Scrolling//
    $("html").easeScroll({
        frameRate: 60,
        animationTime: 1500,
        stepSize: 60,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 1,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true
    });
    //Nav Control//
    $(".down").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $("#section1").offset().top
        }, 1200, 'easeInOutExpo');
    });
    $("#logo-img").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $("body").offset().top
        }, 1200, 'easeInOutExpo');
    });
    $("#logo-img-l").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $("body").offset().top
        }, 1200, 'easeInOutExpo');
    });
    $("#tab1").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $("#section1").offset().top + 50
        }, 1200, 'easeInOutExpo');
    });
    $("#tab2").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $("#section2").offset().top + 50
        }, 1200, 'easeInOutExpo');
    });
    $("#tab3").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $("#section3").offset().top + 50
        }, 1200, 'easeInOutExpo');
    });
    //Tab Scroll CSS Control//
    $(window).scroll(function(){
        if($(window).scrollTop() < $("#section1").offset().top - 50 ){
            $(".nav-wrapper").removeClass('nav-wrapper-add');
            document.title = 'JT Photoz';
        }else{
            $(".nav-wrapper").addClass('nav-wrapper-add');
        }
        if($(window).scrollTop() >= $("#section1").offset().top - 50  && $(window).scrollTop() < $("#section2").offset().top - 50 ){
            $("#tab1").css("border-bottom","2px solid #8D0000");
            document.title = 'JT Photoz | Focus';
        }else{
            $("#tab1").css("border-bottom","2px solid rgba(0,0,0,0)");
        }
        if($(window).scrollTop() >= $("#section2").offset().top - 50  && $(window).scrollTop() < $("#section3").offset().top - 50 ){
            $("#tab2").css("border-bottom","2px solid #8D0000");
            document.title = 'JT Photoz | Capture';
        }else{
            $("#tab2").css("border-bottom","2px solid rgba(0,0,0,0)");
        }
        if($(window).scrollTop() >= $("#section3").offset().top - 50 ){
            $("#tab3").css("border-bottom","2px solid #8D0000");
            document.title = 'JT Photoz | Contact';
        }else{
            $("#tab3").css("border-bottom","2px solid rgba(0,0,0,0)");
        }
    });
    
    //Animated Arrow//
    (function($) {
    $.fn.seqfx = function() {
        var elements = this,
            l = elements.length,
            i = 0;

        function execute() {
            var current = $(elements[i]);
            i = (i) % l;

            current
                .fadeIn(350)
                .delay(1200)
                .fadeOut(350, execute);
        }
        execute();
        return this;
    };
}(jQuery));

$(".down, h4").seqfx();
});
