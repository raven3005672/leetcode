/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    let result = 1;
    while (result < num) {
        result = result * 4;
    }
    return result == num;
};