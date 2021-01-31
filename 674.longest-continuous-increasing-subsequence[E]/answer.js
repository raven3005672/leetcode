/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  //双指针
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  var res = 1;
  var count = 1;
  for (var i = 0, j = 1; i < nums.length - 1 && j < nums.length;) {
    if (nums[i] < nums[j]) {
      i++;
      j++;
      count++;
    } else {
      res = Math.max(count, res);
      count = 1;
      i = j;
      j = i + 1;
    }
  }
  return Math.max(count, res);
};


var findLengthOfLCIS = function (nums) {
  let ans = 0;
  const n = nums.length;
  let start = 0;
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] <= nums[i - 1]) {
      start = i;
    }
    ans = Math.max(ans, i - start + 1);
  }
  return ans;
};
