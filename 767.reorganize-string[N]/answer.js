/**
 * @param {string} S
 * @return {string}
 */
const getIdx = (c) => c.charCodeAt() - 'a'.charCodeAt();
const getAlpha = (c) => String.fromCharCode(c);
var reorganizeString = function (S) {
  if (S.length < 2) {
    return S;
  }
  const counts = new Array(26).fill(0);
  let maxCount = 0;
  const length = S.length;
  for (let i = 0; i < length; i++) {
    const c = S.charAt(i);
    counts[getIdx(c)]++;
    maxCount = Math.max(maxCount, counts[getIdx(c)]);
  }
  if (maxCount > Math.floor((length + 1) / 2)) {
    return "";
  }
  const reorganizeArray = new Array(length);
  let evenIndex = 0, oddIndex = 1;
  const halfLength = Math.floor(length / 2);
  for (let i = 0; i < 26; i++) {
    const c = getAlpha('a'.charCodeAt() + i);
    while (counts[i] > 0 && counts[i] <= halfLength && oddIndex < length) {
      reorganizeArray[oddIndex] = c;
      counts[i]--;
      oddIndex += 2;
    }
    while (counts[i] > 0) {
      reorganizeArray[evenIndex] = c;
      counts[i]--;
      evenIndex += 2;
    }
  }
  return reorganizeArray.join('');
};

/**
 * 思路：基于计数的贪心算法
 * 首先统计每个字母的出现次数，然后根据每个字母的出现次数重构字符串。
 * 当 n 是奇数且出现最多的字母的出现次数是 (n+1)/2 时，出现次数最多的字母必须全部放置在偶数下标，否则一定会出现相邻的字母相同的情况。其余情况下，每个字母放置在偶数下标或者奇数下标都是可行的。
 * 维护偶数下标 evenIndex 和奇数下标 oddIndex，初始值分别为 0 和 1。遍历每个字母，根据每个字母的出现次数判断字母应该放置在偶数下标还是奇数下标。
 * 首先考虑是否可以放置在奇数下标。根据上述分析可知，只要字母的出现次数不超过字符串的长度的一半（即出现次数小于或等于 n/2），就可以放置在奇数下标，只有当字母的出现次数超过字符串的长度的一半时，才必须放置在偶数下标。
 * 字母的出现次数超过字符串的长度的一半只可能发生在 n 是奇数的情况下，且最多只有一个字母的出现次数会超过字符串的长度的一半。
 * 因此通过如下操作在重构的字符串中放置字母。
 * 如果字母的出现次数大于 0 且小于或等于 n/2，且 oddIndex 没有超出数组下标范围，则将字母放置在 oddIndex，然后将 oddIndex 的值加 2。
 * 如果字母的出现次数大于 n/2，或 oddIndex 超出数组下标范围，则将字母放置在 evenIndex，然后将 evenIndex 的值加 2。
 * 如果一个字母出现了多次，则重复上述操作，直到该字母全部放置完毕。
 * 那么上述做法是否可以确保相邻的字母都不相同？考虑以下三种情况。
 * 如果 n 是奇数且存在一个字母的出现次数为 (n+1)/2，则该字母全部被放置在偶数下标，其余的 (n−1)/2 个字母都被放置在奇数下标，因此相邻的字母一定不相同。
 * 如果同一个字母全部被放置在奇数下标或全部被放置在偶数下标，则该字母不可能在相邻的下标出现。
 * 如果同一个字母先被放置在奇数下标直到奇数下标超出数组下标范围，然后被放置在偶数下标，由于该字母的出现次数不会超过 n/2，因此该字母的最小奇数下标与最大偶数下标之差不小于 3，不可能在相邻的下标出现。
 * 时间复杂度：O(n+∣Σ∣)，空间复杂度：O(∣Σ∣)
 */
