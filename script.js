let audios = ['./Media/forever.mp3', './Media/goodbye.mp3'];
// let covers = ['lplost.jpeg', 'mann.jpeg', 'meds.jpeg', 'serggate.jpeg'];


let currentSong = 0;

let audio_btns = document.querySelector(".audio-btns");
let audio = document.createElement('audio');
audio.src = audios[currentSong];
let playBtn = document.querySelector(".play-pause");

function togglePlayPause() {
    
    if(audio.paused) {
            audio.play();
            playBtn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    } else {
            audio.pause();
            playBtn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
}    

playBtn.addEventListener("click", togglePlayPause);

let decreaseBtn = document.querySelector('.decrease');
decreaseBtn.addEventListener('click', decreaseVolume);
let increaseBtn = document.querySelector('.increase');
increaseBtn.addEventListener('click', increaseVolume);


function decreaseVolume() {
    audio.volume -= 0.25;
}

function increaseVolume() {
    audio.volume += 0.25;
}


let muteBtn = document.querySelector('.mute');
muteBtn.addEventListener('click', mute);

function mute() {
    if (audio.muted == false) {
    muteBtn.muted = true;
    audio.muted = true;
    } else {
    audio.muted = false; 
    muteBtn.muted = false;
    }
}



