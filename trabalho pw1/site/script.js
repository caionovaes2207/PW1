document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    const slideElements = document.querySelectorAll(".slide");
    const totalSlides = slideElements.length;
    let index = 0;

    function showSlide(n) {
        index = (n + totalSlides) % totalSlides; // loop infinito
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    document.querySelector(".next").addEventListener("click", () => showSlide(index + 1));
    document.querySelector(".prev").addEventListener("click", () => showSlide(index - 1));

    setInterval(() => showSlide(index + 1), 5000); // autoplay
});