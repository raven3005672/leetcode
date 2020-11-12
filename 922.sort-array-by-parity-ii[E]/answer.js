/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let len = A.length
  let j = len - 2 // j为偶数的下标
  for (let i = len - 1; i >= 0; i = i - 2) { // i为奇数的下标
    if (A[i] % 2 !== 1) { // 奇数位需要调换的偶数
      while (A[j] % 2 === 0) { // 偶数位不需要调换的偶数
        j = j - 2
      }
      [A[i], A[j]] = [A[j], A[i]];
    }
  }
  return A;
};

/**
 * 思路：双指针
 * 时间复杂度：O(N)，空间复杂度：O(1)
 */