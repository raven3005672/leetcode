/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  const freq = new Array(100001).fill(0);
  for (const cost of costs) {
    freq[cost]++;
  }
  let count = 0;
  for (let i = 1; i <= 100000; i++) {
    if (coins >= i) {
      const curCount = Math.min(freq[i], Math.floor(coins / i));
      count += curCount;
      coins -= i * curCount;
    } else {
      break;
    }
  }
  return count;
};
