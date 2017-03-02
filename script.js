$(document).ready(function(){

	$(".hello-box").hide().fadeIn(3000);
	
	function isElementVisible($elementToBeChecked)
	{
	    var TopView = $(window).scrollTop();
	    var BotView = TopView + $(window).height();
	    var TopElement = $elementToBeChecked.offset().top;
	    var BotElement = TopElement + $elementToBeChecked.height();
	    return ((BotElement <= BotView) && (TopElement >= TopView));
	}	
	// $('#circles').on('inview', function(event, isInView) {
	//   if (isInView) {
	//   	$('#circles').addClass('animated fadeInUp');
	//    } else {
	//   	$('#circles').off('inview');
	//   }
	// });
	// $('#skills').on('inview', function(event, isInView) {
	//   if (isInView) {
	//   	$('#skills').addClass('animated fadeInUp');
	//    } else {
	//   	$('#skills').off('inview');
	//   }
	// });
	// $('#projects').on('inview', function(event, isInView) {
	//   if (isInView) {
	//   	$('#projects').addClass('animated fadeInUp');
	//   } else {
	//     $('#projects').off('inview');
	//   }
	// });
	$('.spinner span:nth-child(1)').delay(4000).fadeOut(400);
	$('.spinner span:nth-child(2)').delay(4000).fadeOut(600);
	$('.spinner span:nth-child(3)').delay(4000).fadeOut(800);

	$('.first, .second, .third').hide();

	$('.first').delay(5000).fadeIn(500);
	$('.second').delay(7000).fadeIn(500);
	$('.third').delay(9000).fadeIn(500);
});

