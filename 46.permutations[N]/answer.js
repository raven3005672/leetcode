/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let len = nums.length;
    let result = [];
    let tmpPath = [];
    let backtrack = (tmpPath) => {
        if (tmpPath.length == len) {
            result.push(tmpPath);
            return;
        }
        for (let i = 0; i < len; i++) {
            if (!tmpPath.includes(nums[i])) {
                tmpPath.push(nums[i]);
                backtrack(tmpPath.slice());
                tmpPath.pop();
            }
        }
    }
    backtrack(tmpPath);
    return result;
};
