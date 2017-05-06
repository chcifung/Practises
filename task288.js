function sym() {
  var arrays = [].slice.apply(arguments);

  return [].concat.apply([],               // concatenate
    arrays.map(                            // versions of the arrays
      function(array, i) {                 // where each array
        return array.filter(               // is filtered to contain
          function(elt) {                  // those elements which
            return !arrays.some(           // no array
              function(a, j) {             //
                return i !== j             // other than the current one
                  && a.indexOf(elt) >= 0   // contains
                ;
              }
            );
          }
        );
      }
    )
  );
}
sym([1, 2, 3], [5, 2, 1, 4]);