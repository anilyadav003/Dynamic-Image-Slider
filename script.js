const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;

let currentIndex = 0;

// Function to go to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlider();
}

// Function to go to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Function to update the slider's position
function updateSlider() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Autoplay functionality
setInterval(() => {
  nextSlide();
}, 3000);
