// Function to show profile cards based on category
function showProfileCards(category) {
    const profileCards = document.querySelectorAll('.profile-card');

    profileCards.forEach((card) => {
      if (category === 'all' || card.classList.contains(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Function to show more profile cards
  function showMoreCards() {
    const hiddenCards = document.querySelectorAll('.profile-card.hidden');

    hiddenCards.forEach((card, index) => {
      if (index < 3) {
        card.classList.remove('hidden');
      }
    });
  }

  // Add event listener to show more button
  const showMoreButton = document.querySelector('.show-more-button');
  if (showMoreButton) {
    showMoreButton.addEventListener('click', showMoreCards);
  }
