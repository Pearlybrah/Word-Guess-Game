
    var directions = document.getElementById("directions");
    var userChoice = document.getElementById("user");
    var word = document.getElementById("word");
    var wins = document.getElementById("wins");
    var losses = document.getElementById("losses");
    var letterCheck = document.getElementById("letterCheck");
    var computerChoices = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
        "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];
    var chosenLetter = 0;
    var computerGuess = 0;

    function computerLetter() {
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);


        document.onkeyup = function(event) {
            chosenLetter = event.key;
            console.log(chosenLetter);
        }

        if (chosenLetter === computerGuess) {
            letterCheck.textContent = chosenLetter;
        };
    };
