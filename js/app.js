//          JSON SONGS
var imgCover = "img/cover";
var songs = [
    {
        title: "Battery",
        path: "musics/Battery.mp3",
        artist: "Sadhu Sensi",
        playlist: "playlist_01",
        cover: imgCover + "ReturnToDust.jpg"
    },
    {
        title: "Disco Dub",
        path: "musics/Disco Dub.mp3",
        artist: "Sadhu Sensi",
        playlist: "playlist_01",
        cover: imgCover + "ReturnToDust.jpg"
    },
    {
        title: "Madakara",
        path: "musics/Madakara.mp3",
        artist: "Sadhu Sensi",
        playlist: "playlist_02",
        cover: imgCover + "Madakara.jpg"
    },{
        title: "Never Forgot",
        path: "musics/Never Forgot.mp3",
        artist: "Sadhu Sensi",
        playlist: "playlist_02",
        cover: imgCover + "ReturnToDust.jpg"
    },{
        title: "De La Luz",
        path: "musics/De La Luz.mp3",
        artist: "Fakear",
        playlist: "playlist_03",
        cover: imgCover + "Animal.jpg"
    },{
        title: "Never Be Like You",
        path: "musics/Never Be Like You.mp3",
        artist: "Flume",
        playlist: "playlist_03",
        cover: imgCover + "Skin.jpg"
    },{
        title: "Lite Spots",
        path: "musics/Lite Spots.mp3",
        artist: "Kaytranada",
        playlist: "playlist_04",
        cover: imgCover + "99.9.jpg"
    },{
        title: "Espoir",
        path: "musics/Espoir.mp3",
        artist: "Darius",
        playlist: "playlist_04",
        cover: imgCover + "Romance.jpg"
    }
];

//          SELECTORS ELEMENTS
var play = document.querySelector(".glyphicon-play");
var pause = document.querySelector(".glyphicon-pause");
var next = document.querySelector(".glyphicon-step-forward");
var prev = document.querySelector(".glyphicon-step-backward");
var volumeOn = document.querySelector(".glyphicon-volume-up");
var volumeOff = document.querySelector(".glyphicon-volume-off");
var repeat = document.querySelector(".glyphicon-repeat");
var noLike = document.querySelector(".glyphicon-heart-empty");
var like = document.querySelector(".glyphicon-heart");
var random = document.querySelector(".glyphicon-random");
var randomActive = document.querySelector(".random-active");
var audio = document.querySelector(".audio");
var title = document.querySelector("h3");
var artist = document.querySelector("h4");
var time = document.querySelector("h5");
var bar = document.querySelector(".bar");
var pointer = document.querySelector(".pointer");
var cover = document.querySelector("img");
var numList = document.querySelector("p");
var repeatOne = document.querySelector(".badge");

//          VARIABLES
var bWidth = bar.offsetWidth;
var i = 0;
var l = 0;

//          INITIALIZE
title.innerHTML = songs[i].title;
artist.innerHTML = songs[i].artist;
numList.innerHTML = i + 1 + "/" + songs.length;
audio.src = songs[i].path;
cover.src = songs[i].cover;

//          EVENT CLICK
//          -PLAY-
play.addEventListener("click", goPlay);
//          -PAUSE-
pause.addEventListener("click", goPause);
//          -NEXT-
next.addEventListener("mouseup", goNext);
//          -PREV-
prev.addEventListener("mouseup", goPrev);

//          -BUTTON PLAY-
play.addEventListener("click", playToPause);
//          -BUTTON PAUSE-
pause.addEventListener("click", pauseToPlay);

//          -VOLUME-
volumeOn.addEventListener('click', volume);
volumeOff.addEventListener('click', volume);

//          -REPEAT-
repeat.addEventListener('click', goRepeat);

//          -RANDOM-
random.addEventListener("click", verifRandom);
randomActive.addEventListener("click", verifRandom);

//          -LIKE-
noLike.addEventListener("click", goLike);
like.addEventListener("click", goLike);

//          -TIMEBAR-
bar.addEventListener('click', timeBar);

//          OTHER EVENT
//          -AUDIO-
audio.addEventListener("timeupdate", timeBarUpdate);
audio.addEventListener("timeupdate", timeUpdate);
audio.addEventListener("loadeddata", timeUpdate);

//          -KEYBOARD-
document.addEventListener("keydown", spaceBarPlay);
document.addEventListener("keydown", nextPrevKey);
document.addEventListener("keydown", repeatKey);
document.addEventListener("keydown", likeKey);
document.addEventListener("keydown", muteKey);
document.addEventListener("keydown", randomKey);

//          -WINDOW-
document.addEventListener("contextmenu", noMenu);

//          FUNCTIONS
function goPlay() {
    return audio.play();
}

function goPause() {
    return audio.pause();
}

function playToPause() {
    play.style.display = "none";
    pause.style.display = "flex";
}

function pauseToPlay() {
    pause.style.display = "none";
    play.style.display = "flex";
}

//          KEYCODE SPACEBAR FOR PLAY OR PAUSE
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

function goNext() {
    if (random.style.display === "none" && randomActive.style.display === "flex") {
        i = Math.floor(Math.random() * songs.length);
        if (Math.floor(Math.random() * songs.length) === i) {
            i = Math.floor(Math.random() * songs.length);
        }
        cover.src = songs[i].cover;
        audio.src = songs[i].path;
        audio.play().autoplay;
        title.innerHTML = songs[i].title;
        artist.innerHTML = songs[i].artist;
        numList.innerHTML = i + 1 + "/" + songs.length;
    } else {
        // console.log("je ne rentre pas");
        playToPause();
        i++;

        if (i === songs.length) {
            i = 0;
            // Re-voir la fonction de répétition
            // goRepeat();
        }
        cover.src = songs[i].cover;
        audio.src = songs[i].path;
        audio.play().autoplay;
        title.innerHTML = songs[i].title;
        artist.innerHTML = songs[i].artist;
        numList.innerHTML = i + 1 + "/" + songs.length;
    }
}

function goPrev() {
    if (random.style.display === "none" && randomActive.style.display === "flex") {
        i = Math.floor(Math.random() * songs.length);
        if (Math.floor(Math.random() * songs.length) === i) {
            i = Math.floor(Math.random() * songs.length);
        }
        cover.src = songs[i].cover;
        audio.src = songs[i].path;
        audio.play().autoplay;
        title.innerHTML = songs[i].title;
        artist.innerHTML = songs[i].artist;
        numList.innerHTML = i + 1 + "/" + songs.length;
    } else {
        // console.log("je ne rentre pas");
        playToPause();
        i--;

        if (i < 0) {
            i = songs.length - 1;
            // Re-voir la fonction de répétition
            // goRepeat();
        }
        cover.src = songs[i].cover;
        audio.src = songs[i].path;
        audio.play().autoplay;
        title.innerHTML = songs[i].title;
        artist.innerHTML = songs[i].artist;
        numList.innerHTML = i + 1 + "/" + songs.length;
    }
}

//          KEYCODE RIGHT ARROW FOR NEXT && LEFT ARROW FOR PREV
function nextPrevKey(e) {
    if (e.keyCode == 37) {
        goPrev();
    }

    if (e.keyCode == 39) {
        goNext();
    }
}

function goRepeat() {
    // Re-voir la fonction de repeat
    // l++;
    // if (l === 3) {
    //     l = 0;
    // }
    // switch (l) {
    //     case 0:
    //         repeat.className = "glyphicon glyphicon-repeat";
    //         repeatOne.style.display = "none";
    //         noRepeat(l);
    //         return 0;
    //         break;
    //     case 1:
    //         repeat.className = "glyphicon glyphicon-repeat repeat-all";
    //         return 1;
    //         // repeatAll(l);
    //         break;
    //     case 2:
    //         repeat.className = "glyphicon glyphicon-repeat repeat-one";
    //         repeatOne.style.display = "block";
    //         return 2;
    //         // repeatOne(l);
    //         break;
    // }

    audio.currentTime = 0;
}

//          KEYCODE R FOR REPEAT
function repeatKey(e) {
    if (e.keyCode == 82) {
        goRepeat();
    }
}

//          KEYCODE A FOR RANDOM
function randomKey(e) {
    if (e.keyCode === 65) {
        verifRandom();
    }
}

function verifRandom() {
    if (random.style.display === "none" && randomActive.style.display === "flex") {
        randomActive.style.display = "none";
        random.style.display = "flex";

        return 1;
    } else {
        randomActive.style.display = "flex";
        random.style.display = "none";

        return 0;
    }
}

function volume() {
    if (volumeOn.style.display === "none" && volumeOff.style.display === "flex") {
        volumeOn.style.display = "flex";
        volumeOff.style.display = "none";
        audio.volume = 1;
    } else {
        volumeOn.style.display = "none";
        volumeOff.style.display = "flex";
        audio.volume = 0;
    }
}

//          KEYCODE M FOR MUTE
function muteKey(e) {
    if (e.keyCode == 77) {
        volume();
    }
}

function goLike() {
    if (noLike.style.display === "none") {
        like.style.display = "none";
        noLike.style.display = "flex";
    } else {
        like.style.display = "flex";
        noLike.style.display = "none";
    }
}

//          KEYCODE L FOR LIKE
function likeKey(e) {
    if (e.keyCode === 76) {
        goLike();
    }
}

function timeBar(e) {
    var lol = e.offsetX;
    audio.currentTime = ((audio.duration*lol)/bWidth);
}

function timeBarUpdate() {
    pointer.style.width = ((100 * audio.currentTime)/audio.duration) + "%";
}

function timeUpdate() {
    time.innerHTML = calculateTime(audio.currentTime) + " | " + calculateTime(audio.duration);
    if (audio.currentTime === audio.duration) {
        goNext();
    }
}

function calculateTime(time) {
    var j = parseInt(time / 60);
    var k = parseInt(time - (j*60));

    if (time === audio.duration) {
        if (isNaN(time)) {
            return "0:00";
        }

        if (k < 10) {
            return j + ":0" + k;
        } else {
            return j + ":" + k;
        }
    } else {
        if(isNaN(time)) {
            return "0:00";
        }

        if (k < 10) {
            return j + ":0" + k;
        } else {
            return j + ":" + k;
        }
    }
}

// Re-voir la fonction de repeat
function noRepeat(l) {
    // if (i === songs.length) {
    //     console.log("noRepeat");
    //     return 1;
    // }

}

function verif() {
    if (goRepeat() === 1 && verifRandom() === 1) {
        console.log("noRepeat et noRandom");
    } else if (goRepeat() === 1 && verifRandom() === 0) {
        console.log("noRepeat et random");
    } else if (goRepeat() === 0 && verifRandom() === 1) {
        console.log("Repeat et noRandom");
    }
}

function noMenu(e) {
    e.preventDefault();
}