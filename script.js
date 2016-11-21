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
	    $( ".slide" ).each(function() {
	        $this = $(this);
	        isOnView = isElementVisible($(this));
	        if(isOnView && !$(this).hasClass('Starting')){
	            $(this).addClass('Starting');
	            startAnimation($(this));
	        }
	    });
	});

	function startAnimation($this) {
		$(".slide").fadeIn(1500)
	}

	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		// console.log(wScroll);
		if($(window).scrollTop() > 0){ 
			// $('#custom-nav').css("position", "fixed");
		 }
	});
});
	