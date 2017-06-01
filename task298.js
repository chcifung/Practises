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