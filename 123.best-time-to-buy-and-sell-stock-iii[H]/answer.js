/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let day = prices.length;
    let K = 2;
    let dp = Array.from({length: day}, () => {
        return Array.from({length: K + 1}, () => [0, -Infinity])
    })
    dp[-1] = [[0, -Infinity], [0, -Infinity], [0, -Infinity]]
    dp[-1][-1] = [0, -Infinity]
    for (let i = 0; i < day; i++) {
        for (let k = 0; k <= K; k++) {
            if (k == 0) {
                dp[i][k][0] = 0;
                dp[i][k][1] = -Infinity;
            } else {
                dp[i][k][0] = Math.max(dp[i-1][k][0], dp[i-1][k][1] + prices[i]);
                dp[i][k][1] = Math.max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i]);
            }
        }
    }
    return dp[day-1][K][0]
};

prices = [1,2,3,4,5]

maxProfit(prices)
