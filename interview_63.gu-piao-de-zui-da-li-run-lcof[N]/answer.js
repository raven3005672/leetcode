/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let day = prices.length;
    let dp = [[]];
    dp[-1] = [0, -Infinity];
    for (let i = 0; i < day; i++) {
        if (!dp[i]) dp[i] = [];
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
    }
    return dp[day-1][0]
};

// 个例简单思路参考121题
