/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  if (b == 0) {
    return a;
  }
  var step1 = 0, step2 = 0, step3 = 0;
  while (b != 0) {
    step1 = a ^ b;
    step2 = a & b;
    step3 = step2 << 1;
    a = step1;
    b = step3;
  }
  return step1;
};

/*
 * 思路：位运算
 */