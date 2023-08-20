"use strict"
const audioPlayer = document.getElementsByTagName('audio')[0];
const play = document.querySelector('.play')
const pause = document.querySelector('.pause');
const mute = document.querySelector('.mute');
const unmute = document.querySelector('.unmute');
const progressBar = document.querySelector('.progress_bar');
const songWrapper = document.querySelector('.song-wrapper');
const card = document.querySelector('.card');



//card.addEventListener('click', () => {
//   card.classList.add('active');
//});
   
   play.addEventListener('click', function () {
      audioPlayer.play();
      this.style.display = 'none';
      pause.style.display = 'block';
   });
   
   pause.addEventListener('click', function () {
      audioPlayer.pause();
      this.style.display = 'none';
      play.style.display = 'block';
   });
   
   mute.addEventListener('click', function () {
      audioPlayer.volume = 0;
      this.style.display = 'none';
      unmute.style.display = 'block';
   });
   unmute.addEventListener('click', function () {
      audioPlayer.volume = 1;
      this.style.display = 'none';
      mute.style.display = 'block';
   });
   
   const size = 420;
   setInterval(function () {
      const width = parseInt(
         (audioPlayer.currentTime * size) / audioPlayer.duration
      );
      progressBar.style.width = width + 'px';
   }, 100);