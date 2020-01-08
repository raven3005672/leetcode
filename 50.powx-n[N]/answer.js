/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 快速幂方法
var myPow = function(x, n) {
    let N = n;
    if (N < 0) {
        x = 1 / x;
        N = -N;
    }
    let ans = 1;
    let current_product = x;
    for (let i = N; i; i = ~~(i/2)) {
        if ((i % 2) == 1) {
            ans = ans * current_product;
        }
        current_product = current_product * current_product;
    }
    return ans;
};
