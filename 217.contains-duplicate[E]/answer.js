/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return true
    } else {
      map[nums[i]] = true;
    }
  }
  return false;
};

/**
 * 思路：排序
 * 时间复杂度：O(NlogN)，空间复杂度：O(logN)
 * 思路：哈希
 * 时间复杂度：O(N)，空间复杂度：O(N)
 */