/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let res = triangle[triangle.length - 1];
    for (let i = triangle.length - 2; i > -1; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            res[j] = Math.min(res[j], res[j+1]) + triangle[i][j];
        }
    }
    return res[0];
};

// var currentMinus = function(i,j,triangle) {
//     if (j == triangle.length - 1) return triangle[j][i];
//     return Math.min(currentMinus(i,j+1,triangle), currentMinus(i+1,j+1,triangle)) + triangle[j][i];
// }

let triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];

console.log(minimumTotal(triangle))