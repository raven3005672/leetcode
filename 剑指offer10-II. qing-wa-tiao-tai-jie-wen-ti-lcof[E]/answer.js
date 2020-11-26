/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n <= 1) return 1;
  let dp = [1, 1, 2];
  const Max = 1e9 + 7;
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % Max;
  }
  return dp[n];
};
