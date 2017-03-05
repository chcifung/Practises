$(document).ready(function(){
	//get the free code camp stream info and status api call
	var url = "https://wind-bow.gomix.me/twitch-api/streams/freecodecamp";
	$.getJSON(url,function(data1){
		if(data1.stream === null){
			$("#fccStatus").html("freecodecamp is currentlt offline");
		}else{
			$("#fccStatus").html("freecodecamp is currentlt online");
		}
	});
})