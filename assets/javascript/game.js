
//    var directions = document.getElementById("directions");
//    var userChoice = document.getElementById("user");
  //  var wordGuessed = document.getElementById("word");
//    var winner = document.getElementById("wins");
//    var loser = document.getElementById("losses");
//    var letterCheck = document.getElementById("letter");
//    var computerChoices = [
//        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
//        "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
//    ];
////    var chosenLetter = 0;
//    var computerGuess = 0;
//    var addIt = 0;
//    var loseIt =0;
//
////    function computerLetter() {
//        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//        console.log(computerGuess);
//
//        document.onkeyup = function(e) {
//            chosenLetter = event.key.toLowerCase();
//            console.log(chosenLetter);
//        }
//
//        if (chosenLetter === computerGuess) {
//           addIt++;
//        }
//
//        userChoice.textContent = "You chose: " + chosenLetter;
//        winner.textContent = "Wins: " + addIt;
//    };
var cp = document.getElementById("computer-choices");
var uP = document.getElementById("user");
var plus = document.getElementById("winner");
var minus = document.getElementById("loser");
var letter = document.getElementById("guesses");

var losses = 0;
var wins = 0;

var comChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  document.onkeyup = function(event) {
    var userPick = event.key.toLowerCase();

    
      comGuess = comChoices[Math.floor(Math.random() * comChoices.length)];
    
      if (userPick === comGuess) {
      wins++;
      } else {
      losses++;
      }
    
    cp.textContent = "The computer chose: " + comGuess;
    uP.textContent = "You chose: " + userPick;
    plus.textContent = "Wins: " + wins;
    minus.textContent = "Losses: " + losses;
  };


