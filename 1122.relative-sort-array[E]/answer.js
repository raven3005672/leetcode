/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr2.length; i++) {
    for (let n = 0; n < arr1.length; n++) {
      if (arr2[i] === arr1[n]) {
        arr.push(arr1[n]);
        arr1.splice(n, 1);
        n = n - 1;
      }
    }
  }
  arr1.sort(function (a, b) {
    return a - b;
  });
  return arr.concat(arr1);
};

/**
 * 思路：计数排序
 * 时间复杂度：O(m+n+upper)，空间复杂度：O(upper)
 */

var relativeSortArray = function (arr1, arr2) {
  let upper = 0;
  for (let x of arr1) {
    upper = Math.max(upper, x);
  }
  let frequency = new Array(upper + 1);
  frequency.fill(0);
  for (let x of arr1) {
    ++frequency[x];
  }
  let ans = new Array(arr1.length);
  let index = 0;
  for (let x of arr2) {
    for (let i = 0; i < frequency[x]; i++) {
      ans[index++] = x;
    }
    frequency[x] = 0;
  }
  for (let x = 0; x <= upper; x++) {
    for (let i = 0; i < frequency[x]; i++) {
      ans[index++] = x;
    }
  }
  return ans;
};
