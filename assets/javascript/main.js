/* Code found to get inputs from dropdown menu, modified to my needs.  https://mkyong.com/javascript/javascript-get-selected-value-from-dropdown-list/ */  
function getGameType(){
                var gameType = document.getElementById("gameType");
                var result1 = gameType.options[gameType.selectedIndex].value;
                if (result1 === "Choose a Game to Play" ){
                 alert("Not valid input for Game Type");
                }
                else{
                return result1;
                }
            }

function getTableNumber(){
                var tableNumber = document.getElementById("tableNumber");
                var result2 = tableNumber.options[tableNumber.selectedIndex].value;
                 if (result2 === "Choose the tables for the Game" ){
                 alert("Not valid input for Tables number");
                }
                else{                
                return result2;
                }
            }