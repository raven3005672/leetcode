/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  const ret = [];
  const n = s.length;
  let num = 1;
  for (let i = 0; i < n; i++) {
    if (i === n - 1 || s[i] !== s[i + 1]) {
      if (num >= 3) {
        ret.push([i - num + 1, i]);
      }
      num = 1;
    } else {
      num++;
    }
  }
  return ret;
};

var largeGroupPositions = function (S) {
  //双指针
  var res = [];
  var count = 1;
  for (var i = 0, j = 1; i < S.length && j < S.length;) {
    if (S[i] === S[j]) {
      count++;
      if (j === S.length - 1 && count >= 3) {
        res.push([i, j]);
      }
      j++;
    } else {
      if (count >= 3) {
        res.push([i, j - 1]);
      }
      count = 1;
      i = j;
      j = i + 1;
    }
  }
  return res;
};