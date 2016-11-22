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

	$(window).scroll(function () {
	    $( ".slide").each(function() {
	        // $this = $(this);
	        isOnView = isElementVisible($(this));
	        if(isOnView){
	            $(".slide").fadeIn(1500);
	            // startAnimation();
	        }
	    });
	});

	// function startAnimation() {
	// 	$(".slide").fadeIn(1500);
	// }
});
