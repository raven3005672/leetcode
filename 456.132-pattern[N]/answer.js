/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  if (nums.length < 3) {
    return false;
  }
  let minValue = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    minValue = Math.min(...[minValue, nums[i]]);
    if (nums[i + 1] - minValue >= 2) {
      for (let j = i + 2; j < nums.length; j++) {
        if (nums[j] > minValue && nums[j] < nums[i + 1]) {
          return true;
        }
      }
    }
  }
  return false;
};
