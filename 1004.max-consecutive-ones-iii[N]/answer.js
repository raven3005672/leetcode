/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
  const n = A.length;
  let left = 0, lsum = 0, rsum = 0;
  let ans = 0;
  for (let right = 0; right < n; ++right) {
    rsum += 1 - A[right];
    while (lsum < rsum - K) {
      lsum += 1 - A[left];
      ++left;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};

// 获取满足left-right之间的K个0的区间
