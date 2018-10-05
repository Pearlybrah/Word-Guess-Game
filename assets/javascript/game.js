
var cp = document.getElementById("computer-choices");
var uP = document.getElementById("user");
var plus = document.getElementById("winner");
var minus = document.getElementById("loser");
var letter = document.getElementById("guesses");
var timer = document.getElementById("attempts");
var end = document.getElementById("results");

function rewriteStats() {
  end.textContent = tries;
}

var losses = 0;
var wins = 0;
var tries = 0;

var userGuesses = [""];
var comChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  document.onkeyup = function(event) {
    var userPick = event.key.toLowerCase();

    
      comGuess = comChoices[Math.floor(Math.random() * comChoices.length)];
    
      for (let i =0; i < 10; i++) {
        if (userPick === comGuess) {
          cp.textContent = "The computer chose: " + comGuess + ", you win!";
          wins++;
          return;
        }
        else if  (userPick !== comGuess) {
          letter.textContent = "Your Guesses so far: " + userPick;
          timer.textContent = "Remaining Tries: " + tries;
          tries--;
        }

        else if (tries === 0) {
          end.textContent = "You Lose";
          losses++;
          return;
        }
      }
   
    end.appendChild(document.createTextNode(userPick));
    uP.textContent = "You chose: " + userPick;
    plus.textContent = "Wins: " + wins;
    minus.textContent = "Losses: " + losses;
  };


