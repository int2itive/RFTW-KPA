//const stickySections = [...document.querySelectorAll('.sticky')];
let menuBtn = document.querySelector('.hamburger-menu');
let audioBtn = document.querySelector('.media-audio--container button');
let progressPath = document.querySelector('.progress-wrap path');
const listingBar = document.getElementById("listing-bar");
const linksList = document.querySelector('#navigation--Wrap ul');
let gap = 50;



let images = [ 'https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/Artists/pdl-prof-img-005__W45RwHr_qe20pfhxZ.png', 'https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/Artists/pdl-prof-img-md2__iYgSM_M6gDha3Da.jpg',   'https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/Artists/KP-IMG/pdl-prof-img-119-39M__yVb5suzX_SfaghTBKG.jpg', 'https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/Artists/kpa--gal-IMG-070__RfAFDWNkV.png'
];

let othrImages = [ 'https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/Artists/scs-scrl-clp-07_gkMNyA3WQ.jpg', 'https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/Artists/chin-scroll-clp-01_KfhofaCSd.jpg',   'https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/Artists/jni-scrl-profile-15-002c_19nKnG7Yr.png', 'https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/Artists/319722734_135851459309360_5051777608849275082_n_SvNz4xV4h5.jpg'
];

//images.forEach(img => {
//    stickySections.forEach(section => {
//        let image = document.createElement('img');
//        image.src = img;
//        section.querySelector('.scroll_section').appendChild(image);
//    });
//});

// window.addEventListener('scroll', (e) => {
//    for(let i = 0; i < stickySections.length; i++) {
//        transform(stickySections[i]);
//    } 
   // progressIndicator();
// });

function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    console.log(offsetTop);
    const scrollSection = section.querySelector('.scroll_section');
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
    scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;    
}

let navigation = new TimelineLite({paused:true, reversed:true});

navigation.to("#navigation--Wrap", 0.5, {opacity: 1, display: 'block'})
          .from(".menu", 0.5, {opacity: 0, y: 30})
          .from(".social", 0.5, {opacity: 0});

function playBtnNavigation() {
  navigation.reversed() ? navigation.play() : navigation.reverse();
  document.querySelector('.plate').classList.toggle('active');
  document.querySelector('#navigation--Wrap').classList.toggle('showing');    
}

menuBtn.addEventListener('click', playBtnNavigation);

// menuBtn.addEventListener('click', function() {
//   navigation.reversed() ? navigation.play() : navigation.reverse();
//   document.querySelector('.plate').classList.toggle('active');
//   document.querySelector('#navigation--Wrap').classList.toggle('showing');
// });

audioBtn.addEventListener('click', function() {
    let textScroller = this.querySelector('label-wrapper');
    this.classList.toggle('is-on');
    let audioOn = true;
});

if (!listingBar.classList.contains("hidden")) {
    const slides = document.querySelectorAll(".listing-bar .slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });

        const currentSlide = slides[index];
        const showTime =
            parseInt(currentSlide.getAttribute("show-time"), 10) || 4000;

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, showTime);
    }

    // Start the rotation
    showSlide(currentIndex);
}


// let pathLength = progressPath.getTotalLength();
// progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
// progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
// progressPath.style.strokeDashoffset = pathLength;
// progressPath.getBoundingClientRect();
// progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
// const updateProgress = function () {
//     // var scroll = $(window).scrollTop();
//     let scroll = document.documentElement.scrollTop;
//     const wh = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
//                        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
//     // console.log(wh);
//     const height = wh - document.documentElement.clientHeight; // $(window).height()
//     const progress = pathLength - (scroll * pathLength / height);
//     progressPath.style.strokeDashoffset = progress;
      
//     if (document.documentElement.scrollTop > offset) {
//       document.querySelector('.progress-wrap').classList.add('active-progress');
//     } else {
//       document.querySelector('.progress-wrap').classList.remove('active-progress');
//     }
// };

// window.addEventListener('scroll', updateProgress);                              
// let offset = 150;
// let duration = 550;
// updateProgress();

//$(document).ready(function() {
//    "use strict";
    
 jQuery('.progress-wrap').on('click', function(event) {
     event.preventDefault();
     jQuery('html, body').animate({scrollTop: 0}, duration);
 // window.scrollTo({ top: 0, behavior: 'smooth' });
     return false;
 });
    
//})
//	
//})(jQuery);


function scrollToSmoothly(pos, time) {
    var currentPos = window.pageYOffset;
    var start = null;
    if(time == null) time = 500;
    pos = +pos, time = +time;
    window.requestAnimationFrame(function step(currentTime) {
        start = !start ? currentTime : start;
        var progress = currentTime - start;
        if (currentPos < pos) {
            window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
        } else {
            window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
        }
        if (progress < time) {
            window.requestAnimationFrame(step);
        } else {
            window.scrollTo(0, pos);
        }
    });
}


function getSrollTarget(target) {
  let targetPosition = document.querySelector(`${target}`).getBoundingClientRect().top - (gap / 2); 
  // console.log(t);
  // scrollToSmoothly(document.querySelector(`${target}`).offsetTop, 1000 /* milliseconds */);
  // scrollToSmoothly(document.querySelector(`${target}`).getBoundingClientRect().top, 1000 /* milliseconds */);
  scrollToSmoothly(targetPosition, 1000 /* milliseconds */);
}


linksList.addEventListener('click', (e) => {
    e.preventDefault();
    let lnk = e.target.getAttribute("href");
    playBtnNavigation();
    getSrollTarget(lnk);
});


