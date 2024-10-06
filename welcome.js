// Redirecting to different HTML pages when buttons are clicked
document.getElementById('play-btn').addEventListener('click', function() {
    window.location.href = 'how_to_play/play/play.html'; // Link to the play.html inside the 'play' folder
});

document.getElementById('how-to-play-btn').addEventListener('click', function() {
    window.location.href = 'how_to_play/how-to-play.html'; // Link to the how-to-play.html inside the 'how_to_play' folder
});
