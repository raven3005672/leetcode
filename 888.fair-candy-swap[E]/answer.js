/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    var sumA = 0, sumB = 0;
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>a-b);
    for(var i=0;i<A.length;i++){
        sumA += A[i];
    }
    for(var j=0;j<B.length;j++){
        sumB += B[j];
    }
    var temp = (sumA-sumB)/2;
    var i = 0, j = 0, res = [];
    while(i<A.length && j<B.length){
        if(A[i]-B[j] === temp){
            res[0] = A[i];
            res[1] = B[j];
            break;
        }else if(A[i]-B[j] > temp){
            j++;
        }else{
            i++;
        }
    }
    return res;
};