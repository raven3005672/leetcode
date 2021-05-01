/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  var a = Math.ceil(Math.sqrt(c));
  var b = 0;
  while (a >= b) {
    var temp = a ** 2 + b ** 2;
    if (temp === c) return true;
    if (temp < c) b++;
    if (temp > c) a--;
  }
  return false;
};

var judgeSquareSum = function (c) {
  for (let a = 0; a * a <= c; a++) {
    const b = Math.sqrt(c - a * a);
    if (b === parseInt(b)) {
      return true;
    }
  }
  return false;
};
