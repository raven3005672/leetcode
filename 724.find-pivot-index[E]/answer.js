/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  //复杂度O(n):先计算数组总和，再遍历累加当前元素左侧值与sum进行比较
  var sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  var temp = 0;
  for (var i = 0; i < nums.length; i++) {
    if (i > 0) {
      temp += nums[i - 1];
    }
    if (sum - nums[i] === temp * 2) {
      return i;
    }
  }
  return -1;
};