var quizGame = {
   "name": "Super Hero Name quiz game",
   "description": "How many super heroes can you name?",
   "question": "What is the real name of ",
   "questions": [
      {
        "question": "Superman",
        "answer" : "Clark Kent"
     },
      {
        "question" : "Batman",
        "answer":"Bruce Wayne"
     },
     {
        "question": "Wonder Woman",
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
  // play(quizGame);  execute main function  =>
     $start.addEventListener('click',function(){ play(quizGame) },false); // we add a click event listener to the button that will start the game when button is clicked.
  
// Function Definitions
   // A main function that contains all the steps of playing the game
   function play(quizGame){ // we insert the quizGame arr as an argument
         // main game loop
         var score = 0;  // init score
         update($score, score); // display score into header
      //   // Main game loop
      //    for(var i=0; i<quizGame.questions.length; i++){
      //       var question = quizGame.questions[i].question;
      //       var answer = ask(question);
      //       check(answer);
      //    }
      //    // end of main loop
      var i = 0;
      chooseQuestion();
         gameOver();

   // Nested Functions
       // choose question
       function chooseQuestion(){
          var question = quizGame.questions[i].question;
          ask(question);
       }
      // Ask
         function ask(question){ // the question is displayed into the html instead of the dialogue
            update($question, quizGame.question + question);
            return prompt("Enter your answer:");
         }
      // Check
         function check(answer){
         if(answer === quizGame.questions[i].answer){
            update($feedback,"Bravo. You earn one point!", "right" ); // add a 3rd arg to style as we wish
            score++;
            update($score, score);
         }else{
            update($feedback, "Sorry, your answer is wrong!", "wrong"); // add a 3rd arg to style as we wish
         }
       }
     // Game Over
      function gameOver(){
         // inform player that game is finished and update them what the score is 
         update($question, "Game is over, you scored "+score+" points!");
         }
         
      } // and play function

    