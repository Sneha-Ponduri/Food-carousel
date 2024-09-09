let currentSlide = 0;
const slides = document.querySelectorAll('.carousel > div');
const totalSlides = slides.length;
const visibleSlides = 3; // Number of slides to show at a time

function updateCarousel() {
    // Set all slides to be hidden initially
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });

    // Display the current set of slides
    for (let i = currentSlide; i < currentSlide + visibleSlides; i++) {
        slides[i % totalSlides].style.display = 'flex';
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Initialize the carousel
updateCarousel();
