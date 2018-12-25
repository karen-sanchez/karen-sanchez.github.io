$(document).ready(function(){

	var win = $(window);

	// CHECK IF ELEMENT IS IN VIEW PORT
	$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top,
		elementBottom = elementTop + $(this).outerHeight(),
		viewportTop = $(win).scrollTop(),
		viewportBottom = viewportTop + $(win).height();
	
		return elementBottom > viewportTop && elementTop < viewportBottom;	
	};

	$(win).on('resize scroll', function() {
		$('.animate-div').each(function() {
			if ($(this).isInViewport()) {
				$(this).fadeIn(1000);
			} else {
				$(this).fadeOut();
			}
		});
	});

	// BACK TO TOP & STICKY ABOUT
	$(win).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			$('.back-to-top').fadeIn();
			$('.sticky-about').fadeIn();
		} else {
			$('.back-to-top').fadeOut();
			$('.sticky-about').fadeOut();
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
	// $('.experience-section .mobile p').hide();
	// $('.mobile .company-logo').click(function(){
	// 	$(this).parent().find('p').toggle('slow', function(){
	// 		$(this).prev().toggleClass('expanded');
	// 	});
	// });

	// SKILLS
	$( "i[class*='devicon']" ).each(function(){
		$(this).wrap( "<div class='col-3 col-sm-2 mb-3 text-center'></div>" );
	});
});