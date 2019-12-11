// focus() 
/*
    $("#focus").focus();
*/
// jquery focus() in vanilla js
function setFocus() { 
   document.getElementById("focus").focus(); 
} 

// blur() 
/*
    $("#focus").blur();
*/
// jquery blur() in vanilla js
function removeFocus() { 
   document.getElementById("focus").blur(); 
}


// hover()
/*
    $(#box).hover(
      function(){
        // the effect to take place when the mouse is over the element
      },
      function(){
        // the effect to take place when the mouse is NOT over the element
      }
    );
*/

// jquery hover() in vanilla js

const greyBox = document.querySelector("#box");

greyBox.addEventListener("mouseover", event => {
  console.log("Mouse in");
});

greyBox.addEventListener("mouseout", event => {
  console.log("Mouse out");
});