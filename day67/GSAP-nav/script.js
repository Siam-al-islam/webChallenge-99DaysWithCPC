document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animation for Navbar
    gsap.to('.navbar .logo', {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      ease: 'power2.out',
    });
  
    gsap.to('nav ul', {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1,
      ease: 'power2.out',
    });
  
    gsap.from('nav ul li', {
      opacity: 0,
      y: 20,
      stagger: 0.3,
      duration: 0.8,
      ease: 'power2.out',
      delay: 1.5,
    });
  
    // GSAP hover effect for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, { scale: 1.1, color: '#f39c12', duration: 0.3 });
      });
  
      link.addEventListener('mouseleave', () => {
        gsap.to(link, { scale: 1, color: '#fff', duration: 0.3 });
      });
    });
  });
  