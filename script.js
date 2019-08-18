feather.replace()

//if user scrolled to bottom do something
// window.onscroll = function() {
//     if( (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 300){
//         document.querySelector('.next-section img').style.transform = "rotate(180deg)";
//     } else {
//         document.querySelector('.next-section img').style.transform = "rotate(0deg)";
//     }
// };
//Arrow scrolls user to next section
document.querySelector('.next-section').addEventListener('click', function() {

    var whoSection = document.querySelector('#who');
    var whatSection = document.querySelector('#what');
    var howSection = document.querySelector('#how');
    var workProSection = document.querySelector('#workPro');
    var workPracticeSection = document.querySelector('#workPractice');
    var workCommSection = document.querySelector('#workComm');

    var sectionArr = [whoSection, whatSection, howSection, workProSection, workPracticeSection, workCommSection];

    for (var i = 0; i < sectionArr.length - 1; i ++) {
        if ( isInViewport(sectionArr[i]) ) {
            sectionArr[i + 1].scrollIntoView({behavior: 'smooth', block: 'start'});
            // console.log(sectionArr[i]);
        } 
        // else if ( isInViewport(sectionArr[sectionArr.length - 1]) ) {
        //     sectionArr[0].scrollIntoView({behavior: 'smooth', block: 'end'});
        // }
    }
});

var whoSection = document.querySelector('#who');
var whatSection = document.querySelector('#what');
var howSection = document.querySelector('#how');
var workProSection = document.querySelector('#workPro');
var workPracticeSection = document.querySelector('#workPractice');
var workCommSection = document.querySelector('#workComm');

var one = whoSection.getBoundingClientRect();
var two = whatSection.getBoundingClientRect();
var three = howSection.getBoundingClientRect();
var four = workProSection.getBoundingClientRect();
var five = workPracticeSection.getBoundingClientRect();
var six = workCommSection.getBoundingClientRect();
console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(six);
console.log(window.innerHeight);

// //Open popup
// document.querySelector('.open-popup').addEventListener('click', function() {
//     document.querySelector('.popup').style.display = 'block';
// });
// //Close popup
// document.querySelector('.close-popup').addEventListener('click', function() {
//     document.querySelector('.popup').style.display = 'none';
// });

//Resusable
function isInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};