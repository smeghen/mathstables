/* Code found to get inputs from dropdown menu, modified to my needs.  https://mkyong.com/javascript/javascript-get-selected-value-from-dropdown-list/ */
/* Function takes the game type selection from dropdown menu, checks it and displays the corresponding maths symbol on Game Modal*/
function getGameType() {
    var gameType = document.getElementById("gameType");
    var type = gameType.options[gameType.selectedIndex].value;
    if (type === "Addition") {
        document.getElementById("operand3").innerHTML = "+";
    }
    else if (type === "Subtraction") {
        document.getElementById("operand3").innerHTML = "-";
    }
    else if (type === "Multiplication") {
        document.getElementById("operand3").innerHTML = "x";
    }
    else if (type === "Division") {
        document.getElementById("operand3").innerHTML = "/";
    }
}
/* Function takes the number selection from dropdown menu, and displays it on Game Modal*/
function getTableNumber() {
    var tableNumber = document.getElementById("tableNumber");
    var number = tableNumber.options[tableNumber.selectedIndex].value;
    document.getElementById("operand2").innerHTML = number;
}


/*    Code for validating dropdown menu selection found on Stackoverflow and modified https://stackoverflow.com/questions/15371162/javascript-dropdown-validation-and-alert */
/*Function checks that a validate input has been selected from the dropdown menus and returns message if not. For valid inputs it hides buttons and dropdown and displays selection 
new button to take user to game*/
function validateInput() {
    var gameType = document.getElementById("gameType");
    var type = gameType.options[gameType.selectedIndex].value;
    var tableNumber = document.getElementById("tableNumber");
    var number = tableNumber.options[tableNumber.selectedIndex].value;
    if (type === "Choose a Game to Play" ||
        number === "Choose the tables for the Game") {
        alert("Selections not made correctly.");
        return false;
    }
    else {
        /*Code found on w3schools to hide elements on click. Modified to hide items after inputs have been validated (https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp) */
        function hideSelect() {
            var validatebutton = document.getElementById("validate");
            var letsgobutton = document.getElementById("letsgo");
            var type = document.getElementById("type");
            var selection = document.getElementById("selection");
            var home = document.getElementById("home");
            var backbutton = document.getElementById("back");
            if (validatebutton.style.display === "none") {
                validatebutton.style.display = "block";
                type.style.display = "block";
                home.style.display = "block";
            } else {
                validatebutton.style.display = "none";
                type.style.display = "none";
                home.style.display = "none";
            }
            if (letsgobutton.style.display === "block") {
                letsgobutton.style.display = "none";
                selection.style.display = "none";
                backbutton.style.display = "none";
            }
            else {
                letsgobutton.style.display = "inline-block";
                selection.style.display = "block";
                backbutton.style.display = "inline-block";
            }
        }
        hideSelect();
        document.getElementById("selectedType").innerHTML = type;
        document.getElementById("selectedNumber").innerHTML = number;
    }
}

/*  Random number generator between 1 and 12. Display on game */
/* For subtraction and division to work as per tables the number range has to be adjusted depending on user number choice otherwise questions not related to the maths
tables will be displayed which ar out of the scope of the game  */
document.getElementById("startgame").addEventListener("click", displayRandomNumber);
function displayRandomNumber() {
    let choice = document.getElementById("gameType").value;
    let numChoice = document.getElementById("tableNumber").value;
    numChoice = Number(numChoice);

    if (choice === "Addition") {
        let firstNum = parseInt(Math.random() * 12) + 1;
        document.getElementById("operand1").textContent = firstNum;
    } else if (choice === "Multiplication") {
        let firstNum = parseInt(Math.random() * 12) + 1;
        document.getElementById("operand1").textContent = firstNum;
    } else if (choice === "Subtraction") {
        let firstNum = parseInt(Math.random() * 12) + numChoice;
        document.getElementById("operand1").textContent = firstNum;
    } else if (choice === "Division") {
        let firstNum = parseInt(Math.random() * 12);
        if (firstNum === 0) {
            firstNum = numChoice;
        } else {
            firstNum = firstNum * numChoice;
            document.getElementById("operand1").textContent = firstNum;
        }
        document.getElementById("operand1").textContent = firstNum;
    }
}


/* Function calls the different calculation functions depending on the user selection*/
function runGame() {
    let game = document.getElementById("gameType").value;
    let num1 = parseInt(document.getElementById("operand1").textContent);
    let num2 = parseInt(document.getElementById("operand2").textContent);

    if (game === "Addition") {
        let answer = num1 + num2;
        return answer;
    } else if (game === "Subtraction") {
        let answer = num1 - num2;
        return answer;
    } else if (game === "Multiplication") {
        let answer = num1 * num2;
        return answer;
    } else if (game === "Division") {
        let answer = num1 / num2;
        return answer;
    }

}

/* Code for taking enter or button click to trigger take the guess from input field. Code found on www.tutorialspoint.com and modified.
https://www.tutorialspoint.com/how-to-trigger-a-button-click-on-keyboard-enter-with-javascript */
var inputText = document.getElementById("guess");
   inputText.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
         event.preventDefault();
         document.getElementById("enterguess").click();
      }
   });

/* Function to check user answer against actual answer*/

function checkAnswer() {
    let guess = parseInt(document.getElementById('guess').value);
    if (isNaN(guess)) {
        alert("Your answer is not a number! Please enter again!")

    }
    else {
        let calculatedAnswer = runGame();
        let isCorrect = guess === calculatedAnswer;

        if (isCorrect) {
            displayScore();
            correctSound();
            document.getElementById('guess').value = '';
    displayRandomNumber();

        } else {
            wrongSound();
            alert(`Sorry the correct answer is ${calculatedAnswer}!`);
             document.getElementById('guess').value = '';

        }
    }
    /* Clear user guess from input box  */
    document.getElementById('guess').value = '';
    document.getElementById('guess').focus();
    displayRandomNumber();
    
}

function displayScore() {
    let score = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++score;
}

function hideStart() {
    var startbutton = document.getElementById("startgame");
    var endgamebutton = document.getElementById("endgame");

    if (startbutton.style.display === "none") {
        startbutton.style.display = "block";
    }
    else {
        startbutton.style.display = "none";
    }
    if (endgamebutton.style.display === "block") {
        endgamebutton.style.display = "none";

    }
    else {
        endgamebutton.style.display = "inline-block";
    }
    document.getElementById('guess').focus();
}

function wrongSound(){
    audio = new Audio("assets/sounds/wrong.mp3");
    audio.play();
    
}

function correctSound(){
    audio = new Audio("assets/sounds/correct.mp3");
    audio.play();
    
}
