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
	
	// $(window).scroll(function () {
	//     $(".img-1, .img-2, .img-3, .slider").each(function() {
	//         $this = $(this);
	//         isOnView = isElementVisible($(this));
	//         if(isOnView && !$(this).hasClass('Starting')){
	//             $(this).addClass('Starting');
	//             startAnimation($(this));
	//         }
	//     });
	// });

	// function startAnimation($this) {
	//   $this.animate({
	//     right: '420px'
	//   }, 1000, function() {
	//     // Animation complete.
	//   });

	  // $(window).scroll(function(){

	  // 	var wScroll = $(this).scrollTop();

	  // 			// console.log(wScroll);

	  // $('.text, .second-gradient-overlay.button-group').css({

	  //   	'transform' : 'translate(0px, '+ wScroll /6 + '%)'
	  //  })
