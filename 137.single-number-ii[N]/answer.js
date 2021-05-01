/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const freq = new Map();
  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  let ans = 0;
  for (const [num, occ] of freq.entries()) {
    if (occ === 1) {
      ans = num;
      break;
    }
  }
  return ans;
};


var singleNumber = function (nums) {
  let a = 0, b = 0;
  for (const num of nums) {
    b = ~a & (b ^ num);
    a = ~b & (a ^ num);
  }
  return b;
};
