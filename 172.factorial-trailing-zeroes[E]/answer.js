/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let count = 0;
    while(parseInt(n / 5) > 0) {
        count += parseInt(n / 5);
        n = parseInt(n / 5)
    }
    return count;
};

console.log(trailingZeroes(30))