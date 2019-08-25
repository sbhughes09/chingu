

$(window).scroll(function() {
    parallax();
});

function parallax() {
    /*track screen as it scrolls*/
    var wScroll = $(window).scrollTop();
    
    $('.parallax-bg').css('background-position', 'center ' + (wScroll*0.75) + 'px');
}

$(document).ready(function() {
    $('.menu').click(function(){
        $('.navbar-nav').toggleClass('active');
    });
});

