/*function compare(value1,value2){
	if(value1>value2){
		return 1;
	}else if(value2>value1){
		return -1;
	}else{
		return 0;
	}
}

var values=[0,1,5,10,15];
values.sort(compare);
alert(values);

var colors=["red","green","blue"];
var removed=colors.splice(1,1,"red","purple");

alert(removed);
alert(colors); 
window.onload=function(){
	 var oDiv=document.getElementById("div1");
	 oDiv.onmouseover=function(){
	 	startMove(0);
	 }
	 oDiv.onmouseout=function(){
	 	startMove(-200);
	 }
}

var timer=null;
function startMove(iTarget){
	clearInterval(timer);
	var oDiv=document.getElementById("div1");
	timer=setInterval(function(){
		var speed=0;
		if(oDiv.offsetLeft>iTarget){
			speed=-10;
		}else{
			speed=10;
		}
		if(oDiv.offsetLeft==iTarget){
			clearInterval(timer);
		}
		else{
		oDiv.style.left=oDiv.offsetLeft+speed+'px';
		}
	},30)
}

window.onload=function(){
	var oDiv=document.getElementById("div1");
	oDiv.onmouseover=function(){
		startMove(100);
	}
	oDiv.onmouseout=function(){
		startMove(30);
	}
}
var timer=null;
var alpha=30;
function startMove(iTarget){
	var oDiv=document.getElementById("div1");
	clearInterval(timer);
	timer=setInterval(function(){
		var speed=0;
		if(alpha>iTarget){
			speed=-10;
		}else{
			speed=10;
		}
		if(alpha==iTarget){
			clearInterval(timer);
		}else{
			alpha+=speed;
			oDiv.style.filter='alpha(opacity:'+alpha+')';
			oDiv.style.opacity=alpha/100;
		}
	},30)
}

window.onload=function(){
	var oLi=document.getElementsByTagName("li");
	for(var i=0;i<oLi.length;i++){
		oLi[i].timer=null;
		oLi[i].onmouseover=function(){
			startMove(this,400);
		}
		oLi[i].onmouseout=function(){
			startMove(this,200);
		}
	}
}
//var timer=null;
//var alpha=30;
function startMove(obj,iTarget){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var icur=parseInt(getStyle(obj,"height"));
		var speed=(iTarget-icur)/8;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(obj.offsetWidth==iTarget){
			clearInterval(obj.timer);
		}else{
			obj.style.height=icur+speed+'px';
		}
	},30)
}

//window.onload=function(){
//	startMove();
//}

//function startMove(){
//	setInterval(function(){
//		var oDiv=document.getElementById('div1'); 
//	//	oDiv.style.width=parseInt(oDiv.style.width)-1+'px';
//	},30)
//}

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle;
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}

window.onload=function (){
	var oMove=document.getElementById("move");
	var aList=oMove.getElementsByTagName('a');
	for(var i=0;i<aList.length;i++){
		aList[i].onmouseover=function(){
			var _this=this.getElementsByTagName("i")[0];
			startMove(_this,{top:-25,opacity:0},function(){
				_this.style.top=30+'px';
			});
		}
	}
}*/

window.onload=function(){
	var Lis=document.getElementsByTagName("li");
	for(i=0;i<Lis.length;i++){
		Lis[i].onmouseover=function(){
			this.className="lihover";

			var h0=(i-1)*30+42;
			var h=this.getElementsByTagName("div")[0].style.top;
			var y=this.getElementsByTagName("div")[0].offsetHeight;

			if(h<h0){
				this.getElementsByTagName("div")[0].style.top=h0+"px";
			}
			if(y>550){
				this.getElementsByTagName("div")[0].style.top="3px";
			}
		}
		Lis[i].onmouseout=function(){
			this.className="";
		}
	}

}

