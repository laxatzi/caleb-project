var quizGame =  [
   ["How many times was PAOK nominated 'championship winner'?", "3"],
   ["Who is team's captain as of 2019?", "Andre Vierihnia"],
   ["Where is PAOK's home stadium located?", "Toumba, Thessaloniki"]
];

var score = 0;

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
