function sym(args/* pass one or more arrays here */) {
    var ans = [], cnts = {}, currentMap;

    //count all items in the array
    for (var i = 0; i < arguments.length; i++){
        currentMap = {};
        arguments[i].forEach(function(item) {
            // if we haven't already counted this item in this array
            if (!currentMap.hasOwnProperty(item)) {
                if (cnts.hasOwnProperty(item)) {
                    // increase cnt
                    ++cnts[item].cnt;
                } else {
                    // initalize cnt and value
                    cnts[item] = {cnt: 1, val: item};
                }
            }
            // keep track of whethere we've already counted this item in this array
            currentMap[item] = true;
        });
    }
    // output all items that have a cnt of 1
    for (var item in cnts) {
        if (cnts.hasOwnProperty(item) && cnts[item].cnt === 1) {
            ans.push(cnts[item].val);
        }
    }

    return ans;
}

sym([1, 2, 3], [5, 2, 1, 4]);