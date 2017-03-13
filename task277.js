
function sumFibs(num) {
  var a,b,sum;
  a=b=1;
  var sums = [1,1];
  for(var i=2;i<num;i++){
    sum = a +b;
    a = b;
    b=sum;
    if(b%2==1&&b<=num){
      sums.push(b);
    }
  }//arrange all the odd number and not bigger than the num
  var result=0;
  for(var j=0;j<sums.length;j++){
     result = result +sums[j];
  }
  return result;// get the sum of the array
}

sumFibs(4);