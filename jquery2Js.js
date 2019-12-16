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

// jquery toggle() in vanilla js
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

   // Get Style
      // in jQuery 
      $(el).css(ruleName);
      // without jQuery
      getComputedStyle(element)[ruleName];
//CLICK
    // with jquery
    /*
    $(".btn").click(function(e) { handle click event });
    */
  //without jquery
  // document.querySelector(".btn").addEventListener("click", (e)=> { /* handle event listener */ });

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
    //document.querySelector(".button").addEventListener("mouseenter", (e)=> { /*handle event listener*/ });

// HIDE & SHOW
  // with jquery
  /*
  $(".class").hide();
  $(".class").show();
*/
  // without jquery
  /*
  document.querySelector(".class").style.display= "none";
  document.querySelector(".class").style.display = "block";
*/

// FADEIN -- FADEOUT

    // With jQuery
    /*
    $(".btn1").click(function(){
      $(".pink").fadeOut();
    });
    $(".btn2").click(function(){
      $("pink").fadeIn();
    });
    */

    // without jQuery
    const pink = document.querySelector(".pink");
    function fadeout(){
      pink.classList.add("fadeout_hide");
      pink.classList.remove("fadeout_show");
    }
    function fadein(el){
      pink.classList.add("fadein_show");
      pink.classList.remove("fadeout_hide");
    }

// TEXT OF AN ELEMENT ... read(get) or update(set)

  //with jquery
  /*
    set button text -- $('.button').text("some new text");
    read(get) button text -- $(".button").text();

  */

  // without jquery  *(use of innerHTML not advisable for safety reasons regarding this purpose)
  document.querySelector(".button").textContent = "some text"; // set
  document.querySelector(".button").textContent; // get

// CONSTRUCTION OF AN ELEMENT
 
  // with jquery
  /*
    --create div and append it to .container
    $(".container").append($("<div></div>"));
  */
  // without jquery 
  const element = document.createElement("div");
  document.querySelector(".container").appendChild(element);

// Put together, here’s how to create a div, update its text and class, and add it to the DOM:

    //create a div
    const elem = document.createElement("div");
    // update its class 
    elem.classList.add("class");
    //update its content
    elem.textContent = "some text inside";
    // append the element to a container 
    document.querySelector(".container").appendChild(elem);

// or
/*
    const unorderedList = document.querySelector("#list");
    unorderedList.insertAdjacentHTML("beforeend", `<li>list item</li>`);
*/

//Classes
    // with jQuery
    // Add, remove, toggle the 'focus' class
    /*
    $('.box').addClass('focus');
    $('.box').removeClass('focus');
    $('.box').toggleClass('focus');
    */
    // WITHOUT jQuery
    const box = document.querySelector('.box');
    box.classList.add('focus');
    box.classList.remove('focus');
    box.classList.toggle('focus');

   //If you want to remove or add multiple classes you can just pass multiple arguments to .add() and .remove():

   box.classList.add('focus', 'highlighted');
   box.classList.remove('focus', 'highlighted');

//Checking if an element has a class

    // With jQuery
        /* Check if .box has a class of "focus", and do something
        if ($(".box").hasClass("focus")) {
          // Do something...
        }
       */
    // Without jQuery
      // Check if .box has a class of "focus", and do something
      if (document.querySelector(".box").classList.contains("focus")) {
        // Do something...
      }
  
//Document ready

    // With jQuery
      /*
        $(document).ready(function() { 
           Do things after DOM has fully loaded 
        });
      */
    // Without jQuery
        // Define a convenience method and use it
        const ready = (callback) => {
          if (document.readyState != "loading") callback();
          else document.addEventListener("DOMContentLoaded", callback);
        }

        ready(() => { 
          /* Do things after DOM has fully loaded */ 
        });