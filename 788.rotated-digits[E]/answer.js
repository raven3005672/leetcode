/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    var map = {'0': 0, '1':1, '2':5, '5':2,'6':9,'8':8,'9':6};
    var res = 0;
    var strNum;
    while(N){
        strNum = String(N);
        if(strNum.indexOf('3') >= 0 || strNum.indexOf('4') >= 0 || strNum.indexOf('7') >= 0){
            N--;
            continue;
        }
        var str = '';
        for(var i=0;i<strNum.length;i++){
            str += numReverse(strNum[i]);
        }
        if(Number(str) != N){
            res++;
        }
        N--;
    }
    return res;
    function numReverse(num){
        return map[num];
    }
};