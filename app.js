document.addEventListener("DOMContentLoaded", function () {
  let infoButtons = document.getElementsByClassName("info-button");
  let popups = document.getElementsByClassName("popup");

  for (let i = 0; i < infoButtons.length; i++) {
    infoButtons[i].addEventListener("click", function () {
      let popup = this.parentNode.getElementsByClassName("popup")[0];
      if (popup.style.display === "block") {
        popup.style.display = "none";
      } else {
        // Close all open popups
        for (let j = 0; j < popups.length; j++) {
          popups[j].style.display = "none";
        }
        popup.style.display = "block";
      }
    });
  }

  // Close popup when clicking on the close button
  let closeButtons = document.getElementsByClassName("close-button");
  [...closeButtons].forEach(function (button) {
    button.addEventListener("click", function () {
      let popup = this.closest(".popup");
      popup.style.display = "none";
    });
  });

  // Close popup when clicking outside of it
  window.addEventListener("click", function (event) {
    if (
      !event.target.closest(".popup") &&
      !event.target.matches(".info-button")
    ) {
      for (let i = 0; i < popups.length; i++) {
        popups[i].style.display = "none";
      }
    }
  });

  // search icon event listener
  let searchIcon = document.querySelector(".bx-search-alt-2");
  searchIcon.addEventListener("click", function () {
    let searchInput = document.getElementById("searchInput").value;
    showProfileCards("all"); // Call the showProfileCards function with the 'all' category
  });
});

//   js code to toggle sidebar in main page
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

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

// profile cards function
function showProfileCards(category) {
  var profileCards = document.getElementsByClassName("card");
  var categoryLabel = document.getElementById("categoryLabel");
  var searchInput = document.getElementById("searchInput").value.toLowerCase(); // Get the value of the search input and convert to lowercase

  // Hide all profile cards
  for (var i = 0; i < profileCards.length; i++) {
    profileCards[i].style.display = "none";
  }

  // Show the selected category's profile cards
  if (category === "all") {
    // Show all cards that match the search input
    for (var i = 0; i < profileCards.length; i++) {
      var cardTitle = profileCards[i]
        .querySelector("h3.artist-name")
        .textContent.toLowerCase(); // Get the card's title and convert to lowercase
      if (cardTitle.includes(searchInput) || searchInput === "") {
        profileCards[i].style.display = "block";
      }
    }
    categoryLabel.textContent = "All";
  } else {
    // Show cards of the selected category that match the search input
    var selectedCategoryCards = document.getElementsByClassName(category);
    for (var i = 0; i < selectedCategoryCards.length; i++) {
      var cardTitle = selectedCategoryCards[i]
        .querySelector("h3.artist-name")
        .textContent.toLowerCase(); // Get the card's title and convert to lowercase
      if (cardTitle.includes(searchInput) || searchInput === "") {
        selectedCategoryCards[i].style.display = "block";
      }
    }
    categoryLabel.textContent = category;
  }
}
