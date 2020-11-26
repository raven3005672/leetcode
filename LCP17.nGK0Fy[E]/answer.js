/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let arr = s.split("");
  let x = 1;
  let y = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'A') {
      x = 2 * x + y;
    } else {
      y = 2 * y + x;
    }
  }
  let num = x + y;
  return num;
};
