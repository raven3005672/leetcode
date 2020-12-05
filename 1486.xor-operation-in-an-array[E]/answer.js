/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans ^= (start + i * 2);
  }
  return ans;
};

/**
 * 时间复杂度：O(n)，空间复杂度：O(1)
 */