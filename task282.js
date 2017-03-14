
function steamrollArray(arr) {
  // I'm a steamroller, baby
  Array.prototype.flatten=function(){
    return this.reduce(function(prev, cur) {
        var moreArr = [].concat(cur).some(Array.isArray);  //判断cur是不是一个数组
        return prev.concat(moreArr ? cur.flatten() : cur);
    },[]);
};
  return arr.flatten();
}

steamrollArray([1, [2], [3, [[4]]]]);