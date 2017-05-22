var musics = {
    "songs": [
        {
            "titre": 'Afire Love',
            "chemin": 'musique/Ed Sheeran - X/Afire Love.mp3',
            "artiste": 'Ed Sheeran',
            "categorie": 'categorie1'
        },
        {
            "titre": 'Thinking out loud',
            "chemin": 'musique/Ed Sheeran - X/Thinking out loud.mp3',
            "artiste": 'Ed Sheeran',
            "categorie": 'categorie1'


        },
        {
            "titre": 'Photograph',
            "chemin": 'musique/Ed Sheeran - X/Photograph.mp3',
            "artiste": 'Ed Sheeran',
            "categorie": 'categorie1'


        },
        {
            "titre": 'One',
            "chemin": 'musique/Ed Sheeran - X/One.mp3',
            "artiste": 'Ed Sheeran',
            "categorie": 'categorie1'


        },
        {
            "titre": 'Bloodstream',
            "chemin": 'musique/Ed Sheeran - X/Bloodstream.mp3',
            "artiste": 'Ed Sheeran',
            "categorie": 'categorie1'


        },
        {
            "titre": 'Nina',
            "chemin": 'musique/Ed Sheeran - X/Nina.mp3',
            "artiste": 'Ed Sheeran',
            "categorie": 'categorie1'


        },
        {
            "titre": 'How Can I Blame YOu',
            "chemin": 'musique/John Legend - DARKNESS AND LIGHT/How can I Blame You .mp3',
            "artiste": 'John Legend',
            "categorie": 'categorie2'

        },
        {
            "titre": 'Same Old Story',
            "chemin": 'musique/John Legend - DARKNESS AND LIGHT/Same Old Story.mp3',
            "artiste": 'John Legend',
            "categorie": 'categorie2'


        },
        {
            "titre": 'Darkness And Light',
            "chemin": 'musique/John Legend - DARKNESS AND LIGHT/Darkness and Light.mp3',
            "artiste": 'John Legend',
            "categorie": 'categorie2'


        },
        {
            "titre": 'Love Me',
            "chemin": 'musique/John Legend - DARKNESS AND LIGHT/Love Me Now.mp3',
            "artiste": 'John Legend',
            "categorie": 'categorie2'


        },
        {
            "titre": 'Surefire',
            "chemin": 'musique/John Legend - DARKNESS AND LIGHT/Surefire .mp3',
            "artiste": 'John Legend',
            "categorie": 'categorie2'


        },
        {
            "titre": 'What You Do to Me',
            "chemin": 'musique/John Legend - DARKNESS AND LIGHT/What You Do to Me .mp3',
            "artiste": 'John Legend',
            "categorie": 'categorie2'


        },
        {
            "titre": 'Bird Set Free',
            "chemin": 'musique/Sia - This is acting/Bird Set Free.mp3',
            "artiste": 'Sia',
            "categorie": 'categorie3'

        },
        {
            "titre": 'Broken Glass',
            "chemin": 'musique/Sia - This is acting/Broken Glass.mp3',
            "artiste": 'Sia',
            "categorie": 'categorie3'


        },
        {
            "titre": 'Cheap Thrills',
            "chemin": 'musique/Sia - This is acting/Cheap Thrills.mp3',
            "artiste": 'Sia',
            "categorie": 'categorie3'


        },
        {
            "titre": 'One Million Bullets',
            "chemin": 'musique/Sia - This is acting/One Million Bullets.mp3',
            "artiste": 'Sia',
            "categorie": 'categorie3'


        },
        {
            "titre": 'Space Between',
            "chemin": 'musique/Sia - This is acting/Space Between.mp3',
            "artiste": 'Sia',
            "categorie": 'categorie3'


        },
        {
            "titre": 'Reaper',
            "chemin": 'musique/Sia - This is acting/Reaper.mp3',
            "artiste": 'Sia',
            "categorie": 'categorie3'


        },
        {
            "titre": 'Odd Look',
            "chemin": 'musique/The Weeknd - Kiss Land/Odd Look.mp3',
            "artiste": 'The Weeknd',
            "categorie": 'categorie4'

        },
        {
            "titre": 'Pretty',
            "chemin": 'musique/The Weeknd - Kiss Land/Pretty.mp3',
            "artiste": 'The Weeknd',
            "categorie": 'categorie4'


        },
        {
            "titre": 'Professional',
            "chemin": 'musique/The Weeknd - Kiss Land/Professional.mp3',
            "artiste": 'The Weeknd',
            "categorie": 'categorie4'


        },
        {
            "titre": 'The Town',
            "chemin": 'musique/The Weeknd - Kiss Land/The Town .mp3',
            "artiste": 'The Weeknd',
            "categorie": 'categorie4'


        },
        {
            "titre": 'Wanderlust',
            "chemin": 'musique/The Weeknd - Kiss Land/Wanderlust.mp3',
            "artiste": 'The Weeknd',
            "categorie": 'categorie4'


        },
        {
            "titre": 'Love In The Sky',
            "chemin": 'musique/The Weeknd - Kiss Land/Love In The Sky.mp3',
            "artiste": 'The Weeknd',
            "categorie": 'categorie4'


        }




    ]
};

var play = document.querySelector('.play');
var pause = document.querySelector('.pause');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var x = document.querySelector(".audio");
var playlist = document.querySelectorAll('.playlist');
var div = document.querySelectorAll('div ol li');



var tab = musics.songs;
var i = 0;
var j = 0;
var chemin = musics.songs[i].chemin;
var titre = document.querySelector('.titre');
var title ='Titre : ' + musics.songs[i].titre;



titre.innerHTML = title;
var artiste = document.querySelector('.artiste');
var artist ='Auteur : ' + musics.songs[i].artiste;
artiste.innerHTML = artist;

play.addEventListener('click', function () {
    x.play();

});
pause.addEventListener('click', function () {
    x.pause();
});
next.addEventListener('click', function () {
    i++;
    if (i === musics.songs.length) {
        i = 0;
    }
    chemin = musics.songs[i].chemin;
    x.src = chemin;
    titre.innerHTML ='Titre : ' + musics.songs[i].titre;
    artiste.innerHTML ='Auteur : ' + musics.songs[i].artiste;
    x.play().autoplay;


    if (musics.songs[i].categorie === 'categorie1') {
        header.style.background = '#333 url("image/X_cover.png") no-repeat fixed top';
        header.style.backgroundSize='30%';
    }

    if (musics.songs[i].categorie === 'categorie2') {
        header.style.background = '#333 url("image/john.jpg") no-repeat fixed top';
        header.style.backgroundSize='30%';
    }
    if (musics.songs[i].categorie === 'categorie3') {
        header.style.background = '#333 url("image/sia.jpg") no-repeat fixed top';
        header.style.backgroundSize='30%';
    }
    if (musics.songs[i].categorie === 'categorie4') {
        header.style.background = '#333 url("image/weeknd.jpg") no-repeat fixed top';
        header.style.backgroundSize='30%';
    }
});
prev.addEventListener('click', function () {
    i--;
    if (i < 0) {
        i = musics.songs.length - 1;
    }
    chemin = musics.songs[i].chemin;
    x.src = chemin;
    titre.innerHTML ='Titre : ' + musics.songs[i].titre;
    artiste.innerHTML ='Auteur : ' + musics.songs[i].artiste;
    x.play().autoplay;


    if (musics.songs[i].categorie === 'categorie1') {
        header.style.background = '#333 url("image/X_cover.png") no-repeat fixed top';
        header.style.backgroundSize='30%';
    }

    if (musics.songs[i].categorie === 'categorie2') {
        header.style.background = '#333 url("image/john.jpg") no-repeat fixed top';
        header.style.backgroundSize='30%';
    }
    if (musics.songs[i].categorie === 'categorie3') {
        header.style.background = '#333 url("image/sia.jpg") no-repeat fixed top';
        header.style.backgroundSize='30%';
    }
    if (musics.songs[i].categorie === 'categorie4') {
        header.style.background = '#333 url("image/weeknd.jpg") no-repeat fixed top';
        header.style.backgroundSize='30%';
    }


});

var voice = document.querySelector('.voice');
var bar = document.querySelector('.bar');
var pointer = document.querySelector('.pointer');
var bWidth = bar.offsetWidth;

bar.addEventListener('click', function (event) {
    var lol = event.offsetX;
    x.currentTime = ((voice.duration*lol)/bWidth);
});


function play() {
    voice.play();
    songDuration= voice.duration;
    songMinutes = voiceDuration = Math
}

function pause() {
    voice.pause();

}

voice.addEventListener("timeupdate",function ()
{
    pointer.style.width = ((bWidth * voice.currentTime)/voice.duration) + "px";
});



// Récupère tout les liens playlist
for (var o = 0; o < div.length; o++) {
    generateLink(o);

}

// Genére tout les liens contenu dans musics.songs en affichant uniquement le titre de la musique dans les liens playlist
function generateLink(index) {

    for (var d = 0; d < tab.length; d++) {
        div[index].innerHTML = musics.songs[index].titre;

    }


    // Joue la musique qui a été cliquée
    div[o].addEventListener('click', function () {
        chemin = musics.songs[index].chemin;
        x.src = chemin;
        titre.innerHTML ='Titre : ' + musics.songs[index].titre;
        artiste.innerHTML = 'Auteur : ' + musics.songs[index].artiste;
        x.play();
        //console.log(musics.songs[index].categorie);



        if (musics.songs[index].categorie === 'categorie1') {
            header.style.background = '#333 url("image/X_cover.png") no-repeat fixed top';
            header.style.backgroundSize='30%';
        }

        if (musics.songs[index].categorie === 'categorie2') {
            header.style.background = '#333 url("image/john.jpg") no-repeat fixed top';
            header.style.backgroundSize='30%';
        }
        if (musics.songs[index].categorie === 'categorie3') {
            header.style.background = '#333 url("image/sia.jpg") no-repeat fixed top';
            header.style.backgroundSize='30%';
        }
        if (musics.songs[index].categorie === 'categorie4') {
            header.style.background = '#333 url("image/weeknd.jpg") no-repeat fixed top';
            header.style.backgroundSize='30%';
        }
    })

}
var header = document.querySelector('.container_header');

