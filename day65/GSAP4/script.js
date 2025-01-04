// gsap.from(".page2 .box", {
//     scale: 0,
//     opacity: 0,
//     duration: 1,
//     rotate:720,
//     scrollTrigger:{
//         trigger: ".page2 .box",
//         scroller: "body",
//         start: "top 60%",
//         end:"top 30%",
//         // scrub: true,
//         scrub:2,
//         pin: true,
//     }
// })

gsap.to(".page2 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 0%",
        end:"top -100%",
        scrub: 2,
        pin:true
    }
})