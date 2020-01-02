/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let dp = [];
    let m = grid.length;
    let n = grid[0].length;
    for (let i = 0; i < m; i++) {
        dp.push([]);
        if (i === 0) {
            dp[i][0] = grid[i][0];
        } else {
            dp[i][0] = dp[i-1][0] + grid[i][0];
        }
        for (let j = 0; j < n; j++) {
            if (i * j === 0) {
                if (j === 0) {
                    dp[0][j] = grid[0][j];
                } else {
                    dp[0][j] = dp[0][j-1] + grid[0][j];
                }
            } else {
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
            }
        }
    }
    return dp[m-1][n-1];
};