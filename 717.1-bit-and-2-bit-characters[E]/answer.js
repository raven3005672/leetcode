/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    for(var i=0;i<bits.length;){
        if(bits.length === 1 && bits[i] === 0){
            return true;
        }
        if(bits[i] !== 0){
            bits.splice(i,2);
        }else{
            bits.splice(i, 1)
        }
    }
    return false;
};