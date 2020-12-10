/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const n = s.length;
  const wordDictSet = new Set(wordDict);
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDictSet.has(s.substr(j, i - j))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
};

/**
 * 思路：动态规划
 * 我们定义 dp[i] 表示字符串 s 前 i 个字符组成的字符串 s[0..i−1] 是否能被空格拆分成若干个字典中出现的单词。
 * 从前往后计算考虑转移方程，每次转移的时候我们需要枚举包含位置 i−1 的最后一个单词，看它是否出现在字典中以及除去这部分的字符串是否合法即可。
 * 公式化来说，我们需要枚举 s[0..i−1] 中的分割点 j ，看 s[0..j−1] 组成的字符串 s1（默认 j=0 时 s1 为空串）和 s[j..i−1] 组成的字符串 s2 是否都合法，
 * 如果两个字符串均合法，那么按照定义 s1 和 s2 拼接成的字符串也同样合法。
 * 由于计算到 dp[i] 时我们已经计算出了 dp[0..i−1] 的值，因此字符串 s1 是否合法可以直接由 dp[j] 得知，剩下的我们只需要看 s2 是否合法即可，因此我们可以得出如下转移方程：
 * dp[i]=dp[j] && check(s[j..i−1])
 * 其中 check(s[j..i−1]) 表示子串 s[j..i−1] 是否出现在字典中。
 * 对于检查一个字符串是否出现在给定的字符串列表里一般可以考虑哈希表来快速判断，
 * 同时也可以做一些简单的剪枝，枚举分割点的时候倒着枚举，如果分割点 j 到 i 的长度已经大于字典列表里最长的单词的长度，那么就结束枚举，但是需要注意的是下面的代码给出的是不带剪枝的写法。
 * 对于边界条件，我们定义 dp[0]=true 表示空串且合法。
 * 时间复杂度：O(n^2)，空间复杂度：O(n)
 */