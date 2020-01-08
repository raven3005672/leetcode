/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let arrs = matrix.slice();
    let result = [];
    let flag = 0;
    let temp = [];
    while (arrs.length && arrs[0].length) {
        if (flag == 0) {
            temp = arrs[0].slice();
            arrs.shift();
        } else if (flag == 1) {
            temp = Array.from({length: arrs.length}, (v,k) => arrs[k][arrs[0].length - 1]);
            arrs.forEach((arr) => {
                arr.pop();
            });
        } else if (flag == 2) {
            temp = arrs[arrs.length - 1].reverse().slice();
            arrs.pop();
        } else if (flag == 3) {
            temp = Array.from({length: arrs.length}, (v,k) => arrs[arrs.length - k - 1][0]);
            arrs.forEach((arr) => {
                arr.shift();
            });
        }
        result = result.concat(temp);
        flag = (flag + 1) % 4;
    }
    return result;
};

matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
   ]

   spiralOrder(matrix)