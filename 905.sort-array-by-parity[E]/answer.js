/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let left=[];
    let rigth=[];
    for(let i=0;i<A.length;i++){
        if(A[i]%2===0){
            left.push(A[i])
        }else{
            rigth.push(A[i])
        }
    }
    return left.concat(rigth)
};