gsap.from(".circle", {
    duration: 2,
    scale: 0,
    rotation: 180,
    ease: "bounce.out",
    delay: 0.5,
  });
  
  gsap.to(".square", {
    duration: 2,
    x: 300, 
    rotation: 360,
    scale: 1.5,
    ease: "power2.inOut",
    delay: 1, 
  });
  
  gsap.from(".rectangle", {
    duration: 2,
    x: -300,
    opacity: 0,
    ease: "power2.out",
    delay: 1.5,
  });
  
  gsap.from(".triangle", {
    duration: 3,
    scale: 0,
    rotation: 720,
    ease: "back.out(1.7)",
    delay: 2,
  });
  
  gsap.from(".container > div", {
    duration: 2,
    opacity: 0,
    scale: 0.5,
    stagger: 0.3, 
    ease: "power3.out",
  });
  