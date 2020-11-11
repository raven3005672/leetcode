/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
const getIdx = (str, v) => str.codePointAt(v) - 'a'.codePointAt(0);
var findRotateSteps = function (ring, key) {
  const n = ring.length, m = key.length;
  const pos = new Array(26).fill(0).map(v => []);
  for (let i = 0; i < n; ++i) {
    pos[getIdx(ring, i)].push(i);
  }
  const dp = new Array(m).fill(0).map(v => new Array(n).fill(Number.MAX_SAFE_INTEGER));
  for (const i of pos[getIdx(key, 0)]) {
    dp[0][i] = Math.min(i, n - i) + 1;
  }
  for (let i = 1; i < m; ++i) {
    for (const j of pos[getIdx(key, i)]) {
      for (const k of pos[getIdx(key, i - 1)]) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + Math.min(Math.abs(j - k), n - Math.abs(j - k)) + 1);
      }
    }
  }
  return dp[m - 1].reduce((pre, cur) => Math.min(pre, cur), Number.MAX_SAFE_INTEGER);
};

/**
 * 思路：动态规划
 * 定义dp[i][j]表示从前往后拼写出key的第i个字符，ring的第j个字符与12:00方向对其的最少步数(下标均从0开始)。
 * 显然，只有当字符串ring的第j个字符需要和key的第i个字符相同时才能拼写成功。
 * 我们对每一个字符维护一个位置数组pos[i]，表示字符i在ring中出现的位置集合，用来加速计算转移的过程。
 * 状态转移方程：n为ring的长度，m为key的长度
 * dp[i][j] = min(dp[i-1][k] + min(abs(j - k), n - abs(j - k)) + 1)  {当k ∈ pos[key[i-1]]}
 * 其中 min(abs(j - k), n - abs(j - k) + 1)表示在当前第k个字符与12:00方向对其时第j个字符旋转到12:00方向并按下拼写的最少步数。
 * 最后答案即为 dp[m−1][i]
 * 
 * 时间复杂度：O(m * n^2)，空间复杂度：O(m * n)
 */
