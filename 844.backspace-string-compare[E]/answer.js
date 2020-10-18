/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {

};

/*
 * 思路1：栈处理
 * 字符串入栈，#号出栈
 * 时间复杂度：O(N+M)，空间复杂度：O(N+M)
 */

var backspaceCompare = function (S, T) {
  return build(S) === build(T);
}

function build(str) {
  const ret = [];
  for (let char of str) {
    if (char !== '#') {
      ret.push(char);
    } else if (ret.length !== 0) {
      ret.pop();
    }
  }
  return ret.join();
}

/*
 * 思路2：双指针
 * 逆序遍历，遇到#则单独向前，直到遍历结束
 * 时间复杂度：O(N+M)，空间复杂度：O(1)
 */

var backspaceCompare = function (S, T) {
  let i = S.length - 1, j = T.length - 1;
  let skipS = 0, skipT = 0;
  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (S.charAt(i) === '#') {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else {
        break;
      }
    }
    while (j >= 0) {
      if (T.charAt(j) === '#') {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else {
        break;
      }
    }
    if (i >= 0 && j >= 0) {
      if (S.charAt(i) != T.charAt(j)) {
        return false;
      }
    } else {
      if (i >= 0 || j >= 0) {
        return false;
      }
    }
    i--;
    j--;
  }
  return true;
}
