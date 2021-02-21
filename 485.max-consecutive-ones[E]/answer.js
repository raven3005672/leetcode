/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0, count = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      maxCount = Math.max(maxCount, count);
      count = 0;
    }
  }
  maxCount = Math.max(maxCount, count);
  return maxCount;
};
