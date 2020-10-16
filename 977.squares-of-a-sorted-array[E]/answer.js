/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {

};

/*
 * 思路1：直接平方排序
 * 时间复杂度：O(nlogn)，空间复杂度：O(logn)。
 */
var sortedSquares = function(A) {
  return A.map(item => item * item).sort((a, b) => a - b)
};

/*
 * 思路2：双指针
 * 利用数组已经被排序的属性，左右向中间加紧，取较大的平方值放入结果数组
 * 时间复杂度：O(n)，空间复杂度：O(1)
 */

var sortedSquares = function(A) {
  let result = [];
  let left = 0, right = A.length - 1;
  while(left < right) {
    let l_value = Math.pow(A[left], 2);
    let r_value = Math.pow(A[right], 2);
    if (l_value > r_value) {
      result.unshift(l_value);
      left++;
    } else if (l_value < r_value) {
      result.unshift(r_value);
      right--;
    } else {
      result.unshift(l_value);
      result.unshift(r_value);
      left++;
      right--;
    }
  }
  if (left === right) {
    result.unshift(Math.pow(A[left], 2));
  }
  return result;
}
