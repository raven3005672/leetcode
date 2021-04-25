/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
//暴力枚举 + 动态规划优化 2020-12-27
var maxSumSubmatrix = function (matrix, k) {
  // 前面主函数部分其实就是枚举的矩形而已,耐着性子可以看懂,
  // 枚举的矩形巧妙转换为一维数组rowSum，从而可以使用最大子序列和的动规算法去进行优化（执行用时可由300+毫秒优化至100+毫秒）
  // 枚举出的每一个矩形再传递给子函数getMax去得出不大于k的最大值
  let [row, col, max] = [matrix.length, matrix[0].length, -Infinity];
  for (let l = 0; l < col; l++) {
    let rowSum = new Array(row).fill(0);
    for (let r = l; r < col; r++) {
      for (let i = 0; i < row; i++) {
        rowSum[i] += matrix[i][r];
      }
      max = Math.max(max, getMax(rowSum)); //这里getMax送去给子函数
      if (max == k) return max;
    }
  }
  return max == -Infinity ? -1 : max;

  // 这里是子函数，用来求矩形不大于k的最大值
  function getMax(rowSum) {
    // 前面o(n)部分是判定最大子序和是否小于等于k,如果满足就没有必要再进行后面的o(n^2)部分了
    let [max, curr] = [rowSum[0] > k ? -Infinity : rowSum[0], rowSum[0]];
    for (let i = 1; i < rowSum.length; i++) {
      curr = Math.max(rowSum[i], rowSum[i] + curr);
      max = Math.max(curr, max);
    }
    if (max <= k) return max;
    // 后面o(n^2)暴力枚举部分在最大子序和大于k时才有必要使用
    //如果不用前面的最大子序和来优化，光用这里也是可以跑起来的,不过执行用时会变成300+
    max = -Infinity;
    for (let l = 0; l < rowSum.length; l++) {
      curr = 0;
      for (let r = l; r < rowSum.length; r++) {
        curr = rowSum[r] + curr;
        if (curr < k) max = Math.max(curr, max);
        if (curr == k) return max = k;
      }
    }
    return max;
  }
};
