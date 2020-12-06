/**
 * @param {string} leaves
 * @return {number}
 */
var minimumOperations = function(leaves) {
  let n = leaves.length;
  let g = leaves.charAt(0) === 'y' ? 1 : -1;
  let gmin = g;
  let ans = Infinity;
  for (let i = 1; i < n; i++) {
    let isYellow = leaves.charAt(i) === 'y' ? 1: 0;
    g += 2 * isYellow - 1;
    if (i != n - 1) {
      ans = Math.min(ans, gmin - g);
    }
    gmin = Math.min(gmin, g);
  }
  return ans + (g + n) / 2;
};

/**
 * 思路：动态规划
 * 时间复杂度：O(n)，空间复杂度：O(1)
 */
