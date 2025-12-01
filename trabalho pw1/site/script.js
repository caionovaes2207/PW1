document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    const slideElements = document.querySelectorAll(".slide");
    const totalSlides = slideElements.length;

    let index = 0;
    let isTransitioning = false; // impede clicarem rápido e bugar

    function showSlide(n) {
        if (isTransitioning) return; // trava clique durante animação
        isTransitioning = true;

        index = (n + totalSlides) % totalSlides;

        slides.style.transition = "transform 0.6s ease-in-out";
        slides.style.transform = `translateX(${-index * 100}%)`;

        // libera clique depois da animação
        setTimeout(() => {
            isTransitioning = false;
        }, 600);
    }

    
    document.querySelector(".next").addEventListener("click", () => showSlide(index + 1));
    document.querySelector(".prev").addEventListener("click", () => showSlide(index - 1));

    
    setInterval(() => {
        if (!isTransitioning) {
            showSlide(index + 1);
        }
    }, 5000);
});
