/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    //利用num & 0xf 与 num>>4
    if(num === 0) return '0';
    var str = '0123456789abcdef';
    var res = '';
    while(res.length<8 && num){
        res = str[num & 0xf] + res;
        num >>= 4;
    }
    return res;
};