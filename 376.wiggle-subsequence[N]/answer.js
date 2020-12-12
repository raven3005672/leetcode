/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  const n = nums.length;
  if (n < 2) {
      return n;
  }
  let prevdiff = nums[1] - nums[0];
  let ret = prevdiff !== 0 ? 2 : 1;
  for (let i = 2; i < n; i++) {
      const diff = nums[i] - nums[i - 1];
      if ((diff > 0 && prevdiff <= 0) || (diff < 0 && prevdiff >= 0)) {
          ret++;
          prevdiff = diff;
      }
  }
  return ret;
};

/**
 * 思路：贪心
 * 单调增取最大，单调减取最小
 * 时间复杂度：O(n)，空间复杂度：O(1)
 */

// 动态规划
var wiggleMaxLength = function(nums) {
  const n = nums.length;
  if (n < 2) { 
      return n;
  }

  let up = down = 1;
  for (let i = 1; i < n; i++) {
      if (nums[i] > nums[i - 1]) {
          up = down + 1;
      } else if (nums[i] < nums[i - 1]) {
          down = up + 1;
      }
  }
  return Math.max(up, down);
};
