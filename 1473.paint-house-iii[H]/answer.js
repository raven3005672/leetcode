/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function (houses, cost, m, n, target) {
  const INFTY = Number.MAX_VALUE;

  // 将颜色调整为从 0 开始编号，没有被涂色标记为 -1
  for (let i = 0; i < m; ++i) {
    --houses[i];
  }

  // dp 所有元素初始化为极大值
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0).map(() => new Array(target).fill(INFTY)));
  const best = new Array(m).fill(0).map(() => new Array(target).fill(0).map(() => new Array(3).fill(INFTY)));
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < target; ++j) {
      // best[i][j][0] = best[i][j][2] = INFTY;
      best[i][j][1] = -1;
    }
  }

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (houses[i] !== -1 && houses[i] !== j) {
        continue;
      }

      for (let k = 0; k < target; ++k) {
        if (i === 0) {
          if (k === 0) {
            dp[i][j][k] = 0;
          }
        } else {
          dp[i][j][k] = dp[i - 1][j][k];
          if (k > 0) {
            // 使用 best(i-1,k-1) 直接得到 dp(i,j,k) 的值
            const first = best[i - 1][k - 1][0];
            const firstIdx = best[i - 1][k - 1][1];
            const second = best[i - 1][k - 1][2];
            dp[i][j][k] = Math.min(dp[i][j][k], (j === firstIdx ? second : first));
          }
        }

        if (dp[i][j][k] !== INFTY && houses[i] === -1) {
          dp[i][j][k] += cost[i][j];
        }

        // 用 dp(i,j,k) 更新 best(i,k)
        const first = best[i][k][0];
        const firstIdx = best[i][k][1];
        const second = best[i][k][2];
        if (dp[i][j][k] < first) {
          best[i][k][2] = first;
          best[i][k][0] = dp[i][j][k];
          best[i][k][1] = j;
        } else if (dp[i][j][k] < second) {
          best[i][k][2] = dp[i][j][k];
        }
      }
    }
  }
  let ans = INFTY;
  for (let j = 0; j < n; ++j) {
    ans = Math.min(ans, dp[m - 1][j][target - 1]);
  }
  return ans === INFTY ? -1 : ans;
};
