/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
  let stack = [], i = -1
  while (++i < s.length) {
    const n = s[i]
    if (stack.includes(n) === false) {
      let j = stack.length
      while (j-- && stack[j] > n && s.includes(stack[j], i)) stack.pop()
      stack.push(n)
    }
  }
  return stack.join('')
};
