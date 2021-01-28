let audios = ['./Media/forever.mp3', './Media/goodbye.mp3'];
let covers = ['lplost.jpeg', 'mann.jpeg', 'meds.jpeg', 'serggate.jpeg'];

// Object of audio

///let audio = new Audio();


window.onload = playSong; // Song plays when the window is loaded

function playSong() {
    let currentSong = 0;
    let audio_btns = document.querySelector(".audio-btns");
    let audio = document.createElement('audio');
    audio.src = audios[currentSong];
    audio_btns.appendChild(audio);
    audio.autoplay = true
    audio.play();
}

function togglePlayPause() {
    if(audio.paused) {
        audio.play();
        let playBtn = document.querySelector(".play-pause");
        playBtn.addEventListener('click', () => {
            playBtn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
        })    
    } else {
        audio.pause();
        playBtn.addEventListener('click', () => {
        playBtn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    })
}
}

