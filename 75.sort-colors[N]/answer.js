/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0;
    let n = nums.length;
    for(let i = 0;i < n;i++){
        if(nums[i] === 0){
            [nums[left],nums[i]] = [nums[i],nums[left]];
            left++;
        }
    }
    let right = n - 1;
    for(let i = right;i >= left;i--){
        if(nums[i] === 2){
            [nums[right],nums[i]] = [nums[i],nums[right]];
            right--;
        }
    }
};
