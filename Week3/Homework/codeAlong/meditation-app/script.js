const song = document.querySelector(".song");
const play = document.querySelector(".play");
const replay = document.querySelector(".replay");
const outline = document.querySelector(".moving-outline circle");
const video = document.querySelector(".vid-container video");

//Sounds
const sounds = document.querySelectorAll(".sound-picker button");
//Time Display
const timeDisplay = document.querySelector(".time-display");
//Length of outline
const outlineLength = outline.getTotalLength();
//Duration
const timeSelect = document.querySelectorAll(".time-select button");
let fDuration = 600;
outline.style.strokeDasharray = outlineLength;
outline.style.strokeDashoffset = outlineLength;
timeDisplay.textContent = `${Math.floor(fDuration / 60)}:${Math.floor(
    fDuration % 60
)}`;

sounds.forEach(sound => {
    sound.addEventListener("click", function () {
        song.src = this.getAttribute("data-sound");
        video.src = this.getAttribute("data-video");
        checkPlaying(song);
    });
});


//Playing sounds
play.addEventListener("click", () => {
    checkPlaying(song);
});

replay.addEventListener("click", () => {
    restartSong(song);

});

const restartSong = song => {
    let currentTime = song.currentTime;
    song.currentTime = 0;
    console.log("ciao")
}

timeSelect.forEach(option => {
    option.addEventListener("click", function () {
        fDuration = this.getAttribute("data-time");
        timeDisplay.textContent = `${Math.floor(fDuration / 60)}:${Math.floor(
            fDuration % 60
        )}`;
    });
});


//Stop-play sound function
const checkPlaying = song => {
    if (song.paused) {
        song.play();
        video.play();
        play.src = "img/pause.svg";
    } else {
        song.pause();
        video.pause();
        play.src = "img/play.svg";
    }
};
song.ontimeupdate = function () {
    let currentTime = song.currentTime;
    let elapsed = fDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);
    timeDisplay.textContent = `${minutes}:${seconds}`;
    let progress = outlineLength - (currentTime / fDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;

    if (currentTime >= fDuration) {
        song.pause();
        song.currentTime = 0;
        play.src = "img/play.svg";
        video.pause();
    }
};

