//find a element in the offer array

function findArr(a,c){
	for(var b=0;b<a.length;b+=){
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