function sym(args){
    var arr = [];
    var result = [];
    var units;
    var index = {};
    for(var i in arguments){
        units = arguments[i];

    for(var j = 0; j < units.length; j++){
         arr.push(units[j]);
        }
    }

    arr.forEach(function(a){
        if(!index[a]){
            index[a] = 0;
        }
            index[a]++;

    });

       for(var l in index){
           if(index[l] === 1){
               result.push(+l);
           }
       }

    return result;
}

sym([1, 2, 3], [5, 2, 1, 4]);