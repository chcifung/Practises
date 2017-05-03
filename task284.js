function truthCheck(collection, pre) {
  // Is everyone being true?
  var sum = 0;
  for(var i = 0;i<collection.length;i++){
    if(collection[i].hasOwnProperty(pre)){
      sum =sum +1;
      
    }else{
      sum = 1;
    }
  }
  
  if(sum == collection.length-1){
    return true;
  }else{
    return sum;
  }
  
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");