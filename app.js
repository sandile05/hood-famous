document.addEventListener('DOMContentLoaded', function() {
  let infoButtons = document.getElementsByClassName('info-button');
  let popups = document.getElementsByClassName('popup');

  for (let i = 0; i < infoButtons.length; i++) {
    infoButtons[i].addEventListener('click', function() {
      let popup = this.parentNode.getElementsByClassName('popup')[0];
      if (popup.style.display === 'block') {
        popup.style.display = 'none';
      } else {
        // Close all open popups
        for (let j = 0; j < popups.length; j++) {
          popups[j].style.display = 'none';
        }
        popup.style.display = 'block';
      }
    });
  }

  // Close popup when clicking on the close button
  let closeButtons = document.getElementsByClassName('close-button');
  [...closeButtons].forEach(function(button) {
    button.addEventListener('click', function() {
      let popup = this.closest('.popup');
      popup.style.display = 'none';
    });
  });

  // Close popup when clicking outside of it
  window.addEventListener('click', function(event) {
    if (!event.target.closest('.popup') && !event.target.matches('.info-button')) {
      for (let i = 0; i < popups.length; i++) {
        popups[i].style.display = 'none';
      }
    }
  });
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

function showProfileCards(category) {

  var profileCards = document.getElementsByClassName("card");
  var categoryLabel = document.getElementById("categoryLabel");
  // Hide all profile cards

  for (var i = 0; i < profileCards.length; i++) {
    profileCards[i].style.display = "none";
  }

  // Show the selected category's profile cards
  if (category === "all") {
    // Show all cards
    for (var i = 0; i < profileCards.length; i++) {
      profileCards[i].style.display = "block";
    }categoryLabel.textContent = "All";
  } else {
    // Show cards of the selected category
    var selectedCategoryCards = document.getElementsByClassName(category);
    for (var i = 0; i < selectedCategoryCards.length; i++) {
      selectedCategoryCards[i].style.display = "block";
    }
    categoryLabel.textContent = category;
  }
}

