/**
 * @param {number} n
 * @return {number}
 */
// 测试用例
var n = 44;
var climbStairs = function(n) {
    if (n <= 2) {return n}
    let res = 0,
        i = 1,
        j = 2,
        k = 3;
    while (k <= n) {
        res = i + j;
        i = j;
        j = res;
        k++
    }
    return res; 
};
console.log(climbStairs(n))