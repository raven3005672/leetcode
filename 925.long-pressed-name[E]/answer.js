/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  const n = name.length, m = typed.length;
  let i = 0, j = 0;
  while (j < m) {
    if (i < n && name[i] === typed[j]) {
      i++;
      j++;
    } else if (j > 0 && typed[j] === typed[j - 1]) {
      j++;
    } else {
      return false;
    }
  }
  return i === n;
};

/*
 * 思路：双指针
 * 时间复杂度：O(n+m)，空间复杂度：O(1)
 */