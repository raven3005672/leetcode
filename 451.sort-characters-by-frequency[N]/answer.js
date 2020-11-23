/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = new Map()
  let ans = ''
  for (let w of s) {
    map.set(w, (map.get(w) || 0) + 1)
  }
  map = new Map([...map].sort((v1, v2) => v2[1] - v1[1]))
  for (let [k, v] of map) {
    for (let i = 0; i < v; i++) {
      ans += k
    }
  }
  return ans
};

/**
 * 思路：哈希表
 * 时间复杂度：O(n)，空间复杂度：O(1)
 */