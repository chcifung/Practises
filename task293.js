
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for(var i=0;i<arr.length;i++){
    var a = arr[i].avgAlt+earthRadius;
    var b = 2*Math.PI*Math.pow(Math.pow(a,3)/GM,0.5);
    arr[i].orbitalPeriod = Math.round(b);
    delete arr[i].avgAlt;
  }
  
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
