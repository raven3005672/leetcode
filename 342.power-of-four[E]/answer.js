/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  let result = 1;
  while (result < num) {
    result = result * 4;
  }
  return result == num;
};

var isPowerOfFour = function (n) {
  return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1;
};
