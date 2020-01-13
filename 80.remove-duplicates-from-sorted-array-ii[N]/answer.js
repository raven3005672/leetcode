/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length;
    nums.sort((a,b) => a-b);
    let remove = 0;
    let lastValueCounts = 1;
    for (let i = 1; i < nums.length - remove; i++) {
        if (nums[i] == nums[i - 1]) {
            lastValueCounts++;
        } else {
            lastValueCounts = 1;
        }
        if (lastValueCounts > 2) {
            nums.push(...nums.splice(i,1));
            lastValueCounts = 2;
            remove++;
            i--;
        }
    }
    return nums.length - remove
};

// 双指针 
var removeDuplicates = function(nums) {
    let len = nums.length;
    if (len <= 2) return len;
    let i = 2, j = 2;
    while (j < len) {
        if (nums[j] != nums[i - 2]) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
    return i;
}