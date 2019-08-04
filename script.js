//if user scrolled to bottom do something
window.onscroll = function() {
    if( (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100){
        // console.log('bottom');
        //get back to top element
        document.querySelector('.back-to-top img').style.transform = "rotate(-90deg)";
    } else {
        document.querySelector('.back-to-top img').style.transform = "rotate(90deg)";
    }
};

//Resusable
var isInViewport = function(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

//Arrow scrolls user to next section
document.querySelector('.back-to-top').addEventListener('click', function() {

    var whoSection = document.querySelector('.who-title');
    var whatSection = document.querySelector('.what-title');
    var howSection = document.querySelector('.how-title');
    var workProSection = document.querySelector('.workPro-title');
    var workPracticeSection = document.querySelector('.workPractice-title');
    var workCommSection = document.querySelector('.workComm-title');

    var sectionArr = [whoSection, whatSection, howSection, workProSection, workPracticeSection, workCommSection];

    for (var i = 0; i < sectionArr.length - 1; i ++) {
        if ( isInViewport(sectionArr[i]) ) {
            sectionArr[i + 1].scrollIntoView({behavior: "smooth", block: "center"});
        } 
        else if ( isInViewport(sectionArr[sectionArr.length - 1]) ) {
            sectionArr[0].scrollIntoView({behavior: "smooth", block: "end"});
        }
    }
});

