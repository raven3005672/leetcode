/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  const num = new Array(26).fill(0);
  for (let ch of s) {
    num[ch.charCodeAt() - 'a'.charCodeAt()]++;
  }

  let ret = '';
  while (ret.length < s.length) {
    for (let i = 0; i < 26; i++) {
      if (num[i]) {
        ret += String.fromCharCode(i + 'a'.charCodeAt());
        num[i]--;
      }
    }
    for (let i = 25; i >= 0; i--) {
      if (num[i]) {
        ret += String.fromCharCode(i + 'a'.charCodeAt());
        num[i]--;
      }
    }
  }
  return ret;
};

/**
 * 思路：桶计数
 * 每个字符被选择且仅被选择一次；
 * 每一轮会在字符串末尾加入一个先升后降的字符串，且该串的上升部分和下降部分都会尽可能长。
 * 于是我们重复若干轮下述操作，直到每一个字符都被选择过，这样就可以构造出这个字符串：
 * 先从未被选择的字符中提取出最长的上升字符串，将其加入答案。
 * 然后从未被选择的字符中提取出最长的下降字符串，将其加入答案。
 * 注意到在构造时我们只关注字符本身，而不关注字符在原字符串中的位置。
 * 因此我们可以直接创建一个大小为 26 的桶，记录每种字符的数量。每次提取最长的上升或下降字符串时，我们直接顺序或逆序遍历这个桶。
 * 具体地，在遍历桶的过程中，如果当前桶的计数值不为零，那么将当前桶对应的字符加入到答案中，并将当前桶的计数值减一即可。
 * 我们重复这一过程，直到答案字符串的长度与传入的字符串的长度相等。
 * 时间复杂度：O(∣Σ∣×∣s∣)，空间复杂度：O(∣Σ∣)
 */
