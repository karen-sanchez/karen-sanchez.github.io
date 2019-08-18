feather.replace()

// mobile nav
document.querySelector('.open-mobile-nav').addEventListener('click', function() {
    document.querySelector('.slide-nav-container').classList.remove("hidden");
});

document.querySelector('.close-mobile-nav').addEventListener('click', function() {
    document.querySelector('.slide-nav-container').classList.add("hidden");
});

// when user scrolls to bottom rotate arrow
window.onscroll = function() {
    if( (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 300){
        document.querySelector('.next-section .feather.feather-arrow-down').classList.add("rotate-elem");
    } else {
        document.querySelector('.next-section .feather.feather-arrow-down').classList.remove("rotate-elem");
    }
};
// arrow scrolls user to next section
document.querySelector('.next-section').addEventListener('click', function() {
    var top = document.querySelector('.main-nav');
    var who = document.getElementById('who');
    var what = document.getElementById('what');
    var how = document.getElementById('how');
    var workPro = document.getElementById('workPro');
    var workComm= document.getElementById('workComm');
    var contact = document.getElementById('contact');

    var sectionArr = [who, what, how, workPro, workComm, contact];

    for (var i = 0; i < sectionArr.length - 1; i ++) {
        if ( isInViewport(sectionArr[i]) ) {
            sectionArr[i + 1].scrollIntoView({behavior: 'smooth', block: 'center'});
        } 
        else if ( isInViewport(sectionArr[sectionArr.length - 1]) ) {
            top.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    }
});

function isInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 200 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// var whoSection = document.querySelector('#who');
// var one = whoSection.getBoundingClientRect();
// console.log(one);
