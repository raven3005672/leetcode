/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
    //总感觉自己理解能力有问题，此题意思就是K次排序取A数组元素和最大
    A.sort((a,b)=>a-b);
    var res = 0;
    for(var i=0;i<K;i++){
        A[0] = -A[0];
        A.sort((a,b)=>a-b);
    }
    for(var j=0;j<A.length;j++){
        res += A[j];
    }
    return res;
};