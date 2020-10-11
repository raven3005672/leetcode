/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = nums.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
  if (sum % 2 === 1) {
    return false;
  }
  let target = sum / 2;
  let arr = nums.sort((a,b) => b-a);
  let dp = [];
  dp[0] = true;
  if (arr[0] <= target) {
    dp[arr[0]] = true;
  }
  for (let i = 1; i < arr.length; i++) {
    for (let j = target; arr[i] <= j; j--) {
      if (dp[target]) {
        return true;
      }
      dp[j] = dp[j] || dp[j - arr[i]];
    }
  }
  return dp[target] ? dp[target] : false;
};

/*
 * 思路：先排序 后动态规划
 * dp定义，dp[i]表示当前数组是否可以组成合为i的组合
 * 初始值，dp[0] = true，即目标值为0，什么都元素都不选
 * 如果第一个元素arr[0]小于等于目标值，则以选中此元素开始模拟，即dp[arr[0]] = true
 * 转换方程：dp[target] = dp[target] || dp[target - current]
 * dp[目标值] = dp[目标值 - 当前值] = dp[新目标值]
 */
