var video = document.getElementById("player1");

// Initialize video on page load
window.addEventListener("load", function () {
  video.autoplay = false;
  video.loop = false;
});

// Play Button
document.querySelector("#play").addEventListener("click", function () {
  video.play();
  updateVolumeDisplay();
});

// Pause Button
document.querySelector("#pause").addEventListener("click", function () {
  video.pause();
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function () {
  video.playbackRate *= 0.9;
  console.log("Speed is " + video.playbackRate);
});

// Speed Up
document.querySelector("#faster").addEventListener("click", function () {
  video.playbackRate /= 0.9;
  console.log("Speed is " + video.playbackRate);
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function () {
  if (video.currentTime + 10 > video.duration) {
    video.currentTime = 0;
  } else {
    video.currentTime += 10;
  }
  console.log("Current location is " + video.currentTime);
});

// Mute
document.querySelector("#mute").addEventListener("click", function () {
  video.muted = !video.muted;
  this.innerHTML = video.muted ? "Unmute" : "Mute";
});

// Volume Slider
document.querySelector("#slider").addEventListener("input", function () {
  video.volume = this.value / 100;
  updateVolumeDisplay();
});

// Styled (Old School)
document.querySelector("#vintage").addEventListener("click", function () {
  video.classList.add("oldSchool");
});

// Original (Remove Style)
document.querySelector("#orig").addEventListener("click", function () {
  video.classList.remove("oldSchool");
});

// Update Volume Display
function updateVolumeDisplay() {
  document.querySelector("#volume").innerHTML = Math.round(video.volume * 100) + "%";
}
