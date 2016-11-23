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
	  	$('#about').hide().fadeIn(2000);
	    console.log("inview works")
	  } else {
	    $('#about').off('inview');
	  }
	});
	$('#skills').on('inview', function(event, isInView) {
	  if (isInView) {
	  	$('#skills').hide().show(2000);
	    console.log("inview works")
	  } else {
	    $('#skills').off('inview');
	  }
	});

	// $(window).scroll(function () {
	//     $( ".slide").each(function() {
	//         // $this = $(this);
	//         isOnView = isElementVisible($(this));
	//         if(isOnView){
	//             $(".slide").fadeIn(1500);
	//             // startAnimation();
	//         }
	//     });
	// });

	// function startAnimation() {
	// 	$(".slide").fadeIn(1500);
	// }
});
