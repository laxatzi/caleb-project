//FOCUS
// focus() jquery 
/*
    $("#focus").focus();
*/
// jquery focus() in vanilla js
function setFocus() { 
   document.getElementById("focus").focus(); 
} 

//BLUR
// blur()  jquery
/*
    $("#focus").blur();
*/
// jquery blur() in vanilla js
function removeFocus() { 
   document.getElementById("focus").blur(); 
}


// HOVER
// hover() jquery
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

// TOGGLE
/*
function toggleFunction(){
  $(".myDIV").toggleClass("toggleDiv");
});
*/
// jquery hover() in vanilla js
function toggleFunction() {
  const element = document.querySelector(".myDIV");
  element.classList.toggle("toggleDiv");
}

//  CSS STYLE ELEMENTS
// With jQuery

  /* Pass multiple styles
  $(".box2").css({
    "color": "#000",
    "background-color": "#f00"
  });
*/
// Without jQuery

  // Set color to #000 and background to #f00

  const box2 = document.querySelector(".box2");
  box2.style.color = "#000";
  box2.style.backgroundColor = "#f00";

  // Set all styles at once (and override any existing styles)
  box2.style.cssText = "color: #000; background-color: #f00";

  //CLICK
  // with jquery
  /*
  $(".btn").click(function(e) { handle click event });
  */
 //without jquery
 document.querySelector(".btn").addEventListener("click", (e)=> { /* handle event listener */ });

  // events with keys
  /*
  .keyup()
  .keydown()
  .keypress()
  */
 // with jquery
 /*
 $(document).keyup(function(e) { handle keyup event });
*/
// without jquery
document.addEventListener("keyup", (e)=> { /* handle keyup event*/ });

 // mouse events
 /*
    .mouseup();
    .mousedown();
    .mouseover();
    .mouseenter();
    .mouseleave();
    .mouseover();
    .mouseout();
 */
// with jQuery
/*
$(".button").mouseenter(function(e) { handle event listener });
*/
// without jquery
document.querySelector(".button").addEventListener("mouseenter", (e)=> { /*handle event listener*/ });