function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keys = Object.keys(source);
  return arr=collection.filter(function(item){
    return keys.every(function(items){
      return item.hasOwnProperty(items)&&item[items]==source[items];
    });
  });
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//the filter() and the every() two funtion is well!