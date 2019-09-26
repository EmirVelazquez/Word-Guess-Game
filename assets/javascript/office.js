// Global Variables Created
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var charOffice = ["michael scott", "dwight schrute", "jim halpert", "pam beesly", "kevin malone", "andy bernard", "toby flenderson", "angelamartin", "creed bratton", "stanley hudson", "ryan howard", "oscar martinez", "meredith palmer", "kelly kapoor"];
var selectCharacter = "";
var lettersinName = [];
var numBlanks = 0;
var wrongGuess = [];
var blanksAndSuccess = [];
var usedGuess = [];

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
    guessLeft = 15;
    blanksAndSuccess = [];
    usedGuess = [];

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

startGame ();



//Main Process Executed
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~