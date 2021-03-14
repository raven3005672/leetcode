/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  let arr = [];
  for (let i = 0; i < S.length; i++) {
    if (!arr.length) {
      arr.push(S[i]);
    } else {
      if (S[i] === arr[arr.length - 1]) {
        arr.pop();
      } else {
        arr.push(S[i]);
      }
    }
  }
  return arr.join('');
};