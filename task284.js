function truthCheck(collection, pre) {
  // Is everyone being true?
  var sum = 0;
  for(var i = 0;i<collection.length;i++){
    
    if(collection[i][pre]){
        sum +=1;
    }
  } 

  if(sum == collection.length){
        return true;
    }else{
        return false;
    }
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");