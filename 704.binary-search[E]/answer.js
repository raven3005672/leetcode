/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const binarySearch = (nums, target, low, high) => {
        if (low > high) {
            return -1
        }

        let mid = Math.floor((low + high) / 2)

        if (nums[mid] === target) {
            return mid
        }

        return nums[mid] > target ? binarySearch(nums, target, low, mid - 1) :
            binarySearch(nums, target, mid + 1, high)
    }

    return binarySearch(nums, target, 0, nums.length - 1)
};