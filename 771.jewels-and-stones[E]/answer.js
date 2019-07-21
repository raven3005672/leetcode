/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var len = S.length;
    var i=0;
    var count = 0;
    while(i < len){
        if(J.indexOf(S[i++]) > -1){
            count++;
        }
    }
    return count;
};