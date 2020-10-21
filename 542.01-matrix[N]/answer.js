/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {

};

/*
 * 思路1：广度优先遍历
 * 找初始矩阵中的所有0位置，之后对这些位置的四个方向做延伸，广度优先遍历
 * 时间复杂度：O(mxn)，空间复杂度：O(mxn)
 */

var dirs = [[-1,0], [1,0], [0,-1], [0,1]];
var updateMatrix = function(matrix) {
  let m = matrix.length, n = matrix[0].length;
  let dist = Array.from({length: m}, () => []);
  let seen = Array.from({length: m}, () => []);
  let queue = [];
  // 将所有的 0 添加进初始队列中
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        dist[i][j] = 0;
        queue.push([i,j]);
        seen[i][j] = true;
      }
    }
  }
  // 广度优先搜索
  while(queue.length) {
    let cell = queue.shift();
    let i = cell[0], j = cell[1];
    for (let d = 0; d < 4; d++) {
      let ni = i + dirs[d][0];
      let nj = j + dirs[d][1];
      if (ni >= 0 && ni < m && nj >= 0 && nj < n && !seen[ni][nj]) {
        dist[ni][nj] = dist[i][j] + 1;
        queue.push([ni, nj]);
        seen[ni][nj] = true;
      }
    }
  }
  return dist;
};

/*
 * 思路2：动态规划
 * 对于矩阵中的任意一个1以及一个0，从一个固定的1走到任意一个0，在距离最短的前提下可能有四种方法：
 * 只有←和↑
 * 只有←和↓
 * 只有→和↑
 * 只有→和↓
 * f(i,j)表示位置(i,j)到最近的0的距离
 * 如果只能←和↑，那么我们可以向上移动一步，再移动f(i-1,j)步到达某一个0，也可以向左移动一步，再移动f(i,j-1)步到达某一个0。
 * 得到状态转移方程
 * (i,j)元素为1，f(i,j) = 1 + min(f(i-1,j),f(i,j-1));
 * (i,j)元素为0，f(i,j) = 0;
 * 对于另外三种移动方式，也可以写出类似的状态转移方程，得到四个f(i,j)的值，那么其中最小的值就表示位置(i,j)到最近的0的距离。
 * 时间复杂度：O(mxn)，空间复杂度：O(1)
 * 实际上存在重复计算，只保留左上方向和右下方向的动态规划过程即可。
 */
​
var dirs = [[-1,0], [1,0], [0,-1], [0,1]];
var updateMatrix = function(matrix) {
  let m = matrix.length, n = matrix[0].length;
  // 初始化动态规划的数组，所有的距离值都设置为一个很大的数
  let dist = Array.from({length: m}, (v, i) => Array.from({length: n}, (vv, j) => {
    if (matrix[i][j] === 0) {
      return 0;
    }
    return Infinity;
  }));
  // 只有 水平向左移动 和 竖直向上移动，注意动态规划的计算顺序
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i - 1 >= 0) {
        dist[i][j] = Math.min(dist[i][j], dist[i - 1][j] + 1);
      }
      if (j - 1 >= 0) {
        dist[i][j] = Math.min(dist[i][j], dist[i][j - 1] + 1);
      }
    }
  }
  // 只有 水平向左移动 和 垂直向下移动，注意动态规划的计算顺序
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      if (i + 1 < m) {
        dist[i][j] = Math.min(dist[i][j], dist[i + 1][j] + 1);
      }
      if (j - 1 >= 0) {
        dist[i][j] = Math.min(dist[i][j], dist[i][j - 1] + 1);
      }
    }
  }
  // 只有 水平向右移动 和 竖直向上移动，注意动态规划的计算顺序
  for (let i = 0; i < m; i++) {
    for (let j = n - 1; j >= 0; j--) {
      if (i - 1 >= 0) {
        dist[i][j] = Math.min(dist[i][j], dist[i - 1][j] + 1);
      }
      if (j + 1 < n) {
        dist[i][j] = Math.min(dist[i][j], dist[i][j + 1] + 1);
      }
    }
  }
  // 只有 水平向右移动 和 竖直向下移动，注意动态规划的计算顺序
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i + 1 < m) {
        dist[i][j] = Math.min(dist[i][j], dist[i + 1][j] + 1);
      }
      if (j + 1 < n) {
        dist[i][j] = Math.min(dist[i][j], dist[i][j + 1] + 1);
      }
    }
  }
  return dist;
}
