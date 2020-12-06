/**
 * @param {number[][]} points
 * @param {string} direction
 * @return {number[]}
 */
var visitOrder = function (points, direction) {
  let n = points.length;
  let used = Array.from({ length: n }).fill(false);
  let order = [];
  let start = 0;
  for (let i = 0; i < n; i++) {
    if (points[i][0] < points[start][0]) {
      start = i;
    }
  }
  used[start] = true;
  order.push(start);
  for (let i = 0; i < direction.length; i++) {
    let nxt = -1;
    if (direction.charAt(i) == 'L') {
      for (let j = 0; j < n; j++) {
        if (!used[j]) {
          if (nxt == -1 ||
            cross(sub(points[nxt], points[start]), sub(points[j], points[start])) < 0
          ) {
            nxt = j;
          }
        }
      }
    } else {
      for (let j = 0; j < n; j++) {
        if (!used[j]) {
          if (nxt == -1 ||
            cross(sub(points[nxt], points[start]), sub(points[j], points[start])) > 0
          ) {
            nxt = j;
          }
        }
      }
    }
    used[nxt] = true;
    order.push(nxt);
    start = nxt;
  }
  for (let i = 0; i < n; i++) {
    if (used[i] == false) {
      order.push_back(i);
    }
  }
  return order;

};

function sub(a, b) {
  // 求点 a 到点 b 的向量
  return [a[0] - b[0], a[1] - b[1]];
}

function cross(a, b) {
  // 求向量 a 到向量 b 的向量叉积
  return a[0] * b[1] - a[1] * b[0]
}

/**
 * 思路：
 * 我们保持一个理想的状态：转向时，剩余的点都位于要求方向的一侧（即剩余点都符合当前这次的转向要求）。那么当前这次转向选择什么点，可以使下一次转向依旧满足这个理想的状态，从而可以不断的递归找下去。
 * 若下一次转向的要求方向是 L (R)，则这次转向的点中选择相对方向最右（最左）的点即可。
 * 如图所示，当前位于 B 点且转向方向为 R，其余点都位于 AB 的右侧，其中点 C、D分别是相对方向最左和最右的点。
 * 若下一次转向方向为 L，则这次选择 D 点，可使剩余点都位于 BD 的左侧；若下一次转向方向为 R，则这次选择 C 点，可使剩余点都位于 BC 的右侧。
 * 时间复杂度：O(N^2)，空间复杂度：O(N)
 */
