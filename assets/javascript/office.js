// Global Variables Created
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var charOffice = ["michaelscott", "dwightschrute", "jimhalpert", "pambeesly", "kevinmalone", "andybernard", "tobyflenderson", "angelamartin", "creedbratton", "stanleyhudson", "ryanhoward", "oscarmartinez", "meredithpalmer", "kellykapoor"];
var selectCharacter = "";
var lettersinName = [];
var numBlanks = 0;
var wrongGuess = [];
var blanksAndSuccess = [];

// Game Counters Variables
var winCount = 0;
var guessLeft = 15;

// Functions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //This function runs at the start, first part chooses random
    //character, second part splits up the letters in choice, 
    // third part assigns the number of letters to numBlanks
function startGame () {
    selectCharacter = charOffice[Math.floor(Math.random() * charOffice.length)];
    lettersinName = selectCharacter.split("");
    numBlanks = lettersinName.length;
    
    //Resets
    wrongGuess = [];
    guessLeft = 15;
    blanksAndSuccess = [];

    //Populate blanks and successes with right number of blanks
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccess.push("_");
    }

    //make changes to HTML 
    document.getElementById("characterGuess").innerHTML = blanksAndSuccess.join(" ");
    document.getElementById("guessLeft").innerHTML = guessLeft;
    document.getElementById("winCount").innerHTML = winCount;



    //Tester
    console.log(selectCharacter);
    console.log(lettersinName);
    console.log(numBlanks);
    console.log(blanksAndSuccess);
}

function checkLetter(letter) {
    //Checks to see if letter exists in the name
    
    var isLetterInName = false;

    for (var i = 0; i < numBlanks; i++) {
        if(selectCharacter[i] == letter) {
            isLetterInName = true;
        }
    }

    //Checks where in name the letter is, then populate out blanksAndSUccesses array
    if(isLetterInName){
        for (var i = 0; i < numBlanks; i++) {
            if(selectCharacter[i] == letter) {
                blanksAndSuccess[i] = letter;

            }
        }
    }

    else {
        wrongGuess.push(letter);
        guessLeft--;
    }

    //Tester
    console.log(blanksAndSuccess);

}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Guesses Left: " + guessLeft);

    //Push changes to HTML with most recent stats
    document.getElementById("guessLeft").innerHTML = guessLeft; 
    document.getElementById("characterGuess").innerHTML = blanksAndSuccess.join(" ");
    document.getElementById("usedGuess").innerHTML = wrongGuess.join(" ");
    
    //Check if Won
    if (lettersinName.toString() == blanksAndSuccess.toString()) {
        winCount++;

        alert("You Won!");

        //Push changes to the win counter in HTML
        document.getElementById("winCount").innerHTML = winCount;

        startGame();
    }

    //Check if Lost
    else if(guessLeft == 0) {
        alert("You lost!");
    
        startGame();
    }
}


//Main Process Executed
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Initiates code for start up.
startGame ();

//Code required for registering key clicks
document.onkeyup = function(event) {
    var letterGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    checkLetter(letterGuess);
    roundComplete();

    //Tester
    console.log(letterGuess);
}


