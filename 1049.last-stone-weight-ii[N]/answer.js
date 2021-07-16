/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  let sum = 0;
  for (const weight of stones) {
    sum += weight;
  }
  const m = Math.floor(sum / 2);
  const dp = new Array(m + 1).fill(false);
  dp[0] = true;
  for (const weight of stones) {
    for (let j = m; j >= weight; --j) {
      dp[j] = dp[j] || dp[j - weight];
    }
  }
  for (let j = m; ; --j) {
    if (dp[j]) {
      return sum - 2 * j;
    }
  }
};
