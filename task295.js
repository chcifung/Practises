//find a element in the offer array

function findArr(a,c){
	for(var b=0;b<a.length;b++){
		if(a[b]==c){
			return true;
		}
	}
	return false;
}

//find the f class in d;

function getClass(d,f){
	if(document.getElementsByClassName){
		return d.getElementsByClassName(f);
	}else{
		var a = [];
		var e =document.getElementsByTagName("*");
		for(var c = 0;c<e.length;c++){
			var b = e[c].className.split(" ");
			if(findArr(b,f)){
				a.push(e[c]);
			}
		}
		return a;
	}
}

window.onload = function(){
	var aNum = getClass(document,"num");
	var oText = document.getElementById("text");
	var aPer = getClass(document,"oper");
	var oPer = document.getElementById("per");
	var oText1 = document.getElementById("text1");
	var oDeng = getClass(document,"deng")[0];
	var oSq = getClass(document,"sq")[0];
	var oRec = getClass(document,"rec")[0];
	var oZheng = getClass(document,"zheng")[0];
	var oOn = getClass(document,"on")[0];
	var oOff = getClass(document,"off")[0];
	var oClea = getClass(document,"clea")[0];
	var bOnOrOffClick = false;

//click events for number elements
	function fnNum(a){
		var bClear = false;
		oText.value = "0";
		for(var i=0;i<aNum.length;i++){
			aNum[i].onclick = function(){

				//check the switch
				if(!bOnOrOffClick) return;

				//check the clear 
				if(bClear) {
					bClear = false;
				}

				//check the dot exist
				if(oText.value.indexOf(".")!=-1){
					if(this.innerHTML =="."){
						return;
					}
				}

				//check the operator and input value exist;
				//input a number and a operator
				if(oPer.value&&oText.value&&oText1.value ==""){
					oText1.value = oText.value;
					oText.value = "";
				}

				var re = /^0\.{1}\d+$/;
				var re1 = /^([0]\d+)$/;

				//input to display
				oText.value +=this.innerHTML;

				if(re.test(oText.value)){
					return;
				}

				if(re1.test(oText.value)){
					oText.value = this.innerHTML;
				}
			}
		}
	}
}