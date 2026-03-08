//const stickySections = [...document.querySelectorAll('.sticky')];
let menuBtn = document.querySelector('.hamburger-menu');
let audioBtn = document.querySelector('.media-audio--container button');
let progressPath = document.querySelector('.progress-wrap path');

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

menuBtn.addEventListener('click', function() {
  navigation.reversed() ? navigation.play() : navigation.reverse();
  document.querySelector('.plate').classList.toggle('active');
  document.querySelector('#navigation--Wrap').classList.toggle('showing');
});

audioBtn.addEventListener('click', function() {
    let textScroller = this.querySelector('label-wrapper');
    this.classList.toggle('is-on');
    let audioOn = true;
});




let pathLength = progressPath.getTotalLength();
progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
const updateProgress = function () {
    // var scroll = $(window).scrollTop();
    let scroll = document.documentElement.scrollTop;
    const wh = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                       document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
    // console.log(wh);
    const height = wh - document.documentElement.clientHeight; // $(window).height()
    const progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
      
    if (document.documentElement.scrollTop > offset) {
      document.querySelector('.progress-wrap').classList.add('active-progress');
    } else {
      document.querySelector('.progress-wrap').classList.remove('active-progress');
    }
};

window.addEventListener('scroll', updateProgress);                              
let offset = 150;
let duration = 550;
updateProgress();

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
