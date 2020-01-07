/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let index = -1;
    var left = 0,right = nums.length;
    while(left < right){
        var mid = ~~((left+right)/2);
        if (nums[mid] == target) {
            index = mid;
            break;
        } else if (nums[mid] > target) {
            if (right == mid) break;
            right = mid;
        } else {
            if (left == mid) break;
            left = mid;
        }
    }
    if (index == -1) {
        return [-1, -1];
    } else {
        left = right = index;
        while (nums[left] == target || nums[right] == target) {
            if (nums[left] == target) {
                left--;
            }
            if (nums[right] == target) {
                right++;
            }
        }
        return [left + 1, right - 1];
    }
};
