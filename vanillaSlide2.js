const slideWrap = document.querySelector(".slide_wrap");
//make sure we don't run this script if the slideshow is not present...This is something we should always be doing when coding: preparing for the worst case scenario.
if(slideWrap != null){
   // Setting up our variables
     let slides = document.querySelectorAll(".slide_entry"); // grab all files
     let slideCount = slides.length; // count number of slides in slider
     let currentSlide = 0; // starting place for the current slide (first position in that case)
     let slideHeight = null; // we gonna need this later for height calc
     let initHeight = slides[0].clientHeight; // find the height of the first slide

     // let's activate the first slide on page load and set the height of that slide to the slideshow itself
     slides[0].classList.add('active');
     slideWrap.style.height = initialHeight + "px";

     // next/prev functionality 
     function slideNavigation(n) { 
         slides[currentSlide].className = 'slide_entry'; // assign the slide Html element
         currentSlide = (n + slideCount) % slideCount; // determine current slide
         slides[currentSlide].className = 'slide_entry active'; // if its current slide add active class
         slideHeight = slides[currentSlide].clientHeight; // get the height of the current slide
         slideWrap.style.height = slideHeight + "px"; // set the height of the slides
         window.addEventListener('resize', function(){ // if browser resizes
            resizedSlideHeight = slides[currentSlide].clientHeight; // get current slide height
            slideWrap.style.height = resizedSlideHeight + "px"; // update height of slideshow
         })
     }

// ad navigational functions
   function nextSlide(e) {
      slideNavigation(currentSlide + 1); // add one to index ...thus move to the next
   }
   function prevSlide(e){
      slideNavigation(currentSlide -1); // remove one from the index... thus move to prev
   }
// hook up our handlers and their respective elements so they can be clicked, and have the slideshow transition to the right slide
    const slideHandlers = {
       nextSlide: function(element){ // make it abstract to accept any html element
          document.querySelector(element).addEventListener('click', nextSlide); // hook up the selector
       },
       prevSlide: function(element){
          document.querySelector(element).addEventListener('click', prevSlide); 
       }
 }
       // Hook up the specific html elements to the functions
       slideHandlers.nextSlide(".next");
       slideHandlers.prevSlide(".prev");
}

