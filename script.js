feather.replace();

var what = document.getElementById('what');
var who = document.getElementById('one');

// mobile nav
document.querySelector('.open-mobile-nav').addEventListener('click', function() {
    document.querySelector('.slide-nav-container').classList.remove("hidden");
});
document.querySelector('.close-mobile-nav').addEventListener('click', function() {
    document.querySelector('.slide-nav-container').classList.add("hidden");
});
// when user scrolls to bottom rotate arrow
// function arrowRotate() {
//     if( (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 300){
//         document.querySelector('.next-section .feather.feather-arrow-down').classList.add("rotate-elem");
//     } else {
//         document.querySelector('.next-section .feather.feather-arrow-down').classList.remove("rotate-elem");
//     }
// };
// change desktop nav colors after scroll
function updateDesktopNav(e) {
    // when "what" section is at top:0 add class to section "what"
    var sections = document.getElementsByClassName('section');
    var nav = document.querySelector('.desktop-nav');
    var mob = document.querySelector('.mobile-sticky-nav');
    // var desktNav = document.querySelector('.desktop-nav li a');

    if ( !isInViewport(e) ) {
        nav.classList.add('test');
        mob.classList.add('stick');
        // for ( var i = 0; i < sections.length; i++ ) {
        //     sections[i].classList.add("unicorn");
        // }
    } else {
        nav.classList.remove('test');
        mob.classList.remove('stick');
    }
}
// arrow scrolls user to next section
// document.querySelector('.next-section').addEventListener('click', function() {
//     var who = document.getElementById('one');
//     var what = document.getElementById('two');
//     var how = document.getElementById('three');
//     var workPro = document.getElementById('four');
//     var workComm= document.getElementById('five');

//     var sectionArr = [who, what, how, workPro, workComm, contact];

//     for (var i = 0; i < sectionArr.length - 1; i ++) {
//         if ( isInViewport(sectionArr[i]) ) {
//             sectionArr[i + 1].scrollIntoView({behavior: 'smooth', block: 'center'});
//         } 
//         else if ( isInViewport(sectionArr[sectionArr.length - 1]) ) {
//             sectionArr[0].scrollIntoView({behavior: 'smooth', block: 'start'});
//         }
//     }
// });
// scroll functions
window.onscroll = function() {
    // var what = document.querySelector('#what');
    // arrowRotate();
    updateDesktopNav(who);
};
// reusable
function isInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// var whoSection = document.querySelector('#who');
// var one = whoSection.getBoundingClientRect();
// console.log(one);
