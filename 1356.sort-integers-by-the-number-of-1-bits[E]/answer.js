/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  const result = arr.sort((left, right) => {
    let a = left.toString(2).split('').reduce((pre, cur) => { return pre + Number(cur)}, 0);
    let b = right.toString(2).split('').reduce((pre, cur) => { return pre + Number(cur)}, 0);
    if (a == b) {
      return left - right;
    } else {
      return a - b;
    }
  });
  return result;
};
