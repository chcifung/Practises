var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
     var names = firstAndLast.split(" ");
    this.getFullName = function() {
     
      return names[0]+" "+names[1];
    };
    this.getFirstName = function(){
    	return names[0];
    }
    this.getLastName = function(){
    	return names[1];
    }
    this.setFirstName = function(first){
    	names[0] = first;
    }
    this.setLastName = function(last){
    	names[1] = last;
    }
    this.setFullName = function(fullName){
    	var newname = fullName.split(" ");
    	names[0] = newname[0];
    	names[1] = newname[1];
    }
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
