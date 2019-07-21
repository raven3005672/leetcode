/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    var res = new Set();
    for(var i=1;i<bound;i*=x){
        for(var j=1;i+j<=bound;j*=y){
            res.add(i+j);
            if(y===1) break;
        }
        if(x===1) break;
    }
    return [...res];
};