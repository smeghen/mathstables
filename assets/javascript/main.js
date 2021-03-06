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
        document.getElementById("operand3").innerHTML = "÷";
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
        number === "Choose the tables") {
        errorSound();
        /* Code for calling a modal to open without using a button was found on Stackoerflow. https://stackoverflow.com/questions/36672304/bootstrap-mymodal-modalshow-is-not-working */
        $("#warningModal").modal("show");
        return false;
    }
    else {

        hideSelect();
        document.getElementById("selectedType").innerHTML = type;
        document.getElementById("selectedNumber").innerHTML = number;
    }
}

/*Code found on w3schools to hide elements on click. Modified to hide items after inputs have been validated (https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp) */
function hideSelect() {
    var validatebutton = document.getElementById("validate");
    var letsgobutton = document.getElementById("letsgo");
    var type = document.getElementById("type");
    var selection = document.getElementById("selection");
    var home = document.getElementById("home");
    var backbutton = document.getElementById("back");
    var title = document.getElementById("gameselect-title");


    if (validatebutton.style.display === "none") {
        validatebutton.style.display = "block";
        type.style.display = "block";
        home.style.display = "block";
        title.style.display = "block";
    } else {
        validatebutton.style.display = "none";
        type.style.display = "none";
        home.style.display = "none";
        title.style.display = "none";
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

/*  Random number generator between 1 and 12. Display on game */
/* For subtraction and division to work as per tables the number range has to be adjusted depending on user number choice otherwise questions not related to the maths
tables will be displayed which ar out of the scope of the game  */

function displayRandomNumber() {
    var choice = document.getElementById("gameType").value;
    var numChoice = document.getElementById("tableNumber").value;
    numChoice = Number(numChoice);
    var firstNum;
    if (choice === "Addition") {
        firstNum = parseInt(Math.random() * 12) + 1;
        document.getElementById("operand1").textContent = firstNum;
    } else if (choice === "Multiplication") {
        firstNum = parseInt(Math.random() * 12) + 1;
        document.getElementById("operand1").textContent = firstNum;
    } else if (choice === "Subtraction") {
        firstNum = parseInt(Math.random() * 12) + numChoice;
        document.getElementById("operand1").textContent = firstNum;
    } else if (choice === "Division") {
        firstNum = parseInt(Math.random() * 12);
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
    var game = document.getElementById("gameType").value;
    var num1 = parseInt(document.getElementById("operand1").textContent);
    var num2 = parseInt(document.getElementById("operand2").textContent);
    var answer;
    if (game === "Addition") {
        answer = num1 + num2;
        return answer;
    } else if (game === "Subtraction") {
        answer = num1 - num2;
        return answer;
    } else if (game === "Multiplication") {
        answer = num1 * num2;
        return answer;
    } else if (game === "Division") {
        answer = num1 / num2;
        return answer;
    }
}

/* Code for taking enter or button click to trigger take the guess from input field. Code found on www.tutorialspoint.com and modified.
https://www.tutorialspoint.com/how-to-trigger-a-button-click-on-keyboard-enter-with-javascript */
var inputText = document.getElementById("guess");
inputText.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("enterguess").click();
    }
});

/* Function to check user answer against actual answer*/

function checkAnswer() {
    var guess = parseInt(document.getElementById('guess').value);
    if (isNaN(guess)) {
        errorSound();
        $("#inputErrorModal").modal("show");

    }
    else {
        var calculatedAnswer = runGame();
        var isCorrect = guess === calculatedAnswer;
        if (isCorrect) {
            displayScore();
            correctSound();
            document.getElementById('guess').value = '';
            displayRandomNumber();
        } else {
            wrongSound();
            document.getElementById("answer").textContent = calculatedAnswer;
            $("#incorrectAnswerModal").modal("show");
            setTimeout(function () {
                $("#incorrectAnswerModal").modal('hide');
            }, 2000);
        }

    }
    /* Clear user guess from input box  */
    document.getElementById('guess').focus();
    document.getElementById('guess').value = '';
    displayRandomNumber();
}

function displayScore() {
    var score = parseInt(document.getElementById("score").innerText);
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

function wrongSound() {
    var audio = new Audio("assets/sounds/wrong.mp3");
    audio.play();
}

function correctSound() {
    var audio = new Audio("assets/sounds/correct.mp3");
    audio.play();
}

function errorSound() {
    var audio = new Audio("assets/sounds/Error.mp3");
    audio.play();
}