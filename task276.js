


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/_/g,' ').replace(/([A-Z])/g," $1").replace(/^\s/,'').replace(/\s+/g,"-").toLowerCase();
  
  return str;
  /*
  1.- to ' ';
  2.A-Z to add ' ';
  3.remove the first ' ';
  4.' ' to '-';
  5. to lower case;
  6. old - dont need to change;
  */
}

spinalCase('This Is Spinal Tap');