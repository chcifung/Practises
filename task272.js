
function fearNotLetter(str) {
  var a = str.split('');
  for(var i=0;i<a.length-1;i++){
    if((str.charCodeAt(i+1)-str.charCodeAt(i))!=1){
      return String.fromCharCode(str.charCodeAt(i+1)-1);
    }
  }
  
}

fearNotLetter("abce");