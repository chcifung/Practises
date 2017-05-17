function pairwise(arr, arg) {

  var sum = arr.reduce(function(pre,cur,index,arr){
  	if(pre+cur == arg){
  		sum +=index;
  	}
  });

  return sum;
}