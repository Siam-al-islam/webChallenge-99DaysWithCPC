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
const faqs = document.querySelectorAll("#faq");
const accordion = document.querySelectorAll("#accordion");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        accordion.forEach((acc) => {
            if (acc.classList.contains("active")) {
                acc.classList.remove("active");
            }
        });
    });
});