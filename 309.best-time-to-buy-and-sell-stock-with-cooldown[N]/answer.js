/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let day = prices.length;
    let dp = Array.from({length: day}, () => {
        return [0, -Infinity]
    });
    dp[-1] = [0, -Infinity];
    dp[-2] = [0, -Infinity];
    for (let i = 0; i < day; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
        dp[i][1] = Math.max(dp[i-1][1], dp[i-2][0] - prices[i])
    }
    console.log(dp)
    return dp[day-1][0]
};

prices = [1,2,3,0,2];

maxProfit(prices)