function pairwise(arr, arg) {
  var sum=0;
  for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j]==arg){
        sum +=i+j;
        arr[i] += ",";//type change 隐式类型转换
        arr[j] += ",";
      }
    }
  }
  return sum;
}


pairwise([1,4,2,3,0,5], 7);