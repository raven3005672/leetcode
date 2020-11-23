/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  return s.length == t.length && [...s].sort().join('') === [...t].sort().join('')
};

/**
 * 思路：排序
 * 时间复杂度：O(nlogn)，空间复杂度：O(logn)
 */