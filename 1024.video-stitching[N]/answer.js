/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function (clips, T) {

};

/*
 * 思路：动态规划
 * dp[i]表示区间[0, i)所需的最少子区间的数量，dp[0]=0
 * 对于任意一个子区间[aj, bj], aj < i <= bj，这样可以覆盖[0, i)的后半部分
 * 前半部分dp[aj]对应的最优方法进行覆盖，因此可以用dp[aj] + 1来更新dp[i]
 * 状态转移方程：dp[i] = min{dp[aj]} + 1, (aj < i <= bj)
 * 最后结果dp[T]
 * 时间复杂度：O(T * N)，空间复杂度：O(T)
 */

var videoStitching = function (clips, T) {
  const dp = Array.from({ length: (T + 1) }, () => Infinity);
  dp[0] = 0;
  for (let i = 0; i <= T; i++) {
    for (let clip of clips) {
      if (clip[0] < i && i <= clip[1]) {
        dp[i] = Math.min(dp[i], dp[clip[0]] + 1);
      }
    }
  }
  return dp[T] == Infinity ? -1 : dp[T];
};

/*
 * 思路：贪心算法
 * 我们枚举每一个位置，假设当枚举到位置i时，记左端点不大于i的所有子区间的最远右端点为last。这样last 就代表了当前能覆盖到的最远的右端点。
 * 每次我们枚举到一个新位置，我们都用 maxn[i] 来更新 last。
 * 如果更新后 last == i，那么说明下一个位置无法被覆盖，我们无法完成目标。
 * 同时我们还需要记录上一个被使用的子区间的结束位置为 pre，每次我们越过一个被使用的子区间，就说明我们要启用一个新子区间，这个新子区间的结束位置即为当前的 last。
 * 也就是说，每次我们遇到 i == pre，则说明我们用完了一个被使用的子区间。这种情况下我们让答案加 1，并更新 pre 即可。
 * 时间复杂度：O(T+N)，空间复杂度：O(T)
 */

var videoStitching = function (clips, T) {
  let maxn = Array.from({length: T}, () => 0);
  let last = 0, ret = 0, pre = 0;
  for (let clip of clips) {
    if (clip[0] < T) {
      maxn[clip[0]] = Math.max(maxn[clip[0]], clip[1]);
    }
  }
  for (let i = 0; i < T; i++) {
    last = Math.max(last, maxn[i]);
    if (i == last) {
      return -1;
    }
    if (i == pre) {
      ret++;
      pre = last;
    }
  }
  return ret;
};
