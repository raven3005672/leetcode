/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let result = [];
  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      result[i] = 0;
    } else if (i === 1) {
      result[i] = 1;
    } else if (i % 2 === 0) {
      result[i] = result[i / 2];
    } else if (i % 2 === 1) {
      result[i] = result[(i - 1) / 2] + 1;
    }
  }
  return result;
};

var countBits = function(num) {
  const bits = new Array(num + 1).fill(0);
  for (let i = 1; i <= num; i++) {
      bits[i] = bits[i & (i - 1)] + 1;
  }
  return bits;
};






