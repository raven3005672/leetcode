/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    //题目中打印有误第三等分应该为A[j]+A[j+1]+...+A[A.length-1]
    var sum = A.reduce((acumulator, currentVal)=>acumulator+currentVal, 0);
    if(sum % 3 !== 0) return false;
    var temp1 = 0;
    var temp2 = 0;
    for(var i=0;i<A.length-2;i++){
        temp1 += A[i];
        if(temp1 * 3 === sum){
            for(var j=i+1;j<A.length;j++){
                temp2 += A[j];
                if(temp2 === temp1){
                    return true;
                }
            }
        }
    }
    return false;
};