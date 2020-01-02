/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let dp = [];
    let m = word1.length,
        n = word2.length;
    dp.push([])
    dp[0][0] = 0;
    for (let i = 1; i <= m; i++) {
        dp.push([]);
        dp[i][0] = dp[i-1][0] + 1;
    }
    for (let j = 1; j <= n; j++) {
        dp[0][j] = dp[0][j-1] + 1;
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1.charAt(i-1) == word2.charAt(j-1)) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]) + 1;
            }
        }
    }
    return dp[m][n]
};

// 空间优化
var minDistance = function(word1, word2) {
    let dp = [];
    let m = word1.length,
        n = word2.length;

    for (let j = 0; j <= n; j++) {
        dp[j] = j;
    }
    for (let i = 1; i <= m; i++) {
        let temp = dp[0];
        dp[0] = i;
        for (let j = 1; j <= n; j++) {
            let pre = temp;
            temp = dp[j];
            if (word1.charAt(i-1) == word2.charAt(j-1)) {
                dp[j] = pre;
            } else {
                dp[j] = Math.min(dp[j-1], pre, dp[j]) + 1;
            }
        }
    }
    return dp[n];
};