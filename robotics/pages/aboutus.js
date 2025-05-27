//buttons for each team
const teamA = document.getElementById("teamA");
const teamB = document.getElementById("teamB");
const teamC = document.getElementById("teamC");

const selected = document.querySelectorAll(".selected");

//textbox to change when button pressed
const descript = document.getElementById("team-description");
var currTeam = 0;

//text taken from the header for the descriptions
const desOneBox = document.getElementById("descriptions-one");
const descriptOne = desOneBox.innerHTML;

const desTwoBox = document.getElementById("descriptions-two");
const descriptTwo = desTwoBox.innerHTML;

const desThreeBox = document.getElementById("descriptions-three");
const descriptThree = desThreeBox.innerHTML;

function printText(num, team){

    switch (num) {
        case 1:
            descript.textContent = descriptOne;

            //add and remove the necessary classes
            teamA.classList.add("selected");
            teamB.classList.remove("selected");
            teamC.classList.remove("selected");

            break;

        case 2:
            descript.textContent = descriptTwo;

            //add and remove the necessary classes
            teamA.classList.remove("selected");
            teamB.classList.add("selected");
            teamC.classList.remove("selected");

            break;

        case 3:
            descript.textContent = descriptThree;

            //add and remove the necessary classes
            teamA.classList.remove("selected");
            teamB.classList.remove("selected");
            teamC.classList.add("selected");

            break;
    
        default:
            break;
    }

}

teamA.onclick = function(){
    currTeam = 1;
    printText(currTeam, teamA);
};

teamB.onclick = function(){
    currTeam = 2;
    printText(currTeam, teamB);
};

teamC.onclick = function(){
    currTeam = 3;
    printText(currTeam, teamC);
};