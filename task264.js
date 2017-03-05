$(document).ready(function(){
	//get the free code camp stream info and status api call
	var following = [];
	var url = "https://wind-bow.gomix.me/twitch-api/streams/freecodecamp";
	$.getJSON(url,function(data1){
		if(data1.stream === null){
			$("#fccStatus").html("freecodecamp is currentlt offline");
		}else{
			$("#fccStatus").html("freecodecamp is currentlt online");
		}
	});

	var followerURL = "https://wind-bow.gomix.me/twitch-api/users/freecodecamp/follows/channels/";
	$.getJSON(followerURL,function(data2){
		for(var i = 0;i<data2.follows.length;i++){
			var displayName = data2.follows[i].channel.display_name;
			following.push(displayName);
		}

		following.push("comster404");
		following.push("brunofin");
		following.push("ESL_SC2");


		for (var i = 0; i <following.length; i++) {
			var url2 = 'https://wind-bow.gomix.me/twitch-api/streams/' + following[i] + '/?callback=?';
			
			$.getJSON(url2,function(data3){
				var logo;
				var status;
				var name;

				if(data3.stream===null){
					logo = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRzFnuxU6ipiMZ-ywenUSoTaNsdiLc8dIaatjVuNRZAD5KvAJto-owFgaln";
					name = data3.message;
					status = data3.error;
					
					$("#followerInfo").prepend(
						"<div class ='row'><div class = 'col-md-4'>" + "<img src='" + logo +"'>"
						+"</div>" + "<div class = 'col-md-4'>" +name +"</div>"+ "<div class = 'col-md-4'>"  +status +"</div></div>"
						);
				}

				if(data3.error){
					$.getJSON(data3._links.channel,function(data5){
						status = "OFFLINE";
						logo = data5.logo;
						name = data5.display_name;
						if(logo===null){
							logo = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRzFnuxU6ipiMZ-ywenUSoTaNsdiLc8dIaatjVuNRZAD5KvAJto-owFgaln";
						}
						$("#followerInfo").prepend(
						"<div class ='row'><div class = 'col-md-4'>" + "<img src='" + logo +"'>"
						+"</div>" + "<div class = 'col-md-4'>" +name +"</div>"+ "<div class = 'col-md-4'>"  +status +"</div></div>"
						);
					})
				}
			});
		}

		for (var i = following.length - 1; i >= 0; i--) {
			var onlineURL = 'https://wind-bow.gomix.me/twitch-api/streams/' + following[i];
			$.getJSON(onlineURL,function(data4){
				
					var logo = data4.stream;
					var status = data4.stream;
					var name = data4.stream;
			})
		}
	})
})