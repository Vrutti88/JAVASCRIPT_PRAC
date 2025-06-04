const video = document.getElementById("myVideo");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

playBtn.addEventListener("click", () => {
    video.play();
});

pauseBtn.addEventListener("click", () => {
    video.pause();
});