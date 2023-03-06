var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var restartButton = document.getElementById("restartButton");

var audio = new Audio('Kikiwakenai.mp3')

function playAudio(audio, playButton, pauseButton, restartButton, volumeSlider) {
    playButton.addEventListener("click", function() {
        audio.play();
    });

    pauseButton.addEventListener("click", function() {
        audio.pause();
    });

    restartButton.addEventListener("click", function() {
        audio.currentTime = 0;
    });

    volumeSlider.addEventListener("change", function() {
        audio.volume = volumeSlider.value;
    });
}

playAudio(audio, playButton, pauseButton, restartButton, volumeSlider);













