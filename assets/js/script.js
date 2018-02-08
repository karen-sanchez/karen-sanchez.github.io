$(document).ready(function(){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 800) {
			$('.back-to-top').fadeIn();
		} else {
			$('.back-to-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('.back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1800);
		return false;
	});

	$('.hidden-project').hide();
	$('.btn-more').click(function(){
		$('.hidden-project').show('slow');
		console.log('more clicked');
	});
});