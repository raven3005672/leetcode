/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  if (A.length === 1) {
    return A[0].split('');
  }
  let result = {};
  for (let i = 0; i < A.length; i++) {
    let temp = {};
    if (i === 0) {
      for (let char of A[i]) {
        if (result[char]) {
          result[char]++;
        } else {
          result[char] = 1;
        }
      }
      temp = Object.assign({}, result);
    } else {
      for (let char of A[i]) {
        if (result[char] && !temp[char]) {
          temp[char] = 1;
        } else if (temp[char] && result[char] && (temp[char] < result[char])) {
          temp[char]++;
        }
      }
      result = Object.assign({}, temp);
    }
  }
  let resultArray = [];
  for (let key in result) {
    resultArray = resultArray.concat(Array.from({length: result[key]}, () => key));
  }
  return resultArray;
};

/*
 * 思路
 * 遍历每个单词，对字母计数，结果比较取小
 */
