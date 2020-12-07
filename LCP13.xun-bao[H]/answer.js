/**
 * @param {string[]} maze
 * @return {number}
 */
var minimalSteps = function (maze) {
  const dx = [1, -1, 0, 0]
  const dy = [0, 0, 1, -1]

  let n = maze.length
  let m = maze[0].length

  // 机关&石头
  const buttons = new Array()
  const stones = new Array()

  // 起点&终点
  let sx = -1, sy = -1, tx = -1, ty = -1

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maze[i][j] === 'M') {
        buttons.push([i, j])
      }
      if (maze[i][j] === 'O') {
        stones.push([i, j])
      }
      if (maze[i][j] === 'S') {
        sx = i, sy = j
      }
      if (maze[i][j] === 'T') {
        tx = i, ty = j
      }
    }
  }

  // 机关&石头的数量
  let nb = buttons.length, ns = stones.length

  // 判断边界
  function inBound(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m;
  }

  // bfs
  function bfs(x, y, maze) {
    let ret = Array.from(Array(n), () => Array(m).fill(-1))
    ret[x][y] = 0
    const queue = new Array()
    queue.push([x, y])
    while (queue.length) {
      let p = queue.shift()
      let curx = p[0], cury = p[1]
      for (let k = 0; k < 4; k++) {
        let nx = curx + dx[k], ny = cury + dy[k];
        if (inBound(nx, ny) && maze[nx][ny] !== '#' && ret[nx][ny] == -1) {
          ret[nx][ny] = ret[curx][cury] + 1;
          queue.push([nx, ny])
        }
      }
    }
    return ret
  }

  let startDist = bfs(sx, sy, maze)

  // 边界情况：没有机关
  if (nb == 0) {
    return startDist[tx][ty]
  }

  // 从某个机关到其他机关 / 起点与终点的最短距离。
  const dist = Array.from(Array(nb), () => Array(nb + 2).fill(-1))

  // 中间结果
  const dd = new Array(nb)
  for (let i = 0; i < nb; i++) {
    let d = bfs(buttons[i][0], buttons[i][1], maze)
    dd[i] = d
    dist[i][nb + 1] = d[tx][ty]
  }
  for (let i = 0; i < nb; i++) {
    let tmp = -1
    for (let k = 0; k < ns; k++) {
      let midX = stones[k][0], midY = stones[k][1]
      if (dd[i][midX][midY] != -1 && startDist[midX][midY] != -1) {
        if (tmp == -1 || tmp > dd[i][midX][midY] + startDist[midX][midY]) {
          tmp = dd[i][midX][midY] + startDist[midX][midY]
        }
      }
    }
    dist[i][nb] = tmp
    for (let j = i + 1; j < nb; j++) {
      let mn = -1
      for (let k = 0; k < ns; k++) {
        let midX = stones[k][0], midY = stones[k][1]
        if (dd[i][midX][midY] != -1 && dd[j][midX][midY] != -1) {
          if (mn == -1 || mn > dd[i][midX][midY] + dd[j][midX][midY]) {
            mn = dd[i][midX][midY] + dd[j][midX][midY]
          }
        }
      }
      dist[i][j] = mn
      dist[j][i] = mn
    }
  }

  // 无法达成的情形
  for (let i = 0; i < nb; i++) {
    if (dist[i][nb] == -1 || dist[i][nb + 1] == -1) {
      return -1
    }
  }

  // dp 数组， -1 代表没有遍历到
  const dp = Array.from(Array(1 << nb), () => Array(nb).fill(-1))
  for (let i = 0; i < nb; i++) {
    dp[1 << i][i] = dist[i][nb]
  }

  // 由于更新的状态都比未更新的大，所以直接从小到大遍历即可
  for (let mask = 1; mask < (1 << nb); mask++) {
    for (let i = 0; i < nb; i++) {
      // 当前 dp 是合法的
      if ((mask & (1 << i)) != 0) {
        for (let j = 0; j < nb; j++) {
          // j 不在 mask 里
          if ((mask & (1 << j)) == 0) {
            let next = mask | (1 << j)
            if (dp[next][j] == -1 || dp[next][j] > dp[mask][i] + dist[i][j]) {
              dp[next][j] = dp[mask][i] + dist[i][j]
            }
          }
        }
      }
    }
  }
  let ret = -1
  let finalMask = (1 << nb) - 1
  for (let i = 0; i < nb; i++) {
    if (ret == -1 || ret > dp[finalMask][i] + dist[i][nb + 1]) {
      ret = dp[finalMask][i] + dist[i][nb + 1]
    }
  }
  return ret
}

/**
 * 思路：动态规划
 * 题意概述
 * 一个人在迷宫中，要从起点 S 走到终点 T。迷宫有两类特殊点，分别是：
 * M：机关点，需要用石头触发
 * O：石头点，一次可以搬一块石头
 * 只有当所有 M 点均被触发以后，终点才可到达，问起点走到终点的最小代价。
 * 虽然迷宫有很多格子，但是我们实际上的走法只有几种：
 * 从 S 走到 O，我们不会从 S 直接走到 M，因为触发机关要先搬石头
 * 从 O 走到 M
 * 从 M 走到 O
 * 从 M 走到 T
 * 有一点性质很重要，不论我们触发机关还是搬运石头，都不会改变迷宫的连通状态。因此，两个点的最短距离一旦计算出，就不会再改变了。
 * 于是第一步，我们可以做一步预处理——我们计算所有特殊点（包括 M，O，S，T）互相之间的最短距离，即对这里面的每个点做一次 BFS。
 * 这样我们就不需要考虑其他点了。为什么要预处理出这些特殊点两两之间的距离，这个问题会在在下文中解释。
 * 解决这个问题的关键是理解我们要以什么样的策略来取石头和触发机关：
 * 在最开始，我们一定会从 S，经过某一个 O，到达某一个 M。
 * 那么对于特定的 M 来说，我们枚举 O 就可以计算 S−O−M 的最短距离。
 * 那么如果我们要从起点 S 到达 M，一定会选择这条距离最短的路。这样，我们首先得到了 S 到每一个 M 的最短距离。
 * 假定我们已经从起点到达了某个 M 了，接下来需要去其他的 O 点搬石头接着触发其他的机关，这是一个 M-O-M‘ 的路线。同样的道理，对于给定的 M′ ，中间的 O 也是固定的。
 * 即给定 M 和 M′，我们可以确定一个 O，使得 M−O−M′ 距离最短。我们同样可以记录下这个最短距离，即得到了 所有 M 到 M′的最短距离。
 * 最后，所有 M 到 T 的距离在前面已经计算出了。
 * 我们需要所有的 M 都被触发，M 的触发顺序不同会导致行走的路径长度不同。
 * 假设这里一共有 n 个 M，我们用 d(i,j) 表示第 i 个 M 到第 j 个 M 经过某一个 O 的最短距离。因为这里的 n 不大于 16，我们可以使用一个 16 位的二进制数表示状态，这个二进制数的第 i 位为 1 表示第 i 个 M 已经触发，为 0 表示第 i 个 M 还未被触发，记这个二进制数为 mask。
 * 记 Mi 为第 i 个 M（下标从 1 开始），每一个 mask 都可以表示成两个集合，一个已触发集合、一个未触发集合，例如 n = 16，mask=0000 1100 0001 0001 的已触发集合就可以表示为 T = { M1, M5, M11, M12 }，剩下的元素都在未触发集合 U−T 中。
 * 我们定义 f(mask,i) 表示当前在第 i 个 M 处，触发状态为 mask 的最小步数，如果当前 mask 代表的已触发集合为 T，未触发集合为 U−T，则我们可以推出这样的动态规划转移方程：
 * f(mask, i) = min{j∈T, j≠i} { f(mask xor 2^i, j) + d(j, i)}
 * 其中 mask xor 2^i 表示把 Mi 已触发的集合当中去掉，即 mask 这个状态可以由 mask xor 2^i 状态转移得到，转移时我们除了关注触发状态 mask 的变化，我们还关注是从哪一个 M 转移到了 Mi ，我们可以枚举 mask 当中已触发的所有的 Mj(j ≠ i) 作为上一个位置，而 d(j,i) 就是我们从 j 转移到 i 行走的最短步数，我们可以在预处理之后按照我们的策略得到所有的 d(j,i)（如果 i,j 不可达可以设为正无穷），然后 O(1) 查询，这就是预处理的目的。
 * 实际上，在实现的时候，如果我们用记忆化搜索的方式实现，那么我们用到的是上面的转移方程；如果我们使用循环实现的话，也可以使用下面的转移方程，写法类似递推：
 * f(mask | 2^j, j) = min{f(mask, i) + d(i, j)}
 */
