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
	$('#skills').on('inview', function(event, isInView) {
	  if (isInView) {
	  	$('#skills').css('visibility', 'visible');
	  	$('#skills').addClass('animated fadeInUp');
	   } else {
	  	$('#skills').off('inview');
	  }
	});
	$('#experience').on('inview', function(event, isInView) {
	  if (isInView) {
	  	$('#experience').css('visibility', 'visible');
	  	$('#experience').addClass('animated fadeInUp');
	  } else {
	    $('#experience').off('inview');
	  }
	});
	$('#projects').on('inview', function(event, isInView) {
	  if (isInView) {
	  	$('#projects').css('visibility', 'visible');
	  	$('#projects').addClass('animated fadeInUp');
	  } else {
	    $('#projects').off('inview');
	  }
	});
	$('#about').on('inview', function(event, isInView) {
	  if (isInView) {
	  	$('#about').css('visibility', 'visible');
	  	$('#about').addClass('animated fadeInUp');
	  } else {
	    $('#about').off('inview');
	  }
	});
	$('.spinner span:nth-child(1)').delay(4000).fadeOut(400);
	$('.spinner span:nth-child(2)').delay(4000).fadeOut(600);
	$('.spinner span:nth-child(3)').delay(4000).fadeOut(800);

});

$(function(){
	setTimeout(function() {
		$('.fly-in-text, .fly-in-text-2, .fly-in-text-3').removeClass('hide-me');
	}, 4500);
})();



