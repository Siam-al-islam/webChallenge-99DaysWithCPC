// GSAP animation for the box
const box = document.querySelector('.box');

box.addEventListener('mouseenter', () => {
  gsap.to(box, { x: 200, rotation: 360, duration: 1 });
});

box.addEventListener('mouseleave', () => {
  gsap.to(box, { x: 0, rotation: 0, duration: 1 });
});
