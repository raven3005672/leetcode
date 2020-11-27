/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  for (let x of s) {
    if (s.indexOf(x) === s.lastIndexOf(x)) return x;
  }
  return ' ';
};

/**
 * 思路：哈希表
 */