/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // = 1 输入为 32 位有符号整数，直接返回
    if (divisor === 1) {
      return dividend;
    }
  
    // = -1 输入为 32 位有符号整数，排除 -2^31 直接返回
    if (divisor === -1) {
      if (dividend === -Math.pow(2, 31)) {
        return Math.pow(2, 31) - 1;
      } else {
        return -dividend;
      }
    }
  
    //  判断符号 sign = 1 时 为负
    let sign = (dividend > 0) ^ (divisor > 0);
  
    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);
  
    if (absDivisor > absDividend) {
      return 0;
    }
  
    // 二分查找
    let low = 0;
    let high = Math.pow(2, 31);
  
    while (low < high) {
      let middle = low + Math.floor((high - low) / 2);
      if (middle * absDivisor === absDividend) {
        return sign === 1 ? -middle : middle;
      } else if (middle * absDivisor > absDividend) {
        high = middle;
      } else {
        low = middle + 1;
      }
    }
  
    if (sign === 1) {
      return -low + 1;
    } else {
      return low - 1;
    }
  };