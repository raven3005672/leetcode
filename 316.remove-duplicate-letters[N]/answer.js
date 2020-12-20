/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let counts = new Uint8Array(26), stack = [], i = s.length
  while (i--) counts[s.charCodeAt(i) - 97]++
  while (++i < s.length) {
    const n = s.charCodeAt(i)
    counts[n - 97]--
    if (stack.includes(n) === false) {
      let j = stack.length
      while (j-- && stack[j] > n && counts[stack[j] - 97]) stack.pop()
      stack.push(n)
    }
  }
  return String.fromCharCode(...stack)
};
