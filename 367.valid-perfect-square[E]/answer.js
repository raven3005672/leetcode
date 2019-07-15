/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let n = 1;
    let sum = 1;
    while (sum < num) {
        n = n + 2;
        sum = (1 + n) * ((n - 1) / 2 + 1) / 2
    }
    return n === num;
};