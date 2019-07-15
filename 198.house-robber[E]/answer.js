/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = [];        // 定义的状态，一维数组表示
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(...nums);
    dp[0] = nums[0];                            // 第0阶段的，状态值
    dp[1] = Math.max(nums[0], nums[1]);         // 第1阶段的，状态值
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);   // 状态转移方程
    }
    console.log(dp);
    return dp[nums.length - 1];
};

// 思路：动态规划
// 动态规划方程：dp[n] = Max(dp[n-1], dp[n-2] + num)
// 由于不可以在相邻的房屋闯入，所以在当前位置n房屋可盗窃的最大值，要么就是n-1房屋可盗窃的最大值，要么就是n-2房屋可盗窃的最大值加上当前房屋的值，二者之间取最大值
// 时间复杂度O(n)，n为数组长度
