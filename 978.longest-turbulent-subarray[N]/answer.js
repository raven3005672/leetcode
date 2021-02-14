/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
  const n = arr.length;
  let ret = 1;
  let left = 0, right = 0;

  while (right < n - 1) {
    if (left == right) {
      if (arr[left] == arr[left + 1]) {
        left++;
      }
      right++;
    } else {
      if (arr[right - 1] < arr[right] && arr[right] > arr[right + 1]) {
        right++;
      } else if (arr[right - 1] > arr[right] && arr[right] < arr[right + 1]) {
        right++;
      } else {
        left = right;
      }
    }
    ret = Math.max(ret, right - left + 1);
  }
  return ret;
};

// 动态规划
// 记 dp[i][0] 为以 arr[i] 结尾，且 arr[i−1] > arr[i] 的「湍流子数组」的最大长度；
// dp[i][1] 为以 arr[i] 结尾，且 arr[i−1] < arr[i] 的「湍流子数组」的最大长度。
var maxTurbulenceSize = function(arr) {
  let ret = 1;
  const n = arr.length;
  let dp0 = 1, dp1 = 1;
  for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
          dp0 = dp1 + 1;
          dp1 = 1;
      } else if (arr[i - 1] < arr[i]) {
          dp1 = dp0 + 1;
          dp0 = 1;
      } else {
          dp0 = 1;
          dp1 = 1;
      }
      ret = Math.max(ret, dp0);
      ret = Math.max(ret, dp1);
  }
  return ret;
};
