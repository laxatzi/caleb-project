var quizGame = {
   "name": "Super Hero Name quiz game",
   "description": "How many super heroes can you name?",
   "question": "What is the real name of ",
   "questions": [
      {
        "question": "Superman?",
        "answer" : "Clark Kent"
     },
      {
        "question" : "Batman?",
        "answer":"Bruce Wayne"
     },
     {
        "question": "Wonder Woman?",
        "answer": "Dianna Pierce"
     }
   ]
};

// DOM references
  var $question = document.getElementById('questionSection');
  var $feedback = document.getElementById('feedback');
  var $score = document.getElementById('score');
  var $start = document.getElementById('button');
  var $form = document.getElementById('answer');
  var $timer = document.getElementById('timer');
/// My Functions ///

   //function to update elements on the page
      function update(element, content, klass){ // first param is the element to be updated,
                                                // second param is the content that is to be updated with
                                                // third param is an optional class 
         var p = element.firstChild || document.createElement("p"); // if element already has a first child assign it to p variable. If not already, create one.
         p.textContent = content; // Add the second argument as the content of the element
         element.appendChild(p); // insert p inside the element
         if(klass){ // if klass argument exists use to p 
         p.className = klass;
         }
      }
      function hide(el){
         el.style.display = "none";
      }
      function show(el){
         el.style.display = "block";
      }

  // play(quizGame);  execute main function  =>
     $start.addEventListener('click',function(){ play(quizGame) },false); // we add a click event listener to the button that will start the game when button is clicked.

  // hide the form at the start of the game
    hide($form);

// Function Definitions

   // A main function that contains all the steps of playing the game
   function play(quizGame){ // we insert the quizGame arr as an argument
   //score
      var score = 0;  // init score
      update($score, score); // display score into header 
   //timer
      var time= 20; // init timer 
      update($timer, time); //update time element by displaying remaining time
      var interval = window.setInterval(countdown, 1000); //set interval
   // hide button and show form
       hide($start);
       show($form);
   // add event listener to form for checking when it's been submitted
         $form.addEventListener('submit', function(evt){
            evt.preventDefault();
            check($form[0].value);
         }, false);
   
      var i = 0; // keep track of how many questions have been asked
      chooseQuestion();

   // Nested Functions
       // choose question
       function chooseQuestion(){
          var question = quizGame.questions[i].question;
          ask(question);
       }
      // Ask
         function ask(question){ // the question is displayed into the html instead of the dialogue
            update($question, quizGame.question + question);
            $form[0].value = ""; // remove prev answer
            $form[0].focus();    // give focus once more
         }
      // Check
         function check(answer){
         if(answer === quizGame.questions[i].answer){
            update($feedback,"Bravo. You earn one point!", "correct" ); // add a 3rd arg to style as we wish
            score++;
            update($score, score);
         }else{
            update($feedback, "Sorry, your answer is wrong!", "wrong"); // add a 3rd arg to style as we wish
         }
         i++;
         if(i === quizGame.questions.length){
            gameOver();
         }else{
            chooseQuestion();
         }
       }
      
       // countdown
         function countdown(){
            // decrease time by one
            time--;
            // update time displayer
            update($timer, time);
            // when timer reach 0 => game over
            if(time<=0) gameOver();
         }
   // Game Over
      function gameOver(){
         // inform player that game is finished and update them what the score is 
         update($question, "Game is over, you scored "+score+" points in total!");
         hide($form);
         hide($feedback);
         show($start);
         // remove the interval (countdown) when game has finished (otherwise it will continue counting down ad infinitum)
         window.clearInterval(interval);
         }
         
      } // and play function

    