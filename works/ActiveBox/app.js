$(function () {
    //fixed header 
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);

    $(window).on('scroll resize', function () {
        scrollPos = $(this).scrollTop();


        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass('fixed');
        }
        else {
            header.removeClass('fixed');
        }
    };


    // smooth scroll
    console.log($('[data-scroll]'));
    $('[data-scroll]').on('click', function (e) {
        e.preventDefault();


        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass('showNav');

        console.log(elementOffset);


        $('html, body').animate({
            scrollTop: elementOffset - 70
        }, 700);

    });

    // navToggle

    let nav = $('#nav');
    let navToggle = $('#navToggle');
    navToggle.on('click', function (event) {
        event.preventDefault();

        nav.toggleClass('showNav');
    });

    // reviews

    let slider = $('#reviewsSlider');

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

});