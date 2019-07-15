/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let i = 1;
    let sum = (x) => {
        return (1 + x) * x / 2;
    }
    let a = 1;
    while (a <= n) {
        i++;
        a = sum(i)
    }
    return --i;
};