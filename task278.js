function sumPrimes(num) {
  var sums = [];
  var result = 0;
  var count = 0;
  for(var i=2; i<=num;i++){
    for(var j=2;j<=i;j++){
      if(i%j==0){
        break;
      }
      
      }
    if(i==j){
        sums.push(i);
      }
    }
  for(var k=0;k<sums.length;k++){
    result+=sums[k];
  }
  return result;
  
  }
  

sumPrimes(10);
