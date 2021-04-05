/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  let t = [], ans = [];
  const n = nums.length;
  for (let mask = 0; mask < (1 << n); ++mask) {
    t = [];
    let flag = true;
    for (let i = 0; i < n; ++i) {
      if ((mask & (1 << i)) != 0) {
        if (i > 0 && (mask >> (i - 1) & 1) == 0 && nums[i] == nums[i - 1]) {
          flag = false;
          break;
        }
        t.push(nums[i]);
      }
    }
    if (flag) {
      ans.push(t.slice());
    }
  }
  return ans;
};


var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  let t = [], ans = [];
  const dfs = (choosePre, cur, nums) => {
    if (cur === nums.length) {
      ans.push(t.slice());
      return;
    }
    dfs(false, cur + 1, nums);
    if (!choosePre && cur > 0 && nums[cur - 1] === nums[cur]) {
      return;
    }
    t.push(nums[cur]);
    dfs(true, cur + 1, nums);
    t = t.slice(0, t.length - 1);
  }
  dfs(false, 0, nums);
  return ans;
};


var subsetsWithDup = function (nums) {
  let n = nums.length;
  nums = nums.sort((a, b) => { return a - b });
  let tmpPath = [];
  let res = [];
  let hash = {}
  let backtrack = (tmpPath, start) => {
    res.push(tmpPath);
    for (let i = start; i < n; i++) {
      if (hash[i] || (i > 0 && !hash[i - 1] && nums[i - 1] == nums[i])) continue;
      hash[i] = true;
      tmpPath.push(nums[i]);
      backtrack(tmpPath.slice(), i + 1);
      hash[i] = false;
      tmpPath.pop();
    }
  }
  backtrack(tmpPath, 0);
  return res;
};
