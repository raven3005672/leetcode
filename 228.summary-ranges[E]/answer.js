/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let start = 0
  let end = 0
  let ans = []
  nums.push(Infinity) //我他妈直接抄小路因为我们要判断nums[i+1]，只能遍历到nums.length-1。后续处理比较麻烦，不如直接给它加个无穷大
  for (let i = 0; i < nums.length - 1; i++) {
    //扩大区间
    end = i
    if (nums[i] + 1 != nums[i + 1]) {
      // 这里需要断开一个区间
      if (start === end) {
        //相等，那就只保存这个数
        ans.push(nums[end] + '')
      } else {
        ans.push(nums[start] + '->' + nums[end])
      }
      //重置新区间，新区间要从下一个开始
      start = end = i + 1
    }
  }
  return ans
};

