/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  const len = nums.length
  if (!len) return [];
  for (let i = 0, j = len - 1; i < len, j >= 0, i < j; i = nums[i] % 2 + i, j = j - (nums[j] + 1) % 2) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  return nums
};
