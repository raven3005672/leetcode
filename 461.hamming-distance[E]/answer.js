/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let result = 0;
  let xor = x ^ y;
  while (xor) {
    xor = xor & (xor - 1);
    result++;
  }
  return result;
};
