function permAlone(str) {
  var arr = str.split("");
  var prearr = [];
  var begin = 0;
  //repeat string
  var reg = /(.)\1+/g;

  //the string is repeat and always repeat
  if(str.match(reg)!==null&&str.match(reg)[0]===str){
    //如果 regexp 具有标志 g，则 match() 方法将执行全局检索，找到 stringObject 中的所有匹配子字符串。
  	//若没有找到任何匹配的子串，则返回 null。如果找到了一个或多个匹配子串，则返回一个数组。
  	//不过全局匹配返回的数组的内容与前者大不相同，它的数组元素中存放的是 stringObject 中所有的匹配子串，而且也没有 index 属性或 input 属性。
  	return 0;
  }

  //swap function
  function swap(a1,a2){
  	var temp = arr[a1];
  	arr[a1] = arr[a2];
  	arr[a2] = temp;
  }

  function premall(arr,begin){
  	//if the string length==1 return the string
  	if(begin==arr.length-1){
  		prearr[prearr.length]=arr.join("");
  		return;
  	}

  	for(var i =0;i<arr.length-begin;i++){
  		swap(begin,begin+i);//exchange the two alpha
  		premall(arr,begin+1);//recall the function
  		swap(begin,begin+i);//exchange the two alpha
  	}
  }

  premall(arr,begin);

  return prearr.filter(function(val){
  	return !val.match(reg);
  }).length;


}

