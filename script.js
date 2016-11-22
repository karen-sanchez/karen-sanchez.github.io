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

// $(window).scroll(function(){

// 	var wScroll = $(this).scrollTop();

// 			// console.log(wScroll);

// $('.text, .second-gradient-overlay.button-group').css({

//   	'transform' : 'translate(0px, '+ wScroll /6 + '%)'
//  })

	$(window).scroll(function(){
		if($(window).scrollTop() == 0){ 
			$('#custom-nav').css("background-color", "white");
		// console.log(wScroll);
		}else if($(window).scrollTop() >= 1){ 
			$('#custom-nav').css("position", "fixed", "background-color", "white");
		 }
	});
});
	