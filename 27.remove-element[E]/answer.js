/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 测试用例
var nums = [3,2,2,3];
var val = 3;
var removeElement = function(nums, val) {
    let j = 0;
    while(j < nums.length) {
        if (nums[j] === val) {
            nums.splice(j, 1);
        } else {
            j++
        }
    }
    return nums.length;
    // 以下双指针法
    // let i = 0, j = 0;
    // while(j < nums.length) {
    //     if (nums[j] === val) {
    //         j++;
    //     } else {
    //         nums[i] = nums[j];
    //         i++;
    //         j++;
    //     }
    // }
    // return i;
};
console.log(removeElement(nums, val))