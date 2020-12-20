/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let day = prices.length;
  let dp = Array.from({ length: day }, () => {
    return [0, -Infinity];
  });
  dp[-1] = [0, -Infinity];
  for (let i = 0; i < day; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[day - 1][0]
};

/**
 * 思路：动态规划
 * 考虑到「不能同时参与多笔交易」，因此每天交易结束后只可能存在手里有一支股票或者没有股票的状态。
 * 定义状态 dp[i][0] 表示第 i 天交易完后手里没有股票的最大利润，dp[i][1] 表示第 i 天交易完后手里持有一支股票的最大利润（i 从 0 开始）。
 * 考虑 dp[i][0] 的转移方程，如果这一天交易完后手里没有股票，那么可能的转移状态为前一天已经没有股票，即 dp[i−1][0]，或者前一天结束的时候手里持有一支股票，即 dp[i−1][1]，这时候我们要将其卖出，并获得 prices[i] 的收益，但需要支付 fee 的手续费。
 * 因此为了收益最大化，我们列出如下的转移方程：
 * dp[i][0]=max{dp[i−1][0],dp[i−1][1]+prices[i]−fee}
 * 再来按照同样的方式考虑 dp[i][1] 按状态转移，那么可能的转移状态为前一天已经持有一支股票，即 dp[i−1][1]，或者前一天结束时还没有股票，即 dp[i−1][0]，这时候我们要将其买入，并减少 prices[i] 的收益。
 * 可以列出如下的转移方程：
 * dp[i][1]=max{dp[i−1][1],dp[i−1][0]−prices[i]}
 * 对于初始状态，根据状态定义我们可以知道第 0 天交易结束的时候有 dp[0][0]=0 以及 dp[0][1]=−prices[0]。
 * 因此，我们只要从前往后依次计算状态即可。由于全部交易结束后，持有股票的收益一定低于不持有股票的收益，因此这时候 dp[n−1][0] 的收益必然是大于 dp[n−1][1] 的，最后的答案即为 dp[n−1][0]。
 * 时间复杂度：O(n)，空间复杂度：O(n)
 */
