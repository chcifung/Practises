function dropElements(arr, func) {
  // Drop them elements.
  var arr1 = arr.filter(func);
  var i=arr.indexOf(arr1[0]);
  if(arr1[0]===undefined){
    return arr1;
  }else{
  return arr.slice(i,(arr.length)+1);
 }
}

dropElements([1, 2, 3], function(n) {return n < 3; });