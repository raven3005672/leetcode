/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function(A, B) {
  let check = new Array(26).fill(0),
      res = [];
  for(let i = 0; i < B.length; i++){
      let temp = new Array(26).fill(0);
      for(let j = 0; j < B[i].length; j++){
          temp[B[i][j].charCodeAt() - 97]++;
      }
      for(let j = 0; j < 26; j++){
          check[j] = Math.max(check[j], temp[j]);
      }
  }
  for(let i = 0; i < A.length; i++){
      let temp = new Array(26).fill(0),
          isRight = true;
      for(let j = 0; j < A[i].length; j++){
          temp[A[i][j].charCodeAt() - 97]++;
      }
      for(let j = 0; j < 26; j++){
          if(temp[j] < check[j]){
              isRight = false;
              break ;
          }
      }
      isRight && res.push(A[i]);
  }
  return res;
};

/**
 * 思路：
 * 时间复杂度：O(A+B)，空间复杂度：O(A.length + B.length)
 */