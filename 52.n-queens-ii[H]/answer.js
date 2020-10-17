/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const columns = new Set();
  const diagonals1 = new Set();
  const diagonals2 = new Set();
  return backtrack(n, 0, columns, diagonals1, diagonals2);
};

const backtrack = (n, row, columns, diagonals1, diagonals2) => {
  if (row === n) {
    return 1;
  } else {
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (columns.has(i)) {
        continue;
      }
      const diagonal1 = row - i;
      if (diagonals1.has(diagonal1)) {
        continue;
      }
      const diagonal2 = row + i;
      if (diagonals2.has(diagonal2)) {
        continue;
      }
      columns.add(i);
      diagonals1.add(diagonal1);
      diagonals2.add(diagonal2);
      count += backtrack(n, row + 1, columns, diagonals1, diagonals2);
      columns.delete(i);
      diagonals1.delete(diagonal1);
      diagonals2.delete(diagonal2);
    }
    return count;
  }
}

/*
 * 思路
 * https://leetcode-cn.com/problems/n-queens-ii/solution/nhuang-hou-ii-by-leetcode-solution/
 */