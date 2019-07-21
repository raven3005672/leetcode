/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    A.sort((a,b)=>a-b);
    var difference = A[A.length-1]-A[0];
    if(difference <= 2*K) return 0;
    return difference-2*K;
};