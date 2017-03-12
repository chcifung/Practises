function uniteUnique(arr) {
  
  var sum=[];
  for(var k=0;k<arguments[0].length;k++){
    sum.push(arguments[0][k]);   
  }
  
  for(var i=1;i<arguments.length;i++){
   
    for(var j=0;j<arguments[i].length;j++){
           
      if(sum.indexOf(arguments[i][j])==-1){
        
        sum.push(arguments[i][j]);
      }
    }
    
  }
  return sum;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
