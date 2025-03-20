const cards = document.querySelectorAll('.card');
let current = 0; // Start with the first card in the center
const totalCards = cards.length; // Total number of cards
const cardSpacing = window.innerWidth * 0.25; // Adjust spacing for mobile vs desktop

function updateCards() {
    cards.forEach((card, index) => {
        const offset = (index - current + totalCards) % totalCards;
        const position =
            offset <= Math.floor(totalCards / 2) ? offset : offset - totalCards;
    
        console.log(`Card: ${index}, Offset: ${offset}, Position: ${position}`);
    
        // Remove previously applied classes
        card.className = 'card'; // Reset to base class
    
        // Add new classes for position
        card.classList.add(`position-${position}`);
    });
}

// Keyboard navigation for desktop
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        current = (current + 1) % totalCards; // Move to the next card
        updateCards();
    } else if (event.key === 'ArrowLeft') {
        current = (current - 1 + totalCards) % totalCards; // Move to the previous card
        updateCards();
    }
});

// mobile gesture
let startX = 0;
document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (endX < startX) {
        current = (current + 1) % totalCards; // Swipe left
    } else if (endX > startX) {
        current = (current - 1 + totalCards) % totalCards; // Swipe right
    }
    updateCards();
});

// Initialize the carousel
updateCards();

document.getElementById('continue-button').addEventListener('click', () => {
    const blocker = document.getElementById('screen-blocker');
    blocker.style.display = 'none'; // Hides the screen blocker
});
