/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function (A, B) {
  let sortedA = A.slice().sort((a, b) => a - b);
  let sortedB = B.slice().sort((a, b) => a - b);
  let assigned = new Map();
  for (let b of B) {
    assigned.set(b, []);
  }
  let remaining = [];
  let j = 0;
  for (let a of sortedA) {
    if (a > sortedB[j]) {
      assigned.get(sortedB[j++]).push(a);
    } else {
      remaining.push(a);
    }
  }
  let ans = [];
  for (let i = 0; i < B.length; i++) {
    if (assigned.get(B[i]).length) {
      ans[i] = assigned.get(B[i]).shift();
    } else {
      ans[i] = remaining.shift();
    }
  }
  return ans;
};

/**
 * 思路：贪心
 * 如果A中最小的牌a能击败B中最小的牌b，那么我们应当将他们配对。否则，a将无益于我们的比分，因为它无法击败任何牌。
 * 我们为什么要在a>b时将a和b配对呢？这是因为此时在A中的每张牌都比b要大，所以不管我们在b前面放置哪张牌都可以得分。
 * 我们可以用手中最弱的牌来与b配对，这样会使A中剩余的牌严格地变大，因此会有更多得分点。
 * 目前B中要被击败的最小的牌始终是b = sortedB[j]。对于在sortedA中的每张卡a，要么a能够击败牌b(将a放入assigned[b])，要么把a扔掉(将a放入remaining)。
 * 之后我们可以使用此前标注的assigned和remaining来重构答案
 * 时间复杂度：O(N * logN)，空间复杂度：O(N)
 */
