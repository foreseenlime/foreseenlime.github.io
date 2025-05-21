//buttons for each team
const teamA = document.getElementById("teamA");
const teamB = document.getElementById("teamB");
const teamC = document.getElementById("teamC");

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

function printText(num){

    switch (num) {
        case 1:
            descript.textContent = descriptOne;
            break;

        case 2:
            descript.textContent = descriptTwo;
            break;

        case 3:
            descript.textContent = descriptThree;
            break;
    
        default:
            break;
    }

}

teamA.onclick = function(){
    currTeam = 1;
    printText(currTeam);
};

teamB.onclick = function(){
    currTeam = 2;
    printText(currTeam);
};

teamC.onclick = function(){
    currTeam = 3;
    printText(currTeam);
};