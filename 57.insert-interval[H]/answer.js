/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let left = newInterval[0];
  let right = newInterval[1];
  let placed = false;
  let ansList = [];
  for (let interval of intervals) {
    if (interval[0] > right) {
      // 在插入区间的右侧且无交集
      if (!placed) {
        ansList.push([left, right]);
        placed = true;
      }
      ansList.push(interval);
    } else if (interval[1] < left) {
      // 在插入区间的左侧且无交集
      ansList.push(interval);
    } else {
      // 与插入区间有交集，计算它们的并集
      left = Math.min(left, interval[0]);
      right = Math.max(right, interval[1]);
    }
  }
  if (!placed) {
    ansList.push([left, right]);
  }
  let ans = [];
  for (let i = 0; i < ansList.length; i++) {
    ans[i] = ansList[i];
  }
  return ans;
}

/**
 * 思路：模拟
 * 时间复杂度：O(n)，空间复杂度：O(1)
 */
