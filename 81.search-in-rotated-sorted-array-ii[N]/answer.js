/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    let mid;
    while(left <= right) {
        mid = ~~((left + right) / 2);
        if (nums[mid] == target) return true;
        if (nums[left] == nums[mid]) {
            left++;
        } else if (nums[left] < nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else if (nums[left] > nums[mid]) {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return false;
};

// 二分查找
// nums[start] == nums[mid]分不清前有序还是后有序，此时start++，相当于去掉一个重复的干扰项
// nums[start] < nums[mid]前半有序，如果nums[start] <= target < nums[mid]，则在前半部分找，否则去后半部分找
// nums[start] > nums[mid]后半有序，如果nums[mid] < target < nums[end]，则在后半部分找，否则去前半部分找
