var video = document.getElementById("player1");

window.addEventListener("load", function () {
  console.log("Good job opening the window");
  console.log("Auto Play is set to False");
  console.log("Loop is set to False");
  video.autopaly = false;
  video.loop = false;
});

// play video
document.querySelector("#play").addEventListener("click", function () {
  document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
  console.log("Play Video");
  video.play();
});

// pause video
document.querySelector("#pause").addEventListener("click", function () {
  console.log("Pause Video");
  video.pause();
});

// slow down video
document.querySelector("#slower").addEventListener("click", function () {
  console.log("Slow Down Video");
  //   console.log(video.playbackRate);
  video.playbackRate *= 0.9;
  console.log("Speed is " + video.playbackRate);
});

// speed up video
document.querySelector("#faster").addEventListener("click", function () {
  console.log("Speed Up Video");
  //   console.log(video.playbackRate);
  video.playbackRate /= 0.9;
  console.log("Speed is " + video.playbackRate);
});

// skip ahead video
document.querySelector("#skip").addEventListener("click", function () {
  console.log("Skip Ahead Video");
  //   console.log(video.currentTime);

  if (video.currentTime + 10 > video.duration) {
    video.currentTime = 0;
  } else {
    video.currentTime += 10;
  }
  console.log("Video current time is " + video.currentTime);
});

// mute video
document.querySelector("#mute").addEventListener("click", function () {
  console.log("Mute Video");
  if (video.muted) {
    video.muted = false;
    document.querySelector("#mute").innerHTML = "Mute";
  } else {
    video.muted = true;
    document.querySelector("#mute").innerHTML = "Unmute";
  }
});

// volume slider
document.querySelector("#slider").addEventListener("change", function () {
  video.volume = this.value / 100;
  document.querySelector("#volume").innerHTML = this.value + "%";
  console.log("The current value is " + this.value + "%");
});

// old school
document.querySelector("#vintage").addEventListener("click", function () {
  console.log("Old School");
  video.classList.add("oldSchool");
});

// origin
document.querySelector("#orig").addEventListener("click", function () {
  console.log("Original");
  video.classList.remove("oldSchool");
});
