if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerWidth > 1024) { 
  skrollr.init();
}

window.addEventListener('resize', function () {
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera|Opera Mini/i.test(navigator.userAgent)) {
      if (window.innerWidth <= 1024) {
        skrollr.init().destroy();
      }
  }

});

if (window.innerWidth > 768) {
    gsap.registerPlugin(ScrollTrigger);

  gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: { 
      trigger: "#mySection",
      scrub: 0.3 
    }
  });

  var tl = gsap.timeline({defaults:{opacity: 0}});

  function init() {
    tl.from(".welcome-msg", {autoAlpha: 0, duration: 1, y: 200, opacity: 0})
      .from(".desc", {autoAlpha: 0, duration: 1, y: 100, opacity: 0})
      .from(".blue-logo", {autoAlpha: 0, duration: 1, y: 100, opacity: 0})
      .from(".pink-logo", {autoAlpha: 0, duration: 0.6, x: 5, y: 5, opacity: 0})
      .from(".white-logo", {autoAlpha: 0, duration: 0.6, x: 6, y: 5, opacity: 0}, '-=0.6')
      .from(".scroll", {duration: 1, y: -100, opacity: 0});
  }

  window.addEventListener("load", function(event) {
    init();
  });

  gsap.from(".pr", {
    duration: 1,
    y: 300,
    opacity: 0,
    scrollTrigger: {
      trigger: "#projects.content"
    }
  })

  gsap.from(".ptwo-title", {
    duration: 1,
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: "#projects.content"
    }
  })

  gsap.from(".about-photo", {
    duration: 2,
    y: -300,
    opacity: 0,
    scrollTrigger: {
      trigger: "#about.content",
      start: 'left+=500'
    }
  })

  gsap.from(".about-info", {
    duration: 1,
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: "#about.content",
      start: 'left+=400'
    }
  })

  gsap.from(".contact-form-column", {
    duration: 1,
    y: 200,
    opacity: 0,
    scrollTrigger: {
      trigger: "#contact.content",
      start: 'left+=750'
    }
  })

  gsap.from(".logo-column", {
    duration: 1,
    x: 200,
    opacity: 0,
    scrollTrigger: {
      trigger: "#contact.content",
      start: 'left+=900'
    }
  })
}

