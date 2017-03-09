
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var arr0 = [];
  
  
  var arr1 = [];
  arr1 = Object.keys(source);//get the source property array
  
  for(var i=0;i<collection.length;i++){//look through the collection element
    
    arr0 = Object.keys(collection[i]);//get the collection element property
    
      for(var k=0;k<arr0.length;k++){//look through the collection element property
        
        for(var j=0;j<arr1.length;j++){
          
        if(arr0[k]===arr1[j]&&collection[i][arr0[k]]===source[arr1[j]]){
          
          if(collection[i].hasOwnProperty(arr1[j])){
        arr.push(collection[i]);
            
            }
      }
      }
    }
   }
 
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


//every() and the filter() can construct the function