/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  const res = [];
  const n = A.length;
  for (let i = n - 1; i >= 0 || K > 0; --i, K = Math.floor(K / 10)) {
    if (i >= 0) {
      K += A[i];
    }
    res.push(K % 10);
  }
  res.reverse();
  return res;
};
