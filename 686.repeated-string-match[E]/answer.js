/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    //A的重复次数边界为：B.length/A.length + 2
    var str = A;
    var count = 1;
    var maxCount = B.length/A.length + 2;
    while(count <= maxCount){
        if(str.indexOf(B) > -1) return count;
        str += A;
        count++;
    }
    return -1;
};