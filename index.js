const videoPlayer = document.querySelector('.player');
const video = videoPlayer.querySelector('.viewer');

const playBtn = videoPlayer.querySelector('.play-btn');
const poster = videoPlayer.querySelector('.poster');
const controlPlay = videoPlayer.querySelector('.play');
const controlVol = videoPlayer.querySelector('.volume');
const progresBar = videoPlayer.querySelector('.progres');
const progresVol = videoPlayer.querySelector('.volume-progres');

video.addEventListener('click', toggleVideo);
video.addEventListener('timeupdate', updateProgres);
playBtn.addEventListener('click', toggleVideo);
controlPlay.addEventListener('click', toggleVideo);
poster.addEventListener('click', toggleVideo);
controlVol.addEventListener('click', toggleVol);
progresBar.addEventListener('input', setProgres);
progresVol.addEventListener('input', setProgresVol);

function toggleVideo() {
    if(video.paused){
        videoPlayer.querySelector('.poster').style.visibility = "hidden";
        video.play();
        controlPlay.style.backgroundImage = "url(assets/img/pause.svg)";
        playBtn.style.visibility = "hidden";
    }else{
        videoPlayer.querySelector('.poster').style.visibility = "hidden";
        video.pause();
        controlPlay.style.backgroundImage = "url(assets/img/play.svg)";
        playBtn.style.visibility = "visible";  
    }
}

function toggleVol(){
    if (video.muted === false) {    
        video.muted = true;
        videoPlayer.querySelector('.volume').style.backgroundImage = "url(assets/img/mute.svg)";
    } else {
        video.muted = false;
        videoPlayer.querySelector('.volume').style.backgroundImage = "url(assets/img/volume.svg)";
    }
}

function updateProgres(){
    progresBar.value = (video.currentTime / video.duration)*100;
    videoPlayer.querySelector('.progres').style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${progresBar.value}%, #c8c8c8 ${progresBar.value}%, #c8c8c8 100%)`;
}

function setProgres(){
    video.currentTime = (progresBar.value * video.duration)/100;
    videoPlayer.querySelector('.progres').style.background = `linear-gradient(to right, bdae82 0%, #bdae82 ${ video.currentTime}%, #c8c8c8 ${ video.currentTime}%, #c8c8c8 100%)`;
}

function setProgresVol(){
    video.volume = progresVol.value / 100;
    progresVol.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${progresVol.value}%, #c8c8c8 ${progresVol.value}%, #c8c8c8 100%)`;
}