/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var paintingPlan = function (n, k) {
  if (k === n * n) return 1;
  let res = 0;
  const C = k => {
    if (k === 0) return 1;
    let num1 = 1, num2 = 1, num3 = 1;
    for (let i = n; i > 0; i--) num1 *= i;
    for (let i = k; i > 0; i--) num2 *= i;
    for (let i = n - k; i > 0; i--) num3 *= i;
    return num1 / (num2 * num3);
  }
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (n * i + (n - i) * j === k) {
        res += C(i) * C(j);
      }
    }
  }
  return res;
};

/**
 * 思路：数学推导
 */