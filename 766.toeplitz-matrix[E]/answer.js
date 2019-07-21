/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let roll = matrix.length;
    let i = 0;
    while(i < roll && i+1 < roll) {
        let tmp1 = matrix[i].slice(0, -1).join(',');
        let tmp2 = matrix[i + 1].slice(1).join(',');
        if (tmp1 !== tmp2) {
            return false;
        }
        i++;
    }
    return true;
};