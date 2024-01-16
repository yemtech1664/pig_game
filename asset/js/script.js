let roundScore, score, activePlayer, gamePlaying;
init()

//roll dice
document.querySelector(".roll").addEventListener("click", function(){
	if(gamePlaying){
	let dice = Math.floor(Math.random()* 6) + 1;
	//display dice
	document.querySelector(".dice_value").textContent = dice;
	if(dice !== 1){
		//add
		roundScore += dice;
		document.getElementById("current-"+activePlayer).textContent = roundScore;
	}else{
		//next player
		nextPlayer()

		}
	}
	
})
//hold button
document.querySelector(".hold").addEventListener("click", function(){
	if(gamePlaying){
		//add to global score
	score[activePlayer] += roundScore;
	// update the UI
	document.getElementById("score-"+activePlayer).textContent = score[activePlayer];

	//check for winner
	if(score[activePlayer] >= 50){
	document.getElementById("player-name-"+activePlayer).textContent = "Winner!!!";
	document.querySelector(".player_"+activePlayer).classList.remove("active");
	document.querySelector("#player-name-"+activePlayer).classList.add("winner");
	document.querySelector(".dice_value").textContent = '';
	gamePlaying = false;

	}else{
	//next player
	nextPlayer();	
	}
	}
	
	
})

document.querySelector(".new-game").addEventListener("click", init);

function init(){
	roundScore = 0;
	score = [0, 0];
	activePlayer = 0;
	gamePlaying = true;                       
	document.querySelector(".dice_value").textContent = '';
	document.querySelector("#score-0").textContent = '0';
	document.querySelector("#score-1").textContent = '0';
	document.querySelector("#current-0").textContent = '0';
	document.querySelector("#current-1").textContent = '0';
	document.querySelector(".player_"+activePlayer).classList.add("active");
	document.querySelector("#player-name-0").classList.remove("winner");
	document.querySelector("#player-name-1").classList.remove("winner");
	document.querySelector("#player-name-0").textContent = 'PLAYER 1';
	document.querySelector("#player-name-1").textContent = 'PLAYER 2';

}

function nextPlayer(){
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		document.querySelector("#current-0").textContent = '0';
		document.querySelector("#current-1").textContent = '0';
		document.querySelector(".player_0").classList.toggle("active");
		document.querySelector(".player_1").classList.toggle("active");

		document.querySelector(".dice_value").textContent = '';
}