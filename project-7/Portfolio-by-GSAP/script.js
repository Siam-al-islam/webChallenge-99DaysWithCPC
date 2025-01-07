let tl = gsap.timeline();

tl.from(".profile-banner .text-1", {
    x:100,
    opacity: 0,
    delay: 1,
    duration: .3
})

tl.from(".profile-banner .text-2", {
    scale: 0,
    opacity: 0,
    duration: .5
})

tl.from(".profile-banner .text-3", {
    x:100,
    opacity: 0,
    duration: .5
})

tl.from(".profile-banner p", {
    x:-100,
    opacity: 0,
    duration: .5
})

gsap.to(".profile-banner img", {
    y: 100,
    duration: 2,
    repeat: -1
})

gsap.from(".profile-banner img", {
    y:-50,
    duration: 2,
    repeat: -1
})