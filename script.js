$(document).ready(function() {
}) // End document.ready

$(window).scroll(function(){

    var wScroll = $(this).scrollTop();
    // console.log(wScroll);
        if (wScroll == 0) {
            $(function(){
                $(".element").typed({
                  strings: ["Welcome,", "my name is...", "Karen", "Sanchez", "Karen Sanchez"],
                  typeSpeed: 0
                });
            });
        }
    });

    $(function(){
        $(".element").typed({
          strings: ["Welcome,", "my name is...", "Karen", "Sanchez", "Karen Sanchez"],
          typeSpeed: 0
        });
    });
