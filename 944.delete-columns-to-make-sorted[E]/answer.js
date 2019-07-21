/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    var B = [];
    for(var i=0;i<A[0].length;i++){
        B[i] = [];
        for(var j=0;j<A.length;j++){
            B[i].push(A[j][i]);    
        }
    }
    var count = 0;
    for(var k=0;k<B.length;k++){
        var temp = B[k];
        for(var m=0;m<temp.length-1;m++){
            if(temp[m] > temp[m+1]){
                count++;
                break;
            }
        }
    }
    return count;
};