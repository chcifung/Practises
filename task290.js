
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  if(arr1.length!==0&&arr2.length!==0){
    
    var a1 = [];
    for(var k=0;k<arr1.length;k++){
      a1.push(arr1[k][1]);
    }
    
    for(l=0;l<arr2.length;l++){
      if(a1.indexOf(arr2[l][1])<0){
        arr1.push(arr2[l]);
      }
    }
    
    for(var i=0;i<arr1.length;i++){
      
     for(var j=0;j<arr2.length;j++){
       if(arr1[i][1]==arr2[j][1]&&arr1[i][0]!=arr2[j][0]){
        arr1.splice(i,1,arr2[j]);
       }
       
     }
     
   }
  }else if(arr1.length===0){
    arr1=arr2;
  }
   
  
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

