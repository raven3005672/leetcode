/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    var isPure=true;   
    var isPure1=true;
    for(var i=0; i<A.length-1;i++){
        isPure &= A[i]<=A[i+1];
        isPure1 &=A[i]>=A[i+1];
    }
    
    return isPure || isPure1;
};