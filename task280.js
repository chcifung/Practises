
function findElement(arr, func) {
  var num = 0;
  var arr1 = arr.filter(func);
  num=arr1[0];
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });