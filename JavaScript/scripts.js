var tl = anime.timeline({
  easing: "easeOutExpo",
  duration: 1200
});

tl.add({
  targets: ".menu",
  translateX: [300, 0],
  opacity: [0, 1]
});

anime({
  targets: ".menuSpace",
  keyframes: [
    { opacity: 0 },
    { translateX: -270 },
    { translateX: 0 },
    { opacity: 1 }
  ],
  delay: anime.stagger(130) // increase delay by 100ms for each elements.
});

//scrollMagic - This works:
// var controller = new ScrollMagic.Controller();

// var scene = new ScrollMagic.Scene({
//   triggerElement: ".contactForm"
// })
//   .setClassToggle(".contactForm", "fade-in")
//   .addTo(controller);

var controller = new ScrollMagic.Controller();

var devScene = new ScrollMagic.Scene({
  triggerElement: ".developerCardContainer",
  triggerHook: 0.8,
  reverse: false
})
  .setClassToggle(".developerCard", "visible")
  .addTo(controller);

var musicScene = new ScrollMagic.Scene({
  triggerElement: ".musicCardContainer",
  triggerHook: 0.8,
  reverse: false
})
  .setClassToggle(".musicianCard", "visible")
  .addTo(controller);
