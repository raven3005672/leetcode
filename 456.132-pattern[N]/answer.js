/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  if (nums.length < 3) {
    return false;
  }
  let minValue = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    minValue = Math.min(...[minValue, nums[i]]);
    if (nums[i + 1] - minValue >= 2) {
      for (let j = i + 2; j < nums.length; j++) {
        if (nums[j] > minValue && nums[j] < nums[i + 1]) {
          return true;
        }
      }
    }
  }
  return false;
};

/*
 * 思路
 * 我们首先考虑 a[i] < a[j] 的部分。当我们固定了 j 时，我可以在 j 的左侧找出一个最小的数作为 a[i]，这是因为最终我们需要满足 a[i] < a[k] < a[j]，那么 a[i] 一定越小越好。
 * 因此我们可以对数组 a 维护前缀最小值，即 min[j] = min(a[1 .. j])，这样对于一个固定的 j，min[j] 即为最优的 a[i]。
 * 随后我们再考虑 a[k]，其中 a[k] 需要满足 a[i] < a[k] < a[j]，即 min[j] < a[k] < a[j]。我们可以从数组 a 的末尾开始，从后向前寻找 a[k]。
 * 我们可以用栈来存储所有的 a[k]。在栈中，所有候选的 a[k] 保持降序，即栈顶的元素最小，栈底的元素最大。即如果我们遇到一个新的 a[k]，那么我们会将栈顶的元素依次出栈，直到新的 a[k] 为栈中的最小元素。
 * 我们在从右向左遍历数组 a 时，假设我们当前位于 a[j]，首先我们判断是否有 nums[j] > min[j]，如果不成立，那么我们要跳过这个 a[j]，否则我们将栈顶的元素依次出栈，直到栈顶元素 stack[top] 满足 stack[top] > min[j]。
 * 在这之后，我们可以确定栈中的所有元素都大于 min[j]（即 num[i]），因此如果此时栈顶的元素和 j 可以满足 132 模式，那么我们就找到了一组合法的满足 132 模式的 i, j, k，否则我们继续寻找，此时需要把 a[j] 入栈。
 * 如果在遍历结束后，我们仍然没有找到满足 132 模式的 i, j, k，那么我们需要返回 False。
 * 时间复杂度：O(N)，空间复杂度：O(N)
 */
