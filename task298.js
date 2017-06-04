var switchs = document.getElementById("switch");

switchs.onclick = function(){
	if(switchs.innerHTML=="START"){
		switchs.innerHTML = "STOP";
	console.log("a");
	}else{
		switchs.innerHTML = "START";
	console.log("b");
	}	
}




var audios = [];

for(var j =1;j<5;j++){
var a = document.getElementById("audio"+j);
audios.push(a);
}

$("#sx1").click(function(){
	event.stopPropagation();
	
	if(audios[0].paused){
		
		audios[0].play();
		return;
	}else{
		audios[0].pause();
	}
});

$("#sx2").click(function(){
	event.stopPropagation();
	
	if(audios[1].paused){
		
		audios[1].play();
		return;
	}else{
		audios[1].pause();
	}
});

$("#sx3").click(function(){
	event.stopPropagation();
	
	if(audios[2].paused){
		
		audios[2].play();
		return;
	}else{
		audios[2].pause();
	}
});

$("#sx4").click(function(){
	event.stopPropagation();
	
	if(audios[3].paused){
		
		audios[3].play();
		return;
	}else{
		audios[3].pause();
	}
});
