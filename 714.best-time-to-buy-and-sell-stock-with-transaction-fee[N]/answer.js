/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let day = prices.length;
    let dp = Array.from({length: day}, () => {
        return [0, -Infinity];
    });
    dp[-1] = [0, -Infinity];
    for (let i = 0; i < day; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i] - fee);
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
    }
    return dp[day - 1][0]
};