/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, X) {
  let temp_sum = 0;

  let grumpyArr = [];
  let max_X_sum = 0;
  let temp = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i]) {
      if (grumpyArr.length < X) {
        grumpyArr.push(customers[i]);
        temp += customers[i];
      } else {
        let left = grumpyArr.shift();
        grumpyArr.push(customers[i]);
        temp -= left;
        temp += customers[i];
      }
      max_X_sum = Math.max(max_X_sum, temp);
    } else {
      if (grumpyArr.length < X) {
        grumpyArr.push(0);
        temp += 0;
      } else {
        let left = grumpyArr.shift();
        grumpyArr.push(0);
        temp -= left;
        temp += 0;
      }
      max_X_sum = Math.max(max_X_sum, temp);

      temp_sum += customers[i];
    }
  }
  return temp_sum + max_X_sum;
};


