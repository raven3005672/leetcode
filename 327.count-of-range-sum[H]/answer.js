/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {

};

/**
 * 思路：归并排序
 * 设前缀和数组为preSum，则问题等价于求所有的下标对(i,j)，满足
 * preSum[j] - preSum[i] ∈ [lower, upper]
 * 我们首先考虑如下的问题：给定两个升序排列的数组n1,n2，试找出所有的下标对(i,j)，满足
 * n2[j] - n1[i] ∈ [lower, upper]
 * 在已知两个数组均为升序的情况下，这一问题是相对简单的：我们在n2中维护两个指针l,r。起初，它们都指向n2的起始位置。
 * 随后，我们考察n1的第一个元素。首先，不断地将指针l向右移动，知道n2[l] >= n1[0] + lower为止，此时，l及其右边的元素均大于或等于n1[0]+lower；
 * 随后，再不断地将指针r向右移动，直到n2[r] > n1[0] + upper为止，则r左边的元素均小于或等于n1[0] + upper。故区间[l,r)中的所有下标j，都满足
 * n2[j] - n1[0] ∈ [lower, upper]
 * 接下来，我们考察n1的第二个元素。由于n1是递增的，不难发现l,r只可能向右移动。因此，我们不断地进行上述过程，并对于n1中的每一个下标，都记录相应的区间[l,r)的大小。
 * 最终，我们就统计得到了满足条件的下标对(i,j)的数量。
 * 在解决这一问题后，原问题就迎刃而解了：我们采用归并排序的方式，能够得到左右两个数组排序后的形式，以及对应的下标对数量。
 * 对于原数组而言，若要找出全部的下标对数量，只需要再额外找出左端点在左侧数组，同时右端点在右侧数组的下标对数量，而这正式我们此前讨论的问题。
 * 时间复杂度：O(N * logN)，空间复杂度：O(N)
 */

const countRangeSumRecursive = (sum, lower, upper, left, right) => {
  if (left === right) {
    return 0;
  } else {
    const mid = Math.floor((left + right) / 2);
    const n1 = countRangeSumRecursive(sum, lower, upper, left, mid);
    const n2 = countRangeSumRecursive(sum, lower, upper, mid + 1, right);
    let ret = n1 + n2;

    // 首先统计下标对的数量
    let i = left;
    let l = mid + 1;
    let r = mid + 1;
    while (i <= mid) {
      while (l <= right && sum[l] - sum[i] < lower) l++;
      while (r <= right && sum[r] - sum[i] <= upper) r++;
      ret += (r - l);
      i++;
    }

    // 随后合并两个排序数组
    const sorted = new Array(right - left + 1);
    let p1 = left, p2 = mid + 1;
    let p = 0;
    while (p1 <= mid || p2 <= right) {
      if (p1 > mid) {
        sorted[p++] = sum[p2++];
      } else if (p2 > right) {
        sorted[p++] = sum[p1++];
      } else {
        if (sum[p1] < sum[p2]) {
          sorted[p++] = sum[p1++];
        } else {
          sorted[p++] = sum[p2++];
        }
      }
    }
    for (let i = 0; i < sorted.length; i++) {
      sum[left + i] = sorted[i];
    }
    return ret;
  }
}
var countRangeSum = function (nums, lower, upper) {
  let s = 0;
  const sum = [0];
  for (const v of nums) {
    s += v;
    sum.push(s);
  }
  return countRangeSumRecursive(sum, lower, upper, 0, sum.length - 1);
};

