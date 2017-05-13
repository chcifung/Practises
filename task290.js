function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  var a1 = [];
  var a2 = [];
  for(var i=0;i<arr1.length;i++){
    a1.push(arr1[i][1]);
  }
  for(var j=0;j<arr2.length;j++){
    a2.push(arr2[j][1]);
  }
  console.log(arr1);
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);