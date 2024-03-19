// Content of slider.js
let currentIndex = 0; // Start showing the first three slides

function moveSlide(direction) {
    // Total number of slide groups
    const totalSlides = Math.ceil(document.querySelectorAll('.col-lg-4').length / 3);
    // Update the current index based on direction
    currentIndex += direction;
    // Circular navigation logic
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Move to the last group
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Return to the first group
    }
    // Hide all slides first
    document.querySelectorAll('.col-lg-4').forEach(function(slide) {
        slide.style.display = 'none';
    });
    // Calculate and show the next group of slides
    for (let i = 0; i < 3; i++) {
        let slideToShow = document.getElementById(`slide${1 + currentIndex * 1 + i}`);
        if (slideToShow) {
            slideToShow.style.display = 'block';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    moveSlide(0);
});
