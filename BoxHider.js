var x = document.getElementById("KikiLyricsBox");

x.style.display = "none";

LyricsToggler.addEventListener("click", function() {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});


