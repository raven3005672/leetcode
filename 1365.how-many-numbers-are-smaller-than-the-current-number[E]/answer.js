/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const cnt = new Array(101).fill(0);
  const n = nums.length;
  for (let i = 0; i < n; ++i) {
    cnt[nums[i]] += 1;
  }
  for (let i = 1; i <= 100; ++i) {
    cnt[i] += cnt[i - 1];
  }
  const ret = [];
  for (let i = 0; i < n; ++i) {
    ret.push(nums[i] ? cnt[nums[i] - 1] : 0);
  }
  return ret;
};

/*
 * 思路：计数排序
 * 记录频次值，返回小于自身的频次值的和
 * 时间复杂度：O(N + K)，空间复杂度：O(K)
 */