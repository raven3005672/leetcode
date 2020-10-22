/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  const last = new Array(26);
  const length = S.length;
  const codePointA = 'a'.codePointAt(0);
  for (let i = 0; i < length; i++) {
      last[S.codePointAt(i) - codePointA] = i;
  }
  const partition = [];
  let start = 0, end = 0;
  for (let i = 0; i < length; i++) {
      end = Math.max(end, last[S.codePointAt(i) - codePointA]);
      if (i == end) {
          partition.push(end - start + 1);
          start = end + 1;
      }
  }
  return partition;
};

/*
 * 思路：贪心算法 + 双指针
 * 从左到右遍历字符串，遍历的同时维护当前字母的开始下标和结束下标[start, end]
 * 对于每个访问到的字母c，得到当前字母的最后一次出现的下标位置
 * 当前片段的结束下标一定不会小于当前字母的最后一次出现下标 endc = max(end, endc)
 * 当访问到下标end时，当前片段访问结束，当前片段的下标范围[start, end]，长度为end-start+1，然后令start=end+1，继续寻找下一段
 * 时间复杂度：O(n)，空间复杂度：O(Σ) O(26)
 */
