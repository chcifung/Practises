
function addTogether() {
  if(arguments.length==1){
    if(typeof(arguments)== 'number'){
      return function(a,b){
        
      };
      return sumTwoAnd;
    }else{
      return undefined;
    }
    
  }else if(arguments.length==2){
    if(typeof(arguments[0])== 'number'&&typeof(arguments[1])== 'number'){
      return arguments[0]+arguments[1];
  }else{
      return undefined;
  } 
  }else{
    return undefined;
  }  
}

addTogether(2,3);
