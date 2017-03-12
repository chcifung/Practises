function convertHTML(str) {
  // &colon;&rpar;
    return str.replace(/[<>&"']/g,function(c){
      return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c];});//mulity regulation should pass it with json
  
}

convertHTML("Dolce & Gabbana");