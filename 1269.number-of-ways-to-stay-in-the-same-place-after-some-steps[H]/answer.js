/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function (steps, arrLen) {
  const MODULO = 1000000007;
  let maxColumn = Math.min(arrLen - 1, steps);
  let dp = new Array(maxColumn + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= steps; i++) {
    const dpNext = new Array(maxColumn + 1).fill(0);
    for (let j = 0; j <= maxColumn; j++) {
      dpNext[j] = dp[j];
      if (j - 1 >= 0) {
        dpNext[j] = (dpNext[j] + dp[j - 1]) % MODULO;
      }
      if (j + 1 <= maxColumn) {
        dpNext[j] = (dpNext[j] + dp[j + 1]) % MODULO;
      }
    }
    dp = dpNext;
  }
  return dp[0];
};
