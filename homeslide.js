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

// Buy function
// Function to simulate a purchase process
function purchaseProduct() {
  // Simulate an asynchronous request to the server (replace with actual AJAX call)
  setTimeout(() => {
    // Simulating a successful purchase
    const success = Math.random() < 0.8; // 80% chance of success

    if (success) {
      // Display a success message
      const confirmationMessage = document.getElementById('confirmationMessage');
      confirmationMessage.innerText = 'Thank you for your purchase!';
      confirmationMessage.classList.remove('hidden');
    } else {
      // Display an error message
      alert('Failed to process the purchase. Please try again later.');
    }
  }, 1000); // Simulate a delay of 1 second (1000 milliseconds)
}

// Adding event listener to the buy button
const buyButton = document.getElementById('buyButton');
buyButton.addEventListener('click', purchaseProduct);

