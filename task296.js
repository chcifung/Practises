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

fresh.onclick = function(){
	var a = new Date();
	var b = a.getTime();
	var c = b+(Number(period.innerHTML))*60000;
	console.log(b,c);
}