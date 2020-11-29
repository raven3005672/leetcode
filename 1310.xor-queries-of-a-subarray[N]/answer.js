/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
  let n = arr.length;
  let pre = Array(n+1).fill(0);
  for (let i = 1; i <= n; ++i) {
    pre[i] = pre[i - 1] ^ arr[i - 1];
  }
  let ans = [];
  for (const query of queries) {
    ans.push(pre[query[0]] ^ pre[query[1] + 1]);
  }
  return ans;
};

/**
 * 思路：前缀和
 * 我们用数组 pre 表示数组 arr 的「前缀异或和」，即
 * pre[0] = 0
 * per[i] = arr[0] ^ arr[1] ^ ... ^ pre[i-1]
 * 这样当我们要计算 arr[Li] 到 arr[Ri] 的异或值时，我们可以通过
 * pre[Li] ^ pre[Ri + 1] = (arr[0] ^ ... ^ arr[Li-1]) ^ (arr[0] ^ ... ^ arr[Ri])
 *                       = 0 ^ (arr[Li] ^ ... ^ arr[Ri]) 异或运算 a ^ a = 0
 *                       = arr[Li] ^ ... ^ arr[Ri]
 * 时间复杂度：O(N + Q)，空间复杂度：O(N)
 */
