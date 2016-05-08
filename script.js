$(document).ready(function() {


    $('.hola').hide().show(1000);
    	$('.top').hide().show(2000);
            $('.middle').hide().show(4000);
                $('.bottom').hide().show(8000);

    setTimeout(function() {
        $('.hola').css('color', '#f2f2f2');
    }, 3000);

    setTimeout(function() {
        $('.top').css('color', '#f2f2f2');
    }, 4000);

    setTimeout(function() {
        $('.middle').css('color', '#f2f2f2');
    }, 6000);

    setTimeout(function() {
        $('.bottom').css('color', '#f2f2f2');
    }, 8000);

    $('#bio h3').css('display', 'block');
})

