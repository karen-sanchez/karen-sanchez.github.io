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
	$('.spinner').delay(6000).fadeOut(400);
	$('.main-logo').delay(7000).fadeIn(500);
});

