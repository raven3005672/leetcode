/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  const n = nums.length;
  let left1 = 0, left2 = 0, right = 0;
  let sum1 = 0, sum2 = 0;
  let ret = 0;
  while (right < n) {
    sum1 += nums[right];
    while (left1 <= right && sum1 > goal) {
      sum1 -= nums[left1];
      left1++;
    }
    sum2 += nums[right];
    while (left2 <= right && sum2 >= goal) {
      sum2 -= nums[left2];
      left2++;
    }
    ret += left2 - left1;
    right++;
  }
  return ret;
};
