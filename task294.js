function pairwise(arr, arg) {
  var sum = 0;
  for(var i=0;i<arr.length;i++){
    for(var j=i;j<arr.length;j++){
      if(arr[i]+arr[j]==arg){
        sum +=i+j;
      }
    }
  }
  return sum;
}