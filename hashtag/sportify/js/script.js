const songName = document.querySelector('.song-name');
const song = document.querySelector('.audio');
const play = document.querySelector('.play');

songName.innerHTML = 'As You Were';


function playSong() {
    play.querySelector('.bi bi-play-circle');
    song.play();
}

play.addEventListener('click', playSong);
