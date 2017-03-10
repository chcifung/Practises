
function pairElement(str) {
  var a =str.split('');//split the string to an array;
  var b = [];
  for(var i=0;i<a.length;i++){
    
    if(a[i]=='A'){
      b[i]=["A","T"];
    }else if(a[i]=='T'){
      b[i]=["T","A"];
    }else if(a[i]=='G'){
      b[i]=["G","C"];
    }else if(a[i]=='C'){
      b[i]=["C","G"];
    }
    
  }
  return b;
}

pairElement("GCG");