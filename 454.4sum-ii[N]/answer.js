/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  const countAB = new Map();
  A.forEach(u => B.forEach(v => countAB.set(u + v, (countAB.get(u + v) || 0) + 1)));
  let ans = 0;
  for (let u of C) {
    for (let v of D) {
      if (countAB.has(-u - v)) {
        ans += countAB.get(-u - v);
      }
    }
  }
  return ans;
};

/**
 * 思路：分组 + 哈希表
 * 我们可以将四个数组分成两部分，A 和 B 为一组，C 和 D 为另外一组。
 * 对于 A 和 B，我们使用二重循环对它们进行遍历，得到所有 A[i]+B[j] 的值并存入哈希映射中。
 * 对于哈希映射中的每个键值对，每个键表示一种 A[i]+B[j]，对应的值为 A[i]+B[j] 出现的次数。
 * 对于 C 和 D，我们同样使用二重循环对它们进行遍历。
 * 当遍历到 C[k]+D[l] 时，如果 −(C[k]+D[l]) 出现在哈希映射中，那么将 −(C[k]+D[l]) 对应的值累加进答案中。
 * 最终即可得到满足 A[i]+B[j]+C[k]+D[l]=0 的四元组数目。
 * 时间复杂度：O(n^2)，空间复杂度：O(n^2)
 */

/**
 * 自己的实现
  var fourSumCount = function (A, B, C, D) {
    let result = 0;
    let map = {};
    for (a of A) {
      for (b of B) {
        if (map[a + b]) {
          map[a + b]++;
        } else {
          map[a + b] = 1;
        }
      }
    }
    for (c of C) {
      for (d of D) {
        let s = -(c + d);
        if (s in map) {
          result += map[s]
        }
      }
    }
    return result
  };
 */
