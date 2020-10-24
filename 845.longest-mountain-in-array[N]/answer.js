/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
  let n = A.length;
  let ans = 0;
  let left = 0;
  while (left + 2 < n) {
    let right = left + 1;
    if (A[left] < A[left + 1]) {
      while (right + 1 < n && A[right] < A[right + 1]) {
        right++;
      }
      if (right < n - 1 && A[right] > A[right + 1]) {
        while (right + 1 < n && A[right] > A[right + 1]) {
          right++;
        }
        ans = Math.max(ans, right - left + 1);
      } else {
        right++;
      }
    }
    left = right;
  }
  return ans;
};

/*
 * 思路：一次遍历
 * 时间复杂度：O(n)，空间复杂度：O(1)
 */