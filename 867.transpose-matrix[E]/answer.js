/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
    var m = A.length;
    var n = A[0].length;
    var res = [];
    for(var i=0;i<n;i++){
        res[i] = [];
        for(var j=0;j<m;j++){
            res[i][j] = A[j][i];
        }
    }
    return res;
};