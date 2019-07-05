/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    let init = 0;
    while (init < numRows) {
        if (init == 0) {
            result[init] = [1];
        } else if (init == 1) {
            result[init] = [1,1]
        } else {
            result[init] = [];
            for (let i = 0; i < init + 1; i++) {
                result[init][i] = result[init - 1][i] + result[init - 1][i - 1];
                result[init][i] = result[init][i] ? result[init][i] : 1;
            }
        }
        init++;
    }
    return result;
};
