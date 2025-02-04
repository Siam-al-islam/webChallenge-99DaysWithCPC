var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//
// Select all FAQ headers
const faqHeaders = document.querySelectorAll('#faq');

faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
        // Find the associated accordion panel
        const accordionContent = header.nextElementSibling;
        accordionContent.classList.toggle('hidden');

        // Toggle active state and visibility
        const isOpen = accordionContent.style.maxHeight;

        if (isOpen) {
            // Close the accordion
            accordionContent.style.maxHeight = null;
            accordionContent.style.overflow = 'hidden';
        } else {
            // Close other accordions first
            document.querySelectorAll('#accordion').forEach(content => {
                content.style.maxHeight = null;
                content.style.overflow = 'hidden';
            });

            // Open the selected accordion
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            accordionContent.style.overflow = 'visible';
        }

        // Rotate the SVG icon for active state
        const svgIcon = header.querySelector('svg');
        if (isOpen) {
            svgIcon.style.transform = 'rotate(0deg)';
        } else {
            svgIcon.style.transform = 'rotate(45deg)';
        }
    });
});
