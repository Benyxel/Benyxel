var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// cat.js slide
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;
let counter = 1;

function slide() {
  slider.style.transition = 'transform 0.5s ease';
  slider.style.transform = `translateX(${-slideWidth * counter}px)`;
  counter++;

  if (counter === slides.length) {
    setTimeout(() => {
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
      counter = 1;
    }, 500);
  }
}

setInterval(slide, 3000); // Change slide every 3 seconds
