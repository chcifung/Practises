function myReplace(str, before, after) {
  var a =  before.split("");
  var b = after.split("");
  if(a[0]>='A'&&a[0]<='Z'){//define the Up or Lower case 
    b[0] = b[0].toUpperCase();
  }
  var b1 = b.join("");
  
  return str.replace(before,b1);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");