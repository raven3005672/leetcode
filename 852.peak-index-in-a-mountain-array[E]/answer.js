/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    for(var i=1;i<A.length;i++){
        if(A[i-1] > A[i]){
            return i-1;
        }
    }
};