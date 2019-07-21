/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    //异或，1^1=0,1^0=1,0^0=0;找出N相同位数全为1的n
    var n = 2;
    while(n <= N){
        n <<= 1;
    }
    return n-1^N;
    /*var bs = N.toString(2);
    var res = '';
    for(var i=0;i<bs.length;i++){
        if(bs[i] == 0){
            res += 1;
        }else{
            res += 0;
        }
    }
    return parseInt(res, 2);*/
};