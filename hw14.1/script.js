document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".slider img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const dotsContainer = document.querySelector(".dots");
    let currentIndex = 0;

    // Створюємо точки для навігації
    images.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function updateSlider() {
        images.forEach((img, index) => {
            img.classList.toggle("active", index === currentIndex);
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });

        prevButton.classList.toggle("hidden", currentIndex === 0);
        nextButton.classList.toggle("hidden", currentIndex === images.length - 1);
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    nextButton.addEventListener("click", function () {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

});