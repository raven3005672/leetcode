/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      let first = 0,
        second = 0,
        min = Infinity;
      for (let i = nums.length - 2; i > 0; i--) {
        if (nums[i] < nums[i + 1]) {
          first = i;
          break;
        }
      }

      for (let i = first + 1; i < nums.length; i++) {
        const sub = nums[i] - nums[first];
        if (sub > 0 && sub < min) {
          min = sub;
          second = i;
        }
      }

      [nums[first], nums[second]] = [nums[second], nums[first]];

      for (let i = 0; i < nums.length - first; i++) {
        for (let j = first + 1; j < nums.length - i - 1; j++) {
          if (nums[j] > nums[j + 1]) {
            [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
          }
        }
      }

      return nums;
    }
  }

  return nums.sort((a, b) => a - b);
};

/**
 * 算法
 * 我们希望下一个数比当前数大，这样才满足“下一个排列”的定义。因此只需要将后面的【大数】与前面的【小数】交换，就能得到一个更大的数。
 * 我们还希望下一个数增加的幅度尽可能的小，这样才满足“下一个排列与当前排列紧邻”的要求。为了满足这个要求，我们需要：
 * 在尽可能靠右的低位进行叫唤，需要从后向前查找。
 * 将一个尽可能小的【大数】与前面的【小数】交换，将【大数】换到前面后，需要将【大数】后面的所有数重置为升序，升序排列就是最小的排列。
 * 如：123465 =》 123564 =》 123546，以上就是求“下一排列”的分析过程。
 * 
 * 标准的“下一个排列”算法可以描述为：
 * 从后向前查找第一个相邻升序的元素对(i,j)，满足A[i] < A[j]。此时[j, end)必然是降序
 * 在[j, end)从后向前查找第一个满足A[i] < A[k]的k。A[i]、A[k]分别就是上面所说的【小数】、【大数】，将A[i]与A[k]交换
 * 可以断定这时[j, end)必然是降序，逆置[j, end)使其升序。
 * 如果在步骤1找不到符合的相邻元素对，说明当前[begin, end)为一个降序顺序，则直接跳过步骤4
 */
