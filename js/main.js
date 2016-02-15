
$(document).ready(function() {
    $('section#screenshots a').on('click', function() {
        $('div#modal img').attr('src',$(this).attr('data-image-url'))
    });// end of on click event

    var nav = $('.navbar-fixed-top');
    var distance = $('.navbar-fixed-top').offset();

    if (distance.top >= 300) {
        nav.addClass('effect');
    }

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if (scroll >= 300) {
            nav.addClass('effect');
        } else {
            nav.removeClass('effect');
        }
    });//end of scroll function

    $('.features-image img').waypoint(function(){
        console.log('you have entered');
    });

});

smoothScroll.init({
    speed: 700,
    easing: 'easeInOutQuad',
    updateURL: false,
    offset: 0,

});
