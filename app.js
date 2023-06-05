document.addEventListener('DOMContentLoaded', function() {
  let infoButtons = document.getElementsByClassName('info-button');

  for (let i = 0; i < infoButtons.length; i++) {
    infoButtons[i].addEventListener('click', function() {
      let popup = this.parentNode.getElementsByClassName('popup')[0];
      if (popup.style.display === 'block') {
        popup.style.display = 'none';
      } else {
        popup.style.display = 'block';
      }
    });
  }
});

//   js code to toggle sidebar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))


let swiper = new Swiper(".mySwiper", {
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


