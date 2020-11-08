/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let ans = 0;
  let n = prices.length;
  for (let i = 1; i < n; ++i) {
    ans += Math.max(0, prices[i] - prices[i - 1]);
  }
  return ans;
};

/**
 * 思路：贪心算法
 * 由于股票的购买没有限制，因此整个问题等价于寻找x个不相交的区间(li,ri]使得结果最大化。
 * 贪心的角度考虑我们每次选择贡献大于0的区间即能使得答案最大化。
 * 时间复杂度：O(n)，空间复杂度：O(1)
 */
