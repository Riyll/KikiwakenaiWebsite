var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var restartButton = document.getElementById("restartButton");

var audio = new Audio('Kikiwakenai.mp3')

playButton.addEventListener("click", function() {
    audio.play();
});

pauseButton.addEventListener("click", function() {
    audio.pause();
});

restartButton.addEventListener("click", function() {
    audio.currentTime = 0;
});

//add a volume slider
var volumeSlider = document.getElementById("volumeSlider");
volumeSlider.addEventListener("change", function() {
    audio.volume = volumeSlider.value;
});













