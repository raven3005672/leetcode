/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const rob = (nums) => {
    const size = nums.length;
    if (size === 1) {
      return nums[0];
    }

    let [first, second] = [nums[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < size; i++) {
      [first, second] = [second, Math.max(first + nums[i], second)];
    }
    return second;
  }

  const n = nums.length;
  let ans = 0;
  nums.sort((a, b) => a - b);
  total = [nums[0]];

  for (let i = 1; i < n; i++) {
    const val = nums[i];
    if (val === nums[i - 1]) {
      total[total.length - 1] += val;
    } else if (val === nums[i - 1] + 1) {
      total.push(val);
    } else {
      ans += rob(total);
      total = [val];
    }
  }
  ans += rob(total);
  return ans;
};
