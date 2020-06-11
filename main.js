

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.container',
    pin: true,
    start: 'top top',
    scrub: 1
  }
})

tl
  .to('.bubble', {
    scale: 5,
    opacity: 0.4,
  })
