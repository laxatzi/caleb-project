const slideshow = document.querySelector(".slide_wrap");
//make sure we don't run this script if the slideshow is not present...This is something we should always be doing when coding: preparing for the worst case scenario.
if(slideshow != null){
   // Setting up our variables
     let slides = document.querySelectorAll(".slide_entry"); // grab all files
     let slideCount = slides.length; // count number of slides in slider
     let currentSlide = 0; // starting place for the current slide (first position in that case)
     let slideHeight = null; // we gonna need this later for height calc
     let initHeight = slides[0].clientHeight; // find the height of the first slide

     // let's activate the first slide on page load and set the height of that slide to the slideshow itself
     slides[0].classList.add('active');
     slideshow.style.height = initialHeight + "px";
}

