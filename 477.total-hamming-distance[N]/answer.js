/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
  let ans = 0, n = nums.length;
  for (let i = 0; i < 30; ++i) {
    let c = 0;
    for (const val of nums) {
      c += (val >> i) & 1;
    }
    ans += c * (n - c);
  }
  return ans;
};
