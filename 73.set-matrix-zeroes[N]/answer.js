/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowLen = matrix.length
    let colLen = matrix[0].length;
    for(let i = 0;i<rowLen;i++){
        for(let j = 0;j<colLen;j++){
            if(matrix[i][j] == 0&&1/matrix[i][j]>0){
               for(let rowI = 0;rowI<rowLen;rowI++){
                    if(matrix[rowI][j] != 0){
                       matrix[rowI][j] = -0;
                    }
                }
                for(let colI = 0;colI<colLen;colI++){
                    if(matrix[i][colI] != 0){
                       matrix[i][colI] = -0;
                    }
                }
            }
        }
    }
    return matrix;
};
