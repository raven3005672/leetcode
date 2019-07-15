/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
    var res = [],
        r = M.length,
        c = M[0].length;
    for (var i = 0; i < r; i++) {
        for (var j = 0; j < c; j++) {
            if (!Array.isArray(res[i])) {
                res[i] = []
            }
            var temp = M[i][j],
                n = 1;
            if (i > 0) {
                temp += M[i - 1][j];
                n++;
                if (j > 0) {
                    temp += M[i - 1][j - 1];
                    n++
                }
            }
            if (i < r - 1) {
                temp += M[i + 1][j];
                n++;
                if (j < c - 1) {
                    temp += M[i + 1][j + 1];
                    n++
                }
            }
            if (j > 0) {
                temp += M[i][j - 1];
                n++;
                if (i < r - 1) {
                    temp += M[i + 1][j - 1];
                    n++
                }
            }
            if (j < c - 1) {
                temp += M[i][j + 1];
                n++;
                if (i > 0) {
                    temp += M[i - 1][j + 1];
                    n++
                }
            }
            res[i][j] = Math.floor(temp / n)
        }
    }
    return res
};