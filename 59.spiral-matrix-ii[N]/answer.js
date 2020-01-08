/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let result = Array.from({length: n}, (v,k) => Array.from({length: n}));
    let tmp = 1;
    let i = 0, j = 0;
    let direction = 0;
    while(tmp < n * n + 1) {
        if (direction == 0) {
            if (i < n && i > -1 && j > -1 && j < n && !result[i][j]) {
                result[i][j] = tmp;
                j++;
                tmp++;
            } else {
                direction++;
                j--;
                i++;
            }
        } else if (direction == 1) {
            if (i < n && i > -1 && j > -1 && j < n && !result[i][j]) {
                result[i][j] = tmp;
                i++;
                tmp++;
            } else {
                direction++;
                i--;
                j--;
            }
        } else if (direction == 2) {
            if (i < n && i > -1 && j > -1 && j < n && !result[i][j]) {
                result[i][j] = tmp;
                j--;
                tmp++;
            } else {
                direction++;
                j++;
                i--;
            }
        } else if (direction == 3) {
            if (i < n && i > -1 && j > -1 && j < n && !result[i][j]) {
                result[i][j] = tmp;
                i--;
                tmp++;
            } else {
                direction = 0;
                i++;
                j++;
            }
        }
    }
    return result;
};

// java
// class Solution {
//     public int[][] generateMatrix(int n) {
//         int l = 0, r = n - 1, t = 0, b = n - 1;
//         int[][] mat = new int[n][n];
//         int num = 1, tar = n * n;
//         while(num <= tar){
//             for(int i = l; i <= r; i++) mat[t][i] = num++; // left to right.
//             t++;
//             for(int i = t; i <= b; i++) mat[i][r] = num++; // top to bottom.
//             r--;
//             for(int i = r; i >= l; i--) mat[b][i] = num++; // right to left.
//             b--;
//             for(int i = b; i >= t; i--) mat[i][l] = num++; // bottom to top.
//             l++;
//         }
//         return mat;
//     }
// }

