/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {

};

/**
 * 思路：回溯法
 * 注意处理边界情况
 */

var isAdditiveNumber = function (num) {
  if (num.length === 0) {
    return true;
  }
  //这里取了等号，是因为长度是奇数的时候，除以二是向下取整
  for (let i = 1; i <= num.length / 2; i++) {
    if (num[0] === '0' && i > 1) {
      return false;
    }
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] === '0' && j - i > 1 || (j - i) > num.length / 2) {
        break;
      }
      let num1 = Number(num.substring(0, i));
      let num2 = Number(num.substring(i, j));
      if (isAdditiveNumberHelper(num.substring(j), num1, num2)) {
        return true;
      }
    }
  }
  return false;
};

function isAdditiveNumberHelper(num, num1, num2) {
  if (num.length === 0) {
    return true;
  }
  return num.startsWith(num1 + num2) && isAdditiveNumberHelper(num.substring((num1 + num2 + '').length), num2, num1 + num2);
}

// 循环形式
var isAdditiveNumber = function (num) {
  if (num.length === 0) {
    return true;
  }
  for (let i = 1; i <= num.length / 2; i++) {
    if (num[0] === '0' && i > 1) {
      return false;
    }
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] === '0' && j - i > 1 || (j - i) > num.length / 2) {
        break;
      }
      let num1 = Number(num.substring(0, i));
      let num2 = Number(num.substring(i, j));
      let temp = num.substring(j);
      while (temp.startsWith(num1 + num2)) {
        let n = num1;
        num1 = num2;
        num2 = num1 + n;
        temp = temp.substring((num2 + '').length);
        if (temp.length === 0) {
          return true;
        }
      }
    }
  }
  return false;
}; 
