/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
  let dp = new Array(n).fill(0);
  dp[0] = 1;
  for (let i = 0; i < k; i++) {
    const next = new Array(n).fill(0);
    for (const [src, dst] of relation) {
      next[dst] += dp[src];
    }
    dp = next;
  }
  return dp[n - 1];
};
