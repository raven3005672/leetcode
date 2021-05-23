/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
 var xorQueries = function(arr, queries) {
  const n = arr.length;
  const xors = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
      xors[i + 1] = xors[i] ^ arr[i];
  }
  const m = queries.length;
  const ans = new Array(m).fill(0);
  for (let i = 0; i < m; i++) {
      ans[i] = xors[queries[i][0]] ^ xors[queries[i][1] + 1];
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
