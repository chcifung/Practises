$(document).ready(function(){

	$("#search").on("click",function(){

		var searchTerm = $("#searchTerm").val();//get search input
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
			//get url with search input;
		$.ajax({
        type: "GET",
        url: url,
        async: false,
        dataType: "json",
        
        success: function (data) {

        	$("#output").html("");
        	for(var i=0;i<data[1].length;i++){
           	 $("#output").prepend("<li><a href=" + data[3][i] + ">" + data[1][0] +"</a><p>" + data[2][i] +"</p></li>");
        }
        },
        error: function (errorMessage) {
        	alert("Something is error");
        }
    });

	})
});