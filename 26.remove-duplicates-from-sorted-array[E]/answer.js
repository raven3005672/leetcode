/**
 * @param {number[]} nums
 * @return {number}
 */
// 测试用例
var nums = [1,1,1,2,3,3,5,6];
var removeDuplicates = function(nums) {
    let i = 0;
    while (nums[i] != undefined) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i+1, 1);
        } else {
            i++;
        }
    }
    return nums.length;
};
// 题解——双指针法
// i,j双指针，i慢指针，j快指针，只要i项等于j项，就增加j以跳过重复项
// 值不相等时，就把当前j的值复制到i+1上，然后递增i，重复以上步骤直到j达到数组尾部

console.log(removeDuplicates(nums))