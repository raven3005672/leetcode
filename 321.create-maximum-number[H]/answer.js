/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
  const m = nums1.length, n = nums2.length;
  const maxSubsequence = new Array(k).fill(0);
  let start = Math.max(0, k - n), end = Math.min(k, m);
  for (let i = start; i <= end; i++) {
      const subsequence1 = new MaxSubsequence(nums1, i);
      const subsequence2 = new MaxSubsequence(nums2, k - i);
      const curMaxSubsequence = merge(subsequence1, subsequence2);
      if (compare(curMaxSubsequence, 0, maxSubsequence, 0) > 0) {
          maxSubsequence.splice(0, k, ...curMaxSubsequence);
      }
  }
  return maxSubsequence;
};

var MaxSubsequence = function(nums, k) {
  const length = nums.length;
  const stack = new Array(k).fill(0);
  let top = -1;
  let remain = length - k;
  for (let i = 0; i < length; i++) {
      const num = nums[i];
      while (top >= 0 && stack[top] < num && remain > 0) {
          top--;
          remain--;
      }
      if (top < k - 1) {
          stack[++top] = num;
      } else {
          remain--;
      }
  }
  return stack;
}

const merge = (subsequence1, subsequence2) => {
  const x = subsequence1.length, y = subsequence2.length;
  if (x === 0) {
      return subsequence2;
  }
  if (y === 0) {
      return subsequence1;
  }
  const mergeLength = x + y;
  const merged = new Array(mergeLength).fill(0);
  let index1 = 0, index2 = 0;
  for (let i = 0; i < mergeLength; i++) {
      if (compare(subsequence1, index1, subsequence2, index2) > 0) {
          merged[i] = subsequence1[index1++];
      } else {
          merged[i] = subsequence2[index2++];
      }
  }
  return merged;
}

const compare = (subsequence1, index1, subsequence2, index2) => {
  const x = subsequence1.length, y = subsequence2.length;
  while (index1 < x && index2 < y) {
      const difference = subsequence1[index1] - subsequence2[index2];
      if (difference !== 0) {
          return difference;
      }
      index1++;
      index2++;
  }
  return (x - index1) - (y - index2);
}

/**
 * 思路：单调栈
 * 为了找到长度为 k 的最大数，需要从两个数组中分别选出最大的子序列，这两个子序列的长度之和为 k，然后将这两个子序列合并得到最大数。两个子序列的长度最小为 0，最大不能超过 k 且不能超过对应的数组长度。
 * 令数组 nums1 的长度为 m，数组 nums2 的长度为 n，则需要从数组 nums1中选出长度为 x 的子序列，以及从数组 nums2 中选出长度为 y 的子序列，其中 x+y=k，且满足 0≤x≤m 和 0≤y≤n。
 * 需要遍历所有可能的 x 和 y 的值，对于每一组 x 和 y 的值，得到最大数。在整个过程中维护可以通过拼接得到的最大数。
 * 对于每一组 x 和 y 的值，得到最大数的过程分成两步，第一步是分别从两个数组中得到指定长度的最大子序列，第二步是将两个最大子序列合并。
 * 第一步可以通过单调栈实现。单调栈满足从栈底到栈顶的元素单调递减，从左到右遍历数组，遍历过程中维护单调栈内的元素，需要保证遍历结束之后单调栈内的元素个数等于指定的最大子序列的长度。遍历结束之后，将从栈底到栈顶的元素依次拼接，即得到最大子序列。
 * 第二步需要自定义比较方法。首先比较两个子序列的当前元素，如果两个当前元素不同，则选其中较大的元素作为下一个合并的元素，否则需要比较后面的所有元素才能决定选哪个元素作为下一个合并的元素。
 * 时间复杂度：O(k(m+n+k^2))O，空间复杂度：O(k)
 */