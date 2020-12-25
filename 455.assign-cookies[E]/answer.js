/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let i = 0, j = 0;
  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      i++;
    }
    j++;
  }
  return i;
};

/**
 * 思路：排序+贪心
 * 时间复杂度：O(mlogm+nlogn)，空间复杂度：O(logm+logn)
 */