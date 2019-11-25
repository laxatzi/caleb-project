//code for my video player
let video = document.getElementById('video1');

function playOrPause(){
   if (video.paused){
      video.play();
   }else{
         video.pause();
   }
}

function normalScreen(){
   video.width= 420;
}

function bigScreen(){
   video.width = 700;
}

//code for my audio player
let audio = document.getElementById('audio1');

function playOrPauseAudio(){
   if(audio.paused){
      audio.play();
   } else{
      audio.pause();
   }

}

