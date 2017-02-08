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

	// $(function() {
	//    $(window).scroll(function () {
	//       if ($(this).scrollTop() > 50) {
	//       	// console.log('hi')
	//          $(".navbar-custom").addclass("bottom-hadow")
	//       }
	//    });
	// });

	$('#about').on('inview', function(event, isInView) {
	  if (isInView) {
	  	$('#about').addClass('animated fadeInUp');
	    // console.log("inview works")
	   } else {
	  	$('#about').off('inview');
	  }
	});


	$('#skills').on('inview', function(event, isInView) {
	  if (isInView) {
	  	$('#skills').addClass('animated fadeInUp');
	    // console.log("inview works")
	  } else {
	    $('#skills').off('inview');
	  }
	});
	$('#projects').on('inview', function(event, isInView) {
	  if (isInView) {
	  	$('#projects').addClass('animated fadeInUp');
	    // console.log("inview works")
	  } else {
	    $('#projects').off('inview');
	  }
	});
});
