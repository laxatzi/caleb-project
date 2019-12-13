const slideshow = document.querySelector(".slide_wrap");
//make sure we don't run this script if the slideshow is not present...This is something we should always be doing when coding: preparing for the worst case scenario.
if(slideshow != null){
   // Setting up our variables
     let slides = document.querySelectorAll(".slide_entry");
     let slideCount = slides.length;
     let currentSlide = 0;
     let slideHeight = null;
     let initHeight = slides[0].clientHeight;
}

