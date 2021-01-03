/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  let day = prices.length;
  if (k > day / 2) {
    return maxProfit_inf(prices)
  }
  let dp = Array.from({ length: day }, () => {
    return Array.from({ length: k + 1 }, () => [0, -Infinity])
  });
  dp[-1] = Array.from({ length: k + 1 }, () => [0, -Infinity]);
  dp[-1][-1] = [0, -Infinity];
  for (let i = 0; i < day; i++) {
    for (let _k = 0; _k <= k; _k++) {
      if (_k == 0) {
        dp[i][_k][0] = 0;
        dp[i][_k][1] = -Infinity;
      } else {
        dp[i][_k][0] = Math.max(dp[i - 1][_k][0], dp[i - 1][_k][1] + prices[i]);
        dp[i][_k][1] = Math.max(dp[i - 1][_k][1], dp[i - 1][_k - 1][0] - prices[i]);
      }
    }
  }
  return dp[day - 1][k][0]
};

var maxProfit_inf = function (prices) {
  let result = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      result += prices[i + 1] - prices[i]
    }
  }
  return result;
};

prices = [2, 1, 2, 0, 1], k = 2;

maxProfit(k, prices)