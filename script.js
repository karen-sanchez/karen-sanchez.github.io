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
	$('#about').on('inview', function(event, isInView) {
	  if (isInView) {
	  	$('#about').addClass('animated fadeInUp');
	   } else {
	  	$('#about').off('inview');
	  }
	});
	$('#experience').on('inview', function(event, isInView) {
	  if (isInView) {
	  	$('#experience').addClass('animated fadeInUp');
	  } else {
	    $('#experience').off('inview');
	  }
	});
});
