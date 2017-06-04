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
for(var j =0;j<4;j++){
	audios[j] = document.getElementById("audio"+j);
	audios.push(audios[j]);
}

for(var i =1;i<5;i++){
	$("#sx"+i).click(function(){
		console.log(audios);
		event.stopPropagation();
		
		if(audios[i-1].paused){
			
			audios[i-1].play();
		}else{
			audios[i-1].pause();
		}
	})
}

