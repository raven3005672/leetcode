/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let n = citations.length, tot = 0;
  const counter = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    if (citations[i] >= n) {
      counter[n]++;
    } else {
      counter[citations[i]]++;
    }
  }
  for (let i = n; i >= 0; i--) {
    tot += counter[i];
    if (tot >= i) {
      return i;
    }
  }
  return 0;
};
