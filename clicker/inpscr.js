//exp counter
const count = document.getElementById("exp");

//pat the shonk button
const btn = document.getElementById("bnt");

//level counter
const nug = document.getElementById("level");

//feed shonk button
const feed = document.getElementById("feed");

//exp x2 boost button
const boost = document.getElementById("expboost");

//exp boost counter
const X = document.getElementById("upg");

//add exp cheat button
const cheat = document.getElementById("cheat");

//header
const head = document.getElementById("head");

//hunger bar
const hungBar = document.getElementById("hungerBar");

//hunger number counter
const hungNum = document.getElementById("hungNum")

//pet image
const mads = document.getElementById("maddy");


//exp boost stuff
var boostlvl = 1;
var expboostcost = 10;

//exp button stuff
var exp = 0;
var canAdd = true;

//check if cheats have been used
var hadCheat = false;

//hunger stuff
var hunger = 100;
var foodCost = 10;

//1 second interval for hunger ticking down
setInterval(hungerDown, 2000);

//check for the user to see if they used cheats
head.onclick = function() {
  	console.log(hadCheat);
};

//pet gal
btn.onclick = function() {
  
  	if (canAdd === true) {

		animatePet();
    	canAdd = false;
    	exp += 1 * boostlvl;
    	updateStats();

		//wait function so the cooldown works
    	setTimeout(function() {
      		canAdd = true;
    	}, 3000);

  	};
};

//animate gal
function animatePet() {
	mads.style.transform = "scale(1.2)";
	setTimeout(function() {
		
		mads.style.transform = "scale(1)";
	}, 250);
};

//tick down hunger
function hungerDown() {
	if (hunger != 0) {
		hunger -= 1;
		updateStats();
	};
};

//feed gal
feed.onclick = function() {

  	if (exp >= foodCost && hunger < 100) {

    	exp -= foodCost;
    	hunger = Math.min(100, hunger + 20); //this code was stolen
    	updateStats();

  	};
};

//purchace exp upgrade
boost.onclick = function() {
  
  	//caps at a x5 boost
  	if (exp >= expboostcost && boostlvl < 5) {

    	exp -= expboostcost;
    	boostlvl += 1;
    	expboostcost *= 2;
    	updateStats();

  	};
};

//cheat button
let cheatAmount = 0
cheat.onclick = function() {

  	hadCheat = true;
  	cheatAmount = window.prompt("HOW MUCH");
  	cheatAmount = parseInt(cheatAmount);
	exp = cheatAmount;
  	updateStats();
	
};

//sets all the text on buttons and stuff to the right values
function updateStats() {
	//if boost is level 1-4, show how much it costs, 
	//if it is level 5, say it is at max level
    if (boostlvl < 5) {
		boost.textContent = `boost: ${expboostcost} XP`;
    } else {
		boost.textContent = `Max`;
	};

    count.textContent = `${exp} XP`;
	hungNum.textContent = `Hunger: ${hunger}`
	hungBar.style.width = `${hunger}%`;
	X.textContent = `X ${boostlvl}`;
};