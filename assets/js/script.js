$(document).ready(function(){

	var win = $(window);

	// BACK TO TOP
	win.scroll(function () {
		if ($(this).scrollTop() > 1000) {
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

	$(function() {
		$('.project-link').hover(function(){
			$(this).find('.project-screenshot').addClass('hovered-border');
		},
		function(){
			$(this).find('.project-screenshot').removeClass('hovered-border');
		});
	});

	// EXPERIENCE
	$('.experience-section .mobile p').hide();

	$('.mobile .company-logo').click(function(){
		$(this).parent().find('p').toggle('slow', function(){
			$(this).prev().toggleClass('expanded');
		});
	});

	// SKILLS
	$( "i[class*='devicon']" ).each(function(){
		$(this).wrap( "<div class='col-3 col-sm-2 mb-3 text-center'></div>" );
	});

	// STICKY ABOUT
	win.scroll(function () {
		if ($(this).scrollTop() > 1000) {
			$('.sticky-about').fadeIn();
		} else {
			$('.sticky-about').fadeOut();
		}
	});

});