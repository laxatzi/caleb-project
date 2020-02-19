(function(){
// Wrapping all the code inside an immediately invoked function
// now all variables are wrapped up within the scope of THIS anonymous function. So if this file is used in conjunction with another javascript file, there will be no problems with same name variables

"use strict"; // strict mode ensures errors will be thrown rather than failing silently

var quizGame = {
   "name": "Super Hero Name quiz game",
   "description": "How many super heroes can you name?",
   "question": "What is the real name of ",
   "questions": [
      {
        "question": "Superman?",
        "answer" : "Clark Kent",
        "asked": false
     },
      {
        "question" : "Batman?",
        "answer":"Bruce Wayne",
        "asked": false
     },
     {
        "question": "Wonder Woman?",
        "answer": "Dianna Pierce",
        "asked": false
     },
     { 
        "question": "Spider-man",
         "answer": "Peter Parker", 
         "asked": false
     },
     { 
        "question": "Iron-man",
        "answer": "Tony Stark", 
        "asked": false 
      },
     {
        "question": "Captain-America",
         "answer": "Steve Rogers",
          "asked": false
      },
     {
        "question": "Black Panther",
         "answer" : "T'Chaka",
         "asked": false
     },
     {
        "question": "Thor",
        "answer": "Donald Blake",
         "asked": false
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
  var $reloader = document.getElementById('reload');
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
  // hide reload button at the start of the game 
    hide($reloader);

  //add event listener for reloading page when clicking again button
   $reloader.addEventListener('click', function(){
      location.reload();
   })

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
   
      var question; // the current question
      chooseQuestion();

   // Nested Functions
       // choose question
       function chooseQuestion(){
          console.log("chooseQuestion() called");
          var questions = quizGame.questions.filter(function(question) {
             return question.asked === false; //return array containing only questions that haven't been asked yet
          });
          // set the current question
          question = questions[random(questions.length - 1)]; // random is used to select a number between 1 and the length of this ,yet to asked questions, array.
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
         // remove the interval (countdown) when game has finished (otherwise it will continue counting down ad infinitum)
         window.clearInterval(interval);
         show($reloader);
         }
         
      } // and play function
 
   // use random function to make questions appear at random
     function random(a,b,callback){
        if(b === undefined){
            // if only one parameter is supplied, assume the lower limit is 1 and upper is a
            b=a, a=1;
        }
        var result = Math.floor((b-a+1)*Math.random() + a);
        if(typeof callback === "function"){
           result = callback(result);
        }
        return result;
     }

   }()); // Wrapping all the code inside an immediately invoked function

