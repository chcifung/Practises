function smallestCommons(arr) {
  var max,min;
  max = Math.max(arr[0],arr[1]);
  min = Math.min(arr[0],arr[1]);
  var sum = [];
  for(var i=min;i<=max;i++){
    sum.push(i);
  }
  var result=1;
  for(var j=1;j<sum.length;j++){
    result*=sum[j];
  }
  
  var gcd = function(a,b){//求两数的最小公倍数-辗转相除法基于如下原理：两个整数的最大公约数等于其中较小的数和两数的差的最大公约数。
    if(b){
      return gcd(b, a % b);
    }
    return a;
  };
  
  return sum.reduce(function(prev,cur,index,array){//最小公倍数等于两数的积除以最大公约数
    return prev*cur/gcd(prev,cur);
  });
  
}


smallestCommons([1,5]);