/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n = matrix.length;
    if (!n) return false;
    let m = matrix[0].length;
    for (let i = 0; i < n ; i++) {
        if (matrix[i][0] <= target && matrix[i][m - 1] >= target) {
            if (matrix[i].includes(target)) {
                return true;
            }
        }
    }
    return false;
};