/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
  //曼哈顿距离|r0-r|+|c0-c|
  var res = [];
  var count = 0;
  for (var r = 0; r < R; r++) {
    for (var c = 0; c < C; c++) {
      res[count++] = [r, c];
    }
  }
  res.sort((a, b) => {
    var tempa = Math.abs(r0 - a[0]) + Math.abs(c0 - a[1]);
    var tempb = Math.abs(r0 - b[0]) + Math.abs(c0 - b[1]);
    return tempa - tempb;
  });
  return res;
};

/**
 * 思路：
 * 1.直接排序
 * 时间复杂度：O(R * C * log(R * C))，空间复杂度：O(log(R * C))
 *
 * 2.桶排序
 * 按照曼哈顿距离分桶
 * 时间复杂度：O(R * C)，空间复杂度：O(R * C)
 *
 * 3.几何法
 * 根据曼哈顿距离做广度优先遍历
 * 时间复杂度：O((R + C) ^ 2)，空间复杂度：O(1)
 */

function allCellsDistOrder(R, C, r0, c0) {
  const dr = [1, 1, -1, -1];
  const dc = [1, -1, -1, 1];
  let maxDist = Math.max(r0, R - 1 - r0) + Math.max(c0, C - 1 - c0);
  let ret = [];
  let row = r0, col = c0;
  ret.push([row, col]);
  for (let dist = 1; dist <= maxDist; dist++) {
    row--;
    for (let i = 0; i < 4; i++) {
      while ((i % 2 == 0 && row != r0) || (i % 2 != 0 && col != c0)) {
        if (row >= 0 && row < R && col >= 0 && col < C) {
          ret.push([row, col]);
        }
        row += dr[i];
        col += dc[i];
      }
    }
  }
  return ret;
}
