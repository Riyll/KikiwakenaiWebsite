var lightButton = document.getElementById("lightButton");
        var lightOn = true;
        lightButton.onclick = function() {
            if (lightOn) {
                document.body.style.backgroundColor = "black";
                document.getElementById("WhiteBlack").style.color="#ffffff";
                lightButton.innerHTML = "Light";
                lightOn = false;
            } else {
                document.body.style.backgroundColor = "white";
                document.getElementById("WhiteBlack").style.color="#000000";
                lightButton.innerHTML = "Dark";
                lightOn = true;
            }
        }

// Make a button that toggles the background GIF on and off.

var gifButton = document.getElementById("filsdeputeButton");
        var gifOn = false;
        gifButton.onclick = function() {
            if (gifOn) {
                document.body.style.backgroundImage = "url('')";
                gifButton.innerHTML = "Fils de pute";
                gifOn = false;
            } else {
                document.body.style.backgroundImage = "url('GalaxyApple.gif')";
                gifButton.innerHTML = "Fils de pute";
                gifOn = true;
            }
        }
