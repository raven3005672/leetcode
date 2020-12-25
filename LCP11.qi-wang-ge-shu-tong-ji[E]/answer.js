/**
 * @param {number[]} scores
 * @return {number}
 */
var expectNumber = function(scores) {
  return Array.from(new Set(scores)).length
};

/**
 * 时间复杂度：O(n)，空间复杂度：O(n)
 */