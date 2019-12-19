var quizGame =  [
   ["How many times was PAOK nominated 'championship winner'?", "3"],
   ["Who is team's captain as of 2019?", "Andre Vierihnia"],
   ["Where is PAOK's home stadium located?", "Toumba, Thessaloniki"]
];

var score = 0;
/*
   OLD CODE
for(var i=0; i<quizGame.length; i++){
   var answer = prompt(quizGame[i][0]);

   if(answer === quizGame[i][1]){
      alert("Bravo, let's move on to the next one!");
      score++;
   }else{
      alert("Sorry, your answer is wrong!");
   }
}
alert("Game is over, you scored "+score+" points!");
*/
// Refactoring the above code
  // Refactoring is the process of improving the code's structure and maintainability without changing it's behaviour

  // We create a main function that contains all the steps of playing the game

  function play(quizGame){ // we insert the quizGame arr as an argument
     // main game loop
     for(var i=0; i<quizGame.length; i++){
      var question = quizGame[i][0];
      var answer = ask(question);
      check(answer);
      
   }
   // end of main loop
   gameOver();
  }

  function ask(question){
     return prompt(question);
  }

  function check(answer){
   if(answer === quizGame[i][1]){
      alert("Bravo, let's move on to the next one!");
      score++;
   }else{
      alert("Sorry, your answer is wrong!");
   }
  }

 function gameOver(){
   alert("Game is over, you scored "+score+" points!");
}
