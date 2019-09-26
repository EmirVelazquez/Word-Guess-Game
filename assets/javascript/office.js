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
var wrongGuess = [];



// Functions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function startGame () {
    selectCharacter = charOffice[Math.floor(Math.random() * charOffice.length)];
    //Tester
    console.log(selectCharacter);
}





//Main Process Executed
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~