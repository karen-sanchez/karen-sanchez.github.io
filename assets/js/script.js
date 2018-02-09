$(document).ready(function(){

	var win = $(window);

	// BACK TO TOP
	win.scroll(function () {
		if ($(this).scrollTop() > 800) {
			$('.back-to-top').fadeIn();
		} else {
			$('.back-to-top').fadeOut();
		}
	});

	$('.back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1800);
		return false;
	});

	// PROJECTS
	$('.hidden-project').hide();

	$('.btn-more').click(function(){
		$(this).text($(this).text() == 'Less projects' ? 'More projects' : 'Less projects'); 
		$('.hidden-project').slideToggle('slow');
	});

	// SKILLS
	$( "i[class*='devicon']" ).each(function(){
		$(this).wrap( "<div class='col-3 col-sm-2 mb-3 text-center'></div>" );
	});

	// STICKY ABOUT
	win.scroll(function () {
		if ($(this).scrollTop() > 1800) {
			$('.sticky-about').fadeIn();
		} else {
			$('.sticky-about').fadeOut();
		}
	});

});