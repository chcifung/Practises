function addTogether(a) {
  if(arguments.length==1){
    if(typeof(a)=='number'){
      return function(b){
        if(typeof(b)=='number'){
          return a+b;
        }else{
          return undefined;
        }
      
    };
    }else{
      return undefined;
    }
    
  }else{
    if(typeof(arguments[0])=='number'&&typeof(arguments[1])=='number'){
      return arguments[0]+arguments[1];
    }else{
      return undefined;
    }
    
  }
}

addTogether(2,3);
