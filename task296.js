var fresh = document.getElementsByClassName("fresh")[0];
var substract  = document.getElementById("substract");
var add = document.getElementById("add");
var period = document.getElementById("period");
var a = Number(period.innerHTML);

add.onclick = function(){
	a +=1;
	period.innerHTML = a;
}

substract.onclick = function(){
	if(a>0){
		a -=1;
		period.innerHTML = a;
	}else{
		alert("The during time is wrong!");
	}		
}

var switchs = false;

var periodtime = a*60;
var now = new Date();
var end = now.getTime() + periodtime*1000;

function showTime(){

	var nows = new Date();	
	//var m = parseInt(lefttime/60%60);
	//var s = parseInt(lefttime%60);
	var m = parseInt((end - nows)/1000/60%60);
	var s = parseInt((end - nows)/1000%60);
	var timer = document.getElementById("timer");
	timer.innerHTML = m +":" +s;
	setTimeout(showTime,500);
}

fresh.onclick = function(){
	//get the left seconds
	
	showTime();
	
}

