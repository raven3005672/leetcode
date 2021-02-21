/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  let aa = nums.length * nums[0].length;
  if (aa !== r * c) return nums;
  let res = [];
  let data = nums.reduce((a, b) => { return a.concat(b) }, [])
  for (let i = 0; i < r; i++) {
    res[i] = [];
    for (let j = 0; j < c; j++) {
      res[i][j] = data.shift();
    }
  }
  return res;
};