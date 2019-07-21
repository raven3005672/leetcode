/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
    var res = 0;
    var dict = [2,3,5,7,11,13,17,19,23,29,31];
    for(var i=L;i<=R;i++){
        var str = i.toString(2);
        var count = 0;
        for(var j=0;j<str.length;j++){
            if(str[j] === '1'){
                count++;
            }
        }
        if(isPrimeNum(count)){
            res++;
        }
    }
    return res;
    function isPrimeNum(n){
        return dict.indexOf(n) > -1
        // if(n===2) return true;
        // if(n<2 || n%2 === 0) return false;
        // var len = Math.sqrt(n);
        // for(var k=3;k<=len;k+=2){
        //     if(n % k === 0){
        //         return false;
        //     }
        // }
        // return true;
    }
};