
function translatePigLatin(str) {
  var a = str.split('');
  var b = a[0];
  var c = a[1];
  var d = ['a','e','i','o','u'];
  var e = [];
  if(d.indexOf(b)==-1&&d.indexOf(c)==-1){
    a.shift();
    a.shift();
    a.push(b);
    a.push(c);
    a.push('ay');
    
    return a.join('');
  }else if(d.indexOf(b)==-1){
    a.shift();
    a.push(b);
    a.push('ay');
    return a.join('');
  }else if(d.indexOf(b)!=-1){
    
    a.push('way');
    return a.join('');
  }
  
}

translatePigLatin("consonant");