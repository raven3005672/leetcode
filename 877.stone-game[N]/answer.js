/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
  const length = piles.length;
  const dp = new Array(length).fill(0);
  for (let i = 0; i < length; i++) {
    dp[i] = piles[i];
  }
  for (let i = length - 2; i >= 0; i--) {
    for (let j = i + 1; j < length; j++) {
      dp[j] = Math.max(piles[i] - dp[j], piles[j] - dp[j - 1]);
    }
  }
  return dp[length - 1] > 0;
};
