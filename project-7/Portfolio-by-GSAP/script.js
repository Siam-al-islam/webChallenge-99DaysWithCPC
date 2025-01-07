let tl = gsap.timeline();

tl.from(".banner .text-1", {
    x:100,
    opacity: 0,
    delay: 1,
    duration: .3
})

tl.from(".banner .text-2", {
    scale: 0,
    opacity: 0,
    duration: .5
})

tl.from(".banner .text-3", {
    x:100,
    opacity: 0,
    duration: .5
})

tl.from(".banner p", {
    x:-100,
    opacity: 0,
    duration: .5
})

gsap.to(".banner img", {
    y: -50,
    duration: 2,
    stagger: 0.5,
    repeat: -1
})

gsap.from(".banner img", {
    y:50,
    duration: 2,
    repeat: -1,
    stagger: 0.5
})

gsap.to("body", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger:".about-wrapper",
        scrolller: "body",
        start: "top 50%",
        scrub: 1,
        end:"bottom 100%",
    }
})
