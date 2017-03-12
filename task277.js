function sumFibs(num) {
  var a,b,sum;
  a=b=1;
  if(num==1){
    return 1;
  }
  for(var i=1;i<num;i++){
    sum = a +b;
    a = b;
    b=sum;
  }
  return sum;
}

sumFibs(4);