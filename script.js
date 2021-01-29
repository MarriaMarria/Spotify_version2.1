const song = document.querySelector('#song'); // CONST OR LET?
const songTitle = document.querySelector('.songTitle'); // HERE OR INSIDE FUNCTIONS?
const songArtist = document.querySelector('.songArtists');
const cover = document.querySelector('#covers');
const audio_btns = document.querySelector(".audio-btns");
const playBtn = document.querySelector(".play-pause");
const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const forward = document.querySelector('.forward');
const muteBtn = document.querySelector('.mute');

// MAKE OBJECT
const songs = ['./Media/forever.mp3', './Media/goodbye.mp3', './Media/mann.mp3', './Media/meds.mp3', './Media/walls.mp3'];
const covers = ['./Media/lp_forever.jpeg', './Media/gate21.jpeg', './Media/mann.jpeg', './Media/meds.jpeg', './Media/serj.jpeg'];
const artists = ['LP', 'Serj Tankian', 'Rammstein', 'Placebo', 'Serj Tankian'];
const songTitles = ['Forever for now', 'Goodbye', 'Mann gegen mann', 'Meds', 'Empty walls'];

let currentSong = 0;

function togglePlayPause() {
    if(song.paused) {
        song.play();
        playBtn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    } else {
        song.pause();
        playBtn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
}   

function nextSong() { // ADD TO START FROM INDEX 0 WHEN LIST ENDS
    currentSong++;
    song.src = songs[currentSong];
    cover.src = covers[currentSong]; 
    songArtist.innerHTML = artists[currentSong]; 
    songTitle.innerHTML = songTitles[currentSong];
    togglePlayPause();
}

function mute() {
    if (song.muted == false) {
    muteBtn.muted = true;
    song.muted = true;
    } else {
    song.muted = false; 
    muteBtn.muted = false;
    }
}

function decreaseVolume() {
    song.volume -= 0.25;
}

function increaseVolume() {
    song.volume += 0.25;
}

// EVENT LISTENERS, SHALL WE UNITE THEM SOMEHOW??

song.addEventListener('ended', function() {
    nextSong();
});
forward.addEventListener('click', function() {
    nextSong();
});

playBtn.addEventListener("click", togglePlayPause);
decreaseBtn.addEventListener('click', decreaseVolume);
increaseBtn.addEventListener('click', increaseVolume);
muteBtn.addEventListener('click', mute);






