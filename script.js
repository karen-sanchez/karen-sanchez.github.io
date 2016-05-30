$(document).ready(function() {


    $('.hola').hide().show(1000);
    	$('.top').hide().show(2300);
            $('.middle').hide().show(3300);
                $('.bottom').hide().show(4000);

    setTimeout(function() {
        $('.hola').css('color', '#ff5050');
    }, 3000);

    setTimeout(function() {
        $('.top').css('color', '#ff5050');
    }, 3500);

    setTimeout(function() {
        $('.middle').css('color', '#ff5050');

    }, 4000);

    setTimeout(function() {
        $('.bottom').css('color', '#ff5050');
    }, 4500);

    $('#bio h3').css('display', 'block');

    setTimeout(function() {
        $('h5').css('opacity', '0.1');
    }, 2500);
})

    $(window).scroll(function(){
        if($(this).scrollTop() > 800){
            $('.scrollup').fadeIn(3000);
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 800);
        return false;
    });


    