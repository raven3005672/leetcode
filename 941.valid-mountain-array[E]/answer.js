/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  //一次遍历数组左侧升序与右侧降序
  if (A.length < 3) return false;
  var i = 0;
  while (i < A.length - 1 && A[i] < A[i + 1]) {
    i++;
  }
  if (i === 0 || i === A.length - 1) return false;
  while (i < A.length - 1 && A[i] > A[i + 1]) {
    i++;
  }
  return i === A.length - 1;
};

/*
 * 思路：
 * 时间复杂度：O(n)，空间复杂度：O(1)
 */