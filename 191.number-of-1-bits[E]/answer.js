/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return (n).toString(2).split('').reduce((a,b) => {
        return parseInt(a) + parseInt(b)
    },0);
};