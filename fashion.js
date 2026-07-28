const slides = document.querySelectorAll(".slides img");

let slideIndex = 0;

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slides[index].style.display = "block";
}

function nextSlide() {
    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    showSlide(slideIndex);
}

showSlide(slideIndex);

// Change image every 3 seconds
setInterval(nextSlide, 5000);

slides.forEach(slide => {
    slide.addEventListener("click", nextSlide);
});