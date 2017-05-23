//          JSON SONGS
var songs = [
    {
        title: "Battery",
        path: "musics/Battery.mp3",
        artist: "Sadhu Sensi",
        playlist: "playlist_01"
    },
    {
        title: "Disco Dub",
        path: "musics/Disco Dub.mp3",
        artist: "Sadhu Sensi",
        playlist: "playlist_01"
    },
    {
        title: "Madakara",
        path: "musics/Madakara.mp3",
        artist: "Sadhu Sensi",
        playlist: "playlist_02"
    },{
        title: "Never Forgot",
        path: "musics/Never Forgot.mp3",
        artist: "Sadhu Sensi",
        playlist: "playlist_02"
    }

];

//          SELECTORS ELEMENTS
var play = document.querySelector(".glyphicon-play");
var pause = document.querySelector(".glyphicon-pause");
var next = document.querySelector(".glyphicon-step-forward");
var prev = document.querySelector(".glyphicon-step-backward");
var audio = document.querySelector(".audio");
var title = document.querySelector("h3");
var artist = document.querySelector("h4");
var time = document.querySelector("h5");
var voice = document.querySelector(".voice");
var bar = document.querySelector(".bar");
var pointer = document.querySelector(".pointer");
var cover = document.querySelector(".cover");

//          VARIABLES
var bWidth = bar.offsetWidth;
var i = 0;

//          INITIALIZE
title.innerHTML = songs[i].title;
artist.innerHTML = songs[i].artist;
audio.src = songs[i].path;

//          EVENT CLICK
play.addEventListener("click", goPlay);
pause.addEventListener("click", goPause);
next.addEventListener("click", goNext);
prev.addEventListener("click", goPrev);
play.addEventListener("click", playToPause);
pause.addEventListener("click", pauseToPlay);
bar.addEventListener('click', timeBar);
voice.addEventListener("timeupdate", timeBarUpdate);
audio.addEventListener("timeupdate", timeUpdate);
audio.addEventListener("loadeddata", timeUpdate);
window.addEventListener("resize", resizing);

//          KEYBOARD TOUCH
document.addEventListener("keydown", spaceBarPlay);
document.addEventListener("keydown", nextPrev);

//          FUNCTIONS
function goPlay() {
    audio.play();
}

function goPause() {
    audio.pause();
}

function goNext() {
    playToPause();
    i++;
    if (i === songs.length) {
        i = 0;
    }

    // if (songs[i].playlist == "playlist_01") {
    //     cover.style.backgroundImage == "../img/cover/MAYplaylist01";
    // } else {
    //     cover.style.backgroundImage == "../img/cover/MAYplaylist02";
    // }
    audio.src = songs[i].path;
    audio.play().autoplay;
    title.innerHTML = songs[i].title;
    artist.innerHTML = songs[i].artist;
}

function goPrev() {
    playToPause();
    i--;
    if (i < 0) {
        i = songs.length - 1;
    }
    audio.src = songs[i].path;
    audio.play().autoplay;
    title.innerHTML = songs[i].title;
    artist.innerHTML = songs[i].artist;
}

function playToPause() {
    play.style.display = "none";
    pause.style.display = "flex";
}

function pauseToPlay() {
    pause.style.display = "none";
    play.style.display = "flex";
}

function spaceBarPlay(e) {
    if (e.keyCode == 32) {
        if (play.style.display == "none") {
            pause.style.display = "none";
            play.style.display = "flex";
            goPause();
        } else {
            play.style.display = "none";
            pause.style.display = "flex";
            goPlay();
        }
    }
}

function nextPrev(e) {
    if (e.keyCode == 37) {
        goPrev();
    }

    if (e.keyCode == 39) {
        goNext();
    }
}

function timeBar(e) {
    var lol = e.offsetX;
    voice.currentTime = ((voice.duration*lol)/bWidth);
}

function timeBarUpdate() {
    pointer.style.width = ((100 * audio.currentTime)/audio.duration) + "%";
}

function timeUpdate() {
    time.innerHTML = calculateTime(audio.currentTime) + " | " + calculateTime(audio.duration);
}

function calculateTime(test) {
    var i = parseInt(test / 60);
    var j = parseInt(test - (i*60));

    if (test === audio.duration) {
        return i + ":" + j;
    } else {
        if (j < 10) {
            return i + ":0" + j;
        } else {
            return i + ":" + j;
        }
    }
}

function resizing(e) {
    console.log(e);
}