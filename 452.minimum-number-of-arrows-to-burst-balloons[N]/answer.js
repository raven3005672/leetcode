/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (!points.length) {
    return 0;
  }

  points.sort((a, b) => a[1] - b[1]);
  let pos = points[0][1]
  let ans = 1;
  for (let balloon of points) {
    if (balloon[0] > pos) {
      pos = balloon[1];
      ans++;
    }
  }
  return ans;
};

/**
 * 思路：排序 + 贪心算法
 * let points := [[x(0), y(0)], [x(1), y(1)], ... [x(n-1), y(n-1)]]，表示 n 个气球
 * let pos := y(0)，表示当前箭的射出位置
 * let ans := 0，表示射出的箭数
 * 将 points 按照 y 值（右边界）进行升序排序
 * for i := 1 to n-1 do
 *   if x(i) > pos then
 *     ans := ans + 1
 *     pos := y(i)
 *   end if
 * end for
 * return ans
 * 时间复杂度：O(nlogn)，空间复杂度：O(logn)
 */