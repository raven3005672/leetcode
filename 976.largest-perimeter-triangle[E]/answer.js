/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
  A.sort((a, b) => b - a);
  var len = A.length;
  for (i = 0; i < len - 2; i++) {
    if (A[i] < A[i + 1] + A[i + 2]) {
      return A[i] + A[i + 1] + A[i + 2];
    }
  }
  return 0;
};

/**
 * 原理：贪心+排序
 * 时间复杂度：O(NlogN)，空间复杂度：O(1)
 */