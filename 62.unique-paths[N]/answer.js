/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m <= 0 || n <= 0) return 0;
    let dp = [];
    for (let i = 0; i < m; i++) {
        dp.push([]);
        for (let j = 0; j < n; j++) {
            if (i * j == 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[m-1][n-1];
};