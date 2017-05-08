function sym() {
   var args = [];
  /*把传参放入一数组中*/
  for(var i=0;i<arguments.length;i++){
    args.push(arguments[i]);
  }
  /*symDif函数找出两个数组的差分数组*/
  function symDif(arr1,arr2){
    var result = [];
    arr1.forEach(function(item){
      if(arr2.indexOf(item)<0&&result.indexOf(item)<0){
        result.push(item);
      }
    });
    arr2.forEach(function(item){
      if(arr1.indexOf(item)<0&&result.indexOf(item)<0){
        result.push(item);
      }
    });
    return result;
    
  }
  /*reduce 为数组中的每一个元素依次执行回调函数*/
  return args.reduce(symDif);
}


sym([1, 2, 3], [5, 2, 1, 4]);
