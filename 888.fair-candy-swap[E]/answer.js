/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  const sumA = _.sum(A), sumB = _.sum(B);
  const delta = Math.floor((sumA - sumB) / 2);
  const rec = new Set(A);
  var ans;
  for (const y of B) {
    const x = y + delta;
    if (rec.has(x)) {
      ans = [x, y];
      break;
    }
  }
  return ans;
};
