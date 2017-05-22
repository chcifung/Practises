var fresh = document.getElementsByClassName("fresh")[0];
var substract  = document.getElementById("substract");
var add = document.getElementById("add");
var period = document.getElementById("period");

add.onclick = function(){
	var a = Number(period.innerHTML);
	a +=1;
	period.innerHTML = a;
}

substract.onclick = function(){

	var a = Number(period.innerHTML);
	if(a>0){
		a -=1;
		period.innerHTML = a;
	}else{
		alert("The during time is wrong!");
	}		
}

var switchs = false;

function showTime(){
	var now = new Date();

	var periodtime = Number(period.innerHTML)*60;
	var end = now.getTime() + periodtime*1000;
	//var m = parseInt(lefttime/60%60);
	//var s = parseInt(lefttime%60);
	var m = (end - now)/1000/60%60;
	var s = (end - now)/1000%60;
	console.log(s);
}

fresh.onclick = function(){
	//get the left seconds
	
	setTimeout(showTime,500);
}

