/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
var largestNumber = function (cost, target) {
  const dp = new Array(target + 1).fill(-Number.MAX_VALUE);
  dp[0] = 0;
  for (const c of cost) {
    for (let j = c; j <= target; ++j) {
      dp[j] = Math.max(dp[j], dp[j - c] + 1);
    }
  }
  if (dp[target] < 0) {
    return '0';
  }
  const ans = [];
  for (let i = 8, j = target; i >= 0; i--) {
    for (let c = cost[i]; j >= c && dp[j] === dp[j - c] + 1; j -= c) {
      ans.push(String.fromCharCode('1'.charCodeAt() + i));
    }
  }
  return ans.join('');
};
