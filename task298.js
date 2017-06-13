var switchs = document.getElementById("switch");
var display = document.getElementById("display");
var numbers = [];//an array to store computer’s output
var numbers2 = [];//an array to store player’s input
var audios = [];//store the audios into an array
var round = 0;

for(var j =1;j<5;j++){
	var a = document.getElementById("audio"+j);
	audios.push(a);
}


function newGame(){
	clearGame();		
}

function clearGame(){
	numbers = [];
	numbers2 = [];
	addGame();
}

function addGame(){
	round+=1;	
	display.innerHTML = round;
	generateMove();

}

function generateMove(){
	numbers.push(Math.floor(Math.random()*4));//create the random numbers in array 
	showMoves();
}

function showMoves(){
	var i = 0;
	var moves =setInterval(function(){
		playGame(numbers[i]);
		i++;
		if(i>=numbers.length){
			clearInterval(moves);
		}
	},800);
	clearPlayer();
}

function clearPlayer(){
	numbers2= [];
}

function playGame(){
	$("#sx"+(numbers[round-1])).fadeIn(500).fadeOut(100).fadeIn(500);//fade the color block
	audios[numbers[round-1]].play();
}

function playerTurn(){
	if(numbers2[numbers.length-1]!==numbers[numbers2.length-1]){
		alert("Wrong step, please try again!");
		newGame();
	}else{
		console.log("Good Work!");
		if(numbers2.length ===numbers.length){
			if(round===20){
				alert("Congratulations, you win the Game!");
			}else{
				alert("Come on, baby, you can do it!");
				addGame();
			}
		}
	}
}


switchs.onclick = function(){
	newGame();
	console.log(round);
	if(switchs.innerHTML=="START"){
		switchs.innerHTML = "STOP";
		$("#display").text = round;
	}else{
		switchs.innerHTML = "START";
		display.innerHTML = "";
	}	
}


$("#sx1").click(function(){
	event.stopPropagation();
	$("#sx1").fadeIn(500).fadeOut(100).fadeIn(500);
	numbers2.push(0);
	if(audios[0].paused){
		
		audios[0].play();
		playerTurn();
		return;
	}else{
		audios[0].pause();
	}
	
});

$("#sx2").click(function(){
	event.stopPropagation();
	$("#sx2").fadeIn(500).fadeOut(100).fadeIn(500);
	numbers2.push(1);
	
	if(audios[1].paused){
		
		audios[1].play();
		playerTurn();
		return;
	}else{
		audios[1].pause();
	}
	
});

$("#sx3").click(function(){
	event.stopPropagation();
	$("#sx3").fadeIn(500).fadeOut(100).fadeIn(500);
	numbers2.push(2);
	
	if(audios[2].paused){
		
		audios[2].play();
		playerTurn();
		return;
	}else{
		audios[2].pause();
	}
	
});

$("#sx4").click(function(){
	event.stopPropagation();
	$("#sx4").fadeIn(500).fadeOut(100).fadeIn(500);
	numbers2.push(3);
	
	console.log(numbers2);
	if(audios[3].paused){
		
		audios[3].play();
		playerTurn();
		return;
	}else{
		audios[3].pause();
	}
	
});

