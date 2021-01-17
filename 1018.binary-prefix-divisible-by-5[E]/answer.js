/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
  const list = [];
  let prefix = 0;
  const length = A.length;
  for (let i = 0; i < length; i++) {
    prefix = ((prefix << 1) + A[i]) % 5;
    list.push(prefix === 0);
  }
  return list;
};
