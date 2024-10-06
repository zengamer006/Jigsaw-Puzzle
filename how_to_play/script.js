const checkbox = document.getElementById('understood');
const startButton = document.getElementById('startGame');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modalMessage');
const closeModal = document.getElementById('closeModal');

// Enable or disable the Start Game button based on checkbox
checkbox.addEventListener('change', function() {
    startButton.disabled = !this.checked;
});

// Redirect to the play page when Start Game is clicked
startButton.addEventListener('click', function() {
    window.location.href = 'play/play.html';
});

// Close the modal
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Function to show the modal with a message
function showModal(message) {
    modalMessage.textContent = message;
    modal.style.display = 'block';
}

// Show a random tip every 30 seconds
setInterval(function () {
    const tips = [
        "Take your time and enjoy the puzzle-solving process!",
        "Group puzzle pieces by color or pattern before starting.",
        "If you're stuck, focus on a smaller section of the image.",
        "The more you solve, the better you'll get!"
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    showModal("Puzzle Tip: " + randomTip);
}, 30000);
