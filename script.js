// Auto-focus on search input when page loads
window.onload = function () {
    const searchInput = document.querySelector("main section:first-child input");
    if (searchInput) {
        searchInput.focus();
    }
};

// Simple search enter key event
document.addEventListener("keydown", function (e) {
    const input = document.querySelector("main section:first-child input");

    if (e.key === "Enter" && document.activeElement === input) {
        if (input.value.trim() === "") {
            alert("Please enter a restaurant, cuisine, or dish!");
        } else {
            alert("Searching for: " + input.value);
        }
    }
});

// Reveal cards on scroll animation
const cards = document.querySelectorAll(".card");

function revealCards() {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight - 50;

        if (cardTop < windowHeight) {
            card.classList.add("reveal");
        }
    });
}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);
