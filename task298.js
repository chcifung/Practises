var switchs = document.getElementById("switch");
var display = document.getElementById("display");
var numbers = [];
var numbers2 = [];
var audios = [];
var round = 0;

for(var j =1;j<5;j++){
	var a = document.getElementById("audio"+j);
	audios.push(a);
}

switchs.onclick = function(){
	var a = display.innerHTML;
	for(var i=0;i<15;i++){
		numbers.push(Math.floor(Math.random()*4));//create the random numbers in array 
		audios[numbers[0]].play();
		display.innerHTML = i;
	}

	for(var j=0;j<round+1;j++){

	}
	if(switchs.innerHTML=="START"){
		switchs.innerHTML = "STOP";
		display.innerHTML = 0;
	}else{
		switchs.innerHTML = "START";
		display.innerHTML = "";
	console.log("a");
	}	

	
}


$("#sx1").click(function(){
	event.stopPropagation();
	$("#sx1").fadeIn(500).fadeOut(100).fadeIn(500);
	numbers2.push(0);
	if(audios[0].paused){
		
		audios[0].play();

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
		return;
	}else{
		audios[3].pause();
	}
});

