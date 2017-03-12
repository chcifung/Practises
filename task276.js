


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/_/g,' ').replace(/([A-Z])/g," $1").replace(/^\s/,'').replace(/\s+/g,"-").toLowerCase();
  
  return str;
  
}

spinalCase('This Is Spinal Tap');