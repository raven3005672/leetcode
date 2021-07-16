/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n == 1) {
        return true;
    }
    if (n < 1) {
        return false;
    }
    while(n > 1) {
        if (n % 2 == 1) {
            return false;
        }
        n = n / 2;
    }
    return true;
}

var isPowerOfTwo = function(n) {
  return n > 0 && (n & (n - 1)) === 0;
};

var isPowerOfTwo = function(n) {
  return n > 0 && (n & -n) === n;
};