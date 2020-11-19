/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let n = nums.length, left = 0, right = 0;
  while (right < n) {
    if (nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
};

/**
 * 思路：双指针
 * 时间复杂度：O(n)，空间复杂度：O(1)
 */