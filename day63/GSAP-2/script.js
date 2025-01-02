gsap.from("h1", {
    opacity: 0,
    color: "red",
    duration: 1,
    delay: 1,
    y: 50,
    stagger: .5,
})

// gsap.to(".box", {
//     x: 500,
//     duration: 1.5,
//     delay: 1,
//     rotate: 360,
//     // repeat: 1,
//     // yoyo: true,
// })

// gsap.to(".box2", {
//     x: 500,
//     backgroundColor: 'yellow',
//     duration: 1.5,
//     delay: 2.5
// })

// gsap.to(".box3", {
//     x: 500,
//     scale: 0.5,
//     borderRadius: "50%",
//     duration: 1.5,
//     delay: 4
// })

var tl = gsap.timeline();

tl.to(".box",{
    x:500,
    rotate:360,
    duration:1.5,
    delay:1
})

tl.to(".box2", {
    x:500,
    duration:1.5
})

tl.to(".box3", {
    x:500,
    duration:1.5
})