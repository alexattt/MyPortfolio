if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerWidth > 1024) { 
  skrollr.init();
}

window.addEventListener('resize', function () {
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { // no reason to destroy on mobile
      if (window.innerWidth <= 1024) {
        skrollr.init().destroy(); // skrollr.init() returns the singleton created above
      }
  }

});

gsap.registerPlugin(ScrollTrigger);

gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { 
    trigger: "#mySection",
    scrub: 0.3 
  }
});

var tl = gsap.timeline();

document.addEventListener("DOMContentLoaded", function(event) {
  window.onload = function() {
     window.requestAnimationFrame(function() {
        tl.from(".welcome-msg", {duration: 1, y: 200, opacity: 0})
        .from(".desc", {duration: 1, y: 100, opacity: 0})
        .from(".blue-logo", {duration: 1, y: 100, opacity: 0})
        .from(".pink-logo", {duration: 0.6, x: 5, y: 5, opacity: 0})
        .from(".white-logo", {duration: 0.6, x: 6, y: 5, opacity: 0}, '-=0.6')
        .from(".scroll", {duration: 1, y: -100, opacity: 0});
     });
    
  };

});

gsap.from(".pr", {
  duration: 1,
  y: 300,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page-two.content"
  }
})

gsap.from(".ptwo-title", {
  duration: 1,
  x: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page-two.content"
  }
})

gsap.from(".about-photo", {
  duration: 2,
  y: -300,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page-three.content",
    start: 'left+=500'
  }
})

gsap.from(".about-info", {
  duration: 1,
  x: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page-three.content",
    start: 'left+=400'
  }
})

gsap.from(".contact-form-column", {
  duration: 1,
  y: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page-four.content",
    start: 'left+=650'
  }
})

gsap.from(".logo-column", {
  duration: 1,
  x: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page-four.content",
    start: 'left+=900'
  }
})

