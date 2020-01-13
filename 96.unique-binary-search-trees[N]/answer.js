/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if (n == 0 || n == 1) return 1;
    if (n == 2) return 2;
    let dp = [];
    // 1...n为根节点
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = 0;
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i-j-1];
        }
    }
    return dp[n];
};
