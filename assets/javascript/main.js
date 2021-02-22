/* Code found to get inputs from dropdown menu, modified to my needs.  https://mkyong.com/javascript/javascript-get-selected-value-from-dropdown-list/ */  
function getGameType(){
                var gameType = document.getElementById("gameType");
                var type = gameType.options[gameType.selectedIndex].value;
                if (type === "Choose a Game to Play" ){
                 alert("Not valid input for Game Type");
                  
                }
                else{
                    /*if else loop to get +-*% Symbol on game modal
                    if type === add getElementById = +
                    if type === sub getElementById = -
                    */
                    
                return type;
                }
            }

function getTableNumber(){
                var tableNumber = document.getElementById("tableNumber");
                var number = tableNumber.options[tableNumber.selectedIndex].value;
                 if (number === "Choose the tables for the Game" ){
                 alert("Not valid input for Tables number");
                }
                else{     
                    document.getElementById("operand2").innerHTML = number;
                               
                return number;
                }
            }


 /*    Code for validating dropdown menu selection found on Stackoverflow and modified https://stackoverflow.com/questions/15371162/javascript-dropdown-validation-and-alert */
function validateInput(){
                var gameType = document.getElementById("gameType");
                var type = gameType.options[gameType.selectedIndex].value;
                var tableNumber = document.getElementById("tableNumber");
                var number = tableNumber.options[tableNumber.selectedIndex].value;
                if (type === "Choose a Game to Play" ||
                number === "Choose the tables for the Game")
                {
                 alert("Selections not made correctly.");
                 return false;
                }
                else{
                document.getElementById("selectedType").innerHTML = type;
                document.getElementById("selectedNumber").innerHTML = number; 
                }
            }
