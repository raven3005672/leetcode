/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    var s = n.toString(2);
    if(s.length === 1) return true;
    for(var i=1;i<s.length;i++){
        if(s[i-1] === s[i]){
            return false;
        }
    }
    return true;
};