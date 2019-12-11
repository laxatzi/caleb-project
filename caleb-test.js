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
function confirmFunction(){
   confirm("Do you want to leave?");
   if(confirm===true){
      alert("Good bye!");
   }
   else{
      alert("Happy to see you stay!");
   }
}
function promptFunction(){
   var age = prompt("How old are you?");
   if(age){
      alert("So you are "+age+" years old!" );
   }else{
      alert("No input filled in!");
   }
}
function selectID(id){
   return document.getElementById(id);
}

function changeMe(){
   selectID('testID').style.border= "1px solid red";
   selectID('testID').innerHTML = "Border added!";
   selectID('btn').innerHTML = "Changed!";
   selectID('btn').disabled = true;
}