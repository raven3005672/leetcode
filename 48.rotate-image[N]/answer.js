/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;
    let temp = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            temp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            temp = matrix[i][j];
            matrix[i][j] = matrix[i][n-j-1];
            matrix[i][n-j-1] = temp;
        }
    }
};
