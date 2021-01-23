/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  //全为正或者全为负；一正两负；
  nums.sort((a, b) => a - b);
  var l = nums.length;
  return Math.max(nums[l - 1] * nums[l - 2] * nums[l - 3], nums[l - 1] * nums[0] * nums[1]);
};